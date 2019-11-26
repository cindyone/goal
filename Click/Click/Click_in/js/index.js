// 选择日期
$.selectDate("#time_select1", {
    start: 1800,
    end: 2200,
    select: [2019, 9, 1],
    title: ' '
}, function (data) {
    //获取插件日期数据，发送到页面隐藏空间中保存 
    $('#dataStart').html(data.year+"-"+data.month+"-"+data.day);
});
$.selectDate("#time_select2", {
    start: 1994,
    end: 2100,
    select: [2019, 10, 1],
    title: ' '
}, function (data) {
    //获取插件日期数据，发送到页面隐藏空间中保存 
    $('#dataEnd').html(data.year+"-"+data.month+"-"+data.day);
});

// 点击选择周几
$("document").ready(function () {
    $(".week_select li").click(function () {
        if($(this).hasClass("yellow")){
            $(this).removeClass("yellow");
        }else{
            $(this).addClass("yellow");
        }
    })
});


// 选择是时分秒
var calendartime1 = new lCalendar();
var calendartime2 = new lCalendar();
var calendartime3 = new lCalendar();
calendartime1.init({
    'trigger': '#demo1',
    'type': 'time'
});
calendartime2.init({
    'trigger': '#demo2',
    'type': 'time'
});
calendartime3.init({
    'trigger': '#demo3',
    'type': 'time'
});

