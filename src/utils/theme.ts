document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle") as HTMLButtonElement | null;
    const html = document.documentElement;

    const systemPrefersDark: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme: string | null = localStorage.getItem("theme");

    if (savedTheme) {
        html.classList.toggle("dark", savedTheme === "dark");
    } else {
        html.classList.toggle("dark", systemPrefersDark);
    }
    console.log(savedTheme, themeToggle);
    

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDarkMode = html.classList.toggle("dark");
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        });
    }
});

