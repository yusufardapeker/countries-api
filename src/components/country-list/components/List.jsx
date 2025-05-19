import React from "react";
import { useSelector } from "react-redux";

function List() {
	const { filteredData } = useSelector((state) => state.countries);

	return (
		<>
			{filteredData.map((country) => (
				<div className="country" key={country.name.common}>
					<img src={country.flags.png} alt={country.flags.alt} />

					<div className="country-info-wrapper">
						<p className="country-name">{country.name.common}</p>

						<div className="country-info">
							<div className="population">
								<span className="field-key">Population:</span>
								<span className="field-value">{country.population.toLocaleString("en-US")}</span>
							</div>
							<div className="region">
								<span className="field-key">Region:</span>
								<span className="field-value">{country.region}</span>
							</div>
							<div className="capital">
								<span className="field-key">Capital:</span>
								<span className="field-value">{country.capital?.join(", ")}</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export { List };
