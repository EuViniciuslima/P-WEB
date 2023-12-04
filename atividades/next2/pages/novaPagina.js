import { CanetaAzul } from "./index"



export default function Principal() {

   return (

      <div>

         <h1>Eita Lasqueira, que lá vem a página 2</h1>

            <CanetaAzul msg="Pintando o mundo"/>
            <AzulCaneta msg="O nordeste é uma lugar maravilhoso"/>

      </div>

   )

}

export function AzulCaneta(props) {

   return (
      <div>
         <h2>O sol que faz em caicó é de rachar o quengo</h2>

         <h3> {props.msg}</h3>
      </div>
   )

}