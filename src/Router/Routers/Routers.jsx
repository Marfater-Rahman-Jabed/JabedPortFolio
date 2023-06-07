import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../../Pages/AllProjects/AllProjects";
import HomePages from "../../Pages/HomePages/HomePages";
import Main from "../../LayOut/Main/Main";
import ContactPage from "../../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePages></HomePages>
            },
            {
                path: '/viewAllProjects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            }
        ]
    }
])