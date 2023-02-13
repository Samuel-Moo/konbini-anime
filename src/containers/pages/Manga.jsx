import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import loveiswar from "assets/images/loveiswar.jpg"
import drstone from "assets/images/drstone.jpg"
import oshi from "assets/images/oshi.jpg"


function Manga(){
    return(
        <Layout>
            <Navbar>
                
            <div className="py-4"><h1 className="text-3xl text-center font-bold">Manga</h1></div>
            <div class="grid grid-cols-3 gap-4">
                <div className="card-compact w-48 bg-base-100 rounded-lg" top>
                    <figure><img src= {loveiswar} alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Love is war 
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>Manga demo</p>
                        <div className="card-actions justify-end">
                            back
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 rounded-lg">
                    <figure><img src={drstone} alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        dr stone
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>manga demo 2</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 rounded-lg">
                    <figure><img src={oshi} alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        oshi no ko
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>manga demo 3</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Manga 