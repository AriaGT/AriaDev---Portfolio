/** @type { Object.<Language, NavItem[]> } */
export const NavItems = {
	ES: [
		{
			name: 'Sobre mí',
			route: 'about'
		},
		{
			name: 'Portafolio',
			route: 'portfolio'
		},
		{
			name: 'Contáctame',
			route: 'contact'
		}
	],
	EN: [
		{
			name: 'About me',
			route: 'about'
		},
		{
			name: 'Portfolio',
			route: 'portfolio'
		},
		{
			name: 'Contact me',
			route: 'contact'
		}
	],
};

// Can add a * to make a bold  word
/** @type { Object.<Language, Object.<Route, { main: String, front: String }>> } */
export const HeaderMessages = {
	ES: {
		main: {
			back: 'Desarrollo y Análisis',
			front: '*FullStack en programación de sitios *web y *aplicaciones'
		},
		about: {
			back: 'Trabajo en equipo',
			front: 'Aplico *soluciones *modernas para tus proyectos'
		},
		portfolio: {
			back: 'Conoce mi trabajo',
			front: 'A continuación te enseño todos los *proyectos que he realizado'
		},
		contact: {
			back: 'Generemos resultados',
			front: 'Contáctame para hacer *realidad tus proyectos'
		}
	},
	EN: {
		main: {
			back: 'Development and Analysis',
			front: 'FullStack in programming *websites and *applications'
		},
		about: {
			back: 'Teamwork',
			front: 'I apply *modern *solutions for your projects'
		},
		portfolio: {
			back: 'Know my work',
			front: "Below I'll show you all the *projects I've done"
		},
		contact: {
			back: "Let's generate results",
			front: 'Contact me to make your *projects come *true'
		}
	}
};
