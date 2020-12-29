<template>
  <div class="sidebar">
    Sidebar component
    <ul>
      <li v-for="section in sections" :key="section">
        {{section}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';

  export default defineComponent({
    emits: [],
    name: 'Sidebar',
    props: {
      menu: {
        type: Array as PropType<string[]>,
        required: true,
      }
    },
    computed: {
      sections(): string[] {
        return ['home', ...this.menu];
      }
    }
  });
</script>

<style lang="scss">
  .sidebar {
    border: 1px solid red;
    padding: 1em;
  }
</style>
