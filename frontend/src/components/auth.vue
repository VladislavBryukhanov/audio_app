<template>
  <div v-if="isSignUp">
    <h3>Sign up</h3>
    <form v-on:submit.prevent="signUp">
      <input placeholder="username" v-model="user.username" />
      <input placeholder="login" v-model="user.login" />
      <input type="password" placeholder="password" v-model="user.password" />
      <input type="submit" value="Sign up" />
    </form>
  </div>

  <div v-else>
    <h3>Sign in</h3>
    <form v-on:submit.prevent="signIn">
      <input placeholder="login" v-model="user.login" />
      <input type="password" placeholder="password" v-model="user.password" />
      <input type="submit" value="Sign in" />
    </form>
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
    props: {
      isSignUp: false
    },
    methods: {
      signUp() {
        this.$store.dispatch('signUp', this.user);
      },
      signIn() {
        const {login, password} = this.user;
        this.$store.dispatch('signIn', {login, password});
      }
    }
  }
</script>
