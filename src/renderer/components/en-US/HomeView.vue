<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs4>

                    <v-card color="white" class="grey--text" height="200px">
                        <v-card-title primary-title>
                            <div class="headline">Logbook</div>
                            <div>
                                <span></span><br/>
                                <span>Record your logs quickly and efficiently, and upload syncs</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="red lighten-3" @click="$router.push('/onair')">On Air</v-btn>
                            <v-btn flat color="orange lighten-3" @click="$router.push('/contestmode')">Contest mode</v-btn>
                            <br/>
                            <v-btn flat color="orange lighten-3">manage</v-btn>
                            
                        </v-card-actions>
                    </v-card>

            </v-flex>
            <v-flex xs4>
                    <v-card color="white" class="grey--text" height="200px">
                        <v-card-title primary-title>
                            <div class="headline">In development</div>
                            <div>
                                <span></span><br/>
                                <span>In development </span><br/>
                                <span>In development</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="light-blue lighten-3">go</v-btn>
                        </v-card-actions>
                    </v-card>
            </v-flex>
            <v-flex xs4>
                    <v-card color="white" class="grey--text" height="200px"> 
                        <v-card-title primary-title>
                            <div class="headline">DXCC Check</div>
                            <div>
                                <span></span><br/>
                                <span>Is it connected to a new DXCC? </span><br/>
                                <span>Check where it comes from</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="deep-purple lighten-3" @click="callsignquery()">go</v-btn>
                        </v-card-actions>
                    </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    methods:{
        callsignquery(){
            this.$router.push('/csquery')
        }
    },
    created() {
        
    },
    
};
</script>