<template>
  <div id="app" class="">
    <a-layout class="h-full">
      <a-layout-content class="bg-white">
        <a-steps
          @change="stepChange"
          v-model="current"
          type="navigation"
          :style="stepStyle"
        >
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
      <a-layout-content v-if="current == 0" class="bg-white h-4/5 p-6 flex">
        <div class="text-xl text-left align-middle ml-4 mr-4">
          题目1：甲烷吸热<br /><br />
          根据期刊《经济学人》（The
          Economist）最近的报道，过去的十年间，大气中的甲烷（CH<span
            class="text-xs"
            >4</span
          >）含量骤升，已达工业革命前的2.5倍。甲烷具有强大的吸热能力，虽然大气中甲烷的排放量相较于二氧化碳（CO<span
            class="text-xs"
            >2</span
          >）较少，但甲烷造成温室效应的威力，却是二氧化碳的25倍。 <br /><br />
          科学家们对于大气中甲烷的增加提出各自的研究成果，其中，加州大学伯克利分校的Alexander
          Turner研究团队认为大气中氢氧自由基（·OH）的减少，是大气中甲烷骤升最有可能的解释。因为，氢氧自由基可与甲烷反应产生水及二氧化碳，进而消解大气中的甲烷。
          <br /><br />
          小明想探讨“氢氧自由基对甲烷的影响”，根据相关文献设计了以下实验。<br /><br />
          本题来自台湾师范大学张俊彦教授团队
        </div>
        <img src="./assets/s1.png" alt="" />
      </a-layout-content>
      <a-layout-content v-if="current == 1" class="bg-white h-4/5 p-6">
        <expert></expert>
      </a-layout-content>
      <a-layout-content v-if="current == 2" class="bg-white h-4/5 p-4">
        <div class="text-lg text-left mb-8">
          小明将表1中的数据标在了图1中，但却忘记写图例，你能帮小明给3条曲线添加图例吗？
        </div>
        <div class="flex">
          <div>
            <a-table
              :pagination="false"
              :columns="columns"
              :data-source="list2"
            >
            </a-table>
            <div class="text-center">表1</div>
          </div>
          <div class="w-2/3">
            <!-- <img
              class=""
              src="https://question1.s3.cn-northwest-1.amazonaws.com.cn/echarts+(10).png"
              alt=""
            /> -->
            <v-chart class="chart w-full h-full" :option="orgOptions" />
          </div>

          <div class="w-1/12">
            <div class="flex">
              <div style="color: #fac858" class="mr-1">——</div>
              <a-dropdown>
                <a class="ant-dropdown-link text-lg" style="color: #fac858">
                  {{ answer.q1Yellow || "请选择" }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Yellow = 'A瓶';
                        $forceUpdate();
                        processData.answer[0]=[1]
                        recordProcessData();
                      }
                    "
                  >
                    <a>A瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Yellow = 'B瓶';
                        $forceUpdate();
                        processData.answer[0]=[2]
                        recordProcessData();
                      }
                    "
                  >
                    <a>B瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Yellow = 'C瓶';
                        $forceUpdate();
                        processData.answer[0]=[3]
                        recordProcessData();
                      }
                    "
                  >
                    <a>C瓶</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
            <div class="flex">
              <div style="color: #91cc75" class="mr-1">——</div>
              <a-dropdown>
                <a class="ant-dropdown-link text-lg" style="color: #91cc75">
                  {{ answer.q1Green || "请选择" }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Green = 'A瓶';
                        $forceUpdate();
                        processData.answer[1]=[1]
                        recordProcessData();
                      }
                    "
                  >
                    <a>A瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Green = 'B瓶';
                        $forceUpdate();
                        processData.answer[1]=[2]
                        recordProcessData();
                      }
                    "
                  >
                    <a>B瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Green = 'C瓶';
                        $forceUpdate();
                        processData.answer[1]=[3]
                        recordProcessData();
                      }
                    "
                  >
                    <a>C瓶</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
            <div class="flex">
              <div style="color: #5470c6" class="mr-1">——</div>
              <a-dropdown>
                <a class="ant-dropdown-link text-lg" style="color: #5470c6">
                  {{ answer.q1Blue || "请选择" }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Blue = 'A瓶';
                        $forceUpdate();
                        processData.answer[2]=[1]
                        recordProcessData();
                      }
                    "
                  >
                    <a>A瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Blue = 'B瓶';
                        $forceUpdate();
                        processData.answer[2]=[2]
                        recordProcessData();
                      }
                    "
                  >
                    <a>B瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q1Blue = 'C瓶';
                        $forceUpdate();
                        processData.answer[2]=[3]
                        recordProcessData();
                      }
                    "
                  >
                    <a>C瓶</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-content v-if="current == 3" class="bg-white h-4/5 p-6">
        <div class="text-lg text-left mb-8">
          在上述实验1中，矿泉水瓶A的作用是什么？
        </div>
        <div class="float-left">
          <a-radio-group @change="q2Change" name="radioGroup" :default-value="0">
            <a-radio :value="1"> 对照组 </a-radio>
            <a-radio :value="2"> 实验组 </a-radio>
          </a-radio-group>
        </div>

        <!-- <a-textarea class="mt-4" placeholder="" :rows="4" /> -->
      </a-layout-content>
      <a-layout-content v-if="current == 4" class="bg-white h-4/5 p-6">
        <expert21></expert21>
      </a-layout-content>
      <a-layout-content v-if="current == 5" class="bg-white h-4/5 p-4">
        <div class="text-lg text-left mb-8">
          粗心的小明也忘记给实验2的折线图（图2）注上图例。请你帮小明给图2也注上图例。
        </div>
        <div class="flex">
          <div>
            <a-table
              :pagination="false"
              :columns="columns"
              :data-source="list3"
            >
            </a-table>
            <div class="text-center">表2</div>
          </div>
          <div class="w-2/3">
            <v-chart class="chart w-full h-full" :option="orgOptions2" />
          </div>

          <div class="w-1/12">
            <div class="flex">
              <div style="color: #fac858" class="mr-1">——</div>
              <a-dropdown>
                <a class="ant-dropdown-link text-lg" style="color: #fac858">
                  {{ answer.q3Yellow || "请选择" }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Yellow = 'A瓶';
                        $forceUpdate();
                        processData.answer[4]=[1]
                        recordProcessData();
                      }
                    "
                  >
                    <a>A瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Yellow = 'B瓶';
                        $forceUpdate();
                        processData.answer[4]=[2]
                        recordProcessData();
                      }
                    "
                  >
                    <a>B瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Yellow = 'C瓶';
                        $forceUpdate();
                        processData.answer[4]=[3]
                        recordProcessData();
                      }
                    "
                  >
                    <a>C瓶</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
            <div class="flex">
              <div style="color: #91cc75" class="mr-1">——</div>
              <a-dropdown>
                <a class="ant-dropdown-link text-lg" style="color: #91cc75">
                  {{ answer.q3Green || "请选择" }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Green = 'A瓶';
                        $forceUpdate();
                        processData.answer[5]=[1]
                        recordProcessData();
                      }
                    "
                  >
                    <a>A瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Green = 'B瓶';
                        $forceUpdate();
                        processData.answer[5]=[2]
                        recordProcessData();
                      }
                    "
                  >
                    <a>B瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Green = 'C瓶';
                        $forceUpdate();
                        processData.answer[5]=[3]
                        recordProcessData();
                      }
                    "
                  >
                    <a>C瓶</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
            <div class="flex">
              <div style="color: #5470c6" class="mr-1">——</div>
              <a-dropdown>
                <a class="ant-dropdown-link text-lg" style="color: #5470c6">
                  {{ answer.q3Blue || "请选择" }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Blue = 'A瓶';
                        $forceUpdate();
                        processData.answer[6]=[1]
                        recordProcessData();
                      }
                    "
                  >
                    <a>A瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Blue = 'B瓶';
                        $forceUpdate();
                        processData.answer[6]=[2]
                        recordProcessData();
                      }
                    "
                  >
                    <a>B瓶</a>
                  </a-menu-item>
                  <a-menu-item
                    @click="
                      () => {
                        answer.q3Blue = 'C瓶';
                        $forceUpdate();
                        processData.answer[6]=[3]
                        recordProcessData();
                      }
                    "
                  >
                    <a>C瓶</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-content
        v-if="current == 6"
        class="bg-white h-4/5 pr-6 pl-6 flex"
      >
        <div class="w-1/2 h-full">
          <v-chart class="chart w-full h-1/2" :option="smallOptions" />
          <v-chart class="chart w-full h-1/2" :option="smallOptions2" />
        </div>
        <div class="pt-6">
          <div class="text-lg text-left mb-8">
            请比较图1和图2中A、B、C曲线各有什么变化？
          </div>
          <a-checkbox-group @change="onChange" class="w-96">
            <a-checkbox value="1"> A曲线几乎不变 </a-checkbox><br />
            <a-checkbox value="2"> B曲线有明显变化 </a-checkbox><br />
            <a-checkbox value="3"> C曲线几乎不变 </a-checkbox><br />
            <a-checkbox value="4"> C曲线变得更贴近B曲线 </a-checkbox><br />
            <a-checkbox value="5"> C曲线和B曲线叠合 </a-checkbox>
            <!-- <a-row class="justify-start">
            </a-row>
            <a-row class="justify-start">
            </a-row>
            <a-row class="justify-start">
            </a-row>
            <a-row class="justify-start">
            </a-row>
            <a-row class="justify-start">
            </a-row> -->
          </a-checkbox-group>
        </div>
      </a-layout-content>
      <a-layout-content
        v-if="current == 7"
        class="bg-white w-full h-4/5 pr-6 pl-6 flex"
      >
        <div class="w-1/2 h-full">
          <v-chart class="chart w-full h-1/2" :option="smallOptions" />
          <v-chart class="chart w-full h-1/2" :option="smallOptions2" />
        </div>
        <div class="w-1/2 h-full pt-6">
          <div class="text-lg text-left mb-8 mt-4">
            倘若小明刚刚记录的数据正确，图2中，曲线A、B几乎没有改变，但曲线C变得更加贴近曲线B，解释其原因。
          </div>
          <a-textarea v-model="answer.q5" @change="q5Change" class="mt-4" placeholder="" :rows="4" />
          <div class="text-lg text-left mb-8 mt-4">
            对于实验目的而言，仅需进行实验2即可？还是两组实验都要做？并请简要说明原因。
          </div>
          <a-textarea v-model="answer.q6" @change="q6Change" class="mt-4" placeholder="" :rows="4" />
        </div>
      </a-layout-content>
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
const columns = [
  {
    title: "分钟",
    dataIndex: "minute",
    key: "minute",
  },
  {
    title: "A瓶温度",
    dataIndex: "temperatureA",
    key: "temperatureA",
  },
  {
    title: "B瓶温度",
    dataIndex: "temperatureB",
    key: "temperatureB",
  },
  {
    title: "C瓶温度",
    dataIndex: "temperatureC",
    key: "temperatureC",
  },
];
import expert from "./components/Expert";
import expert2 from "./components/Expert2";
import expert21 from "./components/Expert21";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
]);
export default {
  provide: {
    [THEME_KEY]: "light",
  },
  components: { VChart, expert, expert2, expert21 },
  computed: {
    getImg() {
      return this.imgList[this.maojinweizhi + "" + this.shuiweiweizhi];
    },
    smallOptions() {
      let o = JSON.parse(JSON.stringify(this.orgOptions));
      o.xAxis.nameTextStyle.padding = [13, -500, 0, 0];
      o.title.itemGap = 8;
      o.legend = { show: true };
      return o;
    },
    smallOptions2() {
      let o = JSON.parse(JSON.stringify(this.orgOptions2));
      o.xAxis.nameTextStyle.padding = [13, -500, 0, 0];
      o.title.itemGap = 8;
      return o;
    },
  },
  data() {
    return {
      processData: {
        page: 1,
        answer: [[-1], [-1], [-1], [1], [-1], [-1], [-1], [], "null", "null"],
      },
      columns,
      list2: [
        {
          key: 0,
          minute: 0,
          temperatureA: "20.0",
          temperatureB: "20.0",
          temperatureC: "20.0",
        },
        {
          key: 1,
          minute: 25,
          temperatureA: "25.5",
          temperatureB: "26.5",
          temperatureC: "29.0",
        },
        {
          key: 2,
          minute: 50,
          temperatureA: "28.0",
          temperatureB: "29.0",
          temperatureC: "30.5",
        },
        {
          key: 3,
          minute: 75,
          temperatureA: "29.0",
          temperatureB: "29.7",
          temperatureC: "31.0",
        },
        {
          key: 4,
          minute: 100,
          temperatureA: "29.2",
          temperatureB: "30.0",
          temperatureC: "31.2",
        },
        {
          key: 5,
          minute: 125,
          temperatureA: "29.4",
          temperatureB: "30.2",
          temperatureC: "31.3",
        },
        {
          key: 6,
          minute: 150,
          temperatureA: "29.5",
          temperatureB: "30.4",
          temperatureC: "31.4",
        },
        {
          key: 7,
          minute: 175,
          temperatureA: "29.6",
          temperatureB: "30.5",
          temperatureC: "31.5",
        },
        {
          key: 8,
          minute: 200,
          temperatureA: "29.6",
          temperatureB: "30.5",
          temperatureC: "31.5",
        },
      ],
      list3: [
        {
          key: 0,
          minute: 0,
          temperatureA: "20.0",
          temperatureB: "20.0",
          temperatureC: "20.0",
        },
        {
          key: 1,
          minute: 25,
          temperatureA: "25.6",
          temperatureB: "26.6",
          temperatureC: "27.4",
        },
        {
          key: 2,
          minute: 50,
          temperatureA: "28.1",
          temperatureB: "29.0",
          temperatureC: "29.6",
        },
        {
          key: 3,
          minute: 75,
          temperatureA: "29.0",
          temperatureB: "29.7",
          temperatureC: "30.2",
        },
        {
          key: 4,
          minute: 100,
          temperatureA: "29.3",
          temperatureB: "30.0",
          temperatureC: "30.4",
        },
        {
          key: 5,
          minute: 125,
          temperatureA: "29.4",
          temperatureB: "30.2",
          temperatureC: "30.7",
        },
        {
          key: 6,
          minute: 150,
          temperatureA: "29.6",
          temperatureB: "30.5",
          temperatureC: "30.8",
        },
        {
          key: 7,
          minute: 175,
          temperatureA: "29.6",
          temperatureB: "30.5",
          temperatureC: "30.9",
        },
        {
          key: 8,
          minute: 200,
          temperatureA: "29.6",
          temperatureB: "30.5",
          temperatureC: "30.9",
        },
      ],
      answer: {},
      steps: [
        {
          index: 0,
          title: "前言",
        },
        {
          index: 1,
          title: "实验1",
        },
        {
          index: 2,
          title: "问题1",
        },
        {
          index: 3,
          title: "问题2",
        },
        {
          index: 4,
          title: "实验2",
        },
        {
          index: 5,
          title: "问题3",
        },
        {
          index: 6,
          title: "问题4",
        },
        {
          index: 7,
          title: "问题5&6",
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
      orgOptions: {},
      orgOptions2: {},
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
    this.orgOptions = {
      title: {
        subtext: "图1",
        x: "center", //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: "bottom", //
        itemGap: 0,
        subtextStyle: {
          //副标题文本样式{"color": "#aaa"}
          fontFamily: "Arial, Verdana, sans...",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: "normal",
        },
      },
      animationDuration: 100,
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {},
      },
      xAxis: {
        axisLabel: {
          inside: false,
          textStyle: {
            fontSize: "14",
            itemSize: "",
          },
        },
        type: "category",
        boundaryGap: false,
        data: ["0", "25", "50", "75", "100", "125", "150", "175", "200"],
        name: "时间（分钟）",
        nameLocation: "middle",
        nameTextStyle: {
          padding: [10, -730, 0, 0], // 四个数字分别为上右下左与原位置距离
          fontSize: 14,
          fontWeight: 700,
        },
      },
      yAxis: {
        axisLabel: {
          inside: false,
          textStyle: {
            fontSize: "14",
            itemSize: "",
          },
        },
        type: "value",
        min: 20,
        name: "温度（℃）",
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 700,
        },
      },
      color: ["#5470c6", "#91cc75", "#fac858"],
      series: [
        {
          name: "A",
          type: "line",
          data: [20.0, 25.5, 28.0, 29.0, 29.2, 29.4, 29.5, 29.6, 29.6],
        },
        {
          name: "B",
          type: "line",
          data: [20.0, 26.5, 29.0, 29.7, 30.0, 30.2, 30.4, 30.5, 30.5],
        },
        {
          name: "C",
          type: "line",
          data: [20.0, 29.0, 30.5, 31.0, 31.2, 31.3, 31.4, 31.5, 31.5],
        },
      ],
      grid: {
        y2: 50,
      },
    };
    this.orgOptions2 = {
      title: {
        subtext: "图2",
        x: "center", //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: "bottom", //
        itemGap: 0,
        subtextStyle: {
          //副标题文本样式{"color": "#aaa"}
          fontFamily: "Arial, Verdana, sans...",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: "normal",
        },
      },
      animationDuration: 100,
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {},
      },
      xAxis: {
        axisLabel: {
          inside: false,
          textStyle: {
            fontSize: "14",
            itemSize: "",
          },
        },
        type: "category",
        boundaryGap: false,
        data: ["0", "25", "50", "75", "100", "125", "150", "175", "200"],
        name: "时间（分钟）",
        nameLocation: "middle",
        nameTextStyle: {
          padding: [10, -730, 0, 0], // 四个数字分别为上右下左与原位置距离
          fontSize: 14,
          fontWeight: 700,
        },
      },
      yAxis: {
        axisLabel: {
          inside: false,
          textStyle: {
            fontSize: "14",
            itemSize: "",
          },
        },
        type: "value",
        min: 20,
        name: "温度（℃）",
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 700,
        },
      },
      color: ["#5470c6", "#91cc75", "#fac858"],
      series: [
        {
          name: "A",
          type: "line",
          data: [20.0, 25.5, 28.0, 29.0, 29.2, 29.4, 29.5, 29.6, 29.6],
        },
        {
          name: "B",
          type: "line",
          data: [20.0, 26.6, 29.0, 29.7, 30.0, 30.2, 30.5, 30.5, 30.5],
        },
        {
          name: "C",
          type: "line",
          data: [20.0, 27.4, 29.6, 30.2, 30.4, 30.7, 30.8, 30.9, 30.9],
        },
      ],
      grid: {
        y2: 50,
      },
    };
  },
  methods: {
    recordProcessData(){
      this.processData.page=this.current+1
      // this.processData.answer[0]=[this.answer.q1Yellow||-1]
      // this.processData.answer[1]=[this.answer.q1Green||-1]
      // this.processData.answer[2]=[this.answer.q1Blue||-1]
      // this.processData.answer[3]=[this.answer.q2]
      // this.processData.answer[4]=[this.answer.q3Yellow||-1]
      // this.processData.answer[5]=[this.answer.q3Green||-1]
      // this.processData.answer[6]=[this.answer.q3Blue||-1]
      this.processData.answer[7]=this.answer.q4||[]
      this.processData.answer[8]=this.answer.q5||"null"
      this.processData.answer[9]=this.answer.q6||"null"
      this.processData=JSON.parse(JSON.stringify(this.processData))
      // console.log({"frame":this.processData});
      parent.postMessage(this.processData, "*")
    },
    onChange(e) {
      for (let index = 0; index < e.length; index++) {
        e[index]=parseInt(e[index]);
        
      }
      this.answer.q4=e.sort()
      this.recordProcessData()
    },
    next() {
      this.beforeLeave();
      this.current++;
      // this.mLog();
      // parent.postMessage({ code: this.current }, "*");
    },
    back() {
      this.beforeLeave();
      this.current--;
      // this.mLog();
    },
    beforeLeave() {
      this.answer.lastStep = this.current;
    },
    mLog() {
      if (this.current == 2) {
        this.answer.q1StartTime = Date.now();
      }

      if (this.answer.lastStep == 2) {
        // parent.postMessage(
        //   {
        //     code: {
        //       durationQ1: (
        //         (Date.now() - this.answer.q1StartTime) /
        //         1000
        //       ).toFixed(1),
        //     },
        //   },
        //   "*"
        // );
        // alert('问题1的作答时长（秒）'+((Date.now()-this.answer.q1StartTime)/1000).toFixed(1))
      }
    },
    stepChange(e) {
      if (e == 2) {
        this.answer.q1StartTime = Date.now();
      }
    },
    q2Change(e){
      console.log(e);
      this.answer.q2=e.target.value
      this.processData.answer[3]=[this.answer.q2]
      this.recordProcessData()
    },
    q5Change(e){
      console.log(this.answer.q5);
      this.recordProcessData()
    },
    q6Change(e){
      console.log(this.answer.q6);
      this.recordProcessData()
    }
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
