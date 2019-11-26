//用户页面个人信息渲染  
function userDate() {
    var cookieStr="";
    var uname="";
    var cookieArr=document.cookie.split(";");
    if(cookieArr[0].slice(0,4)=="upwd"){
        cookieStr=cookieArr.reverse().join(";");
        uname=cookieStr.slice(7,cookieStr.indexOf("upwd=")-1);
    }else{
        cookieStr=document.cookie;
        uname=cookieStr.slice(6,cookieStr.indexOf("upwd=")-2);
    }
    var upwd=cookieStr.slice(cookieStr.indexOf("upwd=")+5);
    $.ajax({
        url:"product/wode",
        type:"get",
        data:{uname:uname,upwd:upwd},
        success: (result) => {
            for(var key of result){
                $(".uname>a").html(key.uname);
                if(key.sex==0){
                    $(".sex").css("background-color","#3c9bf3");
                    $(".sex>img").attr("src","./imgs/boy.png");
                }else{
                    $(".sex").css("background-color","#ec5d77")
                    $(".sex>img").attr("src","./imgs/girl.png");
                }
                $(".year").html(key.age);
            }
        }
    })
}
userDate();