<template>
  <div>
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link>
      ___
      <router-link :to="{name: 'AudioList'}">Audio list</router-link>
      ___
      <router-link to="/">SignOn</router-link>
      <button>Log out</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'PrivateNavbar'
  }
</script>
