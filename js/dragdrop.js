const pendienteDigitaciones = document.getElementById('pendiente-digitaciones')
const colocadaDigitaciones = document.getElementById('colocada-digitaciones')
//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener

pendienteDigitaciones.addEventListener('dragstart', (e) =>{
   e.dataTransfer.setData('text/plain', e.target.id)
})

pendienteDigitaciones.addEventListener('drag', (e) =>{
    e.target.classList.add('active')
})

pendienteDigitaciones.addEventListener('dragend', (e) =>{
    e.target.classList.remove('active')
})

colocadaDigitaciones.addEventListener('dragover', (e) =>{
    e.preventDefault()
})

colocadaDigitaciones.addEventListener('drop', (e) =>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    colocadaDigitaciones.appendChild(pendienteDigitaciones.removeChild(element))
})