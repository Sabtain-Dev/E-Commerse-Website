window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('navbar-scrolled');
    }
});

document.querySelector('.hero').addEventListener('mouseover', function() {
    document.querySelector('.hero img.img-fluid').classList.add('hover');
}); 

document.querySelector('.hero').addEventListener('mouseout', function() {
    document.querySelector('.hero img.img-fluid').classList.remove('hover');
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('[data-overlay]');
    const modal = document.querySelector('[data-modal]');
    const closeBtn = document.querySelector('[data-modal-close]');
    
    // Show modal after a delay or based on your requirement
    setTimeout(() => {
        overlay.classList.add('active');
        modal.classList.remove('closed');
    }, 3000); // Adjust delay as needed

    // Close modal
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        modal.classList.add('closed');
    });

    // Close modal when clicking outside of the modal content
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            modal.classList.add('closed');
        }
    });
});

const imageUrls = [
  'https://img.freepik.com/free-vector/fashion-collection-social-media-cover-template_23-2149988066.jpg',
  'https://img.freepik.com/free-psd/fashion-clothes-banner-template_23-2148578502.jpg',
  'https://img.freepik.com/free-vector/flat-youtube-thumbnail-fashion-flowers_23-2150407655.jpg',
  'https://img.freepik.com/free-vector/urban-fashion-facebook-template_23-2151350122.jpg',
  'https://img.freepik.com/free-psd/fashion-marketing-ad-banner-template_23-2148578501.jpg'
];

const imgElement = document.getElementById('dynamic-image');

function changeImage() {
  if (!imgElement) return;

  // Trigger fade out
  imgElement.classList.remove('opacity-100');
  imgElement.classList.add('opacity-0');

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    imgElement.src = imageUrls[randomIndex];

    // Trigger fade in after image is loaded
    imgElement.onload = () => {
      imgElement.classList.remove('opacity-0');
      imgElement.classList.add('opacity-100');
    };
  }, 300); // match with transition duration
}

// First load
changeImage();

// Every 2 seconds
setInterval(changeImage, 3000);


const steps = [
  {
    title: "Enter Measurements",
    desc: "Provide your body details for accurate fittings.",
    img: "icons/measurments.png" 
  },
  {
    title: "AI Analyzes Body",
    desc: "Smart AI maps your size and preferences.",
    img: "icons/ai-analysis.png"
  },
  {
    title: "Get Style Suggestions",
    desc: "Receive curated outfits tailored to you.",
    img: "icons/suggestions.png"
    // svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#6366f1" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z"/></svg>`
    // svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#f59e0b" viewBox="0 0 24 24"><path d="M12 2l6 6H6l6-6zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4 6h8v10H8V12z"/></svg>`
  },
  {
    title: "Customize Your Look",
    desc: "Modify colors, fabrics, and fits as per your choice.",
    img: "icons/shirt-solid.svg"
    // img: "icons/suggestions.png"
  },
  {
    title: "Get Styled with AI",
    desc: "Confidently wear smart-picked fashion.",
    img: "icons/robot-solid.svg"
    // svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#3b82f6" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v10h-4v-6h-8v6H4V12a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5z"/></svg>`
  },
  {
  title: "Place Your Order",
  desc: "Confirm your selections and get delivery at your doorstep.",
  img: "icons/order.png"
  // svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#10b981" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm3 4h12v2H6zm-3 4h18v2H3zm3 4h12v2H6zm-3 4h18v2H3z"/></svg>`
  }

];

let current = 0;

function renderDots() {
  const dotContainer = document.getElementById("progress-dots");
  dotContainer.innerHTML = steps
    .map((_, idx) => `<div class="dot ${idx === 0 ? "active" : ""}"></div>`)
    .join("");
}

function updateDots(index) {
  const dots = document.querySelectorAll("#progress-dots .dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}


function showStep(index) {
  const container = document.getElementById("step-container");
  if (!container) return;

  const step = steps[index];
  const iconHtml = step.svg
    ? `<div class="step-icon zoom-in w-28 h-28 mx-auto">${step.svg}</div>`
    : `<div class="step-icon zoom-in w-28 h-28 mx-auto"><img src="${step.img}" class="w-full h-full object-contain" alt="${step.title}" /></div>`;
  
  container.innerHTML = `
    <div class="step-card active bg-white rounded-xl shadow-xl p-8 mx-auto text-center transition-all duration-700 ease-in-out">
      ${iconHtml}
      <h3 class="text-2xl font-semibold text-gray-800 mt-4">${step.title}</h3>
      <p class="text-gray-600 mt-2">${step.desc}</p>
    </div>
  `;

  updateDots(index);
}

document.addEventListener("DOMContentLoaded", () => {
  renderDots();
  showStep(current);

  setInterval(() => {
    current = (current + 1) % steps.length;
    showStep(current);
  }, 3500);
});

// Feature modal function used on "What Our AI Can Do" cards
function openFeatureModal(feature) {
  let content = "";

  switch (feature) {
    case "body-scan":
      content = "Our AI maps your body's dimensions and proportions using precision algorithms.";
      break;
    case "style-match":
      content = "Based on your past choices and trends, AI selects matching outfits that flatter your figure.";
      break;
    case "live-custom":
      content = "Tweak colors, fabrics, sleeves, and necklines in real time — before you order!";
      break;
  }

  alert("🔍 " + content);
}
