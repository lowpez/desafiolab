<template>
  <section class="row my-5">
    <div class="col-6 text-center">
      <h4>Síguenos en:</h4>
      <p class="fs-3">
        <a :href="socialMedia.facebook" v-if="socialMedia.facebook"><i class="fa-brands fa-facebook px-2"></i></a>
        <a :href="socialMedia.twitter" v-if="socialMedia.twitter"><i class="fa-brands fa-twitter px-2"></i></a>
        <a :href="socialMedia.instagram" v-if="socialMedia.instagram"><i class="fa-brands fa-instagram px-2"></i></a>
      </p>
    </div>

    <div class="col-6">
      <h2>Contacto</h2>
      <p><strong>Dirección:</strong> {{ address }}</p>
      <p><strong>Teléfono:</strong> {{ phone }}</p>
      <p><strong>Correo:</strong> {{ email }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    address: String,
    phone: String,
    email: String,
    socialMedia: {
      type: Object,
      default: () => ({
        facebook: '',
        twitter: '',
        instagram: '',
      }),
    },
  },
};
</script>
