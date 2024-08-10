<template>
  <div class="container-md">
    <div class="row">
      <div class="col-12 my-4">
        <div class="card" style="width: 36rem; margin: 0 auto">
          <div class="card-header fw-bold">Carrito de compras</div>
          <ul class="list-group list-group-flush">
            <li v-for="item in items" :key="item.id" class="list-group-item">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 mb-4 text-center">
        <router-link to="/checkout" type="button" class="btn btn-success btn-lg"
          >Pagar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['items']),
    ...mapState(['items']),
  },
};
</script>
