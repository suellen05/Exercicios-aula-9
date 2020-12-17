let i = 1;
do{
    document.querySelector("#contagem").innerHTML += i + "<br>"; i++;
    console.log(i);
 } while(i <= 10);

/*no do while a condicao fica no final do laco, isso quer dizer que o conteudo de dentro do laco sera
 executado pelo menos 1 vez.
*/
