import React from 'react'
import '../App';

import { Card, CardContent, CardMedia, CardHeader, Typography, Container} from '@material-ui/core';
function Login() {
    return (
        <div className='page'>
        <div className='container'>
            <Container>
            <Card>
                <CardContent>
              <Typography variant='h2' component='h2'>Expat Journal</Typography>
              <Typography variant='h3' component='h3' gutterBottom >Login</Typography>
               dd

            <CardMedia 
            component='img'
            image='https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
            height='100'
            />
                
                    
            <form>
                <input type='username' name='username'  />
                <input type='password' name='password'  />
                <br></br>
                <button>Login</button>
                <button>Register</button> 

            </form>
            </CardContent>
            </Card>
            </Container>
        </div>
        </div>
    )
}

export default Login;
