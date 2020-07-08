exports.renderPage = (req, res) => {
    res.render('components/date/date', {ip: req.ip});
};
