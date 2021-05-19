<template>
    <section>
        <v-navigation-drawer 
            enable-resize-watcher 
            app color="#F6FBF7" 
            height="100%" 
            width="14%"
            :dark="false"
            >

            <v-list>

                <!-- <img src="@/assets/matana_logo.png" width="80%" height="80%" class="pl-md-4"> -->

                <br>
                <br>
              
                <v-list-item color="#4ABFB2" to="/maintance">
                    <v-list-item-icon>
                        <v-icon> mdi-clipboard-outline </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="navfont"> Maintance </v-list-item-title>
                </v-list-item>

                 <v-list-item color="#4ABFB2" to="/unauthorized">
                    <v-list-item-icon>
                        <v-icon> mdi-account </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="navfont"> Unauthorized Access </v-list-item-title>
                </v-list-item>

                <v-list-group color="#4ABFB2" group="Error Page">
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-layers</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="navfont"> Error Page </v-list-item-title>
                    </template>

                    <v-list-item to="/server-error/500">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="navfont"> 500 </v-list-item-content>
                    </v-list-item>
            
                    <v-list-item to="/server-error/404">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="navfont"> 404 </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

    
        <v-app-bar :elevation="0" app color="white">
            <v-row>
                <v-col cols="12" lg="12">
                    <v-btn
                        :to="{ name: 'Login' }"
                        style="margin-left:93%;"
                        text
                        name="logout-btn"
                        color="grey"
                        >
                        Logout
                    </v-btn>
                </v-col>
            </v-row>
        </v-app-bar>
    </section>
</template>

<style scoped>
    .navfont{
     font-size:14px;
    }
</style>
