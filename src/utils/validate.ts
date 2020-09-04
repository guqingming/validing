/**
 * 是否布尔值
 */
export function isBooblean(value: any) {
  return typeof value === 'boolean'
}

/**
 * 是否字符串
 */
export function isString(value: any) {
  return typeof value === 'string'
}

/**
 * 验证数组
 */
export function isArray(value: any) {
  return Array.isArray(value)
}

/**
 * 是否含有有效值
 */
export function isHaveValue(value: any): boolean {
  if (typeof value === 'undefined' || value === null || (typeof value === 'string' && value.trim() === '')) {
    return false
  }
  return true
}

/**
 * 验证手机号码
 */
export function isPhoneNumber(value: any): boolean {
  return /^1[3-9]\d{9}$/.test(value)
}

/**
 * 验证固定电话
 */
export function isFixedNumber(value: any): boolean {
  return /^0\d{2,3}-\d{7,8$}/.test(value)
}

/**
 * 验证数字区间的格式
 */
export function isRangeNumber(value: any): boolean {
  return /^[\(\[]-?\d+,-?\d+[\]\)]$/.test(value)
}

/**
 * 验证数字
 */
export function isNumber(value: any): boolean {
  return /^-?\d+(.?\d+)?$/.test(value)
}

/**
 * 验证首尾是否有空格
 */
export function isHaveSpace(value: any): boolean {
  return /(^ | $)/.test(value)
}

/**
 * 验证小数位数
 */
export function isDecimal(value: any, length = 2): boolean {
  return new RegExp(`^-?\\d+\.\\d{${ length }}$`).test(value)
}

/**
 * 是否某个字符串开头
 */
export function isStartStr(value: any, str: string): boolean {
  return new RegExp(`^${ str }`).test(value)
}

/**
 * 是否某个字符串结尾
 */
export function isEndStr(value: any, str: string): boolean {
  return new RegExp(`${ str }$`).test(value)
}

/**
 * 验证邮箱
 */
export function isEmail(value: string): boolean {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
}

/**
 * 验证邮编
 */
export function isPostcode(value: string): boolean {
  return /^\d{6}$/.test(value)
}

/**
 * 验证身份证号码
 */
export function isIDCardNo(value: string, type = 0): boolean {
  switch (type) {
    case 0:
    default:
      return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value)
    case 1:
      return /^\d{15}$/.test(value)
    case 2:
      return /^(^\d{18}$|^\d{17}(\d|X|x))$/.test(value)
  }
}

/**
 * 验证QQ
 */
export function isQQ(value: string): boolean {
  return /^[1-9][0-9]{4,10}$/.test(value)
}

/**
 * 验证微信号
 */
export function isWeixin(value: string): boolean {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value)
}

/**
 * 验证车牌号码
 */
export function isCarNo(value: string): boolean {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(value)
}

/**
 * 验证中文姓名
 */
export function isChineseName(value: string): boolean {
  return /^[\u4e00-\u9fa5]{2,4}$/.test(value)
}

/**
 * 验证用户名
 */
export function isUserName(value: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(value)
}

/**
 * 验证密码
 */
export function isPassword(value: string, type = 1): boolean {
  switch (type) {
    case 1:
    default:
      return /^[a-zA-Z]\w{5,17}$/.test(value)
    case 2:
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/.test(value)
  }
}

/**
 * 验证编码
 */
export function isNo(value: string): boolean {
  return /^[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证日期
 */
export function isDate(value: string): boolean {
  return /^\d{4}(-\d{1,2}){2}( \d{1,2}(:\d{1,2}){2})?$/.test(value)
}
