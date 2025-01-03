
function Login(){
    return(
        <div className="login">
            <div className="login-container">
                <div className="login-heading">
                    <h1>Login</h1>
                    <small>Login to your account</small>
                </div>
                <div className="login-form">
                    <form>
                        <h4 id="email-tag">Email: </h4>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" autoComplete="off" required/>

                        <h4 id="email-tag">Password: </h4>
                        <input type="password" id="email" name="password" placeholder="Enter Your Password" autoComplete="off" required/>

                        <input type="submit" value="Login" id="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login