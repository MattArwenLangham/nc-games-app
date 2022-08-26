import { useNavigate } from 'react-router-dom';

const Category = ({ info, key }) => {
    const {description, slug } = info
    
    const navigate = useNavigate();

    const filterPostsByCategory = () => {
        navigate({
            pathname: '/reviews',
            search: `?category=${slug}`
        })
    }
    
    return <div className="category-card" onClick={filterPostsByCategory} key={key} style={{backgroundImage: `url(./img/categories/${slug}.jpg)`}}>
        <h1>{slug.replaceAll("-", " ")}</h1>
        <p>{description}</p>
    </div>
}

export default Category