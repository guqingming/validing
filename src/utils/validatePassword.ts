import { isBooblean, isString, isHaveValue, isPassword } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.PasswordConfig = {
  required: false,
  type: 1,
  name: '此项'
}

const validatePassword = (config: validing.rules.PasswordConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validatePassword函数required参数必须为布尔值')
    }
    if (config.type !== undefined && config.type !== 1 && config.type !== 2) {
      throw Error('validatePassword函数type参数只能是1|2')
    }
    if (config.name !== undefined && !isString(config.name)) {
      throw Error('validatePassword函数name参数只能是字符串')
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
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
    } else if (!(isPassword(value, theConfig.type))) {
      callback(new Error(`${ theConfig.name }格式错误`))
    } else {
      callback()
    }
  }
}

export default validatePassword
