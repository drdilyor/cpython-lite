<template>
  <table class="table is-fullwidth is-hoverable">
    <thead>
      <th>ID</th>
      <th>Title</th>
      <th>Tags</th>
      <th>Difficulty</th>
      <th>Rating</th>
      <th>Attempts</th>
    </thead>
    <tbody>
      <tr
        v-for="problem in list"
        :class="getClass(problem)"
        >
        <td><nuxt-link :to="`/practice/problems/${problem.id}`">
          {{ problem.id }}</nuxt-link></td>
        <td><nuxt-link :to="`/practice/problems/${problem.id}`">
          {{ problem.title }}</nuxt-link>
          <span v-if="!problem.hasChecker" class="has-text-danger ml-2">No checker</span>
        </td>
        <td>
          <span
            v-for="tag in problem.tags"
            class="tag mr-2"
            >
            {{ tag.name }}
          </span>
        </td>
        <td><problem-difficulty :problem="problem"></problem-difficulty></td>
        <td><ui-rating :value="problem.rating"></ui-rating></td>
        <td><span class="tag is-info is-light">
          {{ problem.solved }}/{{ problem.attemptsCount }}
        </span></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Problem {
  id: number
  difficultyTitle: string
  rating: number
  hasChecker: boolean
  solved: number
  attemptsCount: number
  hasSolved: boolean
  hasAttempted: boolean
  tags: Array<Tag>
  authorUsername: string
  timeLimit: number
  memoryLimit: number
  title: string
  difficulty: number
  author: number
}
interface Tag {
  id: number
  name: string
}


const props = defineProps({
  list: {type: Array<Problem>, required: true},
})
const {list} = toRefs(props);

const getClass = (problem: Problem) => {
  if (problem.hasSolved) {
    return 'problem--solved'
  } else if (problem.hasAttempted) {
    return 'problem--attempted'
  } else {
    return ''
  }
}
</script>

<style lang="scss">
// not using scoped, because this component is already slow to render
@import "~/assets/variables.scss";

.problem--solved {
  background: darken($success-light, 10%);
  &:hover {
    background: $success-light !important;
  }
}

.problem--attempted {
  background: darken($warning-light, 10%);
  &:hover {
    background: $warning-light !important;
  }
}
</style>
