const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(user => user.idade);
console.log(idades);

const filter = usuarios.filter(user => user.idade > 18 & user.empresa === 'Rocketseat');
console.log(filter);

const find = usuarios.find(user => user.empresa === 'Google');
console.log(find);

const arr = usuarios.map(user => ({...user, idade : user.idade * 2})).filter(user => user.idade <= 50);
console.log(arr);

   