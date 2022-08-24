import axios from 'axios'

export const fetchReviews = (category) => {
    let searchParams = ""

    if(category) searchParams = "?category=" + category

    return axios.get(`https://matts-nc-games.herokuapp.com/API/reviews${searchParams}`)
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