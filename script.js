//Conectar com a API utilizando o fetch
fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)

    //FRONT END
    document.getElementById('imagem').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = corpo.name
    document.getElementById('categoria').innerHTML = corpo.category
    document.getElementById('estilo').innerHTML = corpo.series
    document.getElementById('preco').innerHTML = corpo.price
   
    document.getElementById('imagem2').innerHTML = corpo.image2
    document.getElementById('nome2').innerHTML = corpo.name2
    document.getElementById('categoria2').innerHTML = corpo.category2
    document.getElementById('estilo2').innerHTML = corpo.series2
    document.getElementById('preco2').innerHTML = corpo.price2
    
    document.getElementById('imagem3').innerHTML = corpo.image3
    document.getElementById('nome3').innerHTML = corpo.name3
    document.getElementById('categoria3').innerHTML = corpo.category3
    document.getElementById('estilo3').innerHTML = corpo.series3
    document.getElementById('preco3').innerHTML = corpo.price3

    
})
    let compras = 0

    function  comprar(){
        alert("voce comprou um cavalinho do Curitiba")
        compras++
        verificadorCompras()
    }

    
    function  comprar2(){
        alert("voce comprou um cavalinho do Mirassol ")
        compras++
        verificadorCompras()
    }

    function  comprar3(){
        alert("voce comprou um cavalinho do Internacional")
        compras++
        verificadorCompras()
    }

    function verificadorCompras(){
     if (compras == 3)
    
    
    Swal.fire({
        title: "Parabens!",
        text: " voce comprou varios cavalinhos de time nada a ver!",
        icon: "success"
      });


    }

    


    

