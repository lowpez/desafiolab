<template>

  <div class="container">

    <div class="d-flex justify-content-center">

      <div class="col-6">

        <h1>Busca tu Pokemon</h1>
        <h2>Usa un número o el nombre del Pokemon</h2>
        <input class="form-control my-3" v-model="entradaPokemon" />
        <button @click="buscar" class="btn btn-primary w-100">Buscar</button>
        <div v-if="listo" class="text-center mt-4">
          <figure class="figure">
            <img :src="pokeFoto" class="figure-img img-fluid" alt="...">
            <figcaption class="figure-caption">{{ pokeName }}</figcaption>
          </figure>
        </div>
        <div v-else-if="error" class="text-danger text-center">
          No encontrado
        </div>

      </div>

    </div>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      entradaPokemon: '',
      pokeName: '',
      pokeFoto: '',
      listo: false,
      error: false,
    };
  },
  methods: {
    buscar: async function () {
      this.listo = false;
      this.error = false;
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.entradaPokemon.toLowerCase()}/`;
        const { data } = await axios.get(url);
        this.pokeName = data.name;
        this.pokeFoto = data.sprites.front_default;
        this.entradaPokemon = '';
        console.log(data);
        this.listo = true;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
  mounted() {
    //this.buscar();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
