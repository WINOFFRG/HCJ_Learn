// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");


function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push(
                {
                    id: doc.data().id,
                    image: doc.data().image,
                    name: doc.data().name,
                    make: doc.data().make,
                    rating: doc.data().rating,
                    price: doc.data().price
                }
            );
        });
        console.log(items);

        generateItems(items);
    });
}

function generateItems(items){
    
    let productSchema = document.querySelector(".main-section-products").children[0];
    let noOfChildren = productSchema.childElementCount;

    items.forEach((item) => {

        let product = document.createElement("div");
        product.classList = productSchema.classList;
        product.classList.remove('hidden');

        for (let index = 0; index < noOfChildren - 1; index++) {

            let element = document.createElement('div');
            element.classList = productSchema.children[index].classList;

                if(index === 0){
                    let img = document.createElement('img');
                    img.classList = productSchema.children[0].firstElementChild .classList;
                    img.setAttribute("src", Object.values(item)[index+1]);
                    element.appendChild(img);
                }
                else{
                    if(index === 4) element.innerText = "Rs. ";
                    element.innerText += Object.values(item)[index+1]; 
                }

            product.appendChild(element);
        }

        createButton(product);

        document.querySelector(".main-section-products").appendChild(product);
    })
}

function createButton(product){

        let cartBtnBox = document.createElement("div");
        let cartBtn = document.createElement("div");
        
        cartBtnBox.classList = document.querySelector(".main-section-products").children[0].lastElementChild.classList;
        cartBtn.classList = document.querySelector(".main-section-products").children[0].lastElementChild.firstElementChild.classList;
        
        cartBtn.innerHTML = "Add to Cart";
        
        cartBtnBox.appendChild(cartBtn);
        product.appendChild(cartBtnBox);

        cartBtn.addEventListener("click", () => {
            console.log(product);
        })
}

getItems();


{/* <div class="button-container flex justify-center items-center">
                <div class="add-to-cart bg-yellow-500 w-44 h-8 flex justify-center items-center border-gray-500 border text-gray-700 rounded cursor-pointer mt-2 hover:bg-yellow-400">
                    Add to Cart
                </div>
            </div> */}