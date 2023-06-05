<template>
  <div ref="root" v-html="body"></div>
</template>

<script lang="ts">
let mathjax = null as any

const loadMathConfig = () => {
  if (mathjax !== null)
    return
  mathjax = (window as any).MathJax;
  mathjax.Hub.Config({
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
  mathjax.Hub.Configured();
}

export default defineNuxtComponent({
  props: {
    body: {type: String, required: true},
  },
  setup() {
    const root = ref(null as null | HTMLElement)

    loadMathConfig()

    const renderMath = () => {
      mathjax.Hub.Queue([
        "Typeset",
        mathjax.Hub,
        root.value!,
      ])
    }

    onMounted(() => {
      renderMath()
    })
    return {root}
  }
})

</script>