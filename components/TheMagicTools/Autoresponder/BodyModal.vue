<template>
  <form>
    <div class="f-item">
      <label for="title">Title</label>
      <input
          type="text"
          id="title"
          v-model="state.title"
      />
    </div>


    <div class="form-item">
      <label for="Receiver">Receiver Number</label>
      <el-select
          v-model="state.receiver"
          class="select-box"
          size="large"
          id="Receiver"
      >
        <el-option
            v-for="receiver in receiverOptions"
            :key="receiver.value"
            :label="receiver.label"
            :value="receiver.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Sender">Sender Number</label>
      <el-select
          v-model="state.sender"
          class="select-box"
          size="large"
          id="Sender"
      >
        <el-option
            v-for="sender in senderOptions"
            :key="sender.value"
            :label="sender.label"
            :value="sender.value"
        />
      </el-select>
    </div>

    <div class="form-item">
      <label for="SaveTo">Save to</label>
      <el-select
          v-model="state.saveTo"
          class="select-box"
          size="large"
          id="SaveTo"
      >
        <el-option
            v-for="saveTo in saveToOptions"
            :key="saveTo.value"
            :label="saveTo.label"
            :value="saveTo.value"
        />
      </el-select>
    </div>


    <h4 class="mt-3 mb-3">Apply Period of Time</h4>

    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label for="FromTime">From</label>
        <el-time-picker
            v-model="state.fromTime"
            format="HH:mm"
            placeholder="Pick a time"
            class="date-picker"
            id="FromTime"
            :prefix-icon="ClockBlue"
        />
      </div>
      <div class="f-item w-75 mb-0">
        <el-date-picker
            v-model="state.fromDate"
            type="date"
            placeholder="From Date"
            :default-value="new Date(2010, 9, 1)"
            class="date-picker"
            id="FromDate"
            :prefix-icon="CalendarBlue"
        />
      </div>
    </div>
    <div class="double-colun align-items-end form-item">
      <div class="f-item w-25 mb-0">
        <label for="ToTime">To</label>
        <el-time-picker
            v-model="state.toTime"
            format="HH:mm"
            placeholder="Pick a time"
            class="date-picker"
            id="ToTime"
            :prefix-icon="ClockBlue"
        />
      </div>
      <div class="f-item w-75 mb-0">
        <el-date-picker
            v-model="state.toDate"
            type="date"
            placeholder="To Date"
            :default-value="new Date(2010, 9, 1)"
            class="date-picker"
            id="ToDate"
            :prefix-icon="CalendarBlue"
        />
      </div>
    </div>

    <div class="send-text form-item">
      <label for="SMSText">SMS Text</label>
      <textarea
          id="SMSText"
          cols="30"
          rows="10"
          v-model="state.SMSText"
      ></textarea>
      <p class="counter" :class="state.SMSText.length > 160 && 'error'">
        {{ state.SMSText.length }} / 160
      </p>
    </div>

  </form>
</template>





<script setup>
import {ref} from 'vue'
import Uploader from "@/components/TheSendSms/Uploader.vue";
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";

const state = ref({
  title: "",
  receiver: "",
  sender: "",
  saveTo: "",
  fromDate: "",
  toDate: "",
  fromTime: "",
  toTime: "",
  SMSText: '',
});


const receiverOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const senderOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const saveToOptions = [
  {
    value: "Reciver",
    label: "Reciver",
  },
];

</script>





