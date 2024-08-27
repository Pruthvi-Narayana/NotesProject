/*
GET /
HomePage
*/
exports.homepage = async (req, res) => {
    const locals = {
        title: "NodeJs Notes"
    };
    res.render('index', {
        locals,
        layout:"../views/layouts/front-page"
    });
}

/*
GET /
HomePage
*/
exports.about = async(req,res) => {
    const locals = {
        title : "About - NodeJs"
    }
    res.render('about', locals);
}

