<template>
  <ui-input-label :for="id" :breakpoint="breakpoint" v-bind="labelAttrs">
    <slot name="label"></slot>
  </ui-input-label>
  <div>
    <component
      :is="is" :id="id" :value="modelValue" :type="type" v-bind="controlAttrs"
      class="w-full min-w-[10rem] py-1 px-2 border-2 border-gray-200 rounded hover:border-gray-300 focus:border-primary-600 outline-none bg-white"
      @input="(event: any) => lazy ? 0 : $emit('update:modelValue', event.target.value)"
      @change="(event: any) => !lazy ? 0 : $emit('update:modelValue', event.target.value)">
      <slot name="control-inner"></slot>
    </component>
    <slot name="bottom"></slot>
    <div v-for="error in errors" class="text-red-700">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  id: { type: String, required: true },
  is: { type: String, default: 'input', },
  type: { type: String, required: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  breakpoint: { type: String as PropType<'sm' | 'md' | 'lg' | '-'>, default: 'sm' },
  required: { type: Boolean, default: false },
  controlAttrs: { type: Object, default: () => {} }, 
  labelAttrs: { type: Object, default: () => {} },
  labelClass: { type: String, default: '' },
  modelValue: { required: true },
  lazy: { type: Boolean, default: false },
  errors: { type: Array<String>, default: () => []}
})
const emit = defineEmits([ 'update:modelValue' ])
</script>