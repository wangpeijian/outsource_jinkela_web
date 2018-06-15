const DEV = '';
const PROD = '';

/**
 * 项目默认的公共配置（不分环境）
 */
const defaultConfig = {
    BASE_API_URL: '',
};

/**
 * 开发环境
 */
const devConfig = {
    BASE_API_URL: '',
};

/**
 * 生产环境
 */
const prodConfig = {};

/**
 * 本地环境（可覆盖测试环境配置）
 */
const localConfig = Object.assign({}, devConfig, {
    BASE_API_URL: '',
});

export default (function () {
    const host = window.location.host;
    let config = {};
    console.info('当前域名：', host);
    switch (host) {
        case DEV:
            config = devConfig;
            break;
        case PROD:
            config = prodConfig;
            break;
        default:
            config = localConfig;
            break;
    }

    config = Object.assign(defaultConfig, config);

    for (const key in config) {
        const value = config[key];
        Object.defineProperty(config, key, {
            set: function (newValue) {
                console.warn(`不允许修改CONFIG配置项,${key}=${newValue}`);
            },
            get: function () {
                return value;
            },
            enumerable: false,
            configurable: false
        })
    }
    return config;
})()


