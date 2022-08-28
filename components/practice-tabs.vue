<template>
  <div class="tabs is-boxed">
    <ul>
      <nuxt-link
        v-for="tab in tabs"
        :to="getUrl(tab)"
        custom
        v-slot="{ isActive, href, navigate }"
        >
        <li :class="{'is-active': isActive}">
          <a :href="href" @click="navigate">
            <mdi :name="tab.icon"></mdi>
            <span>{{ tab.text }}</span>
          </a>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  problemId: {type: Number, default: 0},
})
const tabs = [
  {
    text: 'Problemset',
    to: 'problems',
    icon: 'menu',
    problemId: false,
  },
  {
    text: 'Submit',
    to: 'submit',
    icon: 'send',
    problemId: true,
  },
  {
    text: 'Submissions',
    to: 'submissions',
    icon: 'format-list-checks',
    problemId: true,
  }
]

const getUrl = (tab: {to: string, problemId: boolean}): string => {
  if (props.problemId && tab.problemId)
    return `/practice/problems/${props.problemId}/${tab.to}`
  else
    return `/practice/${tab.to}`
}
</script>