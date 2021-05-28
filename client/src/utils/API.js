import axios from "axios";

export default {
    getSearchedCountry: function(query) {
        return axios.get("/api/country", { params: { q: query} });
    }
    
};