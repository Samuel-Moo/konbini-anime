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
                <div><h1>Manga</h1></div>
            <div class="grid grid-cols-3 gap-4">
                <div className="card-compact w-96 bg-base-100 shadow-xl" top>
                    <figure><img src= {loveiswar} alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Love is War 
                            <div className="badge badge-secondary">NEW</div>
                            <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>
                        </h2>
                        <p>"Kaguya Shinomiya y Miyuki Shirogane son dos chicas prodigio que controlan el consejo de estudiantes de su prestigiosa academia, lo que las convierte en la crème de la crème de la élite. Ambos serían la pareja perfecta, si no fuera por su orgullo y narcisismo."</p>
                        <div className="card-actions justify-end">
                            back
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={drstone} alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Dr. Stone
                            <div className="badge badge-secondary">NEW</div>
                            <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>
                        </h2>
                        <p>"La historia cuenta las aventuras de Senku y Taiju, dos adolescentes que se ven atrapados en un mundo post-apocalíptico en el que la raza humana se ha convertido en piedra y ellos buscan la manera de revertir la petrificación en la mayor cantidad de personas posibles, para así reconstruir la sociedad tal como la conocieron."</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={oshi} alt="manga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Oshi No Ko
                            <div className="badge badge-secondary">NEW</div>
                            <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>
                        </h2>
                        <p>"Gorou Honda es un ginecólogo de una zona rural y gran fanático de Ai. Entonces, cuando la idol embarazada se presenta en su hospital, está más que desconcertado. Gorou le promete un parto seguro, pero poco sabe él que un encuentro con una misteriosa figura resultaría en su muerte prematura, o eso pensaba."</p>
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