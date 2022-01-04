import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import Form from './components/Form'
import Comments from './components/Comments'
import { CommentField } from './components/Comments'


const App: React.FC = () => {

  const [data,setData] = useState<Array<CommentField>>([])

  const getPost = async () => {
      const fetchAPI = await Axios.get('https://jsonplaceholder.typicode.com/posts')
      const post = fetchAPI.data as Array<CommentField>
      setData(post)
  }

  useEffect(() => {
    getPost()
  },[])

  return(
    <div className='container'>
      <h1 className='display-6'>React TypeScript Form Tutorials</h1>
      <Form />
      <h1 className='display-6'> Latest User Post From JSON Placeholders</h1>
      <div className='row'>
        {data.map(comment =>
            <div className='col-6'>
                <Comments userId={comment.userId} title={comment.title} body={comment.body} />
            </div>
          )
        }
      </div>   
    </div>
  )
}
export default App
