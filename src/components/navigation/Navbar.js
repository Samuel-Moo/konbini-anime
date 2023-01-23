import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Logo1 from 'assets/images/logo_1.jpg'
import Logo2 from 'assets/images/Logo_2.jpg'

function Navbar(){
    return(
      <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
              </div> 
          <div className="flex-1 px-2 mx-2">Konbini Anime</div>
          <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
           {/* Navbar menu content here */}
                  <li><a>Anime</a></li>
                  <li><a>Manga</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>

              </ul>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          </div>
  {/* Page content here */}
      Este bloque esta muy grande jaja que pedo.
      <button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary ">Random</button>
      </div> 
      <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100">
      {/* Sidebar content here */}
              <li><a>Anime</a></li>
              <li><a>Manga</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>

          </ul>

      </div>
  </div>
    )
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Navbar)

