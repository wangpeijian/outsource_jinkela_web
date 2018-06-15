<style scoped lang="scss">
    .home{
        height: 1440px;
        background: #ccc;

        .header{
            color: #fff;
            height: 80px;
            background: rgba(0, 0, 0, 0);
            transition: .5s;

            &.fixed-mark{
                top: 0;
                width: 100%;
                left: 0;
                right: 0;
                background: #4b91ff;
            }

            .content{
                height: 100%;
                max-width: 1440px;
                margin: 0 auto;
                position: relative;

                .logo{
                    position: absolute;
                    top: 26px;
                    left: 135px;
                    font-size: 20px;
                    cursor: pointer;
                }

                .menu{
                    position: absolute;
                    top: 21px;
                    right: 127px;

                    .item {
                        display: inline-block;
                        padding: 0 20px;
                        line-height: 40px;
                        text-align: center;
                        cursor: pointer;
                        background: rgba(255, 255, 255, 0);
                        border-radius: 6px;
                        transition: .2s;
                        font-size: 14px;

                        &:hover{
                            background: #fff;
                            color: #282B31;
                        }
                    }

                    .menu-btn{
                        display: inline-block;
                        background: url("../../static/svg/menu.svg") center no-repeat;
                        background-size: contain;
                        width: 16px;
                        height: 16px;
                        position: relative;
                        top: 3px;
                        margin: 0 20px;
                    }
                }
            }
        }

        .banner{
            height: 689px;
            background: #4b91ff;
            margin-bottom: 180px;
        }
    }

</style>

<template>
    <div class="home" id="homeTop">
        <header class="header" v-float-top:homeTop>
            <div class="content">
                <span class="logo">
                金客拉
            </span>

                <menu class="menu">
                    <span class="item">项目</span>
                    <span class="item">资金</span>
                    <span class="item">人脉</span>
                    <span class="item">关于我们</span>
                    <span class="menu-btn"></span>
                </menu>
            </div>
        </header>

        <div class="banner">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        computed: {},

        watch: {},

        components: {},
    }
</script>
