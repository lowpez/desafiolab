<template>
  <div class="container-md">
    <div class="row">
      <div class="col-12 my-4">
        <div style="width: 25rem; margin: 0 auto">
          <h4 class="my-4">Formulario de pago</h4>
          <div class="row my-4">
            <div class="col-6">
              <label for="exampleInputNumber" class="form-label"
                >Número de tarjeta</label
              >
              <input type="text" class="form-control" id="exampleInputNumber" />
            </div>
            <div class="col-6">
              <label for="exampleInputDateExpiry" class="form-label"
                >Fecha de expiración</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputDateExpiry"
              />
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <label for="exampleInputName" class="form-label">CVV</label>
              <input type="text" class="form-control" id="exampleInputCVV" />
            </div>
            <div class="col-6">
              <label for="exampleInputCVV" class="form-label"
                >Nombre Titular</label
              >
              <input type="text" class="form-control" id="exampleInputName" />
            </div>
          </div>
          <div class="row my-4">
            <div class="col-12 text-center">
              <router-link
                to="/confirmed_checkout"
                type="button"
                class="btn btn-success btn-lg"
                >Realizar el pago</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
