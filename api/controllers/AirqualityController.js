/**
 * AirqualityController
 *
 * @description :: Server-side logic for managing airqualities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `AirqualityController.upload()`
   */
  upload: function (req, res) {
   Airquality.create(req.params.all(),function (err,user){

if (err){
  return res.json({'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `AirqualityController.query()`
   */
  query: function (req, res) {
    Airquality.findOne({userId: req.param('userId')},function (err ,user){
      
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

