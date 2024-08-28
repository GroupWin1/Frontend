const config = {
    baseApiUrl: "https://localhost:7071"
}

const currencyFormatter = Intl.NumberFormat("vi", {
    style: "currency",
    currency: "vnd",
    maximumFractionDigits: 0
});
export default config;
export { currencyFormatter };