const express = require('express');
const router = express.Router();
const api = require('./api');


const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const conn = require('./config');
const connection = conn();
const db = require('./bd.js')

let selectAll = (sql,callback)=>{
  connection.query(sql,(err,result)=>{
    if(err){
        console.log('错误信息-',err.sqlMessage);
        let errNews = err.sqlMessage;
        callback(errNews,'');
        return;
    } 
    var string=JSON.stringify(result); 
    var data = JSON.parse(string);
    callback('',data);
    // console.log(string);
  })
}

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

/* router.post('/admin/getUser', (req, res, next) => {	   
  api.getUser(req, res, next)
}) */

router.post('/admin/getUser', function(req, res) {
  let name = JSON.stringify(req.body.name);
  let pwd  = req.body.password;
  let resData = {"name":name,"password":pwd};
  let errText = '',resultData='',status = '';
  db.selectAll('SELECT * FROM users WHERE name  = '+ name,(e,r)=>{
      if(e){
        res.status(200).json({"status":0,"msg":e,"data":[]});
      }
      let tt = r.length ;
	  console.log(r)
      if(tt == 0){
        errText="账号不存在";
		status = '0'
      }else if(pwd != r[0].password){
        errText="密码错误";
		status = '0'
      }else{
		 errText="登录成功";
		status = '1'
        resultData = r[0];
      }
      // console.log(tt,errText);
      res.status(200).json({"status":status,"msg":errText,"data":resultData});
  })
  //res.status(200).json({"status":true,"msg":"","data":resData});
});
module.exports = router;