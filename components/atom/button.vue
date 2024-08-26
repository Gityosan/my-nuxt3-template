<template>
  <button
    :class="buttonClass"
    @click="$emit('click', $event)"
  >
    <Icon
      v-if="prependIcon"
      :name="prependIcon"
      :class="textStyle({ variant: 'button_icon' })"
    />
    <slot />
    <Icon
      v-if="appendIcon"
      :name="appendIcon"
      :class="textStyle({ variant: 'button_icon' })"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IconifyIcon } from '@iconify/types'
import type { ButtonStyleVariants } from '@/assets/styles/button.css'
import { buttonStyle } from '@/assets/styles/button.css'
import { textStyle } from '@/assets/styles/typography.css'

const props = withDefaults(defineProps<{
  variant?: ButtonStyleVariants['variant']
  size?: ButtonStyleVariants['size']
  prependIcon?: keyof IconifyIcon
  appendIcon?: keyof IconifyIcon
}>(), {
  variant: 'primary',
  size: 'large'
})

const buttonClass = computed(() => buttonStyle({ variant: props.variant, size: props.size }))

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>
