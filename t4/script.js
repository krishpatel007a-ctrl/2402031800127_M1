const themeToggle =
    document.getElementById(
        "themeToggle"
    );

if (
    localStorage.getItem("theme") ===
    "dark"
) {

    document.body.classList.add(
        "dark-theme"
    );

    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-theme"
        );

        if (
            document.body.classList.contains(
                "dark-theme"
            )
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.innerHTML = "☀️";

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.innerHTML = "🌙";

        }

    }
);