async function Localizar() {
  const cep = document.getElementById('cep').value

  try {
    const resposta = await  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await resposta.json()

    const logra = document.getElementById('Logradouro').innerHTML = data.logradouro
    const bairro = document.getElementById('Bairro').innerHTML = data.bairro
    document.getElementById('Localidade').innerHTML = data.localidade
    
    if(logra == ""){
      document.getElementById('Logradouro').innerHTML = "Não informado"
    }
    if(bairro == ""){
      document.getElementById('Bairro').innerHTML = "Não informado"
    }

    console.log(data)
  } catch (error) {
    alert(error.message)
  }

  
}

async function Temp(){
  
  
    const lat = document.getElementById('latitude').value
    const lon = document.getElementById('longitude').value
  
    
    try {
      const resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`)
      const data = await resposta.json()
      console.log(data)
      
      
      document.getElementById('recebeTemp').value = ` Previsão de tempo de acordo com a região: ${data.current.temperature_2m}°C`
  
      
    } catch (error) {
      alert(error.message)
    }
  
    
  }
