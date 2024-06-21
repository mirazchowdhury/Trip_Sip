import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
function Home() {
    return (
        <Carousel className='mt-3 container'>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Machu Pichu</h3>
                    <p>Join us & fell the Incan citadel set high in the Andes Mountains in Peru.</p>
                </Carousel.Caption>
                <img
                    className="d-block w-100 carImg"
                    src="https://www.andbeyond.com/wp-content/uploads/sites/5/machu-picchu-in-south-america.jpg"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Iifel Tower</h3>
                    <p>Experience the vibe of Love in the city of Love</p>
                </Carousel.Caption>

                <img
                    className="d-block w-100 carImg"
                    src="https://media.architecturaldigest.com/photos/5ef5f6b4e5c8c1d259c3b00b/master/pass/GettyImages-803432314.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>The Great Wall of China</h3>
                    <p>Visit the great wall of china with us....</p>
                </Carousel.Caption>

                <img
                    className="d-block w-100 carImg"
                    src="https://media.cntraveler.com/photos/598339c5d8b70e58cdb15f17/master/w_3149,h_2362,c_limit/Great_Wall_GettyImages-535657741.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;