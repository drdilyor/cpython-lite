<template>
  <div class="">
    <ui-expandable>
      <template #activator="{toggle, expanded}">
        <div class="flex items-center px-4 py-2 hover:bg-black hover:bg-opacity-10 select-none" :class="{'md:hidden': hideHeader}" @click="toggle">
          <ui-expand-indicator :expanded="expanded" class="mr-2"></ui-expand-indicator>
          <slot name="header">
            {{ header }}
          </slot>
        </div>
      </template>
      <template #default="{show}">
        <div class="md:block px-4 py-2 border-t-2 border-opacity-10 border-t-black" :class="[show ? 'block' : 'hidden', hideHeader ? 'md:border-t-0' : '']">
        <slot></slot>
        </div>
      </template>
    </ui-expandable>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: { type: String, default: 'Show' },
  hideHeader: { type: Boolean, default: false },
})
</script>