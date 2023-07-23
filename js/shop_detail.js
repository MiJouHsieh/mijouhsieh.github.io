window.addEventListener('DOMContentLoaded', function () {
    // 從 localStorage 讀取資料
    const shopData = JSON.parse(localStorage.getItem('currentShop'));
    // console.log(shopData);
    // 將資料顯示在對應的地方
    const shopNameElement = document.querySelector('#shop-breadcrumb h3');
    const mainShopName = document.querySelector('.brand-name');
    const shopBanner = document.querySelector('.shop-info-banner img');
    const logoImage = document.querySelector('.shop-info-content-logo img');
    const shopOpen = document.querySelector('.shop-info-content-item-time');
    const shopPhone = document.querySelector('.shop-info-content-item-phone');
    const shopAdd = document.querySelector('.shop-info-content-item-add');
    const shopProducts = document.querySelector('.shop-product-list');

    shopNameElement.textContent = shopData.brand;
    mainShopName.textContent = shopData.brand;
    shopBanner.src = shopData.bannerImg;
    logoImage.src = shopData.brandLogo;
    shopOpen.textContent = shopData.open;
    shopPhone.textContent = shopData.phone;
    shopAdd.textContent = shopData.add;

    for (let i = 0; i < shopData.product.length; i++) {
        let products = document.createElement('li');
        products.innerHTML = `
        <div class="shop-product-list-img"><img src="../images/product.png" alt=""></div>
        <div class="shop-product-list-content">
            <h5>${shopData.product[i].productName}</h5>
            <p>${shopData.product[i].price}</p>
        </div>
        `
        shopProducts.appendChild(products);
    }

});


