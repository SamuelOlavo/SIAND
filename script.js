onload = () => {    
    nome.onblur = () => {
        if(nome.value == '') {
            nome.style.backgroundColor = '#F88';   
        }
        else {
            nome.style.backgroundColor = '#FFF';  
                                
    }   if (nome.value != '' && tel.value != '' && dateNas.value != '' && date.value != '' && hora.value != '' && date.value > today ) btnEnviar.disabled = false;
        else btnEnviar.disabled = true;
    };
    dateNas.onblur = () => {
        if(dateNas.value == '') {
            dateNas.style.backgroundColor = '#F88';                   
        }
        else {
            dateNas.style.backgroundColor = '#FFF';
    }  if (nome.value != '' && tel.value != '' && dateNas.value != '' && date.value != '' && hora.value != '' && date.value > today) btnEnviar.disabled = false;
    else btnEnviar.disabled = true;
};
    tel.onblur = () => {
        if(tel.value == '') {
            tel.style.backgroundColor = '#F88';                   
        }
        else {
            tel.style.backgroundColor = '#FFF';
    }   if (nome.value != '' && tel.value != '' && dateNas.value != '' && date.value != '' && hora.value != '' && date.value > today) btnEnviar.disabled = false;
    else btnEnviar.disabled = true;
};  
    // Data e Hora do Agendamento
    var today = new Date().toISOString().split('T')[0];                    
    console.log (today);
    date.onblur = () => {
        if(date.value == '' || date.value < today) {
            date.style.backgroundColor = '#F88';
            btnEnviar.disabled = true;                                       
        }
        else {
            date.style.backgroundColor = '#FFF';            
        }  if (nome.value != '' && tel.value != '' && dateNas.value != '' && date.value != '' && hora.value != '' && date.value > today ) btnEnviar.disabled = false;
        else btnEnviar.disabled = true;
    }; 
    
    hora.onblur = () => {
        if( hora.value < '09:00' || hora.value > '18:00')  {
            hora.style.backgroundColor = '#F88';
        } else {
            hora.style.backgroundColor = '#FFF';
        } if (nome.value != '' && tel.value != '' && dateNas.value != '' && date.value != '' && hora.value != '' && date.value > today ) btnEnviar.disabled = false;
        else btnEnviar.disabled = true;
    };
       

    const handleSubmit = (event) => {
        event.preventDefault();

        const NomeCliente = document.querySelector('input[name=nome]').value;
        const Telefone = document.querySelector('input[name=tel]').value;
        const Data = document.getElementById('date').value;
        const DataNascimento = document.getElementById('dateNas').value;  
        const Hora = document.getElementById('hora').value;
        //Observado que a declaração da variavel deve estar dentro da função e sobre a consulta no DOM pode usar o ID normalmente

        fetch('https://api.sheetmonkey.io/form/vb44GDNaPbaYwZHvEbHMHU', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ NomeCliente , DataNascimento, Telefone , Data ,  Hora}),
        });               
        
        document.querySelector('.loader').style.display = 'block';
        let timeout = window.setTimeout(function() {            
            document.querySelector('.loader').style.display = 'none';
            document.getElementById('agendamento').reset();
          }, 5000);                
    }
    document.getElementById('agendamento').addEventListener('submit', handleSubmit);
};
