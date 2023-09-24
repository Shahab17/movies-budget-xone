import PropTypes from 'prop-types'

const Actor = ({ actorData, handleSelected  }) => {
    const { name, image, role, salary } = actorData;

    return (
        <div>

            <div className='border-2 border-gray-200   p-2 space-y-3 rounded-md' >
                <div className='flex justify-center'>
                    <img className='w-24 rounded-full' src={image} alt="" />
                </div>
                <h3 className="text-xl text-center font-semibold"> {name} </h3>

                <div className='flex justify-between '>
                    <h3 className="text-lg"> <span className='font-medium'>{role}</span> </h3>
                    <h3 className="text-lg">Salary: <span className='font-medium'>${salary}</span> </h3>
                </div>
                <div className='text-center'>
                    <button onClick={() => handleSelected(actorData)} className='btn px-3 py-2 rounded-md bg-gradient-to-r from-cyan-100 to-blue-700'>Select</button>
                </div>
            </div>
        </div>
    );
};

Actor.propTypes = {
    actorData: PropTypes.object,
    handleSelected: PropTypes.func,
   
}

export default Actor;