import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

function DetailPage() {
	const { data, scrollLocation } = useSelector((state) => state.countries);
	const location = useLocation();
	const navigate = useNavigate();

	const fullUrl = location.pathname;
	const splittedUrl = location.pathname.split("/");
	const selectedCountryName = splittedUrl[splittedUrl.length - 1].replaceAll("_", " ");

	const selectedCountryArray = data.filter((country) => country.name === selectedCountryName);
	const selectedCountry = selectedCountryArray[0];

	const selectedCountryCurrencies = selectedCountry.currencies[0].name;

	const selectedCountryLanguages = selectedCountry.languages.map((languages) => languages.name);

	const formattedBorderCountries = selectedCountry.borders?.map((border) => {
		const matchedCountries = data.find((country) => country.alpha3Code === border);

		return matchedCountries.name;
	});

	const handleNavigate = (border) => {
		const dashedBorderName = border.split(" ").join("_");

		navigate(`${fullUrl}/${dashedBorderName}`);
	};

	const handleGoBack = () => {
		splittedUrl.pop();
		const triggerTimeAfterNavigate = 500;

		if (splittedUrl.length > 1) {
			navigate(`${splittedUrl.join("/")}`);
		} else {
			navigate("/");

			// If omit delay some of the scroll pixels is applying to detail page.
			setTimeout(() => {
				window.scrollTo({
					top: scrollLocation,
					behavior: "smooth",
				});
			}, triggerTimeAfterNavigate);
		}
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	return (
		<div className="country-detail">
			<button className="go-back-button" onClick={() => handleGoBack()}>
				<FaArrowLeftLong className="arrow-icon" />
				Back
			</button>

			{selectedCountryArray.map((country) => (
				<div className="country" key={country.name}>
					<img src={country.flags.png} alt={country.flags.alt} />

					<div className="country-info">
						<p className="country-name">{country.name}</p>

						<div className="country-info-wrapper">
							<div className="country-info-geographics">
								<div className="native-name">
									<span className="field-key">Native Name:</span>
									<span className="field-value">{country.nativeName}</span>
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
									<span className="field-value">{country.capital}</span>
								</div>
							</div>

							<div className="country-info-social">
								<div className="top-level-domain">
									<span className="field-key">Top Level Domain:</span>
									<span className="field-value">{country.topLevelDomain[0]}</span>
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
										<button
											onClick={() => handleNavigate(border)}
											className="border-link"
											key={index}
										>
											{border}
										</button>
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
