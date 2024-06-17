<template>
  <main class="container"><!--MAIN-->

    <div class="d-flex flex-wrap justify-content-around"><!--CONTENT-->

      <div class="col col-md-5 p-4 bg-musgo text-white rounded-4"><!--FORM-->
        <form>
          <div class="mb-3">
            <label for="bgColor" class="form-label">Color de fondo</label>
            <select class="form-select" aria-label="Default select example" v-model="bgColor">
              <option v-for="color in bgColors" :key="color" :value="color">{{ color }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="textColor" class="form-label">Color de texto</label>
            <select class="form-select" aria-label="Default select example" v-model="textColor">
              <option v-for="color in textColors" :key="color" :value="color">{{ color }}</option>
            </select>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="mostrarTexto" v-model="mostrarTexto">
            <label class="form-check-label" for="mostrarTexto">Mostrar texto</label>
          </div>
          <div class="mb-3">
            <label for="BorderRadius" class="form-label">Borde</label>
            <input type="range" class="form-range" id="BorderRadius" v-model="borderRadius" min="0" max="320">
          </div>
          <div class="mb-3">
            <label for="opinion" class="form-label">Contenido textual</label>
            <textarea class="form-control" v-model="contenidoTextual"></textarea>
          </div>
          <div class="mb-3">
            <label for="opinion" class="form-label">Tipografia</label>
            <select class="form-select" aria-label="Default select example" v-model="tipografia">
              <option v-for="tipografia in tipografias" :key="tipografia.value" :value="tipografia.value">{{ tipografia.label }}</option>
            </select>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="opaco">
            <label class="form-check-label" for="opaco">Opaco</label>
          </div>

          <div class="mb-3">
            <label for="tamanoLetra" class="col-sm-3 col-form-label">Tamaño de letra</label>
            <div class="col-sm-9">
              <div class="d-flex gap-3">

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="tamanoLetra" value="Regular"
                    v-model="tamanoLetra" />
                  <label class="form-check-label fw-normal" for="m">
                    Pequeño
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="tamanoLetra" value="Bien" v-model="tamanoLetra" />
                  <label class="form-check-label fw-normal" for="f">Mediano</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="tamanoLetra" value="Muy Bien"
                    v-model="tamanoLetra" />
                  <label class="form-check-label fw-normal" for="f">Grande</label>
                </div>

              </div>
            </div>
          </div>

        </form>

      </div><!--/ FORM-->

      <div class="d-flex justify-content-center align-items-center flex-grow-1 p-4">
        <div class="w-75 h-75" v-show="mostrarTexto" :style="{ background: bgColor, color: textColor, borderRadius: borderRadius + 'px' } " ><!--FIGURE-->
          <h1 :class="tipografia">{{ contenidoTextual }}</h1>
          {{ tamanoLetra }}
        </div><!--/ FIGURE-->
      </div>

    </div><!--/ CONTENT-->

  </main>
</template>

<script>
export default {
  
  name: 'App',
  data() {
    return {
      bgColor:"",
      bgColors: ["DarkGreen", "Yellow"], // 3 - Usar v-for para iterar un arreglo del estado en el template para la renderización dinámica de elementos.
      textColor:"",
      textColors: ["White", "Black"],
      mostrarTexto: true, // 2 -Usar class Binding con clases y valores boleanos. 4 - Usar v-show para mostrar u ocultar la figura.
      borderRadius: 0,
      contenidoTextual: "",
      tipografia:"",
      tipografias: [
        { label: "Cursiva", value: "font-italic" },
        { label: "Negrita", value: "font-bold" }
      ],
      opaco:"",
      tamanoLetra:""
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.bg-musgo {
  background: #2f4f4f;
}

.bg-darkgreen{
  background-color: #80b280;
}

.bg-palepink{
  background-color: #f5cac3;
}

.font-italic {
  font-style: italic;
}

.font-bold {
  font-weight: bold;
}

</style>
