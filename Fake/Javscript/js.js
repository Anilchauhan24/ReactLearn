

const changeButton = document.getElementById("toggleicon");

function changeThemeColor() {

    let myBody = document.body;

    myBody.classList.toggle("changeBodyColor")

}


changeButton.addEventListener("click", function () {
    changeButton.classList.add = "fa-solid fa-toggle-off";
    changeButton.style.color = "blue";
})



changeButton.addEventListener("click", newColor)

function newColor() {
    changeButton
}




// // let page = document.querySelector(".page");


// // async function fetchData() {

// //     const newData = await fetch(`http://localhost:4000/hello`);
// //     const showData = await newData.json();
// //     console.log(showData);

// //     let emptyData1 = "";

// //     showData.map((item) => {
// //         console.log(item)

// //         emptyData1 += `<div>
// //         <h2>${item.category}</h2>
// //         </div>`
// //     })
// //     document.getElementById("para").innerHTML = emptyData1;



// // }
// // fetchData();


// fetch(`http://localhost:4000/hello`)
//     .then((res) => res.json())
//     .then((getData) => {
//         let allData = "";
//         getData.map((item) => {
//             allData += `
//             <div class="helo">
//         <p>${item.category}</P>
//             </div>


//             `
//         })
//         document.getElementById("id").innerHTML = allData;

//     })
//     .catch((err) => {
//         console.log(err)
//     })


var typed = new Typed('#element', {
    strings: ['<i>Welcome</i> to this page.', '&amp; this is just a trial.'],
    typeSpeed: 200,
});
