import "./AdminPage.css"

import React from 'react';
import axios from "axios";

function AdminPage(props) {

    return (
        <div className="upload">


            <form className="uploadForm" method="post" action="http://localhost:8083/files" encType="multipart/form-data">
                <div>
                    <label>File to upload</label> <input type="file" id="file" name="file"/>
                </div>
                <div>
                    <label>Title</label> <input type="text" id="title" name="title"/>
                </div>
                <div>
                    <label>Description</label> <input type="text" id="description" name="description"/>
                </div>
                <input type="submit" value="Upload to webservice"/>
            </form>
            <h2>bepaal hier de beschikbare tafels</h2>



            <h2>upload hier de menukaart (nice2have => ook foto's)n</h2>




            {/*nice2have*/}
            <h2>bekijk hier de openstaande rekeningen en reserveringen</h2>
        </div>
    );
}

export default AdminPage;