import validatePhone from './utils/validatePhone'
import validateNumber from './utils/validateNumber'
import validateSpace from './utils/validateSpace'
import validateWebsite from './utils/validateWebsite'
import validateMail from './utils/validateMail'
import { isBooblean, isString, isHaveValue, isPhoneNumber, isNumber, isArray, isRangeNumber, isDecimal, isStartStr, isEndStr, isEmail } from './utils/validate'

const Validing = {
  rules: {
    validatePhone,
    validateNumber,
    validateSpace,
    validateWebsite,
    validateMail
  },
  isBooblean,
  isString,
  isHaveValue,
  isPhoneNumber,
  isNumber,
  isArray,
  isRangeNumber,
  isDecimal,
  isStartStr,
  isEndStr,
  isEmail
}

export default Validing

export {
  isBooblean,
  isString,
  isHaveValue,
  isPhoneNumber,
  isNumber,
  isArray,
  isRangeNumber,
  isDecimal,
  isStartStr,
  isEndStr,
  isEmail
}