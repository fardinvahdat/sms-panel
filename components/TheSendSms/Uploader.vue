<template>
  <el-upload
    v-model:file-list="props.file"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :limit="1"
    drag
  >
    <el-button type="light" class="upload-btn"
      ><Icon name='upload' /> Click to upload</el-button
    > <div class="divider"></div> or Drag and Drop File Here
  </el-upload>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";

import { defineProps } from "vue";
const props = defineProps();
</script>

<style>
</style>