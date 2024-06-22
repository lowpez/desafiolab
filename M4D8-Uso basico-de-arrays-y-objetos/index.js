let listadoRadiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    }
]

let listadoTraumatologia = [
    {
        hora: '08:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    }
]

let listadoDental = [
    {
        hora: '08:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    }
]

let primeraAtencionRadiologia = listadoRadiologia[0];
let ultimaAtencionRadiologia = listadoRadiologia[listadoRadiologia.length - 1];
document.getElementById('primero-ultimo-radiologia').innerHTML = `
    Primera atención: ${primeraAtencionRadiologia.paciente} - ${primeraAtencionRadiologia.prevision} | 
    Última atención: ${ultimaAtencionRadiologia.paciente} - ${ultimaAtencionRadiologia.prevision}`;

let primeraAtencionTraumatologia = listadoTraumatologia[0];
let ultimaAtencionTraumatologia = listadoTraumatologia[listadoTraumatologia.length - 1];
document.getElementById('primero-ultimo-traumatologia').innerHTML = `
    Primera atención: ${primeraAtencionTraumatologia.paciente} - ${primeraAtencionTraumatologia.prevision} | 
    Última atención: ${ultimaAtencionTraumatologia.paciente} - ${ultimaAtencionTraumatologia.prevision}`;

let primeraAtencionDental = listadoDental[0];
let ultimaAtencionDental = listadoDental[listadoDental.length - 1];
document.getElementById('primero-ultimo-dental').innerHTML = `
    Primera atención: ${primeraAtencionDental.paciente} - ${primeraAtencionDental.prevision} | 
    Última atención: ${ultimaAtencionDental.paciente} - ${ultimaAtencionDental.prevision}`;

let tablaRadiologia = '<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';

for (let consulta of listadoRadiologia) {
    tablaRadiologia += `
        <tr><td>${consulta.hora}</td><td>${consulta.especialista}</td><td>${consulta.paciente}</td><td>${consulta.rut}</td><td>${consulta.prevision}</td></tr>`
}

document.getElementById('radiologia').innerHTML = tablaRadiologia;

let tablaTraumatologia = '<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';

for (let consulta of listadoTraumatologia) {
    tablaTraumatologia += `
        <tr><td>${consulta.hora}</td><td>${consulta.especialista}</td><td>${consulta.paciente}</td><td>${consulta.rut}</td><td>${consulta.prevision}</td></tr>`
}

document.getElementById('traumatologia').innerHTML = tablaTraumatologia;

let tablaDental = '<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';

for (let consulta of listadoDental) {
    tablaDental += `
        <tr><td>${consulta.hora}</td><td>${consulta.especialista}</td><td>${consulta.paciente}</td><td>${consulta.rut}</td><td>${consulta.prevision}</td></tr>`
}

document.getElementById('dental').innerHTML = tablaDental;

console.log(listadoRadiologia);
console.log(listadoTraumatologia);
console.log(listadoDental);