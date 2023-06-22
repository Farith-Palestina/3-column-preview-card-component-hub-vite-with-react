function Lobby(){
    return(
        <main id='allpage'>
            <div className='columns-container'>
                <div className='first-column'>
                    <img src='../src/assets/images/icon-sedans.svg' alt='Sedans' />
                    <h1>Sedans</h1>
                    <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                    <button>Learn More</button>
                </div>
                <div className='second-column'>
                    <img src='../src/assets/images/icon-suvs.svg' alt='Suvs' />
                    <h1>Suvs</h1>
                    <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                    <button>Learn More</button>
                </div>
                <div className='third-column'>
                    <img src='../src/assets/images/icon-luxury.svg' alt='Luxury' />
                    <h1>Luxury</h1>
                    <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <footer class='footer-page'>
                <p>Created by <a href="https://github.com/Farith-Palestina">Farith Palestina</a>.</p>
            </footer>
        </main>
    )
}

export default Lobby