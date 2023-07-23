"use strict";

$('.carousel').slick({
  slidesToShow: 1,  //可以控制每個輪播有幾張圖片
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  fade: true,
  arrows: false,
  cssEase: 'linear'
});

// ABOUT
// https://www.google.com/search?q=auto+and+manual+slider&oq=auto+and+manual+slider&aqs=chrome..69i57j0i7i30.24341j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:a32e4f99,vid:bW8X-tt5AZQ

const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;
let currentSlide = 1;
let playSlider;
const iconsArea = document.querySelector(".icons-area");
const aboutBtns = document.querySelectorAll(".aboutBtn");
const rumFirstViewMouseOver = document.querySelector('.icon4')
let active = document.getElementsByClassName("active");

// JavaScript for image slider manual
let manualNav = function (manual) {
  stopShow();
  slides.forEach((slide) => {
    slide.classList.remove("active");
    aboutBtns.forEach((aboutBtn) => {
      aboutBtn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  aboutBtns[manual].classList.add("active");
  autoplay()
};

aboutBtns.forEach((aboutBtn, i) => {
  aboutBtn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

function autoplay() {
    playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    aboutBtns.forEach((aboutBtn) => {
      aboutBtn.classList.remove("active");
    });
    slideNumber++;
    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    aboutBtns[slideNumber].classList.add("active");
  }, 4000);
}

function stopShow () {
  clearInterval(playSlider);
}

function ifRumFirstViewMouseOver() {
  rumFirstViewMouseOver.addEventListener('mouseover', () => {
    rumFirstViewMouseOver.classList.remove("firstView")
    setTimeout(()=> {
      stopShow()
    }, 300)
  })
}
autoplay()
ifRumFirstViewMouseOver();

iconsArea.addEventListener("mouseover", (event) => {
  stopShow ()
  let target = event.target; 
  if (target.tagName !== "svg") {
    return;
  } else if (target.tagName === "svg") {
      stopShow();
  }

  let bouncingTexts = target.closest(".icons").children[3].children[0].innerHTML;
  let wrapText = ""
  for (let i = 0; i < bouncingTexts.length; i++) {
    wrapText += "<em class=''>" + bouncingTexts.charAt(i) + "</em>";
  }
  
  target.closest(".icons").children[3].children[0].innerHTML= wrapText;
  let letters = Array.from(document.getElementsByTagName("em"));
  let j = 0;
  
  function applyBounce( ) {
    if (j < letters.length) {
      setTimeout(function () {
        letters[j].classList.add('bounce-text')
        j++;
        if (j < letters.length) {
          applyBounce();
        }
      }, 250);
    }
  }
  applyBounce( )
});

iconsArea.addEventListener("mouseout", (event) => {
  let target = event.target; //svg
  let iconName =  target.closest(".icons").dataset.name
  if (target.tagName === "svg") {
    target.closest(".icons").children[3].children[0].innerHTML= iconName
    autoplay() 
  }
});

// FAQ

$('.faq-list li').click(function () {
  $(this).toggleClass('faq-active').find('.faq-text').slideToggle();
});

const shops = [
  {
    title: 'bubble-1',
    shopName: 'Flower Dessert',
    img: './images/shops-1.jpg',
    logo: './images/dessert_logo-01.png',
  },
  {
    title: 'bubble-2',
    shopName: '鑽品咖啡館',
    img: './images/shops-2.jpg',
    logo: './images/dessert_logo-02.png',
  },
  {
    title: 'bubble-3',
    shopName: 'Happy Cake',
    img: './images/shops-3.jpg',
    logo: './images/dessert_logo-03.png',
  },
  {
    title: 'bubble-4',
    shopName: 'MJ 甜品',
    img: './images/shops-4.jpg',
    logo: './images/dessert_logo-04.png',
  },
  {
    title: 'bubble-5',
    shopName: '海點麵包坊',
    img: './images/shops-5.jpg',
    logo: './images/dessert_logo-05.png',
  },
  {
    title: 'bubble-6',
    shopName: '蕾妮雅甜點實驗室',
    img: './images/shops-6.jpg',
    logo: './images/dessert_logo-06.png',
  },
];

let bubblesShops = document.querySelector('.bubbles-shops');

function shopsImages(shops) {
  let htmlContent = ``;
  for (let i = 0; i < shops.length; i++) {
    htmlContent += `
            <a href="" class='bubbles ${shops[i].title}' data-num="${i}">
            <svg width="0" height="0" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
        <g>
          <defs>
            <clipPath id="bubble-clip" clipPathUnits="objectBoundingBox" transform="scale(0.0025,0.0025)">
              <path>
                <animate attributeName="d" dur="2000ms" repeatCount="indefinite" values="M455.5,335.5Q421,421,335.5,451Q250,481,164.5,451Q79,421,57,335.5Q35,250,65,172.5Q95,95,172.5,64.5Q250,34,336.5,55.5Q423,77,456.5,163.5Q490,250,455.5,335.5Z;
            M436.5,321.5Q393,393,321.5,430.5Q250,468,170,439Q90,410,58,330Q26,250,59,171Q92,92,171,59.5Q250,27,336,52.5Q422,78,451,164Q480,250,436.5,321.5Z;
            M431,321.5Q393,393,321.5,432Q250,471,174,436.5Q98,402,50.5,326Q3,250,47,170.5Q91,91,170.5,63Q250,35,331.5,61Q413,87,441,168.5Q469,250,431,321.5Z;
            M445,335Q420,420,335,460Q250,500,171.5,453.5Q93,407,50.5,328.5Q8,250,49.5,170.5Q91,91,170.5,53.5Q250,16,327,56Q404,96,437,173Q470,250,445,335Z;
            M455.5,335.5Q421,421,335.5,451Q250,481,164.5,451Q79,421,57,335.5Q35,250,65,172.5Q95,95,172.5,64.5Q250,34,336.5,55.5Q423,77,456.5,163.5Q490,250,455.5,335.5Z"></animate>
              </path>
            </clipPath>
          </defs>
        </g>
      </svg>
      <div class="bubble-img-container">
        <img src="${shops[i].img}">
        <div class="shop-info-container">
          <div class="shop-logo-container">
            <img src="${shops[i].logo}" alt="shop-logo">
          </div>
          <h3 class="shop-name-item">${shops[i].shopName}</h3>
        </div>
      </div>
    </a>  
    `;
  }
  return htmlContent;
}

bubblesShops.innerHTML = shopsImages(shops);

$(function () {
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $('#top').fadeIn(500);
    } else {
      $('#top').fadeOut(300);
    }
  });

  /* 按下GoTop按鈕時的事件 */
  $('#top').on("click", function () {
    $('html,body').stop().animate({ scrollTop: 0 });
  });
});

const popupData = [
  // 01
  {
    content: `<p>為了讓您的禮物成為最受歡迎的驚喜，我們精心挑選了TOP3可麗露甜點禮盒，帶您一起享受美味的節慶時刻。
    </p>
    <p>第一款「甜蜜經典禮盒」，充滿經典口味的可麗露，讓您回味無窮。濃郁的巧克力、絲滑的焦糖和香氣四溢的香草，每一口都散發著節慶的喜悅。</p>
    <p>第二款「果香盛宴禮盒」，融合了新鮮水果與可麗露的絕妙組合，帶來一場果香四溢的盛宴。搭配著柔順的白巧克力和脆脆的堅果，這款禮盒必定成為舌尖上的驚喜。</p>
    <p>第三款「精緻節慶禮盒」，獨特的節慶設計，讓您感受到聖誕的熱情。鮮豔的彩糖、可愛的節慶圖案，不僅美味可口，更是一份充滿節日氛圍的禮物。</p>
    <p>無論是與家人、朋友還是同事，這些可麗露甜點禮盒都是絕佳的選擇，為您的聖誕交換禮物活動增添更多驚喜與甜蜜。立即前往我們的店鋪，一同歡慶這個一年一度的特別時刻，讓可麗露與甜蜜共舞，為您的節日增添珍貴回憶。</p>`
  },
  // 02
  {
    content: `<p>『感受味蕾的躍動，品味創新的美味』我們驕傲地宣布，期待已久的新口味可麗露即將上市！</p>
    <p>凝聚了我們烘焙師傅的智慧和創意，推出全新口味帶給您一場前所未有的味覺饗宴。</p>
    <p>從今天開始，限時三天優惠開跑，讓您在這個夏日盛宴中盡情品味可麗露的奇妙滋味。不僅僅是一份點心，可麗露是一種療癒，是經典與創新的完美結合。
        我們嚴選最優質的原材料，經過精心烘焙和製作，以確保每一口都帶來最純粹的享受。無論您是巧克力控，還是喜愛水果口味，這次的新品一定能滿足您的味蕾。
        請即蒞臨我們的店鋪，與我們一同迎接這場美食盛宴。</p>
    <p>限時三天，錯過就等明年！快來嘗試新口味可麗露，讓您的味覺體驗達到巔峰。</p>`
  },
  // 03
  {
    content: `<p>絕對不能錯過的口感饗宴，我們誠意推出每日限量的義大利頂級巧克力口味內餡可麗露！這是一場巧克力的盛宴，讓您的味蕾沉醉其中。</p>
    <p>我們精選了義大利最頂級的巧克力，融合在鬆軟可口的可麗露內餡中。一口咬下，絲滑的巧克力在您的口中綻放，香濃的味道彷彿帶您遨遊於義大利的巧克力之都。</p>
    <p>每日限量供應，我們堅持以最高品質的巧克力和精湛的製作工藝，確保每一份可麗露都完美無瑕。無論是自己品味，還是與摯愛分享，這款義大利頂級巧克力口味內餡可麗露將為您帶來非凡的味覺享受。</p>
    <p>別再猶豫了！快來我們的店鋪，每日限量供應，獲取這份珍貴的口感寶藏。讓義大利巧克力的魔力在您的舌尖綻放，帶給您一段美好的味覺旅程。</p>`
  },
  // 04
  {
    content: `<p>假日來臨，是時候揪好姊妹一同探索台北松山的甜點文創市集啦！這裡集結了眾多手工甜點，讓您盡情享受美味的時刻。</p>
              <p>無論您是追求傳統口味還是嚮往創新驚喜，這裡都能滿足您的挑剔味蕾。每一個攤位都展示著獨特的手工甜點，色彩繽紛、口感豐富，絕對讓您的舌尖上的味蕾盡情翻飛。</p>
              <p>帶著您的姊妹們一同穿梭於這個甜點的天堂，品味著一道道令人垂涎欲滴的美食。讓甜點的魔法帶領您進入一個充滿甜蜜和歡笑的世界，為假日增添無限的快樂與回憶。</p>
              <p>趕緊來台北松山甜點文創市集，與姊妹們一起尋找屬於您的甜蜜時刻。無論是味覺還是情感，這裡都將帶給您驚喜與滿足！</p>`
  },
  // 05
  {
    content: `<p>踏入法式烘焙的世界，讓我們一同探索可麗露的經典食譜與做法。這款優雅精緻的法式甜點，結合了鬆軟的外皮和濃郁的內餡，定能令您愛不釋手。</p>
    <p>材料：</p>
    <ul>
        <li>125克低筋麵粉</li>
        <li>15克糖粉</li>
        <li>2克鹽</li>
        <li>100毫升牛奶</li>
        <li>50克無鹽奶油</li>
        <li>2個全蛋</li>
        <li>適量巧克力醬或果醬（內餡）</li>
    </ul>
    <p>做法：</p>
    <ul>
        <li>1. 在碗中混合低筋麵粉、糖粉和鹽，拌勻。</li>
        <li>2. 在小鍋中加熱牛奶和無鹽奶油，煮至奶油完全融化。</li>
        <li>3. 將奶油混合物倒入麵粉中，攪拌至順滑。</li>
        <li>4. 逐個加入蛋，攪拌至完全混合。</li>
        <li>5. 預熱平底鍋，倒入麵糊，以中小火煎烤約2分鐘。</li>
        <li>6. 翻轉可麗露，再煎烤約1分鐘，直至兩面呈金黃色。</li>
        <li>7. 取出可麗露，用巧克力醬或果醬填充內餡。</li>
        <li>8. 享受美味的法式可麗露！</li>
    </ul>
    <p>無論是在下午茶時間還是特別的場合，法式可麗露總能為您帶來獨特的美食體驗。用心製作，讓您在家中也能品味到法國的甜蜜滋味。儘情享受這項經典的法式烘焙藝術吧！</p>`
  }
];

window.addEventListener('click', function (event) {
  let popup = document.getElementById("popup");
  if (event.target == popup) {
    popup.style.display = "none";
    closePopup();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let parentElement = document.body; // 或者選擇更接近按鈕的父元素
  parentElement.addEventListener('click', function (event) {
    if (event.target.matches('.news-card')) {
      event.preventDefault(); // 防止<a>默認行為（跳轉頁面）
      openPopup();
      let button = event.target;
      let title = button.getAttribute('data-title');
      let imageSrc = button.getAttribute('data-img');
      let buttonIndex = button.getAttribute('data-index'); // 新增，獲取按鈕的索引

      let popup = document.getElementById("popup");
      let popupTitle = document.getElementById("popup-title");
      let popupImage = document.getElementById("popup-image");
      let popupContent = document.getElementById("popup-content");

      popupTitle.innerHTML = `${title} <span class="close">&times;</span>`;
      popupImage.src = imageSrc;

      // 根據按鈕索引從popupData中獲取對應內容
      let content = popupData[buttonIndex].content;
      popupContent.innerHTML = content;

      popup.style.display = "block";
    } else if (event.target.matches('.close')) {
      closePopup();
    }
  });
});

function openPopup() {
  let popup = document.getElementById("popup");
  document.body.style.overflow = "hidden";
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("popup");
  document.body.style.overflow = "auto";
  popup.style.display = "none";
}

let homeShopsData = [
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
  const brandBubble = document.querySelectorAll('.bubbles');
  for (let i = 0; i < brandBubble.length; i++) {
      brandBubble[i].addEventListener('click', function (e) {
        e.preventDefault();
          const brandId = this.getAttribute('data-num');
          const brandData = homeShopsData.find(brand => brand.id == brandId);
          const brandUrl = '/pages/shop.html?id=' + brandId;

          // 將資料存儲到 localStorage
          localStorage.setItem('currentShop', JSON.stringify(brandData));

          // 開啟新分頁
          window.open(brandUrl, '_blank');
      });
  }
});
