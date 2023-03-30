<template>
    <!-- <div class=""> -->
    <v-app>
      <!-- <h3>Welcome,{{ user.first_name_th }} </h3> -->
      <Nav></Nav>
      <!-- <div class="container"> -->
        <!-- <p>{{ user.first_name_th }}</p> -->
      <!-- </div> -->
      <TestTransaction></TestTransaction>
        <!-- <Nav></Nav> -->
        
        <!-- <v-footer :absolute="fixed" app>
      <span>&copy;{{ new Date().getFullYear() }} SilaS.Com</span>
    </v-footer> -->
    <!-- </div> -->
  </v-app>

</template>

<script>
import TestTransaction from '../components/TestTransaction.vue';
import Nav from '../components/Nav.vue';
export default {
    name:'Transaction',
    components:{
        TestTransaction,
        Nav
    },

    data(){
      return {

      }
    }

}
</script>

<style>

</style>