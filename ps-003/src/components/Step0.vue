<template>
  <a-layout-content class="bg-white h-4/5 p-6 flex">
        <video class="float-right" width="640" height="480" loop muted autoplay>
          <source
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7d0ddff0-472c-48e1-ad19-ad0d117424d9/9d3c245e-d8ce-467c-adc0-b4096e066506.mp4"
            type="video/mp4"
          />
        </video>
        <div class="text-xl text-left align-middle mt-32 ml-4">
          在一些家庭中，会使用生态鱼缸来饲养观赏鱼。有人在饲养某类观赏鱼时，
          根据经验知道，当鱼缸中的溶氧量过低时，该类观赏鱼便会死亡。
          有人认为，鱼缸中水位，鱼的数量，以及水草的数量等因素会影响观赏鱼
          的存活情况。
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
          return 5;
        case 2:
          return 10;
        case 3:
          return 15;
        case 4:
          return 20;
        case 5:
          return 25;
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
          return 5;
        case 2:
          return 10;
        case 3:
          return 15;
        case 4:
          return 20;
        case 5:
          return 25;
      }
    },
    getDoStraight() {
      return 9;
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
      columns,
      answer: {},
      q4TableData: [
        { fish: 3, water: 4, grass: 0, do: 6.6 },
        { fish: 3, water: 4, grass: 1, do: 7.1 },
        { fish: 3, water: 4, grass: 2, do: 7.6 },
        { fish: 3, water: 4, grass: 3, do: 8.1 },
        { fish: 3, water: 4, grass: 4, do: 8.6 },
      ],
      doData: [
        { fish: 1, water: 1, grass: 0, do: 7.0 },
        { fish: 1, water: 1, grass: 1, do: 7.5 },
        { fish: 1, water: 1, grass: 2, do: 8.0 },
        { fish: 1, water: 1, grass: 3, do: 8.5 },
        { fish: 1, water: 1, grass: 4, do: 9.0 },
        { fish: 1, water: 2, grass: 0, do: 7.0 },
        { fish: 1, water: 2, grass: 1, do: 7.5 },
        { fish: 1, water: 2, grass: 2, do: 8.0 },
        { fish: 1, water: 2, grass: 3, do: 8.5 },
        { fish: 1, water: 2, grass: 4, do: 9.0 },
        { fish: 1, water: 3, grass: 0, do: 7.0 },
        { fish: 1, water: 3, grass: 1, do: 7.5 },
        { fish: 1, water: 3, grass: 2, do: 8.0 },
        { fish: 1, water: 3, grass: 3, do: 8.5 },
        { fish: 1, water: 3, grass: 4, do: 9.0 },
        { fish: 1, water: 4, grass: 0, do: 7.0 },
        { fish: 1, water: 4, grass: 1, do: 7.5 },
        { fish: 1, water: 4, grass: 2, do: 8.0 },
        { fish: 1, water: 4, grass: 3, do: 8.5 },
        { fish: 1, water: 4, grass: 4, do: 9.0 },
        { fish: 1, water: 5, grass: 0, do: 7.0 },
        { fish: 1, water: 5, grass: 1, do: 7.5 },
        { fish: 1, water: 5, grass: 2, do: 8.0 },
        { fish: 1, water: 5, grass: 3, do: 8.5 },
        { fish: 1, water: 5, grass: 4, do: 9.0 },
        { fish: 2, water: 1, grass: 0, do: 6.8 },
        { fish: 2, water: 1, grass: 1, do: 7.3 },
        { fish: 2, water: 1, grass: 2, do: 7.8 },
        { fish: 2, water: 1, grass: 3, do: 8.3 },
        { fish: 2, water: 1, grass: 4, do: 8.8 },
        { fish: 2, water: 2, grass: 0, do: 6.8 },
        { fish: 2, water: 2, grass: 1, do: 7.3 },
        { fish: 2, water: 2, grass: 2, do: 7.8 },
        { fish: 2, water: 2, grass: 3, do: 8.3 },
        { fish: 2, water: 2, grass: 4, do: 8.8 },
        { fish: 2, water: 3, grass: 0, do: 6.8 },
        { fish: 2, water: 3, grass: 1, do: 7.3 },
        { fish: 2, water: 3, grass: 2, do: 7.8 },
        { fish: 2, water: 3, grass: 3, do: 8.3 },
        { fish: 2, water: 3, grass: 4, do: 8.8 },
        { fish: 2, water: 4, grass: 0, do: 6.8 },
        { fish: 2, water: 4, grass: 1, do: 7.3 },
        { fish: 2, water: 4, grass: 2, do: 7.8 },
        { fish: 2, water: 4, grass: 3, do: 8.3 },
        { fish: 2, water: 4, grass: 4, do: 8.8 },
        { fish: 2, water: 5, grass: 0, do: 6.8 },
        { fish: 2, water: 5, grass: 1, do: 7.3 },
        { fish: 2, water: 5, grass: 2, do: 7.8 },
        { fish: 2, water: 5, grass: 3, do: 8.3 },
        { fish: 2, water: 5, grass: 4, do: 8.8 },
        { fish: 3, water: 1, grass: 0, do: 6.6 },
        { fish: 3, water: 1, grass: 1, do: 7.1 },
        { fish: 3, water: 1, grass: 2, do: 7.6 },
        { fish: 3, water: 1, grass: 3, do: 8.1 },
        { fish: 3, water: 1, grass: 4, do: 8.6 },
        { fish: 3, water: 2, grass: 0, do: 6.6 },
        { fish: 3, water: 2, grass: 1, do: 7.1 },
        { fish: 3, water: 2, grass: 2, do: 7.6 },
        { fish: 3, water: 2, grass: 3, do: 8.1 },
        { fish: 3, water: 2, grass: 4, do: 8.6 },
        { fish: 3, water: 3, grass: 0, do: 6.6 },
        { fish: 3, water: 3, grass: 1, do: 7.1 },
        { fish: 3, water: 3, grass: 2, do: 7.6 },
        { fish: 3, water: 3, grass: 3, do: 8.1 },
        { fish: 3, water: 3, grass: 4, do: 8.6 },
        { fish: 3, water: 4, grass: 0, do: 6.6 },
        { fish: 3, water: 4, grass: 1, do: 7.1 },
        { fish: 3, water: 4, grass: 2, do: 7.6 },
        { fish: 3, water: 4, grass: 3, do: 8.1 },
        { fish: 3, water: 4, grass: 4, do: 8.6 },
        { fish: 3, water: 5, grass: 0, do: 6.6 },
        { fish: 3, water: 5, grass: 1, do: 7.1 },
        { fish: 3, water: 5, grass: 2, do: 7.6 },
        { fish: 3, water: 5, grass: 3, do: 8.1 },
        { fish: 3, water: 5, grass: 4, do: 8.6 },
        { fish: 4, water: 1, grass: 0, do: 6.4 },
        { fish: 4, water: 1, grass: 1, do: 6.9 },
        { fish: 4, water: 1, grass: 2, do: 7.4 },
        { fish: 4, water: 1, grass: 3, do: 7.9 },
        { fish: 4, water: 1, grass: 4, do: 8.4 },
        { fish: 4, water: 2, grass: 0, do: 6.4 },
        { fish: 4, water: 2, grass: 1, do: 6.9 },
        { fish: 4, water: 2, grass: 2, do: 7.4 },
        { fish: 4, water: 2, grass: 3, do: 7.9 },
        { fish: 4, water: 2, grass: 4, do: 8.4 },
        { fish: 4, water: 3, grass: 0, do: 6.4 },
        { fish: 4, water: 3, grass: 1, do: 6.9 },
        { fish: 4, water: 3, grass: 2, do: 7.4 },
        { fish: 4, water: 3, grass: 3, do: 7.9 },
        { fish: 4, water: 3, grass: 4, do: 8.4 },
        { fish: 4, water: 4, grass: 0, do: 6.4 },
        { fish: 4, water: 4, grass: 1, do: 6.9 },
        { fish: 4, water: 4, grass: 2, do: 7.4 },
        { fish: 4, water: 4, grass: 3, do: 7.9 },
        { fish: 4, water: 4, grass: 4, do: 8.4 },
        { fish: 4, water: 5, grass: 0, do: 6.4 },
        { fish: 4, water: 5, grass: 1, do: 6.9 },
        { fish: 4, water: 5, grass: 2, do: 7.4 },
        { fish: 4, water: 5, grass: 3, do: 7.9 },
        { fish: 4, water: 5, grass: 4, do: 8.4 },
        { fish: 5, water: 1, grass: 0, do: 6.2 },
        { fish: 5, water: 1, grass: 1, do: 6.7 },
        { fish: 5, water: 1, grass: 2, do: 7.2 },
        { fish: 5, water: 1, grass: 3, do: 7.7 },
        { fish: 5, water: 1, grass: 4, do: 8.2 },
        { fish: 5, water: 2, grass: 0, do: 6.2 },
        { fish: 5, water: 2, grass: 1, do: 6.7 },
        { fish: 5, water: 2, grass: 2, do: 7.2 },
        { fish: 5, water: 2, grass: 3, do: 7.7 },
        { fish: 5, water: 2, grass: 4, do: 8.2 },
        { fish: 5, water: 3, grass: 0, do: 6.2 },
        { fish: 5, water: 3, grass: 1, do: 6.7 },
        { fish: 5, water: 3, grass: 2, do: 7.2 },
        { fish: 5, water: 3, grass: 3, do: 7.7 },
        { fish: 5, water: 3, grass: 4, do: 8.2 },
        { fish: 5, water: 4, grass: 0, do: 6.2 },
        { fish: 5, water: 4, grass: 1, do: 6.7 },
        { fish: 5, water: 4, grass: 2, do: 7.2 },
        { fish: 5, water: 4, grass: 3, do: 7.7 },
        { fish: 5, water: 4, grass: 4, do: 8.2 },
        { fish: 5, water: 5, grass: 0, do: 6.2 },
        { fish: 5, water: 5, grass: 1, do: 6.7 },
        { fish: 5, water: 5, grass: 2, do: 7.2 },
        { fish: 5, water: 5, grass: 3, do: 7.7 },
        { fish: 5, water: 5, grass: 4, do: 8.2 },
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
  methods: {
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
            volume: this.getVolumeStraight,
            do: this.getDoStraight,
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
