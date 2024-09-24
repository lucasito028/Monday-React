import React, { useState } from 'react';
export default function Table({ resultQuery }){

    const [table, setTable] = useState();
    const [itemsHead, setItemsHead] = useState();
    const [itemsBody, setItemsBody] = useState();

    return(
        <div>
            //
            <table>
                //
                <thead>

                </thead>
                <tbody>
                    //
                </tbody>
            </table>
        </div>
    )
}