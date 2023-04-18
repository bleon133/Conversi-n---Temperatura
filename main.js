function convertir() {
  const tempInicial = document.getElementById("tempUser");
  const eleccion = document.getElementsByTagName("input");
  const temp__final = document.getElementById("tempResult");
  const mercurio = document.getElementById("nivelTemp");
  const info = document.getElementsByClassName("info");
  if (isNaN(tempInicial.value)) {
    alert("No es un número.");
  } else {
    let resultado = "-";
    if (eleccion[1].checked == true) {
      resultado = ((tempInicial.value - 32) * 5) / 9;
    } else if (eleccion[2].checked == true) {
      resultado = (tempInicial.value * 9) / 5 + 32;
    } else {
      alert("No ha seleccionado el tipo de conversión.");
    }
    if (resultado >= 100) {
      mercurio.style.height = `100%`;
      mercurio.style.backgroundColor = "red";
    }else if (resultado >= 40 && resultado < 100) {
        mercurio.style.height = `${resultado}%`;
        mercurio.style.backgroundColor = "red";
    }else if (resultado > 0 && resultado < 40) {
        mercurio.style.height = `${resultado}%`;
        mercurio.style.backgroundColor = "blue";
    }    
    else if (resultado <= 0) {
      mercurio.style.height = `0`;
      mercurio.style.backgroundColor = "blue";
    }
    temp__final.textContent = `${resultado}°`;
    info[0].textContent = `${resultado}°`;
    tempInicial.value = "";
  }
}
