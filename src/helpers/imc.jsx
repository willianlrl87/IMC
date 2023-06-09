export const levels = [
    { title:'Magreza', color: '#96A3AB', icon: 'down', imc:[0, 18.59], yourImc: 0 },
    { title:'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.99], yourImc: 0 },
    { title:'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30.99], yourImc: 0 },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc:[30.1, 99], yourImc: 0 }
];

export const calculateIMC = (height, weight) => {
    const imc = weight / (height * height);

    for(let i in levels){
        console.log(i);
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            levels[i].yourImc = imc;
            return levels[i];
        }
    }
    return null;
}