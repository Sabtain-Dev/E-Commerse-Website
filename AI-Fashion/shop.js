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

document.addEventListener('DOMContentLoaded', function () {
  const refreshBtn = document.getElementById('refreshRecommendations');

  refreshBtn?.addEventListener('click', function () {
    // 🔄 Future AI logic will go here to load personalized product recommendations
    alert("🔄 AI is refreshing your personalized fashion picks...");

    // Example of where you will load products in future:
    // loadPersonalizedProductsForUser();
  });
});

// shop.js - Handles Shop Page interactions

// Product data for dynamic modal
const productData = {
  "Stylish Jacket": {
    price: "$79.99",
    image: "images/1.0.jpg",
    colors: {
      Blue: "images/1.0.jpg",
      Gray: "images/1.1.jpg",
    },
    aiSuggestions: [
      { title: "Blue Jeans", image: "images/1.2.jpg" },
      { title: "Joggers", image: "images/1.3.jpg" }
    ],
    details: [
      "Chest: 38\"",
      "Waist: 32\"",
      "Fabric: Cotton blend",
      "Weather Fit: Winter",
      "Occasion: Casual",
      "Length: Regular Fit",
      "Sleeve: Full Sleeve",
      "Neck: High Neck",
      "Stretch: Moderate"
    ]
  },
  "Summer Dress": {
    price: "$59.99",
    image: "images/2.0.jpg",
    colors: {
      Sleeveless: "images/2.0.jpg",
      Full_Sleeves: "images/2.1.jpg",
    },
    aiSuggestions: [
      { title: "Sun Hat", image: "images/2.2.jpg" },
      { title: "Necklace", image: "images/2.3.jpg" }
    ],
    details: [
      "Chest: 36\"",
      "Waist: 30\"",
      "Length: Knee",
      "Fabric: Chiffon",
      "Fit: Flowy",
      "Weather Fit: Summer",
      "Occasion: Outdoor",
      "Sleeve: Both",
      "Neck: Round Neck",
    ]
  },
  "Black Jeans": {
    price: "$24.99",
    image: "images/3.0.jpg",
    colors: {
      Black: "images/3.0.jpg",
      Blue: "images/1.2.jpg",
    },
    aiSuggestions: [
      { title: "Stylish Jacket", image: "images/1.0.jpg" },
      { title: "T-Shirt", image: "images/3.1.jpg" }
    ],
    details: [
      "Waist: 32\" (Medium) / 34\" (Large)",
      "Length: Full Length",
      "Fabric: Stretch Denim",
      "Fit: Slim Fit",
      "Weather Fit: All Seasons",
      "Occasion: Casual, Smart Casual",
      "Style: Urban Minimalist",
      "Waist Rise: Mid-Rise",
      "Closure: Button & Zip",
      "Leg Style: Tapered",
      "Color: Jet Black",
    ]
  },
  "Sports Shoes": {
    price: "$52.99",
    image: "images/4.0.jpg",
    colors: {
      White: "images/4.0.jpg",
      Green: "images/4.1.jpg",
    },
    aiSuggestions: [
      { title: "Joggers", image: "images/1.3.jpg" },
      { title: "Hoddie", image: "images/4.2.jpg" }
    ],
    details: [
      "Measurements: US Size 10 (10.5\")",
      "Material: Breathable Mesh & Synthetic",
      "Sole: Cushioned Rubber",
      "Closure: Lace-Up",
      "Fit: True to Size",
      "Weather Fit: All Seasons",
      "Occasion: Sports, Gym, Outdoor",
      "Style: Athletic Performance",
      "Cushioning: EVA Midsole",
      "Arch Support: Neutral",
      "Color: Green / White",
    ]
  },
  "Black Flared Skirt": {
    price: "$22.99",
    image: "images/5.0.jpg",
    colors: {
      Black: "images/5.0.jpg",
      Classic_Gold_Buttonwear: "images/5.1.jpg",
    },
    aiSuggestions: [
      { title: "Blazer", image: "images/6.0.jpg" },
      { title: "High Heels", image: "images/5.2.jpg" }
    ],
    details: [
      "Waist: Medium: 28",
      "Hips: Medium: 38",
      "Length: Approximately 26 to 30",
      "Fabric: Lightweight Cotton Blend / Polyester",
      "Fit: Flared, Flowing",
      "Style: Elegant & Versatile",
      "Weather Fit: All Seasons (Spring to Fall)",
      "Occasion: Casual, Outdoor, Office",
      "Waist Style: Elastic / Zip Closure",
      "Movement: Comfortable for walking",
    ]
  },
  "Blazer": {
    price: "$62.99",
    image: "images/6.0.jpg",
    colors: {
      Purple: "images/6.0.jpg",
      Red: "images/6.1.jpg",
    },
    aiSuggestions: [
      { title: "Black Flared Skirt", image: "images/5.0.jpg" },
      { title: "Floral Cocktail Ring", image: "images/6.2.jpg" }
    ],
    details: [
  "Chest: 36\" (Medium) / 38\" (Large)",
  "Waist: 30\" (Medium) / 32\" (Large)",
  "Shoulder: 15\" (Medium) / 15.5\" (Large)",
  "Sleeve Length: 23\" (All Sizes)",
  "Fabric: Polyester Blend",
  "Fit: Tailored",
  "Weather Fit: All Seasons",
  "Occasion: Office & Formal",
  "Sleeve: Full Sleeve",
  "Neck: Notched Lapel",
  "Style: Elegant Professional",
  "Detail: Gold Button Accent",
]

  },

  "Floral Shirt": {
    price: "$20.00",
    image: "images/f1.jpg",
    colors: {
      Print_01: "images/f1.jpg",
      Print_02: "images/f1.1.jpg",
      Print_03: "images/f1.2.jpg"
    },
    aiSuggestions: [
      { title: "Floral Shorts", image: "images/f1.3.jpg" },
      { title: "Sandles", image: "images/f1.4.jpg" }
    ],
    details: [
      "Style: Relaxed-fit floral printed shirt",
    "Fabric: Lightweight cotton blend for summer",
    "Chest: 38\" (adjustable sizing options available)",
    "Waist: 32\" standard fit",
    "Sleeve: Half sleeves with folded cuffs",
    "Fit: Regular length with straight hemline",
    "Season: Ideal for Spring & Summer wear",
    "Occasion: Casual outings, beach days",
    "Care: Machine washable"
    ]
  },
  "Cotten Shirt": {
    price: "$14.00",
    image: "images/f1.jpg",
    colors: {
      Navy_Blue: "images/f2.jpg",
      White: "images/f2.1.jpg",
    },
    aiSuggestions: [
      { title: "Oxford Shoes", image: "images/f6.jpg" },
      { title: "Branded Watch", image: "images/n7.1.webp" }
    ],
    details: [
      "Style: Classic solid-color cotton shirt",
    "Fabric: 100% soft cotton, breathable",
    "Chest: 38\" tailored fit",
    "Waist: 32\" standard sizing",
    "Sleeve: Half sleeves with buttoned cuffs",
    "Fit: Regular length, clean straight cut",
    "Season: Perfect for Spring and Summer",
    "Occasion: Casual, semi-formal, or office wear",
    "Care: Machine washable, low tumble dry"
    ]
  },

  "Long Coat": {
  price: "$14.00",
  image: "images/f3.jpg",
  colors: {
    Men: "images/f3.jpg",
    Women: "images/f3.1.jpg"
  },
  aiSuggestions: [
    { title: "Black Jeans", image: "images/3.0.jpg" },
    { title: "High Heels", image: "images/n5.1.webp" }
  ],
  details: [
    "Style: Long trench-style overcoat",
    "Fabric: Wool-blend, warm and durable",
    "Fit: Relaxed with a structured silhouette",
    "Sleeve: Full-length with button cuffs",
    "Weather Fit: Winter and cold seasons",
    "Occasion: Formal, Business, Outdoor",
    "Length: Knee-length",
    "Closure: Double-breasted buttons",
    "Care: Dry clean only"
  ]
},

"Shirt": {
  price: "$9.99",
  image: "images/f4.jpg",
  colors: {
    Blue: "images/f4.jpg",
    Gray: "images/f4.1.jpg",
    White: "images/f4.2.jpg"
  },
  aiSuggestions: [
    { title: "Striped Trousers", image: "images/f9.2.jpg" },
    { title: "Sandles", image: "images/f10.1.jpg" }
  ],
  details: [
    "Style: Solid casual shirt",
    "Fabric: Cotton-poly blend, breathable",
    "Fit: Slim fit with a curved hem",
    "Sleeve: Half sleeves",
    "Weather Fit: Summer and Spring",
    "Occasion: Everyday wear, Office casual",
    "Length: Hip length",
    "Neck: Standard collar",
    "Care: Machine washable"
  ]
},

"Watch": {
  price: "$9.99",
  image: "images/f5.jpg",
  colors: {
    Blue: "images/f5.jpg",
    Black: "images/f5.1.jpg"
  },
  aiSuggestions: [
    { title: "Printed Shirt", image: "images/n4.jpg" },
    { title: "Hat", image: "images/n1.1.jpg" }
  ],
  details: [
    "Type: Analog wristwatch",
    "Strap: Faux leather, adjustable",
    "Dial: Classic round, 40mm",
    "Display: Quartz movement",
    "Occasion: Daily, Business casual",
    "Water Resistance: Splash-proof",
    "Closure: Buckle",
    "Battery: Included",
    "Care: Avoid strong magnetic fields"
  ]
},

"Oxford Shoes": {
  price: "$69.99",
  image: "images/f6.jpg",
  colors: {
    Brown: "images/f6.jpg",
    Black: "images/f6.1.jpg"
  },
  aiSuggestions: [
    { title: "Stylish Jacket", image: "images/1.1.jpg" },
    { title: "Pant", image: "images/c3.jpg" }
  ],
  details: [
    "Style: Formal Oxford lace-up shoes",
    "Material: Genuine leather upper",
    "Sole: Durable rubber outsole",
    "Toe: Round, polished finish",
    "Occasion: Office, Formal events",
    "Fit: Standard fit",
    "Comfort: Cushioned insole",
    "Care: Polish regularly"
  ]
},

"Joggers": {
  price: "$69.99",
  image: "images/1.3.jpg",
  colors: {
    Black: "images/1.3.jpg",
    White: "images/f7.1.jpg"
  },
  aiSuggestions: [
    { title: "Hoddie", image: "images/f8.1.webp" },
    { title: "Jacket", image: "images/n2.1.jpg" }
  ],
  details: [
    "Style: Athletic slim-fit joggers",
    "Fabric: Cotton-spandex blend",
    "Waist: Elastic with drawstring",
    "Fit: Tapered at ankles",
    "Pockets: Dual side zip pockets",
    "Occasion: Sports, Casual",
    "Stretch: High flexibility",
    "Care: Cold wash recommended"
  ]
},

"Hoddie": {
  price: "$20.00",
  image: "images/4.2.jpg",
  colors: {
    Blue: "images/4.2.jpg",
    Yellow: "images/f8.1.webp",
    Pink: "images/f8.2.webp"
  },
  aiSuggestions: [
    { title: "Watch", image: "images/f5.1.jpg" },
    { title: "Hat", image: "images/n1.1.jpg" }
  ],
  details: [
    "Style: Pullover hoodie",
    "Fabric: Fleece-lined cotton blend",
    "Fit: Relaxed fit with ribbed cuffs",
    "Sleeve: Full sleeve with thumb holes",
    "Weather Fit: Winter/Fall",
    "Hood: Adjustable drawstring",
    "Occasion: Loungewear, Streetwear",
    "Care: Wash inside out"
  ]
},

"Striped Trousers": {
  price: "$18.00",
  image: "images/f9.jpg",
  colors: {
    White: "images/f9.jpg",
    Black: "images/f9.1.jpg",
    Blue: "images/f9.2.jpg"
  },
  aiSuggestions: [
    { title: "Summer Dress", image: "images/2.0.jpg" },
    { title: "Sandles", image: "images/f10.1.jpg" }
  ],
  details: [
    "Style: Vertical-striped pants",
    "Fabric: Soft cotton-linen blend",
    "Waist: Elastic with belt loops",
    "Length: Full length",
    "Fit: Relaxed through thigh",
    "Occasion: Beachwear, Casual",
    "Care: Machine washable"
  ]
},

"Sandles": {
  price: "$14.00",
  image: "images/f1.4.jpg",
  colors: {
    Green: "images/f1.4.jpg",
    Blue: "images/f10.1.jpg"
  },
  aiSuggestions: [
    { title: "Floral Shirt", image: "images/ai.jpg" },
    { title: "Striped Trousers", image: "images/f9.2.jpg" }
  ],
  details: [
    "Type: Open-toe flat sandals",
    "Material: Soft faux leather",
    "Straps: Adjustable buckles",
    "Sole: Anti-slip rubber base",
    "Weather Fit: Summer wear",
    "Occasion: Beach, Casual",
    "Comfort: Cushioned footbed",
    "Care: Wipe with damp cloth"
  ]
},

"Hat": {
  price: "$7.99",
  image: "images/2.2.jpg",
  colors: {
    Brown: "images/2.2.jpg",
    Black: "images/n1.1.jpg"
  },
  aiSuggestions: [
    { title: "Shorts", image: "images/f1.3.jpg" },
    { title: "Summer Dress", image: "images/2.0.jpg" }
  ],
  details: [
    "Style: Wide-brim sun hat",
    "Material: Straw blend",
    "Band: Ribbon accent",
    "Fit: One size fits most",
    "Occasion: Outdoor, Summer",
    "Protection: UV sun-blocking",
    "Care: Spot clean only"
  ]
},
"Jacket": {
  price: "$52.99",
  image: "images/n2.jpg",
  colors: {
    Brown: "images/n2.jpg",
    Light: "images/n2.1.jpg"
  },
  aiSuggestions: [
    { title: "T-Shirt", image: "images/3.1.jpg" },
    { title: "Branded Watch", image: "images/n7.1.webp" }
  ],
  details: [
    "Style: Casual bomber jacket",
    "Fabric: Windproof polyester blend",
    "Lining: Soft inner mesh lining",
    "Closure: Front zipper",
    "Weather Fit: Fall/Winter",
    "Fit: Slim fit with ribbed hems",
    "Pockets: Side & chest zip pockets",
    "Occasion: Casual, Outdoor",
    "Care: Hand wash recommended"
  ]
},

"Smart Watch": {
  price: "$28.99",
  image: "images/n3.webp",
  colors: {
    Black: "images/n3.webp",
    White: "images/n3.1.webp",
    Golden: "images/n3.2.webp"
  },
  aiSuggestions: [
    { title: "High Heels", image: "images/n5.1.webp" },
    { title: "Jewelery", image: "images/n8.jpg" }
  ],
  details: [
    "Type: Touchscreen smart watch",
    "Functions: Heart rate, Steps, Calls",
    "Battery: 7-day standby",
    "Display: 1.3-inch HD color screen",
    "Connectivity: Bluetooth 5.0",
    "Compatibility: Android & iOS",
    "Strap: Silicone, adjustable",
    "Waterproof: IP67 rated",
    "Charging: Magnetic USB cable"
  ]
},

"Printed Shirt": {
  price: "$18.99",
  image: "images/n4.jpg",
  colors: {
    Blue: "images/n4.jpg",
    White: "images/n4.1.jpg"
  },
  aiSuggestions: [
    { title: "Shorts", image: "images/f1.3.jpg" },
    { title: "Hat", image: "images/n1.1.jpg" }
  ],
  details: [
    "Style: Casual all-over print shirt",
    "Fabric: Lightweight rayon-cotton",
    "Fit: Regular fit with curved hem",
    "Sleeve: Short sleeves",
    "Occasion: Beach, Vacation, Casual",
    "Neck: Spread collar",
    "Weather Fit: Spring & Summer",
    "Care: Cold machine wash"
  ]
},

"High Heels": {
  price: "$38.99",
  image: "images/n5.webp",
  colors: {
    Pink: "images/n5.webp",
    Blue: "images/n5.1.webp"
  },
  aiSuggestions: [
    { title: "Black Flared Skirt", image: "images/5.1.jpg" },
    { title: "Blazer", image: "images/c2.jpg" }
  ],
  details: [
    "Style: Classic pointed-toe heels",
    "Heel Height: 3.5 inches",
    "Material: Faux suede",
    "Fit: True to size",
    "Occasion: Party, Formal, Evening",
    "Sole: Anti-slip rubber",
    "Closure: Slip-on design",
    "Comfort: Light padded insole"
  ]
},

"Stylish Shoe": {
  price: "$30.99",
  image: "images/n6.webp",
  colors: {
    Black: "images/n6.webp",
    Pink: "images/n6.1.webp"
  },
  aiSuggestions: [
    { title: "Blouse", image: "images/c1.jpg" },
    { title: "Jewelery", image: "images/n8.jpg" }
  ],
  details: [
    "Style: Modern slip-on sneakers",
    "Upper: Breathable mesh",
    "Sole: Lightweight EVA",
    "Closure: Elastic band support",
    "Occasion: Casual, Travel, Walking",
    "Fit: Flexible and snug",
    "Care: Hand wash only"
  ]
},

"Branded Watch": {
  price: "$30.99",
  image: "images/n7.webp",
  colors: {
    Golden: "images/n7.webp",
    Black: "images/n7.1.webp"
  },
  aiSuggestions: [
    { title: "Jacket", image: "images/n2.jpg" },
    { title: "Oxford Shoes", image: "images/f6.jpg" }
  ],
  details: [
    "Type: Luxury analog wristwatch",
    "Strap: Metal mesh adjustable",
    "Dial: 42mm classic face",
    "Movement: Quartz precision",
    "Occasion: Business, Formal",
    "Water Resistance: 3 ATM",
    "Display: Date included",
    "Care: Wipe with dry cloth"
  ]
},

"Jewellery": {
  price: "$30.99",
  image: "images/n8.jpg",
  colors: {
    Earrings: "images/n8.jpg",
    Necklace: "images/2.3.jpg",
    Ring: "images/6.2.jpg"
  },
  aiSuggestions: [
    { title: "Black Flared Skirt", image: "images/5.1.jpg" },
    { title: "Stylish Shoe", image: "images/n6.1.webp" }
  ],
  details: [
    "Type: Mixed fashion jewellery set",
    "Material: Gold-tone alloy",
    "Includes: Earrings, Necklace, Ring",
    "Occasion: Party, Traditional, Festive",
    "Design: Elegant and minimal",
    "Care: Keep away from water and perfume"
  ]
},

"Stop Watch": {
  price: "$6.99",
  image: "images/n9.jpg",
  colors: {
    Stopwatch: "images/n9.jpg",
    StopWatch_02: "images/n9.1.jpg"
  },
  aiSuggestions: [
    { title: "Hat", image: "images/2.2.jpg" },
    { title: "Pant", image: "images/c3.jpg" }
  ],
  details: [
    "Type: Digital handheld stopwatch",
    "Functions: Timer, Alarm, Clock",
    "Display: LCD with backlight",
    "Battery: CR2032 included",
    "Use: Sports, Training, Fitness",
    "Material: ABS plastic shell",
    "Durability: Shock-resistant"
  ]
},

"Shorts": {
  price: "$12.99",
  image: "images/f.3.jpg",
  colors: {
    Orange: "images/f1.3.jpg",
    Pink: "images/n10.1.jpg"
  },
  aiSuggestions: [
    { title: "T-Shirt", image: "images/3.1.jpg" },
    { title: "Sandles", image: "images/f1.4.jpg" }
  ],
  details: [
    "Style: Casual summer shorts",
    "Fabric: Pure cotton, breathable",
    "Waist: Elastic with drawstring",
    "Length: Mid-thigh",
    "Occasion: Daily, Beach, Lounge",
    "Pockets: Side & back",
    "Weather Fit: Ideal for hot weather",
    "Care: Gentle machine wash"
  ]
}
};

//  Open product modal with dynamic info
function openModal(productName) {
  console.log("Trying to open modal for:", productName);
  console.log("Available products:", Object.keys(productData));

  const data = productData[productName];
  if (!data) {
    alert("❌ Sorry, Out of Stock: " + productName);
    return;
  }
  document.getElementById('modalTitle').innerText = productName;
  document.getElementById('modalPrice').innerText = data.price;
  document.getElementById('calculatedPrice').innerText = `Total: ${data.price}`;

  // Update color selector
  const colorSelector = document.getElementById("colorSelector");
  colorSelector.innerHTML = "";
  for (const color in data.colors) {
    const option = document.createElement("option");
    option.value = data.colors[color];
    option.text = color;
    colorSelector.appendChild(option);
  }

  // Set default modal image
  document.getElementById("modalImage").src = Object.values(data.colors)[0];

  // Update AI suggestions
const aiSuggestionsContainer = document.getElementById("aiSuggestions");
aiSuggestionsContainer.innerHTML = data.aiSuggestions.map(item => `
  <div class="border border-gray-200 shadow-sm rounded-xl p-2 bg-white flex flex-col items-center justify-between">
    <img src="${item.image}" alt="${item.title}" class="h-28 w-auto object-contain rounded mb-2" />
    <p class="text-sm font-medium text-center text-gray-800 mb-2">${item.title}</p>
    <button class="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 
         hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-xs px-3 py-1 rounded-full">
      Shop Now
    </button>
  </div>
`).join("");

  // Update product details
  const detailList = document.getElementById("modalDetails");
  detailList.innerHTML = data.details.map(d => `<li>${d}</li>`).join("");

  document.getElementById('productModal').classList.remove('hidden');
}

//  Add to cart function
function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

//  Toggle AI suggestion visibility with animation
// Toggle AI suggestion visibility with animation - FIXED VERSION
function toggleAISuggestions(button) {
  const card = button.closest(".inline-block"); // Only the clicked product card
  const box = card.querySelector('.suggestion-box'); // Target within this card
  const originalText = button.innerHTML;

  // Check if this box is already visible
  const isAlreadyVisible = !box.classList.contains('hidden');

  // Show loading state
  button.innerHTML = `
    <span class="flex items-center justify-center gap-1">
      <svg class="animate-spin h-4 w-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a10 10 0 100 20v-2a8 8 0 01-8-8z"></path>
      </svg>
      <span>AI is thinking...</span>
    </span>
  `;

  // Hide all other suggestion boxes first (except the one we're toggling)
  document.querySelectorAll('.suggestion-box').forEach(b => {
    if (b !== box) {
      b.classList.add('hidden');
    }
  });

  // After delay, toggle this card's suggestions
  setTimeout(() => {
    if (isAlreadyVisible) {
      box.classList.add('hidden');
      button.innerHTML = originalText;
    } else {
      box.classList.remove('hidden');
      button.innerHTML = originalText;
      
      // Hide again after 15 seconds if still visible
      setTimeout(() => {
        if (!box.classList.contains('hidden')) {
          box.classList.add('hidden');
        }
      }, 6000);
    }
  }, 5000);
}

//  Total price calculator
function updateTotalPrice() {
  const quantity = parseInt(document.getElementById('quantityInput').value || 1);
  const priceText = document.getElementById('modalPrice').innerText.replace('$', '');
  const total = (parseFloat(priceText) * quantity).toFixed(2);
  document.getElementById('calculatedPrice').innerText = `Total: $${total}`;
}

document.getElementById("quantityInput").addEventListener('input', updateTotalPrice);
document.getElementById("quantityInput").addEventListener('change', updateTotalPrice);

//  Close modal
function closeModal() {
  document.getElementById('productModal').classList.add('hidden');
}

//  Handle Add to Cart from modal
function handleAddToCart() {
  alert('✅ Item added to cart!');
}

//  Scroll to recommended product
function goToRecommended(productId) {
  const product = document.getElementById(productId);
  if (product) {
    product.scrollIntoView({ behavior: 'smooth' });
    product.classList.add('ring', 'ring-indigo-500');
    setTimeout(() => product.classList.remove('ring', 'ring-indigo-500'), 1500);
  } else {
    alert('Product not found!');
  }
}

//  Change product image by color selection
function changeProductColor() {
  const colorSelector = document.getElementById("colorSelector");
  const selectedImage = colorSelector.value;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = selectedImage;
}

//  Scroll buttons functionality
document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById("productGrid");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  function updateScrollButtons() {
    scrollLeftBtn.classList.toggle("hidden", productGrid.scrollLeft === 0);
    scrollRightBtn.classList.toggle(
      "hidden",
      productGrid.scrollLeft >= productGrid.scrollWidth - productGrid.clientWidth - 5
    );
  }

  scrollLeftBtn.addEventListener("click", () => {
    productGrid.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(updateScrollButtons, 500);
  });

  scrollRightBtn.addEventListener("click", () => {
    productGrid.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(updateScrollButtons, 500);
  });

  productGrid.addEventListener("scroll", updateScrollButtons);
  updateScrollButtons();
});
