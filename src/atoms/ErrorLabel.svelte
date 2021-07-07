<script lang="ts">
  export let message = ""
</script>

{#if message}
<p class="text-red-400 font-bold italic">{message}</p>
{/if}