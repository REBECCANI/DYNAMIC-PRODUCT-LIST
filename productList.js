let products = [
    { name: "Shirt", price: 25 },
    { name: "Shoes", price: 60 }
];
 function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

const productList = document.getElementById("productList");
const addPhone = document.getElementById("addPhone");
const addLaptop = document.getElementById("addLaptop");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

function renderProducts() {
    productList.innerHTML = ""; 

    products.forEach((prod, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${prod.name} - $${prod.price}</span>
            <button class="deleteBtn">Delete</button>
        `;

        li.querySelector(".deleteBtn").addEventListener("click", () => {
            products.splice(index, 1);
            renderProducts();
        });
        productList.appendChild(li);
    });
}

addPhone.addEventListener("click",()=>{
    products.push({name: "Phone", price: 800});
    renderProducts()
});

addLaptop.addEventListener("click",()=>{
    products.push({name: "Laptop", price: 1200});
    renderProducts()
});

addCustom.addEventListener("click", () => {
    const name = productName.value.trim();
    const price = Number(productPrice.value.trim());

    if (!name || !price) {
        alert("Enter product name and price!");
        return;
    }

    products.push({ name, price });
    renderProducts();

    productName.value = "";
    productPrice.value = "";
});

renderProducts()

