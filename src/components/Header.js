import logo from '../images/logo.png';
 const Header = () => {
    return (
        <header className="header-area clearfix">

            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>

            <div className="logo">
                <a href="index.html"><img src={logo} alt="" /></a>
            </div>

            <nav className="amado-nav">
                <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="product-details.html">Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                </ul>
            </nav>

            <div className="amado-btn-group mt-30 mb-100">
                <a href="#" className="btn amado-btn mb-15">%90%</a>
                <a href="#" className="btn amado-btn active">New this week</a>
            </div>

            <div className="cart-fav-search mb-100">
                <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
                <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</a>
                <a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</a>
            </div>

            <div className="social-info d-flex justify-content-between">
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
    )

}
export default Header