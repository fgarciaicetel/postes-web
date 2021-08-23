import './database'
import Departamento from "../models/Departamento";
import Provincia from '../models/Provincia';
import Distrito from '../models/Distrito';

export const createDepartamentos = async () => {

    try {
        const count = await Departamento.estimatedDocumentCount()

        if (count > 0) return;

        const departamentos = [
            { 'name': 'Lima Metropolitana', 'codigo': '1' },
            { 'name': 'Lima(Región)', 'codigo': '2' },
            { 'name': 'Apurímac', 'codigo': '3' },
            { 'name': 'Arequipa', 'codigo': '4' },
            { 'name': 'Ayacucho', 'codigo': '5' },
            { 'name': 'Cajamarca', 'codigo': '6' },
            { 'name': 'Callao', 'codigo': '7' },
            { 'name': 'Cusco', 'codigo': '8' },
            { 'name': 'Huancavelica', 'codigo': '9' },
            { 'name': 'Huánuco', 'codigo': '10' },
            { 'name': 'Ica', 'codigo': '11' },
            { 'name': 'Junín', 'codigo': '12' },
            { 'name': 'La Libertad', 'codigo': '13' },
            { 'name': 'Lambayeque', 'codigo': '', 'codigo': '14' },
            { 'name': 'Amazonas	', 'codigo': '15' },
            { 'name': 'Ancash', 'codigo': '16' },
            { 'name': 'Loreto', 'codigo': '17' },
            { 'name': 'Madre de Dios', 'codigo': '18' },
            { 'name': 'Moquegua', 'codigo': '19' },
            { 'name': 'Pasco', 'codigo': '20' },
            { 'name': 'Piura', 'codigo': '21' },
            { 'name': 'Puno', 'codigo': '22' },
            { 'name': 'San Martín', 'codigo': '23' },
            { 'name': 'Tacna', 'codigo': '24' },
            { 'name': 'Tumbes', 'codigo': '25' },
            { 'name': 'Ucayali', 'codigo': '26' }
        ]

        departamentos.forEach((element) => {
            new Departamento({ name: element.name, codigo: element.codigo }).save()
        })

        console.log("importando departamentos...")

    } catch (error) {
        console.error(error)
    }
    
}

export const createProvincias = async () => {

    try {
        const count = await Provincia.estimatedDocumentCount()

        if (count > 0) return;

        const provincias = [
            { 'name': 'Lima', 'codigo': '1', 'departamento' : '2'},
            { 'name': 'Callao', 'codigo': '7', 'departamento' : '7'},
        ]

        provincias.forEach((element) => {
            new Provincia({ 
                name: element.name,
                codigo: element.codigo,
                departamento_codigo : element.departamento }).save()
        })

        console.log("importando provincias...")

    } catch (error) {
        console.error(error)
    }
    
}

export const createDistritos = async () => {

    try {
        const count = await Distrito.estimatedDocumentCount()

        if (count > 0) return;

        const distritos = [
            ['1', 'Callao', 'LIMA PROVINCIAS 01', '7', '7'],
            ['2', 'Bellavista', 'LIMA PROVINCIAS 02', '7', '7'],
            ['3', 'Carmen de La Legua-Reynoso', 'LIMA PROVINCIAS 03', '7', '7'],
            ['4', 'La Perla', 'LIMA PROVINCIAS 04', '7', '7'],
            ['5', 'La Punta', 'LIMA PROVINCIAS 05', '7', '7'],
            ['6', 'Ventanilla', 'LIMA PROVINCIAS 06', '7', '7'],
            ['7', 'Lima', 'LIMA 01', '2', '1'],
            ['8', 'Ancón', 'LIMA 02', '2', '1'],
            ['9', 'Ate', 'LIMA 03', '2', '1'],
            ['10', 'Barranco', 'LIMA 04', '2', '1'],
            ['11', 'Breña', 'LIMA 05', '2', '1'],
            ['12', 'Carabayllo', 'LIMA 06', '2', '1'],
            ['13', 'Comas', 'LIMA 07', '2', '1'],
            ['14', 'Chaclacayo', 'LIMA 08', '2', '1'],
            ['15', 'Chorrillos', 'LIMA 09', '2', '1'],
            ['16', 'El Agustino', 'LIMA 10', '2', '1'],
            ['17', 'Jesús María', 'LIMA 11', '2', '1'],
            ['18', 'La Molina', 'LIMA 12', '2', '1'],
            ['19', 'La Victoria', 'LIMA 13', '2', '1'],
            ['20', 'Lince', 'LIMA 14', '2', '1'],
            ['21', 'Lurigancho-Chosica', 'LIMA 15', '2', '1'],
            ['22', 'Lurín', 'LIMA 16', '2', '1'],
            ['23', 'Magdalena del Mar', 'LIMA 17', '2', '1'],
            ['24', 'Miraflores', 'LIMA 18', '2', '1'],
            ['25', 'Pachacámac', 'LIMA 19', '2', '1'],
            ['26', 'Pucusana', 'LIMA 20', '2', '1'],
            ['27', 'Pueblo Libre', 'LIMA 21', '2', '1'],
            ['28', 'Puente Piedra', 'LIMA 22', '2', '1'],
            ['29', 'Punta Negra', 'LIMA 23', '2', '1'],
            ['30', 'Punta Hermosa', 'LIMA 24', '2', '1'],
            ['31', 'Rímac', 'LIMA 25', '2', '1'],
            ['32', 'San Bartolo', 'LIMA 26', '2', '1'],
            ['33', 'San Isidro', 'LIMA 27', '2', '1'],
            ['34', 'Independencia', 'LIMA 28', '2', '1'],
            ['35', 'San Juan de Miraflores', 'LIMA 29', '2', '1'],
            ['36', 'San Luis', 'LIMA 30', '2', '1'],
            ['37', 'San Martín de Porres', 'LIMA 31', '2', '1'],
            ['38', 'San Miguel', 'LIMA 32', '2', '1'],
            ['39', 'Santiago de Surco', 'LIMA 33', '2', '1'],
            ['40', 'Surquillo', 'LIMA 34', '2', '1'],
            ['41', 'Villa María del Triunfo', 'LIMA 35', '2', '1'],
            ['42', 'San Juan de Lurigancho', 'LIMA 36', '2', '1'],
            ['43', 'Santa María del Mar', 'LIMA 37', '2', '1'],
            ['44', 'Santa Rosa', 'LIMA 38', '2', '1'],
            ['45', 'Los Olivos', 'LIMA 39', '2', '1'],
            ['46', 'Cieneguilla', 'LIMA 40', '2', '1'],
            ['47', 'San Borja', 'LIMA 41', '2', '1'],
            ['48', 'Villa El Salvador', 'LIMA 42', '2', '1'],
            ['49', 'Santa Anita', 'LIMA 43', '2', '1']
        ]

        distritos.forEach((element) => {
            new Distrito({
                name: element[1],
                codigo: element[0],
                departamento_codigo : element[3],
                provincia_codigo : element[4],
                codigo_postal : element[2]
              }).save()
        })

        console.log("importando distritos...")

    } catch (error) {
        console.error(error)
    }
    
}