
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import authService from '../services/authService'
import { CookieService, CookieTypes } from '../services/cookieService'
import { LogoutAction, SetAuth } from '../store/actions/authActions'
import { SaveUser } from '../store/actions/userActions'

const useAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = (callback = null) => {
        CookieService.delete(CookieTypes.AUTH)
        // dispatch(LogoutAction())
        window.location.pathname = "/"
        callback && callback()
    }

    const handleSignin = (values, callback = null) => {
        authService.signin(values).then(res => {
            const data = { id: res.data.data.user._id, token: res.data.data.token }
            CookieService.set(CookieTypes.AUTH, res.data.data)
            dispatch(SetAuth(res.data.data))
            // dispatch(SaveUser(res.data.data.user))
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