<template>
  <BaseLayout class="dashboard employees">
    <div class="d-flex action-bar-table col-12 flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <el-input
          v-model="search"
          class="w-50 mw-0 search-field"
          placeholder="Search"
        >
          <template #suffix
            ><span class="filter"><Icon name="filter" /> </span
          ></template>
          <template #prefix><Icon name="search" /></template>
        </el-input>
        <button type="button" @click="isNewEmplyeeVisible = true">
          + Add New Employees
        </button>
      </div>
    </div>
    <EmployeeTable />
    <BaseDialog
      :title="'Advanced Search'"
      :isDialogOpen="isAdvancedSearchVisible"
      okText="Search"
      cancelText="Cancel"
      class="medium-dialog"
      @close="isAdvancedSearchVisible = false"
      @cancelClicked="isAdvancedSearchVisible = false"
    >
      <AdvanceSearchModal />
    </BaseDialog>
    <BaseDialog
      :title="'Add New Employees'"
      :isDialogOpen="isNewEmplyeeVisible"
      okText="Search"
      cancelText="Cancel"
      class="medium-dialog base-modal"
      @close="isNewEmplyeeVisible = false"
      @cancelClicked="isNewEmplyeeVisible = false"
    >
      <AddNewEmployee />
    </BaseDialog>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import AdvanceSearchModal from "@/components/TheRecieve/AdvanceSearchModal.vue";
import EmployeeTable from "@/components/TheEmployee/EmployeeTable.vue";
import AddNewEmployee from "@/components/TheEmployee/AddNewEmployee.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const isNewEmplyeeVisible = ref(false);
const isAdvancedSearchVisible = ref(false);
const search = ref("");
const state = ref({
  folder: "",
});

//methods
</script>
