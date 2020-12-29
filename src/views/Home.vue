<template>
  <div class="home">
    <Sidebar :menu="menu"></Sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '../components/Sidebar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar
  },
  data: () => {
    return {
      menu: ['about', 'gallery', 'where we are']
    }
  }
});

/*
-- Vue 2.x
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
*/
</script>
