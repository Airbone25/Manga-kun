import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../contexts/LoginContext"


function Signup(){

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const context = useContext(LoginContext)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const data = {username,email,password}
        console.log(data)
        postData(data)
        setUsername('')
        setEmail('')
        setPassword('')
    }

    async function postData(value){
        try{
            const res = await fetch(`${import.meta.env.VITE_URL}/auth/signup`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            const data = await res.json()
            if(!res.ok){
                throw new Error("Could Not Fetch")
            }
            if(data.error){
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
                    <h1>SignUp</h1>
                    <small>Create your account at Manga-kun</small>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h4 id="email-tag">Username: </h4>
                        <input type="text" id="email" name="username" placeholder="Enter Your Username" value={username} onChange={e=>setUsername(e.target.value)} autoComplete="off" required/>

                        <h4 id="email-tag">Email: </h4>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="off" required/>

                        <h4 id="email-tag">Password: </h4>
                        <input type="password" id="email" name="password" placeholder="Enter Your Password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="off" required/>

                        <input type="submit" value="Signup" id="submit"/>

                        {error && <h4 id="error-tag">{error}</h4>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup