onload = () => {
    nome.onblur = () => {
        if(nome.value == '') {
            nome.style.backgroundColor = '#F88';   

        }
        else {
            nome.style.backgroundColor = '#FFF';
            btnEnviar.disabled = false;            
    }};
    tel.onblur = () => {
        if(tel.value == '') {
            tel.style.backgroundColor = '#F88';                   
        }
        else {
            tel.style.backgroundColor = '#FFF';
            btnEnviar.disabled = false;
    }};
    date.onblur = () => {
        if(date.value == '') {
            date.style.backgroundColor = '#F88';                   
        }
        else {
            date.style.backgroundColor = '#FFF';
            btnEnviar.disabled = false;
    }};
    dateNas.onblur = () => {
        if(dateNas.value == '') {
            dateNas.style.backgroundColor = '#F88';                   
        }
        else {
            dateNas.style.backgroundColor = '#FFF';
            btnEnviar.disabled = false;
    }};
    const handleSubmit = (event) => {
        event.preventDefault();

        const NomeCliente = document.querySelector('input[name=nome]').value;
        const Telefone = document.querySelector('input[name=tel]').value;
        const Data = document.getElementById('date').value;
        const DataNascimento = document.getElementById('dateNas').value;
        //Observado que a declaração da variavel deve estar dentro da função e sobre a consulta no DOM pode usar o ID normalmente

        fetch('https://api.sheetmonkey.io/form/vb44GDNaPbaYwZHvEbHMHU', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ NomeCliente , Telefone , Data , DataNascimento}),
        });

        mensagem.innerHTML = `Voce enviou o formulario, aguarde a confirmação do agendamento por Whatsaap!`;
        agendamento.style.display = 'none';
    }

    document.getElementById('agendamento').addEventListener('submit', handleSubmit);
};
