/**
 * validing插件
 * 作者：15524261@qq.com
 */
declare module validing {
  /**
   * rules of element-ui
   */
  export namespace rules {
    /**
     * 验证电话号码
     */
    export interface PhoneConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 电话号码类型：
       * 1 手机号码；
       * 2 座机号码；
       * 3 手机号码or座机号码(默认)
       **/
      type ? : 0 | 1 | 2;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证电话号码
     */
    export function validatePhone(config: PhoneConfig): any;

    /**
     * 验证数字或金额
     */
    export interface NumberConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 数字区间：
       * [0,-](默认值)
       * []代表包含此数字，()代表不包含此数字，-代表不限制
       * 小数在前，大数在后
       */
      range ? : string;
      /**
       * 小数位数：
       * 0(默认)
       **/
      decimal ? : number;
      /**
       * 小数位数的严格模式
       * true 是；
       * false 否(默认)
       * 严格模式时要求的小数位数必须补齐
       */
      strict ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证数字或金额
     */
    export function validateNumber(config: NumberConfig): any;

    /**
     * 验证首尾是否含有空格
     */
    export interface SpaceConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证首尾是否含有空格
     */
    export function validateSpace(config: SpaceConfig): any;

    /**
     * 验证是否有效网址
     */
    export interface WebsiteConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 允许的网站协议
       */
      protocols ? : ('http' | 'https' | 'ftp' | 'sftp' | 'mailto' | 'tel')[];
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证是否有效网址
     */
    export function validateWebsite(config: WebsiteConfig): any;

    /**
     * 验证邮箱地址
     */
    export interface MailConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 字符串长度
       */
      maxLength ? : number;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证邮箱地址
     */
    export function validateMail(config: MailConfig): any;

    /**
     * 验证邮政编码
     */
    export interface PostcodeConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证邮政编码
     */
    export function validatePostcode(config: PostcodeConfig): any;

    /**
     * 验证身份证号码
     */
    export interface IDCardNoConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 身份证号码类型：
       * 1 1代15位；
       * 2 2代18位；
       * 3 1代or2代(默认)
       **/
      type ? : 0 | 1 | 2;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证身份证号码
     */
    export function validateIDCardNo(config: IDCardNoConfig): any;

    /**
     * 验证QQ号
     */
    export interface QQConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证QQ号
     */
    export function validateQQ(config: QQConfig): any;

    /**
     * 验证微信号
     */
    export interface WeixinConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证微信号
     */
    export function validateWeixin(config: WeixinConfig): any;

    /**
     * 验证车牌号码
     */
    export interface CarNoConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证车牌号码
     */
    export function validateCarNo(config: CarNoConfig): any;

    /**
     * 验证中文姓名
     */
    export interface ChineseNameConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证中文姓名
     */
    export function validateChineseName(config: ChineseNameConfig): any;

    /**
     * 验证用户名
     */
    export interface UserNameConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证用户名
     */
    export function validateUserName(config: UserNameConfig): any;

    /**
     * 验证密码
     */
    export interface PasswordConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 密码强度：
       * 1 弱；
       * 2 强；
       **/
      type ? : 1 | 2;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证密码
     */
    export function validatePassword(config: PasswordConfig): any;

    /**
     * 验证编码
     */
    export interface NoConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证编码
     */
    export function validateNo(config: NoConfig): any;

    /**
     * 验证日期
     */
    export interface DateConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证日期
     */
    export function validateDate(config: DateConfig): any;

    /**
     * 验证无特殊字符
     */
    export interface NoSpecialChartConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证无特殊字符
     */
    export function validateNoSpecialChart(config: NoSpecialChartConfig): any;

    /**
     * 验证IP地址
     */
    export interface IpConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证IP地址
     */
    export function validateIP(config: IpConfig): any;

    /**
     * 验证长度
     */
    export interface LengthConfig {
      /**
       * 是否必填：
       * true 是；
       * false 否(默认)
       **/
      required ? : boolean;
      /**
       * 长度区间：
       * [0,-](默认值)
       * []代表包含此数字，()代表不包含此数字，-代表不限制
       * 小数在前，大数在后
       */
      range ? : string;
      /**
       * 错误提示：
       * 默认按情况提示相应错误
       **/
      tip ? : string;
    }
    /**
     * 验证长度
     */
    export function validateLength(config: LengthConfig): any;
  }

  /** 是否布尔值 */
  function isBooblean(value: any): boolean
  /** 是否字符串 */
  function isString(value: any): boolean
  /** 是否数字 */
  function isNumber(value: any): boolean
  /** 是否数组 */
  function isArray(value: any): boolean
  /** 是否含有有效值 */
  function isHaveValue(value: any): boolean
  /** 是否手机号码 */
  function isPhoneNumber(value: any): boolean
  /** 是否有效的数字区间 */
  function isRangeNumber(value: any): boolean
  /** 验证小数位数 */
  function isDecimal(value: any, length: number): boolean
  /** 是否某个字符串开头 */
  function isStartStr(value: any, str: string): boolean
  /** 是否某个字符串结尾 */
  function isEndStr(value: any, str: string): boolean
  /** 是否邮箱 */
  function isEmail(value: any): boolean
  /** 是否邮编 */
  function isPostcode(value: any): boolean
  /** 是否身份证号码 */
  function isIDCardNo(value: any, type: 0 | 1 | 2): boolean
  /** 是否QQ号 */
  function isQQ(value: any): boolean
  /** 是否微信号 */
  function isWeixin(value: any): boolean
  /** 是否车牌号码 */
  function isCarNo(value: any): boolean
  /** 是否中文姓名 */
  function isChineseName(value: any): boolean
  /** 是否用户名 */
  function isUserName(value: any): boolean
  /** 是否密码 */
  function isPassword(value: any, type: 1 | 2): boolean
  /** 是否编码 */
  function isNo(value: any): boolean
  /** 是否日期 */
  function isDate(value: any): boolean
  /** 是否无特殊字符 */
  function isNoSpecialChart(value: any): boolean
  /** 是否IP地址 */
  function isIP(value: any): boolean
  /** 是否网址 */
  function isWebSite(value: any): boolean
  /** 首尾是否有空格 */
  function isHaveSpace(value: any): boolean
}

export default validing

/** 是否布尔值 */
export declare function isBooblean(value: any): boolean
/** 是否字符串 */
export declare function isString(value: any): boolean
/** 是否数字 */
export declare function isNumber(value: any): boolean
/** 是否数组 */
export declare function isArray(value: any): boolean
/** 是否含有有效值 */
export declare function isHaveValue(value: any): boolean
/** 是否手机号码 */
export declare function isPhoneNumber(value: any): boolean
/** 是否有效的数字区间 */
export declare function isRangeNumber(value: any): boolean
/** 验证小数位数 */
export declare function isDecimal(value: any, length: number): boolean
/** 是否某个字符串开头 */
export declare function isStartStr(value: any, str: string): boolean
/** 是否某个字符串结尾 */
export declare function isEndStr(value: any, str: string): boolean
/** 是否邮箱 */
export declare function isEmail(value: any): boolean
/** 是否邮编 */
export declare function isPostcode(value: any): boolean
/** 是否身份证号码 */
export declare function isIDCardNo(value: any, type: 0 | 1 | 2): boolean
/** 是否QQ号 */
export declare function isQQ(value: any): boolean
/** 是否微信号 */
export declare function isWeixin(value: any): boolean
/** 是否车牌号码 */
export declare function isCarNo(value: any): boolean
/** 是否中文姓名 */
export declare function isChineseName(value: any): boolean
/** 是否用户名 */
export declare function isUserName(value: any): boolean
/** 是否密码 */
export declare function isPassword(value: any, type: 1 | 2): boolean
/** 是否编码 */
export declare function isNo(value: any): boolean
/** 是否日期 */
export declare function isDate(value: any): boolean
/** 是否无特殊字符 */
export declare function isNoSpecialChart(value: any): boolean
/** 是否IP地址 */
export declare function isIP(value: any): boolean
/** 是否网址 */
export declare function isWebSite(value: any): boolean
/** 首尾是否有空格 */
export declare function isHaveSpace(value: any): boolean
