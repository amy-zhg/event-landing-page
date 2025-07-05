const menuBtn = document.querySelector(".menu-btn");
menu = document.querySelector("nav ul");
exitBtn = document.querySelector(".exit-btn");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

exitBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});

// Without fallback image //
window.addEventListener("DOMContentLoaded", function () {
  var accessKey = "-znxWsHq5_wnv7ldSq8F-bf1M9XeOOvr5BKzVQ0p7tw"; // Your Unsplash API key
  var query = "concert"; // You can change this to "singer", "drummer", etc.
  var imageElements = document.querySelectorAll(".random-image");

  imageElements.forEach(function (img) {
    fetch(
      "https://api.unsplash.com/photos/random?query=" +
        query +
        "&client_id=" +
        accessKey
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        img.src = data.urls.regular;
        img.alt = data.alt_description || query;
      })
      .catch(function (err) {
        console.error("Image fetch failed:", err);
      });
  });
});

// With fallback image //

// window.addEventListener("DOMContentLoaded", function () {
//   var accessKey = "-znxWsHq5_wnv7ldSq8F-bf1M9XeOOvr5BKzVQ0p7tw";
//   var query = "concert";
//   var imageElements = document.querySelectorAll(".random-image");

//   imageElements.forEach(function (img) {
//     fetch(
//       "https://api.unsplash.com/photos/random?query=" +
//         query +
//         "&client_id=" +
//         accessKey
//     )
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (data) {
//         img.src = data[0].urls.regular;
//         img.alt = data[0].alt_description || query;
//       })
//       .catch(function (err) {
//         console.error(
//           "Unsplash request failed, falling back to Lorem Picsum:",
//           err
//         );
//         img.src = "https://picsum.photos/500/700"; // Fallback image
//         img.alt = "Lorem Picsum Image";
//       });
//   });
// });
