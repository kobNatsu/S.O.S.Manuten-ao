const whatsappNumber = "24992039063"; // Troque pelo WhatsApp real da loja.
const message = "Olá! Vim pelo site da S.O.S Manutenção e gostaria de um orçamento.";
document.querySelectorAll("[data-whatsapp]").forEach(a=>{
  a.href = "https://wa.me/"+whatsappNumber+"?text="+encodeURIComponent(message);
});
document.getElementById("year").textContent = new Date().getFullYear();
const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";});
