<template>
  <div class="teleport">
      <Popup>
        <button @click="handler">Submit</button>
      </Popup>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Popup from "../components/Popup.vue";

  @Component({
    components: {
      Popup
    }
  })
  export default class Teleport extends Vue {
    public handler($e: EventTarget) {
      console.log($e);
    }
  }
</script>
