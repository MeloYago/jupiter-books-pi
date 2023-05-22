import Card from "../componentes/Card";


function Home() {


    return (
        <>
            <section className="input-section">
                <form>
                    <h5>Busque Aqui!</h5>
                    <div className="form-inputs">
                        <input type="text" placeholder="Pesquise por nome" />
                        <input type="text" placeholder="Pesquise por categoria" />
                    </div>
                </form>
            </section>

            <section className="products-section">
                <div className="products-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

        </>
    )
}

export default Home;