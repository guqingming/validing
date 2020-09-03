import { isPhoneNumber, isHaveValue, isFixedNumber, isBooblean, isString } from './validate'
import { getValueObject } from './function'

const defaultConfig: validing.rules.PhoneConfig = {
  required: false,
  type: 3,
  name: '此项'
}

const validatePhone = (config: validing.rules.PhoneConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validatePhone函数required参数必须为布尔值')
    }
    if (config.type !== undefined && config.type !== 1 && config.type !== 2 && config.type !== 3) {
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
      return
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
      return
    } else if (!isPhoneNumber(value) && theConfig.type === 1) {
      callback(new Error(`${ theConfig.name }格式错误`))
      return
    } else if (!isFixedNumber(value) && theConfig.type === 2) {
      callback(new Error(`${ theConfig.name }格式错误`))
      return
    } else if (!isPhoneNumber(value) && !isFixedNumber(value) && theConfig.type === 3) {
      callback(new Error(`${ theConfig.name }格式错误`))
      return
    } else {
      callback()
    }
  }
}

export default validatePhone