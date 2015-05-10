/**
* Eeg.js
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
Alpha:{
  type:'string',
    maxLength:15
},
Beta:{
	type:'string',
	 maxLength:15
},
Delta:{
	type:'string',
	  maxLength:15
},
Theta:{
	type:'string',
	 maxLength:15
},
MPF:{
	type:'string',
	  maxLength:15
}

 }
};

