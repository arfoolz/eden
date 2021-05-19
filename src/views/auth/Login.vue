<template>
  <p-auth title="Selamat Datang!">
    <template v-slot:form>
      <v-form>
        <v-text-field
          v-model="form.username"
          label="Username"
          prepend-inner-icon="mdi-email-outline"
        />

        <v-text-field 
          v-model="form.password"
          label="Password" 
          prepend-inner-icon="mdi-lock-outline"
          :type="value ? 'password' : 'text'"
          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (value = !value)"
        />

        <div class="d-flex justify-space-between align-center">
          
          <v-btn v-if="form.username==usernameValue && form.password==passwordValue" class="font-weight-bold" color="primary darken-1" large to="/maintance" >
            Login
          </v-btn>

          <v-btn v-else class="font-weight-bold" color="primary darken-1" large to="/" >
            Login
          </v-btn>

          <!-- <v-btn
            class="text-capitalize"
            color="transparent primary--text text-darken-1"
            depressed
          >
            Forget Password?
          </v-btn> -->
        </div>
      </v-form>
    </template>

    <!-- <template v-slot:sso>
      <v-btn class="text-capitalize" depressed large>
        <v-icon left>mdi-google</v-icon>
        Sign in with Google
      </v-btn>
    </template> -->
  </p-auth>
</template>

<script>
  export default {

    components: {
      "p-auth": () => import("../../components/LoginPage/NavLogin")
    },

    data() {
        return{

          value: String,

          form: {
                username  :'',
                password  :'',
          },

           usernameValue  :'edenfarm',
           passwordValue  :'sayurwortel',
        } 
    },

    methods:{

    }

  };
</script>
