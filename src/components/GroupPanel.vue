<script lang="ts" setup>
import { computed } from 'vue';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue';

const props = defineProps(['groupData']);

const allOutletCount = computed(() =>
  props.groupData.groupStations.reduce(
    (partialSum, station) => partialSum + station.outletStatus.length,
    0
  )
);

const usedOutletCount = computed(() =>
  props.groupData.groupStations.reduce(
    (partialSum, station) =>
      partialSum +
      station.outletStatus.reduce(
        (innerSum, outlet) =>
          innerSum + (outlet.free? 0:1),
        0
      ),
    0
  )
);

const customColors = [
  { color: '#A4E49F', percentage: 60 },
  { color: '#FCF88D', percentage: 70 },
  { color: '#FFA447', percentage: 80 },
  { color: '#F28585', percentage: 90 },
  { color: '#D85353', percentage: 100 },
];
</script>

<template>
  <div>
    <el-row :gutter="20" align="middle">
      <el-col :span="8" :xs="24" style="text-align: center">
        <el-progress
          type="dashboard"
          stroke-width="8"
          :percentage="(usedOutletCount / allOutletCount) * 100"
          :color="customColors"
          style="padding-top: 10px;"
        >
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage.toFixed(0) }}%</span>
            <span class="percentage-label"
              >{{ usedOutletCount }} / {{ allOutletCount }} Used</span
            >
          </template>
        </el-progress>
      </el-col>
      <el-col :span="16" :xs="24">
        <el-row v-for="station in groupData.groupStations" style="margin-top:1px; margin-bottom:1px" align="middle">
          <el-col :span="3" class="centered-content" style="font-size:17.5px">#{{station.stationName.split(' ')[1][0]}}</el-col>
          <el-col :span="21">
          <el-scrollbar>
            <div class="scrollbar-flex-content">
              <span v-for="(outlet,index) in station.outletStatus">
              <p v-if="outlet.free" class="scrollbar-demo-item" style="background: #67C23A; color: #FAFAFA">{{Math.min(outlet.usedMin, 999)}}</p>
              <p v-else class="scrollbar-demo-item" style="background: #909399 ; color: #FAFAFA">{{outlet.usedMin}}</p>
              </span>
            </div>
          </el-scrollbar>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 21px;
  margin: 2px;
  text-align: center;
  border-radius: 2px;
}

</style>
