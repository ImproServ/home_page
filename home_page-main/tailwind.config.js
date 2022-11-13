/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                mask: "rgba(0, 0, 60, 0.4)",
                primary: {
                    light: "#33cccc",
                    temp: "#3C70B8",
                },
                secondary: {
                    light: "#EDEDED",
                },
            },
            screens: {
                xs: "25rem",
            },
            backgroundImage: {
                gradient: "linear-gradient(88.96deg, #0748A4 0.86%, #3C70B8 84.64%)",
                "whyus-gradient-opaque": "linear-gradient(90deg, transparent, #424540 50%)",
                "whyus-gradient-transparent": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
            },
            backgroundPosition: {
                "right-1": "center right -10rem",
            },
        },
    },
    plugins: [],
};
