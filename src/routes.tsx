import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrl } from './routes-url'
import { HomePage } from './pages/home'


export function RouteProvider() {
    const routes = [
        {
            path: '*',
            element: <h1>error</h1>
        },
        {
            path: RoutesUrl.BASE_URL,
            element: <HomePage />
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}