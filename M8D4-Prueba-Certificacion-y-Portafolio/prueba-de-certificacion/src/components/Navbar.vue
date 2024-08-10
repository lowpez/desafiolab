<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-md">
      <router-link to="/" class="navbar-brand text-decoration-none fs-4">Tienda de Mascotas Patitas</router-link>
      <!--<form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>-->

      <div class="d-flex">
        <router-link to="/cart" type="button" class="btn btn-primary">Carrito
          <span class="badge text-bg-secondary">{{
            totalItems
            }}</span></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    ...mapGetters(['items', 'totalItems']),
    ...mapState(['items']),
  },
};
</script>

<style scoped>
.bg-xxx{
  background: #732ff9;
}
</style>
