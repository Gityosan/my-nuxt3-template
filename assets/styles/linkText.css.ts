import { style } from '@vanilla-extract/css'
import { globalVars } from './globalTheme.css'

export const linkTextStyle = style({
  'color': globalVars.color['blue-1000'],
  ':focus': {
    color: globalVars.color['blue-1000'],
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: globalVars.color['focus-yellow'],
    boxSizing: 'content-box'
  },
  ':hover': {
    color: globalVars.color['blue-900'],
    backgroundColor: globalVars.color['solid-grey-50']
  },
  ':active': {
    color: globalVars.color['orange-700']
  },
  ':visited': {
    color: globalVars.color['magenta-900']
  }
})
