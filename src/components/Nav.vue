<template>
  
    <v-app dark class= "mb-1">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar fixed  app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <!-- <div> -->
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <!-- </div> -->
        <!-- <v-btn icon @click.stop="clipped = !clipped">
          <v-icon>mdi-application</v-icon>
        </v-btn> -->
        <!-- <v-btn icon @click.stop="fixed = !fixed">
          <v-icon>mdi-minus</v-icon>
        </v-btn> -->
        <div class="mt-5 mr-7">
        <v-switch 
          v-model="$vuetify.theme.dark"
          color="yellow"
          off-icon="mdi-theme-light-dark"
          on-icon="mdi-theme-light-dark"
        ></v-switch>
        </div>
        <!-- <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class=""
          contain
          src="./assets/Finance.png"
          transition="scale-transition"
          width="20"
        />

        </div> -->
        <v-toolbar-title>{{ title }} </v-toolbar-title>
        <v-spacer />
        <!-- <v-btn
        text
        @click="logout"
        class="hidden-sm-and-down"
      > -->
        <v-icon>mdi-logout</v-icon>

        <span class="mr-2"><a href="/" @click="handleClick">&nbsp;Logout</a></span>  
        <!-- javascript:void(0) -->
        <!-- @click="logout" -->
        <!-- &nbsp; เว้นบรรทัด  -->
      <!-- </v-btn> -->
        <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer"> -->
          <!-- <v-icon>mdi-menu</v-icon> -->
        <!-- </v-btn> -->
      </v-app-bar>

    </v-app>

</template>

<script>
// import { Router } from 'express';
// import { link } from 'fs';

import axios from 'axios';
export default {
  name: 'Nav',
  data() {
    return {
      // clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-bank-transfer',
          title: 'DepositWithdraw',
          to: '/depositwithdraw',
        },
        {
          icon: 'mdi-home-clock-outline',
          title: 'Transaction',
          to: '/transaction',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Finance.Com',
    }
  },
  method:{
    handleClick(){
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    logout(event) {
      // <router-link></router-link>

      // <router-link to="/home" active-class="active"></router-link>
      // <a href="#" ></a>
         event.preventDefault() 
         axios.delete('http://127.0.0.1:8050/api/v1/user/logout')
         .then(response => response.text())
         .then(() => location.reload()) 
         .catch(err => alert(err))
         // .then(response => {
          // const token = response.data.token;
          // const decoded = jwt_decode(token);
          // const expiresAt = new Date(decoded.exp * 1000);
          // document.cookie = `token=${token};expires=${expiresAt};path=/`;
          // this.$router.push('/finance');
          // })
          // .catch(error => {
          // console.log(error);
          // });
          // .then(res=>{
            // this.$cookies.remove('token');
            // this.$router.push('/home');
            // this.$cookie.set('token',res.data.token);
            // console.log(res)
            // alert("ออกจากระบบสำเร็จ")
            // this.$router.push('/depositwithdraw');
    //       })
    //       .catch(error =>{
    //         console.log(error);
    //         alert("error")
    //       });
    // }
}
}
}
</script>
