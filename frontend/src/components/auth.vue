<template>
  <v-layout align-center fill-height>
    <v-flex xl2 offset-xl5 lg4 offset-lg4 md4 offset-md4 sm8 offset-sm2 xs10 offset-xs1>
      <v-card class="elevation-5">
        <template v-if="isSignUp">
          <v-card-title>
            <h2>Sign up</h2>
          </v-card-title>
          <v-card-text>
            <form v-on:submit.prevent="signUp">
              <v-text-field label="Username" v-model="user.username" />
              <v-text-field label="Login" v-model="user.login" />
              <v-text-field label="Password" type="password" v-model="user.password" />
              <v-btn type="submit">Sign up</v-btn>
            </form>
          </v-card-text>
        </template>

        <template v-else>
          <v-card-title>
            <h2>Sign in</h2>
          </v-card-title>
          <v-card-text>
            <form v-on:submit.prevent="signIn">
              <v-text-field label="login" v-model="user.login" />
              <v-text-field label="password" v-model="user.password" />
              <v-btn type="submit">Sign in</v-btn>
              <v-btn to="/sign_up" flat>Sign Up</v-btn>
            </form>
          </v-card-text>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
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
        this.$store.dispatch('signIn', {login, password})
          .then(_ => {
            this.$router.push('/home');
          });
      }
    }
  }
</script>
