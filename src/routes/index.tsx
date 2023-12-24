import { Login } from "../features";
import { LoginLayout } from "../layout";
import { renderRoutes } from "./generate-routes";

const routes =[
    {
        layout : LoginLayout,
        routes : [
            {
                name: 'login',
                title: 'Login Page',
                component: Login,
                path: '/login',
                isPublic: true
            }
        ]
    }


]

export  const Routess = renderRoutes(routes);
