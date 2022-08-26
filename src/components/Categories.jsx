import '../stylesheets/categories.css'
import Category from './Category'
import { fetchCategories } from '../Api'
import { useState, useEffect } from 'react' 

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetchCategories()
        .then(({categories: categoriesArray}) => {
            setCategories(categoriesArray)
        }).catch((err) => {
            setError(`ERROR: ${err.response.data.msg}`)
        })
    }, [])

    if(!categories) return <h1>{error}</h1>

    return <div className="categories-container">
        {categories.map((category) => {
            return <Category info={category} key={category.category_id}/>
        })}
    </div>
}

export default Categories