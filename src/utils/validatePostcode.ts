import { isBooblean, isString, isHaveValue, isPostcode } from './validate'
import { getValueObject } from './function'
import validing from 'dist/validing'

const defaultConfig: validing.rules.PostcodeConfig = {
  required: false,
  name: '此项'
}

const validatePostcode = (config: validing.rules.PostcodeConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validatePostcode函数required参数必须为布尔值')
    }
    if (config.name !== undefined && !isString(config.name)) {
      throw Error('validatePostcode函数name参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      name: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
      return
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
      return
    } else if (!(isPostcode(value))) {
      callback(new Error(`${ theConfig.name }格式错误`))
      return
    } else {
      callback()
    }
  }
}

export default validatePostcode