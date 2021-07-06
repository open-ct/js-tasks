<template>
  <a-layout-content class="bg-white h-4/5 p-6 flex">
       
        <div class="text-lg leading-relaxed text-left mb-8 w-1/2 byellow">
          2.1为进一步探究鱼缸中水草与水中溶氧量的关系，
          小明同学记录了某鱼缸中水的溶氧量在一天中的变化，如右表。<br/><br/>
          根据右表中的数据，你能得出什么结论，请写出你的结论并运用所学的科学知识作出解释。
           <div><br/>
        <a-textarea  class="mt-4" placeholder="" :rows="8"  v-model="$store.state.answer.textstep4" @change="textareaChange" :disabled="$store.state.disabled.step4answer"/>
        
        </div>
        </div>
        <div class="w-1/2 bgreen" >
          <a-table
              style="margin-top:2rem"
              :scroll="{ y:550 }"
              :pagination="false"
              :columns="columns"
              :data-source="TableData || []"
            />
        </div>
      </a-layout-content>
</template>

<script>
export default {
  components: {},
  provide: {},
  computed: {
  },
  created() {
    if(this.answer.text==='text'){
      return this.answer.text=''
    }else{
      return this.answer.text=this.processData.answer[8]+''
    }
  },
  data() {
    return {
         columns:[
        {
          title: "时间",
          dataIndex: "time",
          key: "time",
        },
        {
          title: "水温（℃）",
          dataIndex: "temperature",
          key: "temperature",
        },
        {
          title: "水中的溶氧量（mg/L)",
          dataIndex: "do",
          key: "do",
        },
        {
          title: "鱼的数量",
          dataIndex: "fishernum",
          key: "fishernum",
        },
        {
          title: "水草数量",
          dataIndex: "grassnum",
          key: "grassnum",
        },
      ],
      answer: {
        text:'text'?this.processData.answer[8]:[]
      },
      TableData:[
        {key:0, time: '9:00', temperature: 28, do: 4.59,fishernum:2,grassnum:2,},
        {key:1, time: '11:00', temperature: 32, do: 5.53,fishernum:2,grassnum:2,},
        {key:2, time: '12:00', temperature: 32, do: 6.22,fishernum:2,grassnum:2,},
        {key:3, time: '13:00', temperature: 32, do: 6.68,fishernum:2,grassnum:2,},
        {key:4, time: '17:00', temperature: 28, do: 5.50,fishernum:2,grassnum:2,},
        {key:5, time: '20:00', temperature: 26, do: 4.38,fishernum:2,grassnum:2,},
      ],
      fish: 1,
      grass: 0,
      water: 1,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      steps: [
        {
          index: 0,
          title: "前言",
        },
        {
          index: 1,
          title: "实验模拟器",
        },
        {
          index: 2,
          title: "问题1",
        },
        {
          index: 3,
          title: "问题1.1",
        },
        {
          index: 4,
          title: "问题2",
        },
        {
          index: 5,
          title: "问题3.1",
        },
        {
          index: 6,
          title: "问题3.2",
        },
        {
          index: 7,
          title: "问题3.3",
        },
      ],
      current: 0,
      stepStyle: {
        boxShadow: "0px -1px 0 0 #e8e8e8 inset",
      },
      list: [],
      name: "",
      step: 0,
      maojinweizhi: undefined,
      shuiweiweizhi: undefined,
      tempData: {
        "00": "30.0℃",
        "01": "30.0℃",
        "02": "30.0℃",
        "03": "29.5℃",
        "04": "29.1℃",
        10: "30.0℃",
        11: "30.0℃",
        12: "30.0℃",
        13: "29.4℃",
        14: "29.0℃",
        20: "30.0℃",
        21: "24.8℃",
        22: "20.2℃",
        23: "28.4℃",
        24: "27.9℃",
      },
    };
  },
  props:['processData','answer_dispaly'],
  name: "app",
  mounted() {},
  methods: {
    textareaChange(e){
      this.$store.state.textstep4=e.target.value
      this.processData.answer[8]=[e.target.value]
      this.$emit('recordProcessData',this.processData)
    },

    next() {
      this.current++;
    },
    back() {
      this.current--;
    },
  },
};
</script>

<style  scoped>
  .text{
    margin-top: -30px;

    line-height: 3rem;
  }
</style>
