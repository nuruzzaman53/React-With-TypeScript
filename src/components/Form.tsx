import React,{useState} from 'react'
import {State as Props} from '../App'

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const Form: React.FC<IProps> = ({people,setPeople}) => {

    const [input,setInput] = useState({
        name:'',
        age:'',
        url:'',
        note:''
    })

    const {name,age,url,note} = input

    const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setPeople({
            ...people,[e.target.name] : e.target.value
        })
    }

    const clickSubmit = (): void => {
        setPeople([
            ...people,{ 
                name:name,
                age:parseInt(age),
                url:url,
                note:note,
            }
        ])
    }

    return(
        <div>
            <h3>Add a new person to your party</h3>
            <form>
                <input 
                   type='text' 
                   placeholder='Enter Your Name'
                   value={name}
                   name='name'
                   onChange={handleChange} 
                />
                 <input 
                   type='text' 
                   placeholder='Enter Your Age'
                   value={age}
                   name='age'
                   onChange={handleChange}  
                />
                <input 
                   type='text' 
                   placeholder='Paste Your Photo URL'
                   value={url}
                   name='url'
                   onChange={handleChange}  
                />
                <textarea 
                   placeholder='Paste Your Photo URL'
                   value={note}
                   name='note' 
                   onChange={handleChange} 
                />

                <button onClick={clickSubmit}> Submit Information</button>
            </form>
        </div>
    )
}

export default Form