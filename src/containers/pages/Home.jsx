import Footer from "components/navigation/Footer"
import Sidebar from "components/navigation/Sidebar"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Homelanding from "components/home/Home"

function Home(){
    return(
        <Layout data-theme="mosquera">
            <Sidebar>
                <Navbar/>
                <div className="pt-28">
                    Home
                </div>
                <Footer/>
            </Sidebar> 
        </Layout>
    )
}

export default Home 