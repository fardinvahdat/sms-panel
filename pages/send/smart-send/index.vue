<template>
  <BaseLayout class="dashboard smart-send">
    <div class="wrapper-content">
      <div class="step-1" v-if="currentStep == 1">
        <InfoBox
          :infoOptions="infoOptionStep1"
          :title="'Guide'"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        />
        <h4
          class="label"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        >
          Excel file number and information
        </h4>
        <Uploader v-motion :initial="initial" :enter="enter" :delay="200" />
      </div>
      <div class="step-2" v-if="currentStep == 2">
        <InfoBox
          :infoOptions="infoOptionStep2"
          :title="'Guide'"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        />
        <div
          class="form-item"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        >
          <p class="label mt-0">Your Number</p>
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
        </div>
        <h4
          class="label"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        >
          The columns in the Excel file
        </h4>
        <el-radio-group
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
          v-model="state.column"
          size="large"
          @change="addToSmsText"
        >
          <el-radio-button label="Lorem Columns 1" />
          <el-radio-button label="Lorem Columns 2" />
          <el-radio-button label="Lorem Columns 3" />
        </el-radio-group>
        <div
          class="form-item"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        >
          <p class="label">SMS Text</p>
          <textarea
            name="sms-text"
            id="SmsText"
            cols="60"
            rows="10"
            v-model="state.smsText"
          >
          </textarea>
          <p class="counter" :class="state.smsText.length > 160 && 'error'">
            {{ state.smsText.length }} / 160
          </p>
        </div>
        <div
          class="form-item pt-0"
          v-motion
          :initial="initial"
          :enter="enter"
          :delay="200"
        >
          <el-checkbox
            label="Access to subcategory users"
            v-model="state.sendDuplicate"
            >Sending to duplicate numbers is allowed</el-checkbox
          >
        </div>
      </div>
    </div>
    <template v-slot:footer
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
import Uploader from "@/components/TheSendSms/Uploader.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import NewSendModal from "@/components/TheCorrespondingToTime/NewSendModal.vue";
import { ref } from "vue";

//state

const state = ref({
  selectedNumber: "",
  column: 0,
  smsText: "",
  sendDuplicate: false,
});
const dialogVisible = ref(false);
const infoOptionStep1 = ref([
  "This section allows you to consider a corresponding text for each number and send it at once",
  "Your input Excel file should contain two columns of numbers and SMS text like the sample file (download the sample file)",
  "Pay attention that the name of the table where the numbers are located should be Sheet1",
  "If this file has been exported from somewhere, copy the number column in a new file",
  "Please note that the first line of the Excel file is not read, so you can use it for the title",
  "After selecting the file, click the Send button to send each SMS to its corresponding number",
]);
const infoOptionStep2 = ref([
  "To insert each column of the Excel file in the SMS text, please put the necessary space after the selected column.",
]);
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
const addToSmsText = (e) => {
  state.value.smsText += e + " ";
  state.value.column = 0;
};
//onmounted

onMounted(() => {
  currentStep.value = 1;
});
</script>
