/**
 *
 * /api/advanced-player-picks
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
   * /api/advanced-player-picks/table
   * @desc: Get data for all players
   * @param null
   * @returns {{Object}}
   *
   */


  app.get("/api/advanced-player-picks/table", function(req, res, next) {
    var query = req.query;
    res.json({});
  });

  /**
   *
   * /api/advanced-player-picks/player/:playerid
   * @desc: Get data for a speciific player
   * @param playerid {{String}}
   * @returns {{Object}}
   *
   */

  app.get("/api/advanced-player-picks/player/:playerid", function(req, res, next) {
    var query = req.query;
    res.json({});
  });

};
