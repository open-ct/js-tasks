<template>
  <a-layout-content class="bg-white h-4/5 p-6 flex w-full">
    <div class="text-lg leading-relaxed text-left mb-8 w-1/3">
      1.某位同学为探究鱼缸中水的溶氧量与哪些因素有关。向如图所示的圆柱体鱼缸中注水，并测量水中的溶氧量。<br /><br />

      请你使用“实验模拟器”，拖动“水面高度“按钮，观察数据可知鱼缸中溶氧量最大的位置在
      <a-dropdown>
            <a-button style="margin-left: 8px;"> {{ answer.q1a1 || "" }} <a-icon type="down" /> </a-button>
            <a-menu slot="overlay">
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = 1;
                    recordProcessData(1)
                    $forceUpdate();
                  }
                "
              >
                <a>1</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = 2;
                    recordProcessData(2)
                    $forceUpdate();
                  }
                "
              >
                <a>2</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = 3;
                    recordProcessData(3)
                    $forceUpdate();
                  }
                "
              >
                <a>3</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = 4;
                    recordProcessData(4)
                    $forceUpdate();
                  }
                "
              >
                <a>4</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = 5;
                    recordProcessData(5)
                    $forceUpdate();
                  }
                "
              >
                <a>5</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          

      <br />由此可以看出水中的溶氧量与<a-input
        style="width: 10rem !important"
        placeholder=""
        v-model="answer.input"
        @change="inputChange"
      />有关。
    </div>
    <div class="w-2/3">
      <a-form-model
        class=""
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="水面高度">
          <a-slider
            v-model="water"
            id="test"
            :default-value="1"
            :dots="true"
            :min="1"
            :max="5"
            :marks="marks2"
            @change="updateQ1Table"
          />
        </a-form-model-item>
      </a-form-model>

      <a-statistic
        class="w-1/5"
        style="margin-left: 30px"
        title="水的体积（mL）"
        :value="getVolumeStraight"
      />
      <a-statistic
        class="w-1/5"
        style="margin-left: 30px"
        title="溶氧量（mg/L）"
        :value="getDoStraight"
      />
      <div class="flex flex-1 w-full mt-4">
        <div class="w-1/2">
          <img v-if="water == 1" src="../assets/straight1.png" alt="" />
          <img v-if="water == 2" src="../assets/straight2.png" alt="" />
          <img v-if="water == 3" src="../assets/straight3.png" alt="" />
          <img v-if="water == 4" src="../assets/straight4.png" alt="" />
          <img v-if="water == 5" src="../assets/straight5.png" alt="" />
        </div>
        <div class="w-1/2">
          <a-table
            :scroll="{ y: 280 }"
            :pagination="false"
            :columns="columns"
            :data-source="answer.q1TableData || []"
          >
          </a-table>
        </div>
      </div>
    </div>
  </a-layout-content>
</template>

<script>
const columns = [
  {
    title: "水面高度",
    dataIndex: "water",
    key: "water",
  },
  {
    title: "水的体积",
    dataIndex: "volume",
    key: "volume",
  },
  {
    title: "溶氧量",
    dataIndex: "do",
    key: "do",
  },
];

export default {
  components: {},
  provide: {},
  computed: {
    getImg() {
      return this.imgList[this.maojinweizhi + "" + this.shuiweiweizhi];
    },
    getVolume() {
      switch (this.water) {
        case 1:
          return 100;
        case 2:
          return 220;
        case 3:
          return 350;
        case 4:
          return 470;
        case 5:
          return 590;
      }
    },
    getDo() {
      let fish = this.fish;
      let water = this.water;
      let grass = this.grass;
      for (const element of this.doData) {
        if (
          element.fish == fish &&
          element.water == water &&
          element.grass == grass
        ) {
          return element.do;
        }
      }
      // this.doData.forEach(element => {
      // 	debugger
      // 	if(element.fish==fish&&element.water==water&&element.grass==grass){
      // 		return element.do
      // 	}
      // 	return '暂无数据'
      // });
    },
    getVolumeStraight() {
      switch (this.water) {
        case 1:
          return 100;
        case 2:
          return 200;
        case 3:
          return 300;
        case 4:
          return 400;
        case 5:
          return 500;
      }
    },
    getDoStraight() {
      return this.getVolumeStraight / 10 + 20;
      // this.doData.forEach(element => {
      // 	debugger
      // 	if(element.fish==fish&&element.water==water&&element.grass==grass){
      // 		return element.do
      // 	}
      // 	return '暂无数据'
      // });
    },
  },
  data() {
    return {
      marks1: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4'
      },
      marks2: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      columns,
      answer: {},
      q4TableData: [
        { fish: 0, water: 4, grass: 0, do: 60 },
        { fish: 2, water: 4, grass: 0, do: 50 },
        { fish: 2, water: 4, grass: 2, do: 48 },
      ],
      doData: [
        { fish: 1, water: 1, grass: 0, do: 31 },
        { fish: 1, water: 1, grass: 1, do: 31.1 },
        { fish: 1, water: 1, grass: 2, do: 31.2 },
        { fish: 1, water: 1, grass: 3, do: 31.3 },
        { fish: 1, water: 1, grass: 4, do: 31.4 },
        { fish: 1, water: 2, grass: 0, do: 43 },
        { fish: 1, water: 2, grass: 1, do: 43.1 },
        { fish: 1, water: 2, grass: 2, do: 43.2 },
        { fish: 1, water: 2, grass: 3, do: 43.3 },
        { fish: 1, water: 2, grass: 4, do: 43.4 },
        { fish: 1, water: 3, grass: 0, do: 58 },
        { fish: 1, water: 3, grass: 1, do: 58.1 },
        { fish: 1, water: 3, grass: 2, do: 58.2 },
        { fish: 1, water: 3, grass: 3, do: 58.3 },
        { fish: 1, water: 3, grass: 4, do: 58.4 },
        { fish: 1, water: 4, grass: 0, do: 79 },
        { fish: 1, water: 4, grass: 1, do: 79.1 },
        { fish: 1, water: 4, grass: 2, do: 79.2 },
        { fish: 1, water: 4, grass: 3, do: 79.3 },
        { fish: 1, water: 4, grass: 4, do: 79.4 },
        { fish: 1, water: 5, grass: 0, do: 75 },
        { fish: 1, water: 5, grass: 1, do: 75.1 },
        { fish: 1, water: 5, grass: 2, do: 75.2 },
        { fish: 1, water: 5, grass: 3, do: 75.3 },
        { fish: 1, water: 5, grass: 4, do: 75.4 },
        { fish: 2, water: 1, grass: 0, do: 30.8 },
        { fish: 2, water: 1, grass: 1, do: 30.9 },
        { fish: 2, water: 1, grass: 2, do: 31 },
        { fish: 2, water: 1, grass: 3, do: 31.1 },
        { fish: 2, water: 1, grass: 4, do: 31.2 },
        { fish: 2, water: 2, grass: 0, do: 42.8 },
        { fish: 2, water: 2, grass: 1, do: 42.9 },
        { fish: 2, water: 2, grass: 2, do: 43 },
        { fish: 2, water: 2, grass: 3, do: 43.1 },
        { fish: 2, water: 2, grass: 4, do: 43.2 },
        { fish: 2, water: 3, grass: 0, do: 57.8 },
        { fish: 2, water: 3, grass: 1, do: 57.9 },
        { fish: 2, water: 3, grass: 2, do: 58 },
        { fish: 2, water: 3, grass: 3, do: 58.1 },
        { fish: 2, water: 3, grass: 4, do: 58.2 },
        { fish: 2, water: 4, grass: 0, do: 78.8 },
        { fish: 2, water: 4, grass: 1, do: 78.9 },
        { fish: 2, water: 4, grass: 2, do: 79 },
        { fish: 2, water: 4, grass: 3, do: 79.1 },
        { fish: 2, water: 4, grass: 4, do: 79.2 },
        { fish: 2, water: 5, grass: 0, do: 74.8 },
        { fish: 2, water: 5, grass: 1, do: 74.9 },
        { fish: 2, water: 5, grass: 2, do: 75 },
        { fish: 2, water: 5, grass: 3, do: 75.1 },
        { fish: 2, water: 5, grass: 4, do: 75.2 },
        { fish: 3, water: 1, grass: 0, do: 30.6 },
        { fish: 3, water: 1, grass: 1, do: 30.7 },
        { fish: 3, water: 1, grass: 2, do: 30.8 },
        { fish: 3, water: 1, grass: 3, do: 30.9 },
        { fish: 3, water: 1, grass: 4, do: 31 },
        { fish: 3, water: 2, grass: 0, do: 42.6 },
        { fish: 3, water: 2, grass: 1, do: 42.7 },
        { fish: 3, water: 2, grass: 2, do: 42.8 },
        { fish: 3, water: 2, grass: 3, do: 42.9 },
        { fish: 3, water: 2, grass: 4, do: 43 },
        { fish: 3, water: 3, grass: 0, do: 57.6 },
        { fish: 3, water: 3, grass: 1, do: 57.7 },
        { fish: 3, water: 3, grass: 2, do: 57.8 },
        { fish: 3, water: 3, grass: 3, do: 57.9 },
        { fish: 3, water: 3, grass: 4, do: 58 },
        { fish: 3, water: 4, grass: 0, do: 78.6 },
        { fish: 3, water: 4, grass: 1, do: 78.7 },
        { fish: 3, water: 4, grass: 2, do: 78.8 },
        { fish: 3, water: 4, grass: 3, do: 78.9 },
        { fish: 3, water: 4, grass: 4, do: 79 },
        { fish: 3, water: 5, grass: 0, do: 74.6 },
        { fish: 3, water: 5, grass: 1, do: 74.7 },
        { fish: 3, water: 5, grass: 2, do: 74.8 },
        { fish: 3, water: 5, grass: 3, do: 74.9 },
        { fish: 3, water: 5, grass: 4, do: 75 },
        { fish: 4, water: 1, grass: 0, do: 30.4 },
        { fish: 4, water: 1, grass: 1, do: 30.5 },
        { fish: 4, water: 1, grass: 2, do: 30.6 },
        { fish: 4, water: 1, grass: 3, do: 30.7 },
        { fish: 4, water: 1, grass: 4, do: 30.8 },
        { fish: 4, water: 2, grass: 0, do: 42.4 },
        { fish: 4, water: 2, grass: 1, do: 42.5 },
        { fish: 4, water: 2, grass: 2, do: 42.6 },
        { fish: 4, water: 2, grass: 3, do: 42.7 },
        { fish: 4, water: 2, grass: 4, do: 42.8 },
        { fish: 4, water: 3, grass: 0, do: 57.4 },
        { fish: 4, water: 3, grass: 1, do: 57.5 },
        { fish: 4, water: 3, grass: 2, do: 57.6 },
        { fish: 4, water: 3, grass: 3, do: 57.7 },
        { fish: 4, water: 3, grass: 4, do: 57.8 },
        { fish: 4, water: 4, grass: 0, do: 78.4 },
        { fish: 4, water: 4, grass: 1, do: 78.5 },
        { fish: 4, water: 4, grass: 2, do: 78.6 },
        { fish: 4, water: 4, grass: 3, do: 78.7 },
        { fish: 4, water: 4, grass: 4, do: 78.8 },
        { fish: 4, water: 5, grass: 0, do: 74.4 },
        { fish: 4, water: 5, grass: 1, do: 74.5 },
        { fish: 4, water: 5, grass: 2, do: 74.6 },
        { fish: 4, water: 5, grass: 3, do: 74.7 },
        { fish: 4, water: 5, grass: 4, do: 74.8 },
        { fish: 5, water: 1, grass: 0, do: 30.2 },
        { fish: 5, water: 1, grass: 1, do: 30.3 },
        { fish: 5, water: 1, grass: 2, do: 30.4 },
        { fish: 5, water: 1, grass: 3, do: 30.5 },
        { fish: 5, water: 1, grass: 4, do: 30.6 },
        { fish: 5, water: 2, grass: 0, do: 42.2 },
        { fish: 5, water: 2, grass: 1, do: 42.3 },
        { fish: 5, water: 2, grass: 2, do: 42.4 },
        { fish: 5, water: 2, grass: 3, do: 42.5 },
        { fish: 5, water: 2, grass: 4, do: 42.6 },
        { fish: 5, water: 3, grass: 0, do: 57.2 },
        { fish: 5, water: 3, grass: 1, do: 57.3 },
        { fish: 5, water: 3, grass: 2, do: 57.4 },
        { fish: 5, water: 3, grass: 3, do: 57.5 },
        { fish: 5, water: 3, grass: 4, do: 57.6 },
        { fish: 5, water: 4, grass: 0, do: 78.2 },
        { fish: 5, water: 4, grass: 1, do: 78.3 },
        { fish: 5, water: 4, grass: 2, do: 78.4 },
        { fish: 5, water: 4, grass: 3, do: 78.5 },
        { fish: 5, water: 4, grass: 4, do: 78.6 },
        { fish: 5, water: 5, grass: 0, do: 74.2 },
        { fish: 5, water: 5, grass: 1, do: 74.3 },
        { fish: 5, water: 5, grass: 2, do: 74.4 },
        { fish: 5, water: 5, grass: 3, do: 74.5 },
        { fish: 5, water: 5, grass: 4, do: 74.6 },
      ],
      fishImg: {
        1: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/64e6cc69-d67a-417d-b81b-04f08f13ead9.png",
        2: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/cd63efd6-fe59-4f99-b2c8-a3d3758bea5c.png",
        3: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/5d10f9a2-0cc7-49b7-941a-917342aeffd6.png",
        4: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/776e93db-1fba-49e1-9d52-2ee9cbb95faf.png",
        5: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/d70123b0-d36d-4517-961b-c807b2564272.png",
      },
      grassImg: {
        1: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/73193e6a-b2f3-4ce9-a331-4b20208cd984.png",
        2: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/8fab4485-d1c7-46a8-9218-1208a39d7ca3.png",
        3: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/084703b8-8908-4629-b57c-ada64db12019.png",
        4: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/ff44a2bc-f3ee-4599-bacf-7965c27f38de.png",
        5: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/67214545-76ec-4c90-867b-9a5f47057e35.png",
      },
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
      imgList: {
        "00":
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/5ce8a0e7-59d0-4d88-90f2-330fd3dd90e0.png",
        "01":
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/5cc94332-39ec-48b8-a43c-dcc2ccf166e2.png",
        "02":
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/0fd665aa-ce6c-45dc-9b66-f1895a4517ff.png",
        "03":
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/0add29fc-4229-4d57-b048-763c16e7b9ec.png",
        "04":
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/73260064-3f05-4e27-8e18-66fe3a62d342.png",
        10: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/fcd77f75-dbc5-4a9a-958e-d686015767f1.png",
        11: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/21c23e2d-0523-4851-9fd6-9ff8d08d8755.png",
        12: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/fdff9229-ade1-4e1f-8294-fa2db11d7c54.png",
        13: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/329ee909-2f25-45df-9be9-732cd417cb50.png",
        14: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/5a0e94c4-6d89-4df5-87b7-3c63e82f993a.png",
        20: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/1881ca9d-767f-4e63-ae4c-5a6c7edec9f7.png",
        21: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/3d537444-1b14-4cdf-af68-7c3e8216125a.png",
        22: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/dc32ef67-02b7-423c-9790-1bf761db304b.png",
        23: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/a5fa8038-22d6-4eed-89bb-53bb78470193.png",
        24: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/a45c4e6c-61c3-467a-8d12-efbf79f54de5.png",
      },
    };
  },
  name: "app",
  mounted() {},
  props:['processData'],
  methods: {
    recordProcessData(water){
      // let recordProcessData=JSON.parse(localStorage.getItem('processData'))
      
      this.processData.answer[3]=[water]
      // localStorage.setItem('processData',JSON.stringify(recordProcessData))
      this.$emit('recordProcessData',this.processData)
    },
    inputChange(e){
      // let recordProcessData=JSON.parse(localStorage.getItem('processData'))
      
      this.processData.answer[4]=[this.answer.input]
      // localStorage.setItem('processData',JSON.stringify(recordProcessData))
      this.$emit('recordProcessData',this.processData)
    },
    q33RadioChange(e) {
      if (e.target.value == 1 && this.steps.length == 8) {
        this.steps.push({
          index: 8,
          title: "问题4",
        });
      } else if (e.target.value == 2 && this.steps.length == 9) {
        this.steps.pop();
      }
    },
    updateQ1Table() {
      if (!this.answer.q1TableData) {
        this.answer.q1TableData = [
          {
            key: 0,
            fish: 0,
            water: 1,
            grass: 0,
            volume: 100,
            do: 30,
          },
        ];
      }
      this.answer.q1TableData.push({
        key: this.answer.q1TableData.length,
        fish: this.fish,
        water: this.water,
        grass: this.grass,
        volume: this.getVolumeStraight,
        do: this.getDoStraight,
      });
      this.$forceUpdate();
      // let recordProcessData=JSON.parse(localStorage.getItem('processData'))
      
      this.processData.answer[5]=[this.water]
      // localStorage.setItem('processData',JSON.stringify(recordProcessData))
      this.$emit('recordProcessData',this.processData)
    },
    updateQ32Table() {
      if (this.current == 6) {
        if (!this.answer.q32TableData) {
          this.answer.q32TableData = [];
        }
        this.answer.q32TableData.push({
          key: this.answer.q32TableData.length,
          fish: this.fish,
          water: this.water,
          grass: this.grass,
          volume: this.getVolume,
          do: this.getDo,
        });
        this.$forceUpdate();
      }
    },
    select1(e) {
      console.log(e);
    },
    next() {
      this.current++;
    },
    back() {
      this.current--;
    },
    expert() {
      if (this.maojinweizhi == undefined) {
        alert("请选择毛巾位置");
        return;
      }
      if (this.shuiweiweizhi == undefined) {
        alert("请选择水位位置");
        return;
      }
      let item = {};

      if (this.maojinweizhi == 0) {
        item.maojin = "无毛巾";
      } else if (this.maojinweizhi == 1) {
        item.maojin = "毛巾未进入水中";
      } else if (this.maojinweizhi == 2) {
        item.maojin = "毛巾进入水中";
      }
      if (this.shuiweiweizhi == 0) {
        item.shuiwei = "水位0";
      } else if (this.shuiweiweizhi == 1) {
        item.shuiwei = "水位1";
      } else if (this.shuiweiweizhi == 2) {
        item.shuiwei = "水位2";
      } else if (this.shuiweiweizhi == 3) {
        item.shuiwei = "水位3";
      } else if (this.shuiweiweizhi == 4) {
        item.shuiwei = "水位4";
      }
      item.temperature = this.tempData[
        this.maojinweizhi + "" + this.shuiweiweizhi
      ];
      this.list.push(item);
    },
  },
};
</script>

<style>
</style>
