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
  isCarNo
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
    validateCarNo
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
  isCarNo
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
  isCarNo
}
