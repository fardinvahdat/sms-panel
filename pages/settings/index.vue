<template>
  <BaseLayout class="dashboard settings">
    <!-- alerts -->
    <div class="step-1" v-if="currentStep == 1">
      <div class="col-12 mt-0">
        <form>
          <section class="number form-item">
            <p class="label">Default number</p>
            <el-select
              v-model="sendSmsState.defaultNumber"
              class="select-box"
              placeholder="Default number"
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
          <section class="send-text form-item">
            <p class="label">Authorized IP to login</p>
            <textarea
              name="sms-text"
              cols="10"
              rows="3"
              v-model="sendSmsState.authorizedIP"
            >
            </textarea>
          </section>
          <el-divider />
          <section class="test-send form-item">
            <h4 class="label">Minimum charge warning</h4>
            <p class="label">Minimum charge (The number of SMS)</p>
            <div class="test">
              <input
                type="number"
                min="0"
                placeholder="Minimum charge (The number of SMS)"
                v-model="sendSmsState.minChargeWarning"
              />
            </div>
          </section>
          <section class="test-send form-item">
            <p class="label">Email</p>
            <div class="test">
              <input
                type="email"
                placeholder="Email"
                v-model="sendSmsState.email"
              />
            </div>
          </section>
          <el-divider />
          <section class="test-send form-item">
            <h4 class="label">Authorized hour to login</h4>
            <div class="d-flex g-20 double-column">
              <div class="w-50 form-item">
                <p class="label">From</p>
                <el-time-picker
                  v-model="sendSmsState.fromTime"
                  format="HH:mm"
                  placeholder="From"
                  class="date-picker"
                  id="FromTime"
                  :prefix-icon="ClockBlue"
                />
              </div>
              <div class="w-50 form-item">
                <p class="label">To</p>
                <el-time-picker
                  v-model="sendSmsState.toTime"
                  format="HH:mm"
                  placeholder="To"
                  class="date-picker"
                  id="FromTime"
                  :prefix-icon="ClockBlue"
                />
              </div>
            </div>
          </section>
          <el-divider />
          <div class="form-item">
            <el-checkbox
              v-model="sendSmsState.isNotifAllowed"
              label="I will be notified by SMS when entering the system (the cost of sending SMS will be deducted from your credit.)"
              size="large"
            />
          </div>
        </form>
      </div>
    </div>
    <template v-slot:footer
      ><el-footer class="text-right">
        <div class="footer">
          <button class="primary">Confirm</button>
        </div>
      </el-footer></template
    >
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import { ref } from "vue";

//state

const sendSmsState = ref({
  defaultNumber: "",
  authorizedIP: "",
  minChargeWarning: 0,
  email: "",
  fromTime: "",
  toTime: "",
  isNotifAllowed: false,
});
const numberOptions = [
  {
    value: "+012548754",
    label: "+012548754",
  },
];
const currentStep = ref(1);

//methods

const changeStepHandler = () => {
  if (currentStep.value == 1) currentStep.value++;
};
</script>
    