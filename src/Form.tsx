import React, { useState,useRef } from 'react'

interface Props {
    name: string;
    email: string;
    phone: number;
    changeHandle : (event:React.ChangeEvent<HTMLInputElement>) => void
}

interface Name {
    value : string
}

const Form: React.FC<Props> = ({changeHandle}) => {

    const [name,setName] = useState<Name>({ value:'Nuruzzaman'})

    const inputRef = useRef<HTMLInputElement>(null)

    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <h4>TypeScript Practice</h4>
            <input onChange={changeHandle} ref={inputRef} />
        </div>
    )
}

export default Form
