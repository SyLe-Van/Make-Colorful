import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="contain"></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
