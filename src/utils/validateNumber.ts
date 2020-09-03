import { isHaveValue, isBooblean, isString, isRangeNumber, isDecimal, isNumber } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.NumberConfig = {
  required: false,
  range: '[0,-]',
  decimal: 0,
  strict: false,
  name: '此项'
}

const validateNumber = (config: validing.rules.NumberConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validateNumber函数required参数必须为布尔值')
    }
    if (config.range !== undefined && !isRangeNumber(config.range)) {
      throw Error('validateNumber函数range参数格式不正确')
    }
    if (config.strict !== undefined && !isBooblean(config.strict)) {
      throw Error('validateNumber函数strict参数必须为布尔值')
    }
    if (config.name !== undefined && !isString(config.name)) {
      throw Error('validateNumber函数name参数只能是字符串')
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
      name: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
      return
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
      return
    } else if (!isNumber(value)) {
      callback(new Error(`${ theConfig.name }不是有效的数字`))
    } else if (!isInRange(theConfig.range, value)) {
      callback(new Error(`${ theConfig.name }超出了允许的数值范围`))
      return
    } else if (!isIndecimal(theConfig.decimal, value, theConfig.strict)) {
      callback(new Error(`${ theConfig.name }小数位数错误`))
      return
    } else {
      callback()
    }
  }
}

function isInRange(range: string, number: string) {
  const [min, max] = range.substring(1, range.length - 1).split(',')
  const front = range.substring(0, 1)
  const end = range.substring(range.length - 1, range.length)
  let result = false
  if (min !== '-') {
    if (front === '(') {
      if (Number(number) > Number(min)) {
        result = true
      }
    } else if (front === '[') {
      if (Number(number) >= Number(min)) {
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
      if (Number(number) < Number(max)) {
        result = true
      }
    } else if (end === ']') {
      if (Number(number) <= Number(max)) {
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

function isIndecimal(decimal: number, number: string, strict: boolean) {
  if (decimal === 0) {
    if (number.includes('.')) {
      return false
    }
  } else {
    if (!strict && !number.includes('.')) {
      return true
    } else if (!isDecimal(number, decimal)) {
      return false
    }
  }
  return true
}

export default validateNumber