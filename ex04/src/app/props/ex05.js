const p = {
    nome: "Cris",
    idade: 17,
    prof: "Estudante"
}

function Card( {children} ) {
    return(
        <section className="card">
            {children}
        </section>
    )
}

function Conteudo1( {tamanho = 10, pessoa} ) {
    return(
        <>
            <div
                className="img2"
                style={{
                    width: tamanho,
                    height: tamanho
                }}
            ></div>
            <div className="texto">
                <h2>{pessoa.nome}</h2>
                <p>Idade: {pessoa.idade}</p>
                <p>Profissão: {pessoa.prof}</p>
            </div>
        </>
    )
}

function Footer(props) {
    return(
        <footer>
            <ConteudoF {...props} />
        </footer>
    )
}

function ConteudoF(props) {
    return(
        <>
            <p>{props.t1}</p>
            <p>{props.t2}</p>
            <p>{props.t3}</p>
        </>
    )
}

export default function Ex05() {
    return(
        <main style={{backgroundColor: "lightgray", padding: 40}}>
            <Card>
                <Conteudo1 
                    tamanho={50}
                    pessoa={p}
                />
            </Card>

            <Card>
                <Conteudo1 
                    pessoa={
                        {
                            nome: "Jac",
                            idade: 29,
                            prof: "Pintor"
                        }
                    }
                />
            </Card>

            <Footer 
                t1={"texto1"}
                t2={"texto2"}
                t3={"texto3"}
            />
        </main>
        
    )
}