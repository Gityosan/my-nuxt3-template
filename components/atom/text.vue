<template>
  <component
    :is="tag"
    :class="styles"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextStyleVariants } from '@/assets/styles/typography.css'
import { textStyle } from '@/assets/styles/typography.css'

const props = withDefaults(defineProps<{
  variant?: TextStyleVariants['variant']
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'strong'
}>(), {
  variant: 'body_l',
  tag: 'p'
})

const styles = computed(() => textStyle({ variant: props.variant }))
</script>
