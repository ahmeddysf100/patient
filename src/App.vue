<template>
  <div id="app">
     <FormPdf></FormPdf>
  </div>
</template>

<script>
import FormPdf from './components/form.vue'

export default {
  name: 'App',
  components: {
    FormPdf
  }
}
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
