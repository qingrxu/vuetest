<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ $store.getters.getUser.username }}状态{{$store.getters.getUser.condition}}</span>
    <input type="text" v-model="userAddress" placeholder="地址"/>
    <div class="login-button" @click="save" type="submit">保存</div>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'AboutView',
  data(){
    return{
      userAddress:'',
    }
  },
  methods:{
    save(){
      console.log(this.userAddress);
      this.$store.dispatch('reflashUser',{userAddress:this.userAddress})
      this.$router.push({ path:'/After'})
    }
  }
}
</script>