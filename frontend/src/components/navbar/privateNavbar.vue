<template>
  <div>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn :to="{name: 'Home'}" flat>
          Home
        </v-btn>

        <v-btn :to="{name: 'AudioList'}" flat>
          Audio list
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <h4>Hi, {{username}}</h4>
      <v-btn @click="logOut()">Log out</v-btn>
    </v-toolbar>
    <div class="content">
      <router-view></router-view>
    </div>
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
    }, computed: {
      username: function () {
        const {user} = this.$store.state;
        if (user) {
          return user.username;
        } else {
          return 'Unauthorized';
        }
      }
    }
  }
</script>
<style>
  .content {
    height:100vh;
  }
</style>
