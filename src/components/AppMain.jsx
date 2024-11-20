import { useState ,  useEffect} from 'react'

export default function AppMain(){
    const [charactersData, setCharacterData] = useState({});  

    function handleClick(e){
        fetchData();
    }
    function fetchData(url = 'https://rickandmortyapi.com/api/character'){
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            setCharacterData(data)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }
    useEffect(fetchData, [])  //always outside fetch function!!

    return(
        <main>
            <h1>Rick & Morty</h1>
      <button type='button' className='btn btn-primary' onClick={handleClick}>Fetch Characters</button>
      <section className='characters'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
              charactersData.results?
                charactersData.results.map((item,index)=>(
                  <div className='col' key={item.id}>
                    <div className='card'>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                    </div>

                  </div>
                ))  :
                <p>No results yet</p>
            }
          </div>
        </div>
      </section>
        </main>
    );
}