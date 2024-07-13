<template>

<div class="row mt-5">
    <table class="table">
      <thead>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Correo</th>
        <th scope="col">Acciones</th>
      </thead>
      <tbody class="table-group-divider">
        <!--Itera sobre cada producto en el estado del store de Vuex-->
        <tr v-for="usuario in users" :key="usuario.id">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.apellido }}</td>
          <td>{{ usuario.correo }}</td>
          <td>
            <div class="btn-group" role="group"><!-- Botones para restar y sumar stock -->
              <button @click="deleteUser(usuario.id)" class="btn btn-danger">-</button>
              &nbsp;
 
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import firebaseApp from '../firebaseConfig';
import { getFirestore, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore';

export default {
  name: 'ListUsers',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async deleteUser(userId) {
      const db = getFirestore(firebaseApp);
      const userRef = doc(db, 'usuarios', userId);
      await deleteDoc(userRef);
      alert('Usuario eliminado exitosamente');
    },
  },
  mounted() {
    const db = getFirestore(firebaseApp);
    const usersRef = collection(db, 'usuarios');
    onSnapshot(usersRef, (snapshot) => {
      this.users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  },
};
</script>

<style scoped></style>
