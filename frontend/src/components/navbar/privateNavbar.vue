<template>
  <div>
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link>
      ___
      <router-link :to="{name: 'AudioList'}">Audio list</router-link>
      <button @click="logOut()">Log out</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'PrivateNavbar',
    methods: {
      logOut() {
        this.$store.dispatch('logOut');
        this.$router.push('/')
      }
    }
  }
</script>
