import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="Navbar">
            <div className="Navbar-container">
               <Link to="/" className="Navbar-brand">
                 ChaseHUB
               </Link>

               <div className="navbar-links">
                <Link to ="/" className="nav-link">Home</Link>
                <Link to ="/checkout" className="nav-link">Cart</Link>
               </div>

             <div className="navbar-auth">
                <div className ="navbar-auth-links">
                <Link to ="/auth" className="btn btn-primary">Login</Link>
                <Link to ="/auth" className="btn btn-secondary">Signup </Link>
                </div>
             </div>
            </div>
        </nav>
    )
}