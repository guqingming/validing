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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
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
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
    }
    /**
     * 验证中文姓名
     */
    export function validateChineseName(config: ChineseNameConfig): any;
  }

  /** 是否布尔值 */
  function isBooblean(value: any): boolean
  /** 是否字符串 */
  function isString(value: any): boolean
  /** 是否数字 */
  function isNumber(value: any): boolean
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
  function isIDCardNo(value: any): boolean
  /** 是否QQ号 */
  function isQQ(value: any): boolean
  /** 是否微信号 */
  function isWeixin(value: any): boolean
  /** 是否车牌号码 */
  function isCarNo(value: any): boolean
  /** 是否中文姓名 */
  function isChineseName(value: any): boolean
}

export default validing

/** 是否布尔值 */
export declare function isBooblean(value: any): boolean
/** 是否字符串 */
export declare function isString(value: any): boolean
/** 是否数字 */
export declare function isNumber(value: any): boolean
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
export declare function isIDCardNo(value: any): boolean
/** 是否QQ号 */
export declare function isQQ(value: any): boolean
/** 是否微信号 */
export declare function isWeixin(value: any): boolean
/** 是否车牌号码 */
export declare function isCarNo(value: any): boolean
/** 是否中文姓名 */
export declare function isChineseName(value: any): boolean
