const express = require("express");
const router = express.Router();

const cfinderController=require("../controllers/cfinderController");

//view all records
// router.get("/",cfinderController.view);
 
//Add records

router.post("/",cfinderController.save);

module.exports=router;