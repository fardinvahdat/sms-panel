<template>
  <div class="d-flex">
    <BaseSidebar></BaseSidebar>
    <el-container class="d-flex">
      <el-header class="layout-header" :class="isSidebarCollapsed && 'fix-wrapper'">
        <BaseHeader />
      </el-header>
      <el-main :class="isSidebarCollapsed && 'fix-wrapper'">
        <NuxtPage />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import BaseSidebar from "@/components/TheSidebar/BaseSidebar.vue";
import BaseHeader from "@/components/TheHeader/BaseHeader.vue";
const isSidebarCollapsed = useSidebar();
</script>

<style>
</style>