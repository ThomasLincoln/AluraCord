function title(){
  return(
    <h1>Boas vindas de volta!</h1>
  );
}

//isso é um componente, pois ele retorna algo
function HomePage() {
    return(
      <div>
        <h2>Discord - Alura Matrix</h2>
        <style jsx>{`
          
          h1{
            color: red;
          }
        `} 
        </style>
      </div>
      ); 
  }
  
  export default HomePage
  