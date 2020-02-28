/**
 * Regex module.
 * @module zaxRegex
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regex
 */

export const EMAIL = '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$' //邮件
export const DATE = '^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$' // 日期
export const QQ = '^[1-9]*[1-9][0-9]*$' // QQ号码
export const TEL = '^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$' //电话号码的函数(包括验证国内区号,国际区号,分机号)
export const IDCARD = '(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)' // 身份证
export const MOBILE = '^1[3456789]\\d{9}$' // 手机
export const HKMOBILE = '^[6|9]\\d{7}$' // 香港手机: 9或6开头后面跟7位数字
export const PHONNE = MOBILE

type Nothing = {} // jsdoc2md bugs, do not remove this line

/* istanbul ignore next */
export default {
	EMAIL,
	DATE,
	QQ,
	TEL,
	IDCARD,
	MOBILE,
	HKMOBILE,
	PHONNE
}
