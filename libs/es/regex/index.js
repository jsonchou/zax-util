/**
 * Regex module.
 * @module zaxRegex
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regex
 */
export const EMAIL = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; //邮件
export const DATE = /^\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}$/; // 日期
export const QQ = /^[1-9]*[1-9][0-9]*$/; // QQ号码
export const TEL = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/; //电话号码的函数(包括验证国内区号,国际区号,分机号)
export const IDCARD = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 身份证
export const MOBILE = /^((\+?86)|(\(\+86\)))?1[3456789]{1}\d{9}$/; // 大陆手机
export const MOBILE_HONGKONG = /^((\+?852)|(\(\+852\)))?[5689]{1}\d{7}$/; //香港手机
export const MOBILE_MACAU = /^((\+?853)|(\(\+853\)))?[6]{1}[68]{1}\d{5}$/; //澳门手机
export const MOBILE_TAIWAN = /^((\+?886)|(\(\+866\)))?[0]{1}[9]{1}\d{8}$/; //台湾手机
/* istanbul ignore next */
export default {
    EMAIL,
    DATE,
    QQ,
    TEL,
    IDCARD,
    MOBILE,
    MOBILE_HONGKONG,
    MOBILE_MACAU,
    MOBILE_TAIWAN,
};
//# sourceMappingURL=index.js.map