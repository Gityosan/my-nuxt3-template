<script setup lang="ts">
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { styles } from './index.css'
import { globalVars } from '@/assets/styles'

const props = withDefaults(defineProps<{
  options?: { value: string, label: string, selected?: boolean }[]
  modelValue?: any
  label: string
  disabled: boolean
  multiple: boolean
}>(), {
  options: () => [],
  modelValue: null,
  disabled: false,
  multiple: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()
const selectedValue = ref<any>(props.modelValue)
const errorMessage = ref<string | null>(null)
const handleChange = () => {
  emit('update:modelValue', selectedValue.value)
}
</script>

<template>
  <div :class="styles.selectWrapper">
    <div :class="styles.labelContainer">
      <AtomText
        variant="label_l"
        tag="label"
        :name="label"
        :style="assignInlineVars({ fontSize: globalVars.fontSize.body_l, fontWeight: globalVars.fontWeight.bold })"
      >
        {{ label }}
      </AtomText>
      <AtomText
        variant="label_l"
        :style="assignInlineVars({ fontSize: globalVars.fontSize.body_l, color: globalVars.color['error-1'] })"
      >
        ※必須
      </AtomText>
    </div>
    <div :class="styles.selectContainer">
      <select
        :id="label"
        v-model="selectedValue"
        :multiple="multiple"
        :disabled="disabled"
        :aria-disabled="disabled"
        :class="styles.select"
        @change="handleChange"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :selected="option.selected"
        >
          <AtomText>{{ option.label }}</AtomText>
        </option>
      </select>
      <Icon
        name="mingcute:down-line"
        :class="styles.selectIcon"
      />
    </div>
    <AtomText
      v-if="errorMessage"
      variant="caption_l"
      :style="assignInlineVars({ color: globalVars.color['error-1'] })"
    >
      ＊{{ errorMessage }}
    </AtomText>
  </div>
</template>
