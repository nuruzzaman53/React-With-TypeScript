import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export interface CommentField {
    userId:number
    title:string
    body:string 
}

const Comments:React.FC<CommentField> = ({userId,title,body}) => {
    return(
        <div>
            <div className='card p-3 mt-3'>
                <h6><span className="badge bg-warning text-success"> Post ID: {userId}</span></h6>
                <h5 className='text-danger'>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Comments