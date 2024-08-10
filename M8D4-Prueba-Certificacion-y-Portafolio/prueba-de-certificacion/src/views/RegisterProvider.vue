<template>
  <Logo />
  <div class="container-md my-4 d-flex flex-column">
    <h3 class="text-center">Registro de Proveedor</h3>
    <div v-if="alertMessage" class="alert alert-danger mt-2" role="alert" style="width: 18rem; margin: 0 auto">
      {{ alertMessage }}
    </div>
    <div class="card my-4" style="width: 18rem; margin: 0 auto">
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Nombre Proveedor:</label>
            <input v-model="name" type="text" class="form-control" id="exampleInputName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Nombre Persona de contacto:</label>
            <input v-model="contactPerson" type="text" class="form-control" id="exampleInputName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPhone" class="form-label">Teléfono</label>
            <input v-model="phone" type="text" class="form-control" id="exampleInputPhone" />
          </div>
          <button @click="register" class="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Logo from '@/components/Logo.vue';

export default {
  name: 'RegisterProvider',

  components: {
    Logo,
  },

  data() {
    return {
      name: '',
      email: '',
      contactPerson: '',
      phone: '',
      alertMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        const url = 'https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/providerRegisterReq.json';
        const resp = await axios.get(url);
        const data = resp.data.registerProviderRequest;
        const nameData = data.name;
        const phoneData = data.phone;
        const emailData = data.email;
        const contactPersonData = data.contactPerson;

        if (this.name.trim() !== '' && this.phone.trim() !== '' && this.email.trim() !== '' && this.contactPerson.trim() !== '') {
          if (this.name === nameData && this.phone === phoneData && this.email === emailData && this.contactPerson === contactPersonData) {
            this.alertMessage = '';
            this.$router.push('/confirm-provider-registration');
          } else {
            this.alertMessage = 'Credenciales inválidas.';
          }
        } else {
          this.alertMessage = 'Todos los campos son necesarios.';
        }
      } catch (error) {
        console.log(error);
        this.alertMessage = 'Error en la solicitud. Inténtelo de nuevo más tarde.';
      }
    },
  },
};
</script>
