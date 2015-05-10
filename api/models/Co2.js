/**
* Co2.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 schema:true,

  attributes: {

userId:{
  type:'string',
    maxLength:10
},
mac:{
  type:'string',
   maxLength:15
},
date:{
    type:'integer',
  size:20
},
data:{
  type:'integer'   //integer
  
}

 }
};

