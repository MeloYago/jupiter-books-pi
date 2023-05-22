import Card from "../componentes/Card";


function Home() {


    return (
        <>
            <section className="input-section">
                <form>
                    <h5>Cadastre o produto aqui</h5>
                    <div className="product-inputs">
                        <input type="text" placeholder="Título" />
                        <input type="text" placeholder="Autor" />
                        <input type="text" placeholder="Sinopse" />
                        <input type="text" placeholder="Preço" />                     
                        <button>Adicionar Livro</button>
                    </div>
                </form>
            </section>

            <section className="products-section">
                <div className="products-container">
                    <Card />                  
                </div>
            </section>

        </>
    )
}

export default Home;