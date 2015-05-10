/**
 * HumidityController
 *
 * @description :: Server-side logic for managing humidities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `HumidityController.upload()`
   */
  upload: function (req, res) {
   

Humidity.create(req.params.all(),function (err,user){

if (err){
  return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `HumidityController.query()`
   */
  query: function (req, res) {
    Humidity.findOne({userId: req.param('userId')},function (err ,user){
      
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

