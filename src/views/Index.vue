<style scoped lang="scss">
    .content {
        width: 1440px;
        margin: 0 auto;
    }

    .bg {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    $timerBig: 20s;
    $timerWave: 10s;


    .home {

        .header {
            color: #fff;
            height: 80px;
            background: rgba(0, 0, 0, 0);
            transition: .5s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99;

            &.fixed-mark {
                background: #4b91ff;
            }

            .content {
                height: 100%;
                position: relative;
                max-width: 1440px;
                width: auto;

                .logo {
                    position: absolute;
                    top: 26px;
                    left: 135px;
                    font-size: 20px;
                    cursor: pointer;
                }

                .menu {
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

                        &:hover {
                            background: #fff;
                            color: #282B31;
                        }
                    }

                    .menu-btn {
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

        .banner {
            height: 716px;
            margin-bottom: 270px;

            .content {
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

                .slogan {
                    color: #fff;
                    position: absolute;
                    top: 375px;
                    left: 135px;

                    .title {
                        font-weight: normal;
                        font-size: 35px;
                        margin-bottom: 10px;
                    }

                    .sub-title {
                        font-size: 20px;
                        margin-bottom: 15px;
                    }

                }

                .phone {
                    position: absolute;
                    top: 136px;
                    right: 235px;
                    width: 370px;
                    height: 728px;
                }
            }
        }

        .data {
            width: 1440px;
            margin: 0 auto;
            height: 250px;
            background: #fff;
            position: relative;

            .data-panel {
                position: absolute;
                left: 120px;
                bottom: 74px;
                width: 1200px;
                height: 270px;
                background: gold;
                text-align: center;
                padding-top: 55px;

                .info {
                    width: 220px;
                    display: inline-block;
                    color: #fff;

                    .label {
                        font-size: 24px;
                        display: block;
                        position: relative;
                        padding-bottom: 15px;

                        .sub {
                            font-size: 12px;
                            position: absolute;
                            left: 0;
                            bottom: -15px;
                            width: 100%;
                        }
                    }

                    .num {
                        font-size: 100px;
                        display: block;
                    }
                }
            }
        }

        .evaluate {
            height: 820px;
            position: relative;

            &::before, &::after {
                content: "";
                display: block;
                width: 50%;
                position: absolute;
                top: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
            }

            &::before {
                left: 0;
                /*background: #fff;*/
            }

            &::after {
                right: 0;
                /*background: #F8F9FA;*/
            }

            .content {
                overflow: hidden;
                height: 100%;

                .left {
                    width: 535px;
                    float: left;
                    height: 100%;
                }

                .right {
                    width: 905px;
                    float: left;
                    height: 100%;
                    background: #F8F9FA;
                    position: relative;
                    overflow: hidden;

                    .dialog {
                        width: 570px;
                        height: 180px;
                        position: absolute;
                        transition: 2.5s;

                        &.d-1 {
                            top: 20px;
                            left: 100px;
                            transform: translateX(-250%);

                        }

                        &.d-2 {
                            top: 210px;
                            left: 200px;
                            transform: translateX(250%);

                        }

                        &.d-3 {
                            top: 400px;
                            left: 100px;
                            transform: translateX(-250%);

                        }

                        &.d-4 {
                            top: 590px;
                            left: 200px;
                            transform: translateX(250%);
                        }

                        &.fixed-mark {
                            transform: translateX(0%);
                        }
                    }

                    .input {
                        background: url("../../static/img/input.png") center no-repeat;
                        background-size: contain;
                        position: absolute;
                        bottom: 10px;
                        left: 98px;
                        width: 673px;
                        height: 33px;
                    }
                }
            }
        }

        .recommend {
            height: 1001px;
            position: relative;

            &::before, &::after {
                content: "";
                display: block;
                width: 50%;
                position: absolute;
                top: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
            }

            &::before {
                left: 0;
                background: #4596ff;
            }

            &::after {
                right: 0;
                background: #42bfff;
            }

            .content {
                height: 100%;
                position: relative;

                .oval {
                    position: absolute;

                    &.oval-1 {
                        height: 500px;
                        width: 500px;
                        top: 150px;
                        left: 163px;
                    }

                    &.oval-2 {
                        height: 500px;
                        width: 500px;
                        top: 123px;
                        left: 753px;
                    }

                    &.oval-3 {
                        height: 663px;
                        width: 663px;
                        top: 171px;
                        left: 389px;
                        z-index: 2;
                    }

                    &.oval-4 {
                        height: 381px;
                        width: 381px;
                        top: 499px;
                        left: 295px;
                    }

                    &.oval-5 {
                        height: 556px;
                        width: 556px;
                        top: 455px;
                        left: 645px;
                    }
                }
            }
        }

        .institution {
            height: 528px;
            background: #fff;

            .content {

                .title {
                    width: 833px;
                    height: 204px;
                    margin: 85px auto 35px auto;
                    background-size: 80%;
                }

                .panel-group {
                    text-align: center;

                    .panel {
                        width: 322px;
                        height: 228px;
                        display: inline-block;
                    }
                }
            }
        }

        .capital {
            height: 894px;
            background: #fff;

            .content {
                padding-top: 50px;

                .radar-panel{
                    position: relative;
                    width: 755px;
                    height: 755px;
                    margin: 0 auto;
                    /*background: red;*/

                    .radar-big{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        animation: bigRadar $timerBig infinite linear;

                        @keyframes bigRadar{
                            from{
                                transform: rotate(0deg);
                            }

                            to{
                                transform: rotate(360deg);
                            }
                        }
                    }

                    .radar-min{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        animation: minRadar $timerBig infinite linear;

                        @keyframes minRadar{
                            from{
                                transform: rotate(0deg);
                            }

                            to{
                                transform: rotate(-360deg);
                            }
                        }
                    }

                    .radar-logo{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 284px;
                        height: 284px;
                    }

                    .radar-wave{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        animation: minWave $timerWave infinite linear;

                        @keyframes minWave{
                            from{
                                transform: rotate(0deg);
                            }

                            to{
                                transform: rotate(360deg);
                            }
                        }
                    }

                    .target{
                        position: absolute;
                        background-size: contain;
                        opacity: 0;

                        &.target-1{
                            top: 0;
                            left: 300px;
                            width: 130px;
                            height: 187px;

                            animation: target1 $timerWave infinite linear;

                            @keyframes target1{
                                0%{
                                    opacity: 1;
                                }

                                10%{
                                    opacity: 0;
                                }

                                90%{
                                    opacity: 0;
                                }

                                100%{
                                    opacity: 1;
                                }
                            }
                        }

                        &.target-2{
                            top: 200px;
                            left: 500px;
                            width: 131px;
                            height: 157px;

                            animation: target2 $timerWave infinite linear;

                            @keyframes target2{
                                0%{
                                    opacity: 0;
                                }

                                10%{
                                    opacity: 1;
                                }

                                15%{
                                    opacity: 1;
                                }

                                25%{
                                    opacity: 0;
                                }

                                100%{
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-3{
                            top: 400px;
                            left: 600px;
                            width: 181px;
                            height: 157px;

                            animation: target3 $timerWave infinite linear;

                            @keyframes target3{
                                0%{
                                    opacity: 0;
                                }

                                20%{
                                    opacity: 0;
                                }

                                24%{
                                    opacity: 1;
                                }

                                28%{
                                    opacity: 1;
                                }

                                34%{
                                    opacity: 0;
                                }

                                100%{
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-4{
                            top: 500px;
                            left: 400px;
                            width: 130px;
                            height: 187px;

                            animation: target4 $timerWave infinite linear;

                            @keyframes target4{
                                0%{
                                    opacity: 0;
                                }

                                30%{
                                    opacity: 0;
                                }

                                35%{
                                    opacity: 1;
                                }

                                43%{
                                    opacity: 1;
                                }

                                48%{
                                    opacity: 0;
                                }

                                100%{
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-5{
                            top: 500px;
                            left: 0;
                            width: 181px;
                            height: 192px;

                            animation: target5 $timerWave infinite linear;

                            @keyframes target5{
                                0%{
                                    opacity: 0;
                                }

                                50%{
                                    opacity: 0;
                                }

                                58%{
                                    opacity: 1;
                                }

                                68%{
                                    opacity: 1;
                                }

                                78%{
                                    opacity: 0;
                                }

                                100%{
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-6{
                            top: 200px;
                            left: 100px;
                            width: 130px;
                            height: 187px;

                            animation: target6 10s infinite linear;

                            @keyframes target6{
                                0%{
                                    opacity: 0;
                                }

                                75%{
                                    opacity: 0;
                                }

                                80%{
                                    opacity: 1;
                                }

                                87%{
                                    opacity: 1;
                                }

                                100%{
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }
            }
        }

        .partner {
            height: 1088px;
            background: #333743;

            .table {
                padding: 75px 132px;
                display: block;

                .row {
                    overflow: hidden;
                    border-bottom: 2px solid #fff;

                    &:last-child {
                        border: none;
                    }

                    .cell {
                        text-align: center;
                        float: left;
                        height: 232px;
                        width: 25%;
                        border-right: 2px solid #fff;

                        &:last-child {
                            border: none;
                        }

                        .logo {
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                            display: inline-block;
                            margin-top: 52px;

                            &.last{
                                border-radius: initial;
                                width: 253px;
                                height: 86px;
                                margin-top: 72px;
                            }
                        }

                        .label {
                            display: block;
                            margin-top: 18px;
                            font-size: 18px;
                            color: rgba(255, 255, 255, 1);
                            line-height: 25px;
                        }
                    }
                }
            }
        }

        .footer {
            height: 493px;

            .content {
                height: 100%;
                color: rgba(255, 255, 255, 0.8);
                position: relative;

                .qrcode-group {
                    padding-top: 72px;
                    text-align: center;

                    .item {
                        margin: 0 87px;
                        text-align: center;
                        width: 210px;
                        display: inline-block;

                        img {
                            width: 210px;
                            display: block;
                            margin-bottom: 10px;
                        }

                        label {
                            font-size: 16px;
                        }
                    }
                }

                .info {
                    position: absolute;
                    bottom: 30px;
                    left: 0;
                    width: 100%;
                    font-size: 18px;
                    text-align: center;
                    line-height: 30px;

                    .local {

                    }

                    .mail {

                    }

                    .record {

                    }
                }
            }
        }
    }

</style>

<template>
    <div class="home" id="homeTop">
        <header class="header" :class="{'fixed-mark': headerFixed}">
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

                    <p>国内第一家互联网精品投行 </p>
                    <p>旗下的金牌产品——金客拉小程序</p>
                    <p>创造了一个全新的“互联网+金融生态圈”</p>
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
                    <div class="dialog bg d-1" :class="{'fixed-mark': d1Fixed}"
                         :style="{'background-image': `url(${review1})`}"></div>

                    <div class="dialog bg d-2" :class="{'fixed-mark': d2Fixed}"
                         :style="{'background-image': `url(${review2})`}"></div>

                    <div class="dialog bg d-3" :class="{'fixed-mark': d3Fixed}"
                         :style="{'background-image': `url(${review3})`}"></div>

                    <div class="dialog bg d-4" :class="{'fixed-mark': d3Fixed}"
                         :style="{'background-image': `url(${review4})`}"></div>

                    <div class="input"></div>
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
            <div class="content">
                <div class="radar-panel">
                    <div class="radar-big bg" :style="{'background-image': `url(${radarBig})`}"></div>
                    <div class="radar-min bg" :style="{'background-image': `url(${radarMin})`}"></div>

                    <div class="target target-1 bg" :style="{'background-image': `url(${target1})`}"></div>
                    <div class="target target-2 bg" :style="{'background-image': `url(${target2})`}"></div>
                    <div class="target target-3 bg" :style="{'background-image': `url(${target3})`}"></div>
                    <div class="target target-4 bg" :style="{'background-image': `url(${target4})`}"></div>
                    <div class="target target-5 bg" :style="{'background-image': `url(${target5})`}"></div>
                    <div class="target target-6 bg" :style="{'background-image': `url(${target6})`}"></div>

                    <div class="radar-wave bg" :style="{'background-image': `url(${radarWave})`}"></div>
                    <div class="radar-logo bg" :style="{'background-image': `url(${radarLogo})`}"></div>
                </div>
            </div>
        </div>

        <div class="partner">
            <div class="content">
                <div class="table">
                    <div class="row" v-for="(item, index) in partnerList" :key="index">
                        <div class="cell" v-for="(son, key) in item" :key="key">
                            <template v-if="son.name">
                                <span class="logo bg" :style="{'background-image': `url(${son.img})`}"></span>
                                <p class="label">{{son.name}}</p>
                            </template>
                            <template v-else>
                                <span class="logo last bg" :style="{'background-image': `url(${son.img})`}"></span>
                            </template>
                        </div>
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
                    <p class="record">网站备案：京ICP备17022003号-1</p>
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

    import radarLogo from '../../static/img/radarLogo.png';
    import radarBig from '../../static/img/radarBig.png';
    import radarMin from '../../static/img/radarMin.png';
    import radarWave from '../../static/img/radarWave.png';

    import review1 from '../../static/img/review1.png';
    import review2 from '../../static/img/review2.png';
    import review3 from '../../static/img/review3.png';
    import review4 from '../../static/img/review4.png';

    import partner1 from '../../static/img/partner1.png';
    import partner2 from '../../static/img/partner2.png';
    import partner3 from '../../static/img/partner3.png';
    import partner4 from '../../static/img/partner4.png';
    import partner5 from '../../static/img/partner5.png';
    import partner6 from '../../static/img/partner6.png';
    import partner7 from '../../static/img/partner7.png';
    import partner8 from '../../static/img/partner8.png';
    import partner9 from '../../static/img/partner9.png';
    import partner10 from '../../static/img/partner10.png';
    import partner11 from '../../static/img/partner11.png';
    import partner12 from '../../static/img/partner12.png';
    import partner13 from '../../static/img/partner13.png';
    import partner14 from '../../static/img/partner14.png';
    import partner15 from '../../static/img/partner15.png';
    import partner16 from '../../static/img/partner16.png';

    import target1 from '../../static/img/target1.png';
    import target2 from '../../static/img/target2.png';
    import target3 from '../../static/img/target3.png';
    import target4 from '../../static/img/target4.png';
    import target5 from '../../static/img/target5.png';
    import target6 from '../../static/img/target6.png';

    const partnerList = [
        [
            {name: '中心证券', img: partner1},
            {name: '国金证券', img: partner2},
            {name: '招商证券', img: partner3},
            {name: '国泰瑞丰', img: partner4},
        ], [
            {name: '光大控股', img: partner5},
            {name: '东北证券', img: partner6},
            {name: '九鼎投资', img: partner7},
            {name: '国泰君安证券', img: partner8},
        ], [
            {name: '中金公司', img: partner9},
            {name: '方正证券', img: partner10},
            {name: '天弘基金', img: partner11},
            {name: '达晨创投', img: partner12},
        ], [
            {name: '中信建设证券', img: partner13},
            {name: '鼎辉投资', img: partner14},
            {name: '国信证券', img: partner15},
            {name: '', img: partner16},
        ],

    ];

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

                radarLogo,
                radarBig,
                radarMin,
                radarWave,

                target1,
                target2,
                target3,
                target4,
                target5,
                target6,

                review1,
                review2,
                review3,
                review4,

                partnerList,

                headerFixed: false,
                d1Fixed: false,
                d2Fixed: false,
                d3Fixed: false,
                d4Fixed: false,
            };
        },

        created() {

        },

        mounted() {
            this.initPage();
        },

        methods: {
            initPage() {
                const scroll = () => {
                    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    this.headerFixed = scrollTop > 0;
                    if (scrollTop > 550) {
                        this.d1Fixed = true;
                        this.d2Fixed = true;
                        this.d3Fixed = true;
                        this.d4Fixed = true;
                    }
                };
                scroll();

                window.addEventListener("scroll", scroll);
               /* document.addEventListener("scroll", scroll);*/
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
