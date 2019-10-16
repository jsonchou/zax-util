export declare const EMAIL = "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$";
export declare const DATE = "^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$";
export declare const QQ = "^[1-9]*[1-9][0-9]*$";
export declare const TEL = "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$";
export declare const IDCARD = "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)";
export declare const MOBILE = "^1[3456789]\\d{9}$";
export declare const PHONNE = "^1[3456789]\\d{9}$";
declare const _default: {
    EMAIL: string;
    DATE: string;
    QQ: string;
    TEL: string;
    IDCARD: string;
    MOBILE: string;
    PHONNE: string;
};
export default _default;
