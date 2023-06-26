const AuthorController = require('../controllers/author.controller')

module.exports = function(app){
    app.get('/api', AuthorController.test)

    //create
    app.post('/api/author', AuthorController.createAuthor)
    //read
    app.get('/api/authors', AuthorController.showAuthors)
    app.get('/api/authors/:id', AuthorController.showOneAuthor)
    //update
    app.patch('/api/authors/:id', AuthorController.editAuthor)
    //delete
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}