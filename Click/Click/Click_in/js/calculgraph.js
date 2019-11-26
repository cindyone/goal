function calculagraph() {
    var minutes = parseInt(document.getElementsByClassName("minutes")[0].innerHTML);
    var seconds = parseInt(document.getElementsByClassName("seconds")[0].innerHTML);
    if (!(minutes == 0 && seconds == 0)) {
        seconds--;
        if (seconds >= 10) {
            document.getElementsByClassName("seconds")[0].innerHTML = seconds;
        } else if (10 > seconds && seconds >= 0) {
            document.getElementsByClassName("seconds")[0].innerHTML = "0" + seconds;
        } else if (seconds < 0 && minutes != 0) {
            seconds = 59;
            document.getElementsByClassName("seconds")[0].innerHTML = seconds;
            minutes--;
            if (minutes > 10) {
                document.getElementsByClassName("minutes")[0].innerHTML = minutes;
            } else if (10 > minutes) {
                document.getElementsByClassName("minutes")[0].innerHTML = "0" + minutes;
            }
        }
    }
}

var timer;
document.getElementsByClassName("start")[0].onclick = function () {
    timer = setInterval(calculagraph, 1000);
    document.getElementsByClassName("start")[0].style.display = 'none';
    document.getElementsByClassName("stop")[0].style.display = 'block';
}

document.getElementsByClassName("stop")[0].onclick = function () {
    clearInterval(timer);
    timer = null;
    document.getElementsByClassName("stop")[0].style.display = 'none';
    document.getElementsByClassName("conEnd")[0].style.display = 'block';
}

document.getElementsByClassName("con")[0].onclick = function () {
    document.getElementsByClassName("conEnd")[0].style.display = 'none';
    timer = setInterval(calculagraph, 1000);
    document.getElementsByClassName("stop")[0].style.display = 'block';
}

var minutesChose = 0;
document.getElementsByClassName("end")[0].onclick = function () {
    document.getElementsByClassName("conEnd")[0].style.display = 'none';
    document.getElementsByClassName("start")[0].style.display = 'block';
    document.getElementsByClassName("minutes")[0].innerHTML = minutesChose;
    document.getElementsByClassName("seconds")[0].innerHTML = "00";
}

document.getElementsByClassName("addBtn")[0].onclick = function () {
    document.getElementsByClassName("aim")[0].classList.add("aim_inFade");
    document.getElementsByClassName("shadow")[0].classList.add("shadow_inFade");
}
document.getElementsByClassName("now")[0].onclick = function () {
    document.getElementsByClassName("aim")[0].classList.add("aim_inFade");
    document.getElementsByClassName("shadow")[0].classList.add("shadow_inFade");
}

document.getElementsByClassName("aim_cancel")[0].onclick = function () {
    document.getElementsByClassName("aim")[0].classList.remove("aim_inFade");
    document.getElementsByClassName("shadow")[0].classList.remove("shadow_inFade");
}

function addMinutesNumber() {
    var chose = document.getElementsByClassName("choseMinutes")[0];
    for (var i = 1; i <= 60; i++) {
        var li = document.createElement("li");
        if (i < 10) {
            li.innerHTML = "0" + i;
        } else {
            li.innerHTML = i;
        }
        chose.appendChild(li);
    }
}
addMinutesNumber();

function choseMinutes() {
    var choseMinutes = document.getElementsByClassName("choseMinutes")[0];
    choseMinutes.addEventListener('click', function (e) {
        e.stopPropagation();
        var minutes = e.target.innerHTML;
        minutesChose = minutes;
        document.getElementsByClassName("minutes")[0].innerHTML = minutes;
        document.getElementsByClassName("choseMinutes")[0].style.display = "none";
    }, false);
}
choseMinutes();

document.getElementsByClassName("circle")[0].onclick = function () {
    if (timer == null) {
        document.getElementsByClassName("choseMinutes")[0].style.display = "block";
    }
}


//选择倒计时任务  
$("#choosegoal").on("click",".aim_customize",function(){
    var tname=$(this).find("div:last-child").html();
    var imgName = $(this).find("div:first-child").find("img").attr("src");
    $(".aim").removeClass("aim_inFade")
    $(".shadow").removeClass("shadow_inFade"); 
    $(".addBtn").css("display","none");
    $(".now").css("display","block");
    $(".now>.now_ico>#now_ico_img").attr("src",imgName);    
    $(".now>#now_ico_title").html(tname);
})

//将可选任务渲染到选择栏中  
function chooseGoals(){
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
            var htm = "";
            for(var key of result){
                htm += `<div class="aim_customize">
                            <div class="aim_circle">
                                <img src=${key.imgName} alt="" width="80%" height="80%">
                            </div>
                            <div>${key.gname}</div>
                        </div>`;
            }
            $("#choosegoal").html(htm);
        }
    })
}
chooseGoals()