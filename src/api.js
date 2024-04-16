import axios from 'axios'
const searchImage = async(term) => {
    const url = 'https//api.unsplash.com/search/photos/?client_id=foK34TEwWLE0K1Jr218rp-g607JNI1VLTzHLLHBizgw'


const response = await axios.get(url,{
    params:{
        query:'cars'
    }
})

console.log(response)


}
export default searchImage