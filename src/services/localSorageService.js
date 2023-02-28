class LocalStorageService {
    getUser = () => {
        return JSON.parse(localStorage.getItem("user"))
    }
    setUser = ({firstName, lastName, email, password}) => {
        const userData = {firstName, lastName, email, password}
        localStorage.setItem("user", JSON.stringify(userData))
        
    }
    getRememberMe = () => {
        return localStorage.getItem("rememberMe")
    }
    setRememberMe = (value) => {
        localStorage.setItem("rememberMe", value)
    } 
}
export default LocalStorageService

