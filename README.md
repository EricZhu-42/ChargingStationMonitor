# 南哪充电

南京大学 (Nanjing Univerisity) 校内充电站状态监测系统（仅前端部分）

访问地址：https://charge.zhuxh.net/

## 功能介绍

显示南京大学仙林校区内所有电动车充电站的占用及维护状态，约 3 分钟完整更新一次。

包含 “已占用时间” “已空闲时间” 等细节信息。

> 为减小请求量，自 2024/04/26 起 “已占用时间” 等功能通过对比历史数据实现，可能与实际情况存在误差，仅供参考。

## 开发计划
> 不一定真的会做（

- [x] 添加充电站维护检测
- [ ] 支持鼓楼/浦口/苏州校区（可能需要当地的同学配合，有兴趣的同学可以[联系我](mailto:zhuxinhao00@gmail.com)）
- [ ] 历史趋势分析
- [ ] 空闲预测
- [ ] 显示效果优化

## DataDump

充电站状态历史数据可以在 [GoogleDrive](https://drive.google.com/drive/folders/1ubZtjE4W07P0NRi36K2cR8D7opyey2b3?usp=sharing) 免费获得。

## 致谢

[Vercel](https://vercel.com/) & [MongoDB Atlas](https://www.mongodb.com/zh-cn/atlas/database)

