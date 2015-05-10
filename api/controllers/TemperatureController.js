/**
 * TemperatureController
 *
 * @description :: Server-side logic for managing temperatures
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `TemperatureController.upload()`
   */
  upload: function (req, res) {
    Temperature.create(req.params.all(),function (err,user){

if (err){
   return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `TemperatureController.query()`
   */
  query: function (req, res) {
   Temperature.findOne({userId: req.param('userId')},function (err ,user){
      
      if (err){
         return res.json({ 'message': err.message});
        }
    
    // res.json({'statusCode': 0, 'message': 'success'});
    console.log(user);
    // return res.json(user.mac);
    return res.json(user);
    });
}
};

