var personaService = require('../services/personaService');

module.exports = {
    guardarUnaPersona = async(persona) => {
        const persona = await personaService.guardarUnaPersona(persona);
        return persona;
    }
}