function Menu() {
    return(
        <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
    )
}

export default function Header() {
    return(
        <header>
            <img src="logo.png" alt="logo" />
            <h1>Header</h1>
            <Menu />
        </header>
    )
}