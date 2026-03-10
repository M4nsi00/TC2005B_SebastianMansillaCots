exports.get_index = ('/', (req, res) =>{
    res.render('index',{
        csrfToken: req.csrfToken()
    });
});
exports.get_referencias = ('/referencias', (req, res) => {
    res.render('referencias',{
        csrfToken: req.csrfToken()
    });
});
exports.get_labs = ('/labs', (req, res) =>{
    res.render('preguntas_labs',{
        csrfToken: req.csrfToken()
    });
});