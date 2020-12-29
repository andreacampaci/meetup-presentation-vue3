<template>
  <div class="form">
    <h1 class="title">Form component</h1>
    <div class="row">
      <div class="col" v-for="label in labels" :key="label">
        <label class="label" >{{label}}</label>
        <input class="input" type="text" :placeholder="placeholder(label)">
      </div>
      <FormSection />
    </div>
    <button>Submit</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import FormSection from './FormSection.vue';

  export default defineComponent({
    emits: [],
    name: 'Form',
    components: {
      FormSection
    },
    computed: {
      labels(): string[] {
        return ['first name', 'second first name', 'family name', 'gender'];
      }
    },
    methods: {
      placeholder(label: string): string {
        return 'Insert here the ' + label;
      }
    }
  });
</script>

<style lang="scss">
  .form {
    .title {
      font-size: 20px;
      margin-bottom: 5px;
    }
    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex: 1 0 auto;
      box-sizing: border-box;
    }
    .row > .col {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: calc(4 * 100px);
      flex: 0 0 auto;
      padding: 1em;
    }
    .label {
      display: block;
      padding-bottom: 3px;
    }
    .input {
      padding: 0.5em;
      border: 1px solid #CCC;
    }
  }
</style>
