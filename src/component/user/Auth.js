import { Button, CircularProgress, TextField } from "@material-ui/core"
import axios from "axios"
import { useState } from "react"
import '../../css/auth.css'
import Cookies from 'universal-cookie';
function Auth() {
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const loginHandler = async() =>{
        setLoading(true)
        setError('')
        const response = await axios({
            url: '/login',
            method:'POST',
            data: {
                email,
                password
            }
        })
        setLoading(false)
        if(response.data.message==='success'){
            console.log(response.data.token)
            const cookies = new Cookies()
            cookies.set('auth_token', response.data.token, {path: '/'})
        } else{
            setError(response.data.error)
        }
    }
    const signUpHandler = async() =>{
        setLoading(true)
        setError('')
        const response = await axios({
            url:'/signup',
            method:'POST',
            data:{
                username,
                email,
                contact,
                password
            }
        })
        setLoading(false)
        if(response.data.status==='success'){
            const cookies = new Cookies()
            cookies.set('auth_token', response.data.token, {path:'/'})
        } else{
            setError(response.data.error)
        }
    }
    return (
        <div className='auth-page'>
            <form>
                <div>
                    <h1>Login</h1>
                    <TextField
                        label="Email"
                        rowsMax={4}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        rowsMax={4}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                </div>
                {error && <p>{error}</p>}
                <Button onClick={loginHandler} variant='contained'>{loading?<CircularProgress />:'Login'}</Button>
            </form>

             <form>
                <div>
                    <h1>Sign Up</h1>
                    <TextField
                        label="User Name"
                        rowsMax={4}
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        rowsMax={4}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        label="Contact"
                        rowsMax={4}
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        rowsMax={4}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {error && <p>{error}</p>}

                </div>
                <Button onClick={signUpHandler} variant='contained'> {loading? <CircularProgress />: 'Signup'} </Button>
            </form>
        </div>
    )
}

export default Auth
