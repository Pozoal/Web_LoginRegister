<script lang="ts">
  import { redirect } from "@roxi/routify"
  import { Chasing } from "svelte-loading-spinners"
  import { onMount } from "svelte"

  onMount( () => {
      $redirect("./login/index");
      
    });
</script>


<div class="flex justify-center h-full items-center">
  <Chasing color="#0ba5e3"/>
</div>