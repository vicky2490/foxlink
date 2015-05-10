/**
 * IndoorPositionController
 *
 * @description :: Server-side logic for managing indoorpositions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `IndoorPositionController.upload()`
   */
  upload: function (req, res) {
   IndoorPosition.create(req.params.all(),function (err,user){

if (err){
  return res.json({ 'message': err.message});
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `IndoorPositionController.query()`
   */
  query: function (req, res) {
    IndoorPosition.findOne({userId: req.param('userId')},function (err ,user){
      
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

