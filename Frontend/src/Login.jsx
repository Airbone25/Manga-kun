import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "./contexts/LoginContext"

function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const context = useContext(LoginContext)

    function handleSubmit(e){
        e.preventDefault()
        const data = {email,password}
        postData(data)
        setEmail('')
        setPassword('')
    }

    const navigate = useNavigate()

    async function postData(value){
        try{
            const res = await fetch('http://localhost:3000/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            const data = await res.json()
            if(!res.ok){
                setError(data.error)
            }
            if(res.ok){
                localStorage.setItem('user',JSON.stringify(data))
                context.setUser(localStorage.getItem('user'))
                navigate('/')
            }
        }catch(error){
            console.error(error.message)
        }
    }

    return(
        <div className="login">
            <div className="login-container">
                <div className="login-heading">
                    <h1>Login</h1>
                    <small>Login to your account</small>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h4 id="email-tag">Email: </h4>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="off" required/>

                        <h4 id="email-tag">Password: </h4>
                        <input type="password" id="email" name="password" placeholder="Enter Your Password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="off" required/>

                        <input type="submit" value="Login" id="submit"/>

                        {error && <h4 id="error-tag">{error}</h4>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login