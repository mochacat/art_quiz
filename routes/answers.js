var express = require('express');
var router = express.Router();

/*
 *  POST to check answers
 */
router.post('/score', function(req,res){
  var artists = {artist1: 1, artist2: 2, artist3: 1, artist4: 2, artist5: 1,};
  var score = 0;
  for (var key in req.body){
    if (req.body.hasOwnProperty(key)){
      if (req.body[key] == artists[key]){
	score++;
      }
    }
  }
  res.send(score.toString());
});


module.exports = router;
