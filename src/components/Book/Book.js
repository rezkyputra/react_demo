import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Book extends Component {
    render(){
        return(
            <div className="col-9 mx-auto">                    
                <h3 className="text-primary">BOOKS</h3>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Judul</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Pengarang</th>
                                <th scope="col">Penerbit</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Dasar Dasar HTML</td>
                                <td>Web Programming</td>
                                <td>Otto</td>
                                <td>GrahaPena</td>
                                <td>
                                    <Link to={'/edit'} className="btn btn-info btn-sm">Edit</Link> <Link to={'/delete'} className="btn btn-danger btn-sm">Delete</Link> 
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Belajar Javascript</td>
                                <td>Web Programming</td>
                                <td>Thornton</td>
                                <td>GrahaPena</td>
                                <td>
                                    <Link to={'/edit'} className="btn btn-info btn-sm">Edit</Link> <Link to={'/delete'} className="btn btn-danger btn-sm">Delete</Link> 
                                </td>
                            </tr>
                        </tbody>
                    </table>        
                </div>
                <Link to={'/AddBook'} className="btn btn-primary btn-sm">Add Book</Link>
            </div>
        );
    }
}

export default Book;