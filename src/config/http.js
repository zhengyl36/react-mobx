/**
 * Created by karl.zheng on 2018/2/1.
 */
import 'whatwg-fetch'

export const HTTPPost = function (url, params) {
    let body = "";

    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        // if(url.search(/\?/)==-1){
        //     url += '?' + paramsArray.join('&');
        // }else{
        //     url += '&' +paramsArray.join('&');
        // }
        body = paramsArray.join('&');
    }

    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            mode: "no-cors",
            cache: 'default',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: body
        }).then((response) => {
            console.log(response);
            if (response.ok) {
                return resolve(response.json());
            } else {
                reject({status: response.status})
            }
        }).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject({status: -1});
        })
    }).catch((err) => {
        console.log(err);
    })
}

//添加Get请求
export const HTTPGet = (url, params) => {
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }

    return new Promise(function (resolve, reject) {
        //fetch请求
        fetch(url, {
            method: 'GET',
        }).then((response) => response.json())
            .then((json) => {
                console.log('json' + JSON.stringify(json));
                //动态赋值
                this.setState({
                    dataSource: json.data
                })
            })
            .catch((error) => {
                //alert(error)
            })
    }).catch((err) => {
        console.log(err);
    })
};
