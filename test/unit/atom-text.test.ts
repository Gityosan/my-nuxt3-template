// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AtomText from '@/components/atom/text.vue'

describe('AtomText', () => {
  it('renders default text correctly', async () => {
    const wrapper = await mountSuspended(AtomText, {
      slots: {
        default: 'Default Text'
      }
    })
    expect(wrapper.text()).toBe('Default Text')
    expect(wrapper.element.tagName).toBe('P')
  })

  it('renders different variants correctly', async () => {
    const variants = ['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'body_l', 'body_m', 'label_l', 'label_m', 'caption_l', 'caption_m', 'button']
    for (const variant of variants) {
      const wrapper = await mountSuspended(AtomText, {
        props: { variant },
        slots: {
          default: `${variant} text`
        }
      })
      expect(wrapper.text()).toBe(`${variant} text`)
      const hasMatchingClass = wrapper.classes().some(className =>
        className.includes(`variant_${variant}`)
      )
      expect(hasMatchingClass).toBe(true)
    }
  })

  it('uses custom tag when provided', async () => {
    const wrapper = await mountSuspended(AtomText, {
      props: { tag: 'span' },
      slots: {
        default: 'Custom tag text'
      }
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders slot content correctly', async () => {
    const wrapper = await mountSuspended(AtomText, {
      slots: {
        default: '<strong>Bold text</strong>'
      }
    })
    expect(wrapper.html()).toContain('<strong>Bold text</strong>')
  })
})
