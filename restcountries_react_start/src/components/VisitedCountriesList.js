import CountryListItem from "./CountryListItem";

const VisitedCountriesList = () => {
    return(
        <>
        <h2>List of Visited Countries!</h2>
        {countries.map((country, index) => {
                return <CountryListItem key={index} name={country.name.common} capital={country.capital} currency={country.currencies}/>
            })};
        </>
    );
}

export default VisitedCountriesList;