import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Manga(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Manga    
            </div>
            <Footer/> 
        </Layout>
    )
}

export default Manga 