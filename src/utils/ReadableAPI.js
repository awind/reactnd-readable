const api = "http://localhost:5001"
const authorization = { 'Authorization': '123456'}
const authorizationHeader = { headers: authorization}


//  ---------------  Category  -------------------


// Get all of the categories available for the app.
export const getCategories = () => 
    fetch(`${api}/categories`, authorizationHeader)
        .then(res => res.json()).then(data => data.categories)

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
export const addPost = (post) => 
    fetch(`${api}/posts`, { 
        method: 'POST',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id: post.id, timestamp: post.timestamp, title: post.title, body: post.body, author: post.author, category: post.category})
    })
        .then(res => res.json())

// Edit the details of an existing post
export const updatePost = ({id, title, body}) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({title, body})
    })
        .then(res => res)

// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (id) => 
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
    })
        .then(res => res)

// Get the details of a single post
export const getPostDetail = (id) => 
    fetch(`${api}/posts/${id}`, authorizationHeader)
        .then(res => res.json())

// Used for voting on a post
// params: options -> upVote/downVote
export const votePost = ({id, option}) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({option})
    })
        .then(res => res.json())


//  ---------------  Comment  -------------------


// Get all the comments for a single post
export const getPostComments = (id) => 
    fetch(`${api}/posts/${id}/comments`, authorizationHeader)
        .then(res => res.json())

// Add a comment to a post
export const addPostComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id: comment.id, timestamp: comment.timestamp, body: comment.body, author: comment.author, parentId: comment.parentId})
    })
        .then(res => res.json())

// Get the details for a single comment
export const getCommentDetail = (id) =>
    fetch(`${api}/comments/${id}`, authorizationHeader)
        .then(res => res.json())


// Used for voting on a comment
export const voteComment = ({id, option}) => 
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({option})
    })
        .then(res => res.json())

// Edit the details of an existing comment
export const editComment = ({id, timestamp, body}) => 
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({timestamp, body})
    })
        .then(res => res.json())

// Sets a comments's deleted flag to true
export const deleteComment = (id) => 
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            ...authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }),
    })
        .then(res => res.json())