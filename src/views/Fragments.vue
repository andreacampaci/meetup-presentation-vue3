<template>
  <div class="fragments">
    <Form />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Form from '../components/Form.vue';

  export default defineComponent({
    name: 'Fragments',
    components: {
      Form
    }
  });
</script>
