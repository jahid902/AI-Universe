const getAllData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(URL).then(res => res.json()).then(data => showCardData(data.data.tools));
}

const showCardData = (data) => {
    

}








// getAllData();