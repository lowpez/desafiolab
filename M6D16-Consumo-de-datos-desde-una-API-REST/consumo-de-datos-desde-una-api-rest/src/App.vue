<template>
  <div class="container">
    <div class="row">
      <!-- Usuario 0 -->
      <div class="col">
        <div class="card">
          <img :src="usuarios[0].picture.large" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ usuarios[0].name.first }} {{ usuarios[0].name.last }}</h5>
            <p class="card-text"></p>

            <div class="mb-3">
              <input type="color" class="form-control" aria-describedby="chatColor" v-model="colorUser0">
            </div>

            <div class="form-floating my-3">
              <textarea class="form-control" placeholder="Escribe Algo ..." v-model="mensajeUser0"></textarea>
              <label for="floatingTextarea">Escribe Algo ...</label>
            </div>

            <button class="btn btn-primary w-100" type="submit" @click="enviar(0)">Enviar</button>
          </div>
        </div>
      </div>

      <!-- ChatBase Component -->
      <div class="col-6 bg-chat py-3">
        <ChatBase :mensajes="mensajes"></ChatBase>
      </div>

      <!-- Usuario 1 -->
      <div class="col">
        <div class="card">
          <img :src="usuarios[1].picture.large" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ usuarios[1].name.first }} {{ usuarios[1].name.last }}</h5>
            <p class="card-text"></p>

            <div class="mb-3">
              <input type="color" class="form-control" aria-describedby="chatColor" v-model="colorUser1">
            </div>

            <div class="form-floating my-3">
              <textarea class="form-control" placeholder="Escribe Algo ..." v-model="mensajeUser1"></textarea>
              <label for="floatingTextarea">Escribe Algo ...</label>
            </div>

            <button class="btn btn-primary w-100" type="submit" @click="enviar(1)">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBase from './components/ChatBase.vue';
import axios from 'axios';

export default {
  name: "App",
  components: {
    ChatBase,
  },
  data() {
    return {
      mensajeUser0: '',
      colorUser0: '#ceeaff',
      mensajeUser1: '',
      colorUser1: '#fffefa',
      usuarios: [],
      mensajes: [
        /*{
          nombre: 'Bob',
          cuerpo: 'Hola mundo',
          color: 'aqua',
          lado: 'text-start'
        },
        {
          nombre: 'Bobi',
          cuerpo: 'Hellou mundo',
          color: 'orange',
          lado: 'text-end',
        }*/
      ],
    };
  },
  methods: {
    enviar(id) {
      let cuerpoMensaje;
      let user;
      let color;
      let lado;

      if (id === 0) {
        cuerpoMensaje = this.mensajeUser0;
        user = this.usuarios[0].name.first;
        color = this.colorUser0;
        lado = 'text-start';
        this.mensajeUser0 = '';
      } else {
        cuerpoMensaje = this.mensajeUser1;
        user = this.usuarios[1].name.first;
        color = this.colorUser1;
        lado = 'text-end';
        this.mensajeUser1 = '';
      }

      if (cuerpoMensaje && user) {
        this.mensajes.push({
          nombre: user,
          cuerpo: cuerpoMensaje,
          color: color,
          lado: lado,
        });
      }
    }
  },
  async beforeMount() {
    const url = "https://randomuser.me/api?results=2";
    const { data } = await axios.get(url);
    this.usuarios = data.results;
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

.bg-chat {
  background-color: #efe7dd;
}
</style>
