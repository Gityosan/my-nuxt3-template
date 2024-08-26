import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'

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
      label_m: '14px',
      caption_l: '12px',
      caption_m: '12px',
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
      base: '4%',
      tight: '2%'
    }
  }
})

export const typographyStyles = createSprinkles(typographyProperties)

export const textStyle = recipe({
  base: {
    fontFamily: 'Noto Sans JP, sans-serif',
    color: '#333333'
  },
  variants: {
    variant: {
      heading1: [
        typographyStyles({ fontSize: 'heading_lg', lineHeight: 'level_4', fontWeight: 'normal' })
      ],
      heading2: [
        typographyStyles({ fontSize: 'heading_md', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      heading3: [
        typographyStyles({ fontSize: 'heading_sm', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      heading4: [
        typographyStyles({ fontSize: 'heading_xs', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      heading5: [
        typographyStyles({ fontSize: 'heading_xxs', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      body_l: [
        typographyStyles({ fontSize: 'body_l', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      body_m: [
        typographyStyles({ fontSize: 'body_m', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      label_l: [
        typographyStyles({ fontSize: 'label_l', lineHeight: 'level_5', fontWeight: 'medium', letterSpacing: 'base' })
      ],
      label_m: [
        typographyStyles({ fontSize: 'label_m', lineHeight: 'level_5', fontWeight: 'medium', letterSpacing: 'base' })
      ],
      caption_l: [
        typographyStyles({ fontSize: 'caption_l', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'tight' })
      ],
      caption_m: [
        typographyStyles({ fontSize: 'caption_m', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'tight' })
      ],
      button: [
        typographyStyles({ fontSize: 'button', lineHeight: 'level_5', fontWeight: 'bold', letterSpacing: 'base' })
      ]
    }
  },
  defaultVariants: {
    variant: 'body_l'
  }
})

export type TextStyleVariants = RecipeVariants<typeof textStyle>