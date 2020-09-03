declare module '*.vue' {
  import Vue, { VueConstructor } from 'vue'
  export default Vue
}

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}

declare module '*.gif' {
  export const gif: any
}

declare module '*.png' {
  export const png: any
}

declare module '*.jpg' {
  export const jpg: any
}

declare module '*.js' {
  export const js: any
}

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
      type ? : 1 | 2 | 3;
      /** 
       * 字段名称：
       * 此项(默认)
       **/
      name ? : string;
    }
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
    export function validateWebsite(config: SpaceConfig): any;
  }
}