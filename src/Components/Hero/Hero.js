import { dragStart, drag, dragEnd } from "../../scripts/drag-and-drop";
export default function Hero() {

    const styles = {
        heroContainer: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            border: 'solid 1px #00000008',
            borderRadius: '5px',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            padding: '20px 0 20px 0',
            height: '200px',
        },

        heroWrapper: {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            background: 'white',
            padding: '0px 10px',
            margin: '0px 10px',
        },
        logo: {
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center'

        },
        btnWrapper: {
            display: 'flex',
            columnGap: '12px'
        },
        btn: {
            minHeight: ' 40px',
            maxHeight: '48px',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            fontWeight: '500',
            padding: '0px 12px'
        },
        signupBtn: {
            background: '#0306d3',
            border: '1px solid #0306d3',
            padding: '0px 24px',
            color: 'white',
            borderRadius: '5px'
        }
    };


    return (
        <div id="Hero-1" className="component-wrapper" style={styles.heroContainer} onClick={(e) => e.stopPropagation()} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd}>
            <div className="scale" style={styles.heroWrapper}>
                <h1>Bring your vision to life</h1>
                <h3>Create a beautiful platform on Bubble and deploy it to your</h3>
                <div style={styles.btnWrapper}>
                    <button style={styles.btn}>Forum</button>
                    <button style={styles.btn}>FAQs</button>
                    <button style={styles.btn}>Blog</button>
                    <button style={{ ...styles.btn, ...styles.loginBtn }}>Log in</button>
                    <button style={{ ...styles.btn, ...styles.signupBtn }}>sign up</button>
                </div>
            </div>
        </div>
    );
}
