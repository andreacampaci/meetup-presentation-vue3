<template>
  <div class="col" v-for="label in labels" :key="label">
    <label class="label" >{{label}}</label>
    <input class="input" type="text" :placeholder="placeholder(label)">
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class FormSection extends Vue {
    get labels(): string[] {
      return ['country', 'address', 'zip code', 'box'];
    }

    public placeholder(label: string): string {
      return 'Insert here the ' + label;
    }
  }
</script>

