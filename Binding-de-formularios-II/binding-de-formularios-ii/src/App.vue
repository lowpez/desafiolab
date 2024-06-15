<template>

  <main class="container">

    <div class="d-flex flex-wrap justify-content-around">

      <div class="col col-md-5 p-4 bg-black text-white rounded-4">
        <form>
          <div class="mb-3 row"><!--TITULO-->

            <label for="titulo" class="col-sm-2 col-form-label">Titulo</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="titulo" />
            </div>

          </div>
          <hr>

          <div class="mb-3 row"><!--EMOJI-->

            <label for="Emoji" class="col-sm-2 col-form-label">Emoji</label>
            <div class="col-sm-10">
              <select class="form-select" v-model="emoji">
                <option value="&#128113;">&#128113;</option>
                <option value="&#128187;">&#128187;</option>
                <option value="&#127928;">&#127928;</option>
              </select>
            </div>

          </div>
          <hr>

          <div class="mb-3 row"><!--APRECIACION-->

            <label for="apreaciacion" class="col-sm-3 col-form-label">Apreaciacion</label>
            <div class="col-sm-9">
              <div class="d-flex gap-3">

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="apreciacion" value="Regular"
                    v-model="apreciacion" />
                  <label class="form-check-label fw-normal" for="m">
                    Regular
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="apreciacion" value="Bien" v-model="apreciacion" />
                  <label class="form-check-label fw-normal" for="f"> Bien</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="apreciacion" value="Muy Bien"
                    v-model="apreciacion" />
                  <label class="form-check-label fw-normal" for="f">Muy Bien</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="apreciacion" value="Increíble"
                    v-model="apreciacion" />
                  <label class="form-check-label fw-normal" for="f">Increíble</label>
                </div>

              </div>
            </div>

          </div>
          <hr>

          <div class="mb-3 d-flex flex-wrap justify-content-between"><!--COMPETENCIAS-->
            <label for="opinion" class="col-sm-2 col-form-label">Competencias aprendidas:</label>
            <div class="col-sm-9">
              <input type="checkbox" name="competencias" value="Morfologia de un componente"
                v-model="competencias">Morfologia de un componente
              <input type="checkbox" name="competencias" value="One-way y Two-way Data Binding"
                v-model="competencias">One-way y Two-way Data Binding
              <input type="checkbox" name="competencias" value="El Patrón de diseño MVVM" v-model="competencias">El
              Patrón de diseño MVVM
              <input type="checkbox" name="competencias" value="Directivas" v-model="competencias">Directivas
              <input type="checkbox" name="competencias" value="Estado" v-model="competencias">Estado
            </div>
          </div>

          <div class="mb-3 row"><!--OPINION-->
            <label for="opinion" class="col-sm-2 col-form-label">Opinion:</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="opinion"></textarea>
            </div>
          </div>

        </form>
      </div>

      <div class="flex-grow-1 p-4 border border-dark-subtle rounded-4 ms-md-2"><!--OUTPUT-->

        <h1>{{ emoji }}</h1>
        <h2>{{ titulo }}</h2>
        <h3 v-if="apreciacion">Y me parece {{ apreciacion }}</h3>
        <h4 v-if="competencias.length > 0">He aprendido:</h4>
        <p v-if="competencias.length > 0">{{ competencias }}</p>
        <h4 v-if="opinion">Mi opinion hasta ahora del framework es:</h4>
        <p>{{ opinion }}</p>

      </div>

    </div>

  </main>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      titulo: "",
      emoji: "",
      apreciacion: false,
      competencias: [], //Los checkbox al poder recibir multiples valores, los trabajaremos como un arreglo.
      opinion: ""
    };
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