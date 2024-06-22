<template>

  <div class="container">

    <form><!--FORM-->

      <div class="row g-3 rounded shadow p-3 border">

        <div class="col">

          <label :class="{'text-danger': !paciente}" for="" class="form-label">Paciente</label>
          <input type="text" class="form-control" v-model="paciente" />

        </div>

        <div class="col">
          <label :class="{'text-danger': !fecha}" for="" class="form-label">Fecha</label>
          <input type="date" class="form-control" v-model="fecha" />

        </div>

        <div class="col">

          <label :class="{'text-danger': !hora}" for="" class="form-label">Hora</label>
          <input type="time" class="form-control" v-model="hora" />

        </div>

        <div class="col">

          <label :class="{'text-danger': !gravedad}" for="" class="form-label">Gravedad</label>
          <select v-model="gravedad" class="form-select" aria-label="Default select example">
            <option v-for="(g, i) in gravedades" :key="i">
              {{ g }}
            </option>
          </select>

        </div>

        <div class="col">

          <label :class="{'text-danger': !motivo}" for="" class="form-label">Motivo</label>
          <input type="text" class="form-control" v-model="motivo" />

        </div>

      </div>

      <div class="my-3 gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-dark" @click="agregar"
            :class="{
              disabled:
                paciente.length == 0 ||
                fecha.length == 0 ||
                hora.length == 0 ||
                gravedad.length == 0 ||
                motivo.length == 0,
            }"
          >Aceptar</button>
      </div>

    </form><!--/FORM-->

    <div  v-if="citas.length > 0" class="row"><!--CITAS-->
      <div class="col-3 my-3" v-for="(cita, index) in citas" :key="index">

        <CitaMedica 
        :paciente="cita.paciente" 
        :fecha="cita.fecha" 
        :hora="cita.hora" 
        :gravedad="cita.gravedad"
        :motivo="cita.motivo"
        @eliminarCita="citas.splice(index, 1)" />

      </div>
      
    </div><!--/CITAS-->

    <div v-else class="row"><!--MENSAJE INDICANDO NO HAY CONSULTAS-->
      <h4 class="my-4">Aún no hay consultas registradas</h4>
    </div>

  </div>
  

</template>

<script>

import CitaMedica from './components/CitaMedica.vue';

export default {
  name: 'App',
  components: {
    CitaMedica,
  },
  data() {
    return {
      paciente: '',
      fecha: '',
      hora: '',
      motivo: '',
      gravedadSeleccionada: '',
      gravedades: ['Baja', 'Media', 'Alta'],

      citas: [
        {
          paciente: 'Tim Berners-Lee',
          fecha: '2023-01-11',
          hora: '08:20',
          motivo: 'Virus ILOVEYOU',
          gravedad: 'Alta',
        },
        {
          paciente: 'John Carmack',
          fecha: '2023-01-11',
          hora: '09:00',
          motivo: 'Gripe con Tos',
          gravedad: 'Media',
        },
      ],
    };
  },
  methods: {
    limpiar: function () {
      this.paciente = '';
      this.fecha = '';
      this.hora = '';
      this.motivo = '';
      this.gravedad = '';
    },
    agregar: function () {
      this.citas.push({
        paciente: this.paciente,
        fecha: this.fecha,
        hora: this.hora,
        motivo: this.motivo,
        gravedad: this.gravedad,
      });
      this.limpiar();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
