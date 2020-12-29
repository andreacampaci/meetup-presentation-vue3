<template>
  <div class="teleport">
    <teleport to="#endofbody">
      <Popup>
        <button @click="handler">Submit</button>
      </Popup>
    </teleport>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Popup from '../components/Popup.vue';

  export default defineComponent({
    name: 'Teleport',
    components: {
     Popup
    },
    methods: {
      handler($e: EventTarget) {
        console.log($e);
      }
    }
  });
</script>
