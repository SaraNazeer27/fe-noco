import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri'
export default class Editor extends React.Component {
    constructor() {
        super();
        this.elmnt = "";
        this.pos1 = 0;
        this.pos2 = 0;
        this.pos3 = 0;
        this.pos4 = 0;
        this.click = this.click.bind(this);
        this.drag = this.drag.bind(this);
        this.closeDrag = this.closeDrag.bind(this);
        this.styles = {
            container: {
                width: '400px',
                height: '600px',
                background: '#0d406fc4',
                borderRadius: '.5rem .5rem .5rem .5rem',
                display: 'none',
                position: 'absolute',
                zIndex: 3
            },
            headerWrapper: {
                height: '30px',
                display: 'flex',
                background: '#0d406f',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                padding: '.3rem',
                borderRadius: '.5rem .5rem 0 0'
            },
            subHeader: {
                height: '30px',
                background: '#0d406f82',
                textAlign: 'left',
                padding: '.3rem',
                color: 'white'
            },
            subHeader2: {
                height: '30px',
                textAlign: 'left',
                padding: '.3rem',
                color: 'white',
            },
            propertiesContainer: {
                display: 'flex',
                flexFlow: 'column',
                margin: '1rem',
                rowGap: '1rem',
                color: 'white'
            },
            propertiesWrapper: {
                display: 'flex',
                justifyContent: 'space-between',
                textAlign: 'left'
            },
            workFlowBtn: {
                width: '90%',
                border: 'none',
                height: '40px',
                fontSize: '1.2rem',
                background: '#0d406f',
                color: 'white'
            },
            btnWrapper: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%',
                margin: 'auto',
                marginTop: '1rem'
            },
            btn: {
                border: 'none',
                height: '35px',
                fontSize: '1.2rem',
                width: '40%',
                background: '#0d406f',
                color: 'white'
            },
            input: {
                width: '100px'
            }
        }
    }
    initDrag() {
        this.elmnt.addEventListener('mousedown', this.click);

    }
    click(e) {
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        this.elmnt.addEventListener('mousemove', this.drag);
        this.elmnt.addEventListener('mouseup', this.closeDrag);
    }
    drag(e) {
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        console.log('hi drag1', this.elmnt.offsetTop, this.elmnt.style.top);
        this.elmnt.style.top = (this.elmnt.offsetTop - this.pos2) + "px";
        this.elmnt.style.left = (this.elmnt.offsetLeft - this.pos1) + "px";
        console.log('hi drag', this.elmnt.offsetTop, this.elmnt.style.top);
    }
    closeDrag() {
        this.elmnt.removeEventListener('mouseup', this.closeDrag)
        this.elmnt.removeEventListener('mousemove', this.drag)
    }
    componentDidMount() {
        this.elmnt = document.getElementById('Editor');
        this.initDrag();
    }

    render() {
        return (
            <div id="Editor" style={this.styles.container}>
                <div style={this.styles.headerWrapper}>
                    <span style={{ fontSize: '1.3rem' }}>Header</span>
                    <span id="property" style={{ display: 'flex', color: '#919191', cursor: 'pointer' }}
                        onClick={() => document.getElementById('Editor').style.display = 'none'}
                    >
                        <RiCloseCircleLine style={{ width: '30px', height: '30px' }} />
                    </span>
                </div>
                <div style={this.styles.subHeader}>
                    <span style={{ fontSize: '1.3rem' }}>Appearance</span>
                </div>
                <div style={this.styles.subHeader2}>
                    <span style={{ fontSize: '1.3rem' }}>Styles</span>
                </div>
                <div style={this.styles.propertiesContainer}>
                    <div style={this.styles.propertiesWrapper}>
                        <div> <span>Background Color</span></div>
                        <div>
                            <input type="text" style={this.styles.input} />
                        </div>
                    </div>
                    <div style={this.styles.propertiesWrapper}>
                        <div><span>Background Image</span></div>
                        <div><input type="file" name="" id="" style={this.styles.input} /></div>
                    </div>
                    <div style={this.styles.propertiesWrapper}>
                        <div><span>Border Styles - All Border</span></div>
                        <div><input type="text" style={this.styles.input} /></div>
                    </div>
                    <div style={this.styles.propertiesWrapper}>
                        <div><span>Roundness</span></div>
                        <div><input type="text" style={this.styles.input} /></div>
                    </div>
                    <div style={this.styles.propertiesWrapper}>
                        <div><span>Width</span></div>
                        <div><input type="text" style={this.styles.input} /></div>
                    </div>
                    <div style={this.styles.propertiesWrapper}>
                        <div><span>Color</span></div>
                        <div><input type="text" style={this.styles.input} /></div>
                    </div>
                    <div style={this.styles.propertiesWrapper}>
                        <div>
                            <span>Padding</span></div>
                        <div><input type="text" style={this.styles.input} /></div>
                    </div>

                    <div style={this.styles.propertiesWrapper}>
                        <div><span>This element isn't clickable</span></div>
                        <div><input type="checkbox" name="" id="" /></div>
                    </div>
                </div>
                <button style={this.styles.workFlowBtn}>Start/Edit workflow</button>
                <div style={this.styles.btnWrapper}>
                    <button style={this.styles.btn}>Replace</button>
                    <button style={this.styles.btn} onClick={() => document.getElementById(localStorage.getItem('id')).remove()}>Delete</button>
                </div>
            </div>
        );
    }
}