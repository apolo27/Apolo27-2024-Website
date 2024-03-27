import database from "./firebase";

export const fetchAllData = async () => {
    const snapshot = database.ref('/temperatura-humedad')
    let lastkey;

    //Obtener la última clave
    await snapshot.limitToLast(1).once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            lastkey = childSnapshot.key;
            
        });
    });

    //Obtener los datos
    const data = await snapshot.child(lastkey).once('value')
    return data.val();

}

export const fetchLastFiveData = async () => {
    const snapshot = database.ref('/temperatura-humedad')
    let lastFiveKeys = [];

    //Obtener los ultimos cinco registros
    await snapshot.limitToLast(5).once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();

            if (data.velocidadAngular2){
                lastFiveKeys.push(data.velocidadAngular2);
            }
        });
    });

    return lastFiveKeys;

}
    
