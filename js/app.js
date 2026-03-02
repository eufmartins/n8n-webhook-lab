const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const webhookBtn = document.getElementById("webhookBtn");
const webhookStatus = document.getElementById("webhookStatus");

// Adicionar tarefa
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove()">❌</button>
  `;

  list.appendChild(li);
  input.value = "";
});

// Simular envio para webhook
webhookBtn.addEventListener("click", async () => {
  webhookStatus.innerText = "Enviando...";

  try {
    const response = await fetch("https://webhook.site/SEU-ENDPOINT-AQUI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        evento: "teste_pr",
        data: new Date(),
        usuario: "Felipe",
      }),
    });

    webhookStatus.innerText = "Webhook enviado com sucesso 🚀";
  } catch (error) {
    webhookStatus.innerText = "Erro ao enviar webhook ❌";
  }
});