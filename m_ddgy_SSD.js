/*
20220310 tom

软件名称：弟弟果园刷水滴    小程序

微信钱包找到滴滴出行，进去滴滴果园，选择吹牛赚水滴。然后打开锤子抓包 

手动玩一局并且领取水滴！！！   关键词两个：goal  award

主要数据是：
url里的 wsgsig
header里的 D-Header-T

以及两个请求body


*/

const $ = new Env('弟弟果园刷水滴');
/*
//ck放这里
let wsgsig = `dd03-572lyEbaf5kGVl8BBxPMtA4EEwdBrAQ4DIdAmhJDEwdAUE7caTxesADbeLkAUlg2FP92r9gcgMZDiq4FeO6esl8KA5EE%2FA81AM1AtqDcB2O2%2FVX5BT2fnAmDAwE` //url里的 wsgsig
let HeaderT = `gSG3tn6_vCQ9dUPXIZ6eA4VxjO8pjsbcMRDM4NvYSTokzD2OAjEMQOG7vNoa2YmdTNxuv3fYn9mFJkggqhF3RwPlk56-nakkddFFEaaRJsxCmqqqMCtpPUZxN4t11SZMJ62F9xoRRwfJxyfCFwnCN1nW5j2sl_AY5sIvWaqwkTu3y_36s5H6EP4Oy9uI8bL-SSyGa2ktakM4vc3zsT8DAAD__w==`//任意请求的header

let sbody = `{"xbiz":"240301","prod_key":"didi-orchard","xpsid":"57e6c75a1a7d449296280e3ab53abd25","dchn":"O9aM923","xoid":"3-9fO-pQTd2UPoebE0N5XA","uid":"286475172545914","xenv":"passenger","xspm_from":"","xpsid_root":"57e6c75a1a7d449296280e3ab53abd25","xpsid_from":"","xpsid_share":"","platform":1,"token":"gSG3tn6_vCQ9dUPXIZ6eA4VxjO8pjsbcMRDM4NvYSTokzD2OAjEMQOG7vNoa2YmdTNxuv3fYn9mFJkggqhF3RwPlk56-nakkddFFEaaRJsxCmqqqMCtpPUZxN4t11SZMJ62F9xoRRwfJxyfCFwnCN1nW5j2sl_AY5sIvWaqwkTu3y_36s5H6EP4Oy9uI8bL-SSyGa2ktakM4vc3zsT8DAAD__w=="}`//goal里的body
let lqbody = `{"xbiz":"240301","prod_key":"didi-orchard","xpsid":"57e6c75a1a7d449296280e3ab53abd25","dchn":"O9aM923","xoid":"3-9fO-pQTd2UPoebE0N5XA","uid":"286475172545914","xenv":"passenger","xspm_from":"","xpsid_root":"57e6c75a1a7d449296280e3ab53abd25","xpsid_from":"","xpsid_share":"","platform":1,"token":"gSG3tn6_vCQ9dUPXIZ6eA4VxjO8pjsbcMRDM4NvYSTokzD2OAjEMQOG7vNoa2YmdTNxuv3fYn9mFJkggqhF3RwPlk56-nakkddFFEaaRJsxCmqqqMCtpPUZxN4t11SZMJ62F9xoRRwfJxyfCFwnCN1nW5j2sl_AY5sIvWaqwkTu3y_36s5H6EP4Oy9uI8bL-SSyGa2ktakM4vc3zsT8DAAD__w=="}`//award的body
*/
let wsgsig = `dd03-rj%2FGYv247x4qDcKaw9YsUpANL6vX0mm9yUxj%2FNBIL6vWCiC1SAdWUzH16T4WCDKbYEZQXp525SfVdf0NOAZ%2Fh%2B9AHT0sff4bw%2F%2FtVu156T8VDj%2BdPAOU%2F8MM6x9`
let HeaderT = `g-Ki9EP1LZtktno-lWMwefJ411uYCCvywp8oSOGjwFwkzDluw0AMhtG7fDUh_JxF4rBNnztkUZZmAsRwJfjuhuX-4R1MkdRFizCmk27MQrokGbOSvvVRvcYWarEas5G-9lAZq6oxO8nLK8YbCcY7WcLb1l3NQ7UM45Msxk4eXP6u_x87qZvxdVYqvZ7VN4mHyxWjyzF-nuXvg98DAAD__w==`
let sbody = `{"xbiz":"240301","prod_key":"didi-orchard","xpsid":"bc9238f9975b45ddbe40ca3ae4d0d827","dchn":"O9aM923","xoid":"yE5H5sVDR4uUMdQp-AdjNw","uid":"281475104180329","xenv":"passenger","xspm_from":"","xpsid_root":"bc9238f9975b45ddbe40ca3ae4d0d827","xpsid_from":"","xpsid_share":"","platform":1,"token":"g-Ki9EP1LZtktno-lWMwefJ411uYCCvywp8oSOGjwFwkzDluw0AMhtG7fDUh_JxF4rBNnztkUZZmAsRwJfjuhuX-4R1MkdRFizCmk27MQrokGbOSvvVRvcYWarEas5G-9lAZq6oxO8nLK8YbCcY7WcLb1l3NQ7UM45Msxk4eXP6u_x87qZvxdVYqvZ7VN4mHyxWjyzF-nuXvg98DAAD__w=="}`




!(async () => {
        if (HeaderT == ``) {
            console.log(`没ck玩个鸡`);
        } else {
            for(i=0;i<20;i++){
                    await ss()
                    await 2000()
                }
        }
    })()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function ss(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `https://game.xiaojukeji.com/api/game/cow/goal?wsgsig=${wsgsig}`,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'D-Header-T': `${HeaderT}`
            },
            body: sbody,

        }
        $.post(url, async (err, resp, data) => {
           
            try {
                console.log(data);
                data = JSON.parse(data)
                console.log(`刷新水滴：`+data.data.water_wallet.cur);
               lq()
            } catch (e) {} finally {
                resolve()
            }
        }, timeout)
    })
}


function lq(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `https://game.xiaojukeji.com/api/game/cow/award?wsgsig=${wsgsig}`,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'D-Header-T': `${HeaderT}`
            },
            body: sbody,

        }
        $.post(url, async (err, resp, data) => {
        
            try {
               
                data = JSON.parse(data)
                console.log(`领取水滴成功`);
            } catch (e) {} finally {
                resolve()
            }
        }, timeout)
    })
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
