import Main from "../Main/Main";

const title = "Movienator";

const routes = [
    {
        path: "/",
        title: `Welcome to | ${title}`,
        page: Main,
        exact: true
    }

    // // 404
    // {
    //     title: `404 | ${title}`,
    //     page: NotFoundPage
    // }
];

export default routes;
