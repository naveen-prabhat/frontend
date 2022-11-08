const Users=(props)=>{
    const { user }=props;
    return(
        <div className="card mt-1 px-1 d-flex justify-content-center">
                <tbody>
                    <tr>
                      <td scope="row">{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.createdAt}</td>
                      <td>
                      <button type="button" className="btn btn-primary btn-sm">
                        <span className="glyphicon glyphicon-trash"></span> Edit 
                      </button>
                      </td>
                      <td>
                      <button type="button" className="btn btn-danger btn-sm">
                        <span className="glyphicon glyphicon-trash"></span> Del 
                      </button>
                      </td>
                    </tr>
                </tbody>
        </div>                
  )   
}

export default Users;