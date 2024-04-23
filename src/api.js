import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=c43BLTEYuulT8LO7sxZLuhGhY8PLHSC-CXXt1dQsJAA'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(term)
    console.log(response.data.results)

    return response.data.results
}

export default searchImage