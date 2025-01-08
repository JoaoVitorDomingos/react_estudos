export function Profile() {
    return (
        <div className="profile">
            <img src="https://i.imgur.com/QIrZWGIs.jpg" />
            <p>Alan L. Hart</p>
        </div>
    )
}

export default function Galeria() {
    return (
        <section>
            <h1>Cientistas</h1>
            <Profile />
            <Profile />
        </section>
    )
}