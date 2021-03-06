import { isBooblean, isString, isHaveValue, isIDCardNo } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.IDCardNoConfig = {
  required: false,
  type: 0,
  tip: ''
}

const validateIDCardNo = (config: validing.rules.IDCardNoConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validateIDCardNo函数required参数必须为布尔值')
    }
    if (config.type !== undefined && config.type !== 0 && config.type !== 1 && config.type !== 2) {
      throw Error('validateIDCardNo函数type参数只能是0|1|2')
    }
    if (config.tip !== undefined && !isString(config.tip)) {
      throw Error('validateIDCardNo函数tip参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      type: number;
      tip: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
    } else if (!isHaveValue(value)) {
      callback(new Error(theConfig.tip || `必填`))
    } else if (!isHaveValue(value)) {
      callback(new Error(theConfig.tip || `必填`))
    } else if (!(isIDCardNo(value, theConfig.type))) {
      callback(new Error(theConfig.tip || `格式错误`))
    } else {
      callback()
    }
  }
}

export default validateIDCardNo
