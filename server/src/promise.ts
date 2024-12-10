import axios from "axios";

/*
axios.get('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
        console.log(response.data)
    })

axios.get('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
        return axios.get(`https://dog.ceo/api/breed/${response.date.message[0]}/image/random`)
    }).then((reponse) => {
        console.log(response.dat)
    }).catch((error) => {
        console.log(error)
    })
*/

const doRequest = async () => {
    try{
        const response = await axios.get('https://dog.ceo/api/breeds/list/all')
        console.log(response.data)
    }catch(err){
        console.error(err)
    }finally{
        console.log("Request finished")
    }
}

doRequest()
