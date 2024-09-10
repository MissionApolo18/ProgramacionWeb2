function showPhrase(imageNumber) {
    const phrases = {
        1: "Quiero vivir, enamorarme y morir como todos, quiero seguir amando mas. -Himiko Toga",
        2: "El pasado no puede ser apagado, lo que aquí se hace, aquí se paga -Touya Todoroki / Dabi",
        3: "Todo lo que vive y respira me molesta. Entonces, ¿por qué no destruirlo todo? -Shigaraki Tomura",
        4: "Un objetivo sin un plan es solo una ilusión. Si me ofreces una ilusión, ¿cómo debería reaccionar? -Overhaul",
        5: "Dejarse llevar por el odio que hay frente a uno e intentar satisfacer los propios deseos es lo más alejado de lo que un héroe debería ser. -El asesino de Herores Stain"
    };

    document.getElementById('phrase').textContent = phrases[imageNumber];
}
