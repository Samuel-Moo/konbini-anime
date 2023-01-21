import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Logo1 from 'assets/images/logo_1.jpg'
import Logo2 from 'assets/images/Logo_2.jpg'
import React, { useState } from 'react'

function Navbar(){
    return(
        <nav className='w-full py-10 shadow-md fixed'>   
            <div className="navbar bg-base-100">
          <div >
      
            <button className="btn btn-square btn-ghost">
      

              {/*aqui pon la SideBar*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
    
            </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Konbini Anime</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
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