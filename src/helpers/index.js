export const generarId = () => {
    const random = Math.random().toString(36).slice(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}


export const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('es-NI', {
        style: 'currency',
        currency: 'NIO'
    })
}


export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);

    const opcionesFecha = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    const fechaFormateada = fechaNueva.toLocaleDateString('es-ES', opcionesFecha);

    const opcionesHora = {
        hour: '2-digit',
        minute: '2-digit',
    };

    const horaFormateada = fechaNueva.toLocaleTimeString('es-ES', opcionesHora);

    return `${fechaFormateada} - ${horaFormateada}hs`;
};
