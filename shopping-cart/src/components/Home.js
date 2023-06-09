import tomnook from './img/Tom_Nook.png';

function Home() {
  return (
    <div id="Home">
      <div id="Greeting">
        <div id="GreetImg">
          <img src={tomnook} alt="Tom Nook"/>  
        </div>
        
        <h1 className='greetingText'>Welcome to Island Flowers!</h1>
        <p className='greetingText'>Checkout our selection of flowers in a wider variety of colours and species. 
          Whether you are decorating for an event, sending a gift, 
          or just want to make your home more beautiful, we have what you are looking for.
          Start your floral adventure today!
        </p>
      </div>
    </div>
  );
}

export default Home;
