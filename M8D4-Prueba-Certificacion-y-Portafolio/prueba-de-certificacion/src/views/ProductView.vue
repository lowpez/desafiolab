<template>
  <div class="container-md my-4 d-flex flex-column">
    <Hero :name="generalInfo.name" :description="generalInfo.description" :mission="generalInfo.mission" />

    <div class="d-flex justify-content-end">
      <router-link to="/products" type="button" class="btn btn-dark w-25">
        < Regresar Listado Productos </router-link>
    </div>

    <div class="row my-4">
      <div class="col-6">
        <img :src="image || defaultImage" class="img-fluid" alt="Product Image" />
      </div>
      <div class="col-6">
        <div class="card h-100" style="width: 100%">
          <div class="card-body">
            <h6 class="card-subtitle mb-4 text-body-secondary">Categoría: {{ category }}</h6>
            <hr>
            <h1 class="card-title">{{ title }}</h1>

            <p class="card-text">{{ description }}</p>
            <p class="fw-bold fs-4">$ {{ price }}</p>
            <p class="fw-bold">Stock: {{ stock }}</p>
            <button @click="addProduct" class="btn btn-primary">Agregar</button>
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
import { mapActions } from 'vuex';
import Hero from '@/components/Hero.vue';
import Social from '@/components/Social.vue';
import api from '@/api';

export default {
  components: {
    Hero,
    Social,
  },
  data() {
    return {
      generalInfo: {},
      contactInfo: {},
      id: '',
      title: '',
      description: '',
      category: '',
      price: '',
      stock: '',
      image: '',
      defaultImage: 'https://via.placeholder.com/500' // Imagen predeterminada
    };
  },
  async created() {
    const id = this.$route.params.id;

    const homeData = await api.fetchHomeData();
    if (homeData) {
      this.generalInfo = homeData.generalInfo;
      this.contactInfo = homeData.contactInfo;
    }
    await this.fetchProduct(id);
  },
  methods: {
    ...mapActions(['addItem']),
    async fetchProduct(id) {
      try {
        const url = `https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/products.json`;
        const response = await axios.get(url);
        const products = response.data.products;
        const product = products.find(p => p.id === parseInt(id));

        if (product) {
          this.id = product.id;
          this.title = product.name;
          this.description = product.description;
          this.category = product.category;
          this.price = product.price;
          this.stock = product.stock;
          this.image = product.image || this.defaultImage; // Usa imagen por defecto si no hay imagen
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    },
    addProduct() {
      this.addItem({
        id: this.id,
        title: this.title,
        description: this.description,
        category: this.category,
        price: this.price,
        image: this.image,
      });
    },
  },
};
</script>
