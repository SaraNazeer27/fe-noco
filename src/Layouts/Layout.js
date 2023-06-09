 import MenuBar from "../Components/Edit_area/MenuBar";
 import SideBar from "../Components/Edit_area/Sidebar";
// import MainWindow from "./MainWindow";
// import CodeEditior from '../Pages/CodeEditor';
import MainWindow from "./MainWindow";
import CodeEditior from '../Pages/CodeEditor'

export default function Layout() {
    return (
        <div>
            {/* <MenuBar />
            <MainWindow />
            <SideBar />
            <CodeEditior />  */}
        <MenuBar />
            <MainWindow />
            <SideBar />
            <CodeEditior />
        </div>
    );
}