const explorar = async (sock, sender) => {
    const mensajes = [
        `@${sender.split('@')[0]} \n\nEncontraste un cofre misterioso. 🏴‍☠️\n\n`,
        `@${sender.split('@')[0]} \n\n*Descubriste una antigua ruina.* 🏛️\n\n`,
        `@${sender.split('@')[0]} \n\n*Te encontraste con un viajero perdido.* 🧳\n\n`,
        `@${sender.split('@')[0]} \n\n*Un mapa antiguo aparece en tu camino.* 🗺️\n\n`,
        `@${sender.split('@')[0]} \n\n*Un portal en el suelo comienza a brillar.* ✨\n\n`,
        `@${sender.split('@')[0]} \n\n*¡SABÍAS QUE?* 💡\n\nLa 1# computadora era una calculadora de acción binaria, que leía instrucciones de cintas perforadas. Sus funciones eran limitadas, pero representó un gran avance para la época. La computadora fue destruida tras el bombardeo a Berlín en 1943, pero hoy en día se puede ver una réplica de aquel equipo en el Museo de Tecnología que hay en esa ciudad. 🖥️\n\n`,
        `@${sender.split('@')[0]} \n\n*La pc más poderosa del mundo* 💻\n\n`
    ];

    const imagenes = [
        'https://i.postimg.cc/rsbM6c9y/TES.jpg',
        'https://i.postimg.cc/5yjbkjLk/RUI.jpg',
        'https://i.postimg.cc/0QV9f7Mw/VI.jpg',
        'https://i.postimg.cc/Sxx36HLD/ANTIGUO.jpg',
        'https://i.postimg.cc/9Fpsqc9D/PORTAL.jpg',
        'https://i.postimg.cc/MGy7vpc4/CPUM.jpg',
        'https://i.postimg.cc/wvghJYLB/pcpt.jpg'
    ];

    // Seleccionar un mensaje y una imagen aleatoria
    const index = Math.floor(Math.random() * mensajes.length);
    const result = {
        text: mensajes[index],
        image: imagenes[index]
    };

    // Log dentro de la función para depurar
    console.log(`Texto: ${result.text}, Imagen: ${result.image}`);

    return result;
};

module.exports = explorar;
