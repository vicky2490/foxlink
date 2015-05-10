/**
 * EcgController
 *
 * @description :: Server-side logic for managing ecgs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `EcgController.upload()`
   */
  upload: function (req, res) {
   Ecg.create(req.params.all(),function (err,user){

if (err){
  return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `EcgController.query()`
   */
  query: function (req, res) {
   Ecg.findOne({userId: req.param('userId')},function (err ,user){
      
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

