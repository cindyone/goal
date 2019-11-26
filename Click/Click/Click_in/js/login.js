//验证用户名
$("#uname").blur(function(){
    var reg=/^[A-Za-z]{4,8}$/ig;
    if(!reg.test($(this).val())){
        $(".check1").css("display","inline-block");
        $(this).val("");
        $(this).focus();
    }else{
        $(".check1").css("display","none");
        var uname = $("#uname").val();
        $.ajax({
            type: "GET",
            url: "product/check",
            data: {uname:uname},
            success: (result)=>{
                console.log(result);
                if(result.length==0){
                    $(".check1").css("display","none");
                    $(".check3").css("display","inline-block");
                    $(this).val("");
                }else{
                    $(".check3").css("display","none");
                }
            },
        });
    }
})
//验证密码
$("#upwd").blur(function(){
    var reg=/^[A-Za-z0-9]{6,10}$/ig;
    if(!reg.test($(this).val())){
        $(".check2").css("display","inline-block");
        $(this).val("");
        $(this).focus();
    }else{
        $(".check2").css("display","none");
    }
})

//登录
$(".btn").click(function(e){
    // var reg=/^[A-Za-z0-9]{6,20}$/ig;
    // if(!reg.test($("#upwd").val())){
    //     $(".check2").css("display","inline-block");
    //     e.preventDefault();
    //     $("#upwd").val("");
    //     $("#upwd").focus();
    // }else{
    //     $(".check2").css("display","none");
    // }
    for(var i=0;i<$('input').length-1;i++){	
        if($('input')[i].value==""){
            // alert("当前表单不能有空项");
            $('input')[i].focus();
            return false;
        }
    }

    var uname = $("#uname").val();
    var upwd = $("#upwd").val();   

    $.ajax({
        type: "GET",
        url: "product/login",
        data: {uname:uname,upwd:upwd},
        success: (result)=>{
            if(result.length != 0){
                if(result[0].uname == uname && result[0].upwd == upwd){
                    document.cookie=`uname=${uname}`;
                    document.cookie=`upwd=${upwd}`;
                }
            }else{
                alert("该用户不存在");
                e.preventDefault();
                location.reload();
            }
        },
        error: function () {
            alert("网络故障请检查!!!");
        }
    });
})
