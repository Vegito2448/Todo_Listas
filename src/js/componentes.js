import '../css/componentes.css';
export
    const saludar = nombre => {
        console.log('creando etiqueta h1, en el HTML');
        const h1 = document.createElement('h1');
        h1.innerText = `Hola, ${nombre}, comó estas?`;
        document.body.append(h1)
    };