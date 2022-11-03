import useSWR from 'swr'

const fetcher = (...url) => {
    return fetch(...url).then(res =>  res.json())
}

const Peticion =()=>{
    const { data, error } = useSWR("https://api.thedogapi.com/v1/images/search?limit=2", fetcher)
    
    return {
        dog: data,
        isLoading: !error && !data,
        isError: error
    }
}
export default Peticion