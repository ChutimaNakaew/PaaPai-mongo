import { createRouter, createWebHistory } from 'vue-router'
import Tour from '../views/Tour.vue'
import DetailTour from '../views/DetailTour.vue'
import Form from '../views/Form.vue'
import ConfirmTour from '../views/ConfirmTour.vue'
import Payment from '@/views/Payment.vue'
import Status from '../views/Status.vue'
import adminApprove from '../views/admin/adminApprove.vue'
import adminCreateTour from '../views/admin/adminCreateTour.vue'
import adminEditTour from '../views/admin/adminEditTour.vue'
import adminHome from '../views/admin/adminHome.vue'
import adminLogin from '../views/admin/adminLogin.vue'
import adminManage from '../views/admin/adminManage.vue'
import adminPayment from '../views/admin/adminPayment.vue'
import adminReject from '../views/admin/adminReject.vue'
import adminSlip from '../views/admin/adminSlip.vue'
import adminTour from '../views/admin/adminTour.vue'
import adminUser from '../views/admin/adminUser.vue'
import adminUserInfo from '../views/admin/adminUserInfo.vue'
import CheckStatus from '../views/CheckStatus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tour',
      component: Tour
    },
    {
      path: '/tour/:name',
      name: 'detail',
      component: DetailTour
    },
    {
      path: '/tour/:name/form',
      name: 'form',
      component: Form
    },
    {
      path: '/form/:id/confirm',
      name: 'confirm',
      component: ConfirmTour
    },
    {
      path: '/form/:id/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/booking/:id/status',
      name: 'status',
      component: Status
    },
    
  
  
    // Admin
    {
      path: '/admin/home',
      name: 'home',
      component: adminHome
    },
    {
      path: '/admin/allTour',
      name: 'admintour',
      component: adminTour
    },
    {
      path: '/admin/allTour/:tourName/detail',
      name: 'alluser',
      component: adminUser
    },
    {
      path: '/admin/checkPayment',
      name: 'pay',
      component: adminPayment
    },
    {
      path: '/admin/approve',
      name: 'pass',
      component: adminApprove
    },
    {
      path: '/admin/reject',
      name: 'notpass',
      component: adminReject
    },
    {
      path: '/admin/manage',
      name: 'manage',
      component: adminManage
    },
    {
      path: '/admin/info/:id',
      name: 'info',
      component: adminUserInfo
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: adminEditTour
    },
    {
      path: '/create/:name',
      name: 'create',
      component: adminCreateTour
    },
    {
      path: '/admin/slip/:id',
      name: 'slip',
      component: adminSlip
    },
    {
      path: '/admin/login',
      name: 'login',
      component: adminLogin
    },
    {
      path: '/statusUser',
      name: 'statusCheck',
      component: CheckStatus
    }
  
  ]
})

export default router
