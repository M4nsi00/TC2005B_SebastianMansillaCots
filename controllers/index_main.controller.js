exports.get_index = ('/', (req, res) =>{
    res.render('index');
});
exports.get_referencias = ('/referencias', (req, res) => {
    res.render('referencias');
});
exports.get_labs = ('/labs', (req, res) =>{
    res.render('preguntas_labs');
});