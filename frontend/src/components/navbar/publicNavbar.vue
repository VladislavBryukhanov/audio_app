<template>
  <div>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/sign_in" flat>
          Sign in
        </v-btn>

        <v-btn to="/sign_up" flat>
          Sign up
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PublicNavbar'
  }
</script>
<style>
  .content {
    height:100vh;
  }
</style>
