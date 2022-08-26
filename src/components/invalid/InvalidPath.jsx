import { useParams } from "react-router-dom"

const InvalidPath = () => {
    const {invalid_path} = useParams()
    
    return <div className="invalid-path">
        <h1> 404: {invalid_path} has not been found</h1>
        <img src="./img/404.png"></img>
    </div>
}

export default InvalidPath