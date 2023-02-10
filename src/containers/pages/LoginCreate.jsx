import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Login from "components/LogInCreate/Login"
import SignUp from "components/LogInCreate/SignUp"

function LoginCreate(){
    return(
        <Layout>
            <Navbar>
                <Login/>
                
                <SignUp/>
            </Navbar>

        </Layout>
    )
}

export default LoginCreate