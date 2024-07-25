const prompt = require('prompt-sync')();

let sessoes = [];

function adicionarSessao(nome, data, hora, sala) {
    var nome = prompt('🎥 Digite o filme que vai brilhar na tela: ')
    var data = prompt('📅 Digite a data desejada: ')
    var hora = prompt('⏰ Digite o horário da sessão: ')
    var sala = prompt('🌟 Digite o número da sala: ')
    sessoes.push({nome, data, hora, sala})
    console.log('\n🎉 Filme adicionado com sucesso! Prepare a pipoca.');
    menu()
}

function listarSessao(){
    if (sessoes.length === 0){
        console.log('\n📪 Nada registrado por aqui!')
    } else {
        console.log('\n📝 Lista de sessões registradas: ')
        sessoes.forEach((sessao, index) => {
            console.log(`
            \n${index + 1}.
    |Nome do filme: ${sessao.nome}
    |Data da sessão: ${sessao.data}
    |Horário da sessão: ${sessao.hora}
    |Sala escolhida: ${sessao.sala}`)
        }) 
    }
    
}

function atulizarSessao() {
    listarSessao()
    let index = parseInt(prompt("\n🍿 Selecione uma das aventuras cinematográficas: "))
    if (sessoes.length === 0) {
        console.log('\n📪 Nada registrado por aqui!')
        menu()
    } else if (index > 0 && index <= sessoes.length){
        sessoes[index-1].nome = prompt("📽️ Digite o novo filme: ")
        sessoes[index-1].data = prompt("🗓️ Digite a nova data: ")
        sessoes[index-1].hora = prompt("⏰ Digite o novo horário: ")
        sessoes[index-1].sala = prompt("🌟 Digite o nova sala: ")        
        menu()
    } else {
        console.log('\n❌ Opa amigão, isso aí não vale!')
        menu()
    }
}

function cancelarSessao(){
    listarSessao()
    var indice = parseInt(prompt("\n🍿 Selecione uma das aventuras cinematográficas: "))
    if (indice > 0 && indice <= sessoes.length){
        sessoes.splice(indice -1, 1) 
        console.log('\n😞 Que tragédia! Sessão cancelada com sucesso.')
        menu()
    } else {
        console.log('\n❌ Opa amigão, isso aí não vale!')
        menu()
    }
}

function menu(){
    console.log(`
    ===================================
     🍿🎬 Gerenciamento de Cinema 🎬🍿
    ===================================
    1 - Adicionar uma nova sessão
    2 - Listar todas as sessões
    3 - Atualizar uma sessão existente
    4 - Cancelar uma sessão
    5 - Sair
    ===================================
    `)
    var escolha = prompt('🎬 Escolha sua próxima ação: ')

    switch(escolha){
        case '1':
            adicionarSessao()
            break
        case '2':
            listarSessao()
            menu()
            break
        case '3':
            atulizarSessao()
            break
        case '4':
            cancelarSessao()
            break
        case '5':
            console.log('\n👋 Até a próxima aventura! ')
            break    
        default:
            console.log('\n❌ Opa amigão, isso aí não vale!')
    }
}

menu()