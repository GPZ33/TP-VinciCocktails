import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <footer className="App-footer" bg="dark" data-bs-theme="dark">
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <div>
                    <p className='Footer-writer'>© {new Date().getFullYear()} VINCI Cocktails</p>
                </div>
            </Navbar>
        </footer>
    );
};
export default Footer;