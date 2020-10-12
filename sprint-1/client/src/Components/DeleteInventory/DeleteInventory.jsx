// Ticket 13

// Ensure this component works at and between all breakpoints and is fully 
// responsive without any elements overlapping.

// Assign the equivalent back end ticket as well, as it will be easier if a
//  given team member does both the front-end and back-end tasks for this workflow.

// import React from 'react';
// import "./DeleteInventory.scss";
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const url = 'http://localhost:8080';

// class DeleteInventory extends React.Component {
//     state = {deleteObject: false}
//     // function that delete  Inventory with particular id
//     deleteObject (event) {
//         event.preventDefault();
//         const id = this.props;
//         let config = {
//             method: 'delete',
//             url: `${url}/inventories/${id}`,
//             };
//         const {match} = this.props;
//         if (this.props.hasOwnProperty('match')) {
//         return (    
//         axios(config)
//         .then( response => {
//             //clearFormElements();
//             //iniatilizeCommentsSection();
//             console.log(response);
//         })
//         .catch( error => {
//             console.log(error);
//         }))};
//     }
    
//     render() {
//         let page;
//         if (this.props.deleteObject === 'true') {
//          page = 
//          <div className="deleteItem">
//             <img className="deleteItem__close" src={process.env.PUBLIC_URL + "./assets/icons/close24px.svg"} alt="Close"/>
//             <h1 className="deleteItem__title">Delete {}Television inventory item?</h1>
//             <p className="deleteItem__text">Please confirm that you'd like to delete Television{} from the inventory list.
//             You won't be able to undo this action.</p>
//             <div className="deleteItem-buttons">
//                 <button className="deleteItem-buttons__cancel" type="submit">Cancel</button>
//                 <button onClick={this.deleteObject} className="deleteItem-buttons__delete" type="submit">Delete</button>
//             </div>
//         </div>
//         }
//         else { 
//             page = <div></div>
//        }
//        return {page}
//     }
// }

// export default DeleteInventory; 