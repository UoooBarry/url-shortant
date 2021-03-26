const express = require('express');
const router = express.Router();
const Url = require('../models/url');

router.get('/:id', async (req, res) => {
  try{
    url = await Url.findOne({uuid: req.params.id});
    res.status(301).redirect(url.original_url);
  }catch(e){
    console.log(e.message)
    res.status(500)
        .json({
          errors: [e.message]
        })
  }
});

module.exports = router
