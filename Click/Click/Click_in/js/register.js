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
                if(result.length!=0){
                    $(".check1").css("display","none");
                    $(".check2").css("display","inline-block");
                    $(this).val("");
                }else{
                    $(".check2").css("display","none");
                }
            },
        });
    }
})
//验证密码
$("#upwd").blur(function(){
    var reg=/^[A-Za-z0-9]{6,10}$/ig;
    if(!reg.test($(this).val())){
        $(".check3").css("display","inline-block");
        $(this).val("");
        $(this).focus();
    }else{
        $(".check3").css("display","none");
    }
})
//验证年龄
$("#age").blur(function(){
    var reg=/^[0-9]{1,3}$/ig;
    if(!reg.test($(this).val())){
        $(".check4").css("display","inline-block");
        $(this).val("");
        $(this).focus();
    }else{
        $(".check4").css("display","none");
    }
})
//验证手机号
$("#phoneNumber").blur(function(){
    var reg=/^1[345789]\d{9}$/ig;
    if(!reg.test($(this).val())){
        $(".check5").css("display","inline-block");
        $(this).val("");
        $(this).focus();
    }else{
        $(".check5").css("display","none");
    }
})
//用户信息注册
$(".btn").click(function(){
    //
    for(var i=0;i<$('input').length-1;i++){	
        if($('input')[i].value==""){
            // alert("当前表单不能有空项");
            $('input')[i].focus();
            return false;
        }
    }
    var uname = $("#uname").val();
    var upwd = $("#upwd").val();
    var age = $("#age").val();
    var sex = $("#sex").val();
    var phoneNumber = $("#phoneNumber").val();
    $.ajax({
        type: "GET",
        url: "product/register",
        data: {uname:uname,upwd:upwd,sex:sex,phoneNumber:phoneNumber,age:age},
        success: (result)=>{
            console.log(result);
        },
        error: function () {
            alert("网络故障请检查!!!");
        }
    });
})