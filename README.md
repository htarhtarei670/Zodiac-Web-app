# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 //to calculate date to get sign
useEffect(() => {
    if (birth) {
        const day = birth.getDate();
        const month = birth.getMonth() + 1;

        // Determine the Zodiac sign based on the birth date
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
            setSign("Aries");
        else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
            setSign("Taurus")
        else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
            setSign("Gemini");
        else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
            setSign("Cancer");
        else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
            setSign("Leo");
        else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
            setSign("Virgo");
        else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
            setSign("Libra");
        else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
            setSign("Scorpio");
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
            setSign("Sagittarius");
        else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
            setSign("Capricorn");
        else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
            setSign("Aquarius");
        else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
            setSign("Pisces");
        else
            console.log('there is no sign');
    }
}, [birth])