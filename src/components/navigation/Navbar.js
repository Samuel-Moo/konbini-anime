import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Logo1 from 'assets/images/logo_1.jpg'
import Logo2 from 'assets/images/Logo_2.jpg'

function Navbar(){
    return(
        <nav className='w-full py-10 shadow-md fixed'>   
            <div className="bg-white px-4 sm:px-6">
                  <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                      
                      <img src={Logo2} 
                      width={100}
                      height={70} 
                       className=""/>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to="/" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Home</NavLink>
                        <NavLink to="/Anime" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Anime</NavLink>
                        <NavLink to="/Manga" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Manga</NavLink>
                        <NavLink to="/Buscar" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Buscar</NavLink>
                      <button

                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-boton1 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Iniciar Sesión / Crear Cuenta
                      </button>
                    </div>
                  </div>
                </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Navbar)