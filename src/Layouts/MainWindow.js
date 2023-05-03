import CanvasArea from "../Pages/CanvasArea";
export default function MainWindow() {
    return(
        <div style={{position:'fixed',top: '15px'}}>
            <CanvasArea />
            <div id="horizontal1" className="horizontal distance-indication">
                <div className="line"></div>
                <div className="text" style={{position:'absolute',fontSize:'.8rem',top:'50%',left:'50%',color:'red'}}>
                    <span id="horizontal-Txt1"></span>
                </div>
            </div>
            <div id="horizontal2" className="horizontal distance-indication">
            <div className="line"></div>
                <div className="text" style={{position:'absolute',fontSize:'.8rem',top:'50%',left:'50%',color:'red'}}>
                    <span id="horizontal-Txt2"></span>
                </div>
            </div>
            <div id="vertical1" className="vertical distance-indication">
            <div className="line"></div>
                <div className="text" style={{position:'absolute',fontSize:'.8rem',top:'50%',left:'50%',color:'red'}}>
                    <span id="verticle-Txt1"></span>
                </div>
            </div>
            <div id="vertical2" className="vertical distance-indication">
            <div className="line"></div>
                <div className="text" style={{position:'absolute',fontSize:'.8rem',top:'50%',left:'50%',color:'red'}}>
                    <span id="verticle-Txt2"></span>
                </div>
            </div>
        </div>
    );
}