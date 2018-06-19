<style scoped lang="scss">
    .content{
        width: 1440px;
        margin: 0 auto;
    }

    .bg{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .home{

        .header{
            color: #fff;
            height: 80px;
            background: rgba(0, 0, 0, 0);
            transition: .5s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99;

            &.fixed-mark{
                background: #4b91ff;
            }

            .content{
                height: 100%;
                position: relative;
                max-width: 1440px;
                width: auto;

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
            height: 716px;
            margin-bottom: 270px;

            .content{
                height: 100%;
                position: relative;

                .logo-img {
                    height: 123px;
                    width: 233px;
                    position: absolute;
                    top: 217px;
                    left: 134px;
                    background-image: url("../../static/img/logo.jpg");
                }

                .slogan{
                    color: #fff;
                    position: absolute;
                    top: 375px;
                    left: 135px;

                    .title{
                        font-weight: normal;
                        font-size: 35px;
                        margin-bottom: 10px;
                    }

                    .sub-title{
                        font-size: 20px;
                    }


                    .btn-group{
                        margin-top: 40px;
                        line-height: 50px;
                        font-size: 17px;

                        .scan{
                            width: 167px;
                            height: 50px;
                            margin-right: 20px;
                            border-radius: 6px;
                            background: linear-gradient(to right, #FF8E64 , #FFE641);
                            color: #fff;
                            border: none;
                            cursor: pointer;
                            transition: .3s;

                            &:active{
                                background: linear-gradient(to right, #f78b5f, #f7de3e);
                            }
                        }

                        .about{
                            width: 144px;
                            height: 50px;
                            border-radius: 6px;
                            color: #282B31;
                            background: #fff;
                            border: none;
                            cursor: pointer;
                            transition: .3s;

                            &:active{
                                background: rgb(247, 247, 247);
                            }
                        }
                    }
                }

                .phone{
                    position: absolute;
                    top: 136px;
                    right: 235px;
                    width: 370px;
                    height: 728px;
                }
            }
        }

        .data{
            width: 1440px;
            margin: 0 auto;
            height: 250px;
            background: #fff;
            position: relative;

            .data-panel{
                position: absolute;
                left: 120px;
                bottom: 74px;
                width: 1200px;
                height: 270px;
                background: gold;
                text-align: center;
                padding-top: 55px;

                .info{
                    width: 220px;
                    display: inline-block;
                    color: #fff;

                    .label{
                        font-size: 24px;
                        display: block;
                        position: relative;
                        padding-bottom: 15px;

                        .sub{
                            font-size: 12px;
                            position: absolute;
                            left: 0;
                            bottom: -15px;
                            width: 100%;
                        }
                    }

                    .num{
                        font-size: 100px;
                        display: block;
                    }
                }
            }
        }

        .evaluate{
            height: 820px;
            position: relative;

            &::before, &::after{
                content: "";
                display: block;
                width: 50%;
                position: absolute;
                top: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
            }

            &::before{
                left: 0;
                /*background: #fff;*/
            }

            &::after{
                right: 0;
                /*background: #F8F9FA;*/
            }

            .content{
                overflow: hidden;
                height: 100%;

                .left{
                    width: 535px;
                    float: left;
                    height: 100%;
                }

                .right{
                    width: 905px;
                    float: left;
                    height: 100%;
                    background: #F8F9FA;
                    position: relative;
                    overflow: hidden;

                    .dialog{
                        width: 570px;
                        height: 180px;
                        background: #fff;
                        border-radius: 12px;
                        box-shadow:0 6px 12px 0 rgba(32,33,39,0.08);
                        position: absolute;
                        transition: 2.5s;

                        .head{
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            position: absolute;
                            top: 30px;
                            left: 30px;
                            background: red;
                        }

                        .text{
                            width:430px;
                            font-size:14px;
                            color:rgba(40,43,49,1);
                            line-height:25px;
                            position: absolute;
                            top: 23px;
                            font-weight: bold;
                        }

                        .line{
                            width:510px;
                            height:1px;
                            background:rgba(231,232,234,1);
                            margin: 120px auto 0 auto;
                        }

                        .icon{
                            display: inline-block;
                            width:16px;
                            height: 16px;
                            background: url("../../static/svg/twitter.svg") center no-repeat;
                            background-size: contain;
                            position: absolute;
                            bottom: 30px;
                            right: 30px;
                        }

                        .label{
                            margin: 13px 30px 0 30px;
                            display: block;
                            font-size:12px;
                            color:rgba(153,158,168,1);
                            line-height:25px;
                        }

                        &.d-1{
                            top: 120px;
                            left: 100px;
                            transform: translateX(-250%);

                            .text{
                                right: 30px;
                            }
                        }

                        &.d-2{
                            top: 320px;
                            left: 200px;
                            transform: translateX(250%);

                            .head{
                                right: 30px;
                                left: auto;
                            }

                            .text{
                                left: 30px;
                                text-align: right;
                            }

                            .icon{
                                left: 30px;
                                right: auto;
                            }

                            .label{
                                text-align: right;
                            }
                        }

                        &.d-3{
                            top: 520px;
                            left: 100px;
                            transform: translateX(-250%);

                            .text{
                                right: 30px;
                            }
                        }

                        &.fixed-mark{
                            transform: translateX(0%);
                        }
                    }
                }
            }
        }

        .recommend{
            height: 1001px;
            position: relative;

            &::before, &::after{
                content: "";
                display: block;
                width: 50%;
                position: absolute;
                top: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
            }

            &::before{
                left: 0;
                background: #4596ff;
            }

            &::after{
                right: 0;
                background: #42bfff;
            }

            .content{
                height: 100%;
                position: relative;

                .oval{
                    position: absolute;

                    &.oval-1{
                        height: 500px;
                        width: 500px;
                        top: 150px;
                        left: 163px;
                    }

                    &.oval-2{
                        height: 500px;
                        width: 500px;
                        top: 123px;
                        left: 753px;
                    }

                    &.oval-3{
                        height: 663px;
                        width: 663px;
                        top: 171px;
                        left: 389px;
                        z-index: 2;
                    }

                    &.oval-4{
                        height: 381px;
                        width: 381px;
                        top: 499px;
                        left: 295px;
                    }

                    &.oval-5{
                        height: 556px;
                        width: 556px;
                        top: 455px;
                        left: 645px;
                    }
                }
            }
        }

        .institution{
            height: 628px;
            background: #fff;

            .content{

                .title{
                    width: 833px;
                    height: 204px;
                    margin: 85px auto 35px auto;
                    background-size: 80%;
                }

                .panel-group{
                    text-align: center;

                    .panel{
                        width: 322px;
                        height: 228px;
                        display: inline-block;
                    }
                }
            }
        }

        .capital{
            height: 894px;
            background:linear-gradient(134.9deg,rgba(255,255,255,1),rgba(183,190,172,1));
            position: relative;

           /* &::before, &::after{
                content: "";
                display: block;
                width: 50%;
                position: absolute;
                top: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
            }

            &::before{
                left: 0;
                background: #fff;
            }

            &::after{
                right: 0;
                background: #B7BEAC;
            }*/

            .content{

            }
        }

        .partner{
            height: 988px;
            background: #333743;

            .table{
                padding: 112px 132px;
                display: block;

                .row{
                    overflow: hidden;
                    border-bottom: 2px solid #fff;

                    &:last-child{
                        border: none;
                    }

                    .cell{
                        text-align: center;
                        float: left;
                        height: 232px;
                        width: 33%;
                        border-right: 2px solid #fff;

                        &:last-child{
                            border: none;
                        }

                        .logo{
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                            display: inline-block;
                            background: red;
                            margin-top: 52px;
                        }

                        .label{
                            display: block;
                            margin-top: 18px;
                            font-size:18px;
                            color:rgba(255,255,255,1);
                            line-height:25px;
                        }
                    }
                }
            }
        }

        .footer{
            height: 493px;

            .content{
                height: 100%;
                color: rgba(255, 255, 255, 0.8);
                position: relative;

                .qrcode-group{
                    padding-top: 72px;
                    text-align: center;

                    .item{
                        margin: 0 87px;
                        text-align: center;
                        width: 210px;
                        display: inline-block;

                        img{
                            width: 210px;
                            display: block;
                            margin-bottom: 10px;
                        }

                        label{
                            font-size: 16px;
                        }
                    }
                }

                .info{
                    position: absolute;
                    bottom: 30px;
                    left: 0;
                    width: 100%;
                    font-size: 18px;
                    text-align: center;
                    line-height: 30px;

                    .local{

                    }

                    .mail{

                    }

                    .record{

                    }
                }
            }
        }
    }

</style>

<template>
    <div class="home" id="homeTop">
        <header class="header" v-float-top:homeTop>
            <div class="content">
                <span class="logo">金客拉</span>
                <p class="menu">
                    <span class="item">项目</span>
                    <span class="item">资金</span>
                    <span class="item">人脉</span>
                    <span class="item">关于我们</span>
                    <span class="menu-btn"></span>
                </p>
            </div>
        </header>

        <div class="banner bg" :style="{'background-image': `url(${bannerBg})`}">
            <div class="content">
                <span class="logo-img bg"></span>
                <div class="slogan">
                    <h2 class="title">金客拉</h2>
                    <p class="sub-title">做金融，更简单</p>

                    <div class="btn-group">
                        <button class="scan">扫码进入小程序</button>
                        <button class="about">关于我们</button>
                    </div>
                </div>

                <div class="phone bg" :style="{'background-image': `url(${Phone})`}"></div>
            </div>
        </div>

        <div class="data">
            <div class="data-panel bg" :style="{'background-image': `url(${dataBg})`}">
                <div class="info">
                    <label class="label">业务总量</label>
                    <span class="num">8k</span>
                </div>
                <div class="info">
                    <label class="label">
                        业务更新速度
                        <span class="sub">（按最高的月数据）</span>
                    </label>
                    <span class="num">800</span>
                </div>
                <div class="info">
                    <label class="label">顶尖金融人</label>
                    <span class="num">50k</span>
                </div>
                <div class="info">
                    <label class="label">机构数量</label>
                    <span class="num">10k</span>
                </div>
            </div>
        </div>

        <div class="evaluate">
            <div class="content">
                <div class="left bg" :style="{'background-image': `url(${problem})`}"></div>
                <div class="right">
                    <div class="dialog d-1" id="d1" v-float-top:d1="200">
                        <span class="head"></span>
                        <div class="text">
                            <p>你还不知道金客拉吗？通过认证上传项目，买方主动就能找到你了！</p>
                            <p>找人投资可快了～</p>
                        </div>
                        <div class="line"></div>
                        <span class="icon"></span>
                        <label class="label">玲玲—投行—项目经理</label>
                    </div>

                    <div class="dialog d-2" id="d2" v-float-top:d2="300">
                        <span class="head"></span>
                        <div class="text">
                            <p>我看你发的朋友圈了，我也没有资金资源。</p>
                            <p>干紧上金客拉啊～解决公司稀缺额度可快了。</p>
                        </div>
                        <div class="line"></div>
                        <span class="icon"></span>
                        <label class="label">Juan Richards - Photographer</label>
                    </div>

                    <div class="dialog d-3" id="d3" v-float-top:d3="400">
                        <span class="head"></span>
                        <div class="text">
                            <p>金客拉上有很多好项目，也有资金方。</p>
                            <p>不仅可以拓展你的人脉，还能有效的解决你的问题。</p>
                        </div>
                        <div class="line"></div>
                        <span class="icon"></span>
                        <label class="label">Boss—将总</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="recommend">
            <div class="content bg" :style="{'background-image': `url(${recommendBg})`}">
                <div class="oval bg oval-1" :style="{'background-image': `url(${Oval1})`}"></div>
                <div class="oval bg oval-2" :style="{'background-image': `url(${Oval2})`}"></div>
                <div class="oval bg oval-3" :style="{'background-image': `url(${Oval3})`}"></div>
                <div class="oval bg oval-4" :style="{'background-image': `url(${Oval4})`}"></div>
                <div class="oval bg oval-5" :style="{'background-image': `url(${Oval5})`}"></div>
            </div>
        </div>

        <div class="institution">
            <div class="content">
                <div class="title bg" :style="{'background-image': `url(${companyBg})`}"></div>
                <div class="panel-group">
                    <div class="panel bg panel-1" :style="{'background-image': `url(${copy1})`}"></div>
                    <div class="panel bg panel-2" :style="{'background-image': `url(${copy2})`}"></div>
                    <div class="panel bg panel-3" :style="{'background-image': `url(${copy3})`}"></div>
                    <div class="panel bg panel-4" :style="{'background-image': `url(${copy4})`}"></div>
                </div>
            </div>
        </div>

        <div class="capital">

        </div>

        <div class="partner">
            <div class="table">
                <div class="row">
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                    <div class="cell">
                        <span class="logo"></span>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer bg" :style="{'background-image': `url(${footerBg})`}">
            <div class="content">

                <div class="qrcode-group">
                    <div class="item">
                        <img :src="weixin">
                        <label>金客拉公众号</label>
                    </div>
                    <div class="item">
                        <img :src="xiaochengxu">
                        <label>金客拉小程序</label>
                    </div>
                </div>

                <div class="info">
                    <p class="location">北京市海淀区学院路20号院北教一层117号</p>
                    <p class="mail">general@linkfinancier.com</p>
                    <p class="record">京备123456789</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import footerBg from '../../static/img/footerBg.png';
    import dataBg from '../../static/img/dataBg.jpg';
    import Phone from '../../static/img/Phone.png';
    import bannerBg from '../../static/img/bannerBg.jpg';
    import recommendBg from '../../static/img/recommendBg.jpg';
    import problem from '../../static/img/problem.jpg';
    import companyBg from '../../static/img/companyBg.png';

    import copy1 from '../../static/img/copy1.png';
    import copy2 from '../../static/img/copy2.png';
    import copy3 from '../../static/img/copy3.png';
    import copy4 from '../../static/img/copy4.png';

    import Oval1 from '../../static/img/Oval1.png';
    import Oval2 from '../../static/img/Oval2.png';
    import Oval3 from '../../static/img/Oval3.png';
    import Oval4 from '../../static/img/Oval4.png';
    import Oval5 from '../../static/img/Oval5.png';

    import weixin from '../../static/img/qrcode-weixin.jpg';
    import xiaochengxu from '../../static/img/qrcode-xiaochengxu.jpg';

    export default {
        data() {
            return {
                Phone,
                footerBg,
                dataBg,
                bannerBg,
                recommendBg,
                problem,
                companyBg,

                copy1,
                copy2,
                copy3,
                copy4,

                Oval1,
                Oval2,
                Oval3,
                Oval4,
                Oval5,

                weixin,
                xiaochengxu,
            };
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
