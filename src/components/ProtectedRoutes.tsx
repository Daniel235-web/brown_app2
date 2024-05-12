import { ReactNode , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import { useGeneralStore } from "../stores/generalStores";


const ProtectedRoutes = ({children} : {children: ReactNode}) => {
    const user = useUserStore((state) => (state))
    const navigate = useNavigate()
    const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen)
    useEffect(() => {
        if (!user.id) {
            navigate("/")// this is your login page
            setLoginIsOpen(true)
        }
    },[user.id, navigate, setLoginIsOpen])
    if (!user.id) {
        return <>No user ID</>
    }
    return <>{children}</>

} 
export default ProtectedRoutes;