import queryString from 'query-string';
import moment from 'moment';
let util = {
    /**
     * 获取查询参数
     */
    getUrlQueryParam (key) {
        let qureryObject = queryString.parse(location.search);
        return qureryObject[key];
    },
    isLogin(){
        return false;
    },
    getUserInfo(){
        return {};
    },
    getUserName(){
        return "";
    },
    dateFormat(date,format){
        return moment(date).format(format);
    }
}
export default util;