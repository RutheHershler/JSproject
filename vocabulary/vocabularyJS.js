const dom = {
    divForImg: document.getElementById('printImg'),
}
const arr  = ['fruit','animal','color','natural','transform'];
const createVoc = async () => {
    const vocabulary = await drawAllItems();
    dom.divForImg.innerHTML = "";
    vocabulary.forEach(element => {
        console.log('eeeeeeeeeellll');
        console.log({ element });
        dom.divForImg.innerHTML += drowItem(element);
        return element;
    });
}
const drawAllItems = () => $.ajax({
    url: "../json/allWords.json",
    success: (result) => {
        console.log("result", result);
        return result;
    },
    error: (error) => {
        console.error(error);
    }
})
console.log('hellow');
const drowItem = (e) => {
    console.log('hellow2');
    return `<div class="Item" style="width:18rem;">
    <img src=".${e.src}"  style="height: 150px;">
    <p>${e.word}</p>
    <p>${e.translate}</p>
    </div>`
}
createVoc();
