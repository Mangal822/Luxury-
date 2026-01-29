const data = JSON.parse(localStorage.getItem("listings")) || [];
const grid = document.querySelector(".grid");

if (grid) {
  data.filter(d => d.active).forEach(d => {
    grid.innerHTML += `
      <div class="card">
        <h3>${d.title}</h3>
        <p>${d.type} · ${d.location || "Private Location"}</p>
        <button onclick="openInquiry('${d.type}')">
          Request Private Viewing
        </button>
      </div>
    `;
  });
}
