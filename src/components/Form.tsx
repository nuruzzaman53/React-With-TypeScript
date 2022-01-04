import React,{useState} from 'react'

interface PeopelInfo {
    name: string
    email:string
    password: string
}


const Form: React.FC = () => {

    const [people,setPeople] = useState<PeopelInfo>({
        name:'',
        email:'',
        password:''
    })

    const {name,email,password} = people

    return (
        <div className='container mb-3'>
            <div className='row'>
                <form>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            placeholder='Enter Your Name......' 
                            className='form-control col-6 mt-2' 
                            spellCheck='true'
                            value={name}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='email' 
                            placeholder='Enter Your Email Address....' 
                            className='form-control col-6 mt-2'
                            value={email} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            placeholder='Enter Your Password....' 
                            className='form-control col-6 mt-2'
                            value={password} 
                        />
                    </div>

                    <button 
                        className='btn btn-outline-danger mt-3 px-4'
                        style={{ borderRadius:'20px'}}>
                        Submit Information
                    </button>

                </form>
           </div>
        </div>
    )
}

export default Form
