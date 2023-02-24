<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let files

    $: if (files) {
		dispatch('files', {
			file_list: files
		});
	}


</script>

<label for="many">Upload xlsx files:</label>
<input
	bind:files
	id="many"
	multiple
	type="file"
    accept=".xlsx"
/>