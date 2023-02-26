<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span>{{ $store.getters.getUser.username }}状态{{$store.getters.getUser.condition}}</span>

    <input type="text" v-model="username" placeholder="账号"/>
    <div class="login-button" @click="login" type="submit">登录</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      username:'',
    }
  },
  methods:{
    login(){
      console.log(this.username);
      this.$store.dispatch('reflashUser',{username:this.username,condition:'logining'})
      this.$router.push({ path:'/about'})
    }
  }
}
</script>
