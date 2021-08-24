import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];
// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );
const heroesPromesas = heroesIds.map( buscarHeroe );

export const obtenerHeroesArr = async() => {


    return await Promise.all(heroesIds.map( buscarHeroe ));

    // const heroesArr = [];

    // for( const id of heroesIds ){
    //     heroesArr.push( buscarHeroe(id));
    //     // const heroe = await buscarHeroe(id);
    //     // heroesArr.push(heroe);
    // }

    // // setTimeout(() => {
    // //     console.log('Obtener Heroe');
    // //     console.table( heroesArr );
    // // }, 1000);

    // return await Promise.all( heroesArr );

};

export const obtenerHeroeAwait = async( id ) => {

    try {

        const heroe = await buscarHeroeAsync( id );        
        return heroe;

    } catch (error) {
        console.log('CATCH!!!');
        // throw error;
        return {
            nombre: 'Sin nombre',
            poder:  'Sin poder'
        }
    }


};

export const heroesCiclo = async() => {
    
    console.time('HeroesCiclo');

    // heroesPromesas.forEach( async(p) => console.log (await p));


    for await( const heroe of heroesPromesas ) {
        console.log(heroe);
    }


    // const heroes = await Promise.all( heroesPromesas );
    // // console.log( heroes );
    // heroes.forEach( heroe => console.log(heroe) );

    console.timeEnd('HeroesCiclo');
};

export const heroeIfAwait = async( id ) => {
    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos!');
    } else{
        console.log('Naaaa');
    }
}