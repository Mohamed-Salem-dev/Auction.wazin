// ==================================================
// Navbar
let menu = document.querySelector(".box-menu");
let listNav = document.querySelector(".box-list-link-nav-1");
menu.onclick = () => {
  listNav.classList.toggle("open");
};

// --------------------------------------
$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

// --------------------------------------
// let aboutOffsetTop = $("#about").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > 130) {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  } else {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  }
});

// ===========================================================================
$(document).ready(function () {
  $(".owl-product").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    lazyLoad: true,
    autoplayHoverPause: true,
    nav: true,
    rtl: false,    // back
    responsive: {
      0: {
        items: 1.2,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      300: {
        items: 1.4,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      600: {
        items: 1.4,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      767: {
        items: 2,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      991: {
        items: 3,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});

// ===========================================================================
$(document).ready(function () {
  $(".owl-Brands").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    lazyLoad: true,
    autoplayHoverPause: true,
    nav: false,
    rtl: false,    // back
    responsive: {
      0: {
        items: 2,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      
      600: {
        items: 3,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      700: {
        items: 3,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      800: {
        items: 4,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      1000: {
        items: 4,
        nav: true,
        center: true,
      },
      1000: {
        items: 5,
        nav: true,
        center: true,
      },
      1200: {
        items: 6,
        nav: true,
      },
    },
  });
});

// ===========================================================================
// swiper
var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 10,
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  rtl: false,    // back

});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop: true,
  rtl: false,    // back

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// =================================================================================================
$(document).ready(function () {
  $("#btnLogIn").click(function () {
    $(".box-phone-login").hide();
    $(".box-otp-login").show();
  });

  $(".btn-back-Phone").click(function () {
    $(".box-phone-login").show();
    $(".box-otp-login").hide();
  });
});

// ------------------------------------------------------




// ========================================================================
document.addEventListener("DOMContentLoaded", function () {

  const favoriteButtons = document.querySelectorAll(".btn-Favorite-data");
  const itemCountNav = document.querySelector(".item-count-nav");
  const itemCountDiv = document.querySelector(".item-count");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const parentItem = button.closest(".item-data");
      const productId = parentItem.getAttribute("data-product-id");
      const productTitle = parentItem.querySelector(".titel-product").textContent;
      const productImageSrc = parentItem.querySelector(".img-data img").getAttribute("src");

      if (button.classList.contains("active-Favorite")) {
        const favoriteItem = document.querySelector(`.box-aside-cart-img-Quantity-trash-border[data-product-id="${productId}"]`);
        if (favoriteItem) {
          favoriteItem.remove();
          button.classList.remove("active-Favorite");
        }
      } else {
        const favoriteItem = document.createElement("div");
        favoriteItem.className = "box-aside-cart-img-Quantity-trash-border";
        favoriteItem.setAttribute("data-product-id", productId);

        favoriteItem.innerHTML = `
          <div class="box-aside-cart-img-Quantity-trash">
            <div class="d-flex gap-2 align-items-center">
              <div class="box-img-aside-heart">
                <img src="${productImageSrc}" alt="">
              </div>
              <div>
                <h3>${productTitle}</h3>
              </div>
            </div>
            <div>
              <button class="btn btn-delete" data-product-id="${productId}">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `;

        document.querySelector(".box-all-item-heart").appendChild(favoriteItem);

        const deleteButton = favoriteItem.querySelector(".btn-delete");
        deleteButton.addEventListener("click", function () {
          const parentFavoriteItem = deleteButton.closest(".box-aside-cart-img-Quantity-trash-border");
          parentFavoriteItem.remove();
          button.classList.remove("active-Favorite");
          updateItemCount();
        });

        button.classList.add("active-Favorite");
      }

      updateItemCount();
    });
  });

  function updateItemCount() {
    const countNav = document.querySelectorAll(".box-all-item-heart .box-aside-cart-img-Quantity-trash-border").length;
    itemCountNav.textContent = countNav;
    itemCountNav.classList.toggle("hide", countNav === 0);

    const countDiv = document.querySelectorAll(".box-all-item-heart .box-aside-cart-img-Quantity-trash-border").length;
    itemCountDiv.textContent = countDiv;
    itemCountDiv.classList.toggle("hide", countDiv === 0);
  }
});

// ============================================================================================================
// Addresses
$(document).ready(function () {
  $(".btn-Edit-Addresses").click(function () {
    $(".box-Addresses").hide();
    $(".box-Edit-Addresses").show();
  });

  $(".btn-Save-Changes").click(function () {
    $(".box-Addresses").show();
    $(".box-Edit-Addresses").hide();
  });

  $(".btn-Add-new-address").click(function () {
    $(".box-Addresses").hide();
    $(".box-Add-new-address").show();
  });

  $(".btn-Save-Changes-add").click(function () {
    $(".box-Addresses").show();
    $(".box-Add-new-address").hide();
  });
});
// ======================================================


$(document).ready(function() {
  $(".btn-Filters").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Filters").show();
  });

  $(".btn-Material").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Material").show();
  });

  $(".btn-Color").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Color").show();
  });

  $(".btn-Brand").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Brand").show();
  });

  $(".btn-Gender").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Gender").show();
  });

  $(".btn-Stone").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Stone").show();
  });

  $(".btn-Certifications").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Certifications").show();
  });


  $(".btn-Price").click(function () {
    $(".box-offcanvas-body > div").hide();
    $(".body-Price").show();
  });
});



// ----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const priceButtons = document.querySelectorAll(".box-item-Place");
  const inputPrice = document.querySelector(".input-price");

  if (inputPrice) {
    priceButtons.forEach(button => {
      button.addEventListener("click", function () {
        const price = button.querySelector("h4").textContent.trim().split(' ')[0];
        inputPrice.value = price;

        console.log("price");
      });
    });
  } else {
    console.error("Input element with class 'input-price' not found.");
  }
});

// ===================================================================================
// Chat 
const userChatButtons = document.querySelectorAll('.btn-item-user-chat');
const caratAuctionChat = document.querySelector('.box-Carat-Auction-chat');
const caratMessages = document.querySelector('.box-Carat-Messages');
const backButton = document.querySelector('.btn-arrow-back');
const userChatItems = document.querySelectorAll('.item-user-chat'); // اختيار جميع عناصر item-user-chat

caratMessages.classList.add('hidden');

// Function to add 'active' class to the selected item-user-chat and remove from others
function activateItem(item) {
  userChatItems.forEach(chatItem => {
    if (chatItem === item) {
      chatItem.classList.add('active');
    } else {
      chatItem.classList.remove('active');
    }
  });
}

userChatButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activateItem(userChatItems[index]); // تنشيط العنصر المناسب
    caratAuctionChat.classList.add('hidden');
    caratMessages.classList.remove('hidden');
  });
});

backButton.addEventListener('click', () => {
  caratAuctionChat.classList.remove('hidden');
  caratMessages.classList.add('hidden');
  
  // Remove 'active' class from all item-user-chat elements
  userChatItems.forEach(chatItem => {
    chatItem.classList.remove('active');
  });
});

// ----------------------------------
// delete user
const indexCheckbox = document.getElementById('indexCheckbox');
const userCheckboxes = document.querySelectorAll('.input-checkbox-user');
const deleteButton = document.querySelector('.btn-delete-user');

indexCheckbox.addEventListener('change', () => {
  userCheckboxes.forEach(checkbox => {
    checkbox.checked = indexCheckbox.checked;
  });
});

deleteButton.addEventListener('click', () => {
  userCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const item = checkbox.closest('.item-user-chat');
      item.classList.add('hidden');
    }
  });
});
