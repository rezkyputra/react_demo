import React, { Component } from 'react';

class AddBook extends Component{
    render(){
        return(
            <div className="col-9 mx-auto">
                <h2 className="text-primary">Tambah Buku</h2>
                <form>
                    <div className="form-group">
                        <label>Judul</label>
                        <input className="form-control" type="text" name="judul" />
                    </div>
                    <div className="form-group">
                        <label>Kategori</label>
                        <select className="form-control" name="kategori">
                            <option value="">-</option>
                            <option value="Web Programming">Web Programming</option>
                            <option value="Java Programming">Java Programming</option>
                            <option value="Umum">Umum</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Pengarang</label>
                        <input className="form-control" type="text" name="pengarang" />
                    </div>
                    <div className="form-group">
                        <label>Penerbit</label>
                        <input className="form-control" type="text" name="penerbit" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Tambah" />
                </form>
            </div>            
        );
    }
}

export default AddBook;