
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Actor from "../Actor/Actor";


const Home = () => {
    const [storedData, setStoredData] = useState([])
    const [actors, setActors] = useState([])
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0)

    const budget = 40000;

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setStoredData(data))
    }, [])
    // console.log(storedData)

    const handleSelected = (actor) => {
        // console.log('clicked selected buttons', actor)
        const isExist = actors.find(item => item.id == actor.id)
        let count = actor.salary;

        if (isExist) {
            alert('Already Taken!')
        } else {
            actors.forEach(item => {
                count = count + item.salary;
            })
            const totalRemaining = budget - count;

            if (count > budget) {
                return alert('Yours Sufficient Balance!!')
            } else {
                setTotalCost(count)
                setRemaining(totalRemaining)
                const selectActor = [...actors, actor];
                setActors(selectActor);
            }
        }

    }

    return (
        <div className="container px-5 mx-auto ">
            <div className="  md:flex  gap-5 my-10">
                <div className="md:w-2/3 ">
                    <h2 className="text-lg md:text-2xl font-mono font-medium">Choose Your Demand</h2>
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

                <div className="md:w-1/3 mt-10 md:mt-0">
                    <Cart actors={actors} remaining={remaining} totalCost={totalCost} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;