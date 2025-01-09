const alunos = [
    {
        nome: "João",
        idade: 18,
        aprovado: true,
        media: 10.0
    },
    {
        nome: "Guilherme",
        idade: 17,
        aprovado: false,
        media: 1.5
    },
    {
        nome: "Kauan",
        idade: 19,
        aprovado: true,
        media: 8.0
    }
]


function Aluno({al}) {
    let media_si
    if(al.aprovado && al.media > 8.0) {
        media_si = "Nota maior que a média"
    } else if(al.aprovado && al.media <= 8.0) {
        media_si = 'Nota dentro da média'
    } else {
        media_si = "Reprovado"
    }

    return(
        <div className="aluno">
            <h2>{al.nome}</h2>
            <p>Idade: {al.idade} - {al.idade >= 18 ? "Maior de Idade" : "Menor de Idade"}</p>
            <p>Aprovado: {al.aprovado && "Sim"} {!al.aprovado && 'Não'}</p>
            <p>Media: {al.media} - {media_si}</p>
        </div>
    )
}

export default function Ex06() {
    return(
        <section>
            <h1>Alunos:</h1>
            <Aluno al={alunos[0]} />
            <Aluno al={alunos[1]} />
            <Aluno al={alunos[2]} />
        </section>
    )
}