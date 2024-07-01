<template>
  <div class="chat-window">
    <div v-for="(mensaje, index) in mensajes" :key="index" :class="['message', mensaje.lado]">
      <div class="message-info py-1">
        <strong>{{ mensaje.nombre }}</strong>
      </div>
      <div class="message-body d-inline small p-2 my-1 rounded-3" :style="{ backgroundColor: mensaje.color }">
        {{ mensaje.cuerpo }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBase',
  props: ['mensajes'],
};
</script>

<style scoped>
.chat-window {
  height: 500px;
  overflow-y: auto;
}

.message-body {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
