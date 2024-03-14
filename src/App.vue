<script setup lang="ts">
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyMain from './components/MyMain.vue';
import GroupPanel from './components/GroupPanel.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><MyHeader /></el-header>
      <el-container>
        <el-container>
          <el-main><MyMain /></el-main>
          <el-footer><MyFooter /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
