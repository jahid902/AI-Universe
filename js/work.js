// data fetch function
const getAllData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(URL)
    .then(res => res.json())
    .then(data => showCardData(data.data.tools.slice(0, 6)));
    spinnerLoad(true);
}
// card show function
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
        <li>${cardInfo.features[2] ? cardInfo.features[2] : "not available"}</li>                     
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
        <button onclick="singleCardCatch('${cardInfo.id}')" class="border border-0 text-danger bg-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-sharp fa-solid fa-arrow-right fs-4"></i>
        </button>
        </div>                                                      
        </div>

                    
      `
container.appendChild(div);
      spinnerLoad(false);

    });

}
// see more data fetch
const showAll = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => {
    showCardData(data.data.tools);
    document.getElementById("see-more-btn").style.display = "none";
    })

}
//  single card data fetch
const singleCardCatch = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => {singleCardDetail(data.data)
    console.log(data.data)})
    
}
// modal function 
const singleCardDetail = (data) =>{

const containerDiv = document.getElementById("modal-body");
      containerDiv.innerHTML =`
      <div class="card mb-3" w-100">
      <div class="d-flex flex-column flex-md-row-reverse g-0 p-3">
  
      <div class="col-12 col-md-4 position-relative mt-3">
      <img src="${data.image_link[0]}" class="img-fluid rounded-start" alt="...">
      <button id="percentage-btn" class="p-1 mt-2 btn btn-danger bg-opacity-25 position-absolute top-0 end-0">
      ${data.accuracy?.score  ? Math.round(data.accuracy?.score*100) : ""} % accuracy </button>
      <br>
      <h4 class="mt-2 px-2">${data.input_output_examples?.[0].input ? data?.input_output_examples?.[0].input : "no data available"}</h4>
      <p class="mt-2 px-2">${data.input_output_examples?.[0].output ? data?.input_output_examples?.[0].output : "no data available" }</p>
      </div>

      <div class="col-12 col-md-8">
      <div class="card-body">
      <div class="bg-danger bg-opacity-10 p-3">
      <h4 class="card-title">${data.description}</h4>
      <div class="d-flex justify-content-center justify-content-md-between">
      <button type="button" class="btn btn-light text-success">${data.pricing?.[0].price ? data.pricing?.[0].price : "free to use"} <br> ${data.pricing?.[0].plan ? data.pricing?.[0].plan : "Always free"}</button>
      <button type="button" class="btn btn-light text-warning-emphasis">${data.pricing?.[1].price ? data.pricing?.[1].price : "free to use"} <br> ${data.pricing?.[1].plan ? data.pricing?.[1].plan : "Always free"}</button>
      <button type="button" class="btn btn-light text-danger-emphasis">${data.pricing?.[2].price ? data.pricing?.[2].price : "free to use"} <br> ${data.pricing?.[2].plan ? data.pricing?.[2].plan : "Always free"}</button>    
      </div>
      <div class="d-flex justify-content-between mt-4">
      <div>
      <h5>Features</h5>
      <ul>
          <li>${data.features[1].feature_name ? data.features[1].feature_name : "no data available"}</li>
          <li>${data.features[2].feature_name ? data.features[2].feature_name : "no data available"}</li>
          <li>${data.features[3].feature_name ? data.features[3].feature_name : "no data available"}</li>
      </ul>
      </div>
      <div>
      <h5>Integrations</h5>
      <ul>
          <li>${data.integrations?.[0] ? data.integrations?.[0] : "no data available"}</li>
          <li>${data.integrations?.[1] ? data.integrations?.[1] : "no data available"}</li>
          <li>${data.integrations?.[2] ? data.integrations?.[2] : "no data available"}</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
     `
}
// spinner function
function spinnerLoad(isLoading){

const loader = document.getElementById("spinner");
  if(isLoading){
    loader.classList.remove("d-none");
  }
  else{
    loader.classList.add("d-none");
  }

}