import { connect } from "react-redux"

function Favorites(){
    return(
            <div className="h-64 grid grid-rows-1 grid-flow-col gap-4">
                <div>Favorited, linkea los botonoes</div>
                <div className="btn-group">
                    <button className="btn btn-active">Anime</button>
                    <button className="btn">Manga</button>
                </div>
            </div>

)


}
const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Favorites)