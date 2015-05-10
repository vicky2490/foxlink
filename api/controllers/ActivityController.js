/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `ActivityController.upload()`
   */
  upload: function (req, res) {
    Activity.create(req.params.all(),function (err,user){

if (err){
  return res.json({ 'message': err.message });
}

res.json({ 'message': 'ok'});
});
  },


  /**
   * `ActivityController.query()`
   */
  query: function (req, res) {
   Activity.findOne({userId: req.param('userId')},function (err ,user){
      
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

