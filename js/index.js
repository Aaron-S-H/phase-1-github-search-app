document.addEventListener('DOMContentLoaded', ()=> {
    let form = document.querySelector('form');
    const formContent = document.querySelector("#search");
    form.addEventListener('submit', (event) => {
event.preventDefault();
searchReq(formContent.value);
    })

function searchReq(request){
    return fetch(`https://api.github.comsearch/users?q=${formContent.value}`,{
        headers:{
            "Accept": "application/vnd.github.v3+json"
        }})
    
    .then(res => res.json())
    .then(data => console.log(data))
    }
});
// function renderOneSearchRes(response){
//     let listItem = document.createElement("li");
//     listItem.innerHTML =
// }
// });