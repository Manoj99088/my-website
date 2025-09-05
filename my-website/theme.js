const STORAGE_KEY = "theme";

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function preferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let current = preferredTheme();
applyTheme(current);

const btn = document.getElementById("theme-toggle");
if (btn) {
  btn.textContent = current === "dark" ? "☀️ Light" : "🌙 Dark";

  btn.addEventListener("click", () => {
    current = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, current);
    applyTheme(current);
    btn.textContent = current === "dark" ? "☀️ Light" : "🌙 Dark";
  });
}

/* If user hasn't chosen a theme, follow system changes in real time */
const mq = window.matchMedia("(prefers-color-scheme: dark)");
mq.addEventListener?.("change", (e) => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return; // user has a choice; don't override
  current = e.matches ? "dark" : "light";
  applyTheme(current);
  if (btn) btn.textContent = current === "dark" ? "☀️ Light" : "🌙 Dark";
});
