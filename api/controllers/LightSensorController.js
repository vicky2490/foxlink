/**
 * LightSensorController
 *
 * @description :: Server-side logic for managing lightsensors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `LightSensorController.upload()`
   */
  upload: function (req, res) {
    LightSensor.create(req.params.all(),function (err,user){

if (err){
  return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `LightSensorController.query()`
   */
  query: function (req, res) {
   LightSensor.findOne({userId: req.param('userId')},function (err ,user){
      
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

