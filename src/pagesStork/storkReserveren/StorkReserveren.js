    import "./StorkReserveren.css"
    import {useHistory} from "react-router-dom";
    import React, {useState, useEffect} from 'react';
    import {useForm} from "react-hook-form";
    import axios from "axios";

    function StorkReserveren() {

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const [tafels, setTafels] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function fetchTafels() {
            console.log("state in database", tafels)

            setError('');
            toggleLoading(true);

            try {
                const result = await axios.get('http://localhost:8083/tafels/getdata', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });

                console.log(result.data);
                setTafels(result.data);

                // toggleRegisterSuccess(true);

                // we willen even wachten met doorlinken zodat de gebruiker de tijd heeft om de succesmelding ook daadwerkelijk te zien
                setTimeout(() => {
                    history.push('/login');
                }, 2000);
            }
            catch (e) {
                console.error(e);
                // op het error (e) object zit altijd een message property, maar die kan wat abstract zijn. Daarom extra text:
                setError(`Het reserveren is mislukt. Probeer het opnieuw (${e.message})`);

            }
            toggleLoading(false);
        }

        fetchTafels()
    }, []);

//             return(
//                 <>
//                     <div>
//                 {tafels.map(tafel => {
//                     return <li> {tafel}</li>
//                 })}
//
//
//                     </div>
//                 </>
//
// )

}

export default StorkReserveren;
