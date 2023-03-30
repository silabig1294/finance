<template lang="html">
  <!-- <div id="testdeposit"> -->
  <div class="container"> 
    <!-- d-flex align-center flex-column container mt-10 ml-10 mb-10 mr-10 -->
    <v-card width="450">
      <v-card-item>
        <!-- <v-card-title>Total Money : {{ count }}</v-card-title> -->
        <p class="text-center"><strong>Total Money : {{ count }}</strong></p> 
        <!-- <p>{{ newcount }}</p> -->
      </v-card-item>
      <v-card-text>
        <span style="color: red; font-size:11px" placeholder="กรอก 1-100000">*กรุณากรอกจำนวนเงินที่ต้องการ ฝาก หรือ ถอน (กรอก 0-100000)</span>
        <input v-model="number" type="text" @keypress="isNum($event)" minlength="1" maxlength="6">
      </v-card-text>


      <v-card-text class="text-center">
         <button class="button" @click="addnum" >ฝาก</button>         <!-- <button style="color: red; @clic>sub</button> -->
         <button class="button1" @click="sub" >ถอน</button> 
      </v-card-text>
    </v-card>
    <!-- <div class="container">
      <a target="_blank" :href="urlAuth">เชื่อมต่อ LINE</a>
    </div> -->
  </div>
<!-- </div> -->
</template>

<script>
// import Vue from 'vue'
import axios from 'axios';
import moment from "moment";
// import AxiosPlugin from 'vue-axios-cors';
// import line from '../services/FinanceDataService'
// import VueAxiols from 'vue-axios'
// import VueAxios from 'vue-axios';
// const axios = require('axios');
// Vue.use(AxiosPlugin)
// const querystring = require('querystring');
export default {
    name: 'TestDeposit',
    data(){
        return{
            socket: null,
            newMessage:'',
            count:null,
            number: 0,
            id:null,
            time: "",
            data: null,
            message:'',
            token: 'H8wHXPmv1oxKDjvUcA7VpAbdjpBpLAbIPilKhrw1chh'
        }  
    },
    // computed : {
    //     urlAuth(){
    //     const clientId = 	'12H9oy9nDhSaPu8N1M8xRg'
    //     const engine =    'http://localhost:8080'
    //     const username =   'Transaction Alert'
    //     return `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${engine}/line/redirect&scope=notify&state=${username}`
    //     }
    // },
    // created() {
    // Connect to the WebSocket server
      // this.socket = new WebSocket('ws://localhost:4000');
    // Listen for messages from the server
    // this.socket.addEventListener('message', event => {
    //   const message = JSON.parse(event.data);
    //   this.messages.push(message);
    // });
    // },
    // beforeDestroy() {
    // Close the WebSocket connection
    // this.socket.close();
    // },

    mounted(){
      this.getTotalAmount();
      setInterval(()=>{
        this.getTotalAmount();
        this.getId();
      },3000);
    },
    methods:{
        isNum(e) {
        const num = String.fromCharCode(e.keyCode);
        if (/^[0-9]*$/.test(num)) return true;
        else e.preventDefault();
        },
        getId(){
          axios.get('http://127.0.0.1:3000/transactions')
          .then(res => {
            let data = res.data;
            // console.log(data)
            // console.log(res.headers["x-total-count"]);
            // this.id = data.length+1   
            console.log(data)
            // data.forEach(val => {
            //     console.log(`${val.time} ${val.amount} ${val.status} ${val.mail}`)
            // })
          })
          .catch(error => {
            console.log(error)
          })

        },
        getTotalAmount(){
          axios.get('http://127.0.0.1:3000/transactions?q=ถอน')
        .then(res => {
          let data = res.data;
          // console.log(data)
          let sum1 = 0;
          for (let j=0; j< data.length; j++){
            // console.log(data[j].amount)
            sum1 = sum1 + data[j].amount
            // console.log(sum1 +"\n" + "============")
          }
        axios.get('http://127.0.0.1:3000/transactions?q=ฝาก')
        .then(res => {
            let data = res.data;
            let sum2 = 0;
            console.log(data)
            for (let j=0; j< data.length; j++){
                // console.log(data[j].amount)
                sum2 = sum2 + data[j].amount
                // console.log(sum2 +"\n" + "============")
            }
        this.count = 1000000-sum1+sum2;
        // console.log(total)
        })
        .catch(error => {
        console.log(error)
        })
    })
    .catch(error => {
        console.log(error)
    })
        },
        addnum(){
          let text = "ยืนยันการฝากเงิน ได้สูงสุดไม่เกิน 100000"
    //       axios.get('http://127.0.0.1:3000/transactions')
    //       .then(res => {
    //       let data = res.data;
    //       console.log(data.length+1)
    //       // data.forEach(val => {
    //       //     console.log(`${val.time} ${val.amount} ${val.status} ${val.mail}`)
    //       // })
    //       })
    // .catch(error => {
    //     console.log(error)
    // })
          if (confirm(text) == true) {
            // this.count = this.count + Number(this.number);
            this.id = Math.floor(Math.random() * 1000);
            if(this.number > 100000) {
              alert("ฝากเงินสูงสุดได้ 100000")
              this.number = null;
            }
            else if(this.number <= 100000 && this.number >0 ){
              // this.count = this.count + Number(this.number);
              this.id = Math.floor(Math.random() * 1000);
              this.time = moment(Date()).format('MM/DD/YYYY hh:mm:ss')
              axios.post('http://127.0.0.1:3000/transactions',{
                 id: this.id,
                 time: this.time, // use module date
                 amount: Number(this.number),
                 status: "ฝาก",
                 mail: "silabig1442@gmail.com"
              }).then(res => {
                console.log(res.data.data)
                alert("ฝากเงินสำเร็จ")
                // const message = { 
                //  id: this.id,
                //  time: this.time, // use module date
                //  amount: res.data.amount,
                //  status: "ฝาก",
                //  mail: "silabig1442@gmail.com"}
                //  this.socket.send(JSON.stringify(message));
                // Clear the input field
                // this.newMessage = '';
                // this.socket.close();
                // window.location.reload();
                window.location.reload();
                })
                .catch(error => {
                    console.log(error)
                    alert("ฝากเงินไม่สำเร็จ")
                })
                // e.preventDefault();
              this.number = null;
            }
            this.number = null;
          } 
        },
        sub(){
            let text = "ยืนยันการถอนเงิน ได้สูงสุดไม่เกิน 100000"
            if (confirm(text) == true) {
              // this.count = this.count - Number(this.number);
              if(this.number > 100000) {
                alert("ถอนเงินสูงสุดได้ 100000")
                this.number = null;
              }
              else if(this.number <= 100000 && this.number > 0){
                this.id = Math.floor(Math.random() * 1000);
                this.time = moment(Date()).format('MM/DD/YYYY hh:mm:ss')
                axios.post('http://127.0.0.1:3000/transactions',{
                 id: this.id,
                 time: this.time, // use module date
                 amount: Number(this.number),
                 status: "ถอน",
                 mail: "silabig1442@gmail.com"
              }).then(res =>{
                alert("ถอนเงินสำเร็จ")
                console.log(res.data)
                // const message = { 
                //  id: this.id,
                //  time: this.time, // use module date
                //  amount: res.data.amount,
                //  status: "ถอน",
                //  mail: "silabig1442@gmail.com"}
                //  this.socket.send(JSON.stringify(message));
                // Clear the input field
                // this.newMessage = ''; //1
                // this.socket.close();
                window.location.reload(); //1
              })
              .catch(error => {
                alert("ถอนเงินสำเร็จ")
                console.log(error)
              })
              this.number = null;
              }
              this.number = null;
            }
        }
    }  
}
</script>

<style scoped>

/* .container{
  display: flex;
  justify-content: center;
  align-items: center;
} */
.container{
  display: grid;
  place-items: center;
}
input {
    background-color: #ffff;
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.2s ease-in-out;
  }
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .button1 {
    background-color: red; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>