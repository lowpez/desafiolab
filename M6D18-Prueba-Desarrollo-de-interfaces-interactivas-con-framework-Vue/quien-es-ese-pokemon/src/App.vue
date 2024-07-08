<template>
  <div class="container mt-5">
  <img class="img-fluid mx-auto d-block mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpDDd16-m8fTneCbtEI1TYpDiVqegO11beA&s" />
    <h1 class="text-center mb-4">¿Quién es ese Pokémon?</h1>
    <div class="text-center mb-4">
      <!-- Mostramos el número de Pokemones descubiertos -->
      <strong>Pokémons descubiertos: {{ pokemonesDescubiertos }}</strong>
    </div>
    <div class="row">
      <!-- Fila que contiene las tarjetas de Pokémon -->
      <!-- Iteramos sobre cada Pokémon en el array 'pokemones' y renderiza el componente PokemonCard -->
      <PokemonCard
        v-for="(pokemon, index) in pokemones"
        :key="index"
        :active="pokemon.active"
        :url="pokemon.url"
        :id="pokemon.id"
        @validar="validar"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from './components/PokemonCard.vue';

export default {
  name: 'App',
  components: {
    PokemonCard, // Declara el componente PokemonCard para poder usarlo
  },
  data() {
    return {
      pokemones: [], // Array para almacenar los datos de los Pokémon
      pokemonesDescubiertos: 0, // Contador de Pokémon descubiertos
    };
  },
  methods: {
    async obtenerPokemones() {
      try {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
        const { data } = await axios.get(url);
        this.pokemones = data.results.map((pokemon, index) => ({
          url: pokemon.url,
          id: index,
          active: false,
        }));
      } catch (error) {
        console.error(error); // Manejo de errores
      }
    },
    validar(inputPokemon, nombrePokemon, id) {
      if (inputPokemon.toLowerCase() === nombrePokemon.toLowerCase()) {
        this.pokemones[id].active = true;
        this.pokemonesDescubiertos++;
      } else {
        alert('Nombre incorrecto. Inténtalo de nuevo.');
      }
    },
  },
  async mounted() {
    await this.obtenerPokemones(); // Llama al método para obtener los Pokemones cuando el componente se monta
  },
};
</script>

<style></style>
