const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    try {
        const res = await fetch("/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const dataRes = await res.json();
        result.textContent = dataRes.success
            ? "Отправлено"
            : "Ошибка";
    } catch (err) {
        result.textContent = "Ошибка";
    }
});