
const chooseDivs = Array.from(document.querySelectorAll(".choose"));
const jobs = Array.from(document.querySelectorAll(".job"));
const txt = Array.from(document.querySelectorAll(".choose p"));
const search = document.querySelector(".search");
const clearButton = document.querySelector(".clear");
let newTxt;
let num = 0;
let selectedContent;
let selectedTextContents = [];

function createDiv() {
    const searchdivs = document.createElement("div");
    const right = document.createElement("div");
    const img = document.createElement("img");
    const left = document.createElement("div");

    right.className = "xdiv";
    img.src = "images/icon-remove.svg";
    searchdivs.className = "searchdiv";
    left.classList.add("choosecopy");

    right.appendChild(img);
    left.appendChild(newTxt);
    search.appendChild(left);
    searchdivs.appendChild(left);
    searchdivs.appendChild(right);
    search.appendChild(searchdivs);

    right.addEventListener("click", () => {
        searchdivs.remove();
        num--;
        selectedTextContents.pop(selectedContent);
        if(num == 0){
            search.style.display = "none";
        }
        filterJobs();
    })
}



for(let i = 0; i < chooseDivs.length;i++){
    choose = chooseDivs[i];
    choose.addEventListener("click", ()=>{
        selectedContent = txt[i].textContent;
        if(!selectedTextContents.includes(selectedContent)){
            search.style.display = "flex";
            num++;
            newTxt = document.createElement("p");
            newTxt.textContent = selectedContent;
            createDiv();
            selectedTextContents.push(selectedContent);
            filterJobs();
        }
    })
}

clearButton.addEventListener("click", ()=>{
    const numOfSearchdivs = Array.from(document.querySelectorAll(".searchdiv"));
    for(let k = 0; k < numOfSearchdivs.length; k++){
        numOfSearchdivs[k].remove();
    }
    num = 0;
    selectedTextContents = [];
    filterJobs();
})
    

function filterJobs() {
    jobs.forEach((job) => {
        const requirements = Array.from(job.querySelectorAll(".choose p")).map((elem)=> elem.textContent);;
        if(selectedTextContents.every(item => requirements.includes(item))){
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    });
}











