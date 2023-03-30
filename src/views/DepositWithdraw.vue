<template lang="html">
    <div class="DepositWithdraw">
    <!-- <v-app> -->
    <!-- <div class=""> -->
      <!-- <h3>Welcome,{{ user.first_name_th }} </h3> -->
      <Nav></Nav>
      <TestDeposit class="container mt-16"></TestDeposit> 
      <!-- <router-link to="/">Go to Home</router-link> -->
      <!-- <router-link to="/transaction">Go to Transaction</router-link> -->
      <!-- <Nav></Nav> -->
      <!-- <Nav></Nav> -->
      <!-- <HeaderV1></HeaderV1> -->
      <!-- <TestDeposit></TestDeposit>  -->
      <!-- <v-footer :absolute="fixed" app> -->
      <!-- <span>&copy;{{ new Date().getFullYear() }} SilaS.Com</span> -->
    <!-- </v-footer></v-footer> -->
    <!-- </div> -->
    <!-- </v-app> -->
  </div>
    
</template>

<script>
import TestDeposit from '../components/TestDeposit.vue';
import Nav from '../components/Nav.vue';
// import axios from 'axios';
  export default{
    name: 'DepositWithdraw',
    // props: ['user'],
    components:{
      TestDeposit,
      Nav,
    },
    // created() {
    //   axios.get('https://one.th/api/account',{
    //     headers:{
    //       Authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    //   })
    //   .then(res =>{
    //     console.log(res)
    //     this.user = res.data
    //   })
    //   .catch(error =>{
    //     console.log(error)
    //   })
    // },
    data(){
      return{
        // user:null,
      }
    }
  }
</script>


<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>