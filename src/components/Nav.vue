<template>
  <!-- <div></div> -->
    <div id="nav">
    <v-navigation-drawer
              v-model="drawer"
              :mini-variant="mini"
              absolute
              dark
              temporary
            >
            <v-list>
                <v-list-item v-if="mini" @click.stop="mini = !mini">
                  <v-list-item-action>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item avatar>
                  <v-list-item-avatar>
                    <img src="../assets/big.jpg">
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-tile-title>Sila siangchin</v-list-tile-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon @click.stop="mini = !mini">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
    <v-divider></v-divider>
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
    
    
    
    
        
         <v-toolbar dark pb-4 color="primary">
             <v-btn
              icon
              dark
              @click.stop="drawer = !drawer"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">Finance.com</v-toolbar-title>

            <v-spacer></v-spacer>

            
            <v-btn text> 
              <!-- ทำชั่วคราวก่อน -->
              <v-icon>mdi-logout</v-icon>
              <span><a href="http://localhost:8080/"><font color="white">Logout</font></a></span> 
            </v-btn>
          </v-toolbar>
        </div>
    <!-- <v-app dark class= "mb-1">
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
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <div class="mt-5 mr-7">
        <v-switch 
          v-model="$vuetify.theme.dark"
          color="yellow"
          off-icon="mdi-theme-light-dark"
          on-icon="mdi-theme-light-dark"
        ></v-switch>
        </div>
        <v-toolbar-title>{{ title }} </v-toolbar-title>
        <v-spacer />
        <v-btn
        text
        @click="handleClick"
        class="hidden-sm-and-down"
      > -->
        <!-- <v-icon>mdi-logout</v-icon> -->

        <!-- <span class="mr-2"><a href="/" @click="handleClick">Logout</a></span>   -->
        <!-- javascript:void(0) -->
        <!-- @click="logout" -->
        <!-- &nbsp; เว้นบรรทัด  -->
      <!-- </v-btn>

      </v-app-bar>

    </v-app> -->

</template>

<script>
// import axios from 'axios';
export default {
  name: 'Nav',
  // props: ['user'],
  data() {
    return {
      rail: true,
      drawer: null, 
      mini: false,
      right: null , 
      items: [
        {
          icon: 'mdi-account-card-outline',
          title: 'Personal',
          to: '/personal',
        },
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
        // {
        //   icon: 'mdi-account-card-outline',
        //   title: 'Personal',
        //   to: '/personal'
        // }
      ],
    }
  },
  method:{
    handleClick(){
      
      // axios.get('https://one.th/api/oauth/logout?redirect_url=/')
      // .then(res=>{
            // this.$cookie.set('token',res.data.token);
            // localStorage.setItem('token',res.data.access_token)
            // console.log(res)
            // alert("ล็อกเอ้าท์สำเร็จ")
            // localStorage.removeItem('token');
            // this.$router.push('/')
            // console.log(res)
            // this.$router.push('/depositwithdraw');
          // })
          // .catch(error =>{
          //   console.log(error);
          //   alert("ล็อกเอ้าท์ไม่สำเร็จ")
          // });
        

    },
    toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    // watch: {
    //   group () {
    //     this.drawer = false
    //   },
    // },
    // logout(event) {
      // <router-link></router-link>

      // <router-link to="/home" active-class="active"></router-link>
      // <a href="#" ></a>
        //  event.preventDefault() 
        //  axios.delete('http://127.0.0.1:8050/api/v1/user/logout')
        //  .then(response => response.text())
        //  .then(() => location.reload()) 
        //  .catch(err => alert(err))
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
// }
}
}
</script>


