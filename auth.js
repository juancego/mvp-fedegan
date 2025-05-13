document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Redirige al dashboard si el login es exitoso
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        // Muestra error si las credenciales son incorrectas
        document.getElementById("loginError").textContent =
          "Credenciales inválidas o usuario no registrado.";
        console.error(error);
      });
  });
  