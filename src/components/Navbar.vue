<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div class="container-xxl">
            <router-link to="/" class="navbar-brand">
                <picture>
                    <img src="/public/github-morda.png" class="logo" alt="Vite logo">
                </picture>
                <span class="fw-bold text-secondary">
                    Niewiaro
                </span>
            </router-link>
            <!-- toggle button for mobile nav -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- navbar links -->
            <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="navbar-brand">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="navbar-brand">
                            About
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.logo {
    height: 4em;
    padding: 1em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
</style>