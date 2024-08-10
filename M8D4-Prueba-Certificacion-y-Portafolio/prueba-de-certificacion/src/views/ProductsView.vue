<template>
  <div class="container-md my-4 d-flex flex-column">
    <Hero :name="generalInfo.name" :description="generalInfo.description" :mission="generalInfo.mission" />

    <div class="row my-4">
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3 mb-4" v-for="(producto) in productos" :key="producto.id">
            <Item :id="producto.id" :title="producto.name" :price="producto.price" :image="defaultImage" />
          </div>
        </div>
      </div>
    </div>
    <Social :address="contactInfo.address" :phone="contactInfo.phone" :email="contactInfo.email"
      :socialMedia="contactInfo.socialMedia" />
  </div>
</template>

<script>
import axios from 'axios';
import Item from '../components/Item.vue';
import Hero from '@/components/Hero.vue';
import Social from '@/components/Social.vue';
import api from '@/api';

export default {
  components: {
    Hero,
    Social,
    Item,
  },
  data() {
    return {
      generalInfo: {},
      contactInfo: {},
      productos: [],
      defaultImage: 'https://via.placeholder.com/500' // Imagen predeterminada
    };
  },
  async created() {
    const homeData = await api.fetchHomeData();
    if (homeData) {
      this.generalInfo = homeData.generalInfo;
      this.contactInfo = homeData.contactInfo;
    }
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const url = 'https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/products.json';
        const resp = await axios.get(url);
        const data = resp.data.products;
        this.productos = data;
        console.log(this.productos);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
