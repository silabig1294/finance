<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'App',
  // created(){
  //   axios.get('https://one.th/api/account',{
  //     headers:{
  //       Authorization: 'Bearer ' + localStorage.getItem('token')
  //     }
  //   }).then(res => {
  //     console.log(res)
  //     this.user = res.data
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },
  data(){
    return{
      user:null,
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans);
</style>
