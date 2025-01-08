const pessoa = {
    nome: "Alex",
    foto: "https://images.pexels.com/photos/17657259/pexels-photo-17657259/free-photo-of-insta-mhrb-zhb.jpeg",
    idade: 22,
    dados: {
        cpf: "123456789-10",
        rg: "789456",
        passaporte: "2528963",
    }
}

function Pessoa() {
    return (
        <section className="pessoa">
            <img 
                src={pessoa.foto}
                alt={"Foto de " + pessoa.nome}
            />
            <div>
                <h1>{pessoa.nome}</h1>
                <p>Idade: {pessoa.idade}</p>
                <p>Dados:</p>
                <ul>
                    <li>CPF: {pessoa.dados.cpf}</li>
                    <li>RG: {pessoa.dados.rg}</li>
                    <li>Passaporte: {pessoa.dados.passaporte}</li>
                </ul>
            </div>
        </section>
    )
}

export default function Ex04() {
    return (
        <>
            <Pessoa />
        </>
    )
}