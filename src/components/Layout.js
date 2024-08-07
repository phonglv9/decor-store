import Header from '../components/Header';
const Layout = ({ children }) => {
    return (
        <div className="main-content-wrapper d-flex clearfix">
            <Header />
            <div class="products-catagories-area clearfix">
                <div className="container mt-5 mb-3">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Layout;