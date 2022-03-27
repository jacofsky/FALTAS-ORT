import { getFirestore, collection, doc, getDoc } from 'firebase/firestore'
import firebaseApp from './config'

const db = getFirestore(firebaseApp)
const gamesRef = collection(db, 'Cursos')

const getGameById = async (gameId) => {
    const gameRef = doc(gamesRef, gameId)
    const gameSnap = await getDoc(gameRef)
    return gameSnap.data()
}

console.log(process.env.APIKEY)
//* VOY POR 4ID

const MATERIAS = [
    'Lengua',
    'Matemática',
    'Biología',
    'Hebreo',
    'Ética',
    'Educación Judía',
    'Educación Física',
    'Inglés',
    'Tecnología',
    'Geografía',
    'Historia',
    'Arte',
    'Natación',
    'Imagen',
    'SSI',
    'TI',
    'Programación',
    'Fuentes',
    'Historia Judía',
    'Física',
    'Economía'
]

getGameById('Almagro').then((cursos) => {
    Object.entries(cursos).forEach(([key, value]) => {
        if (!value.Lunes) {
            console.log(`[ERROR] ${key} NO TIENE LUNES`)
        }
        if (!value.Martes) {
            console.log(`[ERROR] ${key} NO TIENE MARTES`)
        }
        if (!value.Miércoles) {
            console.log(`[ERROR] ${key} NO TIENE MIERCOLES`)
        }
        if (!value.Jueves) {
            console.log(`[ERROR] ${key} NO TIENE JUEVES`)
        }
        if (!value.Viernes) {
            console.log(`[ERROR] ${key} NO TIENE VIERNES`)
        }

        Object.entries(value).forEach(([dia, materias]) => {
            materias.forEach((materia) => {
                if (!MATERIAS.includes(materia)) {
                    console.log(`[ERROR] ${key} ${dia} NO TIENE ${materia}`)
                }
            })
        })
    })
    console.log('[OK] Todos los cursos tienen todos los dias')

    process.exit(1)
})
