<template>

  <div class="row py-4 my-4 text-center">
    <h1 class="fw-bold">Firebase CRUD</h1>
    <h2 class="fw-semibold">Administra los usuarios</h2>
    <!--<button @click="getProductos">Obtener productos</button>-->
  </div>
  <div class="col-6 mx-auto">
    <form @submit.prevent="addUser">

      <input type="text" class="form-control mb-2" v-model="name" placeholder="Nombre" />
      <input type="text" class="form-control mb-2" v-model="lastname" placeholder="Apellido" />
      <input type="text" class="form-control mb-2" v-model="email" placeholder="Correo" />
      <input type="password" class="form-control mb-2" v-model="password" placeholder="Password" />
      <button type="submit" class="btn btn-primary">Crear Usuario</button>

    </form>
  </div>
</template>

<script>
import firebaseApp from '../firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
  name: 'CreateUser',
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      password: '',
    };
  },

  methods: {
    async addUser() {
      if (this.name.trim() === '') return;
      if (this.lastname.trim() === '') return;
      if (this.email.trim() === '') return;
      if (this.password.trim() === '') return;

      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, 'usuarios');

      await addDoc(usersRef, {
        nombre: this.name,
        apellido: this.lastname,
        correo: this.email,
        password: btoa(this.password), // Codifica la contraseña en base64
      });

      alert('Usuario creado exitosamente');

      // Limpiamos los campos del formulario
      this.name = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped></style>
