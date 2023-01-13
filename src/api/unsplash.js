import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4qsVVWFX64M-wyVo3tW3YdORovnG-uxtFccpvdoLSCg'
    }

});