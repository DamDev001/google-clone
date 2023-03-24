import { useState, useEffect } from 'react'
import API_KEY from './key'

const CONTEXT = "83b122e77cb314a42"
function UseGoogleSearch( term) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT}&q=${term}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
        }

        fetchData()
    }, [term])
    
  return {data};
}

export default UseGoogleSearch