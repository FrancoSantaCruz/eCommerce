const controller = {
    index: (req,res) => {
        res.render('./website/index');
    },
    errors: (req,res) => res.render('./website/errors')
}

module.exports = controller;