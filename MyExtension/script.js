var url = window.location.host;
switch(url){
    case "www.google.com":
        var adds = document.getElementsByClassName("ads-ad");
        for(i=0;i<adds.length;i++){
            adds[i].style.opacity=0.5;
        }
    break;
    case "www.baidu.com":
        var id = 3001;
        while(document.getElementById(String(id))!=null){
            document.getElementById(String(id)).style.opacity=0.5;
            id++;
        }
    break;
}
