import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import "./style.css";
export  default function Neighborpage(){
    return (
        <div className="container">
            <Sidebar />
            <Content />
        </div>
    );
}