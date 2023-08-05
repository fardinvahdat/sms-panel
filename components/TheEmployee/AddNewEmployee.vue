<template>
  <form class="add-new-emplyee">
    <div class="form-item">
      <label
        for="Name"
        class="d-flex align-items-center justify-content-between"
        >Name <Icon name="important"
      /></label>
      <input type="text" id="Name" placeholder="Name" v-model="state.name" />
    </div>
    <div class="form-item">
      <label
        for="LastName"
        class="d-flex align-items-center justify-content-between"
        >Last Name <Icon name="important"
      /></label>
      <input
        type="text"
        id="LastName"
        placeholder="Last Name"
        v-model="state.lastName"
      />
    </div>
    <div class="form-item">
      <label
        for="Email"
        class="d-flex align-items-center justify-content-between"
        >Email <Icon name="important"
      /></label>
      <input
        type="email"
        id="Email"
        placeholder="Email"
        v-model="state.email"
      />
    </div>
    <div class="form-item select-country">
      <el-input
        v-model="state.mobile.value"
        placeholder="Mobile"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="state.mobile.type" placeholder="Select">
            <el-option label="USA" value="USA"
              ><template #default><Icon :name="state.mobile.type" /></template
            ></el-option>
          </el-select>
        </template>
      </el-input>
    </div>
    <div class="form-item">
      <label for="CompanyName" class="">Company Name </label>
      <input
        type="text"
        id="CompanyName"
        placeholder="Company Name"
        v-model="state.companyName"
      />
    </div>
    <div class="form-item">
      <p class="label mt-0">Country</p>
      <el-select
        v-model="state.country"
        class="select-box"
        placeholder="Country"
        size="large"
      >
        <el-option
          v-for="country in countryOptions"
          :key="country.value"
          :label="country.label"
          :value="country.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <p class="label mt-0">State</p>
      <el-select
        v-model="state.state"
        class="select-box"
        placeholder="State"
        size="large"
      >
        <el-option
          v-for="state in stateOptions"
          :key="state.value"
          :label="state.label"
          :value="state.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <p class="label mt-0">City</p>
      <el-select
        v-model="state.city"
        class="select-box"
        placeholder="City"
        size="large"
      >
        <el-option
          v-for="city in cityOptions"
          :key="city.value"
          :label="city.label"
          :value="city.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label
        for="zipcode"
        class="d-flex align-items-center justify-content-between"
        >Zipcode
      </label>
      <input
        type="text"
        id="zipcode"
        placeholder="Zipcode"
        v-model="state.zipcode"
      />
    </div>
    <div class="send-text form-item">
      <p class="label mt-0">Address</p>
      <textarea
        name="sms-text"
        id="address"
        cols="60"
        rows="10"
        v-model="state.address"
      >
      </textarea>
    </div>
    <div class="send-text form-item">
      <p class="label mt-0">Description</p>
      <textarea
        name="sms-text"
        id="Description"
        cols="60"
        rows="10"
        v-model="state.description"
      >
      </textarea>
    </div>
    <div class="form-item" :key="counter">
      <label class="">Password </label>
      <el-input
        v-model="state.password.text"
        class=""
        :type="state.password.isVisible ? 'text' : 'password'"
        placeholder="Password"
      >
        <template #suffix
          ><span
            class="icon-password"
            @click="
              state.password.isVisible = !state.password.isVisible;
              counter++;
            "
            ><Icon :name="state.password.isVisible ? 'eye-slash' : 'eye'"
          /></span>
        </template>
      </el-input>
    </div>
    <div class="form-item" :key="counter">
      <label class="">Password again </label>
      <el-input
        v-model="state.passwordagain.text"
        class=""
        :type="state.passwordagain.isVisible ? 'text' : 'password'"
        placeholder="Password again"
      >
        <template #suffix
          ><span
            class="icon-password"
            @click="
              state.passwordagain.isVisible = !state.passwordagain.isVisible;
              counter++;
            "
            ><Icon :name="state.passwordagain.isVisible ? 'eye-slash' : 'eye'"
          /></span>
        </template>
      </el-input>
    </div>
    <div class="form-item">
      <label for="sendLimit" class="">Send Limit </label>
      <input
        type="number"
        id="sendLimit"
        placeholder="Send Limit"
        v-model="state.sendLimit"
      />
    </div>
    <div class="form-item">
      <label for="DailyLimit" class="">Daily Limit </label>
      <input
        type="number"
        id="DailyLimit"
        placeholder="Daily Limit"
        v-model="state.dailyLimit"
      />
    </div>
    <div class="form-item">
      <label for="FromDate">Expiration</label>
      <el-date-picker
        v-model="state.expiration"
        type="date"
        placeholder="Expiration"
        :default-value="new Date(2010, 9, 1)"
        class="date-picker"
        id="FromDate"
        :prefix-icon="CalendarBlue"
      />
    </div>
    <el-divider />
    <div class="form-item">
      <el-checkbox
        v-model="state.isSend"
        label="Send username, password and panel address to the user's mobile phone and email"
        size="large"
      />
    </div>
    <div class="form-item">
      <label for="title" class="">Title </label>
      <input type="text" id="title" placeholder="Title" v-model="state.title" />
    </div>
    <div class="send-text form-item">
      <p class="label mt-0">Text</p>
      <textarea
        name="sms-text"
        id="SmsText"
        cols="60"
        rows="10"
        v-model="state.text"
      >
      </textarea>
    </div>
  </form>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import { ref } from "vue";

//state

const state = ref({
  name: "",
  lastName: "",
  email: "",
  mobile: {
    value: "",
    type: "usa-flag",
  },
  companyName: "",
  country: "",
  state: "",
  city: "",
  zipcode: "",
  address: "",
  description: "",
  password: {
    text: "",
    isVisible: false,
  },
  passwordagain: {
    text: "",
    isVisible: false,
  },
  sendLimit: 0,
  dailyLimit: 0,
  expiration: "",
  isSend: false,
  title: "",
  text: "",
});
const countryOptions = [
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "Iran",
    label: "Iran",
  },
  {
    value: "Turkey",
    label: "Turkey",
  },
];
const stateOptions = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const cityOptions = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const counter = ref(0);
</script>
