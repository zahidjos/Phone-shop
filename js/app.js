const phoneSearch=()=>{
    let inputText=document.getElementById('input_phone');
    let inputValue=inputText.value;
    inputText.value=''
    loadData(inputValue);
}

const loadData=(inputValue)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    // console.log(url);
    fetch(url)
    .then(res=> res.json())
    .then(data=> showData(data))

}
const showData=(data)=>{
// console.log(data.data);
let mobileData=data.data;
const cardRow=document.getElementById('card_row');
cardRow.textContent=''
const detailPart=document.getElementById('detail_part');
detailPart.textContent='';
if(mobileData.length==0){
    const h3=document.createElement('h3');
    h3.classList.add('text-center');
    h3.classList.add('text-light');
    h3.innerText="Sorry, your mobile is not find" ;
    cardRow.appendChild(h3);

}
else if(mobileData.length>20){
    // console.log(mobileData.length);
for(let i=0; i<20; i++ ){
    let{brand,phone_name,slug,image}=mobileData[i];
    const div=document.createElement('div');
    div.classList.add('col-lg-4');
    div.innerHTML=` <div class="card mb-3 mx-auto" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone_name}</h5>
      <p class="card-text">Brand:${brand}</p>
      <a href="#" onclick="detailPhone('${slug}')"  class="btn btn-primary">Details</a>
    </div>`
    cardRow.appendChild(div);
}
}
else{
    mobileData.map(singleMobileData=>{
        console.log(singleMobileData);
        let{brand,phone_name,slug,image,}=singleMobileData;
        const div=document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML=` <div class="card mb-3 mx-auto" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone_name}</h5>
          <p class="card-text">Brand: ${brand}</p>
          <a href="#" onclick="detailPhone('${slug}')" class="btn btn-primary">Details</a>
        </div>`
        cardRow.appendChild(div);
    })
   
}
}

const detailPhone=(id)=>{
const url=`https://openapi.programming-hero.com/api/phone/${id}`;
// console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=> detailData(data))

}

const detailData=(data)=>{
    // console.log(data);
let detail=data.data;
let{brand,image,name,releaseDate,mainFeatures,others}=detail;
let {chipSet,displaySize,memory,sensors,storage}=mainFeatures;

let{Bluetooth,GPS,NFC,Radio,USB,WLAN}=others;
console.log(Bluetooth);

if(releaseDate===''){
    const detailPart=document.getElementById('detail_part');
    detailPart.textContent='';
    const div=document.createElement('div');
    div.innerHTML=`<div class="card mx-auto" style="width:50rem;">
    <img src="${image}" class="card-img-top mx-auto" style="height:500px ; width:20rem;" alt="...">
    <div class="card-body">
      
        <h3>${name}</h3>
       
        <h5>Release: Release date not found</h5>
        <h6>Brand: ${brand}</h6>
        <ul>
        <li><span>ChipSet:</span> ${chipSet}</li>
        <li><span>DisplaySize:</span> ${displaySize}</li>
        <li><span>Memory:</span> ${memory}</li>
        <li><span>Sensors:</span> ${sensors}</li>
        <li><span>Storage:</span> ${storage}</li>
        <li><span>Bluetooth:</span> ${Bluetooth}</li>
        <li><span>GPS:</span> ${GPS}</li>
        <li><span>NFC:</span> ${NFC}</li>
        <li><span>Radio:</span> ${Radio}</li>
        <li><span>USB:</span> ${USB}</li>
        <li><span>WLAN:</span> ${WLAN}</li>

       
    </ul>
        
    </div>
    </div>`
    detailPart.appendChild(div);
}
else{
    const detailPart=document.getElementById('detail_part');
detailPart.textContent='';
const div=document.createElement('div');
div.innerHTML=`<div class="card mx-auto" style="width:50rem;">
<img src="${image}" class="card-img-top mx-auto" style="height:500px ; width:20rem;" alt="...">
<div class="card-body">
  
    <h3>${name}</h3>
    
    <h5>Release: ${releaseDate}</h5>
    <h6>Brand: ${brand}</h6>
    <ul>
        <li><span>ChipSet:</span> ${chipSet}</li>
        <li><span>DisplaySize:</span> ${displaySize}</li>
        <li><span>Memory:</span> ${memory}</li>
        <li><span>Sensors:</span> ${sensors}</li>
        <li><span>Storage:</span> ${storage}</li>
        <li><span>Bluetooth:</span> ${Bluetooth}</li>
        <li><span>GPS:</span> ${GPS}</li>
        <li><span>NFC:</span> ${NFC}</li>
        <li><span>Radio:</span> ${Radio}</li>
        <li><span>USB:</span> ${USB}</li>
        <li><span>WLAN:</span> ${WLAN}</li>

       
    </ul>
    
</div>
</div>`
detailPart.appendChild(div);
}


}