export default class Measure {
    constructor(elmnt) {
        this.elmnt = elmnt;
        elmnt.addEventListener('mouseover', this.mesaureContainerPosition.bind(this));
        elmnt.addEventListener('mouseout', this.removeDistanceIndication);
    }

    mesaureContainerPosition(e) {
        let vertical1 = document.getElementById('vertical1');
        let vertical2 = document.getElementById('vertical2');
        let verticalTxt1 = document.getElementById('verticle-Txt1');
        let verticalTxt2 = document.getElementById('verticle-Txt2');
        let horizontal1 = document.getElementById('horizontal1');
        let horizontal2 = document.getElementById('horizontal2');
        let horizontalTxt1 = document.getElementById('horizontal-Txt1');
        let horizontalTxt2 = document.getElementById('horizontal-Txt2');
        const data = this.elmnt.getBoundingClientRect();
        vertical1.style.height = data.y + 'px';
        verticalTxt1.innerHTML = data.y + 'px';
        verticalTxt2.innerHTML = document.defaultView.getComputedStyle(this.elmnt).bottom;
        vertical2.style.height = document.defaultView.getComputedStyle(this.elmnt).bottom;
        vertical1.style.left = data.width / 2 + data.x + 'px';
        vertical2.style.left = data.width / 2 + data.x + 'px';
        vertical1.style.top = 0;
        vertical2.style.top = data.bottom + 'px';
        vertical1.style.display = 'block';
        vertical2.style.display = 'block';

        horizontal1.style.width = data.x + 'px';
        horizontal2.style.width = document.defaultView.getComputedStyle(this.elmnt).right;
        horizontalTxt1.innerHTML = data.x + 'px';
        horizontalTxt2.innerHTML = document.defaultView.getComputedStyle(this.elmnt).right;
        horizontal1.style.top = data.height / 2 + data.y + 'px';
        horizontal2.style.left = data.width + data.x + 'px';
        horizontal1.style.left = 0;
        horizontal2.style.top = data.height / 2 + data.y + 'px';
        horizontal1.style.display = 'block';
        horizontal2.style.display = 'block';

        console.log('initiate measure', document.defaultView.getComputedStyle(this.elmnt).bottom);
        // let top = parseInt(document.defaultView.getComputedStyle(this.elmnt).height);
        // console.log('measure',this.elmnt.style.height);
    }
    removeDistanceIndication() {
        document.getElementById('vertical1').style.display = 'none';
        document.getElementById('vertical2').style.display = 'none';
        document.getElementById('horizontal1').style.display = 'none';
        document.getElementById('horizontal2').style.display = 'none';
    }
}