<template lang="html">
  <div id="testtransaction">
    <div class="container mt-16"> 
    <span style="color: blue; font-size:14px;"><strong>ประวัติรายการฝากถอน</strong></span>
    <br>
    </div>
    <div class="container">
    <v-data-table
    :headers="headers"
    :items="transaction"
    :items-per-page="5"
    class="elevation-5"
    >

    <template v-slot:[`item.action`] ="item">
 
        <v-dialog
          v-model="dialog"
          width="500">
        <template v-slot:activator="{ on }">
        <v-btn small class="mr-1" color="success" 
         v-on="on" @click="editItem(item)"><v-icon>
            mdi-pencil
        </v-icon></v-btn></template>
        <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <span class="headline"><strong>แก้ไขจำนวนเงินฝาก</strong></span>
        </v-card-title>

        <v-card-text>
          <strong>ของวันที่ {{editedItem.item.time}}</strong> <br>
          <strong>จากอีเมล</strong> silabig1442@gmail.com<br>
          <!-- <span style="color: red; font-size:11px"><strong>จำนวนเงิน *</strong></span> -->
          <!-- <span style="color: red; font-size:11px"><strong>ID</strong></span> -->
          <!-- <input :v-model="editItem.id"  type="text" @keypress="isNum($event)" minlength="1" maxlength="6"> -->
          <span style="color: red; font-size:11px"><strong>จำนวนเงิน *</strong></span>
          <input v-model="editedItem.item.amount"  type="text" @keypress="isNum($event)" minlength="1" maxlength="6">
        </v-card-text>
        
        <v-divider></v-divider>

        <v-card-actions>
          <button class="button" @click="confirm" @keypress="isNum($event)">ยืนยัน</button>  
          <button class="button1" @click="close">ยกเลิก</button> 
        </v-card-actions>
      </v-card>
        </v-dialog>
        <v-btn small color="red" @click="deleteItem(item)"><v-icon color="white">
            mdi-trash-can-outline
        </v-icon></v-btn>

    </template>
    
    </v-data-table>
    </div>
  </div>
</template>

<script>
import FinanceDataService from '../services/FinanceDataService'


export default {
    name: 'TestTransaction',
    components:{
    },
    data(){
        return {
        editedIndex:-1,
        deletedIndex:-1,
        editedItem : {
          item:{
          id:0,
          time:'',
          amount:0,
          status:'',
          mail:'',}
        },
        deletedItem : {
          item:{
          id:0,
          time:'',
          amount:0,
          status:'',
          mail:'',}
        },
        currentTransaction: null,
        dialog: false,
        transaction:[],
        headers: [
          {text:'Id', value: 'id'},
          {
            text: 'Datetime',
            align: 'start',
            sortable: true,
            value: 'time',
          },
          { text: 'Amount', value: 'amount' },
          { text: 'Status', value: 'status' },
          { text: 'Email', value:'mail'},
          { text: 'Action', value:'action',sortable: false, }
        ],

 
     
      }
    },
    created() {
    this.initialize()
    },

    methods:{

    initialize(){
      this.transaction
      console.log(this.transaction)
      
    },
    // getColor (status) {
    //     if (status == 'ฝาก') return 'blue'
    //     // else if (calories > 200) return 'orange'
    //     else return 'red'
    //   },

    close(){
          window.location.reload();
    },
        isNum(e) {
        const num = String.fromCharCode(e.keyCode);
        if (/^[0-9]*$/.test(num)) return true;
        else e.preventDefault();
        },
        retriveTransactions(){
            FinanceDataService.getAll()
            .then((res)=>{
                this.transaction = res.data;
                console.log(res.data);
            })
            .catch((error) =>  {
                console.log(error);
            });
        },
        confirm(){
          FinanceDataService.update(this.editedItem.item.id,{
            time: this.editedItem.item.time,
            amount: Number(this.editedItem.item.amount),
            status: this.editedItem.item.status,
            mail: this.editedItem.item.mail
          }).then(res => {
            console.log(res.data)
            alert("เเก้ไขสำเร็จ");
            window.location.reload();
          }).catch(error => {
            console.log(error);
            alert("เเก้ไขไม่สำเร็จ")
          })
        },
        editItem(item) {
            // this.transaction = this.retriveTransactions();
            // console.log(this.transaction)
            this.editedIndex = this.transaction.indexOf(item)
            this.editedItem = Object.assign({}, item)
            console.log(this.editedItem)
            this.dialog = true
        },
        deleteItem (item) {
            // console.log(this.transaction)
            this.deletedIndex = this.transaction.indexOf(item)
            this.deletedItem = Object.assign({}, item)
            console.log(this.deletedItem)
            // this.dialog = true
            const index = this.transaction.indexOf(item)
            if(confirm('คุณต้องการลบจำนวนเงิน '+ this.deletedItem.item.amount + ' บาท')&& this.transaction.splice(index, 1)){
              FinanceDataService.delete(this.deletedItem.item.id)
              .then(res => {
              console.log(res.data)
              alert("ลบสำเร็จ");
              window.location.reload();
              }).catch(error => {
              console.log(error);
              alert("ลบไม่สำเร็จ")

          })
              
            }

  

        },
        // },
    // }
// }
}       ,
 mounted() {
  this.retriveTransactions();
  setInterval(()=>{
    this.retriveTransactions();
  },5000);
             
        }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
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
    background-color: #079ee4; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
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
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>