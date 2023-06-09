import Header1 from "../Components/Header/Header1";
import Components from "../Components/components/Components";
export default function SideBar() {
    const styles = {
        SideBarContaner: {
            position: 'fixed',
            width: '360px',
            height: '100vh',
            boxShadow: '-5px 0 7px rgba(0,0,0,.3)',
            right: 0,
            background: 'white',
            padding: '32px 16px 24px 16px',
            boxSizing: 'border-box',
            overflowY: 'auto'
        },
        title: {
            textAlign: 'center',
            fontSize: '22px'
        },
        buttonWrapper: {
            position: 'fixed',
            height: '80px',
            bottom: 0,
            marginLeft: '-16px',
            backgroundColor: ' #fff',
            width: '360px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: ' center',
            borderTop: '.5px solid #dcddde',
            paddingTop: '16px'
        },
        closeBtn: {
            width: '165px',
            height: '35px',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            border: '1px solid #0205d3',
            borderRadius: '4px'
        }
    }

    return (
        <div id="SideBar" style={styles.SideBarContaner}>
            <div style={styles.title}>components</div>
            <div style={{ paddingTop: '36px', marginBottom: "80px" }} className="component-container">
                <div className="section-name">Header</div>
                <div className="section-content">
                    <Header1 />
                     
                    <Header1 />
                </div>

                <div className="section-name">Hero</div>
                <div className="section-content">
                     
                </div>
                <div className="section-name">Components</div>
                <div className="section-content">
                    <Components />
                </div>
            </div>
            <div style={styles.buttonWrapper}>
                <div id="close-btn" style={styles.closeBtn} onClick={() => document.getElementById('SideBar').style.display = 'none'}>Close</div>
            </div>
        </div>
    );
}