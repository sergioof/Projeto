function validaLogin(usuario, senha){

      //alert(`Você digitou ${usuario} ${senha}`)
      if (!usuario){
            alert('Obrigatório informar o Login');
            return false
      }

      if (!senha){
            alert('Obrigatório informar a senha');
            return false
      }
      
      if (!usuario==='aluno@fatecitu.edu.br' && senha==='123456'){
            //Carregaremos uma nova página
            console.log("Vai carregar o menu")
            window.location.href = 'http://127.0.0.1:5500/menu.html'
      } 
      
      else {
            console.error("Erro de autenticação")
            alert('Os dados autenticados são inválidos')
      }
}

