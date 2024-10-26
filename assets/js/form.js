async function registerUser(name, email, telefono, password) {
    try {
        const response = await fetch('server/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&telefono=${encodeURIComponent(telefono)}&password=${encodeURIComponent(password)}`
        });

        const text = await response.text();
        console.log("Response Text:", text); // Ver respuesta en la consola
        const result = JSON.parse(text);

        if (result.success) {
            alert("Registro exitoso");
        } else {
            alert("Error en el registro: " + result.message);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert("Error en la solicitud: " + error);
    }
}

document.getElementById("register-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;

    await registerUser(name, email, telefono, password);
});
