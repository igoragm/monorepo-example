import React, { useEffect } from "react";
// import { axiosApi } from "../utils/axiosApi";
// import Axios from "axios";
import { axiosApi } from "../utils/axiosApi";

const TestComponent: React.FC<any> = () => {
    useEffect(() => {
        async function getData() {
            const response = await axiosApi.get("/express_backend");
            console.log(response);
        }
        getData();
    }, []);

    return <div>this is a teeest component</div>;
};

export default TestComponent;
