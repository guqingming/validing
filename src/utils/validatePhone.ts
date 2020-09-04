import { isPhoneNumber, isHaveValue, isFixedNumber, isBooblean, isString } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.PhoneConfig = {
  required: false,
  type: 0,
  name: '此项'
}

const validatePhone = (config: validing.rules.PhoneConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validatePhone函数required参数必须为布尔值')
    }
    if (config.type !== undefined && config.type !== 0 && config.type !== 1 && config.type !== 2) {
      throw Error('validatePhone函数type参数只能是1|2|3')
    }
    if (config.name !== undefined && !isString(config.name)) {
      throw Error('validatePhone函数name参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      type: number;
      name: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
    } else if (!isPhoneNumber(value) && theConfig.type === 1) {
      callback(new Error(`${ theConfig.name }格式错误`))
    } else if (!isFixedNumber(value) && theConfig.type === 2) {
      callback(new Error(`${ theConfig.name }格式错误`))
    } else if (!isPhoneNumber(value) && !isFixedNumber(value) && theConfig.type === 0) {
      callback(new Error(`${ theConfig.name }格式错误`))
    } else {
      callback()
    }
  }
}

export default validatePhone
