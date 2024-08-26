import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

export const borderRadiusProperties = defineProperties({
  properties: {
    borderRadius: {
      zero: '0px',
      small: '8px',
      medium: '16px',
      large: '32px',
      full: '50%'
    }
  }
})
export const borderRadiusSprinkles = createSprinkles(borderRadiusProperties)
