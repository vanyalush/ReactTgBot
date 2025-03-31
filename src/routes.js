import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    INTERFACE_ROUTE
} from './utils/consts'
import AuthForm from './Auth/AuthForm'
import ClientPart from './ClientPart/ClientPart'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthForm
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthForm
    }
]
export const authRoutes = [
    {
        path: INTERFACE_ROUTE,
        Component: ClientPart
    }
]