<template>
  <BaseLayout class="dashboard">
    <div
      class="d-flex justify-content-between align-items-center action-bar-table col-12"
    >
      <div class="d-flex">
        <button @click="isNewInsertVisible = true">+ Insert New</button>
        <el-input v-model="search" class="w-50 m-2" placeholder="Search">
          <template #suffix
            ><span class="filter"><Icon name="filter" /> </span
          ></template>
          <template #prefix><Icon name="search" /></template>
        </el-input>
      </div>
    </div>
    <FastTextsTable />
  </BaseLayout>
  <BaseDialog
    title="New Text"
    :isDialogOpen="isNewInsertVisible"
    okText="Add"
    cancelText="Cancel"
    class="medium-dialog"
    @close="isNewInsertVisible = false"
    @cancelClicked="isNewInsertVisible = false"
  >
    <InsertNewModal />
  </BaseDialog>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import InsertNewModal from "@/components/TheFastTexts/InsertNewModal.vue";
import FastTextsTable from "@/components/TheFastTexts/FastTextsTable.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
const isNewInsertVisible = ref(false);
const search = ref("");
</script>
