/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      let resObj = {}

      if (initNum === "invalid number" && initUnit === "invalid unit"){
            // resObj = {error:"invalid number and unit"}
             res.json('invalid number and unit')
      } else if (initNum === "invalid number"){
            // resObj = {error: "invalid number"}
             res.json('invalid number')
      } else if (initUnit === "invalid unit"){
            // resObj = {error:"invalid unit"}
             res.json('invalid unit')
      } else {

      resObj["initNum"]= initNum;
      resObj["initUnit"]= initUnit;
      resObj["returnNum"]= returnNum;
      resObj["returnUnit"]= returnUnit;
      resObj["string"]= toString;

        res.json(resObj)

      }     
            
      
     // resObj["string"]= toString;

      

      // res.json({"error":"no unit"})
      // {"error":"invalid number and unit"}
      // {"error":"invalid unit"}

    });
    
};
