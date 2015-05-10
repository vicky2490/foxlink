/**
 * PedometerController
 *
 * @description :: Server-side logic for managing pedometers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `PedometerController.upload()`
   */
  upload: function (req, res) {
    Pedometer.create(req.params.all(),function (err,user){

if (err){
    return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `PedometerController.query()`
   */
  query: function (req, res) {
   Pedometer.findOne({userId: req.param('userId')},function (err ,user){
      
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

