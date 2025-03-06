import React from 'react';

const EditCity = ({ setIsOpen, isOpen }) => {

    const closeModal = () => setIsOpen(false);

    return (
        <div >
            {isOpen && (
                <>

                    <div className="backdrop" onClick={closeModal}>  </div>
                    <div className="modal-content">
                        <h2 className="modal-title">Edit City</h2>
                        <form>
                            <div className='input-container'>
                                <label htmlFor="">Name</label>
                                <input className='editForm' type="text" />
                            </div>


                            <div>
                                <button type='submit'>Update</button>
                            </div>
                        </form>
                        <button onClick={() => setIsOpen(false)} className="close-modal-btn">
                            Close
                        </button>

                    </div>
                </>

            )}
        </div>
    );
};

export default EditCity;
