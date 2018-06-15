import httpRequest from './httpRequest';
import config from '../config';

class citicPlugin {

    constructor() {

    }

    install(Vue, options) {
        this.installExtendsFunction();

        this.installComponent(Vue);

        this.installPrototype(Vue);

        this.installFilter(Vue);

        this.installDirective(Vue);

        this.installMixin(Vue);
    }

    /*------------------安装扩展方法------------------*/
    installExtendsFunction() {
        /**
         * 扩展时间对象，增加Format方法
         */
        {
            /*对Date的扩展，将 Date 转化为指定格式的String
             月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
             年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
             例子：
             (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
             (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
             支持时间格式化*/
            Date.prototype.Format = function (fmt) { //author: meizz
                let o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        }

        /**
         * 字符串增加format方法，替换字符串中的#{\d}元素，从0开始
         */
        {
            /**
             * @return {string}
             */
            String.prototype.Format = function(...arr){
                let value = this.toString();
                arr.forEach((item, index) => {
                    value = value.replace(`#{${index}}`, item)
                });
                return value;
            }
        }
    }

    /*------------------添加vue组件------------------*/
    installComponent(Vue) {

    }

    /*------------------添加vue过滤器------------------*/
    installFilter(Vue) {

    }

    /*------------------添加vue实例方法------------------*/
    installPrototype(Vue) {
        Vue.prototype.$get = httpRequest.get;
        Vue.prototype.$post = httpRequest.post;
        Vue.prototype.$put = httpRequest.put;
        Vue.prototype.$delete = httpRequest.del;
        Vue.prototype.$CONFIG = config;

        /**
         * 动态设置页面title
         */
        Vue.prototype.$setPageTitle = function (title) {
            if (title) {
                document.title = title;
            }
        };
    }

    /*------------------安装指令方法------------------*/
    installDirective(Vue) {
        /**
         * 处理底部跟随浮动逻辑
         * @param e
         * @private
         */
        function _handleBottomFloat(e) {
            const { el, standardEl, offset } = window.__directiveFloatBottom__;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const bottomPosition = standardEl.offsetTop + standardEl.offsetHeight;

            if (scrollTop + clientHeight >= bottomPosition - offset) {
                el.style.position = "relative";
                el.className = el.className.replace(/ fixed-mark/g, '')
            } else {
                el.style.position = "fixed";
                if(!el.className.includes('fixed-mark')){
                    el.className += ' fixed-mark';
                }
            }
        }

        /**
         * 定义元素跟随浮动效果
         * value 为浮层改变的偏移量，为正数则提前变为正常位置
         */
        Vue.directive('float-bottom', {
            inserted(el, binding, vnode) {
                //获取基准元素
                const standardEl = document.getElementById(binding.arg);
                let offset = 0;
                if (binding.value) {
                    offset = binding.value;
                }
                window.__directiveFloatBottom__ = { el, standardEl, offset };
                window.addEventListener("scroll", _handleBottomFloat);
                document.addEventListener('DOMSubtreeModified', _handleBottomFloat, false);
                setTimeout(_handleBottomFloat, 0);
            },

            unbind(el, binding, vnode) {
                delete window.__directiveFloatBottom__;
                window.removeEventListener("scroll", _handleBottomFloat);
                document.removeEventListener('DOMSubtreeModified', _handleBottomFloat);
            }
        });

        /**
         * 处理底部跟随浮动逻辑
         * @param e
         * @private
         */
        function _handleTopFixed(e) {
            const { el, standardEl, offset } = window.__directiveFloatTop__;
            const scrollTop = document.documentElement.scrollTop;
            const topPosition = standardEl.offsetTop;

            if (scrollTop > topPosition - offset) {
                el.style.position = "fixed";
                if(!el.className.includes('fixed-mark')){
                    el.className += ' fixed-mark';
                }
            } else {
                el.style.position = "relative";
                el.className = el.className.replace(/ fixed-mark/g, '')
            }
        }

        /**
         * 定义元素跟随浮动效果
         * value 为浮层改变的偏移量，为正数则提前变为正常位置
         */
        Vue.directive('float-top', {
            inserted(el, binding, vnode) {
                //获取基准元素
                const standardEl = document.getElementById(binding.arg);
                let offset = 0;
                if (binding.value) {
                    offset = binding.value;
                }
                window.__directiveFloatTop__ = { el, standardEl, offset };
                window.addEventListener("scroll", _handleTopFixed);
                document.addEventListener('DOMSubtreeModified', _handleTopFixed, false);
                setTimeout(_handleTopFixed, 0);
            },

            unbind(el, binding, vnode) {
                delete window.__directiveFloatTop__;
                window.removeEventListener("scroll", _handleTopFixed);
                document.removeEventListener('DOMSubtreeModified', _handleTopFixed);
            }
        })
    }

    /*------------------安装mixin方法------------------*/
    installMixin(Vue) {

    }
}

export default new citicPlugin();
