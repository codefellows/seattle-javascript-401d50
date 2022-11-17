<script setup>
import PeopleItem from '../components/PeopleItem.vue'
</script>

<script>
export default {
  data() {
    return {
      people: [
        {name: 'Jacob'},
        {name: 'John'}
      ]
    }
  }
}
</script>

<template>
  <div class="people-container">
    <h1>Here are some people</h1>
    <PeopleItem :key="person" v-for="(person) in people">
      <template #name>{{ person.name }}</template>
    </PeopleItem>
  </div>
</template>
