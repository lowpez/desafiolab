<template>
  <div class="container-md my-4 d-flex flex-column">

    <Hero :name="generalInfo.name" :description="generalInfo.description" :mission="generalInfo.mission" />


    <section class="my-5"><!--Proveedores-->
      <h2 class="mb-4">Proveedores</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(provider, index) in providers" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ provider.name }}</td>
            <td>{{ provider.contactInfo.email }}</td>
            <td>{{ provider.contactInfo.phone }}</td>
          </tr>
        </tbody>
      </table>

      <button @click="navigateToRegisterProvider" class="btn btn-info btn-lg">Registrar Proveedor</button>
    </section>

    <section class="my-4 row"><!--Laboratorios-->
      <h2 class="mb-4">Laboratorios</h2>
      <div v-for="(lab, index) in laboratories" :key="index" class="col-6">
        <div class="border p-3">

          <h4>{{ lab.name }}</h4>
          <p><strong>Teléfono:</strong> {{ lab.contactInfo.phone }}</p>
          <p><strong>Correo:</strong> {{ lab.contactInfo.email }}</p>
          <ul>
            <li v-for="(service, serviceIndex) in lab.services" :key="serviceIndex">{{ service }}</li>
          </ul>

        </div>

      </div>
    </section>

    <section class="row my-5 g-3 py-4 alert alert-light"><!--Listado Productos-->
      <div class="col-6 text-center">
        <h2 class="fs-1">Listado Productos</h2>
      </div>
      <div class="col-auto">
        <button @click="navigateToProducts" class="btn btn-info btn-lg">Ver Listado de Productos</button>
      </div>

    </section>
    <!--Sociales y Contacto-->
    <Social :address="contactInfo.address" :phone="contactInfo.phone" :email="contactInfo.email"
      :socialMedia="contactInfo.socialMedia" />

  </div>
</template>

<script>
import axios from 'axios';

import Social from '@/components/Social.vue';
import Hero from '@/components/Hero.vue';
import api from '@/api';

export default {
  name: 'HomeView',
  components: { Social, Hero },

  data() {
    return {
      generalInfo: {},
      providers: [],
      laboratories: [],
      contactInfo: {}
    };
  },
  methods: {
    async fetchHomeData() {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/home.json');
        const homeData = response.data.home;
        this.generalInfo = homeData.generalInfo;
        this.providers = homeData.providers;
        this.laboratories = homeData.laboratories;
        this.contactInfo = homeData.contactInfo;
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    },
    navigateToRegisterProvider() {
      this.$router.push('/register-provider');
    },
    navigateToProducts() {
      this.$router.push('/products');
    }
  },
  created() {
    this.fetchHomeData();
  }
};
</script>

<style scoped></style>
