<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';

    export let content: string;
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild let:builder>
		<slot {builder}	/>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{content}</p>
	</Tooltip.Content>
</Tooltip.Root>
