import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function LoginCreate(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-16">
                Login Create
            </div>
            <Footer/> 
        </Layout>
    )
}

export default LoginCreate