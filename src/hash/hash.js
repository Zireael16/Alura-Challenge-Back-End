// const { createHash } = require('crypto');

// const criaHash = (senha) => {
//     return createHash('sha256').update(senha).digest('hex');
// }

// console.log(criaHash('123456'));

// class Usuario {
//     constructor(login, senha) {
//         this.login = login;
//         this.hash = criaHash(senha);
//     }

//     autenticaUsuario(login , senha) {
//         if (login === this.login && criaHash(senha) === this.hash) {
//             return true;
//         } else {
            
//         }
//     }
// }