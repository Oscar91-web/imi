console.log("hello world");
const CP_API = "http://pluto.im.se:5280/JSONTRIMService/json/order";
//?customer_number=35001&status=420&salesman=BOHG
const OrderAlternative = ["?order_number=", "?customer_number=", "?status="];

let f1 ="1";
let f2 ="2";
let f3 ="3";

let fields =[["order_number", f1],["customer_number", f2],["status", f3]];
let str = "";

//http://pluto.im.se:5280/JSONTRIMService/json/order?customer_number=35001&status=420&salesman=BOHG

let sep = '?';

for(let i = 0; i < fields.length; i++){
    let field = fields[i];
     if (field[1]) {
       str += sep + field[0] +'=' + field[1];
        sep = '&';
    }
}


let x = fields.filter(v => v[1]).map(v => v.join('=')).join('&');
console.log(x)
//console.log(str);
