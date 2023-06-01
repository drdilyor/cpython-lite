<template>
  <ui-tooltip :label="submission.verdictTitle + ' #' + submission.testCaseNumber">
    <span class="inline-block text-sm py-px px-1.5 rounded" :class="fmt.class">
      {{ fmt.text }}
    </span>
  </ui-tooltip>
</template>

<script setup lang="ts">
const neutral = 'bg-gray-600 text-white'
const danger = 'bg-red-600 text-white'
const warning = 'bg-yellow-400 text-black'
const success = 'bg-green-600 text-white'

const format: { [id: number]: {class: string, text: string} } = {
  [-2]: {
    class: neutral,
    text: 'WJ',
  },
  [-1]: {
    class: neutral,
    text: 'R {}',
  },
  0: {
    class: danger,
    text: 'JE',
  },
  1: {
    class: success,
    text: 'AC',
  },
  2: {
    class: warning,
    text: 'WA {}',
  },
  3: {
    class: warning,
    text: 'TLE {}',
  },
  4: {
    class: warning,
    text: 'RE {}',
  },
  5: {
    class: warning,
    text: 'PE {}',
  },
  6: {
    class: warning,
    text: 'MLE {}',
  },
  7: {
    class: danger,
    text: 'REJ',
  },
  8: {
    class: warning,
    text: 'CE',
  },
  9: {
    class: danger,
    text: 'EE',
  },
  10: {
    class: warning,
    text: 'IDLE {}'
  },
  11: {
    class: warning,
    text: 'CE', // syntax error
  },
  12: {
    class: danger,
    text: 'CH404',
  },
  13: {
    class: danger,
    text: 'PY',
  },
  14: {
    class: danger,
    text: 'OBJ404',
  },
  15: {
    class: success,
    text: 'AC',
  },
}

const props = defineProps({
  submission: {type: Object, required: true},
})

const fmt = computed(() => {
  const verdict = props.submission.verdict
  if (verdict in format)
    return {
      class: format[verdict].class,
      text: format[verdict].text.replace('{}', props.submission.testCaseNumber)
    }
  return {class: '', text: ''}
})

</script>