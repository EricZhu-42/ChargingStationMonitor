<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus'

const activeIndex = ref('0');
const handleSelect = (key: string, keyPath: string[]) => {
};
const dialogVisible = ref(false)
</script>

<template>
  <el-menu
    mode="horizontal"
    :ellipsis="false"
    :default-active="activeIndex"
    @select="handleSelect"
  >
    <el-menu-item index="0">南哪充电</el-menu-item>
    
    <div class="flex-grow" />
    <el-menu-item index="1" @click="dialogVisible = true">使用说明</el-menu-item>
    <el-menu-item index="2">
      <div style="display: flex; align-items: center;">
        <a href="https://github.com/EricZhu-42/ChargingStationMonitor" style="display: flex">
          <img style="height: 30px" src="/src/assets/github-mark.svg"/>
        </a>
      </div>
    </el-menu-item>
  </el-menu>

  <el-dialog
    v-model="dialogVisible"
    title="使用说明"
    width="375px"
  >
    <div>
    <span class="scrollbar-demo-item" style="background: #67C23A; color: #FAFAFA; display: inline-flex">X</span> 表示对应充电口已空闲 X 分钟
    <br/>
    <span class="scrollbar-demo-item" style="background: #DF6523 ; color: #FAFAFA; display: inline-flex">Y</span> 表示对应充电口已充电 Y 分钟
    <br/>
    <span class="scrollbar-demo-item" style="background: #909399 ; color: #FAFAFA; display: inline-flex">Z</span> 表示对应充电口已维护 Z 分钟 
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button size="large" @click="dialogVisible = false">确定</el-button>
      </div>
    </template>
  </el-dialog>

</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
