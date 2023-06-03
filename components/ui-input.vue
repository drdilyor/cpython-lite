<template>
  <label :for="id" :class="
    breakpoint == 'sm' ? 'sm:text-right sm:py-1 sm:pr-2' :
    breakpoint == 'md' ? 'md:text-right md:py-1 md:pr-2' :
    breakpoint == 'lg' ? 'lg:text-right lg:py-1 lg:pr-2' : ''">
    <slot name="label"></slot>
  </label>
  <div>
    <component
      :is="is" :id="id" :value="modelValue" :type="type" v-bind="controlAttrs"
      class="w-full min-w-[10rem] py-1 px-2 border-2 border-gray-200 rounded hover:border-gray-300 focus:border-primary-600 outline-none bg-white"
      @input="(event: any) => lazy ? 0 : $emit('update:modelValue', event.target.value)"
      @change="(event: any) => !lazy ? 0 : $emit('update:modelValue', event.target.value)">
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
  breakpoint: { type: String as PropType<'sm' | 'md' | 'lg' | '-'>, default: 'sm' },
  required: { type: Boolean, default: false },
  controlAttrs: { type: Object, default: () => {} }, 
  modelValue: { required: true },
  lazy: { type: Boolean, default: false },
})
const emit = defineEmits([ 'update:modelValue' ])
</script>