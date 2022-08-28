<template>
  <div ref="root" v-html="props.body"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  body: {type: String, required: true},
})

const root = ref(null as null | HTMLElement)
const mathjax = ref(null as null | any)

const loadMathConfig = () => {
  if (mathjax.value !== null)
    return
  mathjax.value = (window as any).MathJax;
  mathjax.value.Hub.Config({
    showMathMenu: false,
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
    menuSettings: { zoom: "Double-Click", zscale: "150%" },
    CommonHTML: { linebreaks: { automatic: true } },
    "HTML-CSS": { linebreaks: { automatic: true } },
    SVG: { linebreaks: { automatic: true } }
  });
  mathjax.value.Hub.Configured();
}

loadMathConfig()

const renderMath = () => {
  mathjax.value.Hub.Queue([
    "Typeset",
    mathjax.value.Hub,
    root.value,
  ])
}

onMounted(() => {
  renderMath()
})

watch(props, renderMath)
</script>