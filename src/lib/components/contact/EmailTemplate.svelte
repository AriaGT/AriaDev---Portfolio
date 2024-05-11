<script>
	import { Hr, Html, Text } from 'svelte-email'
	export let /** @type { string }*/ name
	export let /** @type { string }*/ organization
	export let /** @type { string }*/ message
</script>

<Html lang="en">
	<Text>
		{ `Nombre del cliente: ${ name }` }
	</Text>
  <Hr />
	{#if organization}
		<Text>
			{ `Empresa del cliente: ${ organization }` }
		</Text>
		<Hr />
	{/if}
	<Text>
		{ `Mensaje: ${ message }` }
	</Text>
</Html>
