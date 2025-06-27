import Sidebar from './component/Sidebar';
import AddedNeighbors from "@/src/app/(main)/(neighbor)/component/AddedNeighbors";
import AddedMeNeighbors from "@/src/app/(main)/(neighbor)/component/AddedMeNeighbors";
import AddMutualNeighbor from "@/src/app/(main)/(neighbor)/component/AddMutualNeighbor";
import Header from './component/Header';
import Footer from './component/Footer';
import './style.css';


export default function NeighborPage() {
    return (
        <div>
            <Header/>
        <div className="neighbor-container">
            <Sidebar />
            <div className="main-content">
            <AddMutualNeighbor/>
            </div>
        </div>
            <Footer/>
        </div>
    );
}
