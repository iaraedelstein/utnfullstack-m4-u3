var qy = require('../db');

module.exports = {
    guardarUnaPersona: async(persona) => {
        const result = await qy(
            'INSERT INTO persona (nombre, apellido, nickname, edad, email) VALUES(?,?,?,?)', [
                persona.nombre,
                persona.apellido,
                persona.nickname,
                persona.edad,
                persona.email,
            ]
        );
    },
};