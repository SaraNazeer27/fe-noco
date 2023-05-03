import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import MainWindow from "./MainWindow";
import CodeEditior from '../Pages/CodeEditor'
export default function Layout() {
    return (
        <div>
            <MenuBar />
            <MainWindow />
            <SideBar />
            <CodeEditior />
        </div>
    );
}