
    const turnOnOff = document.getElementById( 'turnOnOff' );   // id do botão-ligar/desligar
    const lamp = document.getElementById( 'lamp' );  // id da lâmpada inicial

    function lampBrk() {

        return lamp.src.indexOf ( 'quebrada' ) > -1
        // indexOf retorna o valor que está dentro de uma string
        // se a lampada está quebrada não retornará nada, caso esteja retornará -1
    }


    function lampOn () {
    
        // ! = negação
        if( !lampBrk() ){
        
            // ligando lamp
            lamp.src = './img/acesa.jpg';
        
        }
    }

    function lampOff () {

        if( !lampBrk() ){
        
            // desligando lamp
            lamp.src = './img/apagada.jpg';

        }
    }

    function lampBroken(){

        lamp.src = './img/quebrada.jpg';

    }

    function lampOnOff(){

        // botão único p/ ligar e desligar
        if ( turnOnOff.textContent == 'Ligar' ){

            lampOn();

            turnOnOff.textContent = 'Desligar';

        } else{

            lampOff();

            turnOnOff.textContent = 'Ligar';

        } 

    }

   
    // addEventListener = quando escutar 'click', execute tal evento. 
    turnOnOff.addEventListener ( 'click', lampOnOff); 
    
    lamp.addEventListener ( 'mouseover', lampOn); // Quando o mouse passa em cima da lamp
    lamp.addEventListener ( 'mouseleave', lampOff); // Quando o mouse sai de cima da lamp
   
    lamp.addEventListener ( 'dblclick', lampBroken) // double click = dblclick  (indica para quebrar a lâmpada)
    