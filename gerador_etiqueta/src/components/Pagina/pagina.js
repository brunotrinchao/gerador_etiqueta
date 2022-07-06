import { mapGetters } from "vuex";

import Etiqueta from "./Etiqueta";

export default {
  name: "pagina",

  components: { Etiqueta },

  data() {
    return {
      style: {}
    };
  },

  computed: {
    cmDados() {
      return this.dados;
    },
    ...mapGetters(["papel", "dados"])
  },

  watch: {
    papel() {
      this.style = {
        height: `${this.papel.altura}cm`,
        width: `${this.papel.largura}cm`,
        display: this.papel.altura == 0 ? "none" : "flex"
      };
    }
  }
};
