var express = require('express');
var router = express.Router();

/* GET hero page. */
router.get('/', function(req, res, next) {
  res.render('hero', {
      title: 'Hero',
      data: {
          '太郎':'taro@yamada',
          '花子':'hanako@flower',
      }
});
});

module.exports = router;
