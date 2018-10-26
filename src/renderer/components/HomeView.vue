<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs4>

                    <v-card color="white" class="grey--text" height="200px">
                        <v-card-title primary-title>
                            <div class="headline">QSL卡片贴纸生成</div>
                            <div>
                                <span></span><br/>
                                <span>简化繁琐的QSL卡片填写过程，只需导入日志，即可生成带有机读码的贴纸</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange lighten-3">开始使用</v-btn>
                        </v-card-actions>
                    </v-card>

            </v-flex>
            <v-flex xs4>
                    <v-card color="white" class="grey--text" height="200px">
                        <v-card-title primary-title>
                            <div class="headline">Carbillo转换</div>
                            <div>
                                <span></span><br/>
                                <span>ADIF to Carbillo? </span>
                                <span>No No No 软件支持更多的格式</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="light-blue lighten-3">开始使用</v-btn>
                        </v-card-actions>
                    </v-card>
            </v-flex>
            <v-flex xs4>
                    <v-card color="white" class="grey--text" height="200px"> 
                        <v-card-title primary-title>
                            <div class="headline">呼号地区查询</div>
                            <div>
                                <span></span><br/>
                                <span>通上了陌生字头？来查查解锁了哪个DXCC吧</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="deep-purple lighten-3" @click="callsignquery()">开始使用</v-btn>
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