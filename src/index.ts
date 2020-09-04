import validatePhone from './utils/validatePhone'
import validateNumber from './utils/validateNumber'
import validateSpace from './utils/validateSpace'
import validateWebsite from './utils/validateWebsite'
import validateMail from './utils/validateMail'
import validatePostcode from './utils/validatePostcode'
import validateIDCardNo from './utils/validateIDCardNo'
import validateQQ from './utils/validateQQ'
import validateWinxin from './utils/validateWinxin'
import validateCarNo from './utils/validateCarNo'
import validateChineseName from './utils/validateChineseName'
import validateUserName from './utils/validateUserName'
import validatePassword from './utils/validatePassword'
import validateNo from './utils/validateNo'
import validateDate from './utils/validateDate'
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
  isWeixin,
  isCarNo,
  isChineseName,
  isUserName,
  isPassword,
  isNo,
  isDate
} from './utils/validate'

const Validing = {
  rules: {
    validatePhone,
    validateNumber,
    validateSpace,
    validateWebsite,
    validateMail,
    validatePostcode,
    validateIDCardNo,
    validateQQ,
    validateWinxin,
    validateCarNo,
    validateChineseName,
    validateUserName,
    validatePassword,
    validateNo,
    validateDate
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
  isWeixin,
  isCarNo,
  isChineseName,
  isUserName,
  isPassword,
  isNo,
  isDate
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
  isWeixin,
  isCarNo,
  isChineseName,
  isUserName,
  isPassword,
  isNo,
  isDate
}
