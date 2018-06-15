/**
 * get请求将参数对象拼接到url
 * @param api
 * @param param
 * @returns {*}
 */
function adjustParam(api, param = '') {
    if (param.constructor === String) {
        return `${api}${param}`;
    } else if (param.constructor === Object) {
        let query = [];

        for (const key in param) {
            query.push(`${key}=${param[key]}`);
        }

        const querySign = api.includes("?") ? "&" : "?";
        return `${api}${querySign}${query.join("&")}`;
    } else {
        return api;
    }
}

const BASE = function (type, api, data) {
    const requestURL = this.$CONFIG.BASE_API_URL + api;

    const config = {
        headers: { "Content-Type": "application/json" },
        method: type,
    };

    if (['post', 'put'].includes(type)) {
        config.body = JSON.stringify(data);
    }

    return fetch(requestURL, config).then(function (response) {
        return response.json();
    }).then(res => {

        if(res.code){
            this.$Message.error(res.msg);
        }

        console.group(`${type}接口： ${api}`);
        console.log("响应结果：", JSON.parse(JSON.stringify(res)));
        console.groupEnd();
        return res;
    }).catch(e => {
        console.error("接口异常：", e);
    })
};

const get = function (api, params) {
    return BASE.call(this, 'get', adjustParam(api, params));
};

const post = function (api, data = {}) {
    return BASE.call(this, 'post', api, data);
};

const put = function (api, data = {}) {
    return BASE.call(this, 'put', api, data);
};

const del = function (api) {
    return BASE.call(this, 'delete', api);
};


export default {
    get,
    post,
    put,
    del,
};
