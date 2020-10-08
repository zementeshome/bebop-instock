// # 23 - Front-End: Delete Warehouse Modal/Component (Responsive)

// Ensure that the delete functionality for warehouses is created, and that
// the confirmation modal is created and functional.

// Ensure that this component works at and between all breakpoints and is fully 
// responsive without any elements overlapping.

// Assign the equivalent back-end ticket as well, as it will be easier if a given 
// team member does both the front-end and back-end tasks for this workflow.

import React from 'react';
import "./DeleteWarehouse.scss";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const url = 'http://localhost:8080';

function DeleteWarehouse (props) {

    //deleteObject(id);
}

// function that delete  warehouse with particular id
function deleteObject (id) {
    //event.preventDefault(event);
    let config = {
        method: 'delete',
        url: `${url}`
        };
    axios(config)
    .then( response => {
        //clearFormElements();
        //iniatilizeCommentsSection();
    })
    .catch( error => {
        console.log(error);
    });
}

export default DeleteWarehouse; 