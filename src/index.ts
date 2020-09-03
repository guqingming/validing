import validatePhone from './utils/validatePhone'
import validateNumber from './utils/validateNumber'
import validateSpace from './utils/validateSpace'
import validateWebsite from './utils/validateWebsite'
import { isBooblean, isString, isHaveValue, isPhoneNumber, isNumber } from './utils/validate'

const validing = {
  rules: {
    validatePhone,
    validateNumber,
    validateSpace,
    validateWebsite
  },
  isBooblean,
  isString,
  isHaveValue,
  isPhoneNumber,
  isNumber
}

export default validing
export {
  isBooblean,
  isString,
  isHaveValue,
  isPhoneNumber,
  isNumber
}