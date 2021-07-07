<script>
  
  // import ModernLayout from '../layouts/modern.svelte'
  import { redirect } from "@roxi/routify"
  import { onMount } from "svelte";

  // const { user, signout, loading } = authStore
  // $: if (!$user && !$loading) $redirect("/login")

  // temp to ensure nav is on all pages. Find a better place for this
  // import appLogo from '../assets/logo.png'
  // import { Dashboard20, Settings20, Task20, ChartStepper20 } from "carbon-icons-svelte"
  // import { navItems, activeNavItem, logo } from "../lib/store"
  // navItems.set([
  //   { icon: Dashboard20, text: "Dashboard", name: "dashboard", url: "/dashboard" },
  //   { icon: Task20, text: "Clients", name: "clients", url: "/clients" },
  //   // { icon: ChartStepper20, text: "Reports", name: "reports", url: "/reports" },
  //   { icon: Settings20, text: "Settings", name: "settings", url: "/settings" }
  // ])
  // // activeNavItem.set("home")
  // logo.set(appLogo)
</script>

<!-- <ModernLayout>
  <svelte:fragment slot="body"> -->
    <slot>Loading...</slot>
  <!-- </svelte:fragment>
</ModernLayout> -->