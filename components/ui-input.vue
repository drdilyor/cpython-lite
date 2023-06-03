<template>
  <label class="py-1 pr-2 text-right" :for="id">
    <slot name="label"></slot>
  </label>
  <div>
    <component
      :is="is" :id="id" :value="modelValue" :type="type" v-bind="controlAttrs"
      class="w-full py-1 px-2 border-2 border-gray-200 rounded hover:border-gray-300 focus:border-primary-600 outline-none bg-transparent"
      @input="(event: any) => $emit('update:modelValue', event.target.value)">
      <slot name="control-inner"></slot>
    </component>
    <slot name="bottom"></slot>
  </div>

</template>

<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  is: { type: String, default: 'input', },
  type: { type: String, default: 'text' },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  controlAttrs: { type: Object, default: () => {} }, 
  modelValue: { required: true },
})
const emit = defineEmits([ 'update:modelValue' ])
</script>