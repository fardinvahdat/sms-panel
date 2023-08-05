<template>
  <BaseLayout class="dashboard send-correspondence">
    <div class="step-1" v-if="currentStep == 1">
      <InfoBox
        :infoOptions="infoOptions"
        :title="'Guide'"
        v-motion
        :initial="initial"
        :enter="enter"
        :delay="200"
      />

      <section
        class="number form-item"
        v-motion
        :initial="initial"
        :enter="enter"
        :delay="200"
      >
        <p class="label">Your Number</p>
        <el-select
          v-model="state.selectedNumber"
          class="select-box"
          placeholder="Select"
          size="large"
          id="selectNumber"
        >
          <el-option
            v-for="number in numberOptions"
            :key="number.value"
            :label="number.label"
            :value="number.value"
          />
        </el-select>
      </section>
      <Uploader v-motion :initial="initial" :enter="enter" :delay="200" />
      <div
        class="form-item pt-0"
        v-motion
        :initial="initial"
        :enter="enter"
        :delay="200"
      >
        <el-checkbox
          v-model="checked2"
          label="Letters to duplicate numbers are allowed"
          size="large"
        />
      </div>
    </div>
    <div
      class="step-2"
      v-if="currentStep == 2"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
    >
      <div class="form-item">
        <label for="">Sample SMS text</label>
        <textarea v-model="state.text" rows="8"></textarea>
      </div>
      <div
        class="information-item d-flex align-items-center justify-content-between"
        v-for="(info, index) in state.informations"
        :key="index"
      >
        <span>{{ info.label }}</span>
        <span>{{ info.value }}</span>
      </div>
      <div
        class="seccess-item"
        v-for="(successItem, index) in state.successes"
        :key="index"
      >
        {{ successItem.label }}
      </div>
    </div>
    <template v-if="currentStep !== 0" v-slot:footer
      ><el-footer class="text-right">
        <div class="footer">
          <button class="primary" @click="changeStepHandler">
            {{ currentStep == 1 ? "Next" : "Send" }}
          </button>
        </div>
      </el-footer></template
    >
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import Uploader from "@/components/TheSendSms/Uploader.vue";
import { ref } from "vue";

//state

const infoOptions = ref([
  "Your input Excel file must contain a number column like the sample file (download the sample file)",
  "Pay attention that the name of the table where the numbers are located should be Sheet1",
  "If this file has been exported from somewhere, copy the number column in a new file",
  "Please note that the first line of the Excel file is not read, so you can use it to insert the title",
]);
const state = ref({
  selectedNumber: "",
  text: "",
  informations: [
    {
      label: "Correct numbers",
      value: 1,
    },
    {
      label: "Wrong numbers",
      value: 1,
    },
    {
      label: "Duplicate numbers",
      value: 1,
    },
    {
      label: "Internal numbers",
      value: 0,
    },
    {
      label: "Foreign numbers",
      value: 1,
    },
    {
      label: "shipping cost",
      value: 0.0079,
    },
  ],
  successes: [
    {
      label: "1 internal numbers $0.0079 0",
    },
    {
      label: "foreign numbers 0 $",
    },
  ],
});
const numberOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const currentStep = ref(0);

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};

//methods

const changeStepHandler = () => {
  if (currentStep.value == 1) currentStep.value++;
};
//onmounted

onMounted(() => {
  currentStep.value = 1;
});
</script>
