let input = document.querySelector("#input");
let list = document.querySelector("#list");

// console.log(input);
// console.log(list);

let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    let country = input.value;
    let colArr = await getCol(country);
    // console.log(college);
    show(colArr);
})
function show(colArr)
{
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText= col.name; 
        list.appendChild(li);
    }
}
async function getCol(country) {
    try {
        let res = await axios.get(url + country);
        return res.data ;
    } catch (er) {
        console.log(er);
    }
}