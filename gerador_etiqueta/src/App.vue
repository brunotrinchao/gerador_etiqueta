<template>
  <div id="app" class="no-print">
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-between p-2 no-print"
    >
      <a class="navbar-brand" href="#">Navbar</a>

      <b-button v-b-toggle.sidebar-1>Configurar</b-button>
    </nav>
    <configuracao />
    <pagina />
  </div>
</template>

<script>
import Pagina from "./components/Pagina";
import Configuracao from "./components/Configuracao";

export default {
  name: "App",
  components: {
    Pagina,
    Configuracao
  }
};
</script>

<style>
body {
  min-height: 75rem;
  padding-top: 4.5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
@page {
  size: A4 portrait;
}
@media print {
  .no-print,
  .no-print * {
    visibility: hidden !important;
  }
  .page {
    visibility: visible !important;
  }

  .page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
</style>
