import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';

// console.time('await');

// obtenerHeroeAwait('capi2').
//     then( heroe => {
//         console.log( heroe );
//         console.timeEnd('await');
//     }).catch( console.warn );

// obtenerHeoresArr().then(console.table);

heroesCiclo();
heroeIfAwait('iron');
