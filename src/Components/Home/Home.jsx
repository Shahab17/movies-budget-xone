
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Actor from "../Actor/Actor";


const Home = () => {
    const [storedData, setStoredData] = useState([])
    const [actors, setActors] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setStoredData(data))
    }, [])
    // console.log(storedData)

    const handleSelected = (actor) => {
        console.log('clicked selected buttons', actor)
        const selectActor = [...actors, actor];
        setActors(selectActor);
    }

    return (
        <div className="container mx-auto">
            <div className="  md:flex  gap-5 my-10">
                <div className="w-2/3 ">
                    <h2 className="text-2xl">Home Area</h2>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10  ' >
                        {
                            storedData.map(actorInfo => <Actor
                                 key={actorInfo.id} 
                                 actorData={actorInfo}
                                 handleSelected={handleSelected}
                                 ></Actor>)
                        }

                    </div>
                </div>

                <div className="w-1/3">
                    <Cart actors={actors} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;