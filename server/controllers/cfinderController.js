const mysql=require("mysql");


const con=mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

// exports.view  =  (req,res)=>{

//     con.getConnection((err,connection)=>{
//         if(err) throw err
//         connection.query("select * from userdata2",(err,rows)=>{
//             connection.release();
//             if (!err) {
                
//                 res.render("home",{rows});
//             }
//             else{
//                 console.log("Error : "+err);
//             }
//         });
//     });

    
// };



exports.save=(req,res)=>{
 
    con.getConnection((err,connection)=>{
        if(err) throw err;
        const {User_name,User_DOB,Friend1,Friend2,Friend3,Friend4,user_Zsign,result}=req.body;
        connection.query("insert into userdata2 (User_name,User_DOB,Friend1,Friend2,Friend3,Friend4,user_Zsign,result) values (?,?,?,?,?,?,?,?)",[User_name,User_DOB,Friend1,Friend2,Friend3,Friend4,user_Zsign,result],(err,rows)=>{
            connection.release();
            if (!err) {
                
                res.render("home",{rows});
            }
            else{
                console.log("Error : "+err);
            }
        });
    });

    
};



