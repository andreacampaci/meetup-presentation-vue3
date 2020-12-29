<template>
  <div class="col" v-for="label in labels" :key="label">
    <label class="label" >{{label}}</label>
    <input class="input" type="text" :placeholder="placeholder(label)">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    emits: [],
    name: 'FormSection',
    computed: {
      labels(): string[] {
        return ['country', 'address', 'zip code', 'box'];
      }
    },
    methods: {
      placeholder(label: string): string {
        return 'Insert here the ' + label;
      }
    }
  });
</script>

