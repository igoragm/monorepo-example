import TestComponent from "../../components/TestComponent";

const title = "Movienator";

const routes = [
    {
        path: "/",
        title: `Welcome to | ${title}`,
        page: TestComponent,
        exact: true
    }

    // // 404
    // {
    //     title: `404 | ${title}`,
    //     page: NotFoundPage
    // }
];

export default routes;
