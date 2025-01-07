import Image from "next/image";
import styles from "./page.module.css";

const Dados = [
  {
    nome: "Maria",
    idade: 19,
    hobbie: "Peteca"
  },
  {
    nome: "João",
    idade: 20,
    hobbie: "Video-game"
  },
  {
    nome: "Jose",
    idade: 10,
    hobbie: "Futebol"
  }
]

function Container() {
  return (
    <div>
      <h2>Nome: {Dados[1].nome}</h2>
      <p>Idade: {Dados[1].idade}</p>
      <p>Hobby: {Dados[1].hobbie}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="principal">
      <h1>Primeiro Projeto - React</h1>
      <Container />
    </main>
    
  );
}
