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
        <td><nuxt-link :to="`/problems/${problem.id}`">
          {{ problem.id }}</nuxt-link></td>
        <td><nuxt-link :to="`/problems/${problem.id}`">
          {{ problem.title }}</nuxt-link></td>
        <td>
          <span
            v-for="tag in problem.tags"
            class="tag mr-2"
            >
            {{ tag.name }}
          </span>
        </td>
        <td><span class="tag" :class="difficultyColor[problem.difficulty]">
          {{ problem.difficultyTitle }}</span></td>
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
  const res = [];
  if (problem.hasSolved) {
    res.push('has-background-success has-text-white');
  } else if (problem.hasAttempted) {
    res.push('has-background-warning');
  }
  return res;
}

const difficultyColor = [] as string[]
</script>