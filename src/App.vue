<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/fragments">Fragments</router-link> |
    <router-link to="/teleport">Teleport</router-link> |
    <router-link to="/composition-api">Composition Api</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
  });
</script>

<style lang="scss">

</style>
