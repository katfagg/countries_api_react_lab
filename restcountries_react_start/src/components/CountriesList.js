import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {
    return(
        <>
        <h2>List of Countries!</h2>
            {countries.map((country, index) => {
                return <CountryListItem key={index} name={country.name.common} capital={country.capital} currency={country.currencies}/>
            })};
        </>
    );
}

export default CountriesList;