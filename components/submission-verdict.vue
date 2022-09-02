<template>
  <ui-tooltip :label="$props.submission.verdictTitle + ' #' + $props.submission.testCaseNumber">
    <span class="tag" :class="fmt.class">
      {{ fmt.text }}
    </span>
  </ui-tooltip>
</template>

<script lang="ts">

const format: { [id: number]: {class: string, text: string} } = {
  [-2]: {
    class: '',
    text: 'WJ',
  },
  [-1]: {
    class: 'is-black',
    text: 'R {}',
  },
  0: {
    class: 'is-danger',
    text: 'JE',
  },
  1: {
    class: 'is-success',
    text: 'AC',
  },
  2: {
    class: 'is-warning',
    text: 'WA {}',
  },
  3: {
    class: 'is-warning',
    text: 'TLE {}',
  },
  4: {
    class: 'is-warning',
    text: 'RE {}',
  },
  5: {
    class: 'is-warning',
    text: 'PE {}',
  },
  6: {
    class: 'is-warning',
    text: 'MLE {}',
  },
  7: {
    class: 'is-danger',
    text: 'REJ',
  },
  8: {
    class: 'is-warning',
    text: 'CE',
  },
  9: {
    class: 'is-danger',
    text: 'EE',
  },
  10: {
    class: 'is-warning',
    text: 'IDLE {}'
  },
  11: {
    class: 'is-warning',
    text: 'CE', // syntax error
  },
  12: {
    class: 'is-danger',
    text: 'CH404',
  },
  13: {
    class: 'is-danger',
    text: 'PY',
  },
  14: {
    class: 'is-danger',
    text: 'OBJ404',
  },
  15: {
    class: 'is-success',
    text: 'AC',
  },
}

export default defineNuxtComponent({
  props: {
    submission: {type: Object, required: true},
  },
  setup(props) {
    const fmt = computed(() => {
      const verdict = props.submission.verdict
      if (verdict in format)
        return {
          class: format[verdict].class,
          text: format[verdict].text.replace('{}', props.submission.testCaseNumber)
        }
      return {class: '', text: ''}
    })
    return {fmt}
  }
})

</script>