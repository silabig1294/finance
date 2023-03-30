<template>
  <div class="container"  v-bind:style="{ backgroundColor: color}">
    <!-- <div id="container" > -->
    <v-container v-bind:style="{ backgroundColor: color}">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <div class="container mt-10">
          <v-img
          alt="Home"
          class="shrink"
          contain
          src="../assets/ori.png"
          transition="scale-transition"
          width="2000"
          height="500"
          />
      </div>
        </v-flex>
        <!-- <div class="container ma-15"> -->
        <v-flex xs12 md6>
          <br>
          <br>
          <br>
          <h1>Please LogIn</h1>
                <div class="container mr-10">
                <v-tabs v-model="tab" show-arrows background-color="deep-orange accent-4" icons-and-text dark grow>
                    <v-tabs-slider color="orange darken-4"></v-tabs-slider>
                    <v-tab v-for="i in tabs" :key="i">
                        <v-icon large>{{ i.icon }}</v-icon>
                        <div class="caption py-1">{{ i.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                              <v-form @submit.prevent="login">
                                <v-text-field prepend-icon="mdi-account-circle" validate-on-blur clearable dense outlined v-model="username" label="Username" type="text" required/>
                                <!-- <v-text-field prepend-icon="mdi-email" validate-on-blur clearable dense outlined v-model="mail" :rules="[rules.emailRequired, rules.email]" label="Please enter your Email" type="email" required/> -->
                                <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.passwordRequired, rules.min]" :type="show1 ? 'text' : 'password'" counter @click:append="show1 = !show1" prepend-icon="mdi-lock" dense outlined v-model="password" label="Password" required />
                                  <!-- <v-text-field
                                    v-model="email"
                                    clearable
                                    :rules="emailRules"
                                    label="Email"
                                    variant="outlined"
                                    required
                                    type="email"
                                  ></v-text-field>
                                  <v-text-field
                                    v-model="password"
                                    clearable
                                    :rules="passwordRules"
                                    label="Password"
                                    variant="outlined"
                                    required
                                    type="password"
                                  ></v-text-field> -->
                                  <v-btn type="submit" color="primary">Login</v-btn>
                              </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                              <div v-bind:style="{ backgroundColor: color}">
                                <h1>Your Theme Color</h1>
                                <div class="color">
                                <!-- <input type="text" v-bind:style="{ color: color}" v-model="color" maxlength="7" placeholder="#000000"/> -->
                                <input type="color" v-model="color"/>
                                </div>
                              </div>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
              </div>
        </v-flex>
      <!-- </div> -->


      </v-layout>

    </v-container>
  <!-- </div> -->
  </div>
  
</template>

<script>
import axios from 'axios'
// import jwt_decode from 'jwt-decode'
export default {
  name: 'Home',
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Login", icon:"mdi-login"},
        {name:"Backgroud", icon:"mdi-palette"}
    ],
    valid: true,
    email: null,
    mail:null,
    username:null,
    password: null,
    show1: false,
    // valid: false,
    rules: {
    // email: value => {
    //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return pattern.test(value) || "Your Email should look like user@email.com";
    // },
    // emailRequired: value => !!value || "You must enter your Email",
    passwordRequired: value => !!value || "Your password is required",
    passwordMatch: value => value === this.password || "Your passwords don't match",
    min: v =>
      v.length >= 8 ||
      "Your password must be at least 8 characters",
      emailMatch: () => "The email and password you entered don't match"
  }
      // emailRules: [
      //   v => !!v || 'Email is required',
      //   v => /.+@.+/.test(v) || 'Email must be valid',
      // ],
      // passwordRules: [
      //   v => !!v || 'Password is required',
      //   v => v.length >= 8 || 'Password must be at least 8 characters',
      // ],
  }),
  methods: {
    login(){
      axios.post('https://one.th/api/oauth/getpwd', {
            grant_type:"password",
            client_id:"567",
            client_secret:"vzBqZ1xbPauBdxwjs883EmOLtlXl6QHeMZHSRHNi",
            username: this.username,
            password: this.password
          })
          // .then(response => { // no use
          // const token = response.data.token;
          // const decoded = jwt_decode(token);
          // const expiresAt = new Date(decoded.exp * 1000);
          // document.cookie = `token=${token};expires=${expiresAt};path=/`;
          // this.$router.push('/finance');
          // })
          // .catch(error => {
          // console.log(error);
          // }); // no use
          // axios.post('http://127.0.0.1:8050/api/v1/user/login', {
            // grant_type:"password",
            // client_id:"567",
            // client_secret:"vzBqZ1xbPauBdxwjs883EmOLtlXl6QHeMZHSRHNi",
            // mail: this.mail,
            // password: this.password
          // })
          .then(res=>{
            // this.$cookie.set('token',res.data.token);
            localStorage.setItem('token',res.data.access_token)
            console.log(res)
            alert("เข้าใช้งานสำเร็จ")
            this.$router.push('/depositwithdraw');
          })
          .catch(error =>{
            console.log(error);
            alert("เข้าใช้งานไม่ได้ กรุณาล็อกอินใหม่ ด้วยเมล์และรหัสที่ถูกต้อง")
          });
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');

/* html, body {
  height: 100%;
  margin: 0;
  padding: 0;
} */

#a {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
    padding: 1rem,1rem;
    font-size: 2rem;
    border: 0;
    border-radius: 3px;
    background: #fff;
  }

h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #000;
  justify-content: center;
  font-weight: 300;
}

input[type="color"]{
  width:40px;
  border:1px solid black;
  margin:0px;
  padding:0px !important;
  height:40px;
}
</style>