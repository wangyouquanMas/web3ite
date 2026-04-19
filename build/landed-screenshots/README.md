# 已上岸列表截图说明

请将已上岸朋友的聊天截图放在此目录中。

## 文件命名规范
- screenshot1.jpg
- screenshot2.jpg
- screenshot3.jpg
- ...

## 图片格式
支持 JPG、PNG 等常见图片格式。

## 使用方法
1. 将截图文件放入 `public/landed-screenshots/` 目录
2. 在 `src/components/LandedListSection.tsx` 中更新 `screenshots` 数组，添加对应的图片路径和描述

## 示例
```typescript
{
  id: 1,
  imageUrl: '/landed-screenshots/screenshot1.jpg',
  alt: '已上岸朋友截图1',
  description: 'sean 成功转正'
}
```


