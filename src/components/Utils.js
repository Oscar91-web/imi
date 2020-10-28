const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json";

//?customer_number=35001&status=420&salesman=BOHG


function buildURL(what, params) {
    let ret = API_URL + "/" + what;
    let qp = Object.keys(params).map(p => [p, params[p]]).filter(v => v[1]).map(v => v.join('=')).join('&');
    if (qp) {
        ret = ret + "?" + qp;
    }
    console.log("ret" + ret);
    return ret;
}


export default buildURL;