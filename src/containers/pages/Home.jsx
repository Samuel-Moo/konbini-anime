import Footer from "components/navigation/Footer"
import Video from "components/content/Video"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"


function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                
                    <Video/>
                    Konnichiwa
                    <button className="invisible btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary "> Nuevo Descubrimiento </button>
                    
               
                {/* <Footer/> */}
                </Navbar>     
        </Layout>
    )
}

export default Home 