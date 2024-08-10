<template>
  <Logo />
  <div class="container-md">
    <div class="alert alert-light my-4" role="alert" style="width: 50rem; margin: 0 auto">
      <h4 class="alert-heading">¡Registro exitoso!</h4>
      <p>
        Tu cuenta ha sido registrada correctamente. Para iniciar sesión, ingresa
        al siguiente
      </p>
      <router-link to="/" class="btn btn-dark">Regresar al Login</router-link>
      <hr />
      <p class="mb-0">¡Desde ahora disfruta nuestras ofertas y productos!</p>
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
};
</script>
