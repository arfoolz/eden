<template>
    <div>
        <v-row>
            <div style="padding-top: 5%; margin-left: 30%;">
            <img src="@/assets/maintance.png" width="100%" height="100%">
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: 2%; margin-left: 25%;">
            <bold style="font-size:40px">Dashboard is Under Maintance</bold>
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: 0%; margin-left: 32%;">
            <span style="font-size:20px; color: grey;">We apologize for any inconvenience caused</span>
            </div>
        </v-row>
        <v-row>
            <div style="padding-top: -2%; margin-left: 34%;">
            <span style="font-size:20px; color: grey;">Please check back later or refresh page</span>
            </div>
        </v-row>

        <v-row>
            <div style="padding-top: 2%; margin-left: 45%;">
               <v-btn
                @click="refresh"
                height="50"
                style="weight: 100px; color: #768F9C; border-radius: 25px; background-color: #768F9C; color: white;"
                >Refresh
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