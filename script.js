function Cadastrar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {nome, email}
    let converteData = JSON.stringify(data);

    localStorage.setItem('lead', converteData)
    console.log(nome, email);

    alert("Cadastrado com sucesso!")

    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
}