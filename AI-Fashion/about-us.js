document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("joinTeamModal");
  const openBtn = document.getElementById("openJoinModal");
  const closeBtn = document.getElementById("closeJoinModal");
  const roleSelect = document.getElementById("positionSelect");
  const salaryOutput = document.getElementById("salaryOutput");

  // Open modal
  openBtn?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
  });

  // Close modal
  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });

  // Update salary dynamically
  roleSelect?.addEventListener("change", () => {
    const role = roleSelect.value;
    let salary = "";

    switch (role) {
      case "fashion":
        salary = "150,000 - 250,000";
        break;
      case "engineer":
        salary = "200,000 - 350,000";
        break;
      case "designer":
        salary = "130,000 - 220,000";
        break;
      case "marketing":
        salary = "120,000 - 200,000";
        break;
      default:
        salary = "";
    }

    salaryOutput.value = salary ? `${salary} PKR` : "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#joinTeamModal form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); //  prevent page refresh

    alert("🎉 Your application has been submitted successfully!");
    
    // Optionally: reset form and close modal
    form.reset();
    document.getElementById("joinTeamModal").classList.add("hidden");
  });
});

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

