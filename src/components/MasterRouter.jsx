import React from 'react';
// const MasterRouter = props => {

    

//     return (
//         <div>
//             MasterRouter.jsx Here!
//         </div>
//     )
// }

const MasterRouter = (props) => {
    const {state, setState} = props;

    const showPeople = async () => {
            console.log('Hello Use Effect!')
            // console.log(`https://swapi.dev/api/${props.category}/${props.id}/`)
            // await fetch(`https://swapi.dev/api/${props.category}/`)
            await fetch(`https://swapi.dev/api/${props.category}/${props.id}/`) //Stuck here
            .then(response => {
                if (!response.ok) { throw response }
            // console.log('response.body: ', response.body);
            // console.log('response.json(): ', response.json());
            return response.json();
            


        }).then(response => {
            //   console.log(response);
                setState({
                starWarsPeople: response.results,
                name: response.name,
                height: response.height,
                mass: response.mass,
                hair_color: response.hair_color,
                skin_color: response.skin_color,
                climate: response.climate,
                terrain: response.terrain,
                surface_water: response.surface_water,
                population: response.population
            });
              console.log('Line 28 - State : ', state);
        }).catch(err=>{
            console.log(err);
        });
        console.log("is this working now??????");
    };
    
    return (
        <div>
            {/* Hello Return from Main! */}
            <form>Search For: 
                <select>
                    <option value="people" name="people">People</option>
                    <option value="planets" name="planets">Planets</option>
                </select>
                <input type="number" name=""></input>
                <input type="submit" value="Submit" onSubmit={showPeople}/>
            </form>
            
            {/* <button onClick={showPeople}>Show People</button> */}

            <div>
                {state.height ?
                    <div> 
                        <h1>{state.name}</h1>
                        <br></br>
                        <p>Height: {state.height}</p>
                        <p>Mass: {state.mass}</p>
                        <p>Hair Color: {state.hair_color}</p>
                        <p>Skin Color: {state.skin_color}</p>
                    </div>
                    :null}
                    
                    {state.climate ?
                    <div> 
                        <h1>{state.name}</h1>            
                        <p>Climate: {state.climate}</p>
                        <p>Terrain: {state.terrain}</p>
                        <p>Surface Water: {state.surface_water}</p>
                        <p>Population: {state.population}</p>
                    </div>
                    :null}

                    {state.name ? null :  
                    <div>
                        <h5>These are not the droids you're looking for...</h5>
                        <img src="https://i.pinimg.com/originals/bc/80/f2/bc80f2f4671fc690da0a456cfdbcd020.jpg" alt="something"></img>
                    </div>
                    }
                
            </div>
        </div>

    );
}


export default MasterRouter;