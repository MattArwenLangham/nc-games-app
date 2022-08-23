import '../stylesheets/categories.css'
import Category from './Category'
import { fetchCategories } from '../Api'
import { useState, useEffect } from 'react' 

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
        .then(({categories: categoriesArray}) => {
            setCategories(categoriesArray)
        })
    }, [])

    return <div className="categories-container">
        {categories.map((category) => {
            return <Category info={category} key={category.category_id}/>
        })}
    </div>
}

export default Categories