<template>
  <div id="app" class="">
    <a-layout class="h-full">
      <a-layout-content class="bg-white">
        <a-steps v-model="current" type="navigation" :style="stepStyle">
          <a-step
            v-for="(item, index) in steps"
            :key="index"
            :status="
              index < current ? 'finish' : index > current ? 'wait' : 'process'
            "
            :title="item.title"
          />
        </a-steps>
      </a-layout-content>
      <step0 v-show="current==0"/>
      <step1 v-show="current==1" @recordProcessData="recordProcessData" :processData="processData"/>
      
      <!-- <a-layout-content v-if="current == 2" class="bg-white h-4/5 p-6">
        <div class="text-lg text-left mb-8">
          1.某位同学为探究鱼缸中水的溶氧量与哪些因素有关。向如图所示的长方体鱼缸中注水，并测量水中的溶氧量。
        </div>
        <div class="text-lg text-left mb-8">
          请你使用“实验模拟器”，拖动“水面高度“按钮，观察数据可知鱼缸中溶氧量最大的位置在<a-dropdown>
            <a class="ant-dropdown-link">
              {{ answer.q1a1 || "请选择" }} <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = 1;
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
                    $forceUpdate();
                  }
                "
              >
                <a>5</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <div class="text-lg text-left mb-8">
            由此可以看出水中的溶氧量与<a-input
              style="width: 10rem !important"
              placeholder=""
            />有关。
          </div>
        </div>
        <div class="flex">
          <img
            v-if="water == 1"
            class="w-1/2"
            src="./assets/straight1.png"
            alt=""
          />
          <img
            v-if="water == 2"
            class="w-1/2"
            src="./assets/straight2.png"
            alt=""
          />
          <img
            v-if="water == 3"
            class="w-1/2"
            src="./assets/straight3.png"
            alt=""
          />
          <img
            v-if="water == 4"
            class="w-1/2"
            src="./assets/straight4.png"
            alt=""
          />
          <img
            v-if="water == 5"
            class="w-1/2"
            src="./assets/straight5.png"
            alt=""
          />
          <img
            v-if="grass > 0"
            class="absolute"
            style="width: 616px"
            :src="grassImg[grass + '']"
            alt=""
          />
          <img
            v-if="fish > 0"
            class="absolute"
            style="width: 616px"
            :src="fishImg[fish + '']"
            alt=""
          />
          <a-form-model
            class="w-1/2"
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
                :tooltip-visible="true"
              />
            </a-form-model-item>
            <div class="flex ml-6 mt-40">
              <a-statistic
                title="水的体积（mL）"
                :value="getVolumeStraight"
                style="margin-right: 20px"
              />
              <a-statistic
                title="溶氧量（mg/L）"
                :value="getDoStraight"
                style="margin-right: 20px"
              />
               
            </div>
          </a-form-model>
        </div>
      </a-layout-content> -->
      <step2 v-show="current==2" @recordProcessData="recordProcessData" :processData="processData" ref="step2"/>
      <!-- <a-layout-content
        v-if="current == 2"
        class="bg-white h-4/5 p-6 flex w-full"
      >
        <div class="text-lg leading-relaxed text-left mb-8 w-1/6">
          1.某位同学为探究鱼缸中水的溶氧量与哪些因素有关。向如图所示的长方体鱼缸中注水，并测量水中的溶氧量。<br /><br />

          请你使用“实验模拟器”，拖动“水面高度“按钮，观察数据可知鱼缸中溶氧量最大的位置在<a-input
            style="width: 10rem !important"
            placeholder=""
          />

          <br />由此可以看出水中的溶氧量与<a-input
            style="width: 10rem !important"
            placeholder=""
          />有关。
        </div>
        <div class="w-5/6">
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
                :tooltip-visible="true"
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
              <img
                v-if="water == 1"
                src="./assets/straight1.png"
                alt=""
              />
              <img
                v-if="water == 2"
                src="./assets/straight2.png"
                alt=""
              />
              <img
                v-if="water == 3"
                src="./assets/straight3.png"
                alt=""
              />
              <img
                v-if="water == 4"
                src="./assets/straight4.png"
                alt=""
              />
              <img
                v-if="water == 5"
                src="./assets/straight5.png"
                alt=""
              />
            </div>
            <div class="w-1/2">
              <a-table
                :scroll="{ y: 280 }"
                :pagination="false"
                :columns="q1Columns"
                :data-source="answer.q1TableData || []"
              >
              </a-table>
            </div>
          </div>
        </div>
      </a-layout-content> -->
      
      <step3 v-show="current==3" @recordProcessData="recordProcessData" :processData="processData"/>
      <step4 v-show="current==4" @recordProcessData="recordProcessData" @updateTableData="handleInfo" :processData="processData"/>
      <step5 @recordProcessData="recordProcessData" ref="step7" v-show="current==5" @nextStep="nextStep" :tableData="answer.s7TableData" :processData="processData"/>
      <step6 @recordProcessData="recordProcessData" v-show="current==6" :processData="processData"/>
      
      
      
      
      
      <a-layout-content class="justify-between flex bg-white">
        <a-button @click="back" :disabled="current == 0" type="primary">
          <a-icon type="left" />上一步
        </a-button>
        <a-button
          @click="next"
          :disabled="current == steps.length - 1"
          type="primary"
          >下一步 <a-icon type="right" />
        </a-button>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Step0Vue from './components/Step0.vue';
const columns = [
  {
    title: "鱼的数量",
    dataIndex: "fish",
    key: "fish",
  },
  {
    title: "水面高度",
    dataIndex: "water",
    key: "water",
  },
  {
    title: "水草数量",
    dataIndex: "grass",
    key: "grass",
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
const q1Columns = [
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
const q4Columns = [
  {
    title: "鱼的数量",
    dataIndex: "fish",
    key: "fish",
  },
  {
    title: "水面高度",
    dataIndex: "water",
    key: "water",
  },
  {
    title: "水草数量",
    dataIndex: "grass",
    key: "grass",
  },
  {
    title: "溶氧量",
    dataIndex: "do",
    key: "do",
  },
];

import step0 from './components/Step0'
import step1 from './components/Step1'
import step2 from './components/Step2'
import step3 from './components/Step3'
import step4 from './components/Step4'
import step5 from './components/Step5'
import step6 from './components/Step6'
export default {
  components: {step0, step1, step2, step3, step4, step5, step6, },
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
      processData: {
        page: 1,
        answer: [
          [1],
          [1],
          [1],
          [-1],
          "text",
          [1],
          [-1],
          [1],
          "text",
          [1],
          "text",
          [1],
          [1],
          [1],
          [-1],
          "text",
          [-1],
          "text"
        ],
      },

      columns,
      q1Columns,
      q4Columns,
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
          title: "前言",
        },
        {
          index: 2,
          title: "问题1",
        },
        {
          index: 3,
          title: "问题2.1",
        },
        {
          index: 4,
          title: "问题2.2",
        },
        {
          index: 5,
          title: "问题2.3",
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
  mounted() {
    localStorage.setItem('processData',JSON.stringify(this.processData))
  },
  methods: {
    q6Change(){
      this.processData.answer[16]=this.answer.q6Text
      this.recordProcessData()
    },
    recordProcessData(processData){
      // this.processData=JSON.parse(localStorage.getItem('processData'))
      this.processData=processData
      this.processData.page=this.current+1
      this.processData=JSON.parse(JSON.stringify(this.processData))
      console.log(this.processData);
      parent.postMessage(this.processData, "*")
    },
    handleInfo(e){
      this.answer.s7TableData=e
      
      this.$refs.step7.$forceUpdate()
    },
    nextStep(e) {
      console.log(e.target.value)
      if ((e.target.value==2 || e.target.value==3) && this.steps.length==6) {
        this.steps.push({
          index: 6,
          title: "问题2.4",
        });
      } else if(this.steps.length==7 && e.target.value==1) {
        this.steps.pop();
      }
    },
    updateQ1Table() {
      if (this.current == 2) {
        if (!this.answer.q1TableData) {
          this.answer.q1TableData = [{
          key: 0,
          fish: 0,
          water: 1,
          grass: 0,
          volume: this.getVolumeStraight,
          do: this.getDoStraight,
        }];
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
      }
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
      if(this.current===3 && this.$refs.step2.answer.q1a1){
         this.$refs.step2.a_dropdown_disabled= true;
      }
      if(this.current===3 && this.$refs.step2.answer.textarea){
         this.$refs.step2.a_textarea_disabled= true;
         console.log(this.$refs.step2.a_textarea_disabled )
         
      }
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 800px;
  width: 1280px;
}

.anticon {
  vertical-align: 0.125em !important;
}
</style>
