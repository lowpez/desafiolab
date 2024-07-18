<template>
  <div class="card me-2" style="width: 18rem;">
    <img :src="imagen" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ nombre }}</h5>
      <p class="card-text">
        {{ descripcion }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li v-for="(item, key) in tecnologias" :key="key" class="list-group-item">{{ item }}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">{{ dificultad }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProyectoItem',
  props: ['nombre', 'imagen', 'descripcion', 'tecnologias', 'dificultad'],
};

</script>