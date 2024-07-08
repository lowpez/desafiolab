<template>
  <div class="col-md-3 mb-3">
    <div class="card">
      <!-- Tarjeta Pokemon -->
      <!-- Imagen del Pokémon, desenfocada si no ha sido descubierto -->
      <img :src="img" class="card-img-top" :class="{ 'blurred': !active }" :alt="nombrePokemon" />
      <div class="card-body text-center">
        <h5 v-if="active" class="card-title fw-bolder text-capitalize text-primary">{{ nombrePokemon }}</h5>
        <div v-else>
          <!-- Llama al método checkPokeRespuesta al presionar Enter -->
          <input
            type="text"
            class="form-control mb-2"
            v-model="inputPokemon"
            @keyup.enter="checkPokeRespuesta"
            placeholder="¿Quién es este Pokémon?"
          />
          <button
            class="btn btn-warning border-4 border-primary fw-semibold text-primary"
            @click="checkPokeRespuesta"
          >
            Descubrir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PokemonCard',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      inputPokemon: '', // Almacena la conjetura del usuario
      nombrePokemon: '', // Almacena el nombre del Pokémon
      img: '', // Almacena la imagen del Pokémon
      ready: false, // Indica si los datos del Pokémon están listos
    };
  },
  methods: {
    async obtenerPokemon(url) {
      const { data } = await axios.get(url);
      this.img = data.sprites.front_default;
      this.nombrePokemon = data.name;
      this.ready = true;
    },
    checkPokeRespuesta() {
      this.$emit('validar', this.inputPokemon, this.nombrePokemon, this.id);
      this.inputPokemon = ''; // Reinicia la conjetura
    },
  },
  mounted() {
    this.obtenerPokemon(this.url); // Llama al método para obtener los datos del Pokémon cuando el componente se monta
  },
};
</script>

<style scoped>
/* Estilo para desenfocar la imagen */
.blurred {
  filter: blur(10px);
}
</style>
