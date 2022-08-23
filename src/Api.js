import axios from 'axios'

export const fetchReviews = () => {
    return axios.get('https://matts-nc-games.herokuapp.com/API/reviews')
    .then(({data : reviews}) => reviews)
}