<template>
  <a-layout-content class="bg-white h-4/5 p-6 flex">
       
        <div class="text-lg leading-relaxed text-left mb-8 w-2/3">
          1.2右表为小明同学通过“实验模拟器”记录的数据。<br/>
          请你运用所学的科学原理，解释水温在7℃比在35℃时，水中溶氧量高的原因。
           <div>
        <a-textarea  class="mt-4" placeholder="" :rows="8"  v-model="answer.text" @change="textareaChange" :disabled="answer_dispaly[2]"/>
        
        </div>
        </div>
        <div class="w-2/3 align-middle table">
          <a-table
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
      return this.answer.text=this.processData.answer[7]+''
    }
  },
  data() {
    return {
         columns:[
        {
          title: "水面位置",
          dataIndex: "water",
          key: "water",
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
      ],
      answer: {
        text:'text'?this.processData.answer[7]:[]
      },
      TableData:[
        {key:0, water: 1, temperature: 7, do: 12.11},
        {key:1, water: 2, temperature: 7, do: 12.11},
        {key:2, water: 3, temperature: 7, do: 12.11},
        {key:3, water: 4, temperature: 7, do: 12.11},
        {key:4, water: 5, temperature: 7, do: 12.11},
        {key:5, water: 1, temperature: 35, do: 6.95},
        {key:6, water: 2, temperature: 35, do: 6.95},
        {key:7, water: 3, temperature: 35, do: 6.95},
        {key:8, water: 4, temperature: 35, do: 6.95},
        {key:9, water: 5, temperature: 35, do: 6.95},
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
    textareaChange(){
      this.processData.answer[7]=[this.answer.text]
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
  .table{
    margin-left: 5rem;
  }
</style>
