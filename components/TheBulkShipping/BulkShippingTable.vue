<template>
  <el-table
    ref="multipleTableRef"
    :data="test"
    :class="multipleSelection.length ? 'expanded' : ''"
    class="table base-selction-table w-100"
    @selection-change="handleSelectionChange"
    v-if="tableData.length"
  >
    <el-table-column type="selection"></el-table-column>

    <el-table-column property="order" label="order"
      ><template #header v-if="multipleSelection.length">
        <div class="d-flex align-items-center">
          {{ multipleSelection.length }} SMS Selected
        </div>
      </template></el-table-column
    >
    <el-table-column property="Title" label="Title"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="SMS" label="SMS"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Part" label="Part" show-overflow-tooltip
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="SendTime" label="SendTime"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Cost" label="Cost"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Quantity" label="Quantity"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Send" label="Send"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="NotSend" label="NotSend"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="SendStatus" label="SendStatus"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column property="Status" label="Status"
      ><template #header v-if="multipleSelection.length"> </template
    ></el-table-column>
    <el-table-column width="20">
      <template #header v-if="multipleSelection.length">
        <div class="flex-row d-flex actions">
          <span class="d-flex align-items-center">
            <Icon name="printer" /> Print
          </span>
          <div class="divider"></div>
          <span class="d-flex align-items-center">
            <Icon name="upload" /> Export Excel
          </span>
          <div class="divider"></div>
          <span
            class="d-flex align-items-center pointer"
            @click="confirmMultipleDeleteState.isDialogOpen = true"
          >
            <Icon name="trash-blue" /> Delete
          </span>
        </div>
      </template>
      <template #default="scope">
        <el-dropdown placement="left">
          <button class="none">
            <Icon name="dots" />
          </button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"
                ><Icon name="refresh" /> Refresh</el-dropdown-item
              >
              <el-dropdown-item @click="deleteRow(scope.row)"
                ><Icon name="download" /> Download Report</el-dropdown-item
              >
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"
                ><Icon name="chart" /> Show Report
              </el-dropdown-item>
              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"
                ><Icon name="undo" /> Resend unsent
              </el-dropdown-item>

              <el-dropdown-item @click="handleDelete(scope.$index, scope.row)"
                ><Icon name="edit" /> Edit</el-dropdown-item
              >
              <el-dropdown-item @click="deleteRow(scope.row)"
                ><Icon name="trash" /> Delete</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></template
      >
    </el-table-column>
  </el-table>
  <Pagination
    v-if="tableData.length"
    :total="tableData.length"
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    @itemPerPage="itemPerPage = $event"
    @currentPage="currentPage = $event"
  />
  <NoData v-if="tableData.length == 0" />
  <ConfirmModal
    :state="confirmDeleteState"
    @confirm="deleteItemHandler"
    @cancel="confirmDeleteState.isDialogOpen = false"
  />
  <ConfirmModal
    :state="confirmMultipleDeleteState"
    @confirm="deleteSelectionHandler"
    @cancel="confirmMultipleDeleteState.isDialogOpen = false"
  />
</template>

<script setup>
import ConfirmModal from "@/components/TheConfirmModal/ConfirmModal.vue";
import NoData from "@/components/TheEmptyTable/NoData.vue";
import Pagination from "@/components/ThePagination/Pagination.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref, computed } from "vue";
import { ElTable } from "element-plus";

//state

const itemPerPage = ref(5);
const currentPage = ref(1);
const multipleTableRef = ref();
const multipleSelection = ref([]);
const stagedItemToEdit = ref(null);
const tableData = ref([
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
  {
    order: 1,
    Title: "Test",
    SMS: "Send Timer",
    Part: 1,
    SendTime: "12:56 2023/5/19",
    Cost: "2 SMS",
    Quantity: 2,
    Send: 2,
    NotSend: 0,
    SendStatus: "Active",
    Status: "Active",
  },
]);
const confirmDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: "Are you sure?",
});
const confirmMultipleDeleteState = ref({
  type: "danger",
  confirmText: "Yes",
  cancelText: "Cancel",
  isDialogOpen: false,
  title: "Delete message",
  content: `Are you sure to delete ${multipleSelection.value.length} message?`,
});
const stagedItemToDelete = ref(null);

// computed

const test = computed(() => {
  const trimStart = (currentPage.value - 1) * itemPerPage.value;
  const trimEnd = trimStart + itemPerPage.value;
  return tableData.value.slice(trimStart, trimEnd);
});

//methods

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
const deleteItemHandler = () => {
  tableData.value = tableData.value.filter(
    (data) => data !== stagedItemToDelete.value
  );
  confirmDeleteState.value.isDialogOpen = false;
};
const deleteRow = (row) => {
  stagedItemToDelete.value = row;
  confirmDeleteState.value.isDialogOpen = true;
};
const deleteSelectionHandler = () => {
  tableData.value = tableData.value.filter(
    (data) => !multipleSelection.value.find((select) => select == data)
  );
  confirmMultipleDeleteState.value.isDialogOpen = false;
};
</script>
