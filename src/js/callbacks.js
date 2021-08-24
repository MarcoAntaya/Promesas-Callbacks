const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica a picaduras de arañas'
    },
}

export const buscarHeroe = (id, callback ) => {


    const heroe = heroes[id];

    if ( heroe ){
        callback(null, heroe );
    } else {

        callback(`No existe un heroe con el id : ${ id }`);
    }

    // callback( heroe );
}