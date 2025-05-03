function mostrarConfirmacion() {
    const confirmacion = confirm("¿Estás seguro de continuar?");
    if (confirmacion) {
      alert("Has confirmado.");
    } else {
      alert("Has cancelado.");
    }
  }