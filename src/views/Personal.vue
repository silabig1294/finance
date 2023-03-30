<template lang="html">
    <div>
        <Nav></Nav>
        <v-container class="container mt-15" fluid>
          <v-card max-width="450px" class="mx-auto bg" elevation="2">
            <v-img class="" height="200px" src="http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg" gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
            </v-img>
            <v-row justify="center">
              <v-col align-self="start" class="d-flex justify-center align-center pa-0" cols="12">
                <v-avatar class="profile avatar-center-heigth avatar-shadow" color="grey" size="164">
                  <v-btn @click="onButtonClick" class="upload-btn" x-large icon>
                    <v-icon>
                      mdi-camera
                    </v-icon>
                  </v-btn>
                  <input ref="uploader" class="d-none" type="file" accept="image/*" :change="onFileChanged">
                  <v-img src="../assets/big.jpg"></v-img>
                </v-avatar>
              </v-col>
            </v-row>
                <v-list-item color="#0000" class="profile-text-name ma-4 pt-16">
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{user.first_name_eng}} (Big) {{ user.last_name_eng}}
                    </v-list-item-title>
                    <v-list-item-subtitle>Electronic&Computer System Engineer</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn class="mx-2" fab dark color="indigo" small>
                      <v-icon dark>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
 
                <v-card-subtitle>
                  <b class="ml-2">Bio</b>
                  <v-btn v-on:click="saveBio" icon>
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </v-card-subtitle>

                <p v-if="!editBio" class="pl-6 pr-6 pt-0">
                  {{ Bio }}
                </p>
                <v-textarea v-model="Bio" rows="2" v-if="editBio" label="Editar minha Bio" class="pa-6"></v-textarea>
                <v-spacer></v-spacer>
                <v-text-field class="pa-6" v-model="Phone" prepend-icon="mdi-whatsapp" label="Phone" :disabled="!editBio">{{ user.mobile.mobile_no}}</v-text-field>
                <v-spacer></v-spacer>
      
            <v-row>
              <v-col cols="6" class="text-end">
                <v-list-item-content class="sutitles">
                  <v-list-item-title class="text-h6">
                    1002
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">Audience</v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-col cols="6" class="text-start">
                <v-list-item-content class="sutitles">
                  <v-list-item-title class="text-h6">
                    100
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">Follower</v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>

          </v-card>
        </v-container>

    </div>

</template>

<script>
import Nav from '../components/Nav.vue';
import axios from 'axios';
export default {
    name: 'Personal',
    created() {
      axios.get('https://one.th/api/account',{
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res =>{
        console.log(res)
        this.user = res.data
      })
      .catch(error =>{
        console.log(error)
      })
    },
    data(){
        return{
            user:null,
            Bio: "Imagination more important than Knowledge",
            Phone: "0636198875",

        }
    },
    components:{
        Nav,
    }

}
</script>

<style scoped>

.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-btn{
  position: absolute !important;
    z-index: 999;
    top: 121px;
    color: cadetblue;
    background: blueviolet;
    background: rgb(125,198,163);
    background: linear-gradient(50deg, rgba(125,198,163,1) 0%, rgba(35,216,227,1) 72%);
}

.bg{
background: rgb(255,197,185);
background: linear-gradient(0deg, rgba(255,197,185,0.711922268907563) 0%, rgba(220,246,223,0.6671043417366946) 35%, rgba(255,255,255,0.7539390756302521) 74%), url(http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg);
}

.avatar-shadow{
box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
-webkit-box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
-moz-box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
}

</style>