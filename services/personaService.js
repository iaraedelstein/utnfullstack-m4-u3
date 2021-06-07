var personaModel = require('../service/persona');

module.exports = {
    guardarUnaPersona = async(persona) => {
        const id = await personaModel.guardarUnaPersona(persona);
        persona.id = id;
        return persona;
    }
}