const dom = {
    ImgContainer: Array.from(document.querySelectorAll('.arrycard')),
    container: Array.from(document.querySelectorAll('.col')),
}
console.log(dom.ImgContainer);
console.log(dom.container);

for (let i = 0; i < dom.ImgContainer.length; i++) {
    let i1 = Math.floor(Math.random() * (dom.ImgContainer.length - 1));
    console.log(i1);
    let src = dom.ImgContainer[i].src;
    console.log(src);
    dom.ImgContainer[i].src = dom.ImgContainer[i1].src;
    dom.ImgContainer[i1].src = src;
    const img = dom.ImgContainer[i];
}


dom.ImgContainer.forEach((m) => {
    m.draggable = true;

    m.ondragstart = (event) => {
        console.log("m" + m.innerHTML);
        console.log(event);
        console.log("m.classList[1]" + m.classList[1]);
        event.dataTransfer.setData("img", m.classList[1]);
           console.log("event.m",m);
         deleteitem=(x)=>{
             m.innerHTML="";
         }
    };
    
});
let cntAqual=0;
dom.container.forEach((c) => {
    c.ondragenter = (event) => {
        event.preventDefault();
    };
    c.ondragover = (event) => {
        event.preventDefault();
    };
    c.ondrop = (event) => {
        event.preventDefault();
        console.log(c.classList[1]);
        const x = event.dataTransfer.getData("img");
        console.log("x" + x);
        if (c.classList[1] == x) {
            cntAqual++;
            if(cntAqual==9)
            location.href='/gamesData/gamesData.html'
            const img = document.createElement('img');
            img.src = './puzzelsrc/' + x + '.jpg';
            c.appendChild(img);
            deleteitem(x);
        }
    }
});

