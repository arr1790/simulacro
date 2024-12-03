import Link from "next/link";
import { notFound } from 'next/navigation'


async function obtenerAlumno(id) {
    const response = await fetch('http://localhost:4000/alumnos/' + id)
    if (!response.ok) notFound()
    const alumno = await response.json()  

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return alumno
}


async function AlumnoPage({ params }) {

    const { id } = await params
    const alumno= await obtenerAlumno(id)

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/alumnos-api" className="fixed p-2 bg-orange-300 rounded-full"> &lt;- Volver </Link>
            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                alumno #{alumno.id}
            </h1>
            <div className="flex flex-col gap-10 items-center mt-20 p-10 bg-blue-100 rounded-xl">
                <p className="text-6xl place-self-center">{alumno.nombre}</p>
                <p className="text-2xl place-self-center text-slate-400">{alumno.domicilio}</p>
                <p className="text-7xl place-self-center text-blue-400 *:font-bold">{alumno.fecha_nacimiento.toLocaleDateString().split(',')[0]} </p>
            </div>
        </section>
    );
}

export default AlumnoPage;