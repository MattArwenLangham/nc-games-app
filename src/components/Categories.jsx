import '../stylesheets/categories.css'
import Category from './Category'
import { fetchCategories } from '../Api'
import { useState, useEffect } from 'react' 
import Loading from './Loading'

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchCategories()
        .then(({categories: categoriesArray}) => {
            setCategories(categoriesArray)
            setIsLoading(false)
        }).catch((err) => {
            setError(`ERROR: ${err.response.data.msg}`)
            setIsLoading(false)
        })
    }, [])

    while(isLoading) return <Loading />

    if(!categories) return <h1>{error}</h1>

    return <div className="categories-container">
        {categories.map((category) => {
            return <Category info={category} key={category.category_id}/>
        })}
    </div>
}

export default Categories