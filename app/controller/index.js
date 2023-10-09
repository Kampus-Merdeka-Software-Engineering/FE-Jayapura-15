const registrants = require('../model/registrants');
const reviews = require('../model/reviews');

reviews.findAll()
.then(function (data) {
    const reviews_data = data
    res.render('../views/index', {
        data: reviews_data
    })
    return
})
.catch(function(err) {
    res.json({
        error: err
    })
})