import React from 'react'
import {State as Props} from '../App'

const List: React.FC<Props> = ({ people }) => {
    return (
        <div>
            {
                people.map(person => {
                    return(
                        <div>
                            <img className="h-12 w-12" src ={person.url} alt="" />
                            <h2>{person.name}</h2>
                            <p className="text-gray-500">{person.note}</p>                
                        </div>
                    )
              })
            }       
        </div>
    )
}

export default List
