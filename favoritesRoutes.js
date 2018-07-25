const express = require('express')
const router = express.Router()
const queries = require('./favoritesQueries')


router.get('/', (req, res) => {
    queries.list()
        .then(favorites => {
            res.json(favorites)
        })   
})

router.get('/:id', (req, res) => {
  queries.read(req.params.id)
    .then(favorite => {
      res.json(favorite)
    })
})

router.post('/', (req, res) => {
  queries.create(req.body)
    .then(newfavorite => {
      res.json(newfavorite)
    })
})

router.delete("/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({
      deleted: true
    });
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update(request.params.id, request.body).then(favorite => {
    response.json({
      favorite
    });
  }).catch(next);
});



module.exports = router;