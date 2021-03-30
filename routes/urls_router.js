const express = require('express');
const router = express.Router();
const Url = require('../models/url');

router.get('/:id/', async (req, res) => {
  url = await Url.findOne({uuid: req.params.id});
  res.json({payload: url})
});

router.post('/', async (req, res) => {
  uuid = generateUID();
  try{
    formated_url = validateUrl(req.body.url)
    url = await Url.create({
      uuid: uuid,
      original_url: formated_url
    })
    res.json({payload: url})
  }catch(e){
    res.status(400)
        .json({
          url: req.body.url,
          errors: [e]
        })
  }
});


function generateUID() {
  // I generate the UID from two parts here 
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

function validateUrl(str){
  const url_regex = new RegExp("[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?")
  if (url_regex.test(str)) {
    // Force the url into https://xxx
    str = /(http(s?)):\/\//i.test(str) ? str : `https://${str}`;
  } else {
    throw 'Bad URL format';
  }
  return str;
}

module.exports = router;