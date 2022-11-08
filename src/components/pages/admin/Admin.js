import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/api/admin')
            .then(response => response.json())
            .then(user => {
                setUsers(user);
                setIsUser(true);
            });
        console.log(users);
    }, [])

    return (
        <div className="py-4">
            {isUser && <div className="py-4">
                <section class="vh-100" >
              <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" >
                      <div class="card-body ">
                        <div class="row justify-content-center">
                          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p class="text-center h2 fw-bold mb-3 mx-1 mx-md-4 mt-3">Admin Dashboard</p>
                            <hr />

                <div className="row d-flex justify-content-center ">
                    <table class="table ms-5">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => {
                                    return (<tr>
                                        <th scope="row">{user._id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>
                                            <div>
                                                <Link to="">Edit</Link><s></s><Link to="">Delete</Link>
                                            </div>
                                        </td>
                                    </tr>
                                    )
                                }
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            </div>
            }
        </div>
    )
};

export default Admin;