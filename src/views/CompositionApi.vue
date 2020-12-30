<template>
  <div class="compositionApi">
    {{computedTitle}}
    <button @click="changeTitle">Change Title</button>
    {{computedChangeTime}}
    <hr/>
    <div class="form">
      Name<br/>
      <input v-model="refName" placeholder="Insert your name" /><br/>
      Surname<br/>
      <input v-model="refSurname" placeholder="Insert your surname" /><br/>
      <button @click="localAddUser">Add user</button><br/><br/>
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
  import { defineComponent, computed, ref, watch, reactive, toRefs } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import {addUser, changeTime, printFullName} from "@/shared/external-methods";
  import {Users} from "@/shared/interface";

  export default defineComponent((props: {foo: string},) => {
    props.foo;
    const router = useRouter();
    const route = useRoute();
    const refName = ref('');
    const refSurname = ref('');
    const refTitle = ref('pippo');
    const refUsers = reactive({
      users: [],
      total: computed((): number => refUsers.users.length),
    });
    const refChangeTime = ref('');
    const computedTitle = computed(() => refTitle.value);
    const computedChangeTime = computed(() => refChangeTime.value);
    const changeTitle = () => {
      refTitle.value = refTitle.value === 'pluto' ? 'pippo' : 'pluto';
    };
    const fullName = printFullName(refName, refSurname);
    const localAddUser = addUser(refName, refSurname, refUsers as unknown as Users);
    watch(refTitle, () => changeTime(refChangeTime), { immediate: true});
    return {
      computedTitle,
      changeTitle,
      computedChangeTime,
      localAddUser,
      refName,
      refSurname,
      fullName,
      ...toRefs(refUsers)
    }
  });
</script>
<style>
  .form {
    border: 1px solid red;
    padding: 1em;
  }
</style>
