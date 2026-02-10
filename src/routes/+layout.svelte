<script>
    import './app.css';
    import logo from "$lib/assets/logo.svg";

	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte Motion Explorers</title>
	<link rel="icon" href={logo} />
</svelte:head>

<div class="app_container">
    <header class="app_header">
        <div class="container header_content">
            <a href="/svelte-motion-examples" class="site_title">
                <img class="logo" src={logo} alt="svelte motion" width="30" />
                Svelte Motion Explorer
            </a>
        </div>

        <nav></nav>
    </header>

    <!-- Main Section -->
     <main class="app_main">
        {@render children()}
     </main>

     <!-- Footer Section -->
      <footer class="app_footer">
        <div class="container footer_content">
            <p class="footer_text">Built with 💜 by Donny C. Powered by Svelte</p>
        </div>
      </footer>
</div>


<style>
    .app_container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .app_header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        border-bottom: 1px solid hsl(var(--border));
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        background-color: hsl(var(--secondary) / .8);
    }

    .header_content {
        display: flex;
        align-items: center;
        padding-block: 1rem;
    }

    .site_title {
        display: flex;
        align-items: center;
        gap: .5rem;
        color: hsl(var(--primary));
        font-size: 1.125rem;
        text-decoration: none;
    }

    .app_main {
        display: grid;
        place-items: center;
        flex-grow: 1;
        height: 100%;
    }

    .app_footer {
        padding: 1.5rem 0;
    }

    .footer_text {
        font-size: .875rem;
        color: hsl(var(--muted-foreground));
        text-align: center;
    }
</style>