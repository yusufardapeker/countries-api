import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DetailPage() {
	const { name } = useParams();
	const { data, filteredData } = useSelector((state) => state.countries);

	const selectedCountryArray = filteredData.filter((country) => country.name.common === name);
	const selectedCountry = selectedCountryArray[0];

	const selectedCountryNativeNames = Object.values(selectedCountry.name.nativeName);
	const selectedCountryNativeName =
		selectedCountryNativeNames[selectedCountryNativeNames.length - 1].common;

	const selectedCountryCurrencies = Object.values(selectedCountry.currencies)[0].name;

	const selectedCountryLanguages = Object.values(selectedCountry.languages);

	const formattedBorderCountries = selectedCountry.borders?.map((border) => {
		const matchedCountries = data.find((country) => country.cca3 === border);

		return matchedCountries.name.common;
	});

	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	return (
		<div className="country-detail">
			{selectedCountryArray.map((country) => (
				<div className="country" key={country.name.common}>
					<img src={country.flags.png} alt={country.flags.alt} />

					<div className="country-info">
						<p className="country-name">{country.name.common}</p>

						<div className="country-info-wrapper">
							<div className="country-info-geographics">
								<div className="native-name">
									<span className="field-key">Native Name:</span>
									<span className="field-value">{selectedCountryNativeName}</span>
								</div>

								<div className="population">
									<span className="field-key">Population:</span>
									<span className="field-value">{country.population.toLocaleString("en-US")}</span>
								</div>

								<div className="region">
									<span className="field-key">Region:</span>
									<span className="field-value">{country.region}</span>
								</div>

								<div className="sub-region">
									<span className="field-key">Sub Region:</span>
									<span className="field-value">{country.subregion}</span>
								</div>

								<div className="capital">
									<span className="field-key">Capital:</span>
									<span className="field-value">{country.capital.join(", ")}</span>
								</div>
							</div>

							<div className="country-info-social">
								<div className="top-level-domain">
									<span className="field-key">Top Level Domain:</span>
									<span className="field-value">{country.tld}</span>
								</div>

								<div className="currencies">
									<span className="field-key">Currencies:</span>
									<span className="field-value">{selectedCountryCurrencies}</span>
								</div>

								<div className="languages">
									<span className="field-key">Languages:</span>
									<span className="field-value">{selectedCountryLanguages.join(", ")}</span>
								</div>
							</div>
						</div>

						<div className="border-countries">
							<p className="text">Border Countries:</p>

							<div className="border-links-wrapper">
								{country.borders ? (
									formattedBorderCountries.map((border, index) => (
										<Link className="border-link" key={index}>
											{border}
										</Link>
									))
								) : (
									<div className="empty-border border-link">
										This country has no border countries
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export { DetailPage };
