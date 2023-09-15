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
			back: 'AriaDev FullStack',
			front: '*Desarrollo, diseño *web & *apps'
		},
		about: {
			back: 'Trabajo en equipo',
			front: 'Aplico *soluciones *modernas & eficaces'
		},
		portfolio: {
			back: 'Conoce mi trabajo',
			front: 'Descubre todos los *proyectos que he realizado'
		},
		contact: {
			back: 'Generemos resultados',
			front: 'Contáctame para hacer *realidad tus proyectos'
		}
	},
	EN: {
		main: {
			back: 'AriaDev FullStack',
			front: 'Design & build *webs and *apps'
		},
		about: {
			back: 'Team & Feedback',
			front: 'Apply *modern *solutions for your projects'
		},
		portfolio: {
			back: 'Know my work',
			front: "Discover the *projects I've launched"
		},
		contact: {
			back: "Go to success",
			front: 'Contact me to make your *projects come *true'
		}
	}
};
