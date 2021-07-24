// import React, { useContext, useState, useEffect } from "react";
// import { authContext } from "../../contexts/AuthContext";
// import axios from "axios";
// import "./My-account-page.css"
// import Button from "../../components/Button/Button";
// import {useHistory} from "react-router-dom";
//
//
// function MyAccountPage() {
//     const { user } = useContext(authContext);
//     const [content, setContent] = useState(null);
//     const [users, setUsers] = useState([]);
//     const history = useHistory();
//     const toAddRecipe = () => {
//         history.push("add-recipe")
//     }
//
//     useEffect(() => {
//         async function fetchPrivateData() {
//             try {
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get(
//                     `http://localhost:8080/users`,
//                     {
//                         headers: {
//                             "Content-Type": "application/json",
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );
//                 setUsers(response.data)
//             } catch (error) {}
//         }
//         fetchPrivateData();
//     }, []);
//
//
//     return (
//         <>
//             <div className="page-wrapper">
//                 <div className="page-wrapper-inner">
//                     {user.authority === "USER" ? (
//                             <>
//                                 <h1>Welcome back <span className="name-account-holder">{user.username}</span></h1>
//                                 <Button
//                                     type="button"
//                                     // onClickEvent={toAddRecipe}
//                                     // buttonTitle="Add a new recipe"
//                                     classNameButton="btn"
//                                 />
//                             </>
//                         ) :
//                         (
//                             <></>
//                         )
//                     }
//
//                     {user.authority === "ADMIN" ? (
//                         <>
//                             <h1>Users</h1>
//                             <ul>
//                                 {users.map(user => {
//                                     return <li>{user.username}</li>
//
//                                 })}
//
//                             </ul>
//                             {/*<p>Upload <link to="/adminpage">hier</link>de (nieuwe) menukaart</p>*/}
//                         </>
//                     ) : (
//                         <></>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }
// export default MyAccountPage;