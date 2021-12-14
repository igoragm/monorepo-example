
import LandingPage from "../../pages/LandingPage";

const title = "Movienator";

const routes = [
    // Root
    {
        path: "/",
        title: `Welcome to | ${title}`,
        page: LandingPage,
         exact: true
    },

    // 404
    { 
        
        title: `404 | ${title}`,
         page: NotFoundPage
    }
];

export default routes;
