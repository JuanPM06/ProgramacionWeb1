function leer() {
    // Obtener valores
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const carrera = document.getElementById('carrera').value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value || 'No seleccionado';
    const casilla = document.getElementById('casilla').checked ? 'Aceptado' : 'No aceptado';

    // Mostrar resultados
    const resultado = `
        Usuario: ${user}<br>
        Password: ${pass}<br>
        Carrera: ${carrera}<br>
        Género: ${genero}<br>
        Términos: ${casilla}
    `;
    
    document.getElementById('resultado').innerHTML = resultado;
}