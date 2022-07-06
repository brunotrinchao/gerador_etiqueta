import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    papel: {},
    etiqueta: {
      altura: 0,
      largura: 0
    },
    dados: [
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      },
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      },
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      },
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      },
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      },
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      },
      {
        titulo: "TESTE",
        valor: "R$ 0,00"
      }
    ]
  },
  getters: {
    dados: (state) => state.dados,
    papel: (state) => state.papel,
    etiqueta: (state) => state.etiqueta
  },
  mutations: {
    SET_DADOS(state, dados) {
      state.dados = dados;
    },
    SET_PAPEL(state, papel) {
      state.papel = papel;
    },
    SET_ETIQUETA(state, etiqueta) {
      state.etiqueta = etiqueta;
    }
  },
  actions: {
    mudarDados({ commit }, dados) {
      commit("SET_DADOS", dados);
    },
    mudarPapel({ commit }, papel) {
      commit("SET_PAPEL", papel);
    },
    mudarTamanhoEtiqueta({ commit }, dado) {
      commit("SET_ETIQUETA", dado);
    }
  }
});
