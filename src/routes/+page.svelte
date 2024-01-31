<script>
	import * as Form from "$lib/components/ui/form";
	import { Input } from "$lib/components/ui/input";
	import Button from "$lib/components/ui/button/button.svelte";

</script>

<div class="flex gap-2 flex-row flex-wrap items-center justify-around w-3/4 m-auto h-screen">
    
    <form class="w-80 flex flex-col items-center justify-space-around gap-3">
        <h1 class="text-xl">
            🎂Colección de cumpleañeros🎂
        </h1>
        
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Contraseña" />

        <Button class='w-full'>Iniciar Sesión</Button>
    </form>

    
    <form class="w-80 mt-20 flex flex-col items-center justify-space-around gap-3 self-center mb-20">
        <h1 class="text-2xl">
            🎊 Ver lista cumpleañeros 🎉
        </h1>
        <Input type="text" placeholder="Ingresar código de cumpleaños" />

        <Button class='w-full'>Ver cumpleaños</Button>
    </form>
    
    
</div>