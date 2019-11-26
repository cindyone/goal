//引入模块
const express=require("express");
const pool=require("../pool")
//创建路由对象
var router=express.Router();

//将任务渲染到页面  
router.get("/goal",(req,res)=>{

    var uname=req.query.uname;

    var today = new Date();
    var today1 = new Date(today);
    if(today1.getMonth()<9){
        var date1 = today1.getFullYear()+"-0"+(today1.getMonth()+1)+"-"+(today1.getDate());
    }else{
        var date1 = today1.getFullYear()+"-"+(today1.getMonth()+1)+"-"+(today1.getDate());
    }
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql=`SELECT gid,gname,imgName,clickStartTime,clickEndTime,endDate,isClick FROM click_goal WHERE uname=? AND (? BETWEEN startDate AND endDate)`;
        conn.query(sql,[uname,date1],(err,result)=>{
            if(err) throw err;
            res.json(result)
            conn.release();
        })
    })   
})

//渲染用户信息
router.get("/wode",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql=`SELECT uname,sex,age FROM click_user WHERE uname=? AND upwd=?`;
        conn.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
            res.json(result)
            conn.release();
        })
    })   
})


//用户注册  
router.get("/register",(req,res)=>{
    //获取参数
    var uid=null;
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sex=req.query.sex;
    var phoneNumber=req.query.phoneNumber;
    var age=req.query.age;
    var registerDate=new Date();
    if(sex == "男"){
        sex = 0;
    }else if(sex == "女"){
        sex = 1;
    }
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql="INSERT INTO click_user VALUE(?,?,?,?,?,?,?)"
        conn.query(sql,[uid,uname,upwd,sex,phoneNumber,registerDate,age],(err,result)=>{
            if(err) throw err;
            res.json(result)
        })
        conn.release();
    })   
})

router.get("/check",(req,res)=>{
    var uname=req.query.uname;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql=`SELECT uname FROM click_user WHERE uname=?`
        conn.query(sql,[uname],(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
        conn.release();
    })
})

//验证登录  
router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql="SELECT uname,upwd FROM click_user WHERE uname=? AND upwd=?"
        conn.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
        conn.release();
    })   
})

//添加目标 
router.get("/add",(req,res)=>{
    var gid=null;
    var gname=req.query.gname;
    var imgName=req.query.imgName;
    var startDate=req.query.startDate;
    var endDate=req.query.endDate;
    var clickStartTime=req.query.clickStartTime;
    var alarmTime=req.query.alarmTime;
    var clickEndTime=req.query.clickEndTime;
    var uname=req.query.uname;
    var isClick=0;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql="INSERT INTO click_goal VALUE(?,?,?,?,?,?,?,?,?,?)"
        conn.query(sql,[gid,gname,imgName,startDate,endDate,clickStartTime,alarmTime,isClick,clickEndTime,uname],(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
        conn.release();
    })
})


//打卡  
router.get("/isClick",(req,res)=>{
    var gid=parseInt(req.query.gid);
    var isClick=parseInt(req.query.isClick);
    if(isClick == 0){
        isClick = 1;
    }else{
        isClick = 0;
    }
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        sql="UPDATE click_goal SET isClick=? WHERE gid=?";
        conn.query(sql,[isClick,gid],(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
        conn.release();
    })   
})



//更新目标 
router.get("/update",(req,res)=>{
    var gid = parseInt(req.query.gid);
    var startDate=req.query.startDate;
    var endDate=req.query.endDate;
    var clickStartTime=req.query.clickStartTime;
    var alarmTime=req.query.alarmTime;
    var clickEndTime=req.query.clickEndTime;    
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "UPDATE click_goal SET startDate=?,endDate=?,clickStartTime=?,alarmTime=?,clickEndTime=? WHERE gid=?"
        conn.query(sql,[startDate,endDate,clickStartTime,alarmTime,clickEndTime,gid],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.json({code:1,msg:"更新成功！"})
            }else{
                res.json({code:-1,msg:"更新失败！"})
            }
        })
    })
})

//删除目标  
router.get("/del",(req,res)=>{
    var gid = parseInt(req.query.gid);
    var reg = /^\d{1,}$/;
    if(!reg.test(gid)){
        res.json({code:-1,msg:"页面参数有误！"})
        return;
    }
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "DELETE FROM click_goal WHERE gid=?"
        conn.query(sql,[gid],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.json({code:1,msg:"删除成功！"})
            }else{
                res.json({code:-1,msg:"删除失败！"})
            }
        })
    })
})


//导出路由对象
module.exports=router;   