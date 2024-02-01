<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	// import { changeUser, } from '../redux/userReducer';
	import { userWritable } from '../stores/user.store';
	import AuthService from '../services/auth.service';
	import { loadFormData } from '../utils/form.utils';

	const authService = new AuthService();

	const onLogin = async (e) => {
		const data = loadFormData(e.target);
		const response = await authService.login(data);
		userWritable.set(response);
		goto('/home');
	};
	userWritable;

	const onSubmitCode = (e) => {
		const data = loadFormData(e.target);
		goto(`/birthday/${data.code}`);
	};
</script>

<div class="flex gap-2 flex-row flex-wrap items-center justify-around w-3/4 m-auto h-screen">
	<form
		on:submit|preventDefault={onLogin}
		class="w-80 flex flex-col items-csenter justify-space-around gap-3"
	>
		<h1 class="text-xl">🎂Colección de cumpleañeros🎂</h1>

		<Input name="email" type="email" placeholder="Email" />
		<Input name="password" type="password" placeholder="Contraseña" />

		<Button type="submit" class="w-full">Iniciar Sesión</Button>
	</form>

	<form
		on:submit|preventDefault={onSubmitCode}
		class="w-80 mt-20 flex flex-col items-center justify-space-around gap-3 self-center mb-20"
	>
		<h1 class="text-2xl">🎊 Ver lista cumpleañeros 🎉</h1>
		<Input name="code" type="text" placeholder="Ingresar código de cumpleaños" />

		<Button type="submit" class="w-full">Ver cumpleaños</Button>
	</form>
</div>
