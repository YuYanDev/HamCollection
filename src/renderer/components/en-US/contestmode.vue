<template>
  <v-container
    grid-list-md
    text-xs-center
  >
    <v-layout
      justify-center
      row
      wrap
    >
    <!-- 日志区 -->
      <v-flex xs4>
          <v-layout
          
          row
          wrap
        >
        <v-flex xs12>
                <v-card >
                    <v-card-title primary-title>
                        <h1>{{timenow}} UTC</h1>
                        <br/>
                        <h5>&nbsp;&nbsp;{{datenow}}</h5>
                    </v-card-title>
                </v-card>
            </v-flex>
          <v-flex xs12>
            

            <v-data-table
              :headers="tableHeaders"
              :items="tableDesserts"
              class="elevation-1"
            >
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.callsign }}</td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- 面板区 -->
      <v-flex xs8>
          <v-layout
          justify-center
          row
          wrap
          >
            <v-flex xs12>
                <v-card >
                    <v-card-title primary-title>
                        <v-layout
                            row
                            wrap
                        >
                            <v-flex xs4>
                                <v-text-field
                                    v-model="callsign1"
                                    label="Callsign"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="date1"
                                    label="Date"
                                    :placeholder="datenow"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="time1"
                                    label="Time"
                                    :placeholder="timenow"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="freq1"
                                    label="Freq"
                                    placeholder=" "
                                    suffix="MHz"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="mode1"
                                    label="Mode"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            
                            <v-flex xs2>
                                <v-text-field
                                    v-model="rstsend1"
                                    label="RST Send"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="exchsend1"
                                    label="Exch Send"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="rstrecv1"
                                    label="RST Recv"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="exchsend1"
                                    label="Exch Send"
                                    placeholder=" "
                                ></v-text-field>
                            
                            </v-flex>
                            <v-flex xs2>
                                <v-btn color="success" @click="confirm()">Add</v-btn>
                            </v-flex>
                            <v-flex xs2>
                                <v-btn color="error" @click="clear()">Clear</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card >
                    <v-card-title primary-title>
                        <v-layout
                            row
                            wrap
                        >
                            <v-flex xs4>
                                <v-text-field
                                    v-model="callsign2"
                                    label="Callsign"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="date2"
                                    label="Date"
                                    :placeholder="datenow"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="time2"
                                    label="Time"
                                    :placeholder="timenow"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="freq2"
                                    label="Freq"
                                    placeholder=" "
                                    suffix="MHz"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="mode2"
                                    label="Mode"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            
                            <v-flex xs2>
                                <v-text-field
                                    v-model="rstsend2"
                                    label="RST Send"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="exchsend2"
                                    label="Exch Send"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="rstrecv2"
                                    label="RST Recv"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="exchsend2"
                                    label="Exch Send"
                                    placeholder=" "
                                ></v-text-field>
                            
                            </v-flex>
                            <v-flex xs2>
                                <v-btn color="success" @click="confirm()">Add</v-btn>
                            </v-flex>
                            <v-flex xs2>
                                <v-btn color="error" @click="clear()">Clear</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card >
                    <v-card-title primary-title>
                        <v-layout
                            row
                            wrap
                        >
                            <v-flex xs4>
                                <v-text-field
                                    v-model="callsign3"
                                    label="Callsign"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="date3"
                                    label="Date"
                                    :placeholder="datenow"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="time3"
                                    label="Time"
                                    :placeholder="timenow"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="freq3"
                                    label="Freq"
                                    placeholder=" "
                                    suffix="MHz"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="mode3"
                                    label="Mode"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            
                            <v-flex xs2>
                                <v-text-field
                                    v-model="rstsend3"
                                    label="RST Send"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="exchsend3"
                                    label="Exch Send"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="rstrecv3"
                                    label="RST Recv"
                                    placeholder=" "
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    v-model="exchsend3"
                                    label="Exch Send"
                                    placeholder=" "
                                ></v-text-field>
                            
                            </v-flex>
                            <v-flex xs2>
                                <v-btn color="success" @click="confirm()">Add</v-btn>
                            </v-flex>
                            <v-flex xs2>
                                <v-btn color="error" @click="clear()">Clear</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'
import nanoid from 'nanoid/generate'
export default {
  data: () => ({
    timenow:moment.utc().format('HH:mm:ss'),
    datenow:moment.utc().format('YYYY-MM-DD'),

    callsign1:'',
    callsignResultArea1:'',
    freq1:'',
    mode1:'',
    rstsend1:'',
    exchsend1:'',
    rstrecv1:'',
    exchrecv1:'',
    remark1:'',
    time1:'',
    date1:'',

    callsign2:'',
    callsignResultArea2:'',
    freq2:'',
    mode2:'',
    rstsend2:'',
    exchsend2:'',
    rstrecv2:'',
    exchrecv2:'',
    remark2:'',
    time2:'',
    date2:'',

    callsign3:'',
    callsignResultArea3:'',
    freq3:'',
    mode3:'',
    rstsend3:'',
    exchsend3:'',
    rstrecv3:'',
    exchrecv3:'',
    remark3:'',
    time3:'',
    date3:'',

    tableHeaders: [
        { text: 'ID', sortable: false, value: 'id' },
          {
            text: 'Callsign',
            align: 'left',
            sortable: false,
            value: 'callsign'
          },
          { text: 'Action', value: 'callsign', sortable: false }
        ],
    tableDesserts: [
    ],
    sendby:''
      
  }),
  watch: {
        callsign: function () {
            this.searchCallsign(this.callsign)
        }
    },
  mounted(){
            var _this = this; 
            this.timer = setInterval(function() {
                _this.timenow = moment.utc().format('HH:mm:ss')
                _this.datanow = moment.utc().format('YYYY-MM-DD')
            }, 1000);
        },
    beforeDestroy () {
        if(this.datenow) {
                clearInterval(this.datenow);//在vue实例销毁钱，清除我们的定时器
        }
        if(this.timenow) {
                clearInterval(this.timenow);//在vue实例销毁钱，清除我们的定时器
        }
    } ,
  methods:{
      setnow(){
          this.date = this.datenow;
          this.time = this.timenow;
      },
        searchCallsign(callsign){
            if(callsign.length==0){
                this.callsignResultArea = ''
                this.callsignResultAreaCN = ''
            }else{
                this.callsignResultemoji = ''
                var callsignSlackSplit = callsign.split('/')
                var originCallsignPrefix = callsignSlackSplit[0].toUpperCase()
                var callsignResultObj = this.searchArea(originCallsignPrefix)


                this.callsignResultArea = callsignResultObj.area
                this.callsignResultAreaCN = callsignResultObj.areacn
                this.callsignResultAreaPrefix = callsignResultObj.prefix
                this.callsignBuro = this.searchBuro(callsignResultObj.areacode)
            }
        },
        searchArea(callsign){
            var area = {};
            var callsign1 = callsign.substring(0, 1);
            var callsign2 = callsign.substring(0, 2);
            var callsign3 = callsign.substring(0, 3);
            var callsign4 = callsign.substring(0, 4);
            switch(callsign1){
                case 'B': area['area'] = 'China';area['areacn'] = '中国';area['areacode'] = 'CN';area['prefix']='B';break
                case 'F': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'G': area['area'] = 'England';area['areacn'] = '英国';area['areacode'] = 'UK';area['prefix']='G';break
                case 'I': area['area'] = 'Italy';area['areacn'] = '意大利';area['areacode'] = 'IT';area['prefix']='I';break
                case 'K': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'M': area['area'] = 'England';area['areacn'] = '英国';area['areacode'] = 'UK';area['prefix']='';area['prefix']='G';break
                case 'N': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'R': area['area'] = 'Russia';area['areacn'] = '俄罗斯';area['areacode'] = 'RU';area['prefix']='R';break
                case 'W': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                default:break;
            }
            switch(callsign2){
                case '1A': area['area'] = 'Sov. Mil. Order of Malta';area['areacn'] = '马耳他骑士团';area['prefix']='1A';break
                case '3A': area['area'] = 'Monaco';area['areacn'] = '摩纳哥';area['areacode'] = 'MC';area['prefix']='3A';break
                case '3C': area['area'] = 'Equatorial Guinea';area['areacn'] = '赤道几内亚';area['areacode'] = 'GQ';area['prefix']='3C';break
                case '3V': area['area'] = 'Tunisia';area['areacn'] = '突尼斯';area['areacode'] = 'TN';area['prefix']='3V';break
                case '3W': area['area'] = 'Viet Nam';area['areacn'] = '越南';area['areacode'] = 'VN';area['prefix']='XV';break
                case 'XV': area['area'] = 'Viet Nam';area['areacn'] = '越南';area['areacode'] = 'VN';area['prefix']='XV';break
                case '3X': area['area'] = 'Guinea';area['areacn'] = '几内亚';area['areacode'] = 'GN';area['prefix']='3X';break
                case '3Y': area['area'] = 'Bouvet ';area['areacn'] = '布韦岛';area['areacode'] = 'NO';area['prefix']='3Y';break
                case '4J': area['area'] = 'Azerbaijan';area['areacn'] = '阿塞拜疆';area['areacode'] = 'AZ';area['prefix']='4K';break
                case '4K': area['area'] = 'Azerbaijan';area['areacn'] = '阿塞拜疆';area['areacode'] = 'AZ';area['prefix']='4K';break
                case '4L': area['area'] = 'Georgia';area['areacn'] = '格鲁吉亚';area['areacode'] = 'GE';area['prefix']='4L';break
                case '4O': area['area'] = 'Montenegro';area['areacn'] = '黑山';area['areacode'] = 'ME';area['prefix']='40';break
                case '4S': area['area'] = 'Sri Lanka';area['areacn'] = '斯里兰卡';area['areacode'] = 'LK';area['prefix']='4S';break
                case '4W': area['area'] = 'Timor - Leste';area['areacn'] = '东帝汶';area['areacode'] = 'TL';area['prefix']='4W';break
                case '4X': area['area'] = 'Israel';area['areacn'] = '以色列';area['areacode'] = 'IL';area['prefix']='4X';break
                case '4Z': area['area'] = 'Israel';area['areacn'] = '以色列';area['areacode'] = 'IL';area['prefix']='4X';break
                case '5A': area['area'] = 'Libya';area['areacn'] = '利比亚';area['areacode'] = 'LY';area['prefix']='5A';break
                case '5B': area['area'] = 'Cyprus';area['areacn'] = '塞浦路斯';area['areacode'] = 'CY';area['prefix']='5B';break
                case 'C4': area['area'] = 'Cyprus';area['areacn'] = '塞浦路斯';area['areacode'] = 'CY';area['prefix']='5B';break
                case 'P3': area['area'] = 'Cyprus';area['areacn'] = '塞浦路斯';area['areacode'] = 'CY';area['prefix']='5B';break
                case '5H': area['area'] = 'Tanzania';area['areacn'] = '坦桑尼亚';area['areacode'] = 'TZ';area['prefix']='5H';break
                case '5I': area['area'] = 'Tanzania';area['areacn'] = '坦桑尼亚';area['areacode'] = 'TZ';area['prefix']='5H';break
                case '5N': area['area'] = 'Nigeria';area['areacn'] = '尼日利亚';area['areacode'] = 'NG';area['prefix']='5N';break
                case '5R': area['area'] = 'Madagascar';area['areacn'] = '马达加斯加';area['areacode'] = 'MG';area['prefix']='5R';break
                case '5T': area['area'] = 'Mauritania';area['areacn'] = '毛里塔尼亚';area['areacode'] = 'MR';area['prefix']='5T';break
                case '5U': area['area'] = 'Niger';area['areacn'] = '尼日尔';area['areacode'] = 'NE';area['prefix']='5U';break
                case '5V': area['area'] = 'Togo';area['areacn'] = '多哥';area['areacode'] = 'TG';area['prefix']='5V';break
                case '5W': area['area'] = 'Samoa';area['areacn'] = '萨摩亚';area['areacode'] = '';area['prefix']='5W';break
                case '5X': area['area'] = 'Uganda';area['areacn'] = '乌干达';area['areacode'] = 'UG';area['prefix']='5X';break
                case '5Y': area['area'] = 'Kenya';area['areacn'] = '肯尼亚';area['areacode'] = 'KE';area['prefix']='5Y';break
                case '6V': area['area'] = 'Senegal';area['areacn'] = '塞内加尔';area['areacode'] = 'SN';area['prefix']='6V';break
                case '6W': area['area'] = 'Senegal';area['areacn'] = '塞内加尔';area['areacode'] = 'SN';area['prefix']='6V';break
                case '6Y': area['area'] = 'Jamaica';area['areacn'] = '牙买加';area['areacode'] = 'JM';area['prefix']='6Y';break
                case '7O': area['area'] = 'Yemen';area['areacn'] = '也门';area['areacode'] = 'YE';area['prefix']='7O';break
                case '7P': area['area'] = 'Lesotho';area['areacn'] = '莱索托';area['areacode'] = 'LS';area['prefix']='7P';break
                case '7Q': area['area'] = 'Malawi';area['areacn'] = '马拉维';area['areacode'] = 'MW';area['prefix']='7Q';break
                case '7T': area['area'] = 'Algeria';area['areacn'] = '阿尔及利亚';area['areacode'] = 'DZ';area['prefix']='7T';break
                case '7U': area['area'] = 'Algeria';area['areacn'] = '阿尔及利亚';area['areacode'] = 'DZ';area['prefix']='7T';break
                case '7V': area['area'] = 'Algeria';area['areacn'] = '阿尔及利亚';area['areacode'] = 'DZ';area['prefix']='7T';break
                case '7W': area['area'] = 'Algeria';area['areacn'] = '阿尔及利亚';area['areacode'] = 'DZ';area['prefix']='7T';break
                case '7X': area['area'] = 'Algeria';area['areacn'] = '阿尔及利亚';area['areacode'] = 'DZ';area['prefix']='7T';break
                case '7Y': area['area'] = 'Algeria';area['areacn'] = '阿尔及利亚';area['areacode'] = 'DZ';area['prefix']='7T';break
                case '8P': area['area'] = 'Barbados';area['areacn'] = '巴巴多斯';area['areacode'] = 'BB';area['prefix']='8P';break
                case '8Q': area['area'] = 'Maldives';area['areacn'] = '马尔代夫';area['areacode'] = 'MV';area['prefix']='8Q';break
                case '8R': area['area'] = 'Guyana';area['areacn'] = '圭亚那';area['areacode'] = 'GY';area['prefix']='8R';break
                case '9A': area['area'] = 'Croatia';area['areacn'] = '克罗地亚';area['areacode'] = 'HR';area['prefix']='9A';break
                case '9G': area['area'] = 'Ghana';area['areacn'] = '加纳';area['areacode'] = 'GH';area['prefix']='9G';break
                case '9H': area['area'] = 'Malta';area['areacn'] = '马耳他';area['areacode'] = 'MT';area['prefix']='9H';break
                case '9I': area['area'] = 'Zambia';area['areacn'] = '赞比亚';area['areacode'] = 'ZM';area['prefix']='9I';break
                case '9J': area['area'] = 'Zambia';area['areacn'] = '赞比亚';area['areacode'] = 'ZM';area['prefix']='9J';break
                case '9K': area['area'] = 'Kuwait';area['areacn'] = '科威特';area['areacode'] = 'KW';area['prefix']='9K';break
                case '9L': area['area'] = 'Sierra Leone';area['areacn'] = '塞拉利昂';area['areacode'] = 'SL';area['prefix']='9L';break
                case '9N': area['area'] = 'Nepal';area['areacn'] = '尼泊尔';area['areacode'] = 'NP';area['prefix']='9N';break
                case '9Q': area['area'] = 'Dem. Rep. of Congo';area['areacn'] = '刚果民主共和国';area['areacode'] = 'CD';area['prefix']='9T';break
                case '9R': area['area'] = 'Dem. Rep. of Congo';area['areacn'] = '刚果民主共和国';area['areacode'] = 'CD';area['prefix']='9T';break
                case '9S': area['area'] = 'Dem. Rep. of Congo';area['areacn'] = '刚果民主共和国';area['areacode'] = 'CD';area['prefix']='9T';break
                case '9T': area['area'] = 'Dem. Rep. of Congo';area['areacn'] = '刚果民主共和国';area['areacode'] = 'CD';area['prefix']='9T';break
                case '9U': area['area'] = 'Burundi';area['areacn'] = '布隆迪';area['areacode'] = 'BI';area['prefix']='9U';break
                case '9V': area['area'] = 'Singapore';area['areacn'] = '新加坡';area['areacode'] = 'SG';area['prefix']='9V';break
                case '9X': area['area'] = 'Rwanda';area['areacn'] = '卢旺达';area['areacode'] = 'RW';area['prefix']='9X';break
                case '9Y': area['area'] = 'Trinidad & Tobago';area['areacn'] = '特立尼达和多巴哥';area['areacode'] = 'TT';area['prefix']='9Y';break
                case '9Z': area['area'] = 'Trinidad & Tobago';area['areacn'] = '特立尼达和多巴哥';area['areacode'] = 'TT';area['prefix']='9Y';break
                case 'A2': area['area'] = 'Botswana';area['areacn'] = '博茨瓦纳';area['areacode'] = 'BW';area['prefix']='A2';break
                case 'A3': area['area'] = 'Tonga';area['areacn'] = '汤加';area['areacode'] = 'TO';area['prefix']='A3';break
                case 'A4': area['area'] = 'Oman';area['areacn'] = '阿曼';area['areacode'] = 'OM';area['prefix']='A4';break
                case 'A5': area['area'] = 'Bhutan';area['areacn'] = '不丹';area['areacode'] = 'BT';area['prefix']='A5';break
                case 'A6': area['area'] = 'United Arab Emirates';area['areacn'] = '阿拉伯联合酋长国';area['areacode'] = 'AE';area['prefix']='A6';break
                case 'A7': area['area'] = 'Qatar';area['areacn'] = '卡塔尔';area['areacode'] = 'QA';area['prefix']='A7';break
                case 'A9': area['area'] = 'Bahrain';area['areacn'] = '巴林';area['areacode'] = 'BH';area['prefix']='A9';break
                case 'AP': area['area'] = 'Pakistan';area['areacn'] = '巴基斯坦';area['areacode'] = 'PK';area['prefix']='AP';break
                case 'BN': area['area'] = 'Taiwan';area['areacn'] = '台湾';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'BM': area['area'] = 'Taiwan';area['areacn'] = '台湾';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'BW': area['area'] = 'Taiwan';area['areacn'] = '台湾';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'BV': area['area'] = 'Taiwan';area['areacn'] = '台湾';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'BO': area['area'] = 'Taiwan';area['areacn'] = '台湾';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'BX': area['area'] = 'Taiwan';area['areacn'] = '台湾';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'C2': area['area'] = 'Nauru';area['areacn'] = '瑙鲁';area['areacode'] = 'NR';area['prefix']='C2';break
                case 'C3': area['area'] = 'Andorra';area['areacn'] = '安道尔';area['areacode'] = 'AD';area['prefix']='C3';break
                case 'C5': area['area'] = 'The Gambia';area['areacn'] = '冈比亚';area['areacode'] = 'GM';area['prefix']='C5';break
                case 'C6': area['area'] = 'Bahamas';area['areacn'] = '巴哈马';area['areacode'] = 'BS';area['prefix']='C6';break
                case 'C8': area['area'] = 'Mozambique';area['areacn'] = '莫桑比克';area['areacode'] = 'MZ';area['prefix']='C8';break
                case 'C9': area['area'] = 'Mozambique';area['areacn'] = '莫桑比克';area['areacode'] = 'MZ';area['prefix']='C9';break
                case 'CA': area['area'] = 'Chile';area['areacn'] = '智利';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'CB': area['area'] = 'Chile';area['areacn'] = '智利';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'CC': area['area'] = 'Chile';area['areacn'] = '智利';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'CD': area['area'] = 'Chile';area['areacn'] = '智利';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'CE': area['area'] = 'Chile';area['areacn'] = '智利';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'CM': area['area'] = 'Cuba';area['areacn'] = '古巴';area['areacode'] = 'CU';area['prefix']='CO';break
                case 'CO': area['area'] = 'Cuba';area['areacn'] = '古巴';area['areacode'] = 'CU';area['prefix']='CO';break
                case 'CN': area['area'] = 'Morocco';area['areacn'] = '摩洛哥';area['areacode'] = 'MA';area['prefix']='CN';break
                case 'CP': area['area'] = 'Bolivia';area['areacn'] = '玻利维亚';area['areacode'] = 'BO';area['prefix']='CP';break
                case 'CT': area['area'] = 'Portugal';area['areacn'] = '葡萄牙';area['areacode'] = 'PT';area['prefix']='CT';break
                case 'CS': area['area'] = 'Portugal';area['areacn'] = '葡萄牙';area['areacode'] = 'PT';area['prefix']='CT';break
                case 'CR': area['area'] = 'Portugal';area['areacn'] = '葡萄牙';area['areacode'] = 'PT';area['prefix']='CT';break
                case 'CQ': area['area'] = 'Portugal';area['areacn'] = '葡萄牙';area['areacode'] = 'PT';area['prefix']='CT';break
                case 'CU': area['area'] = 'Azores';area['areacn'] = '亚速尔群岛';area['areacode'] = 'PT';area['prefix']='CU';break
                case 'CV': area['area'] = 'Uruguay';area['areacn'] = '乌拉圭';area['areacode'] = 'UY';area['prefix']='CV';break
                case 'CW': area['area'] = 'Uruguay';area['areacn'] = '乌拉圭';area['areacode'] = 'UY';area['prefix']='CV';break
                case 'CX': area['area'] = 'Uruguay';area['areacn'] = '乌拉圭';area['areacode'] = 'UY';area['prefix']='CV';break
                case 'D2': area['area'] = 'Angola';area['areacn'] = '安哥拉';area['areacode'] = 'AO';area['prefix']='D2';break
                case 'D3': area['area'] = 'Angola';area['areacn'] = '安哥拉';area['areacode'] = 'AO';area['prefix']='D2';break
                case 'D4': area['area'] = 'Cape Verde';area['areacn'] = '佛得角';area['areacode'] = 'CV';area['prefix']='D4';break
                case 'D6': area['area'] = 'Comoros';area['areacn'] = '科摩罗';area['areacode'] = 'KM';area['prefix']='D6';break
                case 'DA': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DB': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DC': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DD': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DE': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DF': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DG': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DH': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DI': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DJ': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DK': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DL': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DM': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DN': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DO': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DP': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DQ': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DR': area['area'] = 'Germany';area['areacn'] = '德国';area['areacode'] = 'DE';area['prefix']='DF';break
                case 'DS': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case 'DT': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case 'DU': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case 'DV': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case 'DW': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case 'DX': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case 'DY': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case 'DZ': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case '4D': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case '4F': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case '4G': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case '4H': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case '4I': area['area'] = 'Republic of the Philippines';area['areacn'] = '菲律宾';area['areacode'] = 'PH';area['prefix']='DU';break
                case 'E3': area['area'] = 'Eritrea';area['areacn'] = '厄立特里亚';area['areacode'] = 'ER';area['prefix']='E3';break
                case 'E4': area['area'] = 'Palestine';area['areacn'] = '巴勒斯坦国';area['areacode'] = 'PS';area['prefix']='E4';break
                case 'E5': area['area'] = 'N. Cook Is.';area['areacn'] = '北库克岛';area['prefix']='E5';break
                case 'E7': area['area'] = 'Bosnia-Herzegovina';area['areacn'] = '波斯尼亚和黑塞哥维那';area['areacode'] = 'BA';area['prefix']='E7';break
                case 'EA': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EB': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EC': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'ED': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EE': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EF': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EG': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EH': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'AO': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'AN': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'AM': area['area'] = 'Spain';area['areacn'] = '西班牙';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EI': area['area'] = 'Ireland';area['areacn'] = '爱尔兰岛';area['areacode'] = 'IE';area['prefix']='EI';break
                case 'EJ': area['area'] = 'Ireland';area['areacn'] = '爱尔兰岛';area['areacode'] = 'IE';area['prefix']='EI';break
                case 'EK': area['area'] = 'Armenia';area['areacn'] = '亚美尼亚';area['areacode'] = 'AM';area['prefix']='EK';break
                case 'EL': area['area'] = 'Liberia';area['areacn'] = '利比里亚';area['areacode'] = 'LR';area['prefix']='EL';break
                case 'EP': area['area'] = 'Iran';area['areacn'] = '伊朗';area['areacode'] = 'IR';area['prefix']='EP';break
                case 'EQ': area['area'] = 'Iran';area['areacn'] = '伊朗';area['areacode'] = 'IR';area['prefix']='EP';break
                case 'ER': area['area'] = 'Moldova';area['areacn'] = '摩尔多瓦';area['areacode'] = 'MD';area['prefix']='ER';break
                case 'ES': area['area'] = 'Estonia';area['areacn'] = '爱沙尼亚';area['areacode'] = 'EE';area['prefix']='ES';break
                case 'ET': area['area'] = 'Ethiopia';area['areacn'] = '埃塞俄比亚';area['areacode'] = 'ET';area['prefix']='ET';break
                case 'EU': area['area'] = 'Belarus';area['areacn'] = '白俄罗斯';area['areacode'] = 'BY';area['prefix']='EU';break
                case 'EV': area['area'] = 'Belarus';area['areacn'] = '白俄罗斯';area['areacode'] = 'BY';area['prefix']='EU';break
                case 'EW': area['area'] = 'Belarus';area['areacn'] = '白俄罗斯';area['areacode'] = 'BY';area['prefix']='EU';break
                case 'EX': area['area'] = 'Kyrgyzstan';area['areacn'] = '吉尔吉斯斯坦';area['areacode'] = 'KG';area['prefix']='EX';break
                case 'EY': area['area'] = 'Tajikistan';area['areacn'] = '塔吉克斯坦共和国';area['areacode'] = 'TJ';area['prefix']='EY';break
                case 'EZ': area['area'] = 'Turkmenistan';area['areacn'] = '土库曼斯坦';area['areacode'] = 'TM';area['prefix']='EZ';break
                case 'FG': area['area'] = 'Guadeloupe';area['areacn'] = '瓜德罗普';area['areacode'] = 'FR';area['prefix']='FG';break
                case 'FH': area['area'] = 'Mayotte';area['areacn'] = '马约特';area['areacode'] = 'FR';area['prefix']='FR';break
                case 'FJ': area['area'] = 'Saint Barthelemy';area['areacn'] = '圣巴泰勒米';area['areacode'] = 'FR';area['prefix']='FJ';break
                case 'FK': area['area'] = 'New Caledonia';area['areacn'] = '新喀里多尼亚';area['areacode'] = 'FR';area['prefix']='FK';break
                case 'FM': area['area'] = 'Martinique';area['areacn'] = '马提尼克';area['areacode'] = 'FR';area['prefix']='FM';break
                case 'FO': area['area'] = 'French Polynesia';area['areacn'] = '法属波利尼西亚';area['areacode'] = 'FR';area['prefix']='FO';break
                case 'FP': area['area'] = 'St. Pierre & Miquelon';area['areacn'] = '圣皮埃尔和密克隆';area['areacode'] = 'FR';area['prefix']='FP';break
                case 'FR': area['area'] = 'Juan de Nova, Europa';area['areacn'] = '新胡安岛';area['areacode'] = 'FR';area['prefix']='FR';break
                case 'FS': area['area'] = 'Saint Martin';area['areacn'] = '圣马丁岛';area['areacode'] = 'FR';area['prefix']='FS';break
                case 'FT': area['area'] = 'Crozet I.,Kerguelen Is.,Amsterdam & St. Paul Is.';area['areacn'] = 'Crozet I.,Kerguelen Is.,Amsterdam & St. Paul Is.';area['areacode'] = 'FR';area['prefix']='FT';break
                case 'FW': area['area'] = 'Wallis & Futuna Is';area['areacn'] = 'Wallis & Futuna Is';area['areacode'] = 'FR';area['prefix']='';break
                case 'FY': area['area'] = 'French Guiana';area['areacn'] = '法属圭亚那';area['areacode'] = 'FR';area['prefix']='FY';break
                case 'GD': area['area'] = 'Isle of Man';area['areacn'] = '马恩岛';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GT': area['area'] = 'Isle of Man';area['areacn'] = '马恩岛';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GI': area['area'] = 'Northern Ireland';area['areacn'] = '北爱尔兰';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GN': area['area'] = 'Northern Ireland';area['areacn'] = '北爱尔兰';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GJ': area['area'] = 'Jersey';area['areacn'] = '泽西岛';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GH': area['area'] = 'Jersey';area['areacn'] = '泽西岛';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GM': area['area'] = 'Scotland';area['areacn'] = '苏格兰';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GS': area['area'] = 'Scotland';area['areacn'] = '苏格兰';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GU': area['area'] = 'Guernsey';area['areacn'] = '根西岛';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GP': area['area'] = 'Guernsey';area['areacn'] = '根西岛';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GW': area['area'] = 'Wales';area['areacn'] = '威尔士';area['areacode'] = 'UK';area['prefix']='G';break
                case 'GC': area['area'] = 'Wales';area['areacn'] = '威尔士';area['areacode'] = 'UK';area['prefix']='G';break
                case 'H4': area['area'] = 'Solomon Is.';area['areacn'] = '所罗门群岛';area['areacode'] = 'SB';area['prefix']='H4';break
                case 'HA': area['area'] = 'Hungary';area['areacn'] = '匈牙利';area['areacode'] = 'HU';area['prefix']='HA';break
                case 'HG': area['area'] = 'Hungary';area['areacn'] = '匈牙利';area['areacode'] = 'HU';area['prefix']='HA';break
                case 'HB': area['area'] = 'Switzerland';area['areacn'] = '瑞士';area['areacode'] = 'CH';area['prefix']='HB';break
                case 'HC': area['area'] = 'Ecuador';area['areacn'] = '厄瓜多尔';area['areacode'] = 'EC';area['prefix']='HC';break
                case 'HD': area['area'] = 'Ecuador';area['areacn'] = '厄瓜多尔';area['areacode'] = 'EC';area['prefix']='HC';break
                case 'HH': area['area'] = 'Haiti';area['areacn'] = '海地';area['areacode'] = 'HT';area['prefix']='HH';break
                case 'HI': area['area'] = 'Dominican Republic';area['areacn'] = '多米尼加';area['areacode'] = 'DO';area['prefix']='HI';break
                case 'HJ': area['area'] = 'Colombia';area['areacn'] = '哥伦比亚';area['areacode'] = 'CO';area['prefix']='HK';break
                case 'HK': area['area'] = 'Colombia';area['areacn'] = '哥伦比亚';area['areacode'] = 'CO';area['prefix']='HK';break
                case '5J': area['area'] = 'Colombia';area['areacn'] = '哥伦比亚';area['areacode'] = 'CO';area['prefix']='HK';break
                case '5K': area['area'] = 'Colombia';area['areacn'] = '哥伦比亚';area['areacode'] = 'CO';area['prefix']='HK';break
                case 'HL': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case '6K': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case '6L': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case '6M': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case '6N': area['area'] = 'Republic of Korea';area['areacn'] = '韩国';area['areacode'] = 'KR';area['prefix']='HL';break
                case 'HO': area['area'] = 'Panama';area['areacn'] = '巴拿马';area['areacode'] = 'PA';area['prefix']='HO';break
                case 'HP': area['area'] = 'Panama';area['areacn'] = '巴拿马';area['areacode'] = 'PA';area['prefix']='HO';break
                case 'HQ': area['area'] = 'Honduras';area['areacn'] = '洪都拉斯';area['areacode'] = 'HN';area['prefix']='HQ';break
                case 'HR': area['area'] = 'Honduras';area['areacn'] = '洪都拉斯';area['areacode'] = 'HN';area['prefix']='HQ';break
                case 'HS': area['area'] = 'Thailand';area['areacn'] = '泰国';area['areacode'] = 'TH';area['prefix']='HS';break
                case 'E2': area['area'] = 'Thailand';area['areacn'] = '泰国';area['areacode'] = 'TH';area['prefix']='HS';break
                case 'HV': area['area'] = 'Vatican';area['areacn'] = '梵蒂冈';area['areacode'] = 'VA';area['prefix']='HV';break
                case 'HW': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'HX': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'HY': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'TM': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'TO': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'TP': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'TQ': area['area'] = 'France';area['areacn'] = '法国';area['areacode'] = 'FR';area['prefix']='F';break
                case 'HZ': area['area'] = 'Saudi Arabia';area['areacn'] = '沙特阿拉伯';area['areacode'] = 'SA';area['prefix']='HZ';break
                case 'J2': area['area'] = 'Djibouti';area['areacn'] = '吉布提';area['areacode'] = 'DJ';area['prefix']='J2';break
                case 'J3': area['area'] = 'Grenada';area['areacn'] = '格林纳达';area['areacode'] = 'GD';area['prefix']='J3';break
                case 'J5': area['area'] = 'Guinea-Bissau';area['areacn'] = '几内亚比绍';area['areacode'] = 'GW';area['prefix']='J5';break
                case 'J6': area['area'] = 'St. Lucia';area['areacn'] = '圣卢西亚';area['areacode'] = 'LC';area['prefix']='J6';break
                case 'J7': area['area'] = 'Dominica';area['areacn'] = '多米尼克国';area['areacode'] = 'DM';area['prefix']='J7';break
                case 'J8': area['area'] = 'St. Vincent';area['areacn'] = '圣文森特和格林纳丁斯';area['areacode'] = 'VC';area['prefix']='J8';break
                case 'JA': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JB': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JC': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JD': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JE': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JF': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JG': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JH': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JI': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JJ': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JK': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JL': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JM': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JN': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JO': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JP': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JQ': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JR': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JS': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '7J': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '7K': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '7L': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '7M': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '7N': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '8J': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '8K': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '8L': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '8M': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case '8N': area['area'] = 'Japan';area['areacn'] = '日本';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'JT': area['area'] = 'Mongolia';area['areacn'] = '蒙古';area['areacode'] = 'MN';area['prefix']='JT';break
                case 'JU': area['area'] = 'Mongolia';area['areacn'] = '蒙古';area['areacode'] = 'MN';area['prefix']='JT';break
                case 'JV': area['area'] = 'Mongolia';area['areacn'] = '蒙古';area['areacode'] = 'MN';area['prefix']='JT';break
                case 'JW': area['area'] = 'Svalbard';area['areacn'] = '斯瓦尔巴';area['areacode'] = 'NO';area['prefix']='JW';break
                case 'JX': area['area'] = 'Jan Mayen';area['areacn'] = '扬马延';area['areacode'] = 'NO';area['prefix']='JX';break
                case 'JY': area['area'] = 'Jordan';area['areacn'] = '约旦';area['areacode'] = 'JO';area['prefix']='JY';break
                case 'AA': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AB': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AC': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AD': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AE': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AF': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AG': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AH': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AI': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AJ': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AK': area['area'] = 'United States of America';area['areacn'] = '美国';area['areacode'] = 'US';area['prefix']='K';break
                case 'AL': area['area'] = 'Alaska';area['areacn'] = '阿拉斯加';area['areacode'] = 'US';area['prefix']='AL';break
                case 'KL': area['area'] = 'Alaska';area['areacn'] = '阿拉斯加';area['areacode'] = 'US';area['prefix']='AL';break
                case 'NL': area['area'] = 'Alaska';area['areacn'] = '阿拉斯加';area['areacode'] = 'US';area['prefix']='AL';break
                case 'WL': area['area'] = 'Alaska';area['areacn'] = '阿拉斯加';area['areacode'] = 'US';area['prefix']='AL';break
                case 'LA': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LB': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LC': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LD': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LE': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LF': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LG': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LH': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LI': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LJ': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LK': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LL': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LM': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LN': area['area'] = 'Norway';area['areacn'] = '挪威';area['areacode'] = 'NO';area['prefix']='LA';break
                case 'LO': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LP': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LQ': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LR': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LS': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LT': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LU': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LV': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LW': area['area'] = 'Argentina';area['areacn'] = '阿根廷';area['areacode'] = 'AR';area['prefix']='LU';break
                case 'LX': area['area'] = 'Luxembourg';area['areacn'] = '卢森堡';area['areacode'] = 'LU';area['prefix']='LX';break
                case 'LY': area['area'] = 'Lithuania';area['areacn'] = '立陶宛';area['areacode'] = 'LT';area['prefix']='LY';break
                case 'LZ': area['area'] = 'Bulgaria';area['areacn'] = '保加利亚';area['areacode'] = 'BG';area['prefix']='LZ';break
                case 'OA': area['area'] = 'Peru';area['areacn'] = '秘鲁';area['areacode'] = 'PE';area['prefix']='OA';break
                case 'OB': area['area'] = 'Peru';area['areacn'] = '秘鲁';area['areacode'] = 'PE';area['prefix']='OA';break
                case 'OC': area['area'] = 'Peru';area['areacn'] = '秘鲁';area['areacode'] = 'PE';area['prefix']='OA';break
                case 'OD': area['area'] = 'Lebanon';area['areacn'] = '黎巴嫩';area['areacode'] = 'LB';area['prefix']='OD';break
                case 'OE': area['area'] = 'Austria';area['areacn'] = '奥地利';area['areacode'] = 'AT';area['prefix']='OE';break
                case 'OF': area['area'] = 'Finland';area['areacn'] = '芬兰';area['areacode'] = 'FL';area['prefix']='OH';break
                case 'OG': area['area'] = 'Finland';area['areacn'] = '芬兰';area['areacode'] = 'FL';area['prefix']='OH';break
                case 'OH': area['area'] = 'Finland';area['areacn'] = '芬兰';area['areacode'] = 'FL';area['prefix']='OH';break
                case 'OI': area['area'] = 'Finland';area['areacn'] = '芬兰';area['areacode'] = 'FL';area['prefix']='OH';break
                case 'OK': area['area'] = 'Czech Republic';area['areacn'] = '捷克';area['areacode'] = 'CZ';area['prefix']='OK';break
                case 'OL': area['area'] = 'Czech Republic';area['areacn'] = '捷克';area['areacode'] = 'CZ';area['prefix']='OK';break
                case 'OM': area['area'] = 'Slovak Republic';area['areacn'] = '斯洛伐克';area['areacode'] = 'SK';area['prefix']='OM';break
                case 'ON': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OO': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OP': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OQ': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OR': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OS': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OT': area['area'] = 'Belgium';area['areacn'] = '比利时';area['areacode'] = 'BE';area['prefix']='ON';break
                case 'OU': area['area'] = 'Denmark';area['areacn'] = '丹麦';area['areacode'] = 'DK';area['prefix']='OV';break
                case 'OV': area['area'] = 'Denmark';area['areacn'] = '丹麦';area['areacode'] = 'DK';area['prefix']='OV';break
                case 'OW': area['area'] = 'Denmark';area['areacn'] = '丹麦';area['areacode'] = 'DK';area['prefix']='OV';break
                case 'OX': area['area'] = 'Greenland';area['areacn'] = '格陵兰';area['areacode'] = 'DK';area['prefix']='OX';break
                case 'OZ': area['area'] = 'Denmark';area['areacn'] = '丹麦';area['areacode'] = 'DK';area['prefix']='OZ';break
                case 'OY': area['area'] = 'Faroe Is.';area['areacn'] = '法罗群岛';area['areacode'] = 'DK';area['prefix']='OY';break
                case 'P2': area['area'] = 'Papua New Guinea';area['areacn'] = '巴布亚新几内亚';area['areacode'] = 'PG';area['prefix']='P2';break
                case 'P4': area['area'] = 'Aruba';area['areacn'] = '阿鲁巴';area['areacode'] = 'AW';area['prefix']='P4';break
                case 'P5': area['area'] = 'DPR of Korea';area['areacn'] = '朝鲜';area['areacode'] = 'KP';area['prefix']='P5';break
                case 'PA': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PB': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PC': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PD': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PE': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PF': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PG': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PH': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PI': area['area'] = 'Netherlands';area['areacn'] = '荷兰';area['areacode'] = 'NL';area['prefix']='PA';break
                case 'PP': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PQ': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PR': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PS': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PT': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PU': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PV': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PW': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PX': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PY': area['area'] = 'Brazil';area['areacn'] = '巴西';area['areacode'] = 'BR';area['prefix']='PY';break
                case 'PZ': area['area'] = 'Suriname';area['areacn'] = '苏里南';area['areacode'] = 'SR';area['prefix']='PZ';break
                case 'S0': area['area'] = 'Western Sahara';area['areacn'] = '西撒哈拉';area['areacode'] = 'EH';area['prefix']='S0';break
                case 'S2': area['area'] = 'Bangladesh';area['areacn'] = '孟加拉国';area['areacode'] = 'BD';area['prefix']='S2';break
                case 'S5': area['area'] = 'Slovenia';area['areacn'] = '斯洛文尼亚';area['areacode'] = 'SI';area['prefix']='S5';break
                case 'S7': area['area'] = 'Seychelles';area['areacn'] = '塞舌尔';area['areacode'] = 'SC';area['prefix']='S7';break
                case 'S9': area['area'] = 'Sao Tome & Principe';area['areacn'] = '圣多美和普林西比';area['areacode'] = 'ST';area['prefix']='S9';break
                case 'SA': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SB': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SC': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SD': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SE': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SH': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SG': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SH': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SI': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SJ': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SK': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SL': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SM': area['area'] = 'Sweden';area['areacn'] = '瑞典';area['areacode'] = 'SE';area['prefix']='SE';break
                case 'SN': area['area'] = 'Poland';area['areacn'] = '波兰';area['areacode'] = 'PL';area['prefix']='SE';break
                case 'SO': area['area'] = 'Poland';area['areacn'] = '波兰';area['areacode'] = 'PL';area['prefix']='SE';break
                case 'SP': area['area'] = 'Poland';area['areacn'] = '波兰';area['areacode'] = 'PL';area['prefix']='SE';break
                case 'SQ': area['area'] = 'Poland';area['areacn'] = '波兰';area['areacode'] = 'PL';area['prefix']='SE';break
                case 'SR': area['area'] = 'Poland';area['areacn'] = '波兰';area['areacode'] = 'PL';area['prefix']='SE';break
                case 'ST': area['area'] = 'Sudan';area['areacn'] = '苏丹共和国';area['areacode'] = 'SD';area['prefix']='ST';break
                case 'SU': area['area'] = 'Egypt';area['areacn'] = '埃及';area['areacode'] = 'EG';area['prefix']='SU';break
                case 'SV': area['area'] = 'Greece';area['areacn'] = '希腊';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'SW': area['area'] = 'Greece';area['areacn'] = '希腊';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'SX': area['area'] = 'Greece';area['areacn'] = '希腊';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'SY': area['area'] = 'Greece';area['areacn'] = '希腊';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'SZ': area['area'] = 'Greece';area['areacn'] = '希腊';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'T2': area['area'] = 'Tuvalu';area['areacn'] = '图瓦卢';area['areacode'] = 'TV';area['prefix']='T2';break
                case 'T3': area['area'] = 'Kiribati';area['areacn'] = '基里巴斯';area['areacode'] = 'KI';area['prefix']='T3';break
                case 'T5': area['area'] = 'Somalia';area['areacn'] = '索马里';area['areacode'] = 'SO';area['prefix']='T5';break
                case '6O': area['area'] = 'Somalia';area['areacn'] = '索马里';area['areacode'] = 'SO';area['prefix']='T5';break
                case 'T7': area['area'] = 'San Marino';area['areacn'] = '圣马力诺';area['areacode'] = 'SM';area['prefix']='T7';break
                case 'T8': area['area'] = 'Palau';area['areacn'] = '帕劳';area['areacode'] = 'PW';area['prefix']='T8';break
                case 'TA': area['area'] = 'Turkey';area['areacn'] = '土耳其';area['areacode'] = 'TR';area['prefix']='TA';break
                case 'TB': area['area'] = 'Turkey';area['areacn'] = '土耳其';area['areacode'] = 'TR';area['prefix']='TA';break
                case 'TC': area['area'] = 'Turkey';area['areacn'] = '土耳其';area['areacode'] = 'TR';area['prefix']='TA';break
                case 'TF': area['area'] = 'Iceland';area['areacn'] = '冰岛';area['areacode'] = 'IS';area['prefix']='TF';break
                case 'TG': area['area'] = 'Guatemala';area['areacn'] = '危地马拉';area['areacode'] = 'GT';area['prefix']='TG';break
                case 'TD': area['area'] = 'Guatemala';area['areacn'] = '危地马拉';area['areacode'] = 'GT';area['prefix']='TG';break
                case 'TI': area['area'] = 'Costa Rica';area['areacn'] = '哥斯达黎加';area['areacode'] = 'CR';area['prefix']='TI';break
                case 'TE': area['area'] = 'Costa Rica';area['areacn'] = '哥斯达黎加';area['areacode'] = 'CR';area['prefix']='TI';break
                case 'TJ': area['area'] = 'Cameroon';area['areacn'] = '喀麦隆';area['areacode'] = 'CM';area['prefix']='TJ';break
                case 'TK': area['area'] = 'Corsica';area['areacn'] = '科西嘉岛';area['areacode'] = 'FR';area['prefix']='TK';break
                case 'TL': area['area'] = 'Central Africa';area['areacn'] = '中部非洲';area['prefix']='TL';break
                case 'TN': area['area'] = 'Congo (Republic of the)';area['areacn'] = '刚果共和国';area['areacode'] = 'CG';area['prefix']='TN';break
                case 'TR': area['area'] = 'Gabon';area['areacn'] = '加蓬';area['areacode'] = 'GA';area['prefix']='TR';break
                case 'TT': area['area'] = 'Chad';area['areacn'] = '乍得';area['areacode'] = 'TD';area['prefix']='TT';break
                case 'TU': area['area'] = "Cote d'Ivoire";area['areacn'] = '科特迪瓦';area['areacode'] = 'CI';area['prefix']='TU';break
                case 'TY': area['area'] = 'Benin';area['areacn'] = '贝宁';area['areacode'] = 'BJ';area['prefix']='TY';break
                case 'TZ': area['area'] = 'Mali';area['areacn'] = '马里共和国';area['areacode'] = 'ML';area['prefix']='TZ';break
                case 'UJ': area['area'] = 'Uzbekistan';area['areacn'] = '乌兹别克斯坦';area['areacode'] = 'UZ';area['prefix']='UK';break
                case 'UK': area['area'] = 'Uzbekistan';area['areacn'] = '乌兹别克斯坦';area['areacode'] = 'UZ';area['prefix']='UK';break
                case 'UM': area['area'] = 'Uzbekistan';area['areacn'] = '乌兹别克斯坦';area['areacode'] = 'UZ';area['prefix']='UK';break
                case 'UN': area['area'] = 'Kazakhstan';area['areacn'] = '哈萨克斯坦';area['areacode'] = 'KZ';area['prefix']='UN';break
                case 'UO': area['area'] = 'Kazakhstan';area['areacn'] = '哈萨克斯坦';area['areacode'] = 'KZ';area['prefix']='UN';break
                case 'UP': area['area'] = 'Kazakhstan';area['areacn'] = '哈萨克斯坦';area['areacode'] = 'KZ';area['prefix']='UN';break
                case 'UQ': area['area'] = 'Kazakhstan';area['areacn'] = '哈萨克斯坦';area['areacode'] = 'KZ';area['prefix']='UN';break
                case 'UR': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'US': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UT': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UU': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UV': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UW': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UX': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UY': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'UZ': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'EM': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'EN': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'EO': area['area'] = 'Ukraine';area['areacn'] = '乌克兰';area['areacode'] = 'UA';area['prefix']='UR';break
                case 'V2': area['area'] = 'Antigua & Barbuda';area['areacn'] = '安提瓜和巴布达';area['areacode'] = 'AG';area['prefix']='V2';break
                case 'V3': area['area'] = 'Belize';area['areacn'] = '伯利兹';area['areacode'] = 'BZ';area['prefix']='V3';break
                case 'V4': area['area'] = 'St. Kitts & Nevis';area['areacn'] = '圣基茨和尼维斯';area['areacode'] = 'KN';area['prefix']='V4';break
                case 'V5': area['area'] = 'Namibia';area['areacn'] = '纳米比亚';area['areacode'] = 'NA';area['prefix']='V5';break
                case 'V6': area['area'] = 'Micronesia';area['areacn'] = '密克罗尼西亚联邦';area['areacode'] = 'FM';area['prefix']='V6';break
                case 'V7': area['area'] = 'Marshall Is';area['areacn'] = '马绍尔群岛';area['areacode'] = 'MH';area['prefix']='V7';break
                case 'V8': area['area'] = 'Brunei Darussalam';area['areacn'] = '文莱';area['areacode'] = 'BN';area['prefix']='V8';break
                case 'VA': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VB': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VC': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VD': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VE': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VO': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VY': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VX': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CF': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CG': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CH': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CI': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CJ': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CK': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CY': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CX': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'CZ': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'XJ': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'XK': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'XL': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'XM': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'XN': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'XO': area['area'] = 'Canada';area['areacn'] = '加拿大';area['areacode'] = 'CA';area['prefix']='VE';break
                case 'VH': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VI': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VJ': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VK': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VL': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VM': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VN': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'AX': area['area'] = 'Australia';area['areacn'] = '澳大利亚';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VR': area['area'] = 'Hong Kong';area['areacn'] = '香港';area['areacode'] = 'HK';area['prefix']='VR';break
                case 'VT': area['area'] = 'India';area['areacn'] = '印度';area['areacode'] = 'IN';area['prefix']='VU';break
                case 'VU': area['area'] = 'India';area['areacn'] = '印度';area['areacode'] = 'IN';area['prefix']='VU';break
                case 'VV': area['area'] = 'India';area['areacn'] = '印度';area['areacode'] = 'IN';area['prefix']='VU';break
                case 'VW': area['area'] = 'India';area['areacn'] = '印度';area['areacode'] = 'IN';area['prefix']='VU';break
                case 'XA': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XB': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XC': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XD': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XE': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XF': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XG': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XH': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XI': area['area'] = 'Mexico';area['areacn'] = '墨西哥';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XT': area['area'] = 'Burkina Faso';area['areacn'] = '布基纳法索';area['areacode'] = 'BF';area['prefix']='XT';break
                case 'XU': area['area'] = 'Cambodia';area['areacn'] = '柬埔寨';area['areacode'] = 'KH';area['prefix']='XU';break
                case 'XW': area['area'] = 'Laos';area['areacn'] = '老挝';area['areacode'] = 'LA';area['prefix']='XW';break
                case 'XY': area['area'] = 'Myanmar';area['areacn'] = '缅甸';area['areacode'] = 'MM';area['prefix']='XY';break
                case 'XZ': area['area'] = 'Myanmar';area['areacn'] = '缅甸';area['areacode'] = 'MM';area['prefix']='XZ';break
                case 'YA': area['area'] = 'Afghanistan';area['areacn'] = '阿富汗';area['areacode'] = 'AF';area['prefix']='YA';break
                case 'YB': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YC': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YD': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YE': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YF': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YG': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YH': area['area'] = 'Indonesia';area['areacn'] = '印度尼西亚';area['areacode'] = 'ID';area['prefix']='YB';break
                case 'YI': area['area'] = 'Iraq';area['areacn'] = '伊拉克';area['areacode'] = 'IQ';area['prefix']='YI';break
                case 'YJ': area['area'] = 'Vanuatu';area['areacn'] = '瓦努阿图';area['areacode'] = 'VU';area['prefix']='YJ';break
                case 'YK': area['area'] = 'Syria';area['areacn'] = '叙利亚';area['areacode'] = 'SY';area['prefix']='YK';break
                case 'YL': area['area'] = 'Latvia';area['areacn'] = '拉脱维亚';area['areacode'] = 'LV';area['prefix']='YL';break
                case 'YN': area['area'] = 'Nicaragua';area['areacn'] = '尼加拉瓜';area['areacode'] = 'NI';area['prefix']='YN';break
                case 'H6': area['area'] = 'Nicaragua';area['areacn'] = '尼加拉瓜';area['areacode'] = 'NI';area['prefix']='YN';break
                case 'H7': area['area'] = 'Nicaragua';area['areacn'] = '尼加拉瓜';area['areacode'] = 'NI';area['prefix']='YN';break
                case 'HT': area['area'] = 'Nicaragua';area['areacn'] = '尼加拉瓜';area['areacode'] = 'NI';area['prefix']='YN';break
                case 'YO': area['area'] = 'Romania';area['areacn'] = '罗马尼亚';area['areacode'] = 'RO';area['prefix']='YO';break
                case 'YP': area['area'] = 'Romania';area['areacn'] = '罗马尼亚';area['areacode'] = 'RO';area['prefix']='YO';break
                case 'YQ': area['area'] = 'Romania';area['areacn'] = '罗马尼亚';area['areacode'] = 'RO';area['prefix']='YO';break
                case 'YR': area['area'] = 'Romania';area['areacn'] = '罗马尼亚';area['areacode'] = 'RO';area['prefix']='YO';break
                case 'YS': area['area'] = 'El Salvador';area['areacn'] = '萨尔瓦多';area['areacode'] = 'SV';area['prefix']='HU';break
                case 'HU': area['area'] = 'El Salvador';area['areacn'] = '萨尔瓦多';area['areacode'] = 'SV';area['prefix']='HU';break
                case 'YT': area['area'] = 'Serbia';area['areacn'] = '塞尔维亚';area['areacode'] = 'RS';area['prefix']='YU';break
                case 'YU': area['area'] = 'Serbia';area['areacn'] = '塞尔维亚';area['areacode'] = 'RS';area['prefix']='YU';break
                case 'YV': area['area'] = 'Venezuela';area['areacn'] = '委内瑞拉';area['areacode'] = 'VE';area['prefix']='YV';break
                case 'YW': area['area'] = 'Venezuela';area['areacn'] = '委内瑞拉';area['areacode'] = 'VE';area['prefix']='YV';break
                case 'YX': area['area'] = 'Venezuela';area['areacn'] = '委内瑞拉';area['areacode'] = 'VE';area['prefix']='YV';break
                case 'YY': area['area'] = 'Venezuela';area['areacn'] = '委内瑞拉';area['areacode'] = 'VE';area['prefix']='YV';break
                case '4M': area['area'] = 'Venezuela';area['areacn'] = '委内瑞拉';area['areacode'] = 'VE';area['prefix']='YV';break
                case 'Z2': area['area'] = 'Zimbabwe';area['areacn'] = '津巴布韦';area['areacode'] = 'ZW';area['prefix']='Z2';break
                case 'Z3': area['area'] = 'Macedonia';area['areacn'] = '马其顿共和国';area['areacode'] = 'MK';area['prefix']='Z3';break
                case 'ZA': area['area'] = 'Albania';area['areacn'] = '阿尔巴尼亚';area['areacode'] = 'AL';area['prefix']='ZA';break
                case 'ZF': area['area'] = 'Cayman Is.';area['areacn'] = '开曼群岛';area['areacode'] = 'UK';area['prefix']='ZF';break
                case 'ZL': area['area'] = 'New Zealand';area['areacn'] = '新西兰';area['areacode'] = 'NZ';area['prefix']='ZL';break
                case 'ZM': area['area'] = 'New Zealand';area['areacn'] = '新西兰';area['areacode'] = 'NZ';area['prefix']='ZL';break
                case 'ZP': area['area'] = 'Paraguay';area['areacn'] = '巴拉圭';area['areacode'] = 'PY';area['prefix']='ZP';break
                case 'ZR': area['area'] = 'South Africa';area['areacn'] = '南非';area['areacode'] = 'ZA';area['prefix']='ZS';break
                case 'ZS': area['area'] = 'South Africa';area['areacn'] = '南非';area['areacode'] = 'ZA';area['prefix']='ZS';break
                case 'ZT': area['area'] = 'South Africa';area['areacn'] = '南非';area['areacode'] = 'ZA';area['prefix']='ZS';break
                case 'ZU': area['area'] = 'South Africa';area['areacn'] = '南非';area['areacode'] = 'ZA';area['prefix']='ZS';break
                case '3Y': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'NO';area['prefix']='3Y';break
                default:break
            }
            switch(callsign3){
                case '3B6': area['area'] = 'Agalega & St. Brandon Is';area['areacn'] = '毛里求斯-卡加多斯-卡拉若斯群岛';area['areacode'] = 'MU';area['prefix']='3B6';break
                case '3B7': area['area'] = 'Agalega & St. Brandon Is';area['areacn'] = '毛里求斯-卡加多斯-卡拉若斯群岛';area['areacode'] = 'MU';area['prefix']='3B7';break
                case '3B8': area['area'] = 'Mauritius';area['areacn'] = '毛里求斯';area['areacode'] = 'MU';area['prefix']='3B8';break
                case '3B9': area['area'] = 'Rodriguez I.';area['areacn'] = 'Rodriguez I.';area['prefix']='3B9';break
                case '3D2': area['area'] = 'Fiji,Conway Reef,Rotuma I.';area['areacn'] = '斐济';area['areacode'] = 'FJ';area['prefix']='3D2';break
                case '3DA': area['area'] = 'Swaziland';area['areacn'] = '斯威士兰';area['areacode'] = 'SZ';area['prefix']='3DA';break
                case '9M2': area['area'] = 'West Malaysia';area['areacn'] = '西马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9M4': area['area'] = 'West Malaysia';area['areacn'] = '西马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9M6': area['area'] = 'East Malaysia';area['areacn'] = '东马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9M8': area['area'] = 'East Malaysia';area['areacn'] = '东马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9W2': area['area'] = 'West Malaysia';area['areacn'] = '西马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9W4': area['area'] = 'West Malaysia';area['areacn'] = '西马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9W6': area['area'] = 'East Malaysia';area['areacn'] = '东马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case '9W8': area['area'] = 'East Malaysia';area['areacn'] = '东马来西亚';area['areacode'] = 'MY';area['prefix']='9M';break
                case 'CE0': area['area'] = 'Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio';area['areacn'] = 'Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'EA6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EB6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EC6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'ED6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EE6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EF6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EG6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EH6': area['area'] = 'Balearic Is.';area['areacn'] = '巴利阿里';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EA8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EB8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EC8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'ED8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EE8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EF8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EG8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EH8': area['area'] = 'Canary Is.';area['areacn'] = 'Canary Is.';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EA9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EB9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EC9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'ED9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EF9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EG9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'EH9': area['area'] = 'Ceuta & Melilla';area['areacn'] = '梅利利亚';area['areacode'] = 'ES';area['prefix']='EA';break
                case 'HC8': area['area'] = 'Galapagos Is.';area['areacn'] = '科隆群岛';area['areacode'] = 'EC';area['prefix']='HC';break
                case 'HD8': area['area'] = 'Galapagos Is.';area['areacn'] = '科隆群岛';area['areacode'] = 'EC';area['prefix']='HC';break
                case 'H40': area['area'] = 'Temotu Province';area['areacn'] = '所罗门群岛-泰莫图';area['areacode'] = 'SB';area['prefix']='H4';break
                case 'HB0': area['area'] = 'Liechtenstein';area['areacn'] = '列支敦士登';area['areacode'] = 'LI';area['prefix']='HB0';break
                case 'HK0': area['area'] = 'Malpelo I.,San Andres & Providencia';area['areacn'] = '普罗维登西亚岛';area['areacode'] = 'CO';area['prefix']='HK';break
                case 'IS0': area['area'] = 'Sardinia';area['areacn'] = '撒丁岛';area['areacode'] = 'IT';area['prefix']='IS0';break
                case 'IM0': area['area'] = 'Sardinia';area['areacn'] = '撒丁岛';area['areacode'] = 'IT';area['prefix']='IS0';break
                case 'JD1': area['area'] = 'Minami Torishima,Ogasawara';area['areacn'] = '南鸟岛,小笠原群岛';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'KG4': area['area'] = 'Guantanamo Bay';area['areacn'] = '关塔那摩湾';area['areacode'] = 'US';area['prefix']='K';break
                case 'KH0': area['area'] = 'Mariana Is.';area['areacn'] = '马里亚纳群岛';area['areacode'] = 'US';area['prefix']='KH0';break
                case 'KH1': area['area'] = 'Baker & Howland Is.';area['areacn'] = '贝克岛,豪兰岛';area['areacode'] = 'US';area['prefix']='KH1';break
                case 'KH2': area['area'] = 'Guam';area['areacn'] = '关岛';area['areacode'] = 'US';area['prefix']='KH2';break
                case 'KH3': area['area'] = 'Johnston I.';area['areacn'] = '约翰斯顿环礁';area['areacode'] = 'US';area['prefix']='KH3';break
                case 'KH4': area['area'] = 'Midway I.';area['areacn'] = '中途岛';area['areacode'] = 'US';area['prefix']='KH4';break
                case 'KH5': area['area'] = 'Palmyra & Jarvis Is.';area['areacn'] = 'Palmyra & Jarvis Is.';area['areacode'] = 'US';area['prefix']='KH5';break
                case 'KH6': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH6';break
                case 'KH7': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH7';break
                case 'KH8': area['area'] = 'American Samoa,Swains';area['areacn'] = '美属萨摩亚,斯温斯';area['areacode'] = 'US';area['prefix']='KH8';break
                case 'KH9': area['area'] = 'Wake I. ';area['areacn'] = '威克岛';area['areacode'] = 'US';area['prefix']='KH9';break
                case 'AH0': area['area'] = 'Mariana Is.';area['areacn'] = '马里亚纳群岛';area['areacode'] = 'US';area['prefix']='KH0';break
                case 'AH1': area['area'] = 'Baker & Howland Is.';area['areacn'] = '贝克岛,豪兰岛';area['areacode'] = 'US';area['prefix']='KH1';break
                case 'AH2': area['area'] = 'Guam';area['areacn'] = '关岛';area['areacode'] = 'US';area['prefix']='KH2';break
                case 'AH3': area['area'] = 'Johnston I.';area['areacn'] = '约翰斯顿环礁';area['areacode'] = 'US';area['prefix']='KH3';break
                case 'AH4': area['area'] = 'Midway I.';area['areacn'] = '中途岛';area['areacode'] = 'US';area['prefix']='KH4';break
                case 'AH5': area['area'] = 'Palmyra & Jarvis Is.';area['areacn'] = 'Palmyra & Jarvis Is.';area['areacode'] = 'US';area['prefix']='KH5';break
                case 'AH6': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH6';break
                case 'AH7': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH7';break
                case 'AH8': area['area'] = 'American Samoa,Swains';area['areacn'] = '美属萨摩亚,斯温斯';area['areacode'] = 'US';area['prefix']='KH8';break
                case 'AH9': area['area'] = 'Wake I. ';area['areacn'] = '威克岛';area['areacode'] = 'US';area['prefix']='KH9';break
                case 'NH0': area['area'] = 'Mariana Is.';area['areacn'] = '马里亚纳群岛';area['areacode'] = 'US';area['prefix']='KH0';break
                case 'NH1': area['area'] = 'Baker & Howland Is.';area['areacn'] = '贝克岛,豪兰岛';area['areacode'] = 'US';area['prefix']='KH1';break
                case 'NH2': area['area'] = 'Guam';area['areacn'] = '关岛';area['areacode'] = 'US';area['prefix']='KH2';break
                case 'NH3': area['area'] = 'Johnston I.';area['areacn'] = '约翰斯顿环礁';area['areacode'] = 'US';area['prefix']='KH3';break
                case 'NH4': area['area'] = 'Midway I.';area['areacn'] = '中途岛';area['areacode'] = 'US';area['prefix']='KH4';break
                case 'NH5': area['area'] = 'Palmyra & Jarvis Is.';area['areacn'] = 'Palmyra & Jarvis Is.';area['areacode'] = 'US';area['prefix']='KH5';break
                case 'NH6': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH6';break
                case 'NH7': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH7';break
                case 'NH8': area['area'] = 'American Samoa,Swains';area['areacn'] = '美属萨摩亚,斯温斯';area['areacode'] = 'US';area['prefix']='KH8';break
                case 'NH9': area['area'] = 'Wake I. ';area['areacn'] = '威克岛';area['areacode'] = 'US';area['prefix']='KH9';break
                case 'WH0': area['area'] = 'Mariana Is.';area['areacn'] = '马里亚纳群岛';area['areacode'] = 'US';area['prefix']='KH0';break
                case 'WH1': area['area'] = 'Baker & Howland Is.';area['areacn'] = '贝克岛,豪兰岛';area['areacode'] = 'US';area['prefix']='KH1';break
                case 'WH2': area['area'] = 'Guam';area['areacn'] = '关岛';area['areacode'] = 'US';area['prefix']='KH2';break
                case 'WH3': area['area'] = 'Johnston I.';area['areacn'] = '约翰斯顿环礁';area['areacode'] = 'US';area['prefix']='KH3';break
                case 'WH4': area['area'] = 'Midway I.';area['areacn'] = '中途岛';area['areacode'] = 'US';area['prefix']='KH4';break
                case 'WH5': area['area'] = 'Palmyra & Jarvis Is.';area['areacn'] = 'Palmyra & Jarvis Is.';area['areacode'] = 'US';area['prefix']='KH5';break
                case 'WH6': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH6';break
                case 'WH7': area['area'] = 'Hawaii';area['areacn'] = '夏威夷';area['areacode'] = 'US';area['prefix']='KH7';break
                case 'WH8': area['area'] = 'American Samoa,Swains';area['areacn'] = '美属萨摩亚,斯温斯';area['areacode'] = 'US';area['prefix']='KH8';break
                case 'WH9': area['area'] = 'Wake I. ';area['areacn'] = '威克岛';area['areacode'] = 'US';area['prefix']='KH9';break
                case 'KP1': area['area'] = 'Navassa I.';area['areacn'] = '纳瓦萨岛';area['areacode'] = 'US';area['prefix']='KP1';break
                case 'KP2': area['area'] = 'Virgin Is.';area['areacn'] = '美属维尔京群岛';area['areacode'] = 'US';area['prefix']='KP2';break
                case 'KP3': area['area'] = 'Puerto Rico';area['areacn'] = '波多黎各';area['areacode'] = 'US';area['prefix']='KP3';break
                case 'KP4': area['area'] = 'Puerto Rico';area['areacn'] = '波多黎各';area['areacode'] = 'US';area['prefix']='KP4';break
                case 'KP5': area['area'] = 'Desecheo I.';area['areacn'] = '德塞切奥岛';area['areacode'] = 'US';area['prefix']='KP5';break
                case 'OH0': area['area'] = 'Aland Is.';area['areacn'] = '奥兰';area['areacode'] = 'AX';area['prefix']='OH0';break
                case 'OJ0': area['area'] = 'Market Reef';area['areacn'] = '马凯特岛';area['prefix']='OJ0';break
                case 'PJ2': area['area'] = 'Bonaire, Curacao';area['areacn'] = '博奈尔';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'PJ4': area['area'] = 'Bonaire, Curacao';area['areacn'] = '博奈尔';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'PJ9': area['area'] = 'Bonaire, Curacao';area['areacn'] = '博奈尔';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'PJ5': area['area'] = 'St. Maarten, Saba, St.';area['areacn'] = '荷属圣马丁';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'PJ6': area['area'] = 'St. Maarten, Saba, St.';area['areacn'] = '荷属圣马丁';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'PJ7': area['area'] = 'St. Maarten, Saba, St.';area['areacn'] = '荷属圣马丁';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'PJ8': area['area'] = 'St. Maarten, Saba, St.';area['areacn'] = '荷属圣马丁';area['areacode'] = 'NL';area['prefix']='PJ';break
                case 'SV5': area['area'] = 'Dodecanese';area['areacn'] = '十二群岛';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'J45': area['area'] = 'Dodecanese';area['areacn'] = '十二群岛';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'SV9': area['area'] = 'Crete';area['areacn'] = '克里特岛';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'J49': area['area'] = 'Crete';area['areacn'] = '克里特岛';area['areacode'] = 'GR';area['prefix']='SV';break
                case 'TI9': area['area'] = 'Cocos I.';area['areacn'] = '科科斯（基林）群岛';area['areacode'] = 'AU';area['prefix']='TI';break
                case 'UA1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI1': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA2': area['area'] = 'Kaliningrad';area['areacn'] = '俄罗斯-加里宁格勒';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI3': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI4': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI6': area['area'] = 'European Russia';area['areacn'] = '俄罗斯（欧洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI8': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI9': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UA0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UB0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UC0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UD0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UE0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UF0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UG0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UH0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'UI0': area['area'] = 'Asiatic Russia';area['areacn'] = '俄罗斯（亚洲）';area['areacode'] = 'RU';area['prefix']='R';break
                case 'VK0': area['area'] = 'Heard I.,Macquarie I.';area['areacn'] = '赫德岛和麦克唐纳群岛';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VP5': area['area'] = 'Turks & Caicos Is.';area['areacn'] = '特克斯和凯科斯群岛';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'VP6': area['area'] = 'Pitcairn I.,Ducie I.';area['areacn'] = '皮特凯恩群岛,迪西岛';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'VP8': area['area'] = 'Falkland Is.';area['areacn'] = '福克兰群岛';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'CE9': area['area'] = 'Bermuda';area['areacn'] = '百慕大';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'HF0': area['area'] = 'Bermuda';area['areacn'] = '百慕大';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'VP9': area['area'] = 'Bermuda';area['areacn'] = '百慕大';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'VQ9': area['area'] = 'Chagos Is.';area['areacn'] = '查戈斯群岛';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'VU4': area['area'] = 'Andaman & Nicobar Is.';area['areacn'] = '安达曼群岛';area['areacode'] = 'IN';area['prefix']='VU';break
                case 'VU7': area['area'] = 'Lakshadweep Is.';area['areacn'] = '拉克沙群岛';area['areacode'] = 'IN';area['prefix']='VU';break
                case 'XA4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XB4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XC4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XD4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XE4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XF4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XG4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XH4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XI4': area['area'] = 'Revillagigedo';area['areacn'] = '雷维利亚希赫多群岛';area['areacode'] = 'MX';area['prefix']='XE';break
                case 'XX9': area['area'] = 'Macao';area['areacn'] = '澳门';area['areacode'] = 'MO';area['prefix']='XX9';break
                case 'ZB2': area['area'] = 'Gibraltar';area['areacn'] = '直布罗陀';area['areacode'] = 'UK';area['prefix']='ZB';break
                case 'ZD7': area['area'] = 'St. Helena';area['areacn'] = '圣赫勒拿';area['areacode'] = 'UK';area['prefix']='ZD';break
                case 'ZD8': area['area'] = 'Ascension I.';area['areacn'] = '阿森松岛';area['areacode'] = 'UK';area['prefix']='ZD';break
                case 'ZD9': area['area'] = 'Tristan da Cunha & Gough I.';area['areacn'] = '戈夫岛';area['areacode'] = 'UK';area['prefix']='ZD';break
                case 'ZK2': area['area'] = 'Niue';area['areacn'] = '纽埃';area['areacode'] = 'NZ';area['prefix']='ZD';break
                case 'ZK3': area['area'] = 'Tokelau Is.';area['areacn'] = '托克劳';area['areacode'] = 'NZ';area['prefix']='ZL';break
                case 'ZL7': area['area'] = 'Chatham Is.';area['areacn'] = '查塔姆群岛';area['areacode'] = 'NZ';area['prefix']='ZL';break
                case 'ZL8': area['area'] = 'Kermadec Is.';area['areacn'] = '克马德克群岛';area['areacode'] = 'NZ';area['prefix']='ZL';break
                case 'ZL9': area['area'] = 'Auckland & Campbell Is.';area['areacn'] = 'Auckland & Campbell Is.';area['areacode'] = 'NZ';area['prefix']='ZL';break
                case 'ZS8': area['area'] = 'Prince Edward & Marion Is.';area['areacn'] = '爱德华王子群岛';area['areacode'] = 'ZA';area['prefix']='ZS';break
                case 'AT0': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'IN';area['prefix']='AT';break
                case 'CE9': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'CL';area['prefix']='CE';break
                case 'OR4': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'BE';area['prefix']='OR';break
                case 'DP0': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'DE';area['prefix']='DF';break
                case '8J1': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'JP';area['prefix']='JA';break
                case 'KC4': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'US';area['prefix']='K';break
                case 'HL8': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'KR';area['prefix']='HL';break
                default:break;
            }
            switch(callsign4){
                case 'BS7H': area['area'] = 'Scarborough Reef';area['areacn'] = '黄岩岛';area['areacode'] = 'CN';area['prefix']='B';break
                case 'BV9P': area['area'] = 'Pratas I.';area['areacn'] = '东沙群岛';area['areacode'] = 'TW';area['prefix']='BV';break
                case 'KH5K': area['area'] = 'Kingman Reef';area['areacn'] = '金曼礁';area['areacode'] = 'US';area['prefix']='KH5';break
                case 'KH7K': area['area'] = 'Kure I.';area['areacn'] = '库雷岛';area['areacode'] = 'US';area['prefix']='KH5';break
                case 'PY0F': area['area'] = 'Fernando de Noronha';area['areacn'] = '费尔南多·迪诺罗尼亚群岛';area['areacode'] = 'BZ';area['prefix']='PY';break
                case 'PY0S': area['area'] = 'St. Peter & St. Paul Rocks';area['areacn'] = '圣佩德罗和圣保罗群';area['areacode'] = 'BZ';area['prefix']='PY';break
                case 'PY0T': area['area'] = 'Trindade & Martim Vaz Is.';area['areacn'] = '特林达迪和马丁瓦斯群岛';area['areacode'] = 'BZ';area['prefix']='PY';break
                case 'R1FJ': area['area'] = 'Franz Josef Land';area['areacn'] = '法兰士约瑟夫地群岛';area['areacode'] = 'RU';area['prefix']='R';break
                case 'R1MV': area['area'] = 'Malyj Vysotskij I.';area['areacn'] = 'Maly Vysotsky Island';area['areacode'] = 'RU';area['prefix']='R';break
                case 'VK9C': area['area'] = 'Cocos (Keeling) Is.';area['areacn'] = '科科斯（基林）群岛';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VK9L': area['area'] = ' Lord Howe I.';area['areacn'] = '豪勋爵岛';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VK9M': area['area'] = 'Mellish Reef';area['areacn'] = '梅利什礁';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VK9N': area['area'] = 'Norfolk I.';area['areacn'] = '诺福克岛';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VK9W': area['area'] = 'Willis I.';area['areacn'] = 'Willis I.';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VK9X': area['area'] = 'Christmas I.';area['areacn'] = 'Christmas I.';area['areacode'] = 'AU';area['prefix']='VK';break
                case 'VP2E': area['area'] = 'Anguilla';area['areacn'] = '安圭拉';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'VP2M': area['area'] = 'Montserrat';area['areacn'] = '蒙特塞拉特';area['areacode'] = 'UK';area['prefix']='VP';break
                case 'R1AN': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'RU';area['prefix']='R';break
                case 'RI1A': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'RU';area['prefix']='R';break
                case 'FT8Y': area['area'] = 'Antarctica';area['areacn'] = '南极洲';area['areacode'] = 'FR';area['prefix']='F';break
                default:break;
            }
            return area
        },
        searchBuro(code){
            var hasBuro = ['MC','FJ','TN','GE','LK','IL','CY','TZ','NG','WS','UG','KE','SN','JM','DZ','BB','GY','HR','GH','MT','ZM','KW','MY','CD','SG','TT','BW','OM','QA','PK','CN','TW','AD','MZ','CL','CU','BO','PT','UY','DE','PH','BA','ES','IE','AM','LR','MD','EE','BY','TJ','TM','FR','NC','PF','UK','HU','CH','LI','EC','CO','KR','PA','HN','TH','IT','DJ','GD','DM','DO','JP','MN','JO','NO','AR','LU','LT','BG','PE','LB','AT','FI','CZ','SK','BE','DK','FO','AW','NL','CW','BR','RU','BD','SI','SE','PL','GR','SM','TR','IS','GT','CR','GA','CI','ML','UZ','KZ','UA','AG','NA','BN','CA','AU','VG','TC','BM','IN','HK','MO','US','MX','BF','ID','IQ','VU','SY','LV','NI','RO','SV','RS','VE','MK','KY','NZ','PY','ZA']
            if ( hasBuro.indexOf(code) !=-1) {
                return true
            }else{
                return false
            }
        },
        confirm(){
            var eachQSO = {
                id:nanoid('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10),
                type:'normal',
                callsign: this.callsign.toUpperCase(),
                dxcc: this.callsignResultArea,
                band:this.band,
                freq:this.freq,
                mode:this.mode.toUpperCase(),
                grid:this.grid.toUpperCase(),
                rstsend:this.rstsend,
                exchsend:null,
                rstrecv:this.rstrecv,
                exchsend:null,
                remark:this.remark,
                time:this.time,
                date:this.date,
            }

            // save to list
            this.tableDesserts.push(eachQSO)

            // save db
            this.$LogDB.get('logbook').push(eachQSO).write()
            this.$cacheDB.get('cache').push(eachQSO).write()

            // clear input box
            this.callsign = ''
            this.grid = ''
            this.rstsend = ''
            this.rstrecv = ''
            this.remark = ''
            this.time = '',
            this.date = ''
        },
        clear(){
            this.callsign = ''
            this.dxcc = ''
            this.band = ''
            this.freq = ''
            this.mode = ''
            this.grid = ''
            this.rstsend = ''
            this.rstrecv = ''
            this.remark = ''
            this.time = '',
            this.date = ''
        },
    },
    created(){
        
    }
};
</script>

<style>
</style>
