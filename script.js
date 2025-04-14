function validateSearchInput() {
    const searchInput = document.querySelector('.search-input');
    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a product name to search.");
        return false;
    }
    return true;
}

function handleButtonInteractions() {
    const shopNowButton = document.querySelector('.shop-now-btn');
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');


    if (shopNowButton) {
        shopNowButton.addEventListener('click', function() {
            alert("Redirecting to the shop page...");
        });
    }

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Item added to cart! Proceed to checkout.");
        });
    });
}

function init() {
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            if (validateSearchInput()) {
                alert("Searching for: " + document.querySelector('.search-input').value);
            }
        });
    }

    handleButtonInteractions();
}


document.addEventListener('DOMContentLoaded', init);