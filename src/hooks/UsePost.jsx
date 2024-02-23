import {useState} from "react";
import axios from "axios";

const UsePost = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const sendRequest = async requestData => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post(url, requestData);
            setResponseData(response.data);
        } catch (e) {
            console.error(e);
            setError(e);
        }

        setIsLoading(false);

    }

    return { sendRequest, responseData, error, isLoading }

};

export default UsePost;