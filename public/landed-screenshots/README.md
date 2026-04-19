# 已上岸列表截图说明

将截图放入本目录，并在 `src/components/LandedListSection.tsx` 的 `screenshots` 数组中登记 `imageUrl` 与 `description`。

## 文件命名

当前使用 `image1.png` … `image12.png`。新增建议顺延为 `image13.png`、`image14.png`，避免重名覆盖。

## 格式

支持 PNG、JPG、WebP 等浏览器常见格式。

## 示例

```typescript
{
  id: 13,
  imageUrl: '/landed-screenshots/image13.png',
  alt: '学员成果截图',
  description: '原xxx，现xxx',
}
```
