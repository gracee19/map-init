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
        return axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`, { params: { q: query} });
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