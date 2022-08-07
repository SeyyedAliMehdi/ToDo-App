const addItem = document.querySelector("#add-btn")
const input = document.querySelector("#input")
const list = document.querySelector("#list")

handleList()

function handleAddItem() {
    const text = input.value.trim()
    if (text !== ""){

        localStorage.setItem(text, "todo")
        input.value = ""
        handleList()
    }
    console.log(localStorage)
}

addItem.addEventListener("click", handleAddItem)
addItem.addEventListener("dblclick", evt => {
    localStorage.clear()
})


function handleList(){
    list.innerHTML = ""
    for (let i = 0; i < localStorage.length; i++) {
        let check = ""
        let className = localStorage.getItem(localStorage.key(i));
        if (className === "done"){
            check = "checked"
        }
        const node = document.createElement("span")
        node.innerHTML = `<span class="${className}"><input class="check-box" type="checkbox" ${check}>${localStorage.key(i)}</span>
                <span class="minus">-</span>`
        // node.innerHTML = `<span><input class="check-box" type="checkbox">${localStorage.key(i)}</span><span class="minus">-</span>`
        node.classList.add("item")
        node.children[0].addEventListener("click", evt => {
            if (localStorage.getItem(node.children[0].innerText) === "done"){
                localStorage.setItem(node.children[0].innerText, "todo")
            }else if (localStorage.getItem(node.children[0].innerText) === "todo"){
                localStorage.setItem(node.children[0].innerText, "done")
            }
            node.children[0].classList.toggle("done")
        })

        node.children[1].addEventListener("click",evt=>{
            // console.log(node.innerText)
            localStorage.removeItem(node.children[0].innerText)
            handleList()
            // alert("minus")
        })
        list.appendChild(node)
    }
}

// console.log(localStorage)
// list.innerHTML = ""
// addItem.addEventListener("click", evt => {
//     let item = input.value;
//     if (item === ""){
//         alert("add something")
//     }else {
//         localStorage.setItem(item, "todo")
//     }
//     createList()
//     input.value = ""
// })
//
// function createList(){
//     // list.removeChild(0)
//     for (let i = 0; i < localStorage.length; i++) {
//         let keyName = localStorage.key(i)
//         let keyValue = localStorage.getItem(keyName)
//         let el = document.createElement("div")
//         el.innerHTML = `<input class="check-box" type="checkbox">${keyName}`
//         el.addEventListener("click", ev => {
//             el.classList.add("done")
//             localStorage.setItem(el.innerText, "done")
//         })
//         if (keyValue === "done"){
//             el.classList.add("done")
//         }
//         list.appendChild(el)
//     }
//
//
// }
