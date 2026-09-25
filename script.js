document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton =
    document.querySelector(".menu-toggle");

  const nav =
    document.getElementById("mainNav");


  if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

      nav.classList.toggle("open");

    });


    const navLinks =
      nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("open");

      });

    });

  }


  /* =========================
     ORDER PAGE
  ========================= */

  const orderForm =
    document.getElementById("orderForm");


  if (orderForm) {

    const quantityInput =
      document.getElementById("quantity");

    const totalElement =
      document.getElementById("total");

    const summaryQuantity =
      document.getElementById("summaryQuantity");

    const productPrice = 2499;


    function updateOrderTotal() {

      let quantity =
        parseInt(quantityInput.value);


      if (
        isNaN(quantity) ||
        quantity < 1
      ) {

        quantity = 1;

        quantityInput.value = 1;

      }


      const total =
        productPrice * quantity;


      if (totalElement) {

        totalElement.textContent =
          "₦" + total.toLocaleString();

      }


      if (summaryQuantity) {

        summaryQuantity.textContent =
          quantity;

      }

    }


    window.changeQuantity =
      function (amount) {

        let quantity =
          parseInt(quantityInput.value);


        if (isNaN(quantity)) {

          quantity = 1;

        }


        quantity += amount;


        if (quantity < 1) {

          quantity = 1;

        }


        quantityInput.value =
          quantity;


        updateOrderTotal();

      };


    orderForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const name =
          document
            .getElementById("name")
            .value
            .trim();


        const phone =
          document
            .getElementById("phone")
            .value
            .trim();


        const address =
          document
            .getElementById("address")
            .value
            .trim();


        const payment =
          document
            .getElementById("payment")
            .value;


        const quantity =
          parseInt(quantityInput.value);


        const total =
          productPrice * quantity;


        const message =

          "Hello High Tee Classics!%0A%0A" +

          "I want to place an order.%0A%0A" +

          "Name: " +
          encodeURIComponent(name) +
          "%0A" +

          "Phone: " +
          encodeURIComponent(phone) +
          "%0A" +

          "Delivery Address: " +
          encodeURIComponent(address) +
          "%0A" +

          "Quantity: " +
          quantity +
          " bottle(s)%0A" +

          "Price: ₦2,499 per bottle%0A" +

          "Total: ₦" +
          total.toLocaleString() +
          "%0A" +

          "Payment Method: " +
          encodeURIComponent(payment);


        const whatsappURL =
          "https://wa.me/2347066778612?text=" +
          message;


        window.open(
          whatsappURL,
          "_blank"
        );

      }
    );


    updateOrderTotal();

  }


  /* =========================
     CONTACT PAGE
  ========================= */

  const contactForm =
    document.getElementById("contactForm");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const name =
          document
            .getElementById("contactName")
            .value
            .trim();


        const phone =
          document
            .getElementById("contactPhone")
            .value
            .trim();


        const message =
          document
            .getElementById("contactMessage")
            .value
            .trim();


        const whatsappMessage =

          "Hello High Tee Classics!%0A%0A" +

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

      }
    );

  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements =
    document.querySelectorAll(
      ".use-card, .featured-section, .intro-section, .product-cta, .contact-card"
    );


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (entry.isIntersecting) {

                entry.target.classList.add(
                  "reveal-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      function (element) {

        element.classList.add(
          "reveal-hidden"
        );

        observer.observe(element);

      }
    );

  }


});
