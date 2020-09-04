import { isBooblean, isString, isHaveValue, isDate } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.DateConfig = {
  required: false,
  tip: ''
}

const validateDate = (config: validing.rules.DateConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validateDate函数required参数必须为布尔值')
    }
    if (config.tip !== undefined && !isString(config.tip)) {
      throw Error('validateDate函数tip参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      tip: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
    } else if (!isHaveValue(value)) {
      callback(new Error(theConfig.tip || `必填`))
    } else if (!(isDate(value))) {
      callback(new Error(theConfig.tip || `格式错误`))
    } else {
      callback()
    }
  }
}

export default validateDate
