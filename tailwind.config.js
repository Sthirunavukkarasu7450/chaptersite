module.exports = {
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}'
    ],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            }
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("postcss-import"),
    ],
    daisyui: {
        styled: true,
        themes: [{
            mytheme: {

                "primary": "#ff0000",

                "secondary": "#2563eb",

                "accent": "#f3f4f6",

                "neutral": "#1E2438",

                "base-100": "#e0f2fe",

                "info": "#339BEB",

                "success": "#2EDCAA",

                "warning": "#D17E0A",

                "error": "#F73C2B",
            },
        }, ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
}