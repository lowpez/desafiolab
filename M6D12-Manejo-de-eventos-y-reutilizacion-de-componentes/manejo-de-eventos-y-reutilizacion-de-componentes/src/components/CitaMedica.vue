<template>
  <!--CITA-->
  <div class="card rounded shadow border-0" :class="{
    'bg-success': gravedad === 'Baja',
    'bg-warning': gravedad === 'Media',
    'bg-danger': gravedad === 'Alta',
  }">
    <div class="card-body">
      <h5 class="card-title">{{ paciente }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ hora }} {{ fecha }} </h6>
      <p class="card-text">{{ motivo }}</p>
      <button class="btn btn-dark" @click="$emit('eliminarCita')">Eliminar</button>
    </div>
  </div><!--/CITA-->

</template>

<script>

export default {

  name: 'CitaMedica',
  props: ['paciente', 'fecha', 'hora', 'motivo', 'gravedad'],

};

</script>

<style scoped></style>
