// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import { Login } from 'src/services/services'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Counter } from 'src/redux/counter'


const Home = () => {

  const getDataLogin = async () => {
    const form = {
      email: 'string@gmail.com',
      password: '12345678'
    }

    console.log(process.env.NEXT_PUBLIC_API_ACTIVOS)


    await Login(form)
      .then(result => {
        alert(JSON.stringify(result))
        localStorage.setItem('token', result.response.token)
        console.log(result)
      })
      .catch(e => {
        alert(JSON.stringify(e))
      })

//      console.log(localStorage.getItem('token'))

      
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Counter></Counter>
        <Card>
          <Button onClick={getDataLogin}>TEST LOGIN REST API</Button>

          <CardHeader title='Kick start your project 🚀'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
            <Typography>
              Please make sure to read our Template Documentation to understand where to go from here and how to use our
              template.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are
              implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
