import Ubigeo from './peru.json'

export const getDepartamentos = async () => {

    const ubigeos = Ubigeo;
    const departamentos = []

    ubigeos.forEach(element => {
        //console.log(element.provincia)    

        if (element.provincia == '00' && element.distrito == '00') {
            departamentos.push(element);
        }
    });

    return departamentos
}