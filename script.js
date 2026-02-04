const user = "sp1aca9fa";
const domain = "gmail.com";
document.getElementById("email-btn").onclick = () => {
  window.location.href = `mailto:${user}@${domain}`;
};

document.getElementById("change-btn").onclick = async () => {
  const response = await fetch("https://api.huemint.com/color", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mode: "transformer",
      num_colors: 5,
      temperature: "1.0",
      num_results: 1,
      adjacency: [
        "0", "50", "50", "50", "50",
        "50", "0", "50", "50", "50",
        "50", "50", "0", "50", "50",
        "50", "50", "50", "0", "50",
        "50", "50", "50", "50", "0"
      ],
      palette: ["-", "-", "-", "-", "-"]
    })
  });

  const data = await response.json();
  const palette = data.results[0].palette;

  document.documentElement.style.setProperty('--bg-color', palette[0]);
  document.documentElement.style.setProperty('--card-color', palette[1]);
  document.documentElement.style.setProperty('--text-color', palette[2]);
  document.documentElement.style.setProperty('--muted-text-color', palette[3]);
  document.documentElement.style.setProperty('--accent-color', palette[4]);
};

// TODO: finish JS code
