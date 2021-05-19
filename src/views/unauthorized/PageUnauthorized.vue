<template>
    <div>
        <v-row>
            <div style="padding-top: 5%; margin-left: 28%;">
            <img src="@/assets/401.png" width="85%" height="85%">
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: -10%; margin-left: 34%;">
            <bold style="font-size:40px">Unauthorized Access</bold>
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: 0%; margin-left: 32%;">
            <span style="font-size:20px; color: grey;">Your account does not have access to this page</span>
            </div>
        </v-row>
    
        <v-row>
            <div style="padding-top: 2%; margin-left: 42%;">
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