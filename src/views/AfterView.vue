<template>
  <div class="after">
    <h1>This is an after page</h1>
    <input type="text" v-model="userMobile" placeholder="电话"/>
    <div class="login-button" @click="save" type="submit">保存</div>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'AfterView',
  data(){
    return{
      userMobile:'',
    }
  },
  methods:{
    save(){
      console.log(this.userMobile);
      this.$store.dispatch('reflashUser',{userMobile:this.userMobile})
      this.$router.push({ path:'/quit'})
    }
  }
}
</script>