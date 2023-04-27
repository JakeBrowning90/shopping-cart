import tomnook from './img/Tom_Nook.png';

function Home() {
  return (
    <div id="Home">
      <div id="Greeting">
        <div id="GreetImg">
          <img src={tomnook}/>  
        </div>
        
        <h1>Heading</h1>
        <p>Welcome message</p>
      </div>
    </div>
  );
}

export default Home;
