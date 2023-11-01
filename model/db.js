const mong=require('mongoose');
mong
.connect("mongodb://127.0.0.1:27017/movie")
.then(()=>console.log("database Connected"))
.catch((err)=>console.log(err.message))