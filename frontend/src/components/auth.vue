<template>
  <div>
    <h3>Sign up</h3>
    <form v-on:submit.prevent="signUp">
      <input placeholder="username" v-model="user.username" />
      <input placeholder="login" v-model="user.login" />
      <input type="password" placeholder="password" v-model="user.password" />
      <input type="submit" value="Sign up" />
    </form>
    <h4>{{username}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'Sign',
    data() {
      return {
        user: {
          username: '',
          login: '',
          password: ''
        }
      }
    },
    computed: {
      username: function () {
        const {user} = this.$store.state;
        if (user) {
          return user.username;
        } else {
          return 'Unauthorized';
        }
      }
    },
    methods: {
      signUp() {
        this.$store.dispatch('signIn', this.user);
      }
    }
  }
</script>
