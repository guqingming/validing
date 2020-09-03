import { isBooblean, isString, isHaveValue, isNumber, isEmail } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.MailConfig = {
  required: false,
  maxLength: 60,
  name: '此项'
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
    if (config.name !== undefined && !isString(config.name)) {
      throw Error('validateMail函数name参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      maxLength: number;
      name: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
      return
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
      return
    } else if (!(isEmail(value))) {
      callback(new Error(`${ theConfig.name }格式错误`))
      return
    } else if (value.length > theConfig.maxLength) {
      callback(new Error(`${ theConfig.name }长度不能大于${ theConfig.maxLength }`))
      return
    } else {
      callback()
    }
  }
}

export default validateMail