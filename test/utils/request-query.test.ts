import { queries, requestingWorldQuery, convertToUrlQuery } from '@/utils/request-query';

// queries関数のテスト
describe('queries function', () => {
  it('should return empty string if no arguments are provided', () => {
    expect(queries()).toBe('');
  });

  it('should handle single string argument', () => {
    expect(queries('param1=value1')).toBe('?param1=value1');
  });

  it('should handle multiple string arguments', () => {
    expect(queries('param1=value1', 'param2=value2')).toBe('?param1=value1&param2=value2');
  });

  it('should handle array of strings as arguments', () => {
    expect(queries(['param1=value1', 'param2=value2'])).toBe('?param1=value1&param2=value2');
  });

  it('should handle nested array of strings as arguments', () => {
    // @ts-expect-error
    expect(queries(['param1=value1', ['param2=value2', 'param3=value3']])).toBe(
      '?param1=value1&param2=value2&param3=value3',
    );
  });

  it('should ignore empty strings and nullish values', () => {
    // @ts-expect-error
    expect(queries('param1=value1', '', null, undefined, 'param2=value2')).toBe(
      '?param1=value1&param2=value2',
    );
  });
});

// requestingWorldQuery関数のテスト
describe('requestingWorldQuery function', () => {
  it('should return empty string if VITE_APP_DOMAIN is not defined', () => {
    // @ts-expect-error
    delete import.meta.env.VITE_APP_DOMAIN;
    expect(requestingWorldQuery()).toBe('');
  });

  it('should return correct query for employer domain', () => {
    // @ts-expect-error
    import.meta.env.VITE_APP_DOMAIN = 'employer';
    expect(requestingWorldQuery()).toBe('requesting_world=project_world');
  });

  it('should return correct query for employee domain', () => {
    // @ts-expect-error
    import.meta.env.VITE_APP_DOMAIN = 'employee';
    expect(requestingWorldQuery()).toBe('requesting_world=base_world');
  });

  it('should return empty string for undefined domain', () => {
    // @ts-expect-error
    import.meta.env.VITE_APP_DOMAIN = 'undefined';
    expect(requestingWorldQuery()).toBe('');
  });
});

describe('convertToUrlQuery function', () => {
  it('converts simple objects to URL query strings', () => {
    const params = { name: 'John', age: 30 };
    const queryString = convertToUrlQuery(params);
    expect(queryString).toStrictEqual(['name=John', 'age=30']);
  });

  it('handles nested objects correctly', () => {
    const params = {
      user: {
        name: 'Jane',
        details: { age: 25, city: 'New York' },
      },
    };
    const queryString = convertToUrlQuery(params);
    expect(queryString).toStrictEqual([
      'user[name]=Jane',
      'user[details][age]=25',
      'user[details][city]=New York',
    ]);
  });

  it('handles arrays correctly', () => {
    const params = {
      hobbies: ['reading', 'sports'],
    };
    const queryString = convertToUrlQuery(params);
    expect(queryString).toStrictEqual(['hobbies[]=reading', 'hobbies[]=sports']);
  });

  it('excludes null and undefined values', () => {
    const params = {
      name: 'John',
      age: null,
      city: undefined,
    };
    const queryString = convertToUrlQuery(params);
    // null または undefined の値を持つキーは除外される
    expect(queryString).toStrictEqual(['name=John']);
  });

  it('includes boolean and numeric values', () => {
    const params = {
      active: true,
      count: 0,
    };
    const queryString = convertToUrlQuery(params);
    expect(queryString).toStrictEqual(['active=true', 'count=0']);
  });
});
