import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Manga(){
    return(
        <Layout>
            <Navbar>
            <div class="grid grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl" top>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Love is war 
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Manga demo</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        dr stone
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>manga demo 2</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        oshi no ko
                            <div className="badge badge-secondary">NEW</div>
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