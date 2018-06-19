class plugin {

    constructor() {

    }

    install(Vue, options) {
        this.installDirective(Vue);
    }

   
    
    installDirective(Vue) {
        /**
         * 定义元素跟随浮动效果
         * value 为浮层改变的偏移量，为正数则提前变为正常位置
         */
        /*Vue.directive('float-top', {
            inserted(el, binding, vnode) {
                //获取基准元素
                const standardEl = document.getElementById(binding.arg);
                let offset = 0;
                if (binding.value) {
                    offset = binding.value;
                }
                
                window.addEventListener("scroll", function(){
                    const scrollTop = document.documentElement.scrollTop;
                    const topPosition = standardEl.offsetTop;
    
                    
                    console.log("")
                    
                    if (scrollTop > topPosition + offset) {
                        if(!el.className.includes('fixed-mark')){
                            el.className += ' fixed-mark';
                        }
                    } else {
                        el.className = el.className.replace(/ fixed-mark/g, '')
                    }
                });
                
            },
        })*/
    }
}

export default new plugin();
