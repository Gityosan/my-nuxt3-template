import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { textStyle } from './typography.css'
import { borderRadiusSprinkles } from './borderRadis.css'
import { colorSprinkles } from './color.css'

export const buttonStyle = recipe({
  base: style([
    textStyle({ variant: 'button' }),
    borderRadiusSprinkles({ borderRadius: 'small' }),
    {
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  ]),
  variants: {
    variant: {
      primary: {
        'backgroundColor': colorSprinkles({ color: 'blue-900' }),
        'color': colorSprinkles({ color: 'white' }),
        ':hover': {
          backgroundColor: colorSprinkles({ color: 'blue-1000' })
        },
        ':active': {
          backgroundColor: colorSprinkles({ color: 'blue-1100' })
        },
        ':focus': {
          backgroundColor: colorSprinkles({ color: 'blue-900' })
        },
        ':disabled': {
          backgroundColor: colorSprinkles({ color: 'black' }),
          opacity: '0.3',
          textDecoration: 'none',
          cursor: 'default'
        }
      },
      secondary: {
        'backgroundColor': colorSprinkles({ color: 'white' }),
        'color': colorSprinkles({ color: 'blue-900' }),
        'borderWidth': '1px',
        'borderStyle': 'solid',
        'borderColor': colorSprinkles({ color: 'blue-900' }),
        ':hover': {
          color: colorSprinkles({ color: 'blue-1000' }),
          borderColor: colorSprinkles({ color: 'blue-1000' }),
          backgroundColor: colorSprinkles({ color: 'blue-200' })
        },
        ':active': {
          color: colorSprinkles({ color: 'blue-1200' }),
          borderColor: colorSprinkles({ color: 'blue-1200' }),
          backgroundColor: colorSprinkles({ color: 'blue-300' })
        },
        ':focus': {
          color: colorSprinkles({ color: 'blue-900' }),
          borderColor: colorSprinkles({ color: 'blue-900' }),
          backgroundColor: colorSprinkles({ color: 'white' })
        },
        ':disabled': {
          color: colorSprinkles({ color: 'solid-grey-420' }),
          borderColor: colorSprinkles({ color: 'solid-grey-420' }),
          backgroundColor: colorSprinkles({ color: 'white' }),
          textDecoration: 'none',
          cursor: 'default'
        }
      },
      tertiary: {
        'backgroundColor': colorSprinkles({ color: 'transparent' }),
        'color': colorSprinkles({ color: 'blue-900' }),
        ':hover': {
          color: colorSprinkles({ color: 'blue-1000' }),
          borderColor: colorSprinkles({ color: 'blue-1000' }),
          backgroundColor: colorSprinkles({ color: 'blue-200' })
        },
        ':active': {
          color: colorSprinkles({ color: 'blue-1200' }),
          borderColor: colorSprinkles({ color: 'blue-1200' }),
          backgroundColor: colorSprinkles({ color: 'blue-300' })
        },
        ':focus': {
          color: colorSprinkles({ color: 'blue-900' }),
          borderColor: colorSprinkles({ color: 'blue-900' }),
          backgroundColor: colorSprinkles({ color: 'transparent' })
        },
        ':disabled': {
          color: colorSprinkles({ color: 'solid-grey-420' }),
          borderColor: colorSprinkles({ color: 'solid-grey-420' }),
          backgroundColor: colorSprinkles({ color: 'transparent' }),
          textDecoration: 'none',
          cursor: 'default'
        }
      }
    },
    size: {
      'large': {
        padding: '16px',
        minWidth: '136px',
        height: '56px',
        borderRadius: '12px'
      },
      'medium': {
        padding: '12px 26px',
        minWidth: '96px',
        height: '48px',
        borderRadius: '8px'
      },
      'small': {
        padding: '8px 12px',
        minWidth: '80px',
        height: '36px',
        borderRadius: '6px'
      },
      'x-small': {
        padding: '7px 8px',
        minWidth: '72px',
        height: '28px',
        borderRadius: '4px'
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large'
  }
})
export type ButtonStyleVariants = NonNullable<Parameters<typeof buttonStyle>[0]>
