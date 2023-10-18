export const formatearFecha = (fechaTmp: any) => {
    const nuevaFecha = new Date(fechaTmp);
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
};
