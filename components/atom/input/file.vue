<script setup lang="ts">
const props = withDefaults(defineProps<{ modelValue: File | null }>(), { modelValue: null })
const emit = defineEmits<{ (e: 'update:model-value', value: File | null): void }>()
const files = ref<File[]>([])
const imageURL = computed<string>(() => typeSafetyFileUrl(props.modelValue))
const isDropOvering = ref<boolean>(false)
const resetFile = () => {
  files.value = []
  emit('update:model-value', null)
}
const emitFile = () => {
  if (!files.value.length) return
  emit('update:model-value', files.value[0])
}
const onFilePicked = (e: Event) => {
  const pickedFiles = (e.target as HTMLInputElement)?.files
  if (!pickedFiles) return
  if (Array.from(pickedFiles).some(v => v.size >= 5 * 1024 * 1024)) {
    alert('アップロード可能な画像サイズは5MBまでです')
    return
  }
  if (pickedFiles) files.value = [...pickedFiles]
  emitFile()
}
const onDrop = (e: DragEvent) => {
  if (!e.dataTransfer?.files) return
  files.value = [...e.dataTransfer.files]
  emitFile()
  isDropOvering.value = false
}
const onDragOver = (e: DragEvent) => {
  isDropOvering.value = true
}
const onDragLeave = (e: DragEvent) => {
  isDropOvering.value = false
}
</script>

<template>
  <div
    class="w-100 height-200 bg-grey-lighten-4 rounded border-width-1 border-dotted border-grey-lighten-1 position-relative"
  >
    <v-img
      v-if="imageURL"
      :src="imageURL"
      :aspect-ratio="16 / 9"
      class="max-height-198"
    />
    <v-hover v-slot="{ isHovering, props: hover }">
      <div
        class="w-100 h-100 pa-10 d-flex flex-column justify-center align-center position-absolute top-0 left-0 rounded transition-short-ease-out"
        :class="[
          { 'bg-grey-darken-2': isDropOvering || (imageURL && isHovering) },
          isDropOvering || (imageURL && isHovering)
            ? 'opacity-dot8'
            : imageURL
              ? 'opacity-dot0'
              : 'opacity-dot10'
        ]"
        v-bind="hover"
        @drop.stop.prevent="onDrop"
        @dragover.stop.prevent="onDragOver"
        @dragleave.stop.prevent="onDragLeave"
      >
        <atom-text
          text="ここにドラッグ&ドロップ"
          :color="imageURL || isDropOvering ? 'text-white' : 'text-grey-darken-1'"
          line-height="line-height-lg"
          class="mb-4"
        />
        <atom-text
          text="または"
          :color="imageURL || isDropOvering ? 'text-white' : 'text-grey-darken-1'"
          line-height="line-height-lg"
          class="mb-4"
        />
        <atom-button
          v-if="imageURL"
          :text="`リセット（ ${modelValue?.name || ''} ）`"
          icon="mdi-close"
          class="bg-white rounded border-solid border-width-1 border-grey-lighten-1"
          @click="resetFile"
        />
        <label
          v-else
          class="px-4 py-2 d-flex align-center bg-white rounded border-solid border-width-1 border-grey-lighten-1 cursor-pointer"
        >
          <v-icon
            icon="mdi-folder-open"
            class="mr-2"
          />
          <atom-text text="ファイルを選択" />
          <input
            type="file"
            accept="image/png, image/jpeg, image/gif"
            class="d-none"
            @input="onFilePicked"
          >
        </label>
      </div>
    </v-hover>
  </div>
</template>
