<template>
  <div class="box">
    <div :class="`icon ${task.done && 'active'}`"
         @click="updateTask">
      <svg>
        <use :xlink:href="`/icons/${task.done ? 'done' : 'undo'}.svg#path`"></use>
      </svg>
    </div>
    <div :class="`content ${task.done && 'active'}`">{{ task.content }}</div>
    <div class="icon del"
         @click="removeTask">
      <svg>
        <use xlink:href="/icons/del.svg#path"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    updateTask() {
      this.$store.dispatch('UPDATE_TASK', this.task)
    },
    removeTask() {
      this.$store.dispatch('REMOVE_TASK', this.task)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>