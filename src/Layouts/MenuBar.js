export default function MenuBar() {
    const styles = {
        menuBarContainer: {
            position: 'fixed',
            width: '100%',
            height: '35px',
            borderBottom: '1px solid #dcdcdc',
            display: 'flex',
            justifyContent: 'space-between'
        },
        componentBtn: {
            background: '#2f2f3c91',
            padding: '0 1rem',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        editorBtn: {
            width: '100px',
            background: '#61dafb',
            padding: '0 1rem',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '1rem',
            borderRadius: '5px',

        }
    }
    let mode = false
    function clickEditor(e) {
        if (mode) {
            e.target.innerText = 'Editor';
            mode = false;
            document.getElementById('SideBar').style.display = 'block';
            document.getElementById('CodeEditor').classList.remove('code-editor');

        }
        else {
            mode = true;
            localStorage.setItem("editor", mode);
            e.target.innerText = 'Back'
            document.getElementById('SideBar').style.display = 'none';
            document.getElementById('CodeEditor').classList.add('code-editor');
            let id = localStorage.getItem('id');
            let elmnt = document.getElementById(id)
            elmnt.classList.remove('header');
            elmnt.classList.add('not-header');
        }


    }
    return (
        <div id="MenuBar" style={styles.menuBarContainer}>
            <div style={styles.editorBtn} onClick={clickEditor} >Editor</div>
            <div style={styles.componentBtn} onClick={() => document.getElementById('SideBar').style.display = 'block'} >Components</div>
        </div>
    );
}