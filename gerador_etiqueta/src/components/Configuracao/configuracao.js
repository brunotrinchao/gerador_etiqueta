import { mapGetters, mapActions } from "vuex";

export default {
  name: "configuracao",
  data() {
    return {
      papelSelecionado: null,
      opcoes: [
        { value: null, text: "-- Selecione --" },
        { value: "A4", text: "A4" }
      ],
      _etiqueta: {
        altura: 0,
        largura: 0
      }
    };
  },
  computed: {
    ...mapGetters(["etiqueta", "papel"])
  },

  watch: {
    papelSelecionado() {
      this.mudarPapel(this.tamanhoPagina(this.papelSelecionado));
    },
    _etiqueta: {
      handler() {
        this.mudarTamanhoEtiqueta(this._etiqueta);
      },
      deep: true
    }
  },

  beforeMount() {
    this._etiqueta = this.etiqueta;
  },

  methods: {
    tamanhoPagina(papel) {
      let retorno = {};
      switch (papel) {
        case "A4":
          retorno = {
            altura: "29.7",
            largura: "21"
          };
          break;

        default:
          retorno = {
            altura: "0",
            largura: "0"
          };
          break;
      }
      return retorno;
    },
    ...mapActions(["mudarPapel", "mudarTamanhoEtiqueta"])
  }
};
