    // UI, logs, dés, tooltips, toasts, rendu

window.UI = (() => {
    const logEl = document.getElementById("log");
    const statsContent = document.getElementById("stats-content");
    const partyContent = document.getElementById("party-content");
    const menuButtons = document.getElementById("menu-buttons");
    const actionsBox = document.getElementById("action-buttons");
    const turnLabel = document.getElementById("turn-label");
    const diceOverlay = document.getElementById("dice-overlay");
    const diceTitle = document.getElementById("dice-title");
    const diceLines = document.getElementById("dice-lines");
    const tooltip = document.getElementById("tooltip");
    const damageOverlay = document.getElementById("damage-overlay");
    const hitOverlay = document.getElementById("hit-overlay");
    const mainEl = document.getElementById("main");
    let pageOverlay = document.createElement("div");
    pageOverlay.id = "page-overlay";
    if (mainEl) {
        mainEl.appendChild(pageOverlay);
    }

    function openPage(title, innerHtml) {
        if (!pageOverlay) return;
        pageOverlay.innerHTML = `<div class="page page-flip-in">
    <div class="page-header">${title || ""}</div>
    <div class="page-body">${innerHtml || ""}</div>
    <div class="page-footer"><button id="page-back-btn">Retour</button></div>
</div>`;
        pageOverlay.classList.add("open");
        const backBtn = document.getElementById("page-back-btn");
        if (backBtn) {
            backBtn.addEventListener("click", () => {
                closePage();
            });
        }
    }

    function closePage() {
        if (!pageOverlay) return;
        pageOverlay.classList.remove("open");
        pageOverlay.innerHTML = "";
    }

    let engine = null;
    let deathScreen = null;
    let victoryScreen = null;

    /* ---------- AUDIO SIMPLE ---------- */

    let audioCtx = null;
    function ensureAudio() {
        if (!audioCtx) {
            try {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) { audioCtx = null; }
        }
    }
    function playSound(type) {
        ensureAudio();
        if (!audioCtx) return;
        const now = audioCtx.currentTime;

        if (type === "death") {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(55, now + 1.0);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 1.05);
            return;
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        let freq = 440;
        let dur = 0.12;
        if (type === "click") freq = 520;
        else if (type === "attack") freq = 260;
        else if (type === "hit") freq = 180;
        else if (type === "hurt") { freq = 140; dur = 0.18; }
        else if (type === "quest") { freq = 880; dur = 0.18; }
        else if (type === "victory") { freq = 660; dur = 0.25; }

        osc.type = "square";
        osc.frequency.value = freq;
        gain.gain.value = 0.12;
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
        osc.stop(now + dur);
    }
    document.addEventListener("click",(e)=>{
        if (e.target.tagName === "BUTTON") playSound("click");
    });

    /* ---------- LOG ---------- */

    function log(text, cls) {
        const p = document.createElement("p");
        if (cls) p.classList.add(cls);
        p.textContent = text;
        logEl.appendChild(p);
        logEl.scrollTop = logEl.scrollHeight;
    }

    function clearLog() { logEl.innerHTML = ""; }

    /* ---------- TOAST ---------- */

    function showToast(text, type="info") {
        const container = document.getElementById("toast-container");
        const div = document.createElement("div");
        div.className = "toast toast-"+type;
        div.innerHTML = text;
        container.appendChild(div);
        setTimeout(()=>{ if (div.parentNode) div.parentNode.removeChild(div); }, 3500);
    }

    /* ---------- DÉS ---------- */

    function showDiceMulti(entries, title) {
        diceTitle.textContent = title || "Jets de dés";
        let html = "";
        entries.forEach((e, idx) => {
            const color = e.color || "#ffffff";
            html += `<div class="dice-line" data-idx="${idx}">
        <span class="dice-label" style="color:${color}">${e.label}</span>
        <span class="dice-value">?</span>
      </div>`;
        });
        html += `<div class="small" style="margin-top:4px;text-align:center;opacity:0.85;">(Clique pour fermer)</div>`;
        diceLines.innerHTML = html;
        diceOverlay.style.display = "block";

        const lineEls = Array.from(diceLines.querySelectorAll(".dice-line"));
        let steps = 0;
        const maxSteps = 5;
        const interval = setInterval(() => {
            if (steps < maxSteps) {
                lineEls.forEach(line => {
                    const v = line.querySelector(".dice-value");
                    v.textContent = Math.floor(Math.random()*20)+1;
                });
            } else {
                clearInterval(interval);
                lineEls.forEach((line, idx) => {
                    const v = line.querySelector(".dice-value");
                    v.textContent = entries[idx].roll;
                });
            }
            steps++;
        }, 90);
    }
    diceOverlay.addEventListener("click", ()=> {
        diceOverlay.style.display = "none";
    });

    /* ---------- TOOLTIP ---------- */

    function showItemTooltip(id, el) {
        const item = ABYSS_DATA.ITEMS[id];
        if (!item) return;
        const lines = [];
        lines.push("<strong>"+item.name+"</strong>");
        lines.push("<em>Type : "+item.type+(item.weaponType?(" ("+item.weaponType+")"):"")+"</em>");
        if (item.stats) {
            const s=[];
            if (item.stats.hp) s.push("HP +"+item.stats.hp);
            if (item.stats.str) s.push("FOR +"+item.stats.str);
            if (item.stats.dex) s.push("DEX +"+item.stats.dex);
            if (item.stats.luck) s.push("CHANCE +"+item.stats.luck);
            if (s.length) lines.push(s.join(", "));
        }
        if (item.type === "food") {
            lines.push("Restaure faim : "+(item.hunger || 0)+"%");
            if (item.fatigue) lines.push("Fatigue "+(item.fatigue>0?"+":"")+item.fatigue+"%");
        }
        if (item.price) lines.push("Valeur : "+item.price+" or");
        tooltip.innerHTML = lines.join("<br>");
        tooltip.style.display = "block";
        const rect = el.getBoundingClientRect();
        tooltip.style.left = (rect.right+8)+"px";
        tooltip.style.top = rect.top+"px";
    }

    function showGenericTooltip(linesArr, el) {
        tooltip.innerHTML = linesArr.join("<br>");
        tooltip.style.display = "block";
        const rect = el.getBoundingClientRect();
        tooltip.style.left = (rect.right+8)+"px";
        tooltip.style.top = rect.top+"px";
    }

    function showRecipeTooltip(kind, id, el) {
        let r = null;
        if (kind === "craft") r = ABYSS_DATA.CRAFT_RECIPES.find(x=>x.id===id);
        else if (kind === "cook") r = ABYSS_DATA.COOKING_RECIPES.find(x=>x.id===id);
        if (!r) return;
        const lines = [];
        lines.push("<strong>"+r.name+"</strong>");
        lines.push("<em>Ingrédients :</em>");
        Object.entries(r.requires).forEach(([resId,amount])=>{
            const res = ABYSS_DATA.RESOURCES[resId];
            lines.push("- "+(res ? res.name : resId)+" x"+amount);
        });
        if (kind === "cook") {
            const item = ABYSS_DATA.ITEMS[r.result];
            if (item && item.type==="food") {
                lines.push("<em>Effets :</em>");
                lines.push("Faim +"+(item.hunger||0)+"%");
                if (item.fatigue) lines.push("Fatigue "+(item.fatigue>0?"+":"")+item.fatigue+"%");
            }
        }
        showGenericTooltip(lines, el);
    }

    function hideTooltip() {
        tooltip.style.display = "none";
    }

    /* ---------- OVERLAYS ---------- */

    function flashDamage() {
        damageOverlay.style.display = "block";
        playSound("hurt");
        setTimeout(() => { damageOverlay.style.display = "none"; }, 350);
    }

    function flashHit() {
        hitOverlay.style.display = "block";
        playSound("hit");
        setTimeout(() => { hitOverlay.style.display = "none"; }, 250);
    }

    function setTurnIndicator(turn) {
        const actions = document.getElementById("actions");
        actions.setAttribute("data-turn", turn || "idle");
        if (turn === "player") turnLabel.textContent = "Ton tour";
        else if (turn === "enemies") turnLabel.textContent = "Tour des ennemis";
        else if (turn === "event") turnLabel.textContent = "Événement";
        else turnLabel.textContent = "En attente…";
    }

    /* ---------- ECRANS DE FIN ---------- */

    function createDeathScreen() {
        deathScreen = document.createElement("div");
        deathScreen.id = "death-screen";
        deathScreen.innerHTML = `
      <div id="death-text">TU ES MORT</div>
      <div id="death-sub">
        Ton corps s'abandonne aux profondeurs. Les machines et les bêtes reprennent leurs murmures.
      </div>
      <div class="death-buttons">
        <button onclick="UI.hideDeathScreen(); ENGINE.newGame();">Nouvelle partie</button>
        <button onclick="UI.hideDeathScreen(); ENGINE.loadGame();">Charger sauvegarde</button>
      </div>
    `;
        document.body.appendChild(deathScreen);
    }

    function createVictoryScreen() {
        victoryScreen = document.createElement("div");
        victoryScreen.id = "victory-screen";
        victoryScreen.innerHTML = `
      <div id="victory-title">ABYSSE APPAISÉE</div>
      <div id="victory-sub">
        Au cœur du Noyau, tu coupes les derniers câbles. Les machines cessent de hurler.
        <br>La surface ne saura jamais vraiment ce qui s'est passé dans ces profondeurs.
      </div>
           <div class="victory-buttons">
        <button onclick="UI.hideVictoryScreen(); ENGINE.newGame(false);">Nouvelle partie</button>
        <button onclick="UI.hideVictoryScreen(); ENGINE.newGame(true);">New Game+</button>
      </div>
    `;
        document.body.appendChild(victoryScreen);
    }

    function showDeathScreen() {
        if (!deathScreen) createDeathScreen();
        deathScreen.style.display = "flex";
    }

    function hideDeathScreen() {
        if (deathScreen) deathScreen.style.display = "none";
    }

    function showVictoryScreen() {
        if (!victoryScreen) createVictoryScreen();
        victoryScreen.style.display = "flex";
        playSound("victory");
    }

    function hideVictoryScreen() {
        if (victoryScreen) victoryScreen.style.display = "none";
    }

    /* ---------- RENDUS ---------- */

    function renderHeader(game) {
        document.getElementById("header-name").textContent = "Nom : "+game.player.name;
        const f = game.floor;
        const hFloor = document.getElementById("header-floor");
        if (f === 0) hFloor.textContent = "Surface (Guilde)";
        else hFloor.textContent = "Étage "+f+(ABYSS_DATA.VILLAGE_FLOORS.includes(f)?" — Village":"");
        document.getElementById("header-gold").textContent = "Or : "+game.player.gold;

        const hunger = game.player.hunger;
        const fatigue = game.player.fatigue;
        document.getElementById("header-hunger").textContent = "Faim : "+hunger+"%";
        document.getElementById("header-fatigue").textContent = "Fatigue : "+fatigue+"%";
    }

    function renderStats(game, effMaxHp, effectiveStats) {
        const p = game.player;
        const hpPercent = Math.max(0, Math.min(100, Math.round((p.stats.hp / effMaxHp)*100)));
        const hungerPercent = p.hunger;
        const fatiguePercent = p.fatigue;
        const st = effectiveStats || p.stats;
        const curseCount = (game.curses || []).length;
        const guildName = game.guildId ? game.guildName || "Guilde liée" : "Aucune";

        const injuries = game.injuries || [];
        const carryInfo = (engine && engine.getCarryInfo) ? engine.getCarryInfo() : null;
        const carryHtml = carryInfo ? `
      <div class="section-block small">
        Charge : ${carryInfo.weight.toFixed(1)} / ${carryInfo.capacity.toFixed(1)}${carryInfo.over ? " (surchargé)" : ""}
      </div>` : "";

        statsContent.innerHTML = `
      <div><span class="highlight">Niveau ${p.level}</span> — ${p.exp}/${p.expToNext} XP</div>
      <div class="bar"><div class="bar-inner" style="width:${hpPercent}%;"></div></div>
      <div class="small">HP : ${p.stats.hp}/${effMaxHp}</div>

      <table>
        <tr><td>Force</td><td>${st.str}</td></tr>
        <tr><td>Dextérité</td><td>${st.dex}</td></tr>
        <tr><td>Chance</td><td>${st.luck}</td></tr>
      </table>
      <div class="small">Points à distribuer : ${p.statPoints}</div>

      <div class="section-block small">
        Faim :
        <div class="bar"><div class="bar-inner red" style="width:${hungerPercent}%;"></div></div>
      </div>
      <div class="section-block small">
        Fatigue :
        <div class="bar"><div class="bar-inner blue" style="width:${fatiguePercent}%;"></div></div>
      </div>

      <div class="section-block small">
        Malédictions actives : ${curseCount}<br>
        Guilde : ${guildName}
      </div>

      <div class="section-block small">
        Blessures :
        ${injuries.length ? injuries.map(i=>i.name).join(", ") : "aucune"}
      </div>
      ${carryHtml}
    `;
    }



    function renderParty(game, effMaxHp) {
        const lines = [];
        lines.push(`<div>Toi : Lv ${game.player.level} — HP ${game.player.stats.hp}/${effMaxHp}</div>`);
        game.party.forEach((a,idx)=>{
            lines.push(`<div>${idx+1}. ${a.name} (Lv ${a.level}) — HP ${a.hp}/${a.maxHp}, FOR ${a.baseStr}, DEX ${a.baseDex}</div>`);
        });
        game.familiars.forEach(f=>{
            lines.push(`<div>[Familier] ${f.name} — ${f.description}</div>`);
        });
        partyContent.innerHTML = lines.join("");
    }

    function createMenuButton(label, handler, disabled) {
        const b = document.createElement("button");
        b.textContent = label;
        if (disabled) b.disabled = true;
        b.addEventListener("click", () => {
            if (!disabled && engine) handler();
        });
        return b;
    }

    function renderMenu(game) {
        menuButtons.innerHTML = "";
        const inCombat = game.current.mode === "combat";
        const inEvent = game.current.mode === "event";
        const blocked = inCombat || inEvent || game.gameOver;

        const f = game.floor;

        menuButtons.appendChild(createMenuButton("Explorer", ()=>engine.explore(), blocked));
        menuButtons.appendChild(createMenuButton("Descendre", ()=>engine.moveDown(), blocked || f===100));
        menuButtons.appendChild(createMenuButton("Monter", ()=>engine.moveUp(), blocked || !engine.canMoveUp()));

        if (f === 0) {
            menuButtons.appendChild(createMenuButton("Auberge", ()=>engine.restAtInn(), blocked));
            menuButtons.appendChild(createMenuButton("Guildes", ()=>engine.showGuilds(), blocked));
        }

        menuButtons.appendChild(createMenuButton("Inventaire", ()=>engine.showInventory(), blocked));
        menuButtons.appendChild(createMenuButton("Équipement", ()=>engine.showEquipment(), blocked));
        menuButtons.appendChild(createMenuButton("Capacités", ()=>engine.showSkills ? engine.showSkills() : ()=>{}, blocked));
        menuButtons.appendChild(createMenuButton("Artisanat", ()=>engine.showCraft(), blocked));
        menuButtons.appendChild(createMenuButton("Cuisine", ()=>engine.showCooking(), blocked));
        menuButtons.appendChild(createMenuButton("Forge/Enchant.", ()=>engine.showEnchant(), blocked));
        menuButtons.appendChild(createMenuButton("Quêtes", ()=>engine.showQuests(), blocked));
        menuButtons.appendChild(createMenuButton("Groupe", ()=>engine.showRecruitment(), blocked));

        if (f === 0 || ABYSS_DATA.VILLAGE_FLOORS.includes(f)) {
            menuButtons.appendChild(createMenuButton("Marché", ()=>engine.showMarket(), blocked));
        }

        menuButtons.appendChild(createMenuButton("Stats", ()=>engine.allocateStats(), blocked || game.player.statPoints===0));
        menuButtons.appendChild(createMenuButton("Sauvegarder", ()=>engine.saveGame(), inCombat || game.gameOver));
        menuButtons.appendChild(createMenuButton("Charger", ()=>engine.loadGame(), false));
        menuButtons.appendChild(createMenuButton("Reset", ()=>{ if(confirm("Nouvelle partie ?")) engine.newGame(); }, inCombat));
        menuButtons.appendChild(createMenuButton("Codex", ()=>engine.showCodex(), blocked));
        menuButtons.appendChild(createMenuButton("Succès", ()=>engine.showAchievements(), blocked));

        if (ABYSS_DATA.VILLAGE_FLOORS.includes(f)) {
            menuButtons.appendChild(createMenuButton("Camp", ()=>engine.showCamp(), blocked));
        }
    }

    function renderActions(html) {
        if (!html) actionsBox.textContent = "Aucune action contextuelle.";
        else actionsBox.innerHTML = html;
    }

    function setLowHpState(low) {
        if (low) document.body.classList.add("low-hp");
        else document.body.classList.remove("low-hp");
    }

    function setSaveStatus(text) {
        document.getElementById("header-save-status").textContent = text || "";
    }

    function init(engineRef) {
        engine = engineRef;
        createDeathScreen();
        createVictoryScreen();
    }

    return {
        init,
        log,
        clearLog,
        showToast,
        showDiceMulti,
        showItemTooltip,
        showGenericTooltip,
        showRecipeTooltip,
        hideTooltip,
        flashDamage,
        flashHit,
        setTurnIndicator,
        renderHeader,
        renderStats,
        renderParty,
        renderMenu,
        renderActions,
        setLowHpState,
        setSaveStatus,
        playSound,
        showDeathScreen,
        hideDeathScreen,
        showVictoryScreen,
        hideVictoryScreen,
        openPage,
        closePage
    };
})();
