let shopFliter = document.querySelector('.shops-township').children;
let activityFilter = document.querySelector('.shops-activity').children;
let shopItem = document.querySelector('.shops').children;
let areaBtn = document.querySelectorAll('.shops-township input[type="checkbox"]');
let activityBtn = document.querySelectorAll('.shops-activity input[type="checkbox"]');

for (let i = 0; i < shopFliter.length; i++) {
    shopFliter[i].addEventListener('click', function () {

        for (let j = 0; j < shopFliter.length; j++) {
            let checkArea = shopFliter[j].querySelector('input[type="checkbox"]');
            checkArea.checked = false;
        }

        this.querySelector('input[type="checkbox"]').checked = true;

        let shopDate = this.getAttribute('data-shop_area');

        for (let t = 0; t < shopItem.length; t++) {
            shopItem[t].classList.remove('active');
            shopItem[t].classList.add('delete');

            if (shopItem[t].getAttribute('data-shop') == shopDate || shopDate == 'all') {
                shopItem[t].classList.remove('delete');
                shopItem[t].classList.add('active');
            }
        }
    })
}

for (let i = 0; i < activityFilter.length; i++) {
    activityFilter[i].addEventListener('click', function () {
        for (let j = 0; j < activityFilter.length; j++) {
            let checkActivity = activityFilter[j].querySelector('input[type="checkbox"]');
            checkActivity.checked = false;
        }

        this.querySelector('input[type="checkbox"]').checked = true;

        let shopActivityData = this.getAttribute('data-shop-activity');

        for (let t = 0; t < shopItem.length; t++) {
            shopItem[t].classList.remove('active');
            shopItem[t].classList.add('delete');

            if (shopItem[t].getAttribute('data-activity') == shopActivityData) {
                shopItem[t].classList.remove('delete');
                shopItem[t].classList.add('active');
            }
        }
    })
}

for (let i = 0; i < areaBtn.length; i++) {
    areaBtn[i].addEventListener('click', function () {
        for (let j = 0; j < activityBtn.length; j++) {
            activityBtn[j].checked = false;
        }
    })
}

for (let i = 0; i < activityBtn.length; i++) {
    activityBtn[i].addEventListener('click', function () {
        for (let j = 0; j < areaBtn.length; j++) {
            areaBtn[j].checked = false;
        }
    })
}


let shopsData = [
    // 01
    {
        id: 0,
        brand: `Flower Dessert`,
        bannerImg: `../images/shops-1.jpg`,
        brandLogo: `../images/dessert_logo-01.png`,
        open: `09:00 - 17:00`,
        phone: `02-23928179`,
        add: `台北市大安區新生南路三段84號一樓`,
        product: [
            {
                productName: `原味可麗露`,
                price: `40`
            },
            {
                productName: `檸檬可麗露`,
                price: `55`
            },
            {
                productName: `肉桂可麗露`,
                price: `50`
            },
            {
                productName: `蜂蜜可麗露`,
                price: `50`
            },
            {
                productName: `巧克力可麗露`,
                price: `55`
            },
        ]
    },
    // 02
    {
        id: 1,
        brand: `鑽品咖啡館`,
        bannerImg: `../images/shops-2.jpg`,
        brandLogo: `../images/dessert_logo-02.png`,
        open: `10:00 - 18:00`,
        phone: `02-98765432`,
        add: `台北市大同區重慶北路200號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `40`
            },
            {
                productName: `草莓可麗露`,
                price: `65`
            },
            {
                productName: `肉桂可麗露`,
                price: `45`
            }
        ]
    },
    // 03
    {
        id: 2,
        brand: `Happy Cake`,
        bannerImg: `../images/shops-3.jpg`,
        brandLogo: `../images/dessert_logo-03.png`,
        open: `10:00 - 21:00`,
        phone: `02-34567890`,
        add: `台北市士林區天母西路300號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `35`
            },
            {
                productName: `可可可麗露`,
                price: `50`
            },
            {
                productName: `咖啡可麗露`,
                price: `50`
            },
            {
                productName: `抹茶可麗露`,
                price: `55`
            }
        ]
    },
    // 04
    {
        id: 3,
        brand: `MJ 甜品`,
        bannerImg: `../images/shops-4.jpg`,
        brandLogo: `../images/dessert_logo-04.png`,
        open: `08:30 - 16:30`,
        phone: `02-87654321`,
        add: `台北市大同區重慶北路200號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `35`
            },
            {
                productName: `蜂蜜可麗露`,
                price: `40`
            },
            {
                productName: `抹茶可麗露`,
                price: `40`
            }
        ]
    },
    // 05
    {
        id: 4,
        brand: `海點麵包坊`,
        bannerImg: `../images/shops-5.jpg`,
        brandLogo: `../images/dessert_logo-05.png`,
        open: `13:00 - 20:30`,
        phone: `02-23456789`,
        add: `台北市松山區西寧南路500號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `35`
            },
            {
                productName: `抹茶可麗露`,
                price: `40`
            }
        ]
    },
    // 06
    {
        id: 5,
        brand: `蕾妮雅甜點實驗室`,
        bannerImg: `../images/shops-6.jpg`,
        brandLogo: `../images/dessert_logo-06.png`,
        open: `11:00 - 18:00`,
        phone: `02-76543210`,
        add: `台北市中正區瑞湖街600號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `40`
            },
            {
                productName: `抹茶可麗露`,
                price: `50`
            },
            {
                productName: `巧克力可麗露`,
                price: `50`
            }
        ]
    },
    // 07
    {
        id: 6,
        brand: `MU MING`,
        bannerImg: `../images/shops-7.jpg`,
        brandLogo: `../images/dessert_logo-07.png`,
        open: `10:00 - 18:00`,
        phone: `02-45678901`,
        add: `台北市信義區基隆路700號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `40`
            },
            {
                productName: `巧克力可麗露`,
                price: `50`
            }
        ]
    },
    // 08
    {
        id: 7,
        brand: `熊貝貝`,
        bannerImg: `../images/shops-8.jpg`,
        brandLogo: `../images/dessert_logo-08.png`,
        open: `10:00 - 21:00`,
        phone: `02-65432109`,
        add: `台北市大安區忠孝東路800號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `45`
            },
            {
                productName: `抹茶可麗露`,
                price: `55`
            },
            {
                productName: `肉桂可麗露`,
                price: `55`
            },
            {
                productName: `咖啡可麗露`,
                price: `55`
            },
            {
                productName: `甜橙可麗露`,
                price: `60`
            }
        ]
    },
    // 09
    {
        id: 8,
        brand: `御品甜點`,
        bannerImg: `../images/shops-9.jpg`,
        brandLogo: `../images/dessert_logo-09.png`,
        open: `11:00 - 20:00`,
        phone: `02-78905432`,
        add: `台北市大同區舊莊街900號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `45`
            },
            {
                productName: `咖啡可麗露`,
                price: `55`
            },
            {
                productName: `蜂蜜可麗露`,
                price: `60`
            }
        ]
    },
    // 10
    {
        id: 9,
        brand: `Canelé`,
        bannerImg: `../images/shops-10.jpg`,
        brandLogo: `../images/dessert_logo-10.png`,
        open: `14:00 - 22:00`,
        phone: `02-32109876`,
        add: `台北市信義區木柵路1001號`,
        product: [
            {
                productName: `原味可麗露`,
                price: `40`
            },
            {
                productName: `抹茶可麗露`,
                price: `50`
            },
            {
                productName: `咖啡可麗露`,
                price: `50`
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const brand = document.querySelectorAll('.shops li');

    for (let i = 0; i < brand.length; i++) {
        brand[i].addEventListener('click', function (e) {
            e.preventDefault();
            const shopId = this.getAttribute('data-id');
            const shopData = shopsData.find(shop => shop.id == shopId);
            const shopUrl = 'shop.html?id=' + shopId;

            // 將資料存儲到 localStorage
            localStorage.setItem('currentShop', JSON.stringify(shopData));

            // 開啟新分頁
            window.open(shopUrl, '_blank');
        });
    }
});