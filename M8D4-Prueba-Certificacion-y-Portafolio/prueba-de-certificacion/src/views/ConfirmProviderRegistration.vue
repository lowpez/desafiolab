<template>
  <Logo />
  <div class="container-md">
    <div class="alert alert-light my-4" role="alert" style="width: 50rem; margin: 0 auto">
      <h4 class="alert-heading">¡Registro de Proveedor exitoso!</h4>
      <p>
        La cuenta ha sido registrada correctamente.
        <!--<p>{{ message }}</p>-->
      </p>
      <router-link to="/" class="btn btn-dark">Regresar al Home</router-link>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Logo from '@/components/Logo.vue';

export default {
  components: {
    Logo,
  },
  /*data() {
    return {
      message: 'Proveedor registrado exitosamente!'
    };
  },
  methods: {
    
  }*/
};
</script>
