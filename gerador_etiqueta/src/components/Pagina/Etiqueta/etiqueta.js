import { mapGetters } from "vuex";

export default {
  name: "etiqueta-item",

  props: {
    parametros: {
      type: Object
    }
  },
  data() {
    return {
      dados: {},
      style: {}
    };
  },

  computed: {
    ...mapGetters(["etiqueta"])
  },

  watch: {
    etiqueta: {
      handler() {
        this.style = {
          height: `${this.etiqueta.altura}cm`,
          width: `${this.etiqueta.largura}cm`,
          display:
            this.etiqueta.altura == 0 && this.etiqueta.largura == 0
              ? "none"
              : "block"
        };
      },
      deep: true
    }
  },

  beforeMount() {
    console.log(this.etiqueta);
  }
};
