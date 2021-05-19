<template>
  <v-app id="inspire">
    <h-navigation />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'h-layout',
    components: {
      'h-navigation': () => import('../components/Nav'),
    },
    computed: {
      key() {
        return this.$route.path
      },
    },
  }
</script>
