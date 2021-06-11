function Locaties(){
    
    return(
        <main>
            <form>
                <label htmlFor="kies locatie" id="locatieLabel">
                    <select name="locatie" id="locatie">
                        <option value="Selecteer locatie">Select</option>
                        <option value="Bar Stork">Bar Stork</option>
                        <option value="soon">Soon..</option>
                        <option value="binnenkort">Binnenkort</option>
                        <option value="bijna open">Bijna open</option>
                    </select>
                </label>

            </form>
        </main>
        
    )
}

export default Locaties;