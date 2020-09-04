import { isBooblean, isString, isHaveValue, isNumber, isEmail } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.MailConfig = {
  required: false,
  maxLength: 60,
  tip: ''
}

const validateMail = (config: validing.rules.MailConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validateMail函数required参数必须为布尔值')
    }
    if (config.maxLength !== undefined) {
      if (!isNumber(config.maxLength)) {
        throw Error('validateMail函数maxLength参数只能是数字')
      }
      if (config.maxLength < 10) {
        throw Error('validateMail函数maxLength必须是大于10的数字')
      }
    }
    if (config.tip !== undefined && !isString(config.tip)) {
      throw Error('validateMail函数tip参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      maxLength: number;
      tip: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
    } else if (!isHaveValue(value)) {
      callback(new Error(theConfig.tip || `必填`))
    } else if (!(isEmail(value))) {
      callback(new Error(theConfig.tip || `格式错误`))
    } else if (value.length > theConfig.maxLength) {
      callback(new Error(theConfig.tip || `长度不能大于${ theConfig.maxLength }`))
    } else {
      callback()
    }
  }
}

export default validateMail
