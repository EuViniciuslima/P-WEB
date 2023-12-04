export default function Home() {
    return (

        <div>

            <h2>Manel Gome</h2>

        </div>
    )

 }

export function Principal(){

    return (
 
       <div>
 
          <h1>Nova Página</h1>
          <CanetaAzul msg="Pintando o mundo"/>

 
       </div>
 
    )
 
 }

 export function CanetaAzul(props) {

    return (
        <div>
       <h2>A caneta é azul!</h2>
       
       <h3> { props.msg }</h3>
       </div>
    )

}


 