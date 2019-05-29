const mysql = require('mysql')

const connectdb=()=>{
  let connection = mysql.createConnection({
	  host: 'localhost',  // 新建数据库连接时的 主机名或ID地址 内容
	  user: 'root', 
	  password: 'root', // root 密码
	  database: 'a', // 数据库名
	  port: '3306'
  })
  return connection;
}

module.exports=connectdb;