const tg = window.Telegram.WebApp;
tg.expand();

async function openCase() {
  try {
    const res = await fetch("https://case-backend-production-b3f2.up.railway.app/api/open-case", {
      method: "POST"
    });

    const data = await res.json();

    document.getElementById("result").innerHTML =
      `🎉 Выпало: ${data.item.name} (${data.item.value})`;
      
  } catch (err) {
    document.getElementById("result").innerHTML =
      "❌ Ошибка соединения с сервером";
  }
}
