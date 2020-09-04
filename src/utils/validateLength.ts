import { isHaveValue, isBooblean, isString, isRangeNumber } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.LengthConfig = {
  required: false,
  range: '[6,-]',
  tip: ''
}

const validateLength = (config: validing.rules.LengthConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validateLength函数required参数必须为布尔值')
    }
    if (config.range !== undefined && !isRangeNumber(config.range)) {
      throw Error('validateLength函数range参数格式不正确')
    }
    if (config.tip !== undefined && !isString(config.tip)) {
      throw Error('validateLength函数tip参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      range: string;
      decimal: number;
      strict: boolean;
      tip: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
    } else if (!isHaveValue(value)) {
      callback(new Error(theConfig.tip || `必填`))
    } else if (!isInRange(theConfig.range, value)) {
      callback(new Error(theConfig.tip || `超出了允许的数值范围`))
    } else {
      callback()
    }
  }
}

function isInRange(range: string, string: string) {
  const [min, max] = range.substring(1, range.length - 1).split(',')
  const front = range.substring(0, 1)
  const end = range.substring(range.length - 1, range.length)
  let result = false
  if (min !== '-') {
    if (front === '(') {
      if (string.length > Number(min)) {
        result = true
      }
    } else if (front === '[') {
      if (string.length >= Number(min)) {
        result = true
      }
    }
  } else {
    result = true
  }
  if (!result) {
    return false
  }
  result = false
  if (max !== '-') {
    if (end === ')') {
      if (string.length < Number(max)) {
        result = true
      }
    } else if (end === ']') {
      if (string.length <= Number(max)) {
        result = true
      }
    }
  } else {
    result = true
  }
  if (!result) {
    return false
  }
  return true
}

export default validateLength
