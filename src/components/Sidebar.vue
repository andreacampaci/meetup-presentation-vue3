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
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Sidebar extends Vue {
    @Prop({ type: Array, required: true}) public menu!: string[];

    get sections(): string[] {
      return ['home', ...this.menu];
    }
  }
</script>

<style lang="scss">
  .sidebar {
    border: 1px solid red;
    padding: 1em;
  }
</style>
