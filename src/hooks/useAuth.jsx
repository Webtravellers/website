import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import authService from '../services/authService'
import { LogoutAction } from '../store/actions/authActions'
const useAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = (callback = null) => {
        dispatch(LogoutAction())
        window.location.pathname = "/"
        callback && callback()
    }

    const handleSignin = (values, callback = null) => {
        authService.signin(values).then(res => {
            Swal.fire({
                title: "Başarılı",
                text: res.data.message,
                icon: "success",
            })
        }).catch(err => {
            Swal.fire({
                title: "Hata",
                text: err.response.data.message,
                icon: "error",
            })
        }).finally(() => {
            navigate("../../")
            callback && callback()
        })
    }

    return { handleLogout, handleSignin }
}

export default useAuth