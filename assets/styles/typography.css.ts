import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { globalVars } from './color.css'

const typographyProperties = defineProperties({
  properties: {
    fontSize: {
      heading_xxl: '57px',
      heading_xl: '45px',
      heading_lg: '36px',
      heading_lg_m: '32px',
      heading_md: '32px',
      heading_md_m: '28px',
      heading_sm: '28px',
      heading_sm_m: '24px',
      heading_xs: '24px',
      heading_xs_m: '20px',
      heading_xxs: '20px',
      heading_xxs_m: '16px',
      body_l: '16px',
      body_m: '14px',
      label_l: '14px',
      label_m: '12px',
      caption_l: '12px',
      caption_m: '10px',
      button: '16px'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700'
    },
    lineHeight: {
      level_1: '1.0',
      level_2: '1.2',
      level_3: '1.3',
      level_4: '1.4',
      level_5: '1.5',
      level_6: '1.6',
      level_7: '1.7'
    },
    letterSpacing: {
      base: '0.04em',
      tight: '0.02em'
    }
  }
})

export const typographySprinkles = createSprinkles(typographyProperties)

export const textStyle = recipe({
  base: style([
    {
      fontFamily: 'Noto Sans JP, sans-serif'
    },
    globalVars.color['solid-grey-800']
  ]),
  variants: {
    variant: {
      heading1: [
        typographySprinkles({ fontSize: 'heading_lg', lineHeight: 'level_4', fontWeight: 'normal' }),
        { paddingTop: '64px', paddingBottom: '24px' }
      ],
      heading2: [
        typographySprinkles({ fontSize: 'heading_md', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '64px', paddingBottom: '24px' }
      ],
      heading3: [
        typographySprinkles({ fontSize: 'heading_sm', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '40px', paddingBottom: '24px' }
      ],
      heading4: [
        typographySprinkles({ fontSize: 'heading_xs', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '40px', paddingBottom: '16px' }
      ],
      heading5: [
        typographySprinkles({ fontSize: 'heading_xxs', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '40px', paddingBottom: '16px' }
      ],
      body_l: [
        typographySprinkles({ fontSize: 'body_l', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      body_m: [
        typographySprinkles({ fontSize: 'body_m', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      label_l: [
        typographySprinkles({ fontSize: 'label_l', lineHeight: 'level_5', fontWeight: 'medium', letterSpacing: 'base' })
      ],
      label_m: [
        typographySprinkles({ fontSize: 'label_m', lineHeight: 'level_5', fontWeight: 'medium', letterSpacing: 'base' })
      ],
      caption_l: [
        typographySprinkles({ fontSize: 'caption_l', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'tight' })
      ],
      caption_m: [
        typographySprinkles({ fontSize: 'caption_m', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'tight' })
      ],
      button: [
        typographySprinkles({ fontSize: 'button', lineHeight: 'level_5', fontWeight: 'bold', letterSpacing: 'base' })
      ],
      button_icon: {
        height: '24px',
        width: '24px'
      }
    }
  },
  defaultVariants: {
    variant: 'body_l'
  }
})

export type TextStyleVariants = NonNullable<Parameters<typeof textStyle>[0]>
