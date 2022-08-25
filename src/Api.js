import axios from 'axios'

export const fetchReviews = (category, sort_by, order) => {
    return axios.get(`https://matts-nc-games.herokuapp.com/API/reviews`, {params: {category, sort_by, order}})
    .then(({data : reviews}) => reviews)
}

export const fetchReviewById = (review_id) => {
    return axios.get(`https://matts-nc-games.herokuapp.com/API/reviews/${review_id}`)
    .then(({data : review}) => review)
}

export const fetchCategories = () => {
    return axios.get('https://matts-nc-games.herokuapp.com/API/categories')
    .then(({data : categories}) => categories)
}

export const sendVote = (review_id, vote) => {
    return axios
    .patch(`https://matts-nc-games.herokuapp.com/API/reviews/${review_id}`, {"inc_votes": vote})
    .then(({data : review}) => review)
    .catch((err) => {
        return Promise.reject(err)
    })
}

export const sendCommentVote = (comment_id, vote) => {
    return axios
    .patch(`https://matts-nc-games.herokuapp.com/API/comments/${comment_id}`, {"inc_votes": vote})
    .then(({data : review}) => review)
    .catch((err) => {
        return Promise.reject(err)
    })
}

export const getCommentsByReview = (review_id) => {
    return axios
    .get(`https://matts-nc-games.herokuapp.com/API/reviews/${review_id}/comments`)
    .then(({data : comments}) => comments)
}

export const getUsers = () => {
    return axios
    .get(`https://matts-nc-games.herokuapp.com/API/users`)
    .then(({data : users}) => users)
}

export const getUsersByUsername = (username) => {
    return axios
    .get(`https://matts-nc-games.herokuapp.com/API/users/${username}`)
    .then(({data : user}) => user)
}

export const postComment = (review_id, comment, username) => {
    return axios
    .post(`https://matts-nc-games.herokuapp.com/API/reviews/${review_id}/comments`, {body: comment, username})
    .then (({data: comment}) => comment)
    .catch((err) => {
        return Promise.reject(err)
    })
}