<script lang="ts">
	import { Button, } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
    import { createForm } from 'felte';

    export let onSubmit: (data: any) => void;
    export let defaultValues: any;
    
    const {form, setFields} = createForm({
        initialValues: {
            name: defaultValues?.name ?? '',
        },
        onSubmit: onSubmit,
        debounced: true
    });

    $: {
        setFields(defaultValues ?? {});
    }
</script>


<Dialog.Content on:visibilitychange class="sm:max-w-[425px]">
    <Dialog.Title>Nueva colección de cumpleañeros🎂</Dialog.Title>
    <form use:form  class="w-100 flex flex-col items-csenter justify-space-around gap-3">
        <Input name="name" type="text" placeholder="Nombre" />
        
        <Dialog.Footer>
            <Button type="submit">Save changes</Button>
        </Dialog.Footer>

    </form>
</Dialog.Content>

