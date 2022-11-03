import '../Styles/Dogs.css'
import Card from '../Cards/Card'
import Peticion from '../Peticion'
//import fetcher from './fetcher'


function Dog () {

  const {dog , isLoading, isError} = Peticion()

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>  

  return (
  <div className='dogs'>
    {dog.map((x, index)=> <Card key={index} id={x.url}/> )}
  </div>
  )
}

export default Dog