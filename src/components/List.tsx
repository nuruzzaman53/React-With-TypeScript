import React from 'react'
import {State as Props} from '../App'

const List: React.FC<Props> = ({people}) => {
    return (
        <div>
            {
                people.map(person => 
                    <ul>
                        <li>{person.name}</li>
                        <li>{person.age}</li>
                        <li><img src={person.url} alt='image'/></li>
                        <li>{person.note}</li>
                    </ul>
                )
            }
           
        </div>
    )
}

export default List
