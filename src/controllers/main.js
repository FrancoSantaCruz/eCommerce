const { hyphenToCamel } = require('ejs/lib/utils');
const path = require('path');
const index = (req,res) => res.render('index',{
    visible:true,
    items:[1,2,3,4,5]
});


module.exports = {index}