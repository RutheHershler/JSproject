const dom = {
    searchVal: document.getElementById('searchVal'),
    drowItemDiv: document.getElementById('printItem'),
}

dom.searchVal.onchange = async () => {
    const val = dom.searchVal.value;
    console.log(val);
    const vocabulary = await getVocabulary();
    dom.drowItemDiv.innerHTML = "";
    vocabulary.forEach(element => {
        if (element.word == val || element.translate == val) {
            console.log({ element });
            dom.drowItemDiv.innerHTML = drowItem(element);
            return element;
        }
    });
    if(dom.drowItemDiv.innerHTML==''){
        dom.drowItemDiv.innerHTML = 'not found';
 
    }
}

const getVocabulary = () => $.ajax({

    url: "../json/allWords.json",
    success: (result) => {
        console.log("result", result);
        return result;
    },
    error: (error) => {
        console.error(error);
    }
});
const drowItem = (e) => {
    return `<div class="Item" style="width:18rem;">
<img src=".${e.src}"  style="height: 150px;">
<p>${e.word}</p>
<p>${e.translate}</p>
</div>`

}
