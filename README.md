# validing

## 验证规则集合，可直接用于vue-element-ui中的rules

- **[作者邮箱：15524261@qq.com](mailto:15524261@qq.com)**
- **[github项目地址：https://github.com/guqingming/validing](https://github.com/guqingming/validing)**
- **[码云项目地址：https://gitee.com/mycssweb/validing](https://gitee.com/mycssweb/validing)**

## 截图

![1](https://gitee.com/mycssweb/validing/raw/master/docs/1.png)

![2](https://gitee.com/mycssweb/validing/raw/master/docs/2.png)

## 安装

```bash
$ npm install validing
```

## el-form中rules使用方法，遵循element-ui中使用规格

```js
import Vue from 'vue'
import validing from 'validing'

rules = {
  tel: [
    { validator: validing.rules.validatePhone(
      {
        required: true
      }
    ), trigger: 'blur' }
  ],
  number: [
    { validator: validing.rules.validateNumber(
      {
        required: false,
        range: '[-2,100)',
        decimal: 2,
        strict: false,
        name: '金额'
      }
    ), trigger: 'blur' }
  ],
  space: [
    { validator: validing.rules.validateSpace(
      {
        required: false
      }
    ), trigger: 'blur' }
  ],
  website: [
    { validator: validing.rules.validateWebsite(
      {
        required: false,
        protocols: ['http']
      }
    ), trigger: 'blur' }
  ]
}
```

## 如果不在element-ui中使用，可在js中直接使用函数验证

```js
import validing, { isPhoneNumber, isNumber } from 'validing'

isPhoneNumber('18113727957')
// true
validing.isNumber('2.')
// false
```

## 参数说明

| 字段名        | 字段类型 | 默认值                   | 说明                       |
| ------------- | -------- | ------------------------ | -------------------------- |
| width         | number   | 340                      | 长度                       |
| height        | number   | 36                       | 宽度                       |
| borderColor   | string   | #e4e4e4                  | 边框颜色                   |
| bgColor       | string   | #f2f3f5                  | 背景颜色                   |
| borderRadius  | number   | 4                        | 圆角大小                   |
| tips          | string   | 请按住滑块，拖动到最右边 | 提示文案                   |
| barBackground | string   | 默认图片                 | 滑块的背景颜色，可以是图片 |
| movedColor    | string   | 默认颜色                 | 滑过的颜色                 |
| successTips   | string   | 完成验证                 | 成功文案                   |
| successIcon   | string   | 默认图片                 | 成功后的图标               |


## 事件

| 事件名  | 说明                 | 回调参数 |
| ------- | -------------------- | -------- |
| success | 验证完成后的回调函数 | -        |

## 方法

| 事件名 | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| reset  | 使验证器重置为初始状态 | -    |
