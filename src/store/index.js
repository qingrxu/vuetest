import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      username:'',
      userMobile:'',
      userAddress:'',
      condition:''
    }
  },
  getters: {
    getUser(state){
      return state.user;
    }
  },
  mutations: {
    setUser(state,user){
      if(!(user.username==undefined)){
        console.log(user.username);
        state.user.username = user.username;
      }
      if(!(user.userMobile==undefined)){
        state.user.userMobile = user.userMobile;
      }
      if(!(user.userAddress==undefined)){
        state.user.userAddress = user.userAddress;
      }
      if(!(user.condition==undefined)){
        state.user.condition = user.condition;
      }
      
    }
  },
  actions: {
    reflashUser(context,user){
      context.commit('setUser',user);
    }
  },
  modules: {
  }
})
