<template>
  <div class="fragments">
    <Form />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Form from '../components/Form.vue';

  @Component({
    components: {
      Form
    }
  })
  export default class Fragments extends Vue {
  }
</script>
