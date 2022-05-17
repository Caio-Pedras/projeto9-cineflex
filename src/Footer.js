
export default function Footer ({movieIMG, movieTitle}){
    return(
        <footer>
            <div className="movie">
                <img src={movieIMG} alt={movieTitle} />
            </div>
            <div className="text">
                <p>{movieTitle}</p>
            </div>
        </footer>
    )
}