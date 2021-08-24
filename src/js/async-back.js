// import { promesaLenta, promesaMedia, promesaRapida} from './js/promesas';

// // promesaLenta.then( console.log );
// // promesaMedia.then( console.log );
// // promesaRapida.then( console.log );

// Promise.race( [promesaLenta, promesaMedia, promesaRapida] )
//             .then( console.log )
//             .catch( console.warn );

import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

buscarHeroe( 'capi2' )
    .then( console.log )
    .catch( console.warn);

buscarHeroeAsync( 'iron2' )
    .then( console.log )
    .catch( console.warn );