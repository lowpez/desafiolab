<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Buscar productos..."
      v-model="query"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('search', this.query);
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
