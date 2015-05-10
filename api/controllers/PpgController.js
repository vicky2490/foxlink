/**
 * PpgController
 *
 * @description :: Server-side logic for managing ppgs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `PpgController.upload()`
   */
  upload: function (req, res) {
    Ppg.create(req.params.all(),function (err,user){

if (err){
   return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `PpgController.query()`
   */
  query: function (req, res) {
  Ppg.findOne({userId: req.param('userId')},function (err ,user){
      
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

