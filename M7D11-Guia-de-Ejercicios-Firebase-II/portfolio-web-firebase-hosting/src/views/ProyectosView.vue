<template>
  <div class="container proyectos">
    <div class="row my-4">
      <h1>Página de proyectos</h1>
    </div>

    <div class="card-group my-4">
      <div v-for="(proyecto, key) in proyectos" :key="key">
        <ProyectoItem 
          :nombre="proyecto.nombre" 
          :imagen="proyecto.imagen" 
          :descripcion="proyecto.descripcion"
          :tecnologias="proyecto.tecnologias" 
          :dificultad="proyecto.dificultad" 
        />
      </div>
    </div>

  </div>
</template>

<script>
import ProyectoItem from '@/components/ProyectoItem.vue';

export default {
  name: 'ProyectosView',
  components: {
    ProyectoItem,
  },
  data() {
    return {
      proyectos: [
        {
          nombre: 'El modelo de cajas y el layout',
          imagen: 'https://i.imgur.com/YaSWnBP.png',
          descripcion: 'Aprender sobre en qué consiste el modelo de cajas en CSS.',
          tecnologias: ['HTML', 'CSS'],
          dificultad: 'Baja',
        },
        {
          nombre: 'Quien es ese Pokémon?',
          imagen: 'https://i.imgur.com/YaSWnBP.png',
          descripcion: 'Adivina el nombre del Pokémon solo con su silueta.',
          tecnologias: ['Vue', 'HTML','CSS'],
          dificultad: 'Media',
        },
        {
          nombre: 'Cachipun contra la maquina',
          imagen: 'https://i.imgur.com/YaSWnBP.png',
          descripcion: 'Recreacion en Javascript el clasico Cachipun contra la maquina',
          tecnologias: ['Js', 'HTML', 'CSS'],
          dificultad: 'Baja',
        },
        {
          nombre: 'Red Social',
          imagen: 'https://i.imgur.com/YaSWnBP.png',
          descripcion: 'Red Social similar a Facebook',
          tecnologias: ['Vue', 'HTML', 'Firebase'],
          dificultad: 'Alta',
        },
      ],
    };
  },
};
</script>