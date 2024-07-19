<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12 col-md-6 mx-auto">
        <h2 class="mt-4">Registro</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo</label>
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input
              id="exampleInputPassword1"
              type="password"
              class="form-control"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>

    <div v-if="ok !== null" class="row mt-4">
      <!-- Respuesta al registro -->
      <div class="col-12 col-md-6 mx-auto">
        <div v-if="ok" class="alert alert-success" role="alert">
          Registro exitoso.
        </div>
        <div v-else class="alert alert-danger" role="alert">
          Hubo un error. Intente más tarde.
        </div>
      </div>
    </div>
    <!-- / Respuesta al registro -->
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, auth } from '../auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      ok: null, // Variable para determinar el estado del registro
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        console.log(user);
        this.ok = true; // Indicar éxito en el registro
      } catch (error) {
        console.log(error);
        this.ok = false; // Indicar error en el registro
      }
    },
  },
};
</script>

<style scoped>
</style>
