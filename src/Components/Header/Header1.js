import { dragStart, drag, dragEnd } from "../../scripts/drag-and-drop";
export default function Header1() {

    const styles = {
        headerContainer: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            border: 'solid 1px #00000008',
            borderRadius: '5px',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            padding: '20px 0 20px 0',
            height: '20px',

        },

        headerWrapper: {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            background: 'white',
            padding: '0px 30px',
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
        loginBtn: {
            color: '#0306d3',
            border: '1px solid #0306d3',
            padding: '0px 24px',
            borderRadius: '5px'
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
        <div id="Header-1" className="component-wrapper" style={styles.headerContainer} onClick={(e) => e.stopPropagation()} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd}>
            <div className="scale" style={styles.headerWrapper}>
                <div style={styles.logo}>logo</div>
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
