const images = [
    "img/pet (1).jpg",
    "img/pet (2).webp",
    "img/pet (2).jpg",
  ];
  let currentIndex = 0;
  const imageElement = document.querySelector(".card-image");

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  function redirectToAdoptionPage() {
    window.open("form.html", "_blank"); // "_blank" digunakan untuk membuka halaman dalam tab atau jendela baru
  }
  

  const canvas = document.getElementById('signature-canvas');
    const ctx = canvas.getContext('2d');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', drawSignature);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    function drawSignature(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function saveSignature() {
        const signatureData = canvas.toDataURL();
        document.getElementById('signature').value = signatureData;
        // Jika Anda ingin mengirimkan tanda tangan ke server, Anda dapat melakukannya di sini
        console.log(signatureData);
    }
  