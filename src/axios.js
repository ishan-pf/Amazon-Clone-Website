import axios from "axios";
 // THE API (cloud function) URL
const instance = axios.create({

    basketURL: "http://localhost:5001/clone-58509/us-central1/api"
    
}
);

export default instance;