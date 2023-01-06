module.exports = {
    extend: {
        screens: {
            'sm': '576px',
            'sm-down': { 'max': '575px' },
            'md': '768px',
            'md-down': { 'max': '767px' },
            'lg': '1025px',
            'lg-down': { 'max': '1024px' },
            'xl': '1240px',
            'xl-down': { 'max': '1239px' },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            black: '#000',
            white: '#fff',

            // https://brandcolors.net/
            facebook: '#3b5998',
            twitter: '#1da1f2',
            linkedin: '#0077b5',

            dark: '#2e2e2e',

            tertiary: {
                light: '#ff968c',
                base: '#FC766AFF',
                hover: '#e85d51',
                dark: '#cc4135',
            },

            primary: {
                lighter: '#D5C0C0',
                light: '#9d5654',
                base: '#783937FF',
                hover: '#5b2523',
                dark: '#421513',
            },

            secondary: {
                light: '#f8c0a2',
                base: '#F1AC88FF',
                hover: '#e79e78',
                dark: '#d9875e',
            },

            gray: {
                50: '#f8f8f8',
                100: '#e3e3e3',
                200: '#c6c6c6',
                300: '#aaaaaa',
                400: '#8d8d8d',
                500: '#717171',
                600: '#5a5a5a',
                700: '#444444',
                800: '#2d2d2d',
                900: '#171717',
            },
        },
        maxWidth: (theme) => ({
            ...theme('spacing'),
            fullContainer: '1440px',
            xl: '1280px',
            container: '1192px',
            md: '768px',
            sm: '575px',
            450: '450px',
            xs: '320px',
            full: '100%',
        }),
        width: (theme) => ({...theme('maxWidth')}),
        minHeight: {
            'half': '50vh'
        },
        maxHeight: {
            '600px': '600px'
        },
        spacing: {
            '14': '3.5rem',
        },
        inset: (theme) => ( {
            ...theme('spacing'),
            50: '50%',
            100: '100%',
        } ),
        fontFamily: {
            core: [
                'ShareTechMono'
            ],
            heading: [
                'FiraSans',
                'Arial',
            ],
            icon: [
                'Icomoon',
            ],
        },
        fontSize: {
            '3xl': '1.75rem',
            '4xl': '2rem',
            '5xl': '2.5rem',
            '6xl': '2.75rem',
        },
        lineHeight: {
            light: '1.1'
        },
        zIndex: {
            '-1': -1,
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            header: 1100,
            fixed: 1200,
            popup: 1300,
            max: 9999,
        },
        cursor: {
            'zoom-in': 'zoom-in',
        },
    }
}
