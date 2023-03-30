import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DepositWithdraw from '../views/DepositWithdraw.vue'
import Transaction from '../views/Transaction.vue'
import Personal from '../views/Personal.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/depositwithdraw',
    name: 'DepositWithdraw',
    component: DepositWithdraw
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  }

]

const router = new VueRouter({
  routes
})

export default router
