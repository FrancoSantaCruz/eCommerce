const controller = {
    index: (req,res) => {
        res.render('./website/index');
    },
    errors: (req,res) => res.render('./website/errors'),
    aboutus: (req,res) => {
        res.render('./website/aboutus')
    }
}

module.exports = controller;