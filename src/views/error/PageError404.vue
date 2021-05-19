<template>
    <div>
        <v-row>
            <div style="padding-top: 9%; margin-left: 26%;">
            <img src="@/assets/404.png" width="85%" height="85%">
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: 2%; margin-left: 35%;">
            <bold style="font-size:40px">Page Not Found</bold>
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: 0%; margin-left: 32%;">
            <span style="font-size:20px; color: grey;">The page you are looking for is not found</span>
            </div>
        </v-row>

        <v-row>
            <div style="padding-top: 4%; margin-left: 39%;">
               <v-btn
                @click="refresh"
                height="50"
                style="weight: 100px; color: #768F9C; border-radius: 25px; background-color: #768F9C; color: white;"
                >Back to Dashboard
                </v-btn>
            </div>
            
        </v-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },

    methods: {
      refresh(){
          window.location.reload()
      }
    },
  }
</script>

<style scoped>

</style>