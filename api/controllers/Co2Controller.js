/**
 * Co2Controller
 *
 * @description :: Server-side logic for managing co2s
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `Co2Controller.upload()`
   */
  upload: function (req, res) {
  

Co2.create(req.params.all(),function (err,user){

if (err){
  return res.json({'message': err.message });
}

res.json({ 'message': 'ok'});
});  },


  /**
   * `Co2Controller.query()`
   */
  query: function (req, res) {
   Co2.findOne({userId: req.param('userId')},function (err ,user){
      
      if (err){
        return res.json({ 'message': err.message });
        }
    
    // res.json({'statusCode': 0, 'message': 'success'});
    console.log(user);
    // return res.json(user.mac);
    return res.json(user);
    });
}
};

