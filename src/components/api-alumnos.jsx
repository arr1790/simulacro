import Buscar from '@/components/buscar'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'

async function obteneralumnos(query) {
    const response = await fetch('http://localhost:4000/alumnos')
    const alumnos = await response.json()
    console.log(response)
    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return alumnos.filter(alumno => alumno.nombre.toLowerCase().includes(query))
}


async function eliminarAlumno(formData) {
    'use server'
    const id = formData.get('id')

    await fetch('http://localhost:4000/alumnos/' + id, { method: 'DELETE' })

    revalidatePath('/alumnos-api')
}


async function alumnos({ query }) {
    const alumnos = await obteneralumnos(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Lista de alumnos (API)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {alumnos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((alumno) => (
                        <div key={alumno.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/alumnos-api/${alumno.id}`}>{alumno.nombre}</Link>
                            <div className='flex gap-6'>
                                <form>
                                    <input type="hidden" name='id' value={alumno.id} />
                                    <button formAction={eliminarAlumno} title='ELIMINAR'>❌</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default alumnos



