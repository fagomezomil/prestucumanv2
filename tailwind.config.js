/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sofiacond: [
  				'Sofia Sans Condensed',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			left: '0 0 20px 2px rgba(0, 0, 0, 0.1)'
  		},
  		fontWeight: {
  			'100': 100,
  			'200': 200,
  			'300': 300,
  			'400': 400,
  			'500': 500,
  			'600': 600,
  			'700': 700,
  			'800': 800,
  			'900': 900
  		},
  		colors: {
  			historica: {
  				'1': '#55ACB8',
  				DEFAULT: '#01415C'
  			},
  			yungas: {
  				'1': '#a1c372',
  				DEFAULT: '#66ac7c'
  			},
  			choromoro: {
  				'1': '#FAAB36',
  				DEFAULT: '#FD5901'
  			},
  			calchaqui: {
  				'1': '#D34040',
  				DEFAULT: '#9E2D2C'
  			},
  			sur: {
  				'1': '#8CB8A2',
  				DEFAULT: '#508E6D'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  safelist: [
    'text-historica',
    'text-historica-1',
    'bg-historica',
    'bg-historica-1',
    'text-yungas',
    'text-yungas-1',
    'bg-yungas',
    'bg-yungas-1',
    'text-choromoro',
    'text-choromoro-1',
    'bg-choromoro',
    'bg-choromoro-1',
    'text-calchaqui',
    'text-calchaqui-1',
    'bg-calchaqui',
    'bg-calchaqui-1',
    'text-sur',
    'text-sur-1',
    'bg-sur',
    'bg-sur-1',
  ],
//   plugins: [require("tailwindcss-animate")],
};
