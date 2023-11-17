import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"



const PrivateRoute = ({element}) => {
    const {isAuthenticated} = useContext(AuthContext)

    return isAuthenticated ? element : <Navigate to="/login" />

}

export default PrivateRoute;