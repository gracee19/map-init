import axios from "axios";

// axios
//     .get("/user?ID=1")
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(err){
//         console.log(err)
//     });
// axios.get()


export const api= {
    getSearchedCountry: function(query) {
        return axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=5ae2e3f221c38a28845f05b667f379894030a48d298464cab6f3584f`, { params: { q: query} });
    }

    // getUser: async function(){
    //     if(username === '') {
    //         const currentUser = await Parse.User.currentAsync();
    //         if( currentUser !== null) {
    //             setUsername(currentUser.getUsername())
    //         }
    //     }
    //     return axios.get("/api/user/login", {params:{q: query}})
    // }
    
};