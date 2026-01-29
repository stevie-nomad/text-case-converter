function convert(type) {
    const input = document.getElementById("inputText").value.trim();
    let output = "";

    switch (type) {
      case "uppercase":
        output = input.toUpperCase();
        break;

      case "lowercase":
        output = input.toLowerCase();
        break;

      case "title":
        output = input
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        break;

      case "sentence":
        output = input
          .toLowerCase()
          .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
        break;

      case "camelCase":
        output = input
          .replace(/[^a-zA-Z0-9\s]/g, ' ')
          .split(/[\s]+/)
          .map((word, index) => {
            if (index === 0) {
              return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join('');
        break;

      case "PascalCase":
        output = input
          .replace(/[^a-zA-Z0-9\s]/g, ' ')
          .split(/[\s]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('');
        break;

      case "snake_case":
        output = input
          .replace(/[^a-zA-Z0-9\s]/g, ' ')
          .split(/[\s]+/)
          .join('_')
          .toLowerCase();
        break;

      case "kebab-case":
        output = input
          .replace(/[^a-zA-Z0-9\s]/g, ' ')
          .split(/[\s]+/)
          .join('-')
          .toLowerCase();
        break;

      case 'mixedCase':
        output = input.split('').map((char, index) => 
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
            .join('');
      break;

      default:
        output = input;
    }

    document.getElementById("output").textContent = output;
  }

  function copyText() {
    const output = document.getElementById("output").textContent;
    if (!output) return;

    navigator.clipboard.writeText(output).then(() => {
      const msg = document.getElementById("successMsg");
      msg.classList.add("show");
      setTimeout(() => {
        msg.classList.remove("show");
      }, 2000);
    });
  }

  // Optional: Live preview as you type
  document.getElementById("inputText").addEventListener("input", function () {
    // Optionally trigger last conversion on type, or clear output
    document.getElementById("output").textContent = "";
    document.getElementById("successMsg").classList.remove("show");
  });