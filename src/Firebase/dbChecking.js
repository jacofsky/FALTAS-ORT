import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import firebaseApp from './config.js';

const db = getFirestore(firebaseApp);
const gamesRef = collection(db, 'Cursos');

const getGameById = async (gameId) => {
    const gameRef = doc(gamesRef, gameId);
    const gameSnap = await getDoc(gameRef);
    return gameSnap.data();
};

console.log(process.env.APIKEY);

const MATERIAS = [
    "Lengua",
    "Matemática",
    "Biología",
    "Hebreo",
    "Ética",
    "Educación Judía",
    "Educación Física",
    "Inglés",
    "Tecnología",
    "Geografía",
    "Historia",
    "Arte",
    "Natación",
]

getGameById('Almagro').then(cursos => {
    for (const [key, value] of Object.entries(cursos)) {
        if (!value.Lunes) {
            console.log(`[ERROR] ${key} NO TIENE LUNES`);
        }
        if (!value.Martes) {
            console.log(`[ERROR] ${key} NO TIENE MARTES`);
        }
        if (!value.Miércoles) {
            console.log(`[ERROR] ${key} NO TIENE MIERCOLES`);
        }
        if (!value.Jueves) {
            console.log(`[ERROR] ${key} NO TIENE JUEVES`);
        }
        if (!value.Viernes) {
            console.log(`[ERROR] ${key} NO TIENE VIERNES`);
        }

        for (const [dia, materias] of Object.entries(value)) {
            materias.forEach(materia => {
                if (!MATERIAS.includes(materia)) {
                    console.log(`[ERROR] ${key} ${dia} NO TIENE ${materia}`);
                }
            })
        }
    }
    console.log('[OK] Todos los cursos tienen todos los dias');
});

// exit();