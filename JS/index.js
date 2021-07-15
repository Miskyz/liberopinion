function sendEmail() {
    var nome = $('#nome').val();
    var email = $('#email').val();
    var morada = $('#morada').val();
    var telemovel = $('#telemovel').val();
    var idade = $('#idade').val();
    var reuniao = document.getElementById("myCheck");
    console.log("Tas aqui" + reuniao);
    if (reuniao.checked) {
        reuniao = "Quer agendar uma reunião";
    } else {
        reuniao = "Não quer agendar uma reunião";
    }

    var modulo = $('#modulo').val();

    var mensagem = $('#mensagem').val();

    var Body = "Nome:" + nome + "<br>Email:" + email + "<br>Morada:" + morada + "<br>Telemóvel:" + telemovel + "<br>Idade:" + idade + "<br>Reunião:" + reuniao + "<br>Tema:" + modulo + "<br>Mensagem:" + mensagem;



    Email.send({
        SecureToken: "8fdaf19f-92a6-4c2a-8aab-2ad6b058496c",
        Host: "smtp.gmail.com",
        Username: "claudiabarrosnunes505@gmail.com",
        Password: "liberopinionTESTE",
        To: 'claudiabarrosnunes505@gmail.com',
        From: "claudiabarrosnunes505@gmail.com",
        Subject: "Liberopinion - Nova Mensagem do Website",
        Body: Body
    })
        .then(
            message => {

                if (message == "OK") {
                    alert("O email foi enviado com sucesso. Obrigado pelo seu contacto!")
                    window.location.reload();
                }
                else {
                    console.error(messagem);
                    alert("Houve um erro a enviar o email. Tente novamente!")
                }
            }

        );

}
// function sendMail(params) {
//     var tempParams = {
//         from_name: document.getElementById("toName").value,
//         message: document.getElementById("msg").value,
//     };

//     emailjs.send('Liber', 'template_rzeqzln', tempParams)
//     .then(function(res){
//         console.log("sucess", res.status );
//     })
// }

