import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarHomeMenu from "../components/SidebarHomeMenu";
import Content from "../components/ContentTopbar";
import '../components/SidebarHomeMenu.css'
function Home() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        
            <div className="App wrapper">
            <SidebarHomeMenu toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
            </div>
        
    );
}

export default Home;