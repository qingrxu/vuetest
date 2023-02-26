<template>
  <div class="after">
    <h1>This is an quit page</h1>
    <span>{{ $store.getters.getUser.username }}状态{{$store.getters.getUser.condition}}{{$store.getters.getUser.userAddress}}{{$store.getters.getUser.userMobile}}</span>
    <div class="login-button" @click="quit" type="submit">退出</div>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'QuitView',
  data(){
    return{
      
    }
  },
  methods:{
    quit(){
      this.$store.dispatch('reflashUser',{condition:'quit'})
      this.$router.push({ path:'/'})
    }
  }
}
</script>