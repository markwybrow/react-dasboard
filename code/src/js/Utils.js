export function formatDate(dateStr) {
	const dte = new Date(dateStr);
	return `${dte.getDate()} ${Months[dte.getMonth()]} ${dte.getFullYear()}`;
}

const Months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

