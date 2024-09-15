import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import WatchPage from './WatchPage';


const Body = () => {
    const approuter = () => createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/watch",
            element: <WatchPage/>
        }
    ]);


    return (
        <RouterProvider router={approuter()} />
    );
}

export default Body