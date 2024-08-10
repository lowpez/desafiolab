<template>
  <div class="card h-100" style="width: 100%">
    <img :src="image || defaultImage" class="card-img-top" alt="Product Image" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">$ {{ price }}</p>
      <router-link :to="`/product/${id}`" class="btn btn-primary">Visitar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'price', 'image'],
  data() {
    return {
      defaultImage: 'https://via.placeholder.com/500' // Imagen predeterminada
    };
  },
};
</script>
