document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('form');
    const formContent = document.querySelector("#search");
    // const value = formContent.value;
    form.addEventListener('submit', (event) => {
event.preventDefault();
searchReq(formContent);
console.log(formContent);
    })

function searchReq(formContent){
    
    return fetch(`https://api.github.com/search/users?q=${formContent.value}`,{
        headers:{
            "Accept": "application/vnd.github.v3+json"
        }})
    
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById('user-list');
        list.innerHTML = "";
        data.items.forEach(renderOneSearchRes)});
    }
    
});
function renderOneSearchRes(data){
    console.log(data);
    let listItem = document.createElement("li");
    let list = document.getElementById('user-list');
    listItem.innerHTML =`
    <h4 class="user"> User : ${data.login} </h4>
    <p class="id"> ID: ${data.id} </p>`;
    list.append(listItem);

}
