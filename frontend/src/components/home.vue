<template>
  <div class="resultContainer">
    <v-layout align-center justify-center row fill-height>
      <v-card class="elevation-5">
        <v-card-title>
          <h2>Home</h2>
        </v-card-title>
        <v-card-text>
          It is a home page!
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      console.log('m');
//      this.$store.dispatch('getUsers');
    }
  }
</script>
<style scoped>
  .resultContainer {
    height: 100vh;
  }
</style>
