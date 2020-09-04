import validatePhone from './utils/validatePhone'
import validateNumber from './utils/validateNumber'
import validateSpace from './utils/validateSpace'
import validateWebsite from './utils/validateWebsite'
import validateMail from './utils/validateMail'
import validatePostcode from './utils/validatePostcode'
import validateIDCardNo from './utils/validateIDCardNo'
import {
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
  isEmail,
  isPostcode,
  isIDCardNo,
  isQQ,
  isWeixin
} from './utils/validate'

const Validing = {
  rules: {
    validatePhone,
    validateNumber,
    validateSpace,
    validateWebsite,
    validateMail,
    validatePostcode,
    validateIDCardNo
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
  isEmail,
  isPostcode,
  isIDCardNo,
  isQQ,
  isWeixin
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
  isEmail,
  isPostcode,
  isIDCardNo,
  isQQ,
  isWeixin
}