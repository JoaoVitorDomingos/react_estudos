import Galeria from "./galeria";
import { Profile } from "./galeria";

export default function Home() {
  return (
    <div>
      <h1>Minha galeria</h1>
      <Galeria />
      <div>
        <h2>Profile Unico</h2>
        <Profile />
      </div>
    </div>
  );
}
