import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Anime(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Anime    
            </div>
            <Footer/> 
        </Layout>
    )
}

export default Anime 