/*
*
*
*       Complete the handler logic below
*       
*       
*/



function ConvertHandler() {

          // let  regexStr = str.match(/[a-z]+|[^a-z]+/gi);
          let  regexStr = /[a-z]+|[^a-z]+/gi

  this.getNum = function(input) { 

              var result;
              // console.log("len",input.length)
              if (input.length == 0){ 
                 
                    result = "invalid number" ;
                                 
                    // console.log("result num", result);            
                    // return result
                

            } else {

                 
                // console.log("1", input.match(regexStr).length)
               
                result = input.match(regexStr)[0] 
                // not a numbuer
                if (isNaN(result)){
                  result = "invalid number" ;
                }  

                   // mi given but no number - need to use 1 to pass test 
                const val = this.getUnit(input)
                if(isNaN(result) && val !== "invalid unit"){
                    result = 1;
                }  
           
                 // console.log("result num", result);  
               
            };


           console.log("result num", result);
            return result  
                    
  };
  
  this.getUnit = function(input) {


              var result;
           
              if (input.length == 0){
                                        
                result = "invalid unit"
                // console.log(result)    
                 return result                
             
              } else {

                    const len = input.match(regexStr).length
                   // console.log("result len", len); 
                      if (len === 1){

                      result = input.match(regexStr)[0] 
                      ///console.log("result 0 len", result); 

                    } else {

                      result = input.match(regexStr)[1] 
                      //console.log("result 1 len", result); 
                    }
            
             }

        
        // var validConverts = ['gal','l','mi','km','lbs','kg']   
        var validConverts = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']     
       
                  // result = result.toLowerCase()
          // console.log("result here", result);   
        if (!validConverts.includes(result)){

               return 'invalid unit'

        } 
           

        
        console.log("result unit ", result); 
        return result;


  };
  
  this.getReturnUnit = function(initUnit) {

            let result; 

              switch(initUnit){
                  case ('mi'|| 'MI'):
                    result = 'km' ;
                    break;
                  case ('km'|| 'KM'):
                    result = 'mi'  ;
                    break;
                  case ('gal'||'GAL'):
                    result = 'l'  ;
                    break;
                  case ('l'|| 'L'):
                    result = 'gal'  ;
                    break;
                  case ('lbs'|| 'Lbs'):
                    result = 'kg'  ;
                    break; 
                  case ('kg'|| 'KG'):
                    result = 'lbs' ; 
                    break;
                  default:
                    result = 'invalid unit' ;      
              
              }
         
          return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    var measures = {
          lbs: "pounds", 
          km : "kilometers",
          kg : "kilograms",
          mi : "miles",
          gal : "gallons",
          l : "liters"
      }
    
    result = measures[unit.toLowerCase()]
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    // 
    const gal = 3.78541;
    const lbs = 0.453592;
    const mi = 1.60934;

    let rate;

                switch(initUnit.toLowerCase()){
                  case 'mi':
                    rate =   mi
                    break;
                  case 'km':
                    rate =   (1 / mi)
                    break;
                  case 'gal':
                    rate = gal  
                    break;
                  case 'l':
                    rate = (1 / gal)
                    break;
                  case 'lbs':
                    rate = lbs  
                    break; 
                  case 'kg':
                  rate =  (1 /  lbs)
                    break;
                  default:
                    rate = 'invalid unit'       
              
              }
     
    
     var result = initNum *  rate
      result = Number.parseFloat(result).toFixed(5);
    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //var result;
var result =  initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit) 
    //   "1 gallons converts to 3.78541 liters"}

    // var result =  `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    // var result =  `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${returnUnit}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
