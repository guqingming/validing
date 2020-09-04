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

## 如果不在element-ui中使用，可在js中直接使用函数验证

```js
import validing, { isPhoneNumber, isNumber } from 'validing'

isPhoneNumber('18113727957')
// true
validing.isNumber('2.')
// false
```

## 方法校验

| 事件名     | 说明       | 参数列表 | 回调数据 |
| ---------- | ---------- | -------- | -------- |
| isBooblean | 是否布尔值 | value 验证值 | Boolean |
| isString | 是否字符串 | value 验证值 | Boolean  |
| isNumber | 是否数字 | value 验证值 | Boolean  |
| isDecimal | 验证小数位数 | value 验证值<br>length 数量 默认值2 | Boolean  |
| isHaveValue | 是否含有有效值 | value 验证值 | Boolean  |
| isPhoneNumber | 是否手机号码 | value 验证值 | Boolean  |
| isRangeNumber | 是否有效的数字区间 | value 验证值 | Boolean  |
| isStartStr | 是否某个字符串开头 | value 验证值<br>str 字符串 | Boolean  |
| isEndStr | 是否某个字符串结尾 | value 验证值<br>str 字符串 | Boolean  |
| isEmail | 是否邮箱 | value 验证值 | Boolean  |
| isPostcode | 是否邮编 | value 验证值 | Boolean  |
| isIDCardNo | 是否身份证号码 | value 验证值<br>type 类型<br>    0 一代或二代<br>    1 一代<br>    2 二代(默认值) |Boolean|
| isQQ | 是否QQ号 | value 验证值 | Boolean  |
| isWeixin | 是否微信号 | value 验证值 | Boolean  |
| isCarNo | 是否车牌号码 | value 验证值 | Boolean  |
| isChineseName | 是否中文姓名<br>2-4个中文汉字 | value 验证值 | Boolean  |
| isUserName | 是否用户名<br>字母开头，允许3-16个字符，字母数字下划线 | value 验证值 | Boolean  |
| isPassword | 是否密码 | value 验证值<br>type 类型<br>    1 弱(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)<br>    2 强(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-18之间) | Boolean  |
| isNo | 是否编码<br>数字英文的组合 | value 验证值 | Boolean  |

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

## Rules参数说明

| 方法 | 方法释义 | 配置参数 | 参数释义 | 可选值 | 默认值 |
| ------------- | ------------ | -------- | ------------ | ----------------------------------------- | ------ |
| validatePhone | 验证电话号码 | required | 是否必填 | Boolean | false |
| | | type | 电话号码类型 | Number<br>    0 手机号码or座机号码 <br>    1 手机号码<br>    2 座机号码 | 0 |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateNumber | 验证数字 | required | 是否必填 | Boolean | false |
| | | range | 数字区间 | String<br>    格式如[0,-]<br>    []代表包含此数字，()代表不包含此数字，-代表不限制<br>    小数在前，大数在后 | [0,-] |
| | | decimal | 小数的位数 | Number | 0 |
| | | strict | 小数是否严格模式 | Boolean<br>    非严格模式时整数不做小数位数校验 | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateSpace | 验证首尾是否含有空格 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateWebsite | 验证是否有效网址 | required | 是否必填 | Boolean | false |
| | | protocols | 允许的网站协议 | Array | ['http', 'https', 'ftp', 'sftp', 'mailto', 'tel'] |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateMail | 验证邮箱 | required | 是否必填 | Boolean | false |
| | | maxLength | 字符的最大长度 | Number | 60 |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validatePostcode | 验证邮编 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateIDCardNo | 验证身份证号码 | required | 是否必填 | Boolean | false |
| | | type | 身份证号码类型 | Number<br>    0 一代或二代<br>    1 一代<br>    2 二代 | 0 |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateQQ | 验证QQ号 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateWeixin | 验证微信号 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateCarNo | 验证车牌号码 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateChineseName | 验证中文姓名<br>2-4个中文汉字 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateUserName | 验证用户名<br>字母开头，允许3-16个字符，字母数字下划线 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validatePassword | 验证密码 | required | 是否必填 | Boolean | false |
| | | type | 密码强度 | Number<br>    1 弱(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)<br>    2 强(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-18之间) | 1 |
| | | tip | 错误提示 | String | 按情景提示具体错误 |
| validateNo | 验证编码<br>数字和英文的组合 | required | 是否必填 | Boolean | false |
| | | tip | 错误提示 | String | 按情景提示具体错误 |

