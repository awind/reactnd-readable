const api = "http://localhost:5001"
const authorizationHeader = { headers: { 'Authorization': '123456'}}


//  ---------------  Category  -------------------


// Get all of the categories available for the app.
export const getCategories = () => 
    fetch(`${api}/categories`, authorizationHeader)
        .then(res => res.json())

//  ---------------  POST  -------------------

// Get all of the posts for a particular category
export const getCategoryPosts = (category) => 
    fetch(`${api}/${category}/posts`, authorizationHeader)
        .then(res => res.json())

// Get all of the posts.        
export const getAllPosts = () => 
    fetch(`${api}/posts`, authorizationHeader)
        .then(res => res.json())

// Add a new post
export const addPost = (id, timestamp, title, body, owner, category) => 
    fetch(`${api}/posts`, { 
        authorizationHeader,
        method: 'POST',
        body: JSON.stringify({id, timestamp, title, body, owner, category})
    })
        .then(res => res.json())

// Edit the details of an existing post
export const updatePost = (id, title, body) =>
    fetch(`${api}/posts/${id}`, {
        authorizationHeader,
        method: 'PUT',
        body: JSON.stringify({title, body})
    })
        .then(res => res.json())

// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (id) => 
    fetch(`${api}/posts/${id}`, {
        authorizationHeader,
        method: 'DELETE'
    })
        .then(res => res.json())

// Get the details of a single post
export const getPostDetail = (id) => 
    fetch(`${api}/posts/${id}`, authorizationHeader)
        .then(res => res.json())

// Used for voting on a post
// params: options -> upVote/downVote
export const votePost = (id, options) =>
    fetch(`${api}/posts/${id}`, {
        authorizationHeader,
        method: 'POST',
        body: JSON.stringify({options})
    })
        .then(res => res.json())


//  ---------------  Comment  -------------------


// Get all the comments for a single post
export const getPostComments = (id) => 
    fetch(`${api}/posts/${id}/comments`, authorizationHeader)
        .then(res => res.json())

// Add a comment to a post
export const addPostComment = (id, timestamp, body, owner, parentId) =>
    fetch(`${api}/comments`, {
        authorizationHeader,
        method: 'POST',
        body: JSON.stringify({id, timestamp, body, owner, parentId})
    })
        .then(res => res.json())

// Get the details for a single comment
export const getCommentDetail = (id) =>
    fetch(`${api}/comments/${id}`, authorizationHeader)
        .then(res => res.json())


// Used for voting on a comment
export const voteComment = () => 
    fetch(`${api}/comments/${id}`, {
        authorizationHeader,
        method: 'POST',
    })
        .then(res => res.json())

// Edit the details of an existing comment
export const editComment = (id, timestamp, body) =>
    fetch(`${api}/comments/${id}`, {
        authorizationHeader,
        method: 'PUT',
        body: JSON.stringify({timestamp, body})
    })
        .then(res => res.json())

// Sets a comments's deleted flag to true
export const deleteComment = (id) => 
    fetch(`${api}/comments/${id}`, {
        authorizationHeader,
        method: 'DELETE',
    })
        .then(res => res.json())