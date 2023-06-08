import axios from "axios";
export default function CodeEditor() {
    var j = 0;
    //Function for live Rendering
    function update(i) {
        if (i == 0) {
            // let htmlCode = document.getElementById("htmlCode").value;
            // let cssCode = document.getElementById("cssCode").value;
            // let javascriptCode = document.getElementById("javascriptCode").value;
            // let text = htmlCode + "<style>" + cssCode + "</style>" + "<scri" + "pt>" + javascriptCode + "</scri" + "pt>";
            // let iframe = document.getElementById('viewer').contentWindow.document;
            // iframe.open();
            // iframe.write(text);
            // iframe.close();
        }

        else if (i == 1) {
            let htmlCode = document.getElementById("htmlCode").value;
            let html = htmlCode.slice(0, htmlCode.length);
            document.getElementById("htmlCode").value = html;
            j = 1;

        }
    }
    const styles = {
        btn: {
            height: "30px",
            width: '100px',
            backgroundColor: '',
            border: 'none',
            cursor: 'pointer'
        }
    }
    function apply() {
        let elem = document.getElementById(localStorage.getItem('id'));
        let getCssCode = document.getElementById('cssCode').value;
        let getHtmlCode = document.getElementById('htmlCode').value;
        elem.innerText = getHtmlCode;
        let pro = getCssCode.slice(7).split('{')[1].split('}')[0].split('\n');
        localStorage.setItem("styles", pro);
        localStorage.setItem("text", getHtmlCode);
        for (let x of pro) {
            if (x) {
                let prop = x.split(':')[0]
                if (prop.split(' ').length > 1) {
                    for (let c of prop.split(' ')) {
                        if (c) {
                            console.log(c, x.split(':')[1]);
                            elem.style[c] = x.split(':')[1]
                        }

                    }

                } else {
                    console.log(prop.split(' ')[0], x.split(':')[1]);
                    elem.style[prop.split(' ')[0]] = x.split(':')[1]
                }


            }
        }

    }
    function save() {
        const id = localStorage.getItem('id');
        const styles = localStorage.getItem('styles');
        const text = localStorage.getItem('text');
        console.log(styles);
        const data = {
            id: id,
            text: text,
            styles: styles

        };
        axios.post("http://localhost:5000/save", data).then((response) => {
            const data = response.data.result;
            console.log('hhh', data);
        });
    }
    return (
        <div id="CodeEditor" style={{ display: "none" }}>
            <div className="container split">
                <textarea style={{ height: "30%" }} id="htmlCode" placeholder="HTML" spellCheck="false" onInput={(e) => { update(0) }} onKeyDown={(e) => { if (e.keyCode === 9) { var v = this.value, s = this.selectionStart, e = this.selectionEnd; this.value = v.substring(0, s) + '\t' + v.substring(e); this.selectionStart = this.selectionEnd = s + 1; return false; } if (e.keyCode == 8) { update(1); } }}></textarea>
                <textarea style={{ height: "65%" }} id="cssCode" placeholder="CSS" spellCheck="false" onInput={(e) => { update(0) }} onKeyDown={(e) => { if (e.keyCode === 9) { var v = this.value, s = this.selectionStart, e = this.selectionEnd; this.value = v.substring(0, s) + '\t' + v.substring(e); this.selectionStart = this.selectionEnd = s + 1; return false; } if (e.keyCode == 8) { update(1); } }}></textarea>
                {/* <textarea id="javascriptCode" spellCheck="false" placeholder="Type JavaScript code here" onInput={(e) => { update(0) }} onKeyDown={(e) => { if (e.keyCode === 9) { var v = this.value, s = this.selectionStart, e = this.selectionEnd; this.value = v.substring(0, s) + '\t' + v.substring(e); this.selectionStart = this.selectionEnd = s + 1; return false; } if (e.keyCode == 8) { update(1); } }}></textarea> */}
                <div style={{ height: "5%", backgroundColor: '#20232a', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '50px' }}>
                    <button style={styles.btn} onClick={apply} className="editor-btn">Apply</button>
                    <button style={styles.btn} onClick={save} className="editor-btn">Save</button>
                </div>
            </div>

        </div>
    );
}
