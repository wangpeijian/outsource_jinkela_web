const base = {
    /**
     * 新增一条订阅记录（用于组件间通信）
     *
     * @param eventName
     * @param owner
     * @param cb
     */
    __subscribe__: function (eventName, owner, cb) {
        if (!eventName || !owner) {
            return;
        }

        const queue = window.EVENT_STORAGE[eventName] || [];
        const register = window.EVENT_STORAGE.__REGISTER || new WeakMap();

        queue.push({
            _this: this,
            owner: owner,
            cb: cb,
        });

        let eventSet;
        if (register.has(this)) {
            eventSet = register.get(this)
        } else {
            eventSet = new Set();
        }
        eventSet.add(eventName);
        register.set(this, eventSet);

        window.EVENT_STORAGE.__REGISTER = register;
        window.EVENT_STORAGE[eventName] = queue;
    },

    /**
     * 推送一条全局消息（用于组件间通信）
     *
     * @param eventName
     * @param sender
     * @param parameter
     * @param cb
     */
    __broadcast__: function (eventName, sender, parameter = {}, cb) {
        if (!eventName || !sender) {
            return;
        }
        let queue = window.EVENT_STORAGE[eventName];
        console.group("广播消息：", eventName);

        if (queue === undefined || queue.length === 0) {
            console.warn(`推送事件：${eventName},不存在订阅者`);
            console.groupEnd();
            return false;
        }

        queue.map(obj => {
            obj.cb(parameter);
            console.log(`推送人：`, sender, `接收者：`, obj.owner, `推送事件：${eventName},参数：`, parameter);
        });

        if (cb) {
            cb();
        }

        console.log(`接收者共：${queue.length}`);
        console.groupEnd();
    },

    /**
     * 订阅者取消订阅消息（用于组件间通信）
     */
    __unsubscribe__: function (...eventName) {

        console.info("===========", window.EVENT_STORAGE);
        // return;

        const register = window.EVENT_STORAGE.__REGISTER;
        if (!register) {
            return
        }

        let eventSet = register.get(this);
        if (eventSet) {

            //没有指定事件则移除全部事件
            if(eventName.length === 0){
                eventSet.forEach(event => {
                    const queue = window.EVENT_STORAGE[event] || [];
                    window.EVENT_STORAGE[event] = queue.filter(obj => obj._this !== this);
                });

                register.delete(this)
            }else{
                eventName.forEach(event => {
                    const queue = window.EVENT_STORAGE[event] || [];
                    window.EVENT_STORAGE[event] = queue.filter(obj => obj._this !== this);
                    eventSet.delete(event);
                });

                if(eventSet.size === 0){
                    register.delete(this)
                }
            }

        }
    }
}

class Broadcast {

    constructor() {
        window.EVENT_STORAGE = window.EVENT_STORAGE || {};
    }

    install(Vue, options) {

        this._installDecorator();
    }

    _installDecorator() {
        //发送广播事件的注解
        window.broadcast = function (eventName) {
            return (target, name, descriptor) => {
                const oldValue = descriptor.value;
                descriptor.value = function () {
                    base.__broadcast__.call(target, eventName, target, oldValue.apply(this, arguments));
                };
                return descriptor;
            }
        };

        //订阅监听的注解
        window.subscribe = function (eventName) {
            return function (target, name, descriptor) {
                base.__subscribe__.call(target, eventName, target, descriptor.value);
                return descriptor;
            }
        };

        //解除监听的注解
        window.unsubscribe = function (...eventName) {
            return function (target, name, descriptor) {
                const oldValue = descriptor.value;
                descriptor.value = function () {
                    base.__unsubscribe__.call(target, ...eventName);
                    oldValue.call(this);
                };
                return descriptor;
            }
        };
    }
}

export default new Broadcast();
