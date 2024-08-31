<script setup lang="ts">
import { computed } from 'vue'
import type { TextStyleVariants } from '@/assets/styles/typography.css'
import { textStyle } from '@/assets/styles/typography.css'
import { linkTextStyle } from '@/assets/styles/linkText.css'

const props = withDefaults(defineProps<{
  variant?: Extract<TextStyleVariants['variant'], 'body_l' | 'body_m' | 'label_l' | 'label_m' | 'caption_l' | 'caption_m'>
}>(), {
  variant: 'body_l'
})
const className = computed(() => `${textStyle({ variant: props.variant })} ${linkTextStyle}`)
</script>

<template>
  <NuxtLink :class="className">
    <slot />
  </NuxtLink>
</template>
