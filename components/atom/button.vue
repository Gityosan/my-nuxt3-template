<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonStyleVariants } from '@/assets/styles/button.css'
import { buttonStyle, buttonContentStyle } from '@/assets/styles/button.css'
import { textStyle } from '@/assets/styles/typography.css'

const props = withDefaults(defineProps<{
  tag?: string
  variant?: ButtonStyleVariants['variant']
  size?: ButtonStyleVariants['size']
  prependIcon?: string
  appendIcon?: string
}>(), {
  tag: 'button',
  variant: 'primary',
  size: 'large'
})

const buttonClassName = computed(() => buttonStyle({ variant: props.variant, size: props.size }))

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <component
    :is="tag"
    :class="buttonClassName"
    @click="$emit('click', $event)"
  >
    <Icon
      v-if="prependIcon"
      :name="prependIcon"
      :class="textStyle({ variant: 'button_icon' })"
    />
    <span :class="buttonContentStyle">
      <slot />
    </span>
    <Icon
      v-if="appendIcon"
      :name="appendIcon"
      :class="textStyle({ variant: 'button_icon' })"
    />
  </component>
</template>
