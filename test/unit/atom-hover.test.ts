import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AtomHover from '@/components/atom/hover.vue'

describe('AtomHover', () => {
  it('renders slot content', () => {
    const wrapper = mount(AtomHover, {
      slots: {
        default: '<div>Slot content</div>'
      }
    })
    expect(wrapper.html()).toContain('Slot content')
  })

  it('passes isHovering prop to slot', async () => {
    const wrapper = mount(AtomHover, {
      slots: {
        default: `<template #default="{ isHovering }">
          <div>{{ isHovering ? 'Hovering' : 'Not hovering' }}</div>
        </template>`
      }
    })

    expect(wrapper.text()).toBe('Not hovering')

    await wrapper.trigger('mouseenter')
    expect(wrapper.text()).toBe('Hovering')

    await wrapper.trigger('mouseleave')
    expect(wrapper.text()).toBe('Not hovering')
  })

  it('emits mouseenter and mouseleave events', async () => {
    const wrapper = mount(AtomHover)

    await wrapper.trigger('mouseenter')
    expect(wrapper.emitted('mouseenter')).toBeTruthy()

    await wrapper.trigger('mouseleave')
    expect(wrapper.emitted('mouseleave')).toBeTruthy()
  })
})
