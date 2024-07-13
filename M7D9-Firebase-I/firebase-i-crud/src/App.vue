<template>
  <div class="container">
    <CreateUser />
    <ListUsers />
  </div>
</template>

<script>
import CreateUser from './components/createUser.vue';
import ListUsers from './components/listUsers.vue';

 
export default {
  name: 'App',
  components:{
    CreateUser,
    ListUsers,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
