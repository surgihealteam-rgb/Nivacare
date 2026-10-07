document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("careRequest").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const msg =
`Hi NIVA CARE, I would like to request a care plan.

Name: ${data.get("name")}
Patient: ${data.get("patient") || "Not provided"}
Phone: ${data.get("phone")}
Area: ${data.get("area") || "Not provided"}
Service: ${data.get("service")}
When needed: ${data.get("when")}
Details: ${data.get("notes") || "Not provided"}`;

  window.open("https://wa.me/916300695591?text=" + encodeURIComponent(msg), "_blank");
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",()=>{
    document.body.classList.remove("menu-open");
  });
});
