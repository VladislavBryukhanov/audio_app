<template>
  <div>Home</div>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      console.log('m');
      this.$store.dispatch('getUsers');
    }
  }
</script>
