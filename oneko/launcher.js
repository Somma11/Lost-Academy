(function () {
    const spriteUrl = "https://github.com/Somma11/Llost-Academy/blob/main/oneko/fenrir.png?raw=true"; // Certifique-se que o nome está igual
    
    // O Oneko original usa 32x32, mas a imagem da IA é grande.
    // Vamos definir quantas COLUNAS e LINHAS a imagem tem.
    const cols = 8; 
    const rows = 3;

    const dragon = document.createElement("div");
    dragon.style.position = "fixed";
    dragon.style.pointerEvents = "none";
    dragon.style.zIndex = "9999";
    dragon.style.backgroundImage = `url('${spriteUrl}')`;
    dragon.style.imageRendering = "pixelated"; // Mantém o estilo retrô
    document.body.appendChild(dragon);

    let mouseX = 0, mouseY = 0, dragonX = 0, dragonY = 0;
    let frame = 0, idleTime = 0, isFiring = false;

    // Ajuste automático de escala
    let frameW = 0, frameH = 0;

    const img = new Image();
    img.src = spriteUrl;
    img.onload = () => {
        // Calcula o tamanho de cada frame baseado na imagem que a IA gerou
        frameW = img.width / cols;
        frameH = img.height / rows;
        
        // Redimensiona o dragão para um tamanho visível (ex: 64px)
        const scale = 64 / frameW; 
        dragon.style.width = `${frameW}px`;
        dragon.style.height = `${frameH}px`;
        dragon.style.transformOrigin = "top left";
        dragon.style.transform = `scale(${scale})`; // Ajusta o tamanho na tela
        
        render();
    };

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

     function render() {
        let diffX = mouseX - dragonX;
        let diffY = mouseY - dragonY;
        let dist = Math.sqrt(diffX * diffX + diffY * diffY);

        let col = 0;
        let row = 0;

        if (dist > 10 && !isFiring) {
            idleTime = 0;
            // Lógica de Movimento
            dragonX += diffX * 0.01;
            dragonY += diffY * 0.01;
            
            // Verifica se está indo para a direita ou esquerda
            let isRight = diffX > 0;

            // Define a linha da animação (0=esquerda, 1=direita na sua lógica atual)
            row = isRight ? 1 : 0; 

            // --- CORREÇÃO AQUI ---
            // Calcula o índice do frame (0, 1, 2, 3)
            let frameIndex = Math.floor(Date.now() / 120) % 4;

            if (isRight) {
                // Se for direita, usa as colunas 0, 1, 2, 3
                col = frameIndex; 
            } else {
                // Se for esquerda, pula para as colunas 4, 5, 6, 7
                col = 4 + frameIndex; 
            }
            // ---------------------

        } else {
            // Lógica de Idle / Fogo
            idleTime++;
            if (idleTime > 100) isFiring = true;

            if (isFiring) {
                row = 2; // Linha do fogo
                col = Math.floor(Date.now() / 100) % 8;
                if (idleTime > 200) { isFiring = false; idleTime = 0; }
            } else {
                row = 0; col = 3; // Frame parado fofinho
            }
        }

        dragon.style.left = `${dragonX - (frameW / 2)}px`;
        dragon.style.top = `${dragonY - (frameH / 2)}px`;
        dragon.style.backgroundPosition = `-${col * frameW}px -${row * frameH}px`;

        requestAnimationFrame(render);
    }
})();