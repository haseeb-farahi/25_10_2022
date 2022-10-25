var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'mydb'
});
con.connect((err)=>{
    if(err)throw err
    console.log('myQLS Connected Succesfully');
//===============Command for creating database========================================
    // con.query('CREATE DATABASE mydb',(err, result)=>{
    //     if(err) throw err
    //     console.log('Database Created Succesfully!')
    // })


    var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(25), address VARCHAR(200))'
    // var sql = "ALTER TABLE customers ADD COLUMN email VARCHAR(30)"
    var sql ="INSERT INTO customers (name,address,email) VALUES ('Israil','Arzan Qimat','khandkhel@gmail.com')"
    var sql ="INSERT INTO customers (name,address,email) VALUES ('Haseeb','Khairkhana','hasibfarahi01@gmail.com')"
    con.query(sql, (err)=>{
        if(err) throw err;
        console.log('Customer Created Succesfully!')
    })
})