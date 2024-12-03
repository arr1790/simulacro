import { revalidatePath } from "next/cache";


async function nuevoalumno(formData) {
    'use server'
    const [nombre, localidad, fecha] = formData.values()

    const response = await fetch('http://localhost:4000/alumnos', {
        method: 'POST',
        body: JSON.stringify({ nombre, localidad, fecha_nacimiento: fecha,  createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/alumnos-api')
}



function alumnoNew() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='localidad'>Localidad:</label>
            <input required id='localidad' name='localidad' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='fecha'>fecha de Nacimiento</label>
            <input required id='fecha' name='fecha' type='date'  className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevoalumno} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar alumno
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default alumnoNew;