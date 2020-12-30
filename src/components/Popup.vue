<template>
  <div class="popup" v-if="visible">
      <div class="popup_background"></div>
      <div class="popup_content">
          <h1>Popup <button @click="close">❌️</button></h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar metus finibus, luctus arcu in, commodo massa. Phasellus vestibulum suscipit commodo. Nulla efficitur metus vitae ante laoreet blandit. Mauris a ligula est. Aliquam pharetra ac lorem eget scelerisque. Maecenas elementum scelerisque odio a vehicula. Fusce elementum semper convallis. Proin pellentesque elit at ipsum vestibulum rhoncus.
          </p>
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Popup extends Vue {
      public visible = true;

      public close() {
          this.visible = false;
          console.log('close')
      }
  }
</script>

<style lang="scss">
  .popup {
      &_background {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0,0, 0, 0.3);
      }
      &_content {
          position: absolute;
          z-index: 10;
          top: 10px;
          width: 400px;
          left: 50%;
          margin-left: -212px;
          background: white;
          padding: 12px;
      }
  }
</style>
