/** @type { NavItem[] } */
export const NavItems = ['about', 'portfolio', 'contact']

// Can add a * to make a bold  word
/** @type { Object.<String, Object.<Route, { main: String, front: String }>> } */
export const HeaderMessages = {
	"es": {
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
	"en": {
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
