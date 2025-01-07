import Image from "next/image";
import styles from "./page.module.css";

function Galleria() {
  return (
    <div className="container_galeria">
      <img 
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
      <div>
        <h2>Alan L. Hart</h2>
        <p>Cientista Maluco</p>
      </div>
    </div>
  )
}

export default function Profile() {
  return(
    <main className="principal">
      <h1>Realizado o primeiro conteúdo de React</h1>
      <a href="https://react.dev/learn/your-first-component" target="_blank">Veja aqui</a>
      <Galleria />
    </main>
  )
}
