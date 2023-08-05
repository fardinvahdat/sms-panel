<template>
  <form>
    <div class="form-item">
      <label class="d-flex align-items-center justify-content-between"
        >Tittle
      </label>
      <input type="text" placeholder="Tittle " v-model="state.title" />
    </div>
    <div class="form-item">
      <label>Text </label>
      <textarea placeholder="Text " rows="8" v-model="state.text"></textarea>
      <label>{{ state.text.length }} / 160 </label>
    </div>
  </form>
</template>

<script setup>
//state

const state = ref({
  title: "",
  text: "",
});
</script>

<style>
</style>