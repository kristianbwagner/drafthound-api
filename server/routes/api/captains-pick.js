/**
 *
 * /api/advanced-captains-pick
 *
 * All routes relating to advanced player picks
 * These routes will be related to a dashboard provider (e.g. Firebase)
 *
 **/

var firebaseAdmin = require("../../../providers")["firebase-admin"];
var authentication = require("../../../middleware/authentication")
var db = firebaseAdmin.database();


module.exports = function(app, hbs){

  /**
   *
   * /api/captains-pick/table
   * @desc: Get top 10 captain picks
   * @param null
   * @returns {{Object}}
   *
   */

  app.get("/api/captains-pick/table", function(req, res, next) {
    var query = req.query;
    res.json({});
  });

};
