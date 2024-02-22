const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header>
                <NavBar />
            </Header>

            <Main>

                <div className="hero">

                    <section className="hero--title-section">

                        <h2>De webapplicatie voor je: </h2>
                        <span>boodschappen en recepten </span>

                        <h1>Alles in 1</h1>

                    </section>

                </div>

                <Button
                    buttonText="Registreer je nu"
                    buttonClass="cta-button"
                    buttonType="button"
                    buttonClickHandler={() => navigate("/register")}
                />

            </Main>

        </>
    );
};

export default LandingPage;