var adds_opacity = 0.3;     // 广告透明度
var url = window.location.host;
switch (url) {

    case "www.google.com":
        var adds = document.getElementsByClassName("ads-ad");
        for (let i = 0; i < adds.length; i++) {
            adds[i].style.opacity = adds_opacity;
        }
        // 顶部广告
        if (document.getElementById("taw") != null) {
            document.getElementById("taw").style.opacity = adds_opacity;
        }
        // 底部广告
        if (document.getElementById("bottomads") != null) {
            document.getElementById("bottomads").style.opacity = adds_opacity;
        }
        break;

    case "www.baidu.com":
        // 前五项广告
        var id = 3001;
        while (document.getElementById(String(id)) != null) {
            document.getElementById(String(id)).style.opacity = adds_opacity;
            id++;
        }
        
        // 右侧广告
        if (document.getElementById("zsyx_im0") != null) {
            document.getElementById("zsyx_im0").style.opacity = adds_opacity;
        }
        break;

    case "www.youtube.com":
        // 视频播放界面右侧上方广告（竖屏时在播放器下方）
        if (document.getElementById("player-ads") != null) {
            document.getElementById("player-ads").style.opacity = adds_opacity;
        }
        break;

    case "www.bbc.com":
        var adds = document.getElementsByClassName("nw-c-advert");
        for (let i = 0; i < adds.length; i++) {
            adds[i].style.opacity = adds_opacity;
        }
        break;
}