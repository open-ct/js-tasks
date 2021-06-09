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
      <a-layout-content v-if="current == 0" class="bg-white h-4/5 p-6">
        <div class="text-xl text-left align-middle ml-4 leading-loose">
          我国南方地区夏季普遍高温多雨。以南方某市为例，夏季室外平均气温可达36℃，平均湿度为80%。某地居民会在停电时为了避免高温引起食物腐烂变质，用以下材料制作了一个“土冰箱”，装置所需材料如右图所示。实验发现毛巾的位置和盆内自来水的高度影响食物冷藏效果。
        </div>
        <img class="float-right" src="./assets/0.jpg" alt="" />
      </a-layout-content>
      <a-layout-content v-if="current == 1" class="bg-white h-4/5 p-6">
        <div class="flex flex-1">
          <div class="text-xl text-left mb-4 w-1/2">
            （1）现有一碗红烧肉，它的温度为30℃，需要冷藏保鲜，碗内温度越低冷藏效果越好。请同学们选择毛巾位置和水位高度，点击“试一试”，探究何种情况下冷藏效果最好。若已探究完成，请点击“下一步”。
          </div>
          <div class="w-1/2">
            <div class="">
              <div class="">
                <!-- <div class="text-2xl">毛巾位置</div> -->
                <!-- <button
                  class=""
                  :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 0)"
                >
                  <img class="h-12" src="./assets/00.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 1)"
                >
                  <img class="h-12" src="./assets/10.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 2)"
                >
                  <img class="h-12" src="./assets/20.png" />
                </button> -->
                <div class="flex justify-center">
                  <img
                    class="h-36"
                    :src="getImg"
                    v-if="
                      maojinweizhi != undefined && shuiweiweizhi != undefined
                    "
                  />
                  <!-- <img
                    class="h-40"
                    v-if="!maojinweizhi || maojinweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 1"
                    src="./assets/10.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 2"
                    src="./assets/20.png"
                  /> -->
                </div>

                <div class="flex">
                  <div class="w-1/6 text-xl">毛巾位置</div>
                  <div class="w-full">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/6 text-xl">水位高度</div>
                  <div class="w-full">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <a-button class="mt-4" @click="updateExpertData" type="primary">
                  <a-icon type="experiment" />试一试
                </a-button>
                <!-- <div class="flex">
<a-form-model
                  class="w-full"
                  :model="form"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item label="毛巾位置">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                  <a-form-model-item label="水位高度">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                </a-form-model>
                
                </div> -->

                <!-- <span>毛巾位置</span><a-slider :min="0" :max="2" :marks="marks1" :tooltipVisible="false" v-model="maojinweizhi"/>
                <a-slider :min="0" :max="4" :marks="marks2" :tooltipVisible="false" v-model="maojinweizhi"/> -->
              </div>
              <!-- <div class="w-1/2">
                <div class="ml-4">
                  <div class="text-2xl">水位高度</div>
                  <div class="flex justify-center">
                    <img
                    class="h-40"
                    v-if="!shuiweiweizhi || shuiweiweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 1"
                    src="./assets/01.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 2"
                    src="./assets/02.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 3"
                    src="./assets/03.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 4"
                    src="./assets/04.png"
                  />
                  </div>
                  
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 0)"
                  >
                    0
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 1)"
                  >
                    1
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 2)"
                  >
                    2
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 3)"
                  >
                    3
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 4)"
                  >
                    4
                  </button>
                </div>
              </div> -->
            </div>

            <div class="max-h-96">
              <div class="text-2xl">实验数据</div>

              <a-table
                :scroll="{ y: 240 }"
                :pagination="false"
                :columns="columns"
                :data-source="answer.expertData || []"
              />
            </div>
          </div>

          <!-- <div class="w-1/3 ml-24 max-h-96">
            <img
              class="h-36"
              :src="getImg"
              v-if="maojinweizhi != undefined && shuiweiweizhi != undefined"
            />
          </div> -->
        </div>
      </a-layout-content>
      <a-layout-content v-if="current == 2" class="bg-white h-4/5 p-6">
        <div class="flex flex-1">
          <div class="text-xl text-left mb-4">
            （2）经过探究，你认为：冷藏效果最好的毛巾位置
            <a-dropdown>
              <a-button class="ant-dropdown-link">
                {{ answer.q1a1 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a1 = '无毛巾';
                      processData.answer[2]=[1]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>无毛巾</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a1 = '未进入水中';
                      processData.answer[2]=[2]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>未进入水中</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a1 = '进入水中';
                      processData.answer[2]=[3]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>进入水中</a>
                </a-menu-item>
              </a-menu> </a-dropdown
            ><br />水位高度
            <a-dropdown>
              <a-button class="ant-dropdown-link">
                {{ answer.q1a2 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位1';
                      processData.answer[3]=[1]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位1</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位2';
                      processData.answer[3]=[2]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位2</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位3';
                      processData.answer[3]=[3]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位3</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位4';
                      processData.answer[3]=[4]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位4</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位5';
                      processData.answer[3]=[5]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位5</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <div class="w-1/2">
            <div class="">
              <div class="">
                <!-- <div class="text-2xl">毛巾位置</div> -->
                <!-- <button
                  class=""
                  :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 0)"
                >
                  <img class="h-12" src="./assets/00.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 1)"
                >
                  <img class="h-12" src="./assets/10.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 2)"
                >
                  <img class="h-12" src="./assets/20.png" />
                </button> -->
                <div class="flex justify-center">
                  <img
                    class="h-36"
                    :src="getImg"
                    v-if="
                      maojinweizhi != undefined && shuiweiweizhi != undefined
                    "
                  />
                  <!-- <img
                    class="h-40"
                    v-if="!maojinweizhi || maojinweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 1"
                    src="./assets/10.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 2"
                    src="./assets/20.png"
                  /> -->
                </div>

                <div class="flex">
                  <div class="w-1/6 text-xl">毛巾位置</div>
                  <div class="w-full">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/6 text-xl">水位高度</div>
                  <div class="w-full">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <!-- <a-button class="mt-4" @click="updateExpertData" type="primary">
                  <a-icon type="experiment" />试一试
                </a-button> -->
                <!-- <div class="flex">
<a-form-model
                  class="w-full"
                  :model="form"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item label="毛巾位置">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                  <a-form-model-item label="水位高度">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                </a-form-model>
                
                </div> -->

                <!-- <span>毛巾位置</span><a-slider :min="0" :max="2" :marks="marks1" :tooltipVisible="false" v-model="maojinweizhi"/>
                <a-slider :min="0" :max="4" :marks="marks2" :tooltipVisible="false" v-model="maojinweizhi"/> -->
              </div>
              <!-- <div class="w-1/2">
                <div class="ml-4">
                  <div class="text-2xl">水位高度</div>
                  <div class="flex justify-center">
                    <img
                    class="h-40"
                    v-if="!shuiweiweizhi || shuiweiweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 1"
                    src="./assets/01.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 2"
                    src="./assets/02.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 3"
                    src="./assets/03.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 4"
                    src="./assets/04.png"
                  />
                  </div>
                  
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 0)"
                  >
                    0
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 1)"
                  >
                    1
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 2)"
                  >
                    2
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 3)"
                  >
                    3
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 4)"
                  >
                    4
                  </button>
                </div>
              </div> -->
            </div>

            <div class="max-h-96">
              <div class="text-2xl">实验数据</div>

              <a-table
                :scroll="{ y: 240 }"
                :pagination="false"
                :columns="columns"
                :data-source="answer.expertData || []"
              />
            </div>
          </div>

          <!-- <div class="w-1/3 ml-24 max-h-96">
            <img
              class="h-36"
              :src="getImg"
              v-if="maojinweizhi != undefined && shuiweiweizhi != undefined"
            />
          </div> -->
        </div>
      </a-layout-content>
      <a-layout-content v-if="current == 3" class="bg-white h-4/5 p-6">
        <div class="flex">
          <div class="text-xl text-left mb-4 w-1/2">
            （3）请结合小红探索的数据，分析毛巾在冷藏食物中的作用。作答完毕请点击“下一步”。
            <a-textarea
              v-model="answer.q2Text"
              class="mt-4"
              placeholder=""
              @change="q2Change"
              :rows="4"
            />
          </div>
          <div class="w-1/2">
            <div class="">
              <div class="">
                <!-- <div class="text-2xl">毛巾位置</div> -->
                <!-- <button
                  class=""
                  :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 0)"
                >
                  <img class="h-12" src="./assets/00.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 1)"
                >
                  <img class="h-12" src="./assets/10.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 2)"
                >
                  <img class="h-12" src="./assets/20.png" />
                </button> -->
                <div class="flex justify-center">
                  <img
                    class="h-36"
                    :src="getImg"
                    v-if="
                      maojinweizhi != undefined && shuiweiweizhi != undefined
                    "
                  />
                  <!-- <img
                    class="h-40"
                    v-if="!maojinweizhi || maojinweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 1"
                    src="./assets/10.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 2"
                    src="./assets/20.png"
                  /> -->
                </div>

                <div class="flex">
                  <div class="w-1/6 text-xl">毛巾位置</div>
                  <div class="w-full">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/6 text-xl">水位高度</div>
                  <div class="w-full">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <!-- <div class="flex">
<a-form-model
                  class="w-full"
                  :model="form"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item label="毛巾位置">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                  <a-form-model-item label="水位高度">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                </a-form-model>
                
                </div> -->

                <!-- <span>毛巾位置</span><a-slider :min="0" :max="2" :marks="marks1" :tooltipVisible="false" v-model="maojinweizhi"/>
                <a-slider :min="0" :max="4" :marks="marks2" :tooltipVisible="false" v-model="maojinweizhi"/> -->
              </div>
              <!-- <div class="w-1/2">
                <div class="ml-4">
                  <div class="text-2xl">水位高度</div>
                  <div class="flex justify-center">
                    <img
                    class="h-40"
                    v-if="!shuiweiweizhi || shuiweiweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 1"
                    src="./assets/01.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 2"
                    src="./assets/02.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 3"
                    src="./assets/03.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 4"
                    src="./assets/04.png"
                  />
                  </div>
                  
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 0)"
                  >
                    0
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 1)"
                  >
                    1
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 2)"
                  >
                    2
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 3)"
                  >
                    3
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 4)"
                  >
                    4
                  </button>
                </div>
              </div> -->
            </div>

            <div class="max-h-96">
              <div class="text-2xl">小红的实验数据</div>

              <a-table
                :scroll="{ y: 240 }"
                :pagination="false"
                :columns="columns"
                :data-source="q2TableData || []"
              />
            </div>
          </div>

          <!-- <div class="w-1/3 ml-24 max-h-96">
            <img
              class="h-36"
              :src="getImg"
              v-if="maojinweizhi != undefined && shuiweiweizhi != undefined"
            />
          </div> -->
        </div>
      </a-layout-content>
      <a-layout-content v-if="current == 4" class="bg-white h-4/5 p-6">
        <div class="flex">
          <div class="text-xl text-left mb-4 w-1/2">
            （4）请结合小明探索的数据，分析水位在冷藏食物中的作用。作答完毕请点击“下一步”。
            <a-textarea
              v-model="answer.q3Text"
              @change="q3Change"
              class="mt-4"
              placeholder=""
              :rows="4"
            />
          </div>
          <div class="w-1/2">
            <div class="">
              <div class="">
                <!-- <div class="text-2xl">毛巾位置</div> -->
                <!-- <button
                  class=""
                  :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 0)"
                >
                  <img class="h-12" src="./assets/00.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 1)"
                >
                  <img class="h-12" src="./assets/10.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 2)"
                >
                  <img class="h-12" src="./assets/20.png" />
                </button> -->
                <div class="flex justify-center">
                  <img
                    class="h-36"
                    :src="getImg"
                    v-if="
                      maojinweizhi != undefined && shuiweiweizhi != undefined
                    "
                  />
                  <!-- <img
                    class="h-40"
                    v-if="!maojinweizhi || maojinweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 1"
                    src="./assets/10.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 2"
                    src="./assets/20.png"
                  /> -->
                </div>

                <div class="flex">
                  <div class="w-1/6 text-xl">毛巾位置</div>
                  <div class="w-full">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/6 text-xl">水位高度</div>
                  <div class="w-full">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <!-- <div class="flex">
<a-form-model
                  class="w-full"
                  :model="form"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item label="毛巾位置">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                  <a-form-model-item label="水位高度">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                </a-form-model>
                
                </div> -->

                <!-- <span>毛巾位置</span><a-slider :min="0" :max="2" :marks="marks1" :tooltipVisible="false" v-model="maojinweizhi"/>
                <a-slider :min="0" :max="4" :marks="marks2" :tooltipVisible="false" v-model="maojinweizhi"/> -->
              </div>
              <!-- <div class="w-1/2">
                <div class="ml-4">
                  <div class="text-2xl">水位高度</div>
                  <div class="flex justify-center">
                    <img
                    class="h-40"
                    v-if="!shuiweiweizhi || shuiweiweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 1"
                    src="./assets/01.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 2"
                    src="./assets/02.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 3"
                    src="./assets/03.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 4"
                    src="./assets/04.png"
                  />
                  </div>
                  
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 0)"
                  >
                    0
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 1)"
                  >
                    1
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 2)"
                  >
                    2
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 3)"
                  >
                    3
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 4)"
                  >
                    4
                  </button>
                </div>
              </div> -->
            </div>

            <div class="max-h-96">
              <div class="text-2xl">小明的实验数据</div>

              <a-table
                :scroll="{ y: 240 }"
                :pagination="false"
                :columns="columns"
                :data-source="q3TableData || []"
              />
            </div>
          </div>

          <!-- <div class="w-1/3 ml-24 max-h-96">
            <img
              class="h-36"
              :src="getImg"
              v-if="maojinweizhi != undefined && shuiweiweizhi != undefined"
            />
          </div> -->
        </div>
      </a-layout-content>

      <!-- <a-layout-content v-if="current == 2" class="bg-white h-4/5 p-6">
        <div class="text-xl text-left mb-4">
          （2）经过探究，你认为：冷藏效果最好的毛巾位置
          <a-dropdown>
            <a class="ant-dropdown-link">
              {{ answer.q1a1 || "请选择" }} <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = '无毛巾';
                    $forceUpdate();
                  }
                "
              >
                <a>无毛巾</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = '未进入水中';
                    $forceUpdate();
                  }
                "
              >
                <a>未进入水中</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a1 = '进入水中';
                    $forceUpdate();
                  }
                "
              >
                <a>进入水中</a>
              </a-menu-item>
            </a-menu> </a-dropdown
          >水位高度
          <a-dropdown>
            <a class="ant-dropdown-link">
              {{ answer.q1a2 || "请选择" }} <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item
                @click="
                  () => {
                    answer.q1a2 = '水位1';
                    $forceUpdate();
                  }
                "
              >
                <a>水位1</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a2 = '水位2';
                    $forceUpdate();
                  }
                "
              >
                <a>水位2</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a2 = '水位3';
                    $forceUpdate();
                  }
                "
              >
                <a>水位3</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a2 = '水位4';
                    $forceUpdate();
                  }
                "
              >
                <a>水位4</a>
              </a-menu-item>
              <a-menu-item
                @click="
                  () => {
                    answer.q1a2 = '水位5';
                    $forceUpdate();
                  }
                "
              >
                <a>水位5</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <div class="flex flex-1">
          <div class="w-1/4">
            <div class="text-2xl">毛巾位置</div>
            <button
              class=""
              :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 0)"
            >
              <img class="h-36" src="./assets/00.png" />
            </button>
            <button
              :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 1)"
            >
              <img class="h-36" src="./assets/10.png" />
            </button>
            <button
              :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 2)"
            >
              <img class="h-36" src="./assets/20.png" />
            </button>
          </div>
          <div class="w-1/4 ml-24">
            <div class="text-2xl">水位高度</div>
            <img
              class="h-36"
              v-if="!shuiweiweizhi || shuiweiweizhi == 0"
              src="./assets/00.png"
            />
            <img class="h-36" v-if="shuiweiweizhi == 1" src="./assets/01.png" />
            <img class="h-36" v-if="shuiweiweizhi == 2" src="./assets/02.png" />
            <img class="h-36" v-if="shuiweiweizhi == 3" src="./assets/03.png" />
            <img class="h-36" v-if="shuiweiweizhi == 4" src="./assets/04.png" />
            <button
              class="w-full h-12 mt-6 bg-gray-200 rounded"
              :class="shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 0)"
            >
              0
            </button>
            <button
              class="w-full h-12 mt-6 bg-gray-200 rounded"
              :class="shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 1)"
            >
              1
            </button>
            <button
              class="w-full h-12 mt-6 bg-gray-200 rounded"
              :class="shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 2)"
            >
              2
            </button>
            <button
              class="w-full h-12 mt-6 bg-gray-200 rounded"
              :class="shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 3)"
            >
              3
            </button>
            <button
              class="w-full h-12 mt-6 bg-gray-200 rounded"
              :class="shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 4)"
            >
              4
            </button>
          </div>
          <div class="w-1/2 ml-12 max-h-96">
            <div class="text-2xl">实验数据</div>

            <a-table
              :scroll="{ y: 420 }"
              :pagination="false"
              :columns="columns"
              :data-source="answer.expertData || []"
            />
          </div>
          
        </div>
      </a-layout-content> -->
      <!-- <a-layout-content v-if="current == 3" class="bg-white h-4/5 p-6">
        <div class="text-xl text-left mb-4">
          （3）请结合小红探索的数据，分析毛巾在冷藏食物中的作用。作答完毕请点击“下一步”。
          <a-textarea class="mt-4" placeholder="" :rows="4" />
        </div>
        <div class="flex flex-1">
          <div class="w-1/4">
            <div class="text-2xl">毛巾位置</div>
            <button
              class=""
              :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 0)"
            >
              <img class="h-36" src="./assets/00.png" />
            </button>
            <button
              :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 1)"
            >
              <img class="h-36" src="./assets/10.png" />
            </button>
            <button
              :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 2)"
            >
              <img class="h-36" src="./assets/20.png" />
            </button>
          </div>
          <div class="w-1/4 ml-24">
            <div class="text-2xl">水位高度</div>
            <img
              class="h-36"
              v-if="!shuiweiweizhi || shuiweiweizhi == 0"
              src="./assets/00.png"
            />
            <img class="h-36" v-if="shuiweiweizhi == 1" src="./assets/01.png" />
            <img class="h-36" v-if="shuiweiweizhi == 2" src="./assets/02.png" />
            <img class="h-36" v-if="shuiweiweizhi == 3" src="./assets/03.png" />
            <img class="h-36" v-if="shuiweiweizhi == 4" src="./assets/04.png" />
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 0)"
            >
              0
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 1)"
            >
              1
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 2)"
            >
              2
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 3)"
            >
              3
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 4)"
            >
              4
            </button>
          </div>
          <div class="w-1/2 ml-12 max-h-96">
            <div class="text-2xl">小红的实验数据</div>

            <a-table
              :scroll="{ y: 420 }"
              :pagination="false"
              :columns="columns"
              :data-source="q2TableData || []"
            />
          </div>
          
        </div>
      </a-layout-content> -->
      <!-- <a-layout-content v-if="current == 4" class="bg-white h-4/5 p-6">
        <div class="text-xl text-left mb-4">
          （4）请结合小明探索的数据，分析水位在冷藏食物中的作用。作答完毕请点击“下一步”。
          <a-textarea class="mt-4" placeholder="" :rows="4" />
        </div>
        <div class="flex flex-1">
          <div class="w-1/4">
            <div class="text-2xl">毛巾位置</div>
            <button
              class=""
              :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 0)"
            >
              <img class="h-36" src="./assets/00.png" />
            </button>
            <button
              :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 1)"
            >
              <img class="h-36" src="./assets/10.png" />
            </button>
            <button
              :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
              @click="() => (maojinweizhi = 2)"
            >
              <img class="h-36" src="./assets/20.png" />
            </button>
          </div>
          <div class="w-1/4 ml-24">
            <div class="text-2xl">水位高度</div>
            <img
              class="h-36"
              v-if="!shuiweiweizhi || shuiweiweizhi == 0"
              src="./assets/00.png"
            />
            <img class="h-36" v-if="shuiweiweizhi == 1" src="./assets/01.png" />
            <img class="h-36" v-if="shuiweiweizhi == 2" src="./assets/02.png" />
            <img class="h-36" v-if="shuiweiweizhi == 3" src="./assets/03.png" />
            <img class="h-36" v-if="shuiweiweizhi == 4" src="./assets/04.png" />
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 0)"
            >
              0
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 1)"
            >
              1
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 2)"
            >
              2
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 3)"
            >
              3
            </button>
            <button
              class="w-full h-12 mt-2 bg-gray-200 rounded"
              :class="shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''"
              @click="() => (shuiweiweizhi = 4)"
            >
              4
            </button>
          </div>
          <div class="w-1/2 ml-12 max-h-96">
            <div class="text-2xl">小明的实验数据</div>

            <a-table
              :scroll="{ y: 420 }"
              :pagination="false"
              :columns="columns"
              :data-source="q3TableData || []"
            />
          </div>
          
        </div>
      </a-layout-content> -->
      <a-layout-content v-if="current == 5" class="bg-white h-4/5 p-6">
        <div class="flex">
          <div class="text-xl text-left mb-4 w-1/2">
            现在你认为：冷藏效果最好的毛巾位置
            <a-dropdown>
              <a-button class="ant-dropdown-link">
                {{ answer.q4a1 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a1 = '无毛巾';
                      processData.answer[12]=[1]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>无毛巾</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a1 = '未进入水中';
                      processData.answer[12]=[2]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>未进入水中</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a1 = '进入水中';
                      processData.answer[12]=[3]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>进入水中</a>
                </a-menu-item>
              </a-menu> </a-dropdown
            ><br />水位高度
            <a-dropdown>
              <a-button class="ant-dropdown-link">
                {{ answer.q4a2 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位1';
                      processData.answer[13]=[1]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位1</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位2';
                      processData.answer[13]=[2]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位2</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位3';
                      processData.answer[13]=[3]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位3</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位4';
                      processData.answer[13]=[4]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位4</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位5';
                      processData.answer[13]=[5]
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位5</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <div class="w-1/2 ml-24">
            <div class="">
              <div class="">
                <!-- <div class="text-2xl">毛巾位置</div> -->
                <!-- <button
                  class=""
                  :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 0)"
                >
                  <img class="h-12" src="./assets/00.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 1)"
                >
                  <img class="h-12" src="./assets/10.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 2)"
                >
                  <img class="h-12" src="./assets/20.png" />
                </button> -->
                <div class="flex justify-center">
                  <img
                    class="h-36"
                    :src="getImg"
                    v-if="
                      maojinweizhi != undefined && shuiweiweizhi != undefined
                    "
                  />
                  <!-- <img
                    class="h-40"
                    v-if="!maojinweizhi || maojinweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 1"
                    src="./assets/10.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 2"
                    src="./assets/20.png"
                  /> -->
                </div>

                <div class="flex">
                  <div class="w-1/6 text-xl">毛巾位置</div>
                  <div class="w-full">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/6 text-xl">水位高度</div>
                  <div class="w-full">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </div>
                </div>
                <!-- <div class="flex">
<a-form-model
                  class="w-full"
                  :model="form"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item label="毛巾位置">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                  <a-form-model-item label="水位高度">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                </a-form-model>
                
                </div> -->

                <!-- <span>毛巾位置</span><a-slider :min="0" :max="2" :marks="marks1" :tooltipVisible="false" v-model="maojinweizhi"/>
                <a-slider :min="0" :max="4" :marks="marks2" :tooltipVisible="false" v-model="maojinweizhi"/> -->
              </div>
              <!-- <div class="w-1/2">
                <div class="ml-4">
                  <div class="text-2xl">水位高度</div>
                  <div class="flex justify-center">
                    <img
                    class="h-40"
                    v-if="!shuiweiweizhi || shuiweiweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 1"
                    src="./assets/01.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 2"
                    src="./assets/02.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 3"
                    src="./assets/03.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 4"
                    src="./assets/04.png"
                  />
                  </div>
                  
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 0)"
                  >
                    0
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 1)"
                  >
                    1
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 2)"
                  >
                    2
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 3)"
                  >
                    3
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 4)"
                  >
                    4
                  </button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-content v-if="current == 6" class="bg-white h-4/5 p-6 flex">
        <div class="w-1/2">
          <div class="text-xl text-left mb-4">
            （6）请根据第（5）题的作答，解释此种情况下冷藏效果最好的原因。
          </div>
          <a-textarea v-model="answer.q6Text" @change="q6Change" class="mt-4" placeholder="" :rows="4" />
        </div>

        <div class="w-1/2 ml-24">
          <div class="">
            <div class="">
              <!-- <div class="text-2xl">毛巾位置</div> -->
              <!-- <button
                  class=""
                  :class="maojinweizhi == 0 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 0)"
                >
                  <img class="h-12" src="./assets/00.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 1 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 1)"
                >
                  <img class="h-12" src="./assets/10.png" />
                </button>
                <br>
                <button
                  :class="maojinweizhi == 2 ? 'border-4 border-blue-500' : ''"
                  @click="() => (maojinweizhi = 2)"
                >
                  <img class="h-12" src="./assets/20.png" />
                </button> -->
              <div class="flex justify-center">
                <img
                  class="h-36"
                  :src="getImg"
                  v-if="maojinweizhi != undefined && shuiweiweizhi != undefined"
                />
                <!-- <img
                    class="h-40"
                    v-if="!maojinweizhi || maojinweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 1"
                    src="./assets/10.png"
                  />
                  <img
                    class="h-40"
                    v-if="maojinweizhi == 2"
                    src="./assets/20.png"
                  /> -->
              </div>

              <div class="flex">
                <div class="w-1/6 text-xl">毛巾位置</div>
                <div class="w-full">
                  <a-slider
                    v-model="maojinweizhi"
                    id="test"
                    :default-value="0"
                    :dots="true"
                    :min="0"
                    :max="2"
                    :marks="marks1"
                    :tooltipVisible="false"
                  />
                </div>
              </div>
              <div class="flex">
                <div class="w-1/6 text-xl">水位高度</div>
                <div class="w-full">
                  <a-slider
                    v-model="shuiweiweizhi"
                    :default-value="0"
                    :dots="true"
                    :min="0"
                    :max="4"
                    :marks="marks2"
                    :tooltipVisible="false"
                  />
                </div>
              </div>
              <!-- <div class="flex">
<a-form-model
                  class="w-full"
                  :model="form"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item label="毛巾位置">
                    <a-slider
                      v-model="maojinweizhi"
                      id="test"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="2"
                      :marks="marks1"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                  <a-form-model-item label="水位高度">
                    <a-slider
                      v-model="shuiweiweizhi"
                      :default-value="0"
                      :dots="true"
                      :min="0"
                      :max="4"
                      :marks="marks2"
                      :tooltipVisible="false"
                    />
                  </a-form-model-item>
                </a-form-model>
                
                </div> -->

              <!-- <span>毛巾位置</span><a-slider :min="0" :max="2" :marks="marks1" :tooltipVisible="false" v-model="maojinweizhi"/>
                <a-slider :min="0" :max="4" :marks="marks2" :tooltipVisible="false" v-model="maojinweizhi"/> -->
            </div>
            <!-- <div class="w-1/2">
                <div class="ml-4">
                  <div class="text-2xl">水位高度</div>
                  <div class="flex justify-center">
                    <img
                    class="h-40"
                    v-if="!shuiweiweizhi || shuiweiweizhi == 0"
                    src="./assets/00.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 1"
                    src="./assets/01.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 2"
                    src="./assets/02.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 3"
                    src="./assets/03.png"
                  />
                  <img
                    class="h-40"
                    v-if="shuiweiweizhi == 4"
                    src="./assets/04.png"
                  />
                  </div>
                  
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 0 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 0)"
                  >
                    0
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 1 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 1)"
                  >
                    1
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 2 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 2)"
                  >
                    2
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 3 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 3)"
                  >
                    3
                  </button>
                  <button
                    class="w-full h-6 mt-2 bg-gray-200 rounded"
                    :class="
                      shuiweiweizhi == 4 ? 'border-4 border-blue-500' : ''
                    "
                    @click="() => (shuiweiweizhi = 4)"
                  >
                    4
                  </button>
                </div>
              </div> -->
          </div>
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
    title: "毛巾位置",
    dataIndex: "maojinweizhi",
    key: "maojinweizhi",
  },
  {
    title: "水位高度",
    dataIndex: "shuiweiweizhi",
    key: "shuiweiweizhi",
  },
  {
    title: "碗内温度",
    dataIndex: "temperature",
    key: "temperature",
  },
];
export default {
  components: {},
  provide: {},
  computed: {
    getImg() {
      return this.imgList[this.maojinweizhi + "" + this.shuiweiweizhi];
    },
  },
  data() {
    return {
      processData: {
        page: 1,
        answer: [
          [1],
          [1],
          [-1],
          [-1],
          [1],
          [1],
          "text",
          [1],
          [1],
          "text",
          [1],
          [1],
          [-1],
          [-1],
          [1],
          [1],
          "text",
          [1],
          [1],
        ],
      },
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
      marks1: {
        0: "无毛巾",
        1: "毛巾未进入水中",
        2: "毛巾进入水中",
      },
      marks2: {
        0: "水位0",
        1: "水位1",
        2: "水位2",
        3: "水位3",
        4: "水位4",
      },
      columns,
      q2TableData: [
        {
          key: 0,
          maojinweizhi: "无毛巾",
          shuiweiweizhi: "水位2",
          temperature: 30,
        },
        {
          key: 1,
          maojinweizhi: "毛巾未进入水中",
          shuiweiweizhi: "水位2",
          temperature: 30,
        },
        {
          key: 2,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位2",
          temperature: 20.2,
        },
        {
          key: 3,
          maojinweizhi: "无毛巾",
          shuiweiweizhi: "水位4",
          temperature: 29.1,
        },
        {
          key: 4,
          maojinweizhi: "毛巾未进入水中",
          shuiweiweizhi: "水位4",
          temperature: 29.2,
        },
        {
          key: 5,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位4",
          temperature: 27.9,
        },
      ],
      q3TableData: [
        {
          key: 0,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位0",
          temperature: 30,
        },
        {
          key: 1,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位1",
          temperature: 24.8,
        },
        {
          key: 2,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位2",
          temperature: 20.2,
        },
        {
          key: 3,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位3",
          temperature: 28.4,
        },
        {
          key: 4,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位4",
          temperature: 27.9,
        },
      ],
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
          title: "探究",
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
          title: "问题3",
        },
        {
          index: 5,
          title: "问题4",
        },
        {
          index: 6,
          title: "问题5",
        },
      ],
      current: 0,
      stepStyle: {
        boxShadow: "0px -1px 0 0 #e8e8e8 inset",
      },
      list: [],
      name: "",
      step: 0,
      maojinweizhi: 0,
      shuiweiweizhi: 0,
      temperature: undefined,
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
    q2Change(){
      this.processData.answer[6]=this.answer.q2Text
      this.recordProcessData()
    },
    q3Change(){
      this.processData.answer[9]=this.answer.q3Text
      this.recordProcessData()
    },
    q6Change(){
      this.processData.answer[16]=this.answer.q6Text
      this.recordProcessData()
    },
    recordProcessData(){
      this.processData.page=this.current+1
      // this.processData.answer[0]=[this.answer.q1Yellow||-1]
      // this.processData.answer[1]=[this.answer.q1Green||-1]
      // this.processData.answer[2]=[this.answer.q1Blue||-1]
      // this.processData.answer[3]=[this.answer.q2]
      // this.processData.answer[4]=[this.answer.q3Yellow||-1]
      // this.processData.answer[5]=[this.answer.q3Green||-1]
      // this.processData.answer[6]=[this.answer.q3Blue||-1]
      // this.processData.answer[7]=this.answer.q4||[]
      // this.processData.answer[8]=this.answer.q5||"null"
      // this.processData.answer[9]=this.answer.q6||"null"
      this.processData=JSON.parse(JSON.stringify(this.processData))
      console.log(this.processData);
      parent.postMessage(this.processData, "*")
    },
    updateExpertData() {
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
      if (!this.answer.expertData) {
        this.answer.expertData = [];
      }
      this.answer.expertData.push({
        key: this.answer.expertData.length,
        maojinweizhi: item.maojin,
        shuiweiweizhi: item.shuiwei,
        temperature: item.temperature,
      });
      this.$forceUpdate();
      this.processData.answer[0]=this.maojinweizhi+1
      this.processData.answer[1]=this.shuiweiweizhi+1
      this.processData.answer[4]=this.maojinweizhi+1
      this.processData.answer[5]=this.shuiweiweizhi+1
      this.processData.answer[7]=this.maojinweizhi+1
      this.processData.answer[8]=this.shuiweiweizhi+1
      this.processData.answer[10]=this.maojinweizhi+1
      this.processData.answer[11]=this.shuiweiweizhi+1
      this.processData.answer[14]=this.maojinweizhi+1
      this.processData.answer[15]=this.shuiweiweizhi+1
      this.processData.answer[17]=this.maojinweizhi+1
      this.processData.answer[18]=this.shuiweiweizhi+1
      this.recordProcessData()
    },
    next() {
      this.current++;
      if (this.current == 2) {
        this.maojinweizhi = 0;
        this.shuiweiweizhi = 0;
      }

      if (this.current == 3) {
        this.maojinweizhi = 0;
        this.shuiweiweizhi = 0;
      }
      if (this.current == 4) {
        this.maojinweizhi = 0;
        this.shuiweiweizhi = 0;
      }
      if (this.current == 5) {
        this.list = [];
      }
    },
    back() {
      this.current--;
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
