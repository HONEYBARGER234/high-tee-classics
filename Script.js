/* =========================================
   HIGHTEE CLASSICS - MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     MOBILE MENU
     ========================================= */

  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }


  /* =========================================
     CLOSE MOBILE MENU AFTER CLICK
     ========================================= */

  if (navLinks) {
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });
  }


  /* =========================================
     CURRENT YEAR
     ========================================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =========================================
     ORDER QUANTITY
     ========================================= */

  const quantityInput = document.getElementById("quantity");
  const totalElement = document.getElementById("total");
  const summaryQuantity = document.getElementById("summaryQuantity");

  const productPrice = 2499;

  function updateOrderTotal() {

    if (!quantityInput) return;

    let quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
      quantityInput.value = 1;
    }

    const total = productPrice * quantity;

    if (totalElement) {
      totalElement.textContent =
        "₦" + total.toLocaleString();
    }

    if (summaryQuantity) {
      summaryQuantity.textContent = quantity;
    }
  }


  window.changeQuantity = function (amount) {

    if (!quantityInput) return;

    let quantity = parseInt(quantityInput.value);

    if (isNaN(quantity)) {
      quantity = 1;
    }

    quantity += amount;

    if (quantity < 1) {
      quantity = 1;
    }

    quantityInput.value = quantity;

    updateOrderTotal();
  };


  if (quantityInput) {
    updateOrderTotal();
  }


  /* =========================================
     ORDER FORM → WHATSAPP
     ========================================= */

  const orderForm = document.getElementById("orderForm");

  if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name =
        document.getElementById("name")?.value.trim();

      const phone =
        document.getElementById("phone")?.value.trim();

      const address =
        document.getElementById("address")?.value.trim();

      const payment =
        document.getElementById("payment")?.value;

      const quantity =
        parseInt(quantityInput?.value || 1);

      const total =
        productPrice * quantity;


      if (!name || !phone || !address || !payment) {
        alert("Please fill in all the required fields.");
        return;
      }


      const message =
        "Hello Hightee Classics!%0A%0A" +
        "I want to place an order.%0A%0A" +
        "Name: " +
        encodeURIComponent(name) +
        "%0A" +
        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +
        "Address: " +
        encodeURIComponent(address) +
        "%0A" +
        "Quantity: " +
        quantity +
        " bottle(s)%0A" +
        "Price: ₦2,499 per bottle%0A" +
        "Total: ₦" +
        total.toLocaleString() +
        "%0A" +
        "Payment: " +
        encodeURIComponent(payment);


      const whatsappNumber =
        "2347066778612";

      const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


      window.open(
        whatsappURL,
        "_blank"
      );

    });
  }


  /* =========================================
     CONTACT FORM → WHATSAPP
     ========================================= */

  const contactForm =
    document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name =
        document.getElementById("name")?.value.trim();

      const phone =
        document.getElementById("phone")?.value.trim();

      const message =
        document.getElementById("message")?.value.trim();


      if (!name || !phone || !message) {
        alert("Please fill in all the fields.");
        return;
      }


      const whatsappMessage =
        "Hello Hightee Classics!%0A%0A" +
        "Name: " +
        encodeURIComponent(name) +
        "%0A" +
        "Phone: " +
        encodeURIComponent(phone) +
        "%0A%0A" +
        "Message:%0A" +
        encodeURIComponent(message);


      const whatsappURL =
        "https://wa.me/2347066778612?text=" +
        whatsappMessage;


      window.open(
        whatsappURL,
        "_blank"
      );

    });
  }


  /* =========================================
     SCROLL TO TOP
     ========================================= */

  const topButton =
    document.getElementById("topButton");

  if (topButton) {

    window.addEventListener("scroll", function () {

      if (window.scrollY > 300) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }

    });


    topButton.addEventListener("click", function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =========================================
     FADE-IN ANIMATION
     ========================================= */

  const animatedElements =
    document.querySelectorAll(".animate");

  if (animatedElements.length > 0) {

    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }

          });

        },
        {
          threshold: 0.15
        }
      );


    animatedElements.forEach(function (element) {
      observer.observe(element);
    });

  }

});
