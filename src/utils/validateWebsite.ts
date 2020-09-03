import { isBooblean, isString, isHaveValue, isArray, isStartStr } from './validate'
import { getValueObject } from './function'

const defaultConfig: validing.rules.WebsiteConfig = {
  required: false,
  protocols: ['http', 'https', 'ftp', 'sftp', 'mailto', 'tel'],
  name: '此项'
}

const validateWebsite = (config: validing.rules.WebsiteConfig) => {
  try {
    if (config.required !== undefined && !isBooblean(config.required)) {
      throw Error('validateWebsite函数required参数必须为布尔值')
    }
    if (config.protocols !== undefined) {
      if (!isArray(config.protocols)) {
        throw Error('validateWebsite函数protocols参数只能是数组')
      }
      const protocols = defaultConfig.protocols
      if (protocols !== undefined) {
        if (config.protocols.some(item => !protocols.includes(item))) {
          throw Error('validateWebsite函数protocols参数传入了一些无法识别的值')
        }
      }
    }
    if (config.name !== undefined && !isString(config.name)) {
      throw Error('validateWebsite函数name参数只能是字符串')
    }
  } catch (error) {
    console.error(error.message)
  }
  return (rule: any, value: any, callback: any) => {
    const theConfig: {
      required: boolean;
      protocols: string[];
      name: string;
    } = Object.assign(defaultConfig, getValueObject(config))
    if (!config.required && !isHaveValue(value)) {
      callback()
      return
    } else if (!isHaveValue(value)) {
      callback(new Error(`${ theConfig.name }必填`))
      return
    } else if (!theConfig.protocols.some(item => isStartStr(value, `${ item }:`))) {
      callback(new Error(`${ theConfig.name }外部网址格式错误`))
      return
    } else {
      callback()
    }
  }
}

export default validateWebsite