//添加打卡目标  
function showGoals() {
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
    $.ajax({
        url:"product/goal",
        type:"get",
        data:{uname:uname},
        success: (result) => {
            var html = "";
            var htm = "";
            for(var key of result){
                if(key.isClick == 0){
                    html += `<li class="goals-li" >
                                <div class="goals" data-gid="${key.gid}" data-isClick="${key.isClick}">
                                    <img src="${key.imgName}" alt="">
                                    <h4>${key.gname}</h4>
                                    <p>${key.clickStartTime.slice(0,5)}-${key.clickEndTime.slice(0,5)}</p>
                                </div>
                                <div class="finish" data-gid="${key.gid}" data-isClick="${key.isClick}">
                                    <img src="./imgs/queding.png" alt="">
                                    <h4>${key.gname}</h4>
                                </div>
                            </li>`;
                }else{
                    html += `<li class="goals-li">
                                <div class="goals" style="display:none" data-gid="${key.gid}" data-isClick="${key.isClick}">
                                    <img src="${key.imgName}" alt="">
                                    <h4>${key.gname}</h4>
                                    <p>${key.clickStartTime.slice(0,5)}-${key.clickEndTime.slice(0,5)}</p>
                                </div>
                                <div class="finish" style="display:block" data-gid="${key.gid}" data-isClick="${key.isClick}">
                                    <img src="./imgs/queding.png" alt="">
                                    <h4>${key.gname}</h4>
                                </div>
                            </li>`;
                }
                var time1 = new Date(key.endDate.slice(0,10).replace("-","/"));
                var time2 = new Date();
                var time = Math.ceil((time1-time2)/1000/60/60/24)+1; 
                htm += `<li>
                            <a href="add.html?title=${key.gname}&img=${key.imgName}&del=1&gid=${key.gid}">
                            <div class="item-container">
                                <div class="item-tubiao">
                                    <img src="${key.imgName}" alt="">
                                </div>
                                <span class="item-title">${key.gname}</span>
                                <div class="item-count">
                                    <p>距离完成还有</p>
                                    <p><span>${time}</span>天</p>
                                </div>
                            </div>
                            </a>
                        </li>`;
            }
            $(".goals-ul").html(html);
            $(".record-body>ul").html(htm);
        }
    })
}
showGoals();

//打卡
$(".goals-ul").on("click",".goals",function(e){
    e.stopPropagation();
    $(".shade-finish").css("display","block");
    $(".shade-finish").attr("data-a1",$(this).attr("data-gid"));
    $(".shade-finish").attr("data-a2",$(this).attr("data-isClick"));
})
$(".click_card").click((e)=>{   
    var gid=$(".shade-finish").attr("data-a1");
    var isClick=$(".shade-finish").attr("data-a2"); 
    e.stopPropagation();
    $(".shade-finish").css("display","none");
    $.ajax({
        url:"product/isClick",
        data:{gid:gid,isClick:isClick},
        success:(result)=>{
            $(this).attr("data-isClick",1);
            location.reload();
        }
    })
})
$(".noclick_card").click(function(){
    $(".shade-finish").css("display","none");
})


//取消打卡
$(".goals-ul").on("click",".finish",function(e){
    e.stopPropagation();
    $(".shade-cancel").css("display","block");
    $(".shade-cancel").attr("data-a1",$(this).attr("data-gid"));
    $(".shade-cancel").attr("data-a2",$(this).attr("data-isClick"));
})
$(".cancel_click").click((e)=>{   
    var gid=$(".shade-cancel").attr("data-a1");
    var isClick=$(".shade-cancel").attr("data-a2"); 
    e.stopPropagation();
    $(".shade-cancel").css("display","none");
    $.ajax({
        url:"product/isClick",
        data:{gid:gid,isClick:isClick},
        success:(result)=>{
            $(this).attr("data-isClick",1);
            location.reload();
        }
    })
})
$(".nocancel_click").click(function(){
    $(".shade-cancel").css("display","none");
})


//展示进度列表 
$(".catalogue").click(function(){
    $(".record").css("left","0")
    $(".record").css("background","rgba(31,31,31,0.7)")
})


//收回进度列表 
$(".outclick").click(function(){
    $(".record").css("left","-100%")
    $(".record").css("background","rgba(31,31,31,0)")
})

