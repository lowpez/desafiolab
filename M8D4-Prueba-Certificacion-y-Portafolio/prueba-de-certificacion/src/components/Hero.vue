<template>
  <section class="row alert alert-light">

    <div class="col-4 text-center">
      <img :src="require('@/assets/logo-tienda.png')" alt="Descripción de la imagen" />
    </div>

    <div class="col-6">
      <h1 class="text-center">{{ name }}</h1>
      <p class="text-center">{{ description }}</p>
      <p class="text-center"><strong>Misión:</strong> {{ mission }}</p>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    mission: String
  }
};
</script>

<style scoped></style>
