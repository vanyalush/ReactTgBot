import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    INTERFACE_ROUTE,
    DEFAULT_TASK
} from './utils/consts'
import AuthForm from './Components/Auth/AuthForm'
import ClientPart from './Components/ClientPart/ClientPart'
import InterfaceDefTask from "./Components/InterfaceDefTask/InterfaceDefTask";

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
    },
    {
        path: DEFAULT_TASK,
        Component: InterfaceDefTask
    }
]