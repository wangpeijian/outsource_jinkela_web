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

    $timerDialog: 15s;

    /*四个动画整体20s*/
    $allTime: 24s;

    /*雷达动画*/
    $timerBig: 2.5s;
    $timerWave: 8s;

    /*名片动画*/
    $timerCard: 4s;

    /*聊天动画*/
    $timerTalk: 8s;

    /*网络动画*/
    $timerNetwork: 8s;

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
            background: #22272F;

            &.fixed-mark {
                background: #22272F;
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

                        a {
                            color: #fff;
                        }

                        &:hover {
                            background: #fff;

                            a {
                                color: #282B31;
                            }
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
            overflow: hidden;
            background: #000;

            .content {
                height: 100%;
                position: relative;

                .logo-img {
                    height: 123px;
                    width: 233px;
                    position: absolute;
                    top: 217px;
                    left: 134px;
                    background-size: contain;
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
            background: #fff;
            position: relative;

            .data-panel {
                height: 400px;
                background: #ffffff;
                text-align: center;
                padding-top: 70px;

                .text {
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 50px;
                }

                .info {
                    width: 320px;
                    display: inline-block;
                    color: #000000;

                    .num {
                        font-size: 72px;
                        display: block;
                        padding-bottom: 15px;
                    }

                    .label {
                        font-size: 24px;
                        display: block;
                        position: relative;
                        color: #8D8D8D;
                    }
                }
            }
        }

        .evaluate {
            height: 820px;
            position: relative;

            .content {
                overflow: hidden;
                height: 100%;

                .left {
                    width: 535px;
                    float: left;
                    height: 100%;
                    border: 1px solid #E7E8EA;
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

                        &.d-1 {
                            left: 100px;
                            transform: translateX(-250%);
                        }

                        &.d-2 {
                            left: 200px;
                            transform: translateX(250%);

                        }

                        &.d-3 {
                            left: 100px;
                            transform: translateX(-250%);

                        }

                        &.d-4 {
                            top: 590px;
                            left: 200px;
                            transform: translateX(250%);
                        }

                        &.fixed-mark {
                            &.d-1 {
                                animation: dialog1 $timerDialog forwards infinite;

                                @keyframes dialog1 {
                                    0% {
                                        top: 590px;
                                        transform: translateX(-250%);
                                    }
                                    17% {
                                        top: 590px;
                                        transform: translateX(0);
                                    }
                                    34% {
                                        top: 400px;
                                        transform: translateX(0);
                                    }
                                    51% {
                                        top: 210px;
                                        transform: translateX(0);
                                    }
                                    68% {
                                        top: 20px;
                                        transform: translateX(0);
                                    }
                                    85% {
                                        top: 20px;
                                        transform: translateX(0);
                                    }
                                    100% {
                                        top: 20px;
                                        transform: translateX(-250%);
                                    }
                                }
                            }

                            &.d-2 {
                                animation: dialog2 $timerDialog forwards infinite;

                                @keyframes dialog2 {
                                    0% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                    17% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                    34% {
                                        top: 590px;
                                        transform: translateX(0);
                                    }
                                    51% {
                                        top: 400px;
                                        transform: translateX(0);
                                    }
                                    68% {
                                        top: 210px;
                                        transform: translateX(0);
                                    }
                                    85% {
                                        top: 210px;
                                        transform: translateX(0);
                                    }
                                    100% {
                                        top: 210px;
                                        transform: translateX(250%);
                                    }
                                }

                            }

                            &.d-3 {
                                animation: dialog3 $timerDialog forwards infinite;

                                @keyframes dialog3 {
                                    0% {
                                        top: 590px;
                                        transform: translateX(-250%);
                                    }
                                    17% {
                                        top: 590px;
                                        transform: translateX(-250%);
                                    }
                                    34% {
                                        top: 590px;
                                        transform: translateX(-250%);
                                    }
                                    51% {
                                        top: 590px;
                                        transform: translateX(0);
                                    }
                                    68% {
                                        top: 400px;
                                        transform: translateX(0);
                                    }
                                    85% {
                                        top: 400px;
                                        transform: translateX(0);
                                    }
                                    100% {
                                        top: 400px;
                                        transform: translateX(-250%);
                                    }
                                }

                            }

                            &.d-4 {
                                animation: dialog4 $timerDialog forwards infinite;

                                @keyframes dialog4 {
                                    0% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                    17% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                    34% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                    51% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                    68% {
                                        top: 590px;
                                        transform: translateX(0);
                                    }
                                    85% {
                                        top: 590px;
                                        transform: translateX(0);
                                    }
                                    100% {
                                        top: 590px;
                                        transform: translateX(250%);
                                    }
                                }
                            }
                        }
                    }

                    .input {
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

            .content {
                height: 100%;
                position: relative;

                .title {
                    font-size: 50px;
                    text-align: center;
                    letter-spacing: 30px;
                }

                .phonex {
                    position: absolute;
                    height: 787px;
                    width: 394px;
                    left: 242px;
                    top: 200px;
                }

                .label {
                    position: absolute;
                    top: 480px;
                    font-size: 70px;
                    right: 253px;
                    text-align: center;
                }
            }
        }

        .institution {
            height: 528px;
            background: #fff;

            .content {
                padding-top: 100px;

                .title {
                    font-size: 50px;
                    text-align: center;
                    letter-spacing: 30px;
                    margin-bottom: 80px;
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
            height: 994px;
            background: #fff;
            padding-top: 90px;

            .content {
                overflow: hidden;
                position: relative;
                height: 855px;

                .radar-panel {
                    position: absolute;
                    top: 0;
                    left: 342px;
                    width: 755px;
                    height: 755px;
                    margin: 0 auto;
                    transform: translateX(0);

                    animation: radarPanel $allTime infinite linear;

                    @keyframes radarPanel {
                        0% {
                            transform: translateX(0);
                        }

                        29% {
                            transform: translateX(0);
                        }

                        32% {
                            transform: translateX(-200%);
                        }

                        100% {
                            transform: translateX(-200%);
                        }
                    }

                    .radar-big {
                        position: absolute;
                        height: 755px;
                        width: 755px;
                        top: 0;
                        left: 0;
                        animation: bigRadar $timerBig infinite linear;

                        @keyframes bigRadar {
                            from {
                                transform: rotate(0deg);
                            }

                            to {
                                transform: rotate(360deg);
                            }
                        }
                    }

                    .radar-min {
                        position: absolute;
                        top: 124px;
                        left: 124px;
                        height: 506px;
                        width: 506px;
                        animation: minRadar $timerBig infinite linear;

                        @keyframes minRadar {
                            from {
                                transform: rotate(0deg);
                            }

                            to {
                                transform: rotate(-360deg);
                            }
                        }
                    }

                    .radar-logo {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 284px;
                        height: 284px;
                    }

                    .radar-wave {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 755px;
                        width: 755px;
                        animation: minWave $timerWave infinite linear;

                        @keyframes minWave {
                            from {
                                transform: rotate(0deg);
                            }

                            to {
                                transform: rotate(360deg);
                            }
                        }
                    }

                    .target {
                        position: absolute;
                        background-size: contain;
                        opacity: 0;

                        &.target-1 {
                            top: 0;
                            left: 300px;
                            width: 130px;
                            height: 187px;

                            animation: target1 $timerWave infinite linear;

                            @keyframes target1 {
                                0% {
                                    opacity: 0;
                                }
                                10% {
                                    opacity: 1;
                                }
                                15% {
                                    opacity: 1;
                                }
                                25% {
                                    opacity: 0;
                                }
                                100% {
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-2 {
                            top: 200px;
                            left: 500px;
                            width: 131px;
                            height: 157px;

                            animation: target2 $timerWave infinite linear;

                            @keyframes target2 {
                                0% {
                                    opacity: 0;
                                }
                                15% {
                                    opacity: 0;
                                }
                                25% {
                                    opacity: 1;
                                }

                                30% {
                                    opacity: 1;
                                }
                                40% {
                                    opacity: 0;
                                }
                                100% {
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-3 {
                            top: 400px;
                            left: 600px;
                            width: 181px;
                            height: 157px;

                            animation: target3 $timerWave infinite linear;

                            @keyframes target3 {
                                0% {
                                    opacity: 0;
                                }
                                30% {
                                    opacity: 0;
                                }
                                40% {
                                    opacity: 1;
                                }
                                45% {
                                    opacity: 1;
                                }
                                55% {
                                    opacity: 0;
                                }
                                100% {
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-4 {
                            top: 500px;
                            left: 400px;
                            width: 130px;
                            height: 187px;

                            animation: target4 $timerWave infinite linear;

                            @keyframes target4 {
                                0% {
                                    opacity: 0;
                                }
                                45% {
                                    opacity: 0;
                                }
                                55% {
                                    opacity: 1;
                                }
                                60% {
                                    opacity: 1;
                                }
                                70% {
                                    opacity: 0;
                                }
                                100% {
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-5 {
                            top: 100px;
                            left: 50px;
                            width: 181px;
                            height: 192px;

                            animation: target5 $timerWave infinite linear;

                            @keyframes target5 {
                                0% {
                                    opacity: 0;
                                }
                                75% {
                                    opacity: 0;
                                }
                                80% {
                                    opacity: 1;
                                }
                                95% {
                                    opacity: 1;
                                }
                                100% {
                                    opacity: 0;
                                }
                            }
                        }

                        &.target-6 {
                            top: 500px;
                            left: 0;
                            width: 130px;
                            height: 187px;
                            animation: target6 $timerWave infinite linear;
                            transform: scale(1, 1);

                            @keyframes target6 {
                                0% {
                                    opacity: 0;
                                    transform: scale(1, 1);
                                }
                                60% {
                                    opacity: 0;
                                }
                                65% {
                                    opacity: 1;
                                    transform: scale(1, 1);
                                }
                                67% {
                                    opacity: 1;
                                    transform: scale(1.5, 1.5);
                                }
                                100% {
                                    opacity: 1;
                                    transform: scale(1.5, 1.5);
                                }
                            }
                        }
                    }
                }

                .card-panel {
                    position: absolute;
                    top: 0;
                    left: 342px;
                    width: 755px;
                    height: 755px;
                    margin: 0 auto;
                    transform: translateX(200%);

                    animation: cardPanel $allTime infinite linear;

                    @keyframes cardPanel {
                        0% {
                            transform: translateX(200%);
                        }

                        31% {
                            transform: translateX(200%);
                        }

                        33% {
                            transform: translateX(0);
                        }

                        40% {
                            transform: translateX(0);
                        }

                        43% {
                            transform: translateX(-200%);
                        }

                        100% {
                            transform: translateX(-200%);
                        }
                    }

                    .left-people {
                        position: absolute;
                        left: -100px;
                        top: 200px;
                        width: 270px;
                        height: 270px;
                    }

                    .left-card {
                        position: absolute;
                        left: 0;
                        top: 400px;
                        width: 344px;
                        height: 226px;
                        transform: translateX(0%);
                        animation: card1 $timerCard infinite linear alternate;

                        @keyframes card1 {
                            0% {
                                transform: translateX(0%);
                            }

                            50% {
                                transform: translateX(100%);
                            }

                            100% {
                                transform: translateX(0%);
                            }
                        }
                    }

                    .right-people {
                        position: absolute;
                        right: -100px;
                        top: 250px;
                        width: 134px;
                        height: 143px;
                    }

                    .right-card {
                        position: absolute;
                        right: 0;
                        top: 100px;
                        width: 344px;
                        height: 226px;
                        transform: translateX(0%);
                        animation: card2 $timerCard infinite linear alternate;

                        @keyframes card2 {
                            0% {
                                transform: translateX(0%);
                            }

                            50% {
                                transform: translateX(-100%);
                            }

                            100% {
                                transform: translateX(0%);
                            }
                        }
                    }
                }

                .talk-panel {
                    position: absolute;
                    top: 0;
                    left: 342px;
                    width: 755px;
                    height: 755px;
                    margin: 0 auto;
                    transform: translateX(200%);

                    animation: talkPanel $allTime infinite linear;

                    @keyframes talkPanel {
                        0% {
                            transform: translateX(200%);
                        }

                        40% {
                            transform: translateX(200%);
                        }

                        43% {
                            transform: translateX(0);
                        }

                        66% {
                            transform: translateX(0);
                        }

                        69% {
                            transform: translateX(-200%);
                        }

                        100% {
                            transform: translateX(-200%);
                        }
                    }

                    .left-people {
                        position: absolute;
                        left: -200px;
                        top: 200px;
                        width: 270px;
                        height: 270px;
                    }

                    .right-people {
                        position: absolute;
                        right: -200px;
                        top: 250px;
                        width: 134px;
                        height: 143px;
                    }

                    .talk {
                        position: absolute;
                        transform: translateX(0%);
                        opacity: 0;

                        &.left {
                            left: 70px;
                        }

                        &.right {
                            right: -80px;
                        }

                        &.talk-1 {
                            height: 110px;
                            width: 570px;
                            top: 45px;

                            animation: talk1 $timerTalk infinite linear;

                            @keyframes talk1 {
                                0% {
                                    opacity: 0;
                                }

                                25% {
                                    opacity: 0;
                                }

                                37.5% {
                                    opacity: 1;
                                }

                                100% {
                                    opacity: 1;
                                }
                            }
                        }

                        &.talk-2 {
                            height: 147px;
                            width: 647px;
                            top: 150px;

                            animation: talk2 $timerTalk infinite linear;

                            @keyframes talk2 {
                                0% {
                                    opacity: 0;
                                }

                                37.5% {
                                    opacity: 0;
                                }

                                50% {
                                    opacity: 1;
                                }

                                100% {
                                    opacity: 1;
                                }
                            }
                        }

                        &.talk-3 {
                            height: 110px;
                            width: 423px;
                            top: 285px;

                            animation: talk3 $timerTalk infinite linear;

                            @keyframes talk3 {
                                0% {
                                    opacity: 0;
                                }

                                50% {
                                    opacity: 0;
                                }

                                62.5% {
                                    opacity: 1;
                                }

                                100% {
                                    opacity: 1;
                                }
                            }
                        }

                        &.talk-4 {
                            height: 228px;
                            width: 647px;
                            top: 385px;

                            animation: talk4 $timerTalk infinite linear;

                            @keyframes talk4 {
                                0% {
                                    opacity: 0;
                                }

                                62.5% {
                                    opacity: 0;
                                }

                                75% {
                                    opacity: 1;
                                }

                                100% {
                                    opacity: 1;
                                }
                            }
                        }

                        &.talk-5 {
                            height: 110px;
                            width: 306px;
                            top: 600px;

                            animation: talk5 $timerTalk infinite linear;

                            @keyframes talk5 {
                                0% {
                                    opacity: 0;
                                }

                                75% {
                                    opacity: 0;
                                }

                                87.5% {
                                    opacity: 1;
                                }

                                100% {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }

                .network-panel {
                    position: absolute;
                    top: 0;
                    left: 342px;
                    width: 755px;
                    height: 755px;
                    margin: 0 auto;
                    transform: translateX(200%);

                    animation: networkPanel $allTime infinite linear;

                    @keyframes networkPanel {
                        0% {
                            transform: translateX(200%);
                        }

                        66% {
                            transform: translateX(200%);
                        }

                        69% {
                            transform: translateX(0);
                        }

                        95% {
                            transform: translateX(0);
                        }

                        98% {
                            transform: translateX(-200%);
                        }

                        100% {
                            transform: translateX(-200%);
                        }
                    }

                    .network {
                        position: absolute;
                        top: 0;
                        left: -100px;
                        width: 729px;
                        height: 839px;
                        z-index: 2;
                    }

                    .line {
                        background: #979797;
                        height: 2px;
                        position: absolute;
                        top: 400px;
                        left: 300px;
                        right: -150px;

                        animation: lineTime $timerNetwork infinite linear;

                        @keyframes lineTime {
                            0% {
                                right: -150px;
                            }
                            100% {
                                right: 200px;
                            }
                        }
                    }

                    .people {
                        position: absolute;
                        right: -200px;
                        top: 350px;
                        width: 134px;
                        height: 143px;
                        animation: peopleTime $timerNetwork infinite linear;

                        @keyframes peopleTime {
                            0% {
                                right: -150px;
                            }
                            100% {
                                right: 100px;
                            }
                        }
                    }
                }
            }
        }

        .partner {

            .table {
                padding: 75px 132px;
                display: block;
                text-align: center;

                .row {

                    .cell {
                        text-align: center;
                        width: 12.5%;
                        padding: 20px 0;
                        display: inline-block;

                        .logo {
                            width: 100px;
                            height: 100px;
                            display: inline-block;
                        }
                    }
                }
            }
        }

        .footer {
            background: #22272f;

            .content {
                overflow: hidden;
                height: 100%;
                color: rgba(255, 255, 255, 0.8);
                position: relative;

                .qrcode-group {
                    float: right;
                    width: 600px;
                    padding: 72px 100px 72px 0;
                    text-align: center;

                    .item {
                        margin: 0 30px;
                        text-align: center;
                        width: 180px;
                        display: inline-block;

                        img {
                            width: 180px;
                            display: block;
                            margin-bottom: 10px;
                        }

                        label {
                            font-size: 16px;
                        }
                    }
                }

                .info {
                    padding: 62px 30px 72px 90px;
                    float: left;
                    width: 840px;
                    font-size: 24px;
                    line-height: 48px;

                    .local {

                    }

                    .mail {

                        .phone {
                            padding-left: 10px;
                        }
                    }

                    .record {
                        margin-top: 50px;
                    }
                }
            }
        }

        .top-btn {
            position: fixed;
            right: 50px;
            bottom: 200px;
            background-image: url("../../static/img/topBtn.png");
            height: 50px;
            width: 50px;
            cursor: pointer;
        }
    }

</style>

<template>
    <div class="home" id="homeTop">
        <header class="header" :class="{'fixed-mark': headerFixed}">
            <div class="content">
                <span class="logo">金客拉</span>
                <p class="menu">
                    <span class="item"><a href="#recommend">项目</a></span>
                    <span class="item"><a href="#institution">资金</a></span>
                    <span class="item"><a href="#capital">人脉</a></span>
                    <span class="item"><a href="#partner">关于我们</a></span>
                    <span class="menu-btn"></span>
                </p>
            </div>
        </header>

        <div class="banner bg"><!--:style="{'background-image': `url(${bannerBg})`}"-->
            <div class="content">
                <span class="logo-img bg" :style="{'background-image': `url(${logo})`}"></span>
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
            <div class="data-panel bg">
                <p class="text"><span class="with-line">全领域金融市场</span>动态数据库</p>
                <div class="info">
                    <span class="num">8000+</span>
                    <label class="label">业务总量</label>
                </div>
                <div class="info">
                    <span class="num">800+</span>
                    <label class="label">业务更新速度</label>
                </div>
                <div class="info">
                    <span class="num">50000+</span>
                    <label class="label">顶尖金融人</label>
                </div>
                <div class="info">
                    <span class="num">10000+</span>
                    <label class="label">机构数量</label>
                </div>
            </div>
        </div>


        <div class="recommend" id="recommend">
            <div class="content bg"><!--:style="{'background-image': `url(${recommendBg})`}"-->
                <!--<div class="oval bg oval-1"></div>-->  <!--:style="{'background-image': `url(${Oval1})`}"-->
                <!--<div class="oval bg oval-2"></div>-->  <!--:style="{'background-image': `url(${Oval2})`}"-->
                <!--<div class="oval bg oval-3"></div>--> <!--:style="{'background-image': `url(${Oval3})`}"-->
                <!--<div class="oval bg oval-4"></div>-->  <!--:style="{'background-image': `url(${Oval4})`}"-->
                <!--<div class="oval bg oval-5"></div>-->  <!--:style="{'background-image': `url(${Oval5})`}"-->
                <h1 class="title">推荐项目</h1>
                <div class="phonex bg" :style="{'background-image': `url(${phonex})`}"></div>
                <div class="label">
                    <p>项目</p>
                    <p>触手可及</p>
                </div>
            </div>
        </div>


        <div class="institution" id="institution">
            <div class="content">
                <div class="title">机构信息</div><!--:style="{'background-image': `url(${companyBg})`}"-->
                <div class="panel-group">
                    <div class="panel bg panel-1" :style="{'background-image': `url(${copy1})`}"></div>
                    <div class="panel bg panel-2" :style="{'background-image': `url(${copy2})`}"></div>
                    <div class="panel bg panel-3" :style="{'background-image': `url(${copy3})`}"></div>
                    <div class="panel bg panel-4" :style="{'background-image': `url(${copy4})`}"></div>
                </div>
            </div>
        </div>

        <div class="capital" id="capital">
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

                <div class="card-panel">
                    <span class="left-people bg" :style="{'background-image': `url(${radarLogo})`}"></span>
                    <span class="left-card bg" :style="{'background-image': `url(${card1})`}"></span>

                    <span class="right-people bg" :style="{'background-image': `url(${target6})`}"></span>
                    <span class="right-card bg" :style="{'background-image': `url(${card2})`}">></span>
                </div>

                <div class="talk-panel">
                    <span class="left-people bg" :style="{'background-image': `url(${radarLogo})`}"></span>

                    <span class="talk left talk-1  bg" :style="{'background-image': `url(${talk1})`}"></span>
                    <span class="talk right talk-2 bg" :style="{'background-image': `url(${talk2})`}"></span>
                    <span class="talk left talk-3  bg" :style="{'background-image': `url(${talk3})`}"></span>
                    <span class="talk right talk-4 bg" :style="{'background-image': `url(${talk4})`}"></span>
                    <span class="talk left talk-5 bg" :style="{'background-image': `url(${talk5})`}"></span>

                    <span class="right-people bg" :style="{'background-image': `url(${target6})`}"></span>
                </div>

                <div class="network-panel">
                    <span class="network bg" :style="{'background-image': `url(${network})`}"></span>
                    <span class="line"></span>
                    <span class="people bg" :style="{'background-image': `url(${target6})`}"></span>
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

                    <div class="input bg"></div>
                </div>
            </div>
        </div>

        <div class="partner" id="partner">
            <div class="content">
                <div class="table">
                    <!--  <img class="title" :src="partner16">-->
                    <div class="row" v-for="(item, index) in partnerList" :key="index">
                        <div class="cell" v-for="(son, key) in item" :key="key">
                            <span class="logo bg" :style="{'background-image': `url(${son.img})`}"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer bg"><!--:style="{'background-image': `url(${footerBg})`}"-->
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
                    <p>北京金客科技有限公司</p>
                    <p class="location">北京市海淀区学院路20号院北教一层117号</p>
                    <p class="mail">general@linkfinancier.com <span class="phone">010-59418080</span></p>
                    <p class="record">网站备案：京ICP备17022003号-1</p>
                </div>
            </div>
        </footer>

        <div class="top-btn bg" v-show="headerFixed" @click="toTop"></div>
    </div>
</template>

<script>
    import Phone from '../../static/img/Phone.png';
    import logo from '../../static/img/logo.png';
    import problem from '../../static/img/problem.jpg';

    import copy1 from '../../static/img/copy1.png';
    import copy2 from '../../static/img/copy2.png';
    import copy3 from '../../static/img/copy3.png';
    import copy4 from '../../static/img/copy4.png';

    import phonex from '../../static/img/phonex.png';

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

    import input from "../../static/img/input.png";

    import target1 from '../../static/img/target1.png';
    import target2 from '../../static/img/target2.png';
    import target3 from '../../static/img/target3.png';
    import target4 from '../../static/img/target4.png';
    import target5 from '../../static/img/target5.png';
    import target6 from '../../static/img/target6.png';

    import network from '../../static/img/network.png';

    import talk1 from '../../static/img/talk1.png';
    import talk2 from '../../static/img/talk2.png';
    import talk3 from '../../static/img/talk3.png';
    import talk4 from '../../static/img/talk4.png';
    import talk5 from '../../static/img/talk5.png';

    import card1 from "../../static/img/card1.png";
    import card2 from "../../static/img/card2.png";


    const partnerList = [
        [
            {name: '中心证券', img: partner1},
            {name: '国金证券', img: partner2},
            {name: '招商证券', img: partner3},
            {name: '国泰瑞丰', img: partner4},
            {name: '光大控股', img: partner5},
            {name: '东北证券', img: partner6},
            {name: '九鼎投资', img: partner7},
            {name: '国泰君安证券', img: partner8},
        ], [
            {name: '中金公司', img: partner9},
            {name: '方正证券', img: partner10},
            {name: '天弘基金', img: partner11},
            {name: '达晨创投', img: partner12},
            {name: '中信建设证券', img: partner13},
            {name: '鼎辉投资', img: partner14},
            {name: '国信证券', img: partner15},
        ]
    ];

    export default {
        data() {
            return {
                card1,
                card2,
                radarLogo,
                Phone,
                logo,
                problem,
                network,
                copy1,
                copy2,
                copy3,
                copy4,
                phonex,
                weixin,
                xiaochengxu,
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
                input,
                talk1,
                talk2,
                talk3,
                talk4,
                talk5,

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
            },

            toTop() {
                window.scrollTo(0, 0);
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
