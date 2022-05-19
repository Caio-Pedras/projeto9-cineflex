import { Link } from "react-router-dom";
export default function Header (cartItens) {
    return (
        <header onClick={()=>console.log(cartItens)}>
            <Link to={'/'}>
            <h1>CINEFLEX</h1>
            </Link>
        </header>
    )
}