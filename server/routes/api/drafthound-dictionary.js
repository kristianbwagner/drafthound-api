/**
 *
 * /api/drafthound-dictionary
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
   * /api/drafthound-dictionary/table
   * @desc: get all dictionary entrances
   * @param null
   * @returns {{Object}}
   *
   */

  app.get("/api/captains-pick/table", function(req, res, next) {
    res.json({});
  });

  /**
   *
   * /api/drafthound-dictionary/entrance/:entrance
   * @desc: get deginition of specific entrance
   * @param entrance {{String}}
   * @returns {{Object}}
   *
   */

  app.get("api/drafthound-dictionary/entrance/:entrance", function(req, res, next) {
    res.json({});
  });

};
