const CountryListItem = ({name, capitalcity, currency}) => {
    return (
        <div className="country">
            <header>Country: {name} </header>
            <main>
                <ul>
                    <li>Capital City: {capitalcity}</li>
                    <li>Currency: {currency}</li>
                </ul>
            </main>
        </div>
    );
}

export default CountryListItem;