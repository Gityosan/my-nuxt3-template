import { style, styleVariants } from '@vanilla-extract/css'

export const styles = {
  container: style({
    width: '100%',
    height: '200px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    border: '1px dotted #e0e0e0',
    position: 'relative'
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

  button: style({
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    cursor: 'pointer'
  }),

  buttonIcon: style({
    marginRight: '8px'
  }),

  fileInput: style({
    display: 'none'
  })
}
