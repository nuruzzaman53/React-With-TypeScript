import React,{useState,useRef} from 'react'
import Counter from './Counter'

interface Person {
    firstName:string;
    lastName: string;
}

interface Props {
    name: string;
    address: string;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement> ) => string
}

interface TextNode { value: string }
 
const TextField: React.FC<Props> = ({handleChange}) => {

    const [count,setCount] = useState<TextNode> ({value:'hello'})
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef   = useRef<HTMLDivElement>(null)
 
    return (
        <div ref={divRef} style={{ margin:"10px",padding:"50px"}}>
            <h3>Text Input Field</h3>
            <input ref={inputRef} onChange={handleChange} />
            <Counter>
                {(count,setCount) =>(
                    <div>
                        <button onClick={() => setCount(count + 1)}>Click ME</button>
                    </div>
                )}
            </Counter>
        </div>
    )
}

export default TextField
