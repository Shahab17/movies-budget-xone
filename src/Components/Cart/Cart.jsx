import PropTypes from 'prop-types'

const Cart = ({ actors }) => {
    // const { name } = actors;
    return (
        <div>
            <h2 className="text-2xl  ">Cart Area   </h2>
            
            <div className='mt-10 border-y-2  py-4 '>
                {
                    actors.map(actor => <li className='text-xl' key={actor.id}> {actor.name} </li>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    actors: PropTypes.array,
}

export default Cart;