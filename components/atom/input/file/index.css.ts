import { style, styleVariants } from '@vanilla-extract/css'
import { globalVars } from '@/assets/styles/globalTheme.css'

export const styles = {
  container: style({
    width: '100%',
    height: '200px',
    backgroundColor: globalVars.color['solid-grey-50'],
    borderRadius: globalVars.borderRadius.small,
    borderWidth: '1px',
    borderStyle: 'dotted',
    borderColor: globalVars.color['solid-grey-100'],
    position: 'relative'
  }),
  image: style({
    maxHeight: '198px'
  }),
  dropZone: style({
    width: '100%',
    height: '100%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '4px',
    transition: 'all 0.3s ease-out'
  }),
  dropZoneVariants: styleVariants({
    active: { backgroundColor: 'rgba(66, 66, 66, 0.8)' },
    hover: { backgroundColor: 'rgba(66, 66, 66, 0.8)', opacity: 0.8 },
    hidden: { opacity: 0 }
  }),
  textVariants: styleVariants({
    white: { color: 'white' },
    grey: { color: '#757575' }
  }),
  fileInput: style({ display: 'none' })
}
