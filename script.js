/* =========================================================
   LETÍCIA CABRAL — XV ANOS
   JAVASCRIPT
========================================================= */


/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.getElementById("navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* =========================================================
   MENU MOBILE
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });

}


/* =========================================================
   CONTAGEM REGRESSIVA
========================================================= */

/*
   01 de novembro de 2026
   às 20:30

   O horário usa o horário local
   do navegador.
*/

const eventDate =
    new Date(
        "2026-11-01T20:30:00"
    ).getTime();


function updateCountdown() {

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return;
    }


    const now =
        new Date().getTime();


    const distance =
        eventDate - now;


    if (distance <= 0) {

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList
                            .add("in-view");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* =========================================================
   PARTÍCULAS DOURADAS
========================================================= */

const particlesContainer =
    document.getElementById("particles");


if (particlesContainer) {

    function createParticle() {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "particle"
        );


        const size =
            Math.random() * 4 + 2;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${Math.random() * 7 + 5}s`;


        particle.style.animationDelay =
            `${Math.random() * 3}s`;


        particlesContainer.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 13000);

    }


    setInterval(
        createParticle,
        500
    );

}


/* =========================================================
   PRESENTES — MODAL DE DETALHES
========================================================= */

/*
   Conteúdo de cada categoria.

   Para editar os itens da lista,
   basta alterar o texto abaixo —
   não é necessário mexer no HTML.
*/

const giftData = {

    moda: {
        icon: "♡",
        title: "Moda & Calçados",
        items: [
            { label: "Roupas", text: "Tamanho PP ou 34." },
            { label: "Calçados", text: "Número 35 — Crocs, Melissa, tênis e sandálias são sempre bem-vindos." }
        ]
    },

    joias: {
        icon: "✦",
        title: "Joias & Acessórios",
        items: [
            { label: "Anel", text: "Tamanho 14." },
            { label: "Material", text: "Preferência por prata. A debutante tem alergia a bijuterias e a outros metais, então prata é sempre a escolha mais segura." },
            { label: "Berloques", text: "Berloques e acessórios em prata também são bem-vindos." }
        ]
    },

    beleza: {
        icon: "♡",
        title: "Beleza",
        items: [
            { label: "Perfumes", text: "Qualquer fragrância é bem-vinda." },
            { label: "Maquiagens", text: "Itens de maquiagem em geral." }
        ]
    },

    bolsas: {
        icon: "✦",
        title: "Bolsas & Personalizados",
        items: [
            { label: "Bolsas", text: "Bolsas em geral." },
            { label: "Personalizados", text: "Produtos e acessórios personalizados com o nome dela." }
        ]
    }

};


const giftCategoryButtons =
    document.querySelectorAll(".gift-category");

const giftDetailModal =
    document.getElementById("giftDetailModal");

const giftDetailClose =
    document.getElementById("giftDetailClose");

const giftDetailIcon =
    document.getElementById("giftDetailIcon");

const giftDetailTitle =
    document.getElementById("giftDetailTitle");

const giftDetailText =
    document.getElementById("giftDetailText");


function openGiftDetailModal(key) {

    const data = giftData[key];

    if (!data || !giftDetailModal) {
        return;
    }

    if (giftDetailIcon) {
        giftDetailIcon.textContent = data.icon;
    }

    if (giftDetailTitle) {
        giftDetailTitle.textContent = data.title;
    }

    if (giftDetailText) {

        giftDetailText.innerHTML = data.items.map(item => `
            <div class="detail-group">
                <strong>${item.label}</strong>
                <p>${item.text}</p>
            </div>
        `).join("");

    }

    giftDetailModal.classList.add("show");

}


function closeGiftDetailModal() {

    if (giftDetailModal) {

        giftDetailModal.classList.remove("show");

    }

}


if (giftCategoryButtons.length && giftDetailModal) {

    giftCategoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const key =
                button.dataset.gift;

            openGiftDetailModal(key);

        });

    });


    if (giftDetailClose) {

        giftDetailClose.addEventListener(
            "click",
            closeGiftDetailModal
        );

    }


    giftDetailModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                giftDetailModal
            ) {

                closeGiftDetailModal();

            }

        }

    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                giftDetailModal.classList.contains("show")
            ) {

                closeGiftDetailModal();

            }

        }

    );

}


/* =========================================================
   PIX

   (fica pronto caso uma seção de
   chave Pix com os ids #copyPix
   e #pixKey seja adicionada
   futuramente — não quebra nada
   se ela não existir)
========================================================= */

const copyPix =
    document.getElementById(
        "copyPix"
    );


const pixKey =
    document.getElementById(
        "pixKey"
    );


if (copyPix && pixKey) {

    copyPix.addEventListener(
        "click",
        async () => {

            const text =
                pixKey.textContent.trim();


            try {

                await navigator.clipboard
                    .writeText(text);


                copyPix.textContent =
                    "Copiado! ✓";


                setTimeout(() => {

                    copyPix.textContent =
                        "Copiar Pix";

                }, 2000);


            } catch (error) {

                alert(
                    "Não foi possível copiar automaticamente. Selecione a chave Pix manualmente."
                );

            }

        }
    );

}


/* =========================================================
   CONFIRMAÇÃO — TOGGLE SIM / NÃO
========================================================= */

const attendanceButtons =
    document.querySelectorAll(
        ".attendance-button"
    );


let attendance =
    "Sim";


attendanceButtons.forEach(button => {

    if (button.classList.contains("active")) {

        attendance = button.dataset.value;

    }

    button.addEventListener(
        "click",
        () => {

            attendance =
                button.dataset.value;


            attendanceButtons
                .forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


            button.classList.add(
                "active"
            );

        }

    );

});


/* =========================================================
   RSVP

   O formulário não redireciona
   mais para o WhatsApp. Os dados
   são salvos no localStorage do
   navegador, na chave "rsvps",
   como uma lista de objetos JSON.

   Quando o backend (Google Forms,
   Firebase ou Supabase) estiver
   definido, basta substituir o
   bloco "SALVAR OS DADOS" abaixo
   por uma chamada fetch()/SDK que
   envie 'rsvpData' para o serviço
   escolhido.
========================================================= */

const rsvpForm =
    document.getElementById(
        "rsvpForm"
    );

const rsvpSuccess =
    document.getElementById(
        "rsvpSuccess"
    );

const rsvpSuccessName =
    document.getElementById(
        "rsvpSuccessName"
    );


if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const nameInput =
                document.getElementById("name");

            const guestsInput =
                document.getElementById("guests");

            const messageInput =
                document.getElementById("message");


            const name =
                nameInput ? nameInput.value.trim() : "";

            const guests =
                guestsInput ? guestsInput.value : "0";

            const message =
                messageInput ? messageInput.value.trim() : "";


            const rsvpData = {

                name,
                guests,
                attendance,
                message,
                date: new Date().toISOString()

            };


            /* ============ SALVAR OS DADOS ============ */

            try {

                const existing =
                    JSON.parse(
                        localStorage.getItem("rsvps") || "[]"
                    );

                existing.push(rsvpData);

                localStorage.setItem(
                    "rsvps",
                    JSON.stringify(existing)
                );

            } catch (error) {

                console.error(
                    "Não foi possível salvar a confirmação localmente:",
                    error
                );

            }

            /* =========================================== */


            rsvpForm.reset();

            attendance = "Sim";

            attendanceButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            if (attendanceButtons.length) {

                attendanceButtons[0].classList.add("active");

            }


            if (rsvpSuccess) {

                if (rsvpSuccessName) {

                    rsvpSuccessName.textContent =
                        name || "";

                }

                rsvpForm.style.display = "none";

                rsvpSuccess.classList.add("show");

                rsvpSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            } else {

                alert("Presença confirmada! Obrigado por responder.");

            }

        }

    );

}