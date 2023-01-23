import Footer from "components/navigation/Footer"

import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Homelanding from "components/home/Home"

function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar/>
                <div className="pt-28">
                    Home
                </div>
                <Footer/>       
        </Layout>
    )
}

export default Home 