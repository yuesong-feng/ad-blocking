var adds_opacity = 0.3;
var url = window.location.host;
switch(url){

    case "www.google.com":
        var adds = document.getElementsByClassName("ads-ad");
        for(i=0;i<adds.length;i++){
            adds[i].style.opacity=adds_opacity;
        }
        document.getElementById("taw").style.opacity=adds_opacity;
        document.getElementById("bottomads").style.opacity=adds_opacity;

    break;

    case "www.baidu.com":
        var id = 3001;
        while(document.getElementById(String(id))!=null){
            document.getElementById(String(id)).style.opacity=adds_opacity;
            id++;
        }
    break;

    case "www.youtube.com":
        if(document.getElementById("player-ads")!=null){
            document.getElementById("player-ads").style.opacity=adds_opacity;
        }
    break;
}