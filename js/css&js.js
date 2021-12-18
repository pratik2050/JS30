const inp = document.querySelectorAll('.controls input');

function handleUpdates() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inp.forEach(inp => inp.addEventListener('change', handleUpdates));
inp.forEach(inp => inp.addEventListener('mousemove', handleUpdates));