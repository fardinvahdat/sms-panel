<template>
  <InfoBox
    :infoOptions="infoOptions"
    :title="'Guide'"
    class="mb-3"
    v-motion
    :initial="initial"
    :enter="enter"
    :delay="200"
  />
  <ManageGroupTable v-motion :initial="initial" :enter="enter" :delay="200" />
  <h5 class="label" v-motion :initial="initial" :enter="enter" :delay="200">
    Add New Group
  </h5>
  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <label for="fullName">Name</label>
    <input
      type="text"
      placeholder="Name"
      id="Name"
      v-model="manageGroupState.name"
    />
  </div>
  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <label for="Description">Description</label>
    <textarea
      id="Description"
      cols="30"
      rows="10"
      v-model="manageGroupState.description"
      placeholder="Description"
    ></textarea>
  </div>

  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <el-checkbox
      label="Access to subcategory users"
      v-model="manageGroupState.access"
      >Access to subcategory users</el-checkbox
    >
    <button type="button" class="primary">Add Group</button>
  </div>

  <h5 class="label" v-motion :initial="initial" :enter="enter" :delay="200">
    Merge Group
  </h5>

  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <label for="sourceGroup">Source group</label>
    <el-select
      v-model="manageGroupState.sourceGroup"
      class="select-box"
      placeholder="Source  group"
      size="large"
      id="sourceGroup"
    >
      <el-option
        v-for="sourceGroup in sourceGroups"
        :key="sourceGroup.value"
        :label="sourceGroup.label"
        :value="sourceGroup.value"
      />
    </el-select>
  </div>
  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <label for="sourceGroup">Destinition group</label>
    <el-select
      v-model="manageGroupState.destinitionGroup"
      class="select-box"
      placeholder="Source  group"
      size="large"
      id="sourceGroup"
    >
      <el-option
        v-for="destinition in destinitionGroups"
        :key="destinition.value"
        :label="destinition.label"
        :value="destinition.value"
      />
    </el-select>
  </div>
  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <el-checkbox
      label="Delete the Source group"
      v-model="manageGroupState.access"
      >Delete the Source group</el-checkbox
    >
  </div>
</template>

<script setup>
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import ManageGroupTable from "@/components/TheSendSms/ManageGroupTable.vue";
import { ref } from "vue";

//state

const infoOptions = ref([
  "By deleting a group automatically, only contacts who are members of this group will be deleted, and if a contact is a member of several groups, it will not be deleted.",
  ". If you check the Access to subcategory users box, your phone book will be displayed in the panel of all subusers.",
]);
const manageGroupState = ref({
  name: "",
  access: false,
  sourceGroup: "",
  description: "",
  destinitionGroup: "",
});
const sourceGroups = [
  {
    value: "Group 1",
    label: "Group 1",
  },
  {
    value: "Group 2",
    label: "Group 2",
  },
];
const destinitionGroups = [
  {
    value: "Group 1",
    label: "Group 1",
  },
  {
    value: "Group 2",
    label: "Group 2",
  },
];

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
</script>
