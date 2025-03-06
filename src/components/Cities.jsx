import React, { useEffect, useState } from 'react'
import EditCity from './EditCity';

const Cities = () => {
    const [data, setData] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);


    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch('http://localhost:3006/data');
            const cities = await response.json();
            console.log('response', cities);
            setData(cities);
        }
        fetchedData();
    }, []);

    // console.log('data', data);

    return (

        <div className='dataContainer'>

            <EditCity isOpen={isOpen} setIsOpen={setIsOpen} />

            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country </th>
                        <th>Province</th>
                        <th>Timezone</th>
                        <th>Coordinates</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data ? Object.keys(data).map((key, index) => {

                            const cities = data[key];

                            return (<tr key={index}>
                                <td> {cities.city} </td>
                                <td> {cities.country} </td>
                                <td> {cities.province} </td>
                                <td> {cities.timezone} </td>
                                <td> {cities.coordinates?.join(', ')} </td>
                                <td> {cities.code} </td>
                                <td className='actionButton'>
                                    <button className='button-3 editBtn' onClick={openModal} > Edit </button>
                                    <button className='button-3 deleteBtn'> Delete </button>
                                </td>
                            </tr>)
                        })
                            : 'no data'
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Cities