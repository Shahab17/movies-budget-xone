import PropTypes from 'prop-types'

const Cart = ({ actors, remaining, totalCost }) => {
    // const { name } = actors;
    return (
        <div>
            <h2 className="text-lg font-mono md:text-2xl  ">Total Actors: {actors.length}  </h2>
            <h4 className="text-xl">Remaining: ${remaining} </h4>
            <div className='mt-10 border-y-2  py-4 '>
                {
                    actors.map(actor => <li className='text-xl' key={actor.id}> {actor.name} </li>)
                }
            </div>
            <h5 className="text-xl pt-4">Total Cost: ${totalCost} </h5>


        </div>
    );
};

Cart.propTypes = {
    actors: PropTypes.array,
    remaining: PropTypes.number,
    totalCost: PropTypes.number
}

export default Cart;