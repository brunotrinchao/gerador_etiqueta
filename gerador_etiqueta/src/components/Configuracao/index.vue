<template>
  <div id="config" class="no-print">
    <b-sidebar id="sidebar-1" title="Configuração" right backdrop shadow>
      <div class="px-3 py-2">
        <b-form>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <b-form-group label="Papel:" label-for="id-papel">
                  <b-form-select
                    id="id-papel"
                    v-model="papelSelecionado"
                    :options="opcoes"
                    class="w-100"
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="col-12">
              <b-form-group label="Etiqueta:"></b-form-group>
            </div>

            <div class="col-12">
              <b-form-group>
                <b-input-group prepend="Altura">
                  <b-form-input
                    type="number"
                    v-model="_etiqueta.altura"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group>
                <b-input-group prepend="Largura">
                  <b-form-input
                    type="number"
                    v-model="_etiqueta.largura"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
          </div>
        </b-form>
      </div>
    </b-sidebar>
  </div>
</template>

<script src="./configuracao.js"></script>

<style src="./configuracao.scss" scoped lang="scss"></style>
