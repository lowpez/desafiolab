<template>
  <Logo />
  <div class="container-md my-4 d-flex flex-column">
    <h3 class="text-center">Iniciar sesión</h3>
    <div v-if="alertMessage" class="alert alert-danger mt-2" role="alert" style="width: 18rem; margin: 0 auto">
      {{ alertMessage }}
    </div>
    <div class="card my-4" style="width: 18rem; margin: 0 auto">
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              v-model="email" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
          </div>
          <button @click="login()" class="btn btn-primary">
            Iniciar sesión
          </button>
        </form>
        <p class="mt-5 pt-2">
          <router-link to="/register" type="button" class="alert-link text-primary">Registrarse</router-link>
        </p>

      </div>
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
  data() {
    return {
      email: '',
      password: '',
      alertMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        const url = 'https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/login.json';
        const response = await axios.get(url);
        const data = response.data.loginRequest;
        const emailData = data.email;
        const passwordData = data.password;

        if (this.email.trim() !== '' && this.password.trim() !== '') {
          if (this.email === emailData && this.password === passwordData) {
            this.alertMessage = '';
            this.$router.push('/home');
          } else {
            this.alertMessage = 'Credenciales inválidas.';
          }
        } else {
          this.alertMessage = 'Algún campo está vacío.';
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
