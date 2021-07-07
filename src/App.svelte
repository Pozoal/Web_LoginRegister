<script>
  import { Router } from "@roxi/routify"
  import { routes } from "../.routify/routes"

  // we need to queue our init till after Routify has been initialized
  //setTimeout(() => window.routify.inBrowser && authStore.init())
</script>


<Router {routes} />


<style global>
  @import "carbon-components-svelte/css/all.css"; 
  @import "@pnotify/core/dist/BrightTheme.css";
</style>