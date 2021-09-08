import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col mt-xl'>
            <h2 className='font-sans font-semibold text-3xl text-center'>Puedes contactarnos a traves de estos medios</h2>
            <div className='grid grid-cols-2 mb-xl mt-xl'>
                <div className='col-span-1 flex justify-center'>
                    <a className='border border-green-300 rounded p-md text-green-500 font-bold' href="https://api.whatsapp.com/send?phone=541123456789&text=Hola%2C%20me%20gustar%C3%ADa%20consultarte%20acerca%20de%20un%20velero%20que%20hay%20en%20tu%20pagina.">
                        <i class="fab fa-whatsapp text-2xl mr-sm"></i>Chat en Whatsapp
                    </a>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <a className='border border-red-300 rounded p-md text-red-500 font-bold' href="mailto:lucaschiesa84@gmail.com?subject=Te queria hacer una consulta">
                        <i class="far fa-envelope text-2xl mr-sm"></i>Envianos un mail
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;