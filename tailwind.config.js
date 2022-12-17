/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#25262b",
                secondary: "#282b2f",
                accent: "#2f3136",

                orange: "#e27536",
                orange2: "#d55e17",
                yellow: "#fff39b",
                green: "#65c981",
                brightGreen: "#abea96",
                blue: "#94d4f1",
                red: "#f66e67",
                gold: "#ffd700",
                gray: "#808080",
            },
            animation: {
                fade: "fadeIn 0.5s ease-in-out",
            },
            keyframes: () => ({
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            }),
        },
    },
    plugins: [],
};
