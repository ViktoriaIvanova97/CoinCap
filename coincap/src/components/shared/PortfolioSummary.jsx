import React from 'react'
function PortfolioSummary({ totalSum, onClick }) {
	return (
		<div className="portfolio-block" onClick={onClick}>
            Портфель: {totalSum} USD
          </div>
	)
}

export default React.memo(PortfolioSummary)