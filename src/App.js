import './App.css';
import { useRef , useState } from 'react'
function App() {
  const entrada = useRef()
  const [numero, setNumero] = useState(null)
function jogar(){
  const rndInt = Math.floor(Math.random() * 6) + 1;
  analisar(entrada.current.value,rndInt)
}

function analisar(n1,n2){
 console.log(n1);
 console.log(n2);

 if(n1/n2===1){
  setNumero("Você Ganhou !");
 }else{
  setNumero("Você Perdeu ! Resultado = "+n2);
 }


}



  return (
    <div className="App">
      <h2>Digite um número entre 1 e 6</h2>  
      <input type='text' ref={entrada} ></input>
       <button onClick={jogar}>jogar</button>
       <h2>{numero}</h2>
    </div>
  );
}

export default App;
