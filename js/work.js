const getAllData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(URL)
    .then(res => res.json())
    .then(data => showCardData(data.data.tools.slice(0, 6)));
}

const showCardData = (data) => {
    const container = document.getElementById("card-container")
    container.innerHTML = "";
    data.forEach(cardInfo => {               
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML =`
      <div class="card h-100 p-2">
                    <img src=${cardInfo.image} class="card-img-top h-50" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">Features</h3>
                      <ol>
                      <li>${cardInfo.features[0]}</li>
                      <li>${cardInfo.features[1]}</li>
                      <li>${cardInfo.features[2]}</li>                     
                      </ol>
                    </div>
                    <hr>
                    <h4>${cardInfo.name}</h4>
                    <div class ="d-flex justify-content-between px-2">                   
                         <div class="d-flex gap-2 align-items-baseline">
                         <i class="fa-sharp fa-solid fa-calendar-days"></i>                                   
                    <p>${cardInfo.published_in}</p> 
                    </div>
                    <div>
                        <i class="fa-sharp fa-solid fa-arrow-right fs-3"></i>
                    </div>                                                      
                    </div>

                    
      `
      container.appendChild(div);

    });

}


const showAll = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => {
        showCardData(data.data.tools);
        document.getElementById("see-more-btn").style.display = "none";
    })

}








// getAllData();