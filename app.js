const SearchProduct = () => {
    let searchValue = document.getElementById('search').value.toUpperCase();
    let productList = document.getElementById('product-list');
    let product = document.querySelectorAll('.product');


    let productDetails = document.querySelectorAll(".product-details");
    for (let i = 0; i < productDetails.length; i++) {
        let SearchText = productDetails[i].getElementsByTagName('h2')[0];
        // console.log(SearchText.textContent)
        if (SearchText) {
         // console.log(searchValue.textContent)

            let textValue = SearchText.textContent || SearchText.innerHTML;
            if (textValue.toUpperCase().indexOf(searchValue) > -1) {
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";

            }
        }
    }

    /*
    let pname=document.getElementsByTagName('h2')

    for (let i = 0; i < pname.length; i++) {
        let SearchText = product[i].getElementsByTagName('h2')[0];

        if (SearchText) {
            // console.log(searchValue.textContent)

            let textValue = SearchText.textContent || SearchText.innerHTML;

            if (textValue.toUpperCase().indexOf(searchValue) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";

            }
        }
    }
    */
}