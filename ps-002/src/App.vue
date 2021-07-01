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
          我国南方地区夏季普遍高温多雨。
          以南方某市为例，夏季室外平均气温可达36℃，平均湿度为80％。
          某地居民会在停电时为了避免高温引起食物腐烂变质，用以下材料制作了一个“土冰箱”，装置所需材料如右图所示。
          有的居民会在碗上面铺上一块儿毛巾，盆内加一部分自来水。
          请你探究毛巾的位置和盆内水的高度是否会影响食物冷藏效果。
        </div>
        <img class="float-right" src="./assets/0.jpg" alt="" />
      </a-layout-content>
      <a-layout-content v-if="current == 1" class="bg-white h-4/5 p-6">
        <div class="flex flex-1">
          <div class="text-xl text-left mb-4 w-1/2">
              右图是一个实验模拟器，可以用来探究食物冷藏效果。<br/>
              如果你想了解实验模拟器如何使用，可以尝试下列操作:<br/>
              1. 拖动“毛巾位置”按钮；<br/>
              2. 拖动“水位高度”按钮；<br/>
              3. 点击“记录”按钮，表格中会呈现实验数据。<br/>
              若模拟练习完成，请点击“下一步”。<br/>
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
                  <a-icon type="experiment" />记录
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
            （1）室温为30℃，碗内食物的初始温度为45℃，
            需要冷藏保鲜，<br/>碗内温度越低冷藏效果越好，
            请探究冷藏效果最好的毛巾位置、水位高度。<br/><br/>
            请点击“记录”按钮，记录下实验数据。<br/><br/>
              经过探究，你认为:冷藏效果最好的毛巾位置
            <a-dropdown :disabled="answer_dispaly[0]">
              <a-button class="ant-dropdown-link">
                {{ answer.q1a1 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a1 = '无毛巾';
                      processData.answer[0]=0
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
                      processData.answer[0]=1
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
                      processData.answer[0]=2
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>进入水中</a>
                </a-menu-item>
              </a-menu> </a-dropdown
            ><br />水位高度
            <a-dropdown :disabled="answer_dispaly[1]">
              <a-button class="ant-dropdown-link">
                {{ answer.q1a2 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位0';
                      processData.answer[1]=0
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位0</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q1a2 = '水位1';
                      processData.answer[1]=1
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
                      processData.answer[1]=2
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
                      processData.answer[1]=3
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
                      processData.answer[1]=4
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位4</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown><br/><br/><br/>
            若完成作答，请点击“下一步”。
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
                      :default-value=-1
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
            <a-button class="mt-4"  @click="updateExpertData1" type="primary" >
                  <a-icon type="experiment" />记录
                </a-button>
            <div class="max-h-96">
              <div class="text-2xl">实验数据</div>
              <a-table
                :scroll="{ y: 240 }"
                :pagination="false"
                :columns="columns"
                :data-source="answer.expertData1 || []"
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
            （2）小红对这个冷藏装置也很感兴趣，她做了一组实验，
            得出如右图所示的数据。根据数据，你认为水位在哪里时冷藏效果最好？<br/>
            <a-radio-group
            v-model="answer.q2radioGroup"
            @change="q2radioGroupChange"
            name="radioGroup2"
            :default-value="-1"
            class="text-left"
            :disabled="answer_dispaly[3]"
          >
        <br />
        <a-radio :value="1">A. 水位0</a-radio>
        <a-radio :value="2">B. 水位1</a-radio> 
        <a-radio :value="3">C. 水位2</a-radio>
        <a-radio :value="4">D. 水位3</a-radio> 
        <a-radio :value="5">E. 水位4</a-radio>  
        </a-radio-group><br/><br/>
            根据你所学的科学原理，说明此水位冷藏效果最好的原因。<br/>
            将答案填写于方框中，作答完毕请点击“下一步”。
            <a-textarea
              v-model="answer.q2Text"
              class="mt-4"
              placeholder=""
              @change="q2Change"
              :rows="4"
              :disabled="answer_dispaly[4]"
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
            （3）小红继续探究，得出如右图所示的数据。根据数据，你认为毛巾位置在哪里时冷藏效果最好？<br/>
             <a-radio-group
              v-model="answer.q3radioGroup"
               @change="q3radioGroupChange"
        name="radioGroup2"
        :default-value="-1"
        class="text-left"
        :disabled="answer_dispaly[4]"
      >
        <br />
        <a-radio :value="1">A. 无毛巾</a-radio>
        <a-radio :value="2">B. 毛巾未进入水中</a-radio> 
        <a-radio :value="3">C. 毛巾进入水中</a-radio>
        </a-radio-group><br/><br/>
根据你所学的科学原理，说明此毛巾位置冷藏效果最好的原因。将答案填写于方框中，作答完毕请点击“下一步”。
            <a-textarea
              v-model="answer.q3Text"
              @change="q3Change"
              class="mt-4"
              placeholder=""
              :rows="4"
              :disabled="answer_dispaly[5]"
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
            （4）现在你认为：冷藏效果最好的毛巾位置
            <a-dropdown :disabled="answer_dispaly[6]">
              <a-button class="ant-dropdown-link">
                {{ answer.q4a1 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a1 = '无毛巾';
                      processData.answer[8]=0
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
                      processData.answer[8]=1
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
                      processData.answer[8]=2
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>进入水中</a>
                </a-menu-item>
              </a-menu> </a-dropdown
            ><br />水位高度
            <a-dropdown :disabled="answer_dispaly[7]">
              <a-button class="ant-dropdown-link">
                {{ answer.q4a2 || "请选择" }} <a-icon type="down" />
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位0';
                      processData.answer[9]=0
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位0</a>
                </a-menu-item>
                <a-menu-item
                  @click="
                    () => {
                      answer.q4a2 = '水位1';
                      processData.answer[9]=1
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
                      processData.answer[9]=2
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
                      processData.answer[9]=3
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
                      processData.answer[9]=4
                      recordProcessData()
                      $forceUpdate();
                    }
                  "
                >
                  <a>水位4</a>
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
            （5）请根据第（4）题的作答，用你所学的科学原理解释此时冷藏效果最好的原因。<br/>
            将答案填写于方框中，作答完毕请点击“提交答案”并“进入下一题”。
          </div>
          <a-textarea v-model="answer.q6Text" @change="q6Change" class="mt-4" placeholder="" :rows="4" :disabled="answer_dispaly[8]"/>
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
          :disabled="answer_dispaly[9]"
          type="primary"
          >{{nexttext}} <a-icon type="right" />
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
      if(this.maojinweizhi==-1){
        return this.imgList[0+ "" +0];
      }else{
        return this.imgList[this.maojinweizhi + "" + this.shuiweiweizhi];
      }
      
    },
  },
  data() {
    return {
      fulfill:false,//判断是否做完测试
      nexttext:'下一步',//下一步or提交答案,下一位兄弟改需求的时候可以封装一下“下一步”的操作
      answer_dispaly:[false,false,false,false,false,false,false,false,false,false],//对应的每一个答案，最后一个是最后一步的下一步按钮
      processData: {
        page: 1,
        answer: [
          -1,-1,-1,-1,
          -1,'text',
          -1,'text',
          -1,-1,
          'text',
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
          temperature: '30.0℃',
        },
        {
          key: 1,
          maojinweizhi: "毛巾未进入水中",
          shuiweiweizhi: "水位2",
          temperature:'30.0℃',
        },
        {
          key: 2,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位2",
          temperature: '22.2℃',
        },
        {
          key: 3,
          maojinweizhi: "无毛巾",
          shuiweiweizhi: "水位4",
          temperature: '29.1℃',
        },
        {
          key: 4,
          maojinweizhi: "毛巾未进入水中",
          shuiweiweizhi: "水位4",
          temperature: '29.2℃',
        },
        {
          key: 5,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位4",
          temperature: '26.3℃',
        },
      ],
      q3TableData: [
        {
          key: 0,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位0",
          temperature: '30.0℃',
        },
        {
          key: 1,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位1",
          temperature: '23.8℃',
        },
        {
          key: 2,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位2",
          temperature: '22.2℃',
        },
        {
          key: 3,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位3",
          temperature: '26.0℃',
        },
        {
          key: 4,
          maojinweizhi: "毛巾进入水中",
          shuiweiweizhi: "水位4",
          temperature: '26.3℃',
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
          title: "前言1",
        },
        {
          index: 1,
          title: "前言2",
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
      //前言2的数据表
      tempData: {
        "00": "数据1",
        "01": "数据2",
        "02": "数据3",
        "03": "数据4",
        "04": "数据5",
        10: "数据6",
        11: "数据7",
        12: "数据8",
        13: "数据9",
        14: "数据10",
        20: "数据11",
        21: "数据12",
        22: "数据13",
        23: "数据14",
        24: "数据15",
      },
      //问题1的数据表
      tempData1: {
        "00": "30.0℃",
        "01": "30.0℃",
        "02": "30.0℃",
        "03": "29.5℃",
        "04": "29.1℃",
        10: "30.0℃",
        11: "30.0℃",
        12: "30.0℃",
        13: "29.6℃",
        14: "29.2℃",
        20: "30.0℃",
        21: "23.8℃",
        22: "22.2℃",
        23: "26.0℃",
        24: "26.3℃",
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
    q2radioGroupChange(){
      this.processData.answer[4]=this.answer.q2radioGroup
      this.recordProcessData()
    },
    q2Change(){
      this.processData.answer[5]=this.answer.q2Text
      this.recordProcessData()
    },
    q3radioGroupChange(){
      this.processData.answer[6]=this.answer.q3radioGroup
      this.recordProcessData()
    },
    q3Change(){
      this.processData.answer[7]=this.answer.q3Text
      this.recordProcessData()
    },
    q6Change(){
      this.processData.answer[10]=this.answer.q6Text
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
    },
    updateExpertData1() {
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
      item.temperature = this.tempData1[
        this.maojinweizhi + "" + this.shuiweiweizhi
      ];
      if (!this.answer.expertData1) {
        this.answer.expertData1 = [];
      }
      this.answer.expertData1.push({
        key: this.answer.expertData1.length,
        maojinweizhi: item.maojin,
        shuiweiweizhi: item.shuiwei,
        temperature: item.temperature,
      });
      this.$forceUpdate();
      this.processData.answer[2]=this.maojinweizhi
      this.processData.answer[3]=this.shuiweiweizhi
      this.recordProcessData()
      console.log(this.processData.answer)
    },
    next() {
      this.current++;
      console.log(this.current)
      if (this.current == 2) {
        this.maojinweizhi = -1;
        this.shuiweiweizhi = -1;
      }
      if (this.current == 3) {
        this.maojinweizhi = -1;
        this.shuiweiweizhi = -1;
        this.answer_dispaly[0]=true;
        this.answer_dispaly[1]=true;
      }
      if (this.current == 4) {
        this.maojinweizhi = -1;
        this.shuiweiweizhi = -1;
        this.answer_dispaly[2]=true;
        this.answer_dispaly[3]=true;
      }
      if (this.current == 5) {
        this.list = [];
        this.answer_dispaly[4]=true;
        this.answer_dispaly[5]=true;
      }
      if (this.current == 6) {
        this.list = [];
        this.nexttext='提交答案';
        this.answer_dispaly[6]=true;
        this.answer_dispaly[7]=true;
      }
      if (this.current == 7) {
        this.answer_dispaly[8]=true;
        this.answer_dispaly[9]=true;
        this.fulfill=true;
        this.current--;
      }
      if(this.nexttext=='提交答案' && this.fulfill){
        this.answer_dispaly[9]=true;
      }
    },
    back() {
      this.current--;
      //给学生回去看答案的时候
      if(this.current==5){
        this.nexttext='下一步';
        this.answer_dispaly[9]=false;
      }
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
