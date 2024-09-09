<script setup>
import { ref } from 'vue';
import GroupPanel from './GroupPanel.vue';
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const allData = ref(null);
fetch(
  'https://eastasia.azure.data.mongodb-api.com/app/application-0-skgpp/endpoint/realtime_v2',
)
  .then((response) => response.json())
  .then((data) => (allData.value = data.result))
</script>

<template>
  <div v-for="groupData in allData">
    <el-card class="box-card" style="margin-bottom: 10px" shadow="hover">
      <template #header>
        <div class="card-header">
          <span style="font-size: 18px"><strong>{{groupData.groupName}}</strong></span>
        
          <span class="flex-grow"></span>
          [{{dayjs.unix(groupData.timestamp).fromNow()}}]
        </div>
      </template>
      <GroupPanel :groupData="groupData" />
    </el-card>
  </div>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
