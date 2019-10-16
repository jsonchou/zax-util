export const EMAIL = '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$';
export const DATE = '^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$';
export const QQ = '^[1-9]*[1-9][0-9]*$';
export const TEL = '^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$';
export const IDCARD = '(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)';
export const MOBILE = '^1[3456789]\\d{9}$';
export const PHONNE = '^1[3456789]\\d{9}$';
export default {
    EMAIL,
    DATE,
    QQ,
    TEL,
    IDCARD,
    MOBILE,
    PHONNE
};
//# sourceMappingURL=index.js.map