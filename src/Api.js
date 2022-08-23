import axios from 'axios'

export const fetchReviews = (category) => {
    let searchParams = ""

    if(category) searchParams = "?category=" + category

    return axios.get(`https://matts-nc-games.herokuapp.com/API/reviews${searchParams}`)
    .then(({data : reviews}) => reviews)
}

export const fetchCategories = () => {
    return axios.get('https://matts-nc-games.herokuapp.com/API/categories')
    .then(({data : categories}) => categories)
}