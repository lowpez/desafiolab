import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
   },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  /*{
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },*/
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/register-provider',
    name: 'providerRegister',
    component: () => import('../views/RegisterProvider.vue'),
  },
  { 
    path: '/confirm-provider-registration',
    name: 'confirmProviderRegistration',
    component: () => import('../views/ConfirmProviderRegistration.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue'),
  },
  {
    path: '/confirmed_checkout',
    name: 'confirmedCheckout',
    component: () => import('../views/ConfirmedCheckoutView.vue'),
  },
  {
    path: '/confirmed_register',
    name: 'confirmedRegister',
    component: () => import('../views/ConfirmedRegisterView.vue'),
  },
  {
    path: '/products',
    name: 'producs',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
