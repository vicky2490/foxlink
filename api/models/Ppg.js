/**
* Ppg.js
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
hr:{
  type:'string',
    maxLength:20
},
tp:{
    type:'string',
     maxLength:20
},
hf:{
    type:'string',
      maxLength:20
},
lf:{
    type:'string',
      maxLength:20
},
vlf:{
    type:'string',
      maxLength:20
},
sdnn:{
    type:'string',
      maxLength:20
},
hfPercent:{
    type:'string',
      maxLength:20
}

 }
};

