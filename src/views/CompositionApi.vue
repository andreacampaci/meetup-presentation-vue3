<template>
  <div class="compositionApi">
    {{title}}
    <button @click="changeTitle">Change Title</button>
    {{changedAt}}
    <hr/>
    <div class="form">
      Name<br/>
      <input v-model="name" placeholder="Insert your name" /><br/>
      Surname<br/>
      <input v-model="surname" placeholder="Insert your surname" /><br/>
      <button @click="addUser">Add user</button><br/><br/>
      Preview: {{fullName()}}
    </div>
    Tot: {{total}}
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{user.name}} {{user.surname}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import {Users} from "@/shared/interface";
  import {now} from "@/shared/date";

  @Component
  export default class CompositionApi extends Vue {
    @Prop() public propName!: string;
    public name = '';
    public surname = '';
    public title = 'pippo';
    public usersCollection = {
      users: [],
      total: 0,
    } as Users;
    public changedAt = '';

    @Watch('title', { immediate: true, deep: true })
    private watchTitle() {
      this.changedAt = now();
    }

    public changeTitle() {
      this.title = this.title === 'pluto' ? 'pippo' : 'pluto';
    };

    get fullName() {
      return this.name + ' ' + this.surname
    }

    public addUser() {
        if (this.name === '' || this.surname === '') { return; }
      this.usersCollection.users = [...this.usersCollection.users, {
          name: this.name,
          surname: this.surname
        }];
      this.name = '';
      this.surname = '';
    }

  }
</script>
<style>
  .form {
    border: 1px solid red;
    padding: 1em;
  }
</style>
