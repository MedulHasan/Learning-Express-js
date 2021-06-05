exports.getAllPost = (req, res) => {
    let { category, page } = req.query
    res.send('Render ' + page + ' posts')
}

exports.getSinglePost = (req, res) => {
    res.send('I am post = ' + req.params.postid)
}

exports.createNewPost = (req, res) => {
    res.send('Create All posts')
}

exports.updatePost = (req, res) => {
    res.send('update post = ' + req.params.postid)
}

exports.deletePost = (req, res) => {
    res.send('delete post = ' + req.params.postid)
}