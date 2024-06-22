<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div class="container-xxl">
            <router-link to="/" class="navbar-brand">
                <span class="logo" role="img" aria-label="Niewiaro logo"></span>
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
                        <router-link to="/" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            About
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';

a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

a:hover {
    color: $primary;
}

a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $primary;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

a:hover::after,
.router-link-active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.logo {
    height: 2em;
    width: 2em;
    background-image: url('/github-morda.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 1em;
}

.logo:hover {
    filter: drop-shadow(0 0 2em $primary);
}

.navbar {
    background-color: #f8f9fa;
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    outline: none;
    box-shadow: none;
}

.navbar-toggler-icon {
    color: $primary;
}
</style>