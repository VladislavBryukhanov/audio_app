<template>
  <div>
    <div>
      <h4>{{username}}</h4>
      <router-link to="/sign_in">Sign in</router-link>
      ___
      <router-link to="/sign_up">Sign up</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'PublicNavbar',
    computed: {
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
