// Verificar si una cadena es una URL válida
const isUrl = (url) => {
    const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi');
    return regex.test(url);
};

module.exports = { isUrl };
