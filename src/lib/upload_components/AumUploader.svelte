<script>    
    import Uploader from "./Uploader.svelte";
    import AumHandler from "./AumHandler.svelte";

    let files = []

    function handle_files(e) {
        console.log(e.detail.file_list)
        files = e.detail.file_list        
    }    

</script>

<Uploader on:files={handle_files} />

{#each files as file}
    <AumHandler {file}>
        <slot />
    </AumHandler>
{/each}