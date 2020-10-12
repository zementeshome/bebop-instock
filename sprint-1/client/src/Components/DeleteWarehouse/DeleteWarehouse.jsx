// # 23 - Front-End: Delete Warehouse Modal/Component (Responsive)

// Ensure that the delete functionality for warehouses is created, and that
// the confirmation modal is created and functional.

// Ensure that this component works at and between all breakpoints and is fully 
// responsive without any elements overlapping.

// Assign the equivalent back-end ticket as well, as it will be easier if a given 
// team member does both the front-end and back-end tasks for this workflow.

// import React from 'react';
// import "./DeleteWarehouse.scss";
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const url = 'http://localhost:8080';

// class DeleteWarehouse extends React.Component {

// state = {deleteObject: false}

// // function that delete  warehouse with particular id
//  deleteObject = (event) => {
//     event.preventDefault();

//     const id = this.props;
//     console.log(id);
//     // let config = {
//     //     method: 'delete',
//     //     url: `${url}/warehouses/${id}`
//     //     };
//     //     const {match} = this.props;
//     //     if (this.props.hasOwnProperty('match')) {
//     //     return (    
//     axios.delete(`${url}/warehouses/${id}`)
//     .then( response => {
//         console.log(response)
//     })
//     .catch( error => {
//         console.log(error);
//     })
//     // )};
// }
//     showing = () => {
//     this.setState({ deleteObject : true})
//     }
    
//     notShowing = () => {
//       this.setState({ deleteObject: false})
//     }

    // render() {
    //     let page;
    //     if (this.state.deleteObject) {
    //      page = <div className="deleteWarehouse">
    //         <img className="deleteWarehouse__close" src={process.env.PUBLIC_URL + "./assets/icons/close24px.svg"} alt="Close"/>
    //         <h1 className="deleteWarehouse__title">Delete {}King West warehouse?</h1>
    //         <p className="deleteWarehouse__text">Please confirm that you'd like to delete the King West{} from the list of warehouses.
    //         You won't be able to undo this action.</p>
    //         <div className="deleteWarehouse-buttons">
    //             <button className="deleteWarehouse-buttons__cancel" type="submit">Cancel</button>
    //             <button className="deleteWarehouse-buttons__delete" type="submit">Delete</button>
    //         </div>
    //     </div>
    //     }
    //     else { 
    //         page = <div></div>
    //    }
    //      }
// }


// export default DeleteWarehouse; 