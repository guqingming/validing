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
 * 是否有效值
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
  return /0\d{2,3}-\d{7,8}/.test(value)
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
export function isDecimal(value: any, length: number): boolean {
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