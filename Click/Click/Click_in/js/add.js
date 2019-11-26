// 页面之间传递数据 
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var Request = new Object();
    Request = GetRequest();
    var a, b, c, d;
    a = Request['title'];
    b = Request['img'];
    c = Request['del'] ; 
    d = Request['gid'];
    $('.item_edit').val(a);
    $('.add_img').attr("src",b);
    if(c=="1"){//判断是否为编辑目标界面
      $('.top_fixed>span').html("编辑目标");
      $('#success_btn').css("display","none");
      $('#updata_btn').css("display","block");
      $('#del_btn').css("display","block");
    }

//获取页面数据  添加新目标，数据添加到数据库
$("#success_btn").click(function(){
    var gname=$('.item_edit').val();
    var imgName=$('.add_img').attr("src");
    var startDate=$('#dataStart').html();
    var endDate=$('#dataEnd').html();
    var clickStartTime=$('#demo2').val();
    var alarmTime=$('#demo3').val();
    var clickEndTime=$('#demo1').val();

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
        type: "get",
        url: "product/add",    
        data: {gname:gname,imgName:imgName,startDate:startDate,
            endDate:endDate,clickStartTime:clickStartTime,
            alarmTime:alarmTime,clickEndTime:clickEndTime,uname:uname},
        success: (result)=>{
            console.log(result);
        },
        error: function () {
            alert("网络故障请检查!!!");
        }
    });
})

//点击修改目标  
$('#updata_btn').click(function(){
  var gid=d;
  var startDate=$('#dataStart').html();
  var endDate=$('#dataEnd').html();
  var clickStartTime=$('#demo2').val();
  var alarmTime=$('#demo3').val();
  var clickEndTime=$('#demo1').val();
  $.ajax({
      url:"product/update",
      type:"get",
      data:{gid:gid,startDate:startDate,endDate:endDate,
          clickStartTime:clickStartTime,alarmTime:alarmTime,clickEndTime},
      success:(result)=>{
          console.log(result);
      }
  })

})

//点击删除目标  
$('#del_btn').click(function(){
  var gid = d;
  $.ajax({
      url:"product/del",
      type:"get",
      data:{gid:gid},
      success:(result)=>{
          // console.log(result);
          if(result.code>0){
              alert(result.msg)
            //   location.reload();
          }else{
              alert(result.msg);
            //   location.reload();
          }
      }
  })
})