// Logique principale : état du jeu, faim / fatigue, combat, crafts, cuisine,
// auberge, guildes, camp, codex, succès, etc.

(function () {
    const DATA = window.ABYSS_DATA;
    const UI = window.UI;

    let game = null;

    /* ---------- Difficultés & biomes ---------- */

    const DIFFICULTY_PRESETS = {
        explorateur: {
            id: "explorateur",
            name: "Explorateur",
            enemyDmgMul: 0.8,
            hungerMul: 0.8,
            fatigueMul: 0.8,
            curseRateMul: 0.7,
            xpMul: 1.2,
        },
        normal: {
            id: "normal",
            name: "Standard",
            enemyDmgMul: 1.0,
            hungerMul: 1.0,
            fatigueMul: 1.0,
            curseRateMul: 1.0,
            xpMul: 1.0,
        },
        abyssal: {
            id: "abyssal",
            name: "Abyssal",
            enemyDmgMul: 1.3,
            hungerMul: 1.3,
            fatigueMul: 1.2,
            curseRateMul: 1.4,
            xpMul: 1.3,
        },
    };

    function getDiffCfg() {
        if (!game || !game.difficulty) return DIFFICULTY_PRESETS.normal;
        return DIFFICULTY_PRESETS[game.difficulty] || DIFFICULTY_PRESETS.normal;
    }
    const FLOOR_BIOMES = {
        1:  { id:"b01_steam_entry",        name:"Vestibule de vapeur",              desc:"Escaliers métalliques, premières bouffées de vapeur tiède." },
        2:  { id:"b02_steam_tunnels",      name:"Tunnels de maintenance",           desc:"Tuyaux fuyants et panneaux d’avertissement oubliés." },
        3:  { id:"b03_dripping_pipes",     name:"Conduites suintantes",             desc:"Goûtes d’huile et d’eau tombent à intervalles réguliers." },
        4:  { id:"b04_low_boilers",        name:"Chaudières basses",                desc:"Petites chaudières battant comme des cœurs mécaniques." },
        5:  { id:"b05_gear_corridor",      name:"Couloir à engrenages",             desc:"Engrenages nus tournent paresseusement sur les murs." },
        6:  { id:"b06_condensation_hall",  name:"Salle de condensation",            desc:"Brume épaisse, tout est humide et glissant." },
        7:  { id:"b07_copper_ducts",       name:"Conduits de cuivre",               desc:"Le cuivre terni cliquette sous les coups lointains." },
        8:  { id:"b08_service_platforms",  name:"Plates-formes de service",         desc:"Passerelles suspendues, odeur de graisse chaude." },
        9:  { id:"b09_steam_church",       name:"Chapelle de vapeur",               desc:"Des soupapes soufflent comme des orgues en colère." },
        10: { id:"b10_pressure_nexus",     name:"Nexus de pression",                desc:"Manomètres et roues dentées surveillent la pression du monde." },

        11: { id:"b11_cable_roots",        name:"Racines de câbles",                desc:"Des câbles surgissent du sol comme des racines noires." },
        12: { id:"b12_wire_brambles",      name:"Buissons de fil",                  desc:"Touffes de câbles fins forment des fourrés coupants." },
        13: { id:"b13_swaying_looms",      name:"Méandres suspendus",               desc:"Des nappes de câbles oscillent au moindre pas." },
        14: { id:"b14_cable_canyon",       name:"Canyon torsadé",                   desc:"Gorges profondes remplies de câbles tendus." },
        15: { id:"b15_fused_trunks",       name:"Troncs fusionnés",                 desc:"Des piliers métalliques enveloppés de gaines isolantes." },
        16: { id:"b16_lamp_vines",         name:"Lianes-lampes",                    desc:"Ampoules fatiguées pendent comme des fruits jaunâtres." },
        17: { id:"b17_signal_grove",       name:"Bosquet de signaux",               desc:"LED clignotent comme des lucioles désorientées." },
        18: { id:"b18_cable_bog",          name:"Marécage de câbles",               desc:"Câbles noyés dans une eau sombre, bulles inquiétantes." },
        19: { id:"b19_knotted_bridge",     name:"Pont noueux",                      desc:"Un pont de câbles tressés grince sous le poids." },
        20: { id:"b20_choked_hub",         name:"Nœud obstrué",                     desc:"Un carrefour où trop de câbles se disputent la place." },

        21: { id:"b21_inverted_plaza",     name:"Place renversée",                  desc:"Maisons retournées, lampadaires plantés dans le plafond." },
        22: { id:"b22_hanging_streets",    name:"Rues suspendues",                  desc:"Balcons et trottoirs en surplomb se croisent en tous sens." },
        23: { id:"b23_broken_lifts",       name:"Ascenseurs brisés",                desc:"Cages d’ascenseurs flasques et câbles coupés." },
        24: { id:"b24_window_voids",       name:"Fenêtres sur vide",                desc:"Fenêtres béantes donnant sur un précipice interminable." },
        25: { id:"b25_ruined_market",      name:"Marché retourné",                  desc:"Stands vissés au plafond, marchandises figées dans la poussière." },
        26: { id:"b26_tilted_library",     name:"Bibliothèque penchée",             desc:"Rayonnages désaxés, livres cloués par la rouille." },
        27: { id:"b27_toppled_towers",     name:"Tours renversées",                 desc:"Tours couchées comme des carcasses de géants." },
        28: { id:"b28_balcony_maze",       name:"Labyrinthe de balcons",            desc:"Balcons reliés entre eux par des passerelles branlantes." },
        29: { id:"b29_vaulted_slums",      name:"Taudis voûtés",                    desc:"Quartiers entiers écrasés sous des arches métalliques." },
        30: { id:"b30_ghost_station",      name:"Gare spectrale",                   desc:"Une station vide où les trains ne s’arrêtent plus." },

        31: { id:"b31_mild_toxic",         name:"Brume irritante",                  desc:"Une brume verte te pique les yeux et la gorge." },
        32: { id:"b32_ooze_canals",        name:"Canaux de boue",                   desc:"Des conduits charriant des boues acides et fumantes." },
        33: { id:"b33_corroded_supports",  name:"Piliers corrodés",                 desc:"Le métal ici semble ronger de l’intérieur." },
        34: { id:"b34_fume_gallery",       name:"Galerie de fumées",                desc:"Jets de gaz sporadiques attendent un faux pas." },
        35: { id:"b35_gas_chambers",       name:"Chambres gazeuses",                desc:"Portes lourdes et hublots, l’air y est douteux." },
        36: { id:"b36_acid_rain",          name:"Pluie acide interne",              desc:"Écoulements acides tombent du plafond en rigoles." },
        37: { id:"b37_bloated_wildlife",   name:"Faune gonflée",                    desc:"Les créatures ici sont boursouflées et suintent." },
        38: { id:"b38_waste_pit",          name:"Fosse à déchets",                  desc:"Des amas de rebuts fondent lentement dans la boue." },
        39: { id:"b39_reactor_leak",       name:"Fuite d’agent toxique",            desc:"Un vrombissement sourd et de fines gouttes corrosives." },
        40: { id:"b40_poison_crossroads",  name:"Carrefour empoisonné",             desc:"Plusieurs conduits convergent, saturant l’air de poisons." },

        41: { id:"b41_fungal_shafts",      name:"Puits fongiques",                  desc:"Des champignons géants poussent sur les parois." },
        42: { id:"b42_spore_bridges",      name:"Ponts de spores",                  desc:"Des tapis de spores mous amortissent tes pas." },
        43: { id:"b43_biolum_roots",       name:"Racines luminescentes",           desc:"Des veines brillantes courent à travers le métal." },
        44: { id:"b44_mold_cathedral",     name:"Cathédrale de moisissures",        desc:"Des piliers moisis forment une nef organique." },
        45: { id:"b45_spore_storm",        name:"Tempête de spores",                desc:"L’air est rempli de particules flottantes et agressives." },
        46: { id:"b46_pulsing_mycelium",   name:"Mycélium pulsant",                 desc:"Le sol bat au rythme d’un organisme colossale." },
        47: { id:"b47_flesh_cables",       name:"Câbles de chair",                  desc:"Certains câbles semblent… respirer." },
        48: { id:"b48_garden_of_rust",     name:"Jardin de rouille",                desc:"Des fleurs métalliques se décomposent en poussière." },
        49: { id:"b49_spine_corridor",     name:"Couloir vertébral",                desc:"L’architecture imite une grande colonne vertébrale." },
        50: { id:"b50_bioforge",           name:"Bio-forge",                        desc:"Machines et chair se mêlent dans un atelier obscur." },

        51: { id:"b51_resonant_hall",      name:"Salle résonante",                  desc:"Chaque pas déclenche des échos prolongés." },
        52: { id:"b52_crystal_lattice",    name:"Réseau de cristaux",               desc:"Des cristaux vibrants s’emboîtent comme des engrenages." },
        53: { id:"b53_chime_tunnels",      name:"Tunnels tintants",                 desc:"Le moindre choc produit un carillon fragile." },
        54: { id:"b54_echo_furnaces",      name:"Fours écho",                       desc:"Les fours vides murmurent des voix de braises éteintes." },
        55: { id:"b55_tuning_chamber",     name:"Chambre d’accord",                 desc:"Des câbles se tendent et se détendent en silence." },
        56: { id:"b56_crystal_spine",      name:"Épine cristalline",                desc:"Une excroissance cristalline traverse plusieurs niveaux." },
        57: { id:"b57_singing_pipes",      name:"Tubes chantants",                  desc:"L’air qui passe joue une mélodie discordante." },
        58: { id:"b58_resonant_archive",   name:"Archives vibrantes",               desc:"Des plaques gravées bourdonnent de souvenirs figés." },
        59: { id:"b59_glass_corridor",     name:"Couloir de verre",                 desc:"Les parois réfléchissent des silhouettes qui ne sont pas là." },
        60: { id:"b60_quartz_engine",      name:"Moteur de quartz",                 desc:"Un cœur cristallin pompe une énergie invisible." },

        61: { id:"b61_rust_graveyard",     name:"Cimetière rouillé",                desc:"Carcasses de machines couchées comme des tombes." },
        62: { id:"b62_bone_heap",          name:"Tas d’os et de fer",               desc:"Ossements entremêlés de pièces mécaniques." },
        63: { id:"b63_forgetful_mausoleum",name:"Mausolée de l’oubli",              desc:"Niches vides, plaques illisibles, silence lourd." },
        64: { id:"b64_ferric_sarcophagi",  name:"Sarcophages ferriques",            desc:"Coffres de métal scellés par la rouille." },
        65: { id:"b65_mass_grave_pit",     name:"Fosse commune",                    desc:"Restes d’expéditions anciennes, jamais remontées." },
        66: { id:"b66_ossuary_bridge",     name:"Pont ossuaire",                    desc:"Un pont constitué de tibias, boulons et poutrelles." },
        67: { id:"b67_name_erosion",       name:"Noms effacés",                     desc:"Stèles rongées, plus aucun nom lisible." },
        68: { id:"b68_funeral_gears",      name:"Engrenages funéraires",            desc:"De grands rouages sculptés comme des pierres tombales." },
        69: { id:"b69_remnant_trenches",   name:"Tranchées des restes",             desc:"Sillons creusés par des combats oubliés." },
        70: { id:"b70_graveyard_core",     name:"Cœur cimetiéral",                  desc:"Tout ici respire l’abandon et la fin." },

        71: { id:"b71_static_fields",      name:"Champs statiques",                  desc:"Des étincelles rampent sur les rampes et rambardes." },
        72: { id:"b72_lightning_rods",     name:"Paratonnerres intérieurs",         desc:"Des piques métalliques attirent des arcs électriques." },
        73: { id:"b73_storm_conduits",     name:"Conduits d’orage",                 desc:"L’électricité gronde dans les conduits obscurs." },
        74: { id:"b74_charged_platforms",  name:"Plates-formes chargées",           desc:"Certains sols vibrent d’une énergie prête à jaillir." },
        75: { id:"b75_magnet_crucible",    name:"Creuset magnétique",               desc:"Le métal frémit et se soulève par moments." },
        76: { id:"b76_ionized_fog",        name:"Brume ionisée",                    desc:"De petites décharges dansent dans la brume." },
        77: { id:"b77_arcing_halls",       name:"Salles arc-en-foudre",             desc:"Des arcs électriques bondissent entre les piliers." },
        78: { id:"b78_battery_catacomb",   name:"Catacombes de batteries",          desc:"Des rangées de batteries géantes expirent leurs dernières charges." },
        79: { id:"b79_surge_choke",        name:"Goulet de surtension",             desc:"La moindre étincelle peut déclencher une décharge massive." },
        80: { id:"b80_storm_heart",        name:"Cœur de tempête",                  desc:"La foudre semble prendre racine dans les murs." },

        81: { id:"b81_muffled_galleries",  name:"Galeries étouffées",               desc:"Les sons meurent étrangement dans l’air épais." },
        82: { id:"b82_dark_mirror_pools",  name:"Miroirs sombres",                  desc:"Des flaques noires reflètent autre chose que ton corps." },
        83: { id:"b83_voiceless_corridor", name:"Couloir sans voix",                desc:"Tes propres pas sonnent comme s’ils venaient d’ailleurs." },
        84: { id:"b84_empty_observatory",  name:"Observatoire vide",                desc:"Des lunettes pointées vers le bas, vers le Noyau." },
        85: { id:"b85_silent_forges",      name:"Forges silencieuses",              desc:"Les marteaux sont figés, mais la chaleur persiste." },
        86: { id:"b86_null_chambers",      name:"Chambres nulles",                  desc:"L’air semble absorber toute émotion." },
        87: { id:"b87_memory_drift",       name:"Dérive de mémoire",                desc:"Tu n’es plus sûr de te rappeler le chemin pris." },
        88: { id:"b88_eye_hollows",        name:"Orbites vides",                    desc:"Des niches murales vides t’observent malgré tout." },
        89: { id:"b89_whisper_lattice",    name:"Treillis de murmures",             desc:"Les parois murmurent ton nom sans arrêt." },
        90: { id:"b90_silent_depths",      name:"Profondeurs silencieuses",         desc:"Plus de cris. Juste le bruit de ton sang." },

        91: { id:"b91_core_antechamber",   name:"Antichambre du Noyau",             desc:"Tout vibre à peine perceptiblement sous tes pieds." },
        92: { id:"b92_vein_convergence",   name:"Convergence des veines",           desc:"D’énormes conduites rejoignent un même centre." },
        93: { id:"b93_hot_axis",           name:"Axe brûlant",                      desc:"Le métal rayonne d’une chaleur presque vivante." },
        94: { id:"b94_gear_orbit",         name:"Orbites d’engrenages",             desc:"De grands rouages tournent en cercles concentriques." },
        95: { id:"b95_pulse_ramp",         name:"Rampe pulsatile",                  desc:"Chaque marche vibre comme un battement de cœur." },
        96: { id:"b96_core_spokes",        name:"Rayons du Noyau",                  desc:"De longs bras de métal traversent la salle." },
        97: { id:"b97_heart_chambers",     name:"Chambres cardiaques",              desc:"Des chambres sphériques pompent des fluides lumineux." },
        98: { id:"b98_overheat_vault",     name:"Voûte en surchauffe",              desc:"L’air brûlant déforme les contours des choses." },
        99: { id:"b99_core_threshold",     name:"Seuil du Noyau",                   desc:"Une dernière porte blindée, zébrée de fissures lumineuses." },
        100:{ id:"b100_core",              name:"Noyau abyssal",                    desc:"Cœur mécanique de l’Abysse, où tout converge et se brise." },
    };

    function getBiomeForFloor(floor) {
        if (floor <= 0) {
            return {
                id: "surface",
                name: "Surface",
                desc: "Guilde, auberge, lumière grise.",
                hungerMul: 1,
                enemyDmgMul: 1,
            };
        }

        // Clamp entre 1 et 100
        const f = Math.max(1, Math.min(100, floor));
        const base = FLOOR_BIOMES[f] || FLOOR_BIOMES[100];

        // Progression douce de la difficulté selon la profondeur
        const hungerMul = 1 + f * 0.005;   // 1.0 → 1.5
        const enemyDmgMul = 1 + f * 0.003; // 1.0 → 1.3

        return {
            id: base.id,
            name: base.name,
            desc: base.desc,
            hungerMul,
            enemyDmgMul,
        };
    }
    /* ---------- Poids & encombrement ---------- */

    const ITEM_TYPE_BASE_WEIGHT = {
        weapon: 3,
        shield: 3,
        head: 2,
        chest: 3,
        legs: 2,
        boots: 1,
        ring: 0,
        amulet: 0,
        consumable: 1,
        food: 1,
        bag: 1
    };

    const RESOURCE_BASE_WEIGHT = 0.3;
    const RESOURCE_EXTRA_WEIGHT = {
        raw_meat: 0.7,
        beast_blood: 0.7,
        gear_fragment: 0.5
    };

    // Sacs spéciaux
    const BAG_CAPACITY_BONUS = {
        small_gear_bag: 10,
        reinforced_pack: 20,
        abyssal_chest_rig: 30
    };

    function getItemWeight(id) {
        const it = DATA.ITEMS[id];
        if (!it) return 0;
        if (it.weight != null) return it.weight; // override optionnel sur un item
        const t = it.type || "misc";
        const base = ITEM_TYPE_BASE_WEIGHT[t];
        return base != null ? base : 1;
    }

    function getTotalResourceWeight() {
        const res = (game && game.player && game.player.resources) || {};
        let total = 0;
        for (const k in res) {
            const qty = res[k] || 0;
            if (!qty) continue;
            const extra = RESOURCE_EXTRA_WEIGHT[k];
            const w = extra != null ? extra : RESOURCE_BASE_WEIGHT;
            total += w * qty;
        }
        return total;
    }

    function getCarryCapacity() {
        if (!game || !game.player) return 0;
        let base = 40;
        if (game.origin === "porteur") base += 10;

        const inv = game.player.inventory || [];
        inv.forEach((id) => {
            if (BAG_CAPACITY_BONUS[id]) base += BAG_CAPACITY_BONUS[id];
        });

        return base;
    }

    function getTotalCarryWeight() {
        if (!game || !game.player) return 0;
        let total = 0;
        const inv = game.player.inventory || [];
        inv.forEach((id) => {
            total += getItemWeight(id);
        });
        const eq = game.player.equipment || {};
        Object.keys(eq).forEach((slot) => {
            const id = eq[slot];
            if (id) total += getItemWeight(id);
        });
        total += getTotalResourceWeight();
        return Math.round(total * 10) / 10;
    }

    function isOverEncumbered() {
        const cap = getCarryCapacity();
        if (cap <= 0) return false;
        return getTotalCarryWeight() > cap;
    }

    function getEncumbranceFatigueMul() {
        return isOverEncumbered() ? 1.4 : 1.0;
    }

    function applyEncumbrancePenalty(stats) {
        if (!isOverEncumbered()) return stats;
        const dex = Math.max(1, stats.dex - 1);
        return Object.assign({}, stats, { dex });
    }

    function getCarryInfo() {
        const weight = getTotalCarryWeight();
        const capacity = getCarryCapacity();
        return {
            weight,
            capacity,
            over: capacity > 0 && weight > capacity
        };
    }


    /* ---------- Achievements ---------- */

    const ACHIEVEMENTS = [
        // ---------- Profondeur de base ----------
        {
            id: "depth_10",
            name: "Premiers craquements",
            desc: "Atteindre l'étage 10.",
            cond: (g) => g.maxFloorReached >= 10,
        },
        {
            id: "depth_20",
            name: "Premier vertige",
            desc: "Atteindre l'étage 20.",
            cond: (g) => g.maxFloorReached >= 20,
        },
        {
            id: "depth_30",
            name: "Plus bas que prévu",
            desc: "Atteindre l'étage 30.",
            cond: (g) => g.maxFloorReached >= 30,
        },
        {
            id: "depth_40",
            name: "Gargarisme toxique",
            desc: "Atteindre l'étage 40.",
            cond: (g) => g.maxFloorReached >= 40,
        },
        {
            id: "depth_50",
            name: "Trop loin",
            desc: "Atteindre l'étage 50.",
            cond: (g) => g.maxFloorReached >= 50,
        },
        {
            id: "depth_60",
            name: "Sixième cercle",
            desc: "Atteindre l'étage 60.",
            cond: (g) => g.maxFloorReached >= 60,
        },
        {
            id: "depth_70",
            name: "Tombeaux de rouille",
            desc: "Atteindre l'étage 70.",
            cond: (g) => g.maxFloorReached >= 70,
        },
        {
            id: "depth_80",
            name: "Orage intérieur",
            desc: "Atteindre l'étage 80.",
            cond: (g) => g.maxFloorReached >= 80,
        },
        {
            id: "depth_90",
            name: "Silence pesant",
            desc: "Atteindre l'étage 90.",
            cond: (g) => g.maxFloorReached >= 90,
        },
        {
            id: "depth_100",
            name: "Au Noyau",
            desc: "Atteindre l'étage 100.",
            cond: (g) => g.maxFloorReached >= 100,
        },

        // ---------- Profondeur par difficulté ----------
        {
            id: "depth_50_explo",
            name: "Explorateur tenace",
            desc: "Atteindre l'étage 50 en difficulté explorateur.",
            cond: (g) => g.difficulty === "explorateur" && g.maxFloorReached >= 50,
        },
        {
            id: "depth_50_normal",
            name: "Normalement trop bas",
            desc: "Atteindre l'étage 50 en difficulté normale.",
            cond: (g) => g.difficulty === "normal" && g.maxFloorReached >= 50,
        },
        {
            id: "depth_50_abyssal",
            name: "Abysse confirmé",
            desc: "Atteindre l'étage 50 en abyssal.",
            cond: (g) => g.difficulty === "abyssal" && g.maxFloorReached >= 50,
        },
        {
            id: "depth_100_explo",
            name: "Touriste du Noyau",
            desc: "Atteindre l'étage 100 en explorateur.",
            cond: (g) => g.difficulty === "explorateur" && g.maxFloorReached >= 100,
        },
        {
            id: "depth_100_normal",
            name: "Plongée complète",
            desc: "Atteindre l'étage 100 en normal.",
            cond: (g) => g.difficulty === "normal" && g.maxFloorReached >= 100,
        },
        {
            id: "depth_100_abyssal",
            name: "Abyssologue",
            desc: "Atteindre l'étage 100 en abyssal.",
            cond: (g) => g.difficulty === "abyssal" && g.maxFloorReached >= 100,
        },

        // ---------- Malédictions & blessures ----------
        {
            id: "cursed_one",
            name: "Première marque",
            desc: "Recevoir ta première malédiction.",
            cond: (g) => (g.curses || []).length >= 1,
        },
        {
            id: "cursed_two",
            name: "Double lien",
            desc: "Avoir 2 malédictions ou plus.",
            cond: (g) => (g.curses || []).length >= 2,
        },
        {
            id: "cursed_three",
            name: "Maudit",
            desc: "Avoir 3 malédictions ou plus.",
            cond: (g) => (g.curses || []).length >= 3,
        },
        {
            id: "cursed_four",
            name: "Carapace de chaînes",
            desc: "Avoir 4 malédictions ou plus.",
            cond: (g) => (g.curses || []).length >= 4,
        },
        {
            id: "cursed_five",
            name: "Propriété de l’Abysse",
            desc: "Avoir 5 malédictions ou plus.",
            cond: (g) => (g.curses || []).length >= 5,
        },
        {
            id: "injury_one",
            name: "Premier hématome",
            desc: "Subir ta première blessure persistante.",
            cond: (g) => (g.injuries || []).length >= 1,
        },
        {
            id: "injury_three",
            name: "Corps rafistolé",
            desc: "Avoir 3 blessures actives.",
            cond: (g) => (g.injuries || []).length >= 3,
        },

        // ---------- Séries de descente ----------
        {
            id: "never_up_10",
            name: "Glissade continue",
            desc: "Descendre 10 étages sans remonter.",
            cond: (g) => g.runStats && g.runStats.maxDownStreak >= 10,
        },
        {
            id: "never_up_20",
            name: "Descente pure",
            desc: "Descendre 20 étages sans remonter.",
            cond: (g) => g.runStats && g.runStats.maxDownStreak >= 20,
        },
        {
            id: "never_up_30",
            name: "Chute consciente",
            desc: "Descendre 30 étages sans remonter.",
            cond: (g) => g.runStats && g.runStats.maxDownStreak >= 30,
        },
        {
            id: "never_up_50",
            name: "Sans retour",
            desc: "Descendre 50 étages sans remonter.",
            cond: (g) => g.runStats && g.runStats.maxDownStreak >= 50,
        },

        // ---------- Or & économie ----------
        {
            id: "gold_100",
            name: "Riche, pour l’instant",
            desc: "Atteindre 100 or.",
            cond: (g) => g.player && g.player.gold >= 100,
        },
        {
            id: "gold_300",
            name: "Bourse lourde",
            desc: "Atteindre 300 or.",
            cond: (g) => g.player && g.player.gold >= 300,
        },
        {
            id: "gold_500",
            name: "Banquier improvisé",
            desc: "Atteindre 500 or.",
            cond: (g) => g.player && g.player.gold >= 500,
        },
        {
            id: "gold_1000",
            name: "Trésor abyssal",
            desc: "Atteindre 1000 or.",
            cond: (g) => g.player && g.player.gold >= 1000,
        },

        // ---------- Inventaire & équipement ----------
        {
            id: "inv_20",
            name: "Sac bien rempli",
            desc: "Avoir 20 objets ou plus dans l’inventaire.",
            cond: (g) => g.player && (g.player.inventory || []).length >= 20,
        },
        {
            id: "inv_40",
            name: "Mule de l’Abysse",
            desc: "Avoir 40 objets ou plus dans l’inventaire.",
            cond: (g) => g.player && (g.player.inventory || []).length >= 40,
        },
        {
            id: "full_gear",
            name: "Équipé de la tête aux pieds",
            desc: "Avoir toutes les cases d’équipement du joueur remplies.",
            cond: (g) => {
                const e = g.player && g.player.equipment;
                if (!e) return false;
                return (
                    e.weapon &&
                    e.shield &&
                    e.head &&
                    e.chest &&
                    e.legs &&
                    e.boots &&
                    e.ring1 &&
                    e.ring2 &&
                    e.amulet
                );
            },
        },
        {
            id: "weapon_ench_1",
            name: "Lame améliorée",
            desc: "Améliorer une arme au moins une fois.",
            cond: (g) => g.enchant && (g.enchant.weapon || 0) >= 1,
        },
        {
            id: "weapon_ench_3",
            name: "Chef d’œuvre de métal",
            desc: "Atteindre +3 enchantement d’arme.",
            cond: (g) => g.enchant && (g.enchant.weapon || 0) >= 3,
        },
        {
            id: "armor_ench_1",
            name: "Plaques renforcées",
            desc: "Améliorer une armure au moins une fois.",
            cond: (g) => g.enchant && (g.enchant.armor || 0) >= 1,
        },
        {
            id: "armor_ench_3",
            name: "Carapace d’acier",
            desc: "Atteindre +3 enchantement d’armure.",
            cond: (g) => g.enchant && (g.enchant.armor || 0) >= 3,
        },

        // ---------- Ressources ----------
        {
            id: "res_herb_10",
            name: "Petit herboriste",
            desc: "Obtenir 10 herbes luminescentes.",
            cond: (g) => g.player && g.player.resources && (g.player.resources.herb || 0) >= 10,
        },
        {
            id: "res_herb_50",
            name: "Pharmacien improvisé",
            desc: "Obtenir 50 herbes luminescentes.",
            cond: (g) => g.player && g.player.resources && (g.player.resources.herb || 0) >= 50,
        },
        {
            id: "res_blood_10",
            name: "Collecteur de fioles",
            desc: "Obtenir 10 sangs de bête.",
            cond: (g) => g.player && g.player.resources && (g.player.resources.beast_blood || 0) >= 10,
        },
        {
            id: "res_gears_20",
            name: "Ramasseur de rouages",
            desc: "Obtenir 20 fragments d’engrenage.",
            cond: (g) => g.player && g.player.resources && (g.player.resources.gear_fragment || 0) >= 20,
        },
        {
            id: "res_mushroom_10",
            name: "Mycologue prudent",
            desc: "Obtenir 10 champignons phosphorescents.",
            cond: (g) => g.player && g.player.resources && (g.player.resources.mushroom || 0) >= 10,
        },
        {
            id: "res_glowcap_20",
            name: "Récolte lumineuse",
            desc: "Obtenir 20 chapeaux lumineux.",
            cond: (g) => g.player && g.player.resources && (g.player.resources.glow_cap || 0) >= 20,
        },
        {
            id: "res_all_discovered",
            name: "Inventaire des matières",
            desc: "Découvrir au moins 10 types de ressources.",
            cond: (g) => {
                const d = g.discoveredResources || {};
                return Object.keys(d).length >= 10;
            },
        },

        // ---------- Cuisine & craft ----------
        {
            id: "cook_first",
            name: "Premier plat chaud",
            desc: "Cuisiner un plat pour la première fois.",
            cond: (g) => (g.achievFlags && g.achievFlags.cookedOnce) === true,
        },
        {
            id: "cook_10",
            name: "Cuisinier d’appoint",
            desc: "Cuisiner 10 plats.",
            cond: (g) => (g.achievCounters && (g.achievCounters.cookedMeals || 0) >= 10),
        },
        {
            id: "cook_50",
            name: "Cantine de l’Abysse",
            desc: "Cuisiner 50 plats.",
            cond: (g) => (g.achievCounters && (g.achievCounters.cookedMeals || 0) >= 50),
        },
        {
            id: "craft_potion_first",
            name: "Première fiole",
            desc: "Fabriquer une potion pour la première fois.",
            cond: (g) => (g.achievFlags && g.achievFlags.craftedPotionOnce) === true,
        },
        {
            id: "craft_potion_20",
            name: "Artisan des fioles",
            desc: "Fabriquer 20 potions.",
            cond: (g) => (g.achievCounters && (g.achievCounters.craftedPotions || 0) >= 20),
        },
        {
            id: "craft_weapon",
            name: "Forge improvisée",
            desc: "Fabriquer ou améliorer une arme.",
            cond: (g) => (g.achievFlags && g.achievFlags.forgedWeapon) === true,
        },

        // ---------- Quêtes ----------
        {
            id: "quest_1",
            name: "Service rendu",
            desc: "Terminer ta première quête.",
            cond: (g) => g.quests && (g.quests.completed || []).length >= 1,
        },
        {
            id: "quest_5",
            name: "Habitué du tableau",
            desc: "Terminer 5 quêtes.",
            cond: (g) => g.quests && (g.quests.completed || []).length >= 5,
        },
        {
            id: "quest_10",
            name: "Messager des profondeurs",
            desc: "Terminer 10 quêtes.",
            cond: (g) => g.quests && (g.quests.completed || []).length >= 10,
        },
        {
            id: "quest_20",
            name: "Agent de la Guilde",
            desc: "Terminer 20 quêtes.",
            cond: (g) => g.quests && (g.quests.completed || []).length >= 20,
        },

        // ---------- Guildes ----------
        {
            id: "guild_join_any",
            name: "Serment initial",
            desc: "Rejoindre une guilde.",
            cond: (g) => !!g.guildId,
        },
        {
            id: "guild_ironclads_join",
            name: "Ferré de serment",
            desc: "Rejoindre la Guilde des Ferrés.",
            cond: (g) => g.guildId === "ironclads",
        },
        {
            id: "guild_cable_join",
            name: "Sous les câbles",
            desc: "Rejoindre les Veilleurs des Câbles.",
            cond: (g) => g.guildId === "cable_watch",
        },
        {
            id: "guild_lumen_join",
            name: "Éclairé de service",
            desc: "Rejoindre l’Ordre des Lumens.",
            cond: (g) => g.guildId === "lumen_order",
        },
        {
            id: "guild_rep_iron_50",
            name: "Ferré de réputation",
            desc: "Atteindre 50 de réputation chez les Ferrés.",
            cond: (g) => (g.reputation && (g.reputation.ferrés || 0) >= 50),
        },
        {
            id: "guild_rep_cable_50",
            name: "Tissé de câbles",
            desc: "Atteindre 50 de réputation chez les Veilleurs.",
            cond: (g) => (g.reputation && (g.reputation.cables || 0) >= 50),
        },
        {
            id: "guild_rep_lumen_50",
            name: "Lumen confirmé",
            desc: "Atteindre 50 de réputation chez les Lumens.",
            cond: (g) => (g.reputation && (g.reputation.lumens || 0) >= 50),
        },
        {
            id: "guild_rep_any_100",
            name: "Piliers de la Surface",
            desc: "Atteindre 100 de réputation dans n’importe quelle guilde.",
            cond: (g) => {
                const r = g.reputation || {};
                return (
                    (r.ferrés || 0) >= 100 ||
                    (r.cables || 0) >= 100 ||
                    (r.lumens || 0) >= 100 ||
                    (r.villagers || 0) >= 100
                );
            },
        },

        // ---------- Familiers ----------
        {
            id: "fam_fox",
            name: "Renard-lampe",
            desc: "Adopter le renard-lampe.",
            cond: (g) =>
                g.familiars &&
                g.familiars.find((f) => f.id === "fox_lamp" || f === "fox_lamp") != null,
        },
        {
            id: "fam_beetle",
            name: "Coléoptère-rouage",
            desc: "Adopter le scarabée-rouage.",
            cond: (g) =>
                g.familiars &&
                g.familiars.find((f) => f.id === "gear_beetle" || f === "gear_beetle") != null,
        },
        {
            id: "fam_smoke_cat",
            name: "Chat de fumée",
            desc: "Adopter le chat de fumée.",
            cond: (g) =>
                g.familiars &&
                g.familiars.find((f) => f.id === "smoke_cat" || f === "smoke_cat") != null,
        },
        {
            id: "fam_crystal_owl",
            name: "Hibou de cristal",
            desc: "Adopter le hibou de cristal.",
            cond: (g) =>
                g.familiars &&
                g.familiars.find((f) => f.id === "crystal_owl" || f === "crystal_owl") != null,
        },
        {
            id: "fam_three",
            name: "Ménagerie mécanique",
            desc: "Avoir au moins 3 familiers différents liés pendant une partie.",
            cond: (g) => (g.familiars || []).length >= 3,
        },

        // ---------- Campement ----------
        {
            id: "camp_level_1",
            name: "Feu de camp",
            desc: "Améliorer le camp au niveau 1.",
            cond: (g) => g.camp && (g.camp.level || 0) >= 1,
        },
        {
            id: "camp_level_3",
            name: "Base avancée",
            desc: "Améliorer le camp au niveau 3.",
            cond: (g) => g.camp && (g.camp.level || 0) >= 3,
        },
        {
            id: "camp_infirmary",
            name: "Tente médicale",
            desc: "Débloquer l’infirmerie au camp.",
            cond: (g) => g.camp && g.camp.infirmary === true,
        },
        {
            id: "camp_workshop",
            name: "Atelier de fortune",
            desc: "Débloquer l’atelier au camp.",
            cond: (g) => g.camp && g.camp.workshop === true,
        },
        {
            id: "camp_kitchen",
            name: "Cantine de camp",
            desc: "Débloquer la cuisine au camp.",
            cond: (g) => g.camp && g.camp.kitchen === true,
        },

        // ---------- Codex & découverte ----------
        {
            id: "codex_mon_10",
            name: "Bestiaire naissant",
            desc: "Découvrir 10 types de monstres.",
            cond: (g) => {
                const m = g.codex && g.codex.monsters;
                return m && Object.keys(m).length >= 10;
            },
        },
        {
            id: "codex_mon_30",
            name: "Encyclopédie carnivore",
            desc: "Découvrir 30 types de monstres.",
            cond: (g) => {
                const m = g.codex && g.codex.monsters;
                return m && Object.keys(m).length >= 30;
            },
        },
        {
            id: "codex_loc_10",
            name: "Cartographe hésitant",
            desc: "Découvrir 10 lieux ou biomes.",
            cond: (g) => {
                const l = g.codex && g.codex.locations;
                return l && Object.keys(l).length >= 10;
            },
        },
        {
            id: "codex_npc_5",
            name: "Connaisseur de visages",
            desc: "Rencontrer 5 PNJ différents.",
            cond: (g) => {
                const n = g.codex && g.codex.npcs;
                return n && Object.keys(n).length >= 5;
            },
        },

        // ---------- Origines ----------
        {
            id: "origin_engineer_20",
            name: "Ingénieur tenace",
            desc: "Atteindre l’étage 20 avec l’origine ingénieur.",
            cond: (g) => g.origin === "ingenieur" && g.maxFloorReached >= 20,
        },
        {
            id: "origin_medic_20",
            name: "Secouriste profond",
            desc: "Atteindre l’étage 20 avec l’origine medic.",
            cond: (g) => g.origin === "medic" && g.maxFloorReached >= 20,
        },
        {
            id: "origin_porteur_20",
            name: "Dos solide",
            desc: "Atteindre l’étage 20 avec l’origine porteur.",
            cond: (g) => g.origin === "porteur" && g.maxFloorReached >= 20,
        },
        {
            id: "origin_triple_20",
            name: "Trinité de départ",
            desc: "Atteindre au moins l’étage 20 avec les trois origines (méta).",
            cond: (g) =>
                g.meta &&
                Array.isArray(g.meta.history) &&
                g.meta.history.filter((h) => h.reached20AllOrigins).length > 0,
        },

        // ---------- Méta / NG+ ----------
        {
            id: "meta_first_win",
            name: "Première échappée",
            desc: "Terminer une première run (victoire ou retour en vie).",
            cond: (g) => g.victory === true || (g.meta && (g.meta.runs || 0) >= 1),
        },
        {
            id: "meta_3_runs",
            name: "Récidiviste",
            desc: "Finir 3 runs au total.",
            cond: (g) => g.meta && (g.meta.runs || 0) >= 3,
        },
        {
            id: "meta_10_runs",
            name: "Client fidèle",
            desc: "Finir 10 runs au total.",
            cond: (g) => g.meta && (g.meta.runs || 0) >= 10,
        },
        {
            id: "ngplus_1",
            name: "Premier NG+",
            desc: "Lancer une partie en NG+.",
            cond: (g) => g.meta && (g.meta.ngPlusLevel || 0) >= 1,
        },
        {
            id: "ngplus_3",
            name: "Spirale abyssale",
            desc: "Atteindre NG+3.",
            cond: (g) => g.meta && (g.meta.ngPlusLevel || 0) >= 3,
        },

        // ---------- Hunger / fatigue ----------
        {
            id: "hunger_low_20",
            name: "Estomac qui grince",
            desc: "Descendre sous 20 de faim sans mourir.",
            cond: (g) => g.player && g.player.hunger <= 20 && !g.gameOver,
        },
        {
            id: "fatigue_high_80",
            name: "Yeux rougeoyants",
            desc: "Atteindre 80 de fatigue ou plus sans abandonner.",
            cond: (g) => g.player && g.player.fatigue >= 80 && !g.gameOver,
        },

        // ---------- Compagnons ----------
        {
            id: "companion_first",
            name: "Pas seul",
            desc: "Recruter un premier compagnon.",
            cond: (g) => (g.party || []).length >= 1,
        },
        {
            id: "companion_lv5",
            name: "Équipier solide",
            desc: "Avoir un compagnon de niveau 5 ou plus.",
            cond: (g) =>
                (g.party || []).some((a) => (a.level || 1) >= 5),
        },
        {
            id: "companion_survivor",
            name: "Toujours debout",
            desc: "Terminer un combat où ton compagnon termine avec 1 HP.",
            cond: (g) => g.achievFlags && g.achievFlags.companionClutch === true,
        },
        {
            id: "companion_dismiss",
            name: "Rupture professionnelle",
            desc: "Renvoyer au moins un compagnon.",
            cond: (g) => g.achievFlags && g.achievFlags.dismissedCompanion === true,
        },

        // ---------- Marchands / économie avancée ----------
        {
            id: "shop_ghost",
            name: "Client des ombres",
            desc: "Acheter au moins un objet dans le marché fantomatique.",
            cond: (g) => g.achievFlags && g.achievFlags.boughtGhost === true,
        },
        {
            id: "shop_village_3",
            name: "Habitué des villages",
            desc: "Acheter au moins un objet dans 3 villages différents.",
            cond: (g) => g.achievCounters && (g.achievCounters.villagesShopped || 0) >= 3,
        },

        // ---------- Boss & combats spé ----------
        {
            id: "boss_5",
            name: "Premier gardien",
            desc: "Vaincre le boss de l’étage 5.",
            cond: (g) => g.achievFlags && g.achievFlags.boss5Defeated === true,
        },
        {
            id: "boss_20",
            name: "Cœur fumant",
            desc: "Vaincre le boss de l’étage 20.",
            cond: (g) => g.achievFlags && g.achievFlags.boss20Defeated === true,
        },
        {
            id: "boss_50",
            name: "Colosse rongé",
            desc: "Vaincre le boss de l’étage 50.",
            cond: (g) => g.achievFlags && g.achievFlags.boss50Defeated === true,
        },
        {
            id: "boss_100",
            name: "Silence du Noyau",
            desc: "Vaincre le boss final de l’étage 100.",
            cond: (g) => g.achievFlags && g.achievFlags.boss100Defeated === true,
        },
        {
            id: "boss_hitless",
            name: "Danse au milieu des lames",
            desc: "Vaincre un boss sans subir de dégâts dans le combat.",
            cond: (g) => g.achievFlags && g.achievFlags.hitlessBoss === true,
        },

        // ---------- Lore / événements spé ----------
        {
            id: "lore_console",
            name: "Journal système",
            desc: "Lire un fragment de lore sur une console brisée.",
            cond: (g) => g.codex && g.codex.lore && g.codex.lore.console_logs,
        },
        {
            id: "lore_diary",
            name: "Pages huilées",
            desc: "Lire un journal imbibé d’huile.",
            cond: (g) => g.codex && g.codex.lore && g.codex.lore.oil_diary,
        },
        {
            id: "lore_memory",
            name: "Échos de soi-même",
            desc: "Subir un écho de mémoire.",
            cond: (g) => g.codex && g.codex.lore && g.codex.lore.memory_echo,
        },

        // ---------- Aléas & fun ----------
        {
            id: "gamble_win_big",
            name: "Coup de dés",
            desc: "Gagner un gros pari chez le parieur louche.",
            cond: (g) => g.achievFlags && g.achievFlags.bigGambleWin === true,
        },
        {
            id: "gamble_lose_chain",
            name: "Malchance assumée",
            desc: "Perdre 3 paris de suite.",
            cond: (g) => g.achievFlags && g.achievFlags.gambleLoseStreak3 === true,
        },
        {
            id: "trap_survivor",
            name: "Cobaye résistant",
            desc: "Survivre à 10 pièges déclenchés.",
            cond: (g) => g.achievCounters && (g.achievCounters.trapsTriggered || 0) >= 10,
        },
        {
            id: "trap_no_trigger_20",
            name: "Pied léger",
            desc: "Traverser 20 étages d’affilée sans déclencher un piège.",
            cond: (g) => g.achievFlags && g.achievFlags.noTrap20 === true,
        },

        // ---------- Défaites ----------
        {
            id: "death_first",
            name: "Reçu par l’Abysse",
            desc: "Mourir une première fois.",
            cond: (g) => g.meta && (g.meta.deaths || 0) >= 1,
        },
        {
            id: "death_10",
            name: "Client régulier des fosses",
            desc: "Mourir 10 fois au total.",
            cond: (g) => g.meta && (g.meta.deaths || 0) >= 10,
        },
        {
            id: "death_floor_1",
            name: "Tombé au seuil",
            desc: "Mourir à l’étage 1.",
            cond: (g) => g.meta && (g.meta.lastDeathFloor || 0) === 1,
        },

        // ---------- Divers & méta-flavour ----------
        {
            id: "surface_only",
            name: "Habitant de la Surface",
            desc: "Lancer une partie et abandonner sans dépasser l’étage 0.",
            cond: (g) => !g.maxFloorReached && g.gameOver === true,
        },
        {
            id: "no_guild_run",
            name: "Libre de tout serment",
            desc: "Atteindre l’étage 30 sans jamais rejoindre de guilde.",
            cond: (g) => !g.guildId && g.maxFloorReached >= 30,
        },
        {
            id: "all_guilds_joined",
            name: "Poly-guildé",
            desc: "Avoir rejoint au moins une fois chaque guilde (méta).",
            cond: (g) =>
                g.meta &&
                Array.isArray(g.meta.history) &&
                g.meta.history.filter((h) => h.joinedAllGuilds).length > 0,
        },
        {
            id: "abyssal_start",
            name: "Sans échauffement",
            desc: "Commencer ta toute première run en difficulté abyssal.",
            cond: (g) =>
                g.meta &&
                (g.meta.runs || 0) === 0 &&
                g.difficulty === "abyssal",
        },
    ];


    function checkAchievements() {
        if (!game) return;
        game.achievements = game.achievements || [];
        ACHIEVEMENTS.forEach((a) => {
            if (!game.achievements.includes(a.id) && a.cond(game)) {
                game.achievements.push(a.id);
                UI.log(`Succès obtenu : ${a.name} !`, "loot");
                UI.showToast("Succès : " + a.name, "level");
            }
        });
    }

    /* ---------- Guildes ---------- */

    const GUILDS = [
        {
            id: "ironclads",
            name: "Guilde des Ferrés",
            repKey: "ferrés",
            desc: "Spécialistes du métal et des coups puissants.",
            tiers: [
                {
                    level: 1,
                    repRequired: 0,
                    bonus: { str: 1, dex: 0, luck: 0 },
                    label: "+1 Force, petite remise sur les armes.",
                },
                {
                    level: 2,
                    repRequired: 30,
                    bonus: { str: 2, dex: 0, luck: 0 },
                    label: "+2 Force, meilleures armes en boutique.",
                },
                {
                    level: 3,
                    repRequired: 70,
                    bonus: { str: 2, dex: 1, luck: 0 },
                    label: "+2 Force, +1 Dextérité, meilleures chances de briser l’armure ennemie.",
                },
                {
                    level: 4,
                    repRequired: 120,
                    bonus: { str: 3, dex: 1, luck: 0 },
                    label: "+3 Force, +1 Dextérité, grosses remises sur les armes.",
                },
                {
                    level: 5,
                    repRequired: 180,
                    bonus: { str: 3, dex: 1, luck: 1 },
                    label: "+3 Force, +1 Dextérité, +1 Chance, accès aux contrats d’élite.",
                },
            ],
        },
        {
            id: "cable_watch",
            name: "Veilleurs des Câbles",
            repKey: "cables",
            desc: "Patrouilleurs acrobates, experts des couloirs instables.",
            tiers: [
                {
                    level: 1,
                    repRequired: 0,
                    bonus: { str: 0, dex: 1, luck: 0 },
                    label: "+1 Dextérité, initiative plus fiable.",
                },
                {
                    level: 2,
                    repRequired: 30,
                    bonus: { str: 0, dex: 2, luck: 0 },
                    label: "+2 Dextérité, meilleure esquive des pièges.",
                },
                {
                    level: 3,
                    repRequired: 70,
                    bonus: { str: 1, dex: 2, luck: 0 },
                    label: "+1 Force, +2 Dextérité, meilleures chances de toucher en premier.",
                },
                {
                    level: 4,
                    repRequired: 120,
                    bonus: { str: 1, dex: 3, luck: 0 },
                    label: "+1 Force, +3 Dextérité, gros bonus d’initiative.",
                },
                {
                    level: 5,
                    repRequired: 180,
                    bonus: { str: 1, dex: 3, luck: 1 },
                    label: "+1 Force, +3 Dextérité, +1 Chance, accès aux missions de patrouille spéciales.",
                },
            ],
        },
        {
            id: "lumen_order",
            name: "Ordre des Lumens",
            repKey: "lumens",
            desc: "Mystiques de la lumière, chance et intuition.",
            tiers: [
                {
                    level: 1,
                    repRequired: 0,
                    bonus: { str: 0, dex: 0, luck: 1 },
                    label: "+1 Chance, meilleures fuites.",
                },
                {
                    level: 2,
                    repRequired: 30,
                    bonus: { str: 0, dex: 0, luck: 2 },
                    label: "+2 Chance, critiques un peu plus fréquents.",
                },
                {
                    level: 3,
                    repRequired: 70,
                    bonus: { str: 0, dex: 1, luck: 2 },
                    label: "+1 Dextérité, +2 Chance, meilleurs loots rares.",
                },
                {
                    level: 4,
                    repRequired: 120,
                    bonus: { str: 0, dex: 1, luck: 3 },
                    label: "+1 Dextérité, +3 Chance, grandes faveurs du hasard.",
                },
                {
                    level: 5,
                    repRequired: 180,
                    bonus: { str: 1, dex: 1, luck: 3 },
                    label: "+1 Force, +1 Dextérité, +3 Chance, accès à des rituels lumineux uniques.",
                },
            ],
        },
        {
            id: "deep_camp",
            name: "Cercle des Campements",
            repKey: "villagers",
            desc: "Organisateurs de campements, logistique et survie.",
            tiers: [
                {
                    level: 1,
                    repRequired: 0,
                    bonus: { str: 0, dex: 0, luck: 0 },
                    label: "+0 stats, mais meilleurs prix pour la nourriture.",
                },
                {
                    level: 2,
                    repRequired: 25,
                    bonus: { str: 1, dex: 0, luck: 0 },
                    label: "+1 Force, repos plus efficaces.",
                },
                {
                    level: 3,
                    repRequired: 60,
                    bonus: { str: 1, dex: 1, luck: 0 },
                    label: "+1 Force, +1 Dextérité, bonus de soins sur les plats cuisinés.",
                },
                {
                    level: 4,
                    repRequired: 110,
                    bonus: { str: 1, dex: 1, luck: 1 },
                    label: "+1 Force, +1 Dextérité, +1 Chance, réductions dans les villages.",
                },
                {
                    level: 5,
                    repRequired: 170,
                    bonus: { str: 2, dex: 1, luck: 1 },
                    label: "+2 Force, +1 Dextérité, +1 Chance, accès à des services de camp avancés.",
                },
            ],
        },
    ];




    /* ---------- Malédictions & blessures ---------- */

    const ALL_CURSES = [
        {
            id: "blood_price",
            name: "Prix de sang",
            desc: "-10% HP max",
            type: "hp",
        },
        {
            id: "numb_limbs",
            name: "Membres engourdis",
            desc: "-1 Force",
            type: "str",
        },
        {
            id: "blurred_sight",
            name: "Vision brouillée",
            desc: "-1 Dextérité",
            type: "dex",
        },
        {
            id: "hungry_abyss",
            name: "Faim de l'Abysse",
            desc: "La faim augmente plus vite",
            type: "hunger",
        },
        {
            id: "hostile_depths",
            name: "Profondeurs hostiles",
            desc: "Les ennemis frappent plus fort",
            type: "enemy_str",
        },
    ];

    function hasCurse(id) {
        return game.curses.some((c) => c.id === id);
    }

    function addCurseRandom(reasonText) {
        const remaining = ALL_CURSES.filter((c) => !hasCurse(c.id));
        if (!remaining.length) return;
        const c = remaining[randInt(0, remaining.length - 1)];
        game.curses.push(c);
        UI.log(
            `Une malédiction s'accroche à toi : ${c.name} (${c.desc}).`,
            "danger"
        );
        if (reasonText) UI.log(reasonText, "system");
        UI.showToast("Malédiction : " + c.name, "danger");
    }

    function depthCurseCheck(newFloor) {
        const cfg = getDiffCfg();
        const thresholds = [10, 20, 40, 60, 80];
        if (thresholds.includes(newFloor) && Math.random() < 0.4 * cfg.curseRateMul) {
            addCurseRandom("Plus tu descends, plus l'Abysse se referme sur toi.");

        }
    }

    const POSSIBLE_INJURIES = [
        {
            id: "sprained_ankle",
            name: "Cheville tordue",
            desc: "-1 DEX jusqu'au prochain repos d'auberge.",
            dex: -1,
            str: 0,
        },
        {
            id: "cracked_ribs",
            name: "Côtes fêlées",
            desc: "-1 FOR jusqu'au prochain repos.",
            dex: 0,
            str: -1,
        },
    ];

    function addInjuryRandom() {
        if (!POSSIBLE_INJURIES.length) return;
        if (Math.random() > 0.3) return;
        const existing = game.injuries || [];
        const candidates = POSSIBLE_INJURIES.filter(
            (i) => !existing.find((e) => e.id === i.id)
        );
        if (!candidates.length) return;
        const inj = candidates[randInt(0, candidates.length - 1)];
        existing.push(inj);
        game.injuries = existing;
        UI.log(`Tu gardes une blessure : ${inj.name}.`, "danger");
    }

    /* ---------- Utils ---------- */

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rollD20(mod = 0) {
        const r = randInt(1, 20);
        return { roll: r, total: r + mod };
    }

    function hungerCost(base) {
        if (hasCurse("hungry_abyss")) return Math.floor(base * 1.7);
        const biome = getBiomeForFloor(game.floor);
        return Math.floor(base * (biome.hungerMul || 1));
    }

    function enemyStrWithCurses(str) {
        const cfg = getDiffCfg();
        let s = str;
        if (hasCurse("hostile_depths")) s += 2;
        const biome = getBiomeForFloor(game.floor);
        s = Math.floor(s * (biome.enemyDmgMul || 1));
        return Math.floor(s * cfg.enemyDmgMul);
    }

    function getEquipmentBonusCharacter(equipment) {
        const bonus = { hp: 0, str: 0, dex: 0, luck: 0 };
        Object.values(equipment || {}).forEach((id) => {
            if (!id) return;
            const it = DATA.ITEMS[id];
            if (!it || !it.stats) return;
            if (it.stats.hp) bonus.hp += it.stats.hp;
            if (it.stats.str) bonus.str += it.stats.str;
            if (it.stats.dex) bonus.dex += it.stats.dex;
            if (it.stats.luck) bonus.luck += it.stats.luck;
        });
        return bonus;
    }

    function applyInjuries(stats) {
        let s = { ...stats };
        (game.injuries || []).forEach((i) => {
            if (i.str) s.str = Math.max(1, s.str + i.str);
            if (i.dex) s.dex = Math.max(1, s.dex + i.dex);
        });
        return s;
    }

    function getPlayerBaseStatsWithEquipment() {
        const base = game.player.stats;
        const eq = getEquipmentBonusCharacter(game.player.equipment);
        const guildBonus = getGuildBonus();
        let maxHp = base.maxHp + (eq.hp || 0);
        let str = base.str + (eq.str || 0) + guildBonus.str;
        let dex = base.dex + (eq.dex || 0) + guildBonus.dex;
        let luck = base.luck + (eq.luck || 0) + guildBonus.luck;

        if (hasCurse("blood_price")) {
            maxHp = Math.max(5, Math.floor(maxHp * 0.9));
        }
        if (hasCurse("numb_limbs")) str = Math.max(1, str - 1);
        if (hasCurse("blurred_sight")) dex = Math.max(1, dex - 1);

        let finalStats = { maxHp, hp: base.hp, str, dex, luck };
        finalStats = applyInjuries(finalStats);
        finalStats = applyEncumbrancePenalty(finalStats);
        return finalStats;
    }

    function getAllyEffectiveStats(ally) {
        const eq = getEquipmentBonusCharacter(ally.equipment || {});
        let maxHp = ally.baseMaxHp + (eq.hp || 0);
        let str = ally.baseStr + (eq.str || 0);
        let dex = ally.baseDex + (eq.dex || 0);
        return { maxHp, hp: ally.hp, str, dex };
    }

    function effectiveMaxHp() {
        const total = getPlayerBaseStatsWithEquipment();
        return total.maxHp;
    }

    function applyFatiguePenalty(stats) {
        const f = game.player.fatigue;
        let malus = 0;
        if (f >= 50 && f < 80) malus = 1;
        else if (f >= 80) malus = 2;
        return {
            str: Math.max(1, stats.str - malus),
            dex: Math.max(1, stats.dex - malus),
            luck: Math.max(1, stats.luck - malus),
        };
    }

    function checkHungerFatigueDeath() {
        if (game.player.hunger <= 0) {
            UI.log(
                "Ton ventre est vide depuis trop longtemps. Tu t'effondres, avalé par l'Abysse.",
                "danger"
            );
            UI.showToast("Tu es mort de faim…", "danger");
            game.gameOver = true;
            UI.showDeathScreen();
            UI.playSound("death");
            return true;
        }
        return false;
    }

    function updateLowHp() {
        const ratio = game.player.stats.hp / effectiveMaxHp();
        UI.setLowHpState(ratio <= 0.25);
    }

    /* ---------- Codex ---------- */

    function unlockCodexMonster(id, name) {
        game.codex = game.codex || { monsters: {}, locations: {}, npcs: {} };
        if (!game.codex.monsters[id]) {
            game.codex.monsters[id] = { id, name };
            UI.log(`Nouveau monstre consigné dans le codex : ${name}.`, "system");
        }
    }

    function unlockCodexLocation(floor) {
        game.codex = game.codex || { monsters: {}, locations: {}, npcs: {} };
        if (!game.codex.locations[floor]) {
            const biome = getBiomeForFloor(floor);
            game.codex.locations[floor] = { floor, biome: biome.name };
        }
    }

    function unlockCodexNpc(id, name) {
        game.codex = game.codex || { monsters: {}, locations: {}, npcs: {} };
        if (!game.codex.npcs[id]) {
            game.codex.npcs[id] = { id, name };
            UI.log(`Rencontre consignée : ${name}.`, "system");
        }
    }

    function showCodex() {
        game.codex = game.codex || { monsters: {}, locations: {}, npcs: {} };
        let html = "<div>Codex :</div><div class='section-block small'>";
        html += "<div><strong>Monstres rencontrés :</strong></div>";
        const monsters = Object.values(game.codex.monsters);
        if (!monsters.length) html += "<div>— aucun —</div>";
        else monsters.forEach((m) => {
            html += `<div>• ${m.name}</div>`;
        });

        html += "<div class='section-block'><strong>Lieux :</strong></div>";
        const locs = Object.values(game.codex.locations).sort(
            (a, b) => a.floor - b.floor
        );
        if (!locs.length) html += "<div>— aucun —</div>";
        else
            locs.forEach((l) => {
                html += `<div>• Étage ${l.floor} — ${l.biome}</div>`;
            });

        html += "<div class='section-block'><strong>PNJ :</strong></div>";
        const npcs = Object.values(game.codex.npcs);
        if (!npcs.length) html += "<div>— aucun —</div>";
        else
            npcs.forEach((n) => {
                html += `<div>• ${n.name}</div>`;
            });

        html += "</div>";
        UI.openPage("Codex", html);
    }

    /* ---------- Succès ---------- */

    function showAchievements() {
        game.achievements = game.achievements || [];
        let html = "<div>Succès :</div><div class='section-block small'>";
        if (!ACHIEVEMENTS.length) {
            html += "<div>Aucun succès défini.</div>";
        } else {
            ACHIEVEMENTS.forEach((a) => {
                const done = game.achievements.includes(a.id);
                html += `<div>${done ? "✅" : "⬜"} <strong>${a.name}</strong> — ${
                    a.desc
                }</div>`;
            });
        }
        html += "</div>";
        UI.openPage("Succès", html);
    }

    /* ---------- Nouveau jeu / New Game+ ---------- */

    function newGame(isNgPlus) {
        const name = prompt("Nom de ton aventurier :", "Riko") || "Anonyme";

        let diff = prompt(
            "Difficulté ? (explorateur / normal / abyssal)",
            "normal"
        );
        if (!["explorateur", "normal", "abyssal"].includes(diff)) diff = "normal";

        let origin = prompt(
            "Origine ? (ingenieur / medic / porteur)",
            "ingenieur"
        );
        if (!["ingenieur", "medic", "porteur"].includes(origin))
            origin = "ingenieur";

        let baseMaxHp = 18;
        let baseStr = 2;
        let baseDex = 2;
        let baseLuck = 1;

        if (origin === "ingenieur") baseDex += 1;
        if (origin === "medic") baseLuck += 1;
        if (origin === "porteur") baseMaxHp += 4;

        const meta =
            game && game.meta ? game.meta : { runs: 0, ngPlusLevel: 0, history: [] };
        if (isNgPlus) {
            meta.runs = (meta.runs || 0) + 1;
            meta.ngPlusLevel = (meta.ngPlusLevel || 0) + 1;
            baseStr += meta.ngPlusLevel;
            baseDex += Math.floor(meta.ngPlusLevel / 2);
            meta.history.push({
                time: Date.now(),
                note: "Run terminé, passage en NG+ " + meta.ngPlusLevel,
            });
        }

        game = {
            meta,
            difficulty: diff,
            origin,
            player: {
                name,
                level: 1,
                exp: 0,
                expToNext: 20,
                stats: {
                    maxHp: baseMaxHp,
                    hp: baseMaxHp,
                    str: baseStr,
                    dex: baseDex,
                    luck: baseLuck,
                },
                statPoints: 0,
                gold: 20,
                hunger: 100,
                fatigue: 0,
                inventory: ["rusty_sword", "leather_chest", "small_potion"],
                resources: {
                    herb: 0,
                    beast_blood: 0,
                    gear_fragment: 0,
                    mushroom: 0,
                    raw_meat: 0,
                    root_veg: 0,
                    glow_cap: 0,
                },
                skills: [],
                equipment: {
                    weapon: null,
                    shield: null,
                    head: null,
                    chest: null,
                    legs: null,
                    boots: null,
                    ring1: null,
                    ring2: null,
                    amulet: null,
                },
            },
            floor: 0,
            maxFloorReached: 0,
            party: [],
            familiars: [],
            enchant: { weapon: 0, armor: 0 },
            quests: { active: [], completed: [] },
            discoveredResources: {},
            shop: { inventories: {} },
            current: { mode: "idle", combat: null, event: null },
            exploreCount: 0,
            gameOver: false,
            victory: false,
            curses: [],
            guildId: null,
            guildName: null,
            injuries: [],
            codex: { monsters: {}, locations: {}, npcs: {} },
            achievements: [],
            reputation: {
                ferrés: 0,
                cables: 0,
                lumens: 0,
                villagers: 0,
            },
            camp: {
                level: 0,
                infirmary: false,
                workshop: false,
                kitchen: false,
            },
            runStats: {
                downStreak: 0,
                maxDownStreak: 0,
            },
        };

        UI.hideDeathScreen();
        UI.hideVictoryScreen();
        UI.clearLog();
        UI.log("Bienvenue dans les Abysses de Fer.", "system");
        UI.log(
            "Avant l'étage 5, tu peux remonter. Plus bas, l'Abysse ne rend plus rien.",
            "system"
        );
        renderAll();
    }

    /* ---------- Rendu global ---------- */

    function renderAll() {
        if (!game) return;
        const totalStats = getPlayerBaseStatsWithEquipment();
        const effMax = effectiveMaxHp();
        if (game.player.stats.hp > effMax) game.player.stats.hp = effMax;

        unlockCodexLocation(game.floor);
        UI.renderHeader(game);
        UI.renderStats(game, effMax, totalStats);
        UI.renderParty(game, effMax);
        UI.renderMenu(game);
        updateLowHp();
    }

    /* ---------- Déplacement / faim / fatigue ---------- */

    function consumeForAction(type) {
        const cfg = getDiffCfg();
        const encMul = getEncumbranceFatigueMul();

        if (type === "explore") {
            game.player.hunger = Math.max(
                0,
                game.player.hunger - Math.floor(hungerCost(3) * cfg.hungerMul)
            );
            game.player.fatigue = Math.min(
                100,
                game.player.fatigue + Math.floor(5 * cfg.fatigueMul * encMul)
            );

        } else if (type === "descend") {
            game.player.hunger = Math.max(
                0,
                game.player.hunger - Math.floor(hungerCost(4) * cfg.hungerMul)
            );
            game.player.fatigue = Math.min(
                100,
                game.player.fatigue + Math.floor(7 * cfg.fatigueMul * encMul)
            );

        } else if (type === "combat") {
            game.player.hunger = Math.max(
                0,
                game.player.hunger - Math.floor(hungerCost(2) * cfg.hungerMul)
            );
            game.player.fatigue = Math.min(
                100,
                game.player.fatigue + Math.floor(5 * cfg.fatigueMul * encMul)
            );

        }

        if (checkHungerFatigueDeath()) return true;

        if (game.player.fatigue >= 100) {
            const lastVillage =
                DATA.VILLAGE_FLOORS.filter((f) => f <= game.maxFloorReached).slice(-1)[0] ||
                0;
            UI.log(
                "Tes muscles se bloquent, ta vision se brouille. L'Abysse te rejette jusqu'à un refuge.",
                "danger"
            );
            game.floor = lastVillage;
            game.player.fatigue = 40;
            game.player.stats.hp = Math.max(1, Math.floor(effectiveMaxHp() * 0.5));
            renderAll();
        }
        return false;
    }


    function canMoveUp() {
        if (game.floor === 0) return false;
        if (game.floor > 5) return false;
        return true;
    }

    function moveDown() {
        if (game.gameOver) {
            UI.log("La partie est terminée.", "system");
            return;
        }
        if (consumeForAction("descend")) {
            renderAll();
            return;
        }

        const previousFloor = game.floor;

        if (game.floor === 0) {
            game.floor = 1;
            UI.log("Tu descends dans la brume chaude de l'étage 1.");
        } else if (game.floor < 100) {
            game.floor++;
            UI.log("Tu rejoins l'étage " + game.floor + ".");
        }

        if (game.floor > game.maxFloorReached) {
            game.maxFloorReached = game.floor;
        }

        // streak de descente
        if (game.floor > previousFloor) {
            game.runStats.downStreak++;
            if (game.runStats.downStreak > game.runStats.maxDownStreak) {
                game.runStats.maxDownStreak = game.runStats.downStreak;
            }
        }

        depthCurseCheck(game.floor);
        unlockCodexLocation(game.floor);
        checkAchievements();
        renderAll();
    }

    function moveUp() {
        if (!canMoveUp()) {
            UI.log("La pression de l'Abysse t'empêche de remonter d'ici.", "system");
            return;
        }
        if (game.floor > 0) {
            game.floor--;
            if (game.floor === 0) {
                UI.log("Tu émerges à la surface, le souffle court.");
            } else {
                UI.log("Tu remontes à l'étage " + game.floor + ".");
            }
            game.runStats.downStreak = 0;
            unlockCodexLocation(game.floor);
            checkAchievements();
            renderAll();
        }
    }

    /* ---------- Auberge & camp ---------- */

    function restAtInn() {
        if (game.floor !== 0) {
            UI.log("L'auberge se trouve à la surface, près de la guilde.", "system");
            return;
        }
        game.player.stats.hp = effectiveMaxHp();
        game.player.fatigue = Math.max(0, game.player.fatigue - 80);
        game.player.hunger = Math.min(100, game.player.hunger + 40);

        game.injuries = [];
        UI.log(
            "Tu passes une nuit entière dans un lit tiède, sous les vibrations des chaudières. Tu te sens presque normal.",
            "loot"
        );
        UI.showToast("Repos complet à l'auberge", "level");
        renderAll();
    }

    function showCamp() {
        let html =
            "<div>Camp hors de la brume :</div><div class='section-block small'>";
        html += `<div>Niveau de camp : ${game.camp.level}</div>`;
        html += `<div>Installations : infirmerie=${
            game.camp.infirmary ? "oui" : "non"
        }, atelier=${game.camp.workshop ? "oui" : "non"}, cuisine=${
            game.camp.kitchen ? "oui" : "non"
        }</div>`;
        html += "<div class='section-block'>Améliorations :</div>";

        const cost = 30 + game.camp.level * 20;
        html += `<div>Améliorer le camp (coût ${cost} or) <button onclick="ENGINE.upgradeCamp()">Améliorer</button></div>`;
        if (!game.camp.infirmary)
            html += `<div>Construire infirmerie (20 or) <button onclick="ENGINE.buildCampFacility('infirmary')">Construire</button></div>`;
        if (!game.camp.workshop)
            html += `<div>Construire atelier (20 or) <button onclick="ENGINE.buildCampFacility('workshop')">Construire</button></div>`;
        if (!game.camp.kitchen)
            html += `<div>Construire cuisine (20 or) <button onclick="ENGINE.buildCampFacility('kitchen')">Construire</button></div>`;

        html += "</div>";
        UI.openPage("Camp", html);
    }

    function upgradeCamp() {
        const cost = 30 + game.camp.level * 20;
        if (game.player.gold < cost) {
            UI.log("Pas assez d'or pour agrandir le camp.", "system");
            return;
        }
        game.player.gold -= cost;
        game.camp.level++;
        UI.log(
            "Ton camp gagne quelques murs, des câbles mieux fixés, un peu moins de vent.",
            "loot"
        );
        renderAll();
        showCamp();
    }

    function buildCampFacility(id) {
        if (game.player.gold < 20) {
            UI.log("Pas assez d'or.", "system");
            return;
        }
        if (game.camp[id]) return;
        game.player.gold -= 20;
        game.camp[id] = true;
        if (id === "infirmary")
            UI.log(
                "Une petite infirmerie est montée avec des draps sales et des lampes.",
                "loot"
            );
        if (id === "workshop")
            UI.log(
                "Tu installes un coin atelier, avec outils et engrenages éparpillés.",
                "loot"
            );
        if (id === "kitchen")
            UI.log(
                "Quelques casseroles et une plaque chauffante font office de cuisine.",
                "loot"
            );
        renderAll();
        showCamp();
    }

    /* ---------- Exploration & events ---------- */

    function exploreSurface() {
        const r = Math.random();
        if (r < 0.3)
            UI.log(
                "Des équipes remontent dans des cages grinçantes, couvertes d'huile.",
                "system"
            );
        else if (r < 0.6)
            UI.log(
                "Un vieux cartographe te montre une carte pleine de trous brûlés.",
                "system"
            );
        else UI.log("La cloche de la guilde sonne : encore une équipe perdue en bas.", "system");
    }

    function explore() {
        if (game.gameOver) {
            UI.log("La partie est terminée.", "system");
            return;
        }
        if (game.current.mode === "combat") {
            UI.log("Tu es déjà en combat.", "system");
            return;
        }

        if (consumeForAction("explore")) {
            renderAll();
            return;
        }

        if (game.floor === 0) {
            exploreSurface();
            renderAll();
            return;
        }

        const roll = Math.random();
        if (DATA.isBossFloor(game.floor) && Math.random() < 0.25) {
            startBossCombat();
        } else if (roll < 0.5) {
            startRandomCombat();
        } else if (roll < 0.68) {
            findTreasure();
        } else if (roll < 0.82) {
            findResources();
        } else {
            triggerSpecialEvent();
        }
        game.exploreCount++;
        checkAchievements();
        renderAll();
    }

    function findTreasure() {
        const candidates = [
            "small_potion",
            "medium_potion",
            "dried_meat",
            "traveler_ration",
            "iron_ring",
            "lucky_charm",
        ];
        const id = candidates[randInt(0, candidates.length - 1)];
        const it = DATA.ITEMS[id];
        game.player.inventory.push(id);
        UI.log(
            "Tu trouves un petit coffre coincé entre deux câbles : " + it.name + ".",
            "loot"
        );
    }

    function findResources() {
        const resIds = [
            "herb",
            "beast_blood",
            "gear_fragment",
            "mushroom",
            "raw_meat",
            "root_veg",
            "glow_cap",
        ];
        const count = randInt(1, 2);
        for (let i = 0; i < count; i++) {
            const id = resIds[randInt(0, resIds.length - 1)];
            game.player.resources[id] = (game.player.resources[id] || 0) + 1;
            game.discoveredResources[id] = true;
            UI.log("Tu récupères : " + DATA.RESOURCES[id].name, "loot");
            updateQuestCollect(id);
        }
    }

    /* ---------- Combat ---------- */

    function startRandomCombat() {
        const templates = DATA.monstersForFloor(game.floor);
        const groupSize = randInt(1, 3);
        const enemies = [];
        for (let i = 0; i < groupSize; i++) {
            const base = templates[randInt(0, templates.length - 1)];
            const hp = base.hp + Math.floor(game.floor * 1.2);
            const str = base.str + Math.floor(game.floor / 8);
            const e = {
                id: base.id,
                name: base.name,
                hp,
                maxHp: hp,
                str,
                dex: base.dex,
                loot: base.loot.slice(),
            };
            enemies.push(e);
            unlockCodexMonster(base.id, base.name);
        }
        startCombat(enemies, false);
    }

    function startBossCombat() {
        const base = DATA.bossForFloor(game.floor);
        const hp = base.hp + Math.floor(game.floor * 2);
        const str = base.str + Math.floor(game.floor / 6);
        const e = {
            id: base.id,
            name: base.name,
            hp,
            maxHp: hp,
            str,
            dex: base.dex,
            loot: base.loot.slice(),
        };
        unlockCodexMonster(base.id, base.name);
        startCombat([e], true);
    }

    function startCombat(enemies, isBoss) {
        game.current.mode = "combat";
        game.current.combat = {
            enemies,
            isBoss,
            turn: "player",
            xpPool: 0,
            locked: false,
        };
        const names = enemies.map((e) => e.name).join(", ");
        if (isBoss) UI.log("Un BOSS surgit : " + names + " !", "danger");
        else UI.log("Des créatures émergent : " + names + ".", "combat");
        playerVsEnemyInitiative();
    }

    function playerVsEnemyInitiative() {
        const baseStats = getPlayerBaseStatsWithEquipment();
        const pStats = applyFatiguePenalty(baseStats);
        const enemyDex = game.current.combat.enemies.reduce(
            (m, e) => Math.max(m, e.dex),
            0
        );
        const pr = rollD20(pStats.dex);
        const er = rollD20(enemyDex);
        UI.showDiceMulti(
            [
                { label: "Toi", roll: pr.roll, color: "#4ad57e" },
                { label: "Ennemis", roll: er.roll, color: "#f15b5b" },
            ],
            "Initiative"
        );
        UI.log(
            `Initiative — Toi: ${pr.total} vs Ennemis: ${er.total}`,
            "combat"
        );
        if (er.total > pr.total) {
            game.current.combat.turn = "enemies";
            UI.setTurnIndicator("enemies");
            setTimeout(enemyTurn, 500);
        } else {
            game.current.combat.turn = "player";
            UI.setTurnIndicator("player");
            renderCombatActions();
        }
    }

    function renderCombatActions() {
        if (!game || game.current.mode !== "combat") return;
        const c = game.current.combat;
        UI.setTurnIndicator(c.turn === "player" ? "player" : "enemies");
        let html = "<div><strong>Combat :</strong><br>";
        c.enemies.forEach((e, i) => {
            html += `${i + 1}. ${e.name} — HP ${e.hp}/${e.maxHp}<br>`;
        });
        html += "</div><div class='section-block'>";
        html += `<button onclick="ENGINE.playerAttack()">Tour de l'escouade</button>`;
        html += `<button onclick="ENGINE.playerUseItem()">Objet</button>`;
        html += `<button onclick="ENGINE.playerFlee()">Fuite</button>`;
        html += "</div>";
        UI.renderActions(html);
    }

    function playerAttackSingle(target) {
        const baseStats = getPlayerBaseStatsWithEquipment();
        const pStats = applyFatiguePenalty(baseStats);
        const att = rollD20(pStats.dex);
        const def = rollD20(target.dex);
        UI.showDiceMulti(
            [
                { label: "Toi (attaque)", roll: att.roll, color: "#4ad57e" },
                {
                    label: target.name + " (défense)",
                    roll: def.roll,
                    color: "#f15b5b",
                },
            ],
            "Attaque"
        );
        UI.playSound("attack");
        if (att.total < def.total + 2) {
            UI.log("Tu frappes, mais la créature esquive.", "combat");
            return false;
        } else {
            const dmgBase = pStats.str + randInt(1, 4);
            const dmg = Math.max(1, dmgBase);
            target.hp -= dmg;
            UI.flashHit();
            UI.log(`Tu touches ${target.name} pour ${dmg} dégâts.`, "combat");
            return true;
        }
    }

    function allyAttackSingle(ally, target) {
        const eff = getAllyEffectiveStats(ally);
        const att = rollD20(eff.dex);
        const def = rollD20(target.dex);
        if (att.total < def.total + 1) {
            UI.log(`${ally.name} rate ${target.name}.`, "combat");
            return false;
        } else {
            const dmg = Math.max(1, eff.str + randInt(0, 2));
            target.hp -= dmg;
            UI.log(
                `${ally.name} frappe ${target.name} pour ${dmg} dégâts.`,
                "combat"
            );
            return true;
        }
    }

    function cleanupDeadEnemy(target, combat) {
        if (target.hp <= 0) {
            UI.log(`${target.name} s'effondre.`, "loot");
            updateQuestKill(target.id);
            combat.enemies = combat.enemies.filter((e) => e !== target);
            grantEnemyLoot(target);
        }
    }

    function playerAttack() {
        const c = game.current.combat;
        if (!c || c.turn !== "player") {
            UI.log("Ce n'est pas ton tour.", "system");
            return;
        }
        if (c.locked) return;
        c.locked = true;

        if (!c.enemies.length) {
            c.locked = false;
            endCombat(true);
            return;
        }

        let target = c.enemies[0];
        playerAttackSingle(target);
        cleanupDeadEnemy(target, c);

        if (!c.enemies.length) {
            if (consumeForAction("combat")) {
                c.locked = false;
                endCombat(false, true);
                return;
            }
            c.locked = false;
            endCombat(true);
            renderAll();
            return;
        }

        game.party.forEach((ally) => {
            if (ally.hp <= 0 || !c.enemies.length) return;
            const t = c.enemies[randInt(0, c.enemies.length - 1)];
            allyAttackSingle(ally, t);
            cleanupDeadEnemy(t, c);
        });

        if (consumeForAction("combat")) {
            c.locked = false;
            endCombat(false, true);
            return;
        }

        if (!c.enemies.length) {
            c.locked = false;
            endCombat(true);
        } else {
            c.turn = "enemies";
            UI.setTurnIndicator("enemies");
            c.locked = false;
            setTimeout(enemyTurn, 500);
        }
        renderAll();
    }

    function playerUseItem() {
        const c = game.current.combat;
        if (!c || c.turn !== "player") {
            UI.log("Ce n'est pas ton tour.", "system");
            return;
        }
        if (c.locked) return;

        const inv = game.player.inventory;
        const consumables = [];
        inv.forEach((id, idx) => {
            const it = DATA.ITEMS[id];
            if (it && (it.type === "consumable" || it.type === "food")) {
                consumables.push({ id, idx });
            }
        });

        if (!consumables.length) {
            UI.log("Aucun consommable à utiliser.", "system");
            return;
        }

        let html = "<div>Objets utilisables :</div><div class='section-block'>";
        consumables.forEach(({ id, idx }) => {
            const it = DATA.ITEMS[id];
            html += `<div><span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> <button onclick="ENGINE.useItemIndex(${idx},true)">Utiliser</button></div>`;
        });
        html += `<button onclick="ENGINE.renderCombatActions()">Retour combat</button></div>`;
        UI.renderAction(html);
    }


    function playerFlee() {
        const c = game.current.combat;
        if (!c || c.turn !== "player") {
            UI.log("Ce n'est pas ton tour.", "system");
            return;
        }
        if (c.locked) return;

        if (isOverEncumbered()) {
            UI.log("Tu es trop chargé pour fuir rapidement !", "danger");
            return;
        }

        const baseStats = getPlayerBaseStatsWithEquipment();
        const pStats = applyFatiguePenalty(baseStats);
        const r = rollD20(pStats.dex + pStats.luck);
        UI.showDiceMulti(
            [{ label: "Tentative de fuite", roll: r.roll, color: "#4ad57e" }],
            "Fuite"
        );
        if (r.total >= 14) {
            UI.log("Tu parviens à filer entre les ombres.", "combat");
            endCombat(false);
        } else {
            UI.log("L'ennemi te barre la route.", "danger");
            c.turn = "enemies";
            UI.setTurnIndicator("enemies");
            setTimeout(enemyTurn, 500);
        }
    }

    // Fonction interne : consommer un objet à un index donné
    function _useItemAtIndex(index, inCombat) {
        const inv = game.player.inventory;
        if (index < 0 || index >= inv.length) {
            UI.log("Objet introuvable.", "system");
            renderAll();

            return;
        }

        const id = inv[index];
        const it = ABYSS_DATA.ITEMS[id];
        if (!it) {
            UI.log("Objet inconnu.", "system");
            renderAll();

            return;
        }

        if (it.type === "consumable") {
            if (it.effect === "heal_small") {
                const heal = randInt(5, 9);
                game.player.stats.hp = Math.min(
                    effectiveMaxHp(),
                    game.player.stats.hp + heal
                );
                UI.log(`Tu bois ${it.name} et récupères ${heal} HP.`, "loot");
                renderAll();

            } else if (it.effect === "heal_medium") {
                const heal = randInt(10, 16);
                game.player.stats.hp = Math.min(
                    effectiveMaxHp(),
                    game.player.stats.hp + heal
                );
                UI.log(`Tu bois ${it.name} et récupères ${heal} HP.`, "loot");
                renderAll();

            } else if (it.effect === "heal_large") {
                const heal = randInt(18, 26);
                game.player.stats.hp = Math.min(
                    effectiveMaxHp(),
                    game.player.stats.hp + heal
                );
                UI.log(`Tu bois ${it.name} et récupères ${heal} HP.`, "loot");
                renderAll();

            } else if (it.effect === "stamina_boost") {
                game.player.fatigue = Math.max(0, game.player.fatigue - 25);
                UI.log(`Tu avales ${it.name}. Ta fatigue diminue nettement.`, "loot");
                renderAll();

            } else if (it.effect === "mana_small") {
                UI.log(`Tu bois ${it.name}. Une énergie étrange circule en toi.`, "loot");
                renderAll();

            }
        } else if (it.type === "food") {
            game.player.hunger = Math.min(100, game.player.hunger + (it.hunger || 0));
            game.player.fatigue = Math.max(
                0,
                game.player.fatigue + (it.fatigue || 0)
            );
            UI.log(
                `Tu manges ${it.name}. Faim +${it.hunger || 0}%, fatigue ${it.fatigue || 0}%.`,
                "loot"
            );
            renderAll();

        } else {
            UI.log("Cet objet ne peut pas être utilisé ainsi.", "system");
            renderAll();
            return;
        }

        inv.splice(index, 1);

        if (checkHungerFatigueDeath()) {
            renderAll();
            return;
        }
        renderAll();

        if (inCombat) {
            const c = game.current.combat;
            if (!c) return;
            if (!c.enemies.length) {
                endCombat(true);
                return;
            }
            c.turn = "enemies";
            UI.setTurnIndicator("enemies");
            setTimeout(enemyTurn, 500);
        } else {
            showInventory();
        }
    }

    function useItem(key, inCombat) {
        const inv = game.player.inventory;
        let index = -1;
        if (typeof key === "number") {
            index = key;
        } else {
            index = inv.indexOf(key);

        }
        if (index === -1) {
            UI.log("Objet introuvable.", "system");

            return;
        }
        renderAll();
        _useItemAtIndex(index, inCombat);
        renderAll();
    }

    function useItemIndex(index, inCombat) {
        _useItemAtIndex(index, inCombat);

    }

    function showInventory() {
        const inv = game.player.inventory;
        if (!inv.length) {
            UI.openPage("Inventaire", "<div>Inventaire vide.</div>");
            return;
        }
        let html = "<div>Inventaire :</div><div class='section-block small'>";
        inv.forEach((id, idx) => {
            const it = ABYSS_DATA.ITEMS[id];

            if (!it) return;
            html += `<div>${idx + 1}. <span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> (${it.type}) `;
            if (
                ["weapon", "shield", "head", "chest", "legs", "boots", "ring", "amulet"].includes(
                    it.type
                )
            ) {
                html += `<button onclick="ENGINE.equipOn('player','${id}')">Équiper</button>`;
            } else if (it.type === "consumable" || it.type === "food") {
                html += `<button onclick="ENGINE.useItemIndex(${idx},false)">Utiliser</button>`;
            }
            html += `</div>`;
        });
        html += "</div>";
        UI.openPage("Inventaire", html);
    }
    function enemyTurn() {
        const c = game.current.combat;
        if (!c || !c.enemies.length) return;
        UI.setTurnIndicator("enemies");
        c.locked = true;

        setTimeout(() => {
            const entries = [];
            c.enemies.forEach((e) => {
                if (game.player.stats.hp <= 0) return;
                const r = rollD20(e.dex);
                entries.push({ label: e.name, roll: r.roll, color: "#f15b5b" });
                if (r.total < 8) {
                    UI.log(`${e.name} frappe dans le vide.`, "combat");
                } else {
                    const dmg = enemyStrWithCurses(e.str) + randInt(0, 2);
                    game.player.stats.hp -= dmg;
                    if (game.player.stats.hp < 0) game.player.stats.hp = 0;
                    UI.flashDamage();
                    UI.log(
                        `${e.name} te touche pour ${dmg} dégâts.`,
                        "danger"
                    );
                }
            });
            if (entries.length) UI.showDiceMulti(entries, "Ennemis");

            if (game.player.stats.hp <= 0) {
                c.locked = false;
                endCombat(false, true);
            } else {
                c.turn = "player";
                c.locked = false;
                UI.setTurnIndicator("player");
                renderCombatActions();
                renderAll();
            }
        }, 300);
    }

    function grantEnemyLoot(enemy) {
        const cfg = getDiffCfg();
        const gold = randInt(3, 8);
        const exp = Math.floor(randInt(5, 10) * cfg.xpMul);
        game.player.gold += gold;
        game.player.exp += exp;
        game.current.combat.xpPool += exp;
        UI.log(`Butin : ${gold} or, ${exp} XP.`, "loot");

        (enemy.loot || []).forEach((id) => {
            if (DATA.RESOURCES[id]) {
                game.player.resources[id] = (game.player.resources[id] || 0) + 1;
                game.discoveredResources[id] = true;
                UI.log(`Ressource : ${DATA.RESOURCES[id].name}.`, "loot");
                updateQuestCollect(id);
            }
        });
        checkLevelUp();
    }

    function distributeCompanionXP(xpPool) {
        if (!xpPool) return;
        const alive = game.party.filter((a) => a.hp > 0);
        if (!alive.length) return;
        const share = Math.max(1, Math.floor(xpPool * 0.7));
        alive.forEach((a) => {
            a.exp += share;
            while (a.exp >= a.expToNext) {
                a.exp -= a.expToNext;
                a.level++;
                a.baseMaxHp += 4;
                a.baseStr += 1;
                a.baseDex += 1;
                const eff = getAllyEffectiveStats(a);
                a.maxHp = eff.maxHp;
                a.hp = a.maxHp;
                a.expToNext = Math.floor(a.expToNext * 1.5);
                UI.log(`${a.name} passe niveau ${a.level}.`, "loot");
            }
        });
    }

    function triggerVictoryIfNeeded() {
        if (game.floor === 100 && DATA.isBossFloor(100) && !game.victory) {
            game.victory = true;
            game.gameOver = true;
            UI.log(
                "Le Noyau se fissure, libérant un souffle d'air froid venu d'en haut.",
                "system"
            );
            UI.log(
                "Les câbles se desserrent, les machines se taisent. Le silence te laisse seul avec ce que tu as fait.",
                "system"
            );
            UI.showVictoryScreen();
            UI.playSound("victory");
            checkAchievements();
        }
    }

    function endCombat(victory, died) {
        const c = game.current.combat;

        if (died) {
            UI.log("Tu t'effondres. L'Abysse te garde.", "danger");
            UI.showToast("Game Over", "danger");
            game.current.mode = "idle";
            game.current.combat = null;
            game.gameOver = true;
            UI.renderActions("");
            UI.setTurnIndicator("idle");
            UI.showDeathScreen();
            UI.playSound("death");
            renderAll();
            return;
        }

        if (victory) {
            UI.log("Le silence retombe. Tu essuies ton arme.", "loot");
            if (c) distributeCompanionXP(c.xpPool || 0);
            if (c && c.isBoss && game.floor === 100) {
                triggerVictoryIfNeeded();
            }
            if (game.player.stats.hp <= Math.floor(effectiveMaxHp() * 0.3)) {
                addInjuryRandom();
            }
        } else {
            UI.log("Le combat cesse.", "system");
        }
        game.current.mode = "idle";
        game.current.combat = null;
        UI.renderActions("");
        UI.setTurnIndicator("idle");
        checkAchievements();
        renderAll();
    }

    /* ---------- Level / stats ---------- */

    function checkLevelUp() {
        const p = game.player;
        const cfg = getDiffCfg();
        while (p.exp >= p.expToNext) {
            p.exp -= p.expToNext;
            p.level++;
            p.statPoints += 2;
            p.stats.maxHp += 3;
            p.stats.hp = effectiveMaxHp();
            p.expToNext = Math.floor(p.expToNext * 1.5);
            UI.log(`Tu passes niveau ${p.level} !`, "loot");
            UI.showToast("Niveau " + p.level + " !", "level");
           

        }
        checkAchievements();
    }

    function allocateStats() {
        if (!game.player.statPoints) {
            UI.log("Aucun point à distribuer.", "system");
            return;
        }
        let html = `<div>Points de stats : ${game.player.statPoints}</div><div class='section-block'>`;
        html += `<button onclick="ENGINE.addStat('str')">+ Force</button> `;
        html += `<button onclick="ENGINE.addStat('dex')">+ Dextérité</button> `;
        html += `<button onclick="ENGINE.addStat('luck')">+ Chance</button> `;
        html += `<button onclick="ENGINE.addStat('hp')">+ HP max</button>`;
        html += `</div>`;
        UI.openPage("Attribution de points", html);
    }

    function addStat(stat) {
        const p = game.player;
        if (!p.statPoints) return;
        p.statPoints--;
        if (stat === "str") p.stats.str++;
        else if (stat === "dex") p.stats.dex++;
        else if (stat === "luck") p.stats.luck++;
        else if (stat === "hp") {
            p.stats.maxHp += 3;
            p.stats.hp = effectiveMaxHp();
        }
        UI.log("Point attribué en " + stat + ".", "system");
        renderAll();
        allocateStats();
    }

    /* ---------- Inventaire / équipement ---------- */

   /* function showInventory() {
        const inv = game.player.inventory;
        if (!inv.length) {
            UI.openPage("Inventaire", "<div>Inventaire vide.</div>");
            return;
        }
        let html = "<div>Inventaire :</div><div class='section-block small'>";
        inv.forEach((id, idx) => {
            const it = DATA.ITEMS[id];
            if (!it) return;
            html += `<div>${idx + 1}. <span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> (${it.type}) `;
            if (
                ["weapon", "shield", "head", "chest", "legs", "boots", "ring", "amulet"].includes(
                    it.type
                )
            ) {
                html += `<button onclick="ENGINE.equipOn('player','${id}')">Équiper</button>`;
            } else if (it.type === "consumable" || it.type === "food") {
                // IMPORTANT : on passe l’index, pas l’ID
                html += `<button onclick="ENGINE.useItemIndex(${idx},false)">Utiliser</button>`;
            }
            html += `</div>`;
        });
        html += "</div>";
        UI.openPage("Inventaire", html);
    }
*/

    function showEquipment() {
        const p = game.player;
        const eq = p.equipment;
        function slotLine(slot, label) {
            const id = eq[slot];
            if (!id) return `<div>${label} : —</div>`;
            const it = ABYSS_DATA.ITEMS[id];

            return `<div>${label} : <span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span></div>`;
        }
        let html = "<div>Équipement :</div><div class='section-block small'>";
        html += slotLine("weapon", "Arme");
        html += slotLine("shield", "Bouclier");
        html += slotLine("head", "Casque");
        html += slotLine("chest", "Plastron");
        html += slotLine("legs", "Pantalon");
        html += slotLine("boots", "Bottes");
        html += slotLine("amulet", "Amulette");
        html += slotLine("ring1", "Anneau 1");
        html += slotLine("ring2", "Anneau 2");
        html += "</div>";
        UI.openPage("Équipement", html);
    }

    function equipOn(target, id, index) {
        const it = ABYSS_DATA.ITEMS[id];
        if (!it) return;

        const invIndex = game.player.inventory.indexOf(id);
        if (invIndex === -1) {
            UI.log("Objet introuvable dans l'inventaire.", "system");
            return;
        }

        if (target === "player") {
            const eq = game.player.equipment;
            let slot = null;
            if (it.type === "weapon") slot = "weapon";
            else if (it.type === "shield") slot = "shield";
            else if (["head", "chest", "legs", "boots", "amulet"].includes(it.type))
                slot = it.type;
            else if (it.type === "ring") {
                slot = eq.ring1 ? (eq.ring2 ? "ring1" : "ring2") : "ring1";
            }
            if (!slot) {
                UI.log("Objet non équipable.", "system");
                return;
            }
            if (eq[slot]) {
                game.player.inventory.push(ABYSS_DATA.ITEMS[eq[slot]]);
                UI.log(
                    `Tu retires ${DATA.ITEMS[eq[slot]].name}.`,
                    "system"
                );
            }
            eq[slot] = id;
            game.player.inventory.splice(invIndex, 1);
            UI.log(`Tu équipes ${it.name}.`, "loot");
            renderAll();
            showEquipment();
        } else if (target === "ally") {
            const ally = game.party[index];
            if (!ally) return;
            const eq = ally.equipment;
            let slot = null;
            if (it.type === "weapon") slot = "weapon";
            else if (["head", "chest", "legs", "boots"].includes(it.type)) {
                slot = "armor";
            } else {
                UI.log(
                    "Cet allié ne peut porter que arme + armure simple.",
                    "system"
                );
                return;
            }
            if (eq[slot]) {
                game.player.inventory.push(ABYSS_DATA.ITEMS[eq[slot]]);
                UI.log(
                    `${ally.name} retire ${DATA.ITEMS[eq[slot]].name}.`,
                    "system"
                );
            }
            eq[slot] = id;
            game.player.inventory.splice(invIndex, 1);
            UI.log(`${ally.name} équipe ${it.name}.`, "loot");
            const eff = getAllyEffectiveStats(ally);
            ally.maxHp = eff.maxHp;
            if (ally.hp > ally.maxHp) ally.hp = ally.maxHp;
            renderAll();
            showCompanionDetails(index);
        }
    }

    /* ---------- Artisanat / cuisine / enchant ---------- */

    function isRecipeAvailable(r) {
        if (r.minLevel && game.player.level < r.minLevel) return false;
        return true;
    }

    function showCraft() {
        let html = "<div>Atelier (potions & objets) :</div><div class='section-block small'>";
        html += "<div>Ressources :</div>";
        Object.keys(game.player.resources).forEach((id) => {
            const res = DATA.RESOURCES[id];
            if (!res) return;
            html += `<div>- ${res.name} : ${game.player.resources[id]}</div>`;
        });
        html += "<div class='section-block'>Recettes :</div>";
        let any = false;
        DATA.CRAFT_RECIPES.forEach((r) => {
            if (isRecipeAvailable(r)) {
                any = true;
                html += `<div><span class="item-name" onmouseover="UI.showRecipeTooltip('craft','${r.id}',this)" onmouseout="UI.hideTooltip()">${r.name}</span> <button onclick="ENGINE.craft('${r.id}')">Fabriquer</button></div>`;
            }
        });
        if (!any) html += "<div>Aucune recette débloquée.</div>";
        html += "</div>";
        UI.openPage("Artisanat", html);
    }

    function craft(id) {
        const r = DATA.CRAFT_RECIPES.find((x) => x.id === id);
        if (!r) return;
        const res = game.player.resources;
        for (const [resId, amount] of Object.entries(r.requires)) {
            if ((res[resId] || 0) < amount) {
                UI.log("Pas assez de " + DATA.RESOURCES[resId].name + ".", "system");
                return;
            }
        }
        for (const [resId, amount] of Object.entries(r.requires)) {
            res[resId] -= amount;
        }
        game.player.inventory.push(r.result);
        UI.log("Tu fabriques " + DATA.ITEMS[r.result].name + ".", "loot");
        renderAll();
        showCraft();
    }

    function showCooking() {
        let html = "<div>Cuisine :</div><div class='section-block small'>";
        html += "<div>Ressources alimentaires :</div>";
        ["raw_meat", "root_veg", "glow_cap", "mushroom"].forEach((id) => {
            if (!DATA.RESOURCES[id]) return;
            html += `<div>- ${DATA.RESOURCES[id].name} : ${
                game.player.resources[id] || 0
            }</div>`;
        });
        html += "<div class='section-block'>Recettes :</div>";
        let any = false;
        DATA.COOKING_RECIPES.forEach((r) => {
            if (isRecipeAvailable(r)) {
                any = true;
                html += `<div><span class="item-name" onmouseover="UI.showRecipeTooltip('cook','${r.id}',this)" onmouseout="UI.hideTooltip()">${r.name}</span> <button onclick="ENGINE.cook('${r.id}')">Cuisiner</button></div>`;
            }
        });
        if (!any) html += "<div>Aucune recette débloquée.</div>";
        html += "</div>";
        UI.openPage("Cuisine", html);
    }

    function cook(id) {
        const r = DATA.COOKING_RECIPES.find((x) => x.id === id);
        if (!r) return;
        const res = game.player.resources;
        for (const [resId, amount] of Object.entries(r.requires)) {
            if ((res[resId] || 0) < amount) {
                UI.log("Pas assez de " + DATA.RESOURCES[resId].name + ".", "system");
                return;
            }
        }
        for (const [resId, amount] of Object.entries(r.requires)) {
            res[resId] -= amount;
        }
        game.player.inventory.push(r.result);
        UI.log("Tu cuisines " + DATA.ITEMS[r.result].name + ".", "loot");
        renderAll();
        showCooking();
    }

    function showEnchant() {
        let html =
            "<div>Forge / Enchantement :</div><div class='section-block small'>";
        html +=
            "<div>(Système simplifié pour l'instant : l'Abysse bénit moins qu'elle ne maudit.)</div>";
        html += "</div>";
        UI.openPage("Forge & enchantement", html);
    }

    /* ---------- Marché ---------- */

    function getShopInventory() {
        const key = DATA.getShopKey(game.floor);
        if (!game.shop.inventories[key]) {
            const pool = DATA.SHOP_POOLS[key] || DATA.SHOP_POOLS.surface;
            const result = [];
            const copy = pool.slice();
            const count = randInt(4, 6);
            while (result.length < count && copy.length) {
                const idx = randInt(0, copy.length - 1);
                result.push(copy[idx]);
                copy.splice(idx, 1);
            }
            game.shop.inventories[key] = result;
        }
        return game.shop.inventories[key];
    }

    function guildDiscount(it) {
        if (!game.guildId) return it.price;
        if (game.guildId === "ironclads" && it.type === "weapon") {
            return Math.max(1, Math.floor(it.price * 0.9));
        }
        return it.price;
    }

    function showMarket() {
        const inv = getShopInventory();
        let html = "<div>Marché :</div><div class='section-block small'>";
        html += `<div>Or actuel : ${game.player.gold}</div>`;
        html += "<div class='section-block'>Acheter :</div>";
        inv.forEach((id) => {
            const it = DATA.ITEMS[id];
            if (!it) return;
            const price = guildDiscount(it);
            html += `<div><span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> — ${price} or <button onclick="ENGINE.buyItem('${id}',${price})">Acheter</button></div>`;
        });
        html += "<div class='section-block'>Vendre :</div>";
        game.player.inventory.forEach((id) => {
            const it = DATA.ITEMS[id];
            if (!it) return;
            html += `<div><span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> — ${Math.floor(
                it.price / 2
            )} or <button onclick="ENGINE.sellItem('${id}')">Vendre</button></div>`;
        });
        html += "</div>";
        UI.openPage("Marché", html);
    }

    function buyItem(id, priceOverride) {
        const it = DATA.ITEMS[id];
        if (!it) return;
        const cost = typeof priceOverride === "number" ? priceOverride : it.price;
        if (game.player.gold < cost) {
            UI.log("Pas assez d'or.", "system");
            return;
        }
        game.player.gold -= cost;
        game.player.inventory.push(id);
        UI.log("Tu achètes " + it.name + ".", "loot");
        renderAll();
        showMarket();
    }

    function sellItem(id) {
        const idx = game.player.inventory.indexOf(id);
        if (idx === -1) return;
        const it = DATA.ITEMS[id];
        if (!it) return;
        const price = Math.floor(it.price / 2);
        game.player.gold += price;
        game.player.inventory.splice(idx, 1);
        UI.log(`Tu vends ${it.name} pour ${price} or.`, "loot");
        renderAll();
        showMarket();
    }

    /* ---------- Quêtes ---------- */

    function showQuests() {
        let html = "<div>Quêtes :</div><div class='section-block small'>";
        html += "<div>Actives :</div>";
        if (!game.quests.active.length) html += "<div>Aucune quête active.</div>";
        else
            game.quests.active.forEach((q) => {
                html += `<div>• ${q.name} — ${q.progress || 0}/${q.goal.amount}</div>`;
            });
        html += "<div class='section-block'>Disponibles :</div>";
        DATA.QUESTS.forEach((q) => {
            if (
                (q.minFloor || 0) <= game.maxFloorReached &&
                !game.quests.active.find((a) => a.id === q.id) &&
                !game.quests.completed.includes(q.id)
            ) {
                html += `<div><strong>${q.name}</strong><br>${q.description}<br><button onclick="ENGINE.acceptQuest('${q.id}')">Accepter</button></div>`;
            }
        });
        html += "</div>";
        UI.openPage("Quêtes", html);
    }

    function acceptQuest(id) {
        const t = DATA.QUESTS.find((q) => q.id === id);
        if (!t) return;
        const q = JSON.parse(JSON.stringify(t));
        q.progress = 0;
        game.quests.active.push(q);
        UI.log("Tu acceptes la quête : " + q.name, "loot");
        showQuests();
    }

    function updateQuestKill(monsterId) {
        game.quests.active.slice().forEach((q) => {
            if (q.goal.type === "kill" && q.goal.monsterId === monsterId) {
                q.progress = (q.progress || 0) + 1;
                if (q.progress >= q.goal.amount) completeQuest(q);
            }
        });
    }

    function updateQuestCollect(resId) {
        game.quests.active.slice().forEach((q) => {
            if (q.goal.type === "collect" && q.goal.resourceId === resId) {
                const have = game.player.resources[resId] || 0;
                q.progress = Math.min(have, q.goal.amount);
                if (q.progress >= q.goal.amount) completeQuest(q);
            }
        });
    }

    function completeQuest(q) {
        if (game.quests.completed.includes(q.id)) return;
        UI.log(`Quête terminée : ${q.name} !`, "loot");
        UI.showToast("Quête terminée : " + q.name, "quest");
        game.player.gold += q.reward.gold;
        game.player.exp += q.reward.exp;
        game.quests.completed.push(q.id);
        game.quests.active = game.quests.active.filter(
            (qq) => qq.id !== q.id
        );
        checkLevelUp();
        if (!game.current || (game.current.mode !== "combat" && game.current.mode !== "event")) {
            renderAll();
        }

    }

    /* ---------- Recrutement & groupe ---------- */

    function showRecruitment() {
        let html = "<div>Groupe :</div><div class='section-block small'>";
        html += `<div>Alliés : ${game.party.length}/2</div>`;
        if (game.party.length) {
            html += "<div class='section-block'>Alliés actuels :</div>";
            game.party.forEach((a, idx) => {
                const eff = getAllyEffectiveStats(a);
                html += `<div>${idx + 1}. ${a.name} (Lv ${
                    a.level
                }) — HP ${a.hp}/${eff.maxHp}, FOR ${eff.str}, DEX ${
                    eff.dex
                } <button onclick="ENGINE.showCompanionDetails(${idx})">Gérer</button></div>`;
            });
        }
        html += "<div class='section-block'>Recruter :</div>";
        if (game.party.length < 2) {
            const cost = 35 + game.player.level * 5;
            html += `<div>Un éclaireur épuisé propose de te rejoindre pour ${cost} or. <button onclick="ENGINE.recruitScout(${cost})">Recruter</button></div>`;
        } else {
            html += "<div>Groupe complet.</div>";
        }
        html += "</div>";
        UI.openPage("Groupe", html);
    }

    function recruitScout(cost) {
        if (game.player.gold < cost) {
            UI.log("Pas assez d'or.", "system");
            return;
        }
        game.player.gold -= cost;
        const lvl = Math.max(1, game.player.level - 1);
        const baseMaxHp = 18 + lvl * 4;
        const ally = {
            name: "Éclaireur nerveux",
            level: lvl,
            exp: 0,
            expToNext: 25,
            baseMaxHp,
            baseStr: 2 + lvl,
            baseDex: 3 + lvl,
            maxHp: baseMaxHp,
            hp: baseMaxHp,
            equipment: { weapon: null, armor: null },
        };
        game.party.push(ally);
        UI.log("L'éclaireur rejoint ton groupe.", "loot");
        renderAll();
        showRecruitment();
    }

    function showCompanionDetails(index) {
        const a = game.party[index];
        if (!a) return;
        const eff = getAllyEffectiveStats(a);
        let html = `<div>${a.name} (Lv ${a.level})</div><div class='section-block small'>`;
        html += `<div>HP : ${a.hp}/${eff.maxHp}</div>`;
        html += `<div>FOR : ${eff.str}</div>`;
        html += `<div>DEX : ${eff.dex}</div>`;
        html += `<div>XP : ${a.exp}/${a.expToNext}</div>`;
        html += "<div class='section-block'>Équipement :</div>";
        const wId = a.equipment.weapon;
        const arId = a.equipment.armor;
        html += `<div>Arme : ${
            wId
                ? `<span class="item-name" onmouseover="UI.showItemTooltip('${wId}',this)" onmouseout="UI.hideTooltip()">${DATA.ITEMS[wId].name}</span>`
                : "—"
        }</div>`;
        html += `<div>Armure : ${
            arId
                ? `<span class="item-name" onmouseover="UI.showItemTooltip('${arId}',this)" onmouseout="UI.hideTooltip()">${DATA.ITEMS[arId].name}</span>`
                : "—"
        }</div>`;

        html += "<div class='section-block'>Équiper depuis ton inventaire :</div>";
        const inv = game.player.inventory;
        let hasEquip = false;
        inv.forEach((id) => {
            const it = DATA.ITEMS[id];
            if (!it) return;
            if (
                it.type === "weapon" ||
                ["head", "chest", "legs", "boots"].includes(it.type)
            ) {
                hasEquip = true;
                html += `<div><span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> (${it.type}) <button onclick="ENGINE.equipOn('ally','${id}',${index})">Équiper</button></div>`;
            }
        });
        if (!hasEquip) html += "<div>Aucun équipement adapté dans l'inventaire.</div>";
        html += `<div class='section-block'><button onclick="ENGINE.showRecruitment()">Retour groupe</button></div>`;
        html += "</div>";
        UI.openPage("Groupe & compagnons", html);
    }
    function joinGuild(id) {
        const g = GUILDS.find((x) => x.id === id);
        if (!g) return;

        if (game.guildId === id) {
            UI.log("Tu fais déjà partie de cette guilde.", "system");
            return;
        }

        

        game.guildId = g.id;
        game.guildName = g.name;
        game.reputation[g.repKey] = (game.reputation[g.repKey] || 0) + 10;

        const lvl = getGuildLevel(g.id);
        UI.log("Tu prêtes serment à la " + g.name + ` (Niveau ${lvl}).`, "system");
        UI.showToast("Nouvelle guilde : " + g.name, "level");

        unlockCodexNpc("guild_" + id, g.name);
        renderAll();
        showGuilds();
    }

    /* ---------- Guildes & réputations ---------- */

    function getGuildById(id) {
        return GUILDS.find((g) => g.id === id) || null;
    }

    function getGuildRep(g) {
        if (!g || !game || !game.reputation) return 0;
        return game.reputation[g.repKey] || 0;
    }

    function getGuildTierForRep(g, rep) {
        if (!g) return null;
        let best = null;
        for (const t of g.tiers) {
            if (rep >= t.repRequired && (!best || t.repRequired > best.repRequired)) {
                best = t;
            }
        }
        return best;
    }
    function showGuilds() {
        let html = "<div>Guildes de la Surface :</div><div class='section-block small'>";

        const currentGuild = game.guildId ? getGuildById(game.guildId) : null;
        const currentLevel = currentGuild ? getGuildLevel(currentGuild.id) : 0;

        html += `<div>Guilde actuelle : <strong>${
            game.guildName || "Aucune"
        }</strong> (Niveau ${currentLevel})</div>`;

        html += "<div class='section-block'>Choisir ou consulter une guilde :</div>";

        GUILDS.forEach((g) => {
            const rep = getGuildRep(g);
            const tier = getGuildTierForRep(g, rep);
            const lvl = tier ? tier.level : 0;

           
            let nextTier = null;
            for (const t of g.tiers) {
                if (t.repRequired > (tier ? tier.repRequired : -1)) {
                    nextTier = t;
                    break;
                }
            }

            html += `<div style="margin-bottom:8px;">`;
            html += `<strong>${g.name}</strong> (Niv. ${lvl})<br>`;
            html += `<span class="small">${g.desc}</span><br>`;
            html += `<span class="small">Réputation : ${rep}</span><br>`;

            if (tier) {
                const b = tier.bonus;
                html += `<span class="small">Bonus actuel : +${b.str} FOR, +${b.dex} DEX, +${b.luck} CHANCE</span><br>`;
                html += `<span class="small">Rang : ${tier.label}</span><br>`;
            } else {
                html += `<span class="small">Bonus actuel : aucun</span><br>`;
            }

            if (nextTier) {
                html += `<span class="small">Prochain palier à ${nextTier.repRequired} réputation : ${nextTier.label}</span><br>`;
            } else {
                html += `<span class="small">Tu as atteint le rang maximum dans cette guilde.</span><br>`;
            }

            const isCurrent = game.guildId === g.id;
            if (isCurrent) {
                html += "<em>(Déjà membre)</em>";
            } else {
                html += `<button onclick="ENGINE.joinGuild('${g.id}')">Rejoindre cette guilde</button>`;
            }

            html += "</div>";
        });

        html += "</div>";
        UI.openPage("Guildes", html);
    }

    function getGuildLevel(id) {
        const g = getGuildById(id);
        if (!g) return 0;
        const rep = getGuildRep(g);
        const tier = getGuildTierForRep(g, rep);
        return tier ? tier.level : 0;
    }


    function getGuildBonus() {
        if (!game || !game.guildId) return { str: 0, dex: 0, luck: 0 };
        const g = getGuildById(game.guildId);
        if (!g) return { str: 0, dex: 0, luck: 0 };
        const rep = getGuildRep(g);
        const tier = getGuildTierForRep(g, rep);
        if (!tier) return { str: 0, dex: 0, luck: 0 };
        return tier.bonus;
    }


    /* ---------- Events spéciaux ---------- */

    function triggerSpecialEvent() {
        const type = DATA.randomEventType();
        game.current.mode = "event";
        game.current.event = { type };
        UI.setTurnIndicator("event");

        if (type === "npc_buff") {
            unlockCodexNpc("inventor", "Inventeur masqué");
            const html = `
        <div><strong>Inventeur masqué</strong></div>
        <div class="small">Un inventeur masqué t'arrête, les mains couvertes d'huile. Il propose de modifier ton corps.</div>
        <div class="section-block">
          <button onclick="ENGINE.eventBuff('str')">+Force mais cicatrices</button>
          <button onclick="ENGINE.eventBuff('dex')">+Dextérité mais tremblements</button>
          <button onclick="ENGINE.closeEvent()">Refuser</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "mini_trap") {
            const html = `
        <div><strong>Piège de câbles</strong></div>
        <div class="small">Tes bottes accrochent un câble tendu...</div>
        <div class="section-block">
          <button onclick="ENGINE.resolveTrap()">Tenter de bondir</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "food_merchant") {
            unlockCodexNpc("food_merchant", "Marchand ambulant");
            const html = `
        <div><strong>Marchand ambulant</strong></div>
        <div class="small">Un petit chariot branlant surgit, rempli de marmites fumantes.</div>
        <div class="section-block">
          <button onclick="ENGINE.foodMerchant()">Regarder les plats</button>
          <button onclick="ENGINE.closeEvent()">L'ignorer</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "lore_fragment") {
            const html = `
        <div><strong>Mur gravé</strong></div>
        <div class="small">Une frise de cuivre représente d'anciens explorateurs reliés à une machine géante.</div>
        <div class="section-block">
          <button onclick="ENGINE.closeEvent()">Continuer</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "familiar") {
            const html = `
        <div><strong>Renard-lampe</strong></div>
        <div class="small">Une petite créature mécanique en forme de renard te suit, l'œil brillant.</div>
        <div class="section-block">
          <button onclick="ENGINE.adoptFamiliar()">L'adopter</button>
          <button onclick="ENGINE.closeEvent()">Laisser</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "cursed_altar") {
            const html = `
        <div><strong>Autel de câbles noirs</strong></div>
        <div class="small">Un autel couvert de câbles et d'yeux mécaniques te propose un marché silencieux.</div>
        <div class="section-block">
          <button onclick="ENGINE.acceptAltarPower()">Accepter le pouvoir (et la malédiction)</button>
          <button onclick="ENGINE.closeEvent()">S'éloigner</button>
        </div>`;
            UI.renderActions(html);

            /* --------- NOUVEAUX EVENTS --------- */

        } else if (type === "tea_master") {
            unlockCodexNpc("tea_master", "Maître du thé");
            const html = `
        <div><strong>Maître du thé</strong></div>
        <div class="small">Un ancien prépare du thé sur un petit réchaud à vapeur.</div>
        <div class="section-block">
          <button onclick="ENGINE.drinkTea('focus')">Thé de concentration (+Chance)</button>
          <button onclick="ENGINE.drinkTea('calm')">Thé apaisant (Fatigue -)</button>
          <button onclick="ENGINE.closeEvent()">Refuser poliment</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "luxury_caterer") {
            unlockCodexNpc("lux_caterer", "Traiteur de luxe");
            const html = `
        <div><strong>Traiteur de luxe</strong></div>
        <div class="small">Une table nappée, incongrue dans l'Abîme, propose un repas complet.</div>
        <div class="section-block">
          <button onclick="ENGINE.luxuryMeal()">Prendre le repas complet (60 or)</button>
          <button onclick="ENGINE.closeEvent()">Passer ton chemin</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "upgrade_machine") {
            const html = `
        <div><strong>Machine d’optimisation</strong></div>
        <div class="small">Une machine cliquetante tend des bras articulés vers ton équipement.</div>
        <div class="section-block">
          <button onclick="ENGINE.machineUpgrade('weapon')">Optimiser une arme (FOR +)</button>
          <button onclick="ENGINE.machineUpgrade('armor')">Renforcer l'armure (PV max +)</button>
          <button onclick="ENGINE.closeEvent()">Ne rien lui confier</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "reroll_machine") {
            const html = `
        <div><strong>Machine de résonance</strong></div>
        <div class="small">Des cadrans tournent, offrant de réarranger ton potentiel.</div>
        <div class="section-block">
          <button onclick="ENGINE.machineReroll('stat')">Relancer une statistique</button>
          <button onclick="ENGINE.machineReroll('trait')">Relancer un trait passif</button>
          <button onclick="ENGINE.closeEvent()">Refuser la résonance</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "rest_station") {
            const html = `
        <div><strong>Poste de repos</strong></div>
        <div class="small">Un banc, quelques couvertures et un vieux samovar encore tiède.</div>
        <div class="section-block">
          <button onclick="ENGINE.restStation('short')">Courte pause (soin léger)</button>
          <button onclick="ENGINE.restStation('long')">Long repos (soin complet, faim +)</button>
          <button onclick="ENGINE.closeEvent()">Continuer sans s'arrêter</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "dice_gambler") {
            const html = `
        <div><strong>Parieur aux dés</strong></div>
        <div class="small">Une silhouette encapuchonnée agite un gobelet de dés en métal.</div>
        <div class="section-block">
          <button onclick="ENGINE.gambleDice('small')">Parier une petite somme</button>
          <button onclick="ENGINE.gambleDice('big')">Parier gros</button>
          <button onclick="ENGINE.closeEvent()">Refuser de jouer</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "ghost_market") {
            unlockCodexNpc("ghost_market", "Marché fantomatique");
            ENGINE.openGhostMarket();

        } else if (type === "lost_explorer") {
            const html = `
        <div><strong>Explorateur perdu</strong></div>
        <div class="small">Un explorateur épuisé te supplie de l'aider à remonter.</div>
        <div class="section-block">
          <button onclick="ENGINE.helpLostExplorer('escort')">Promettre de l'escorter plus tard</button>
          <button onclick="ENGINE.helpLostExplorer('gift')">Accepter un paiement immédiat</button>
          <button onclick="ENGINE.closeEvent()">Laisser à son sort</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "mutate_floor") {
            const html = `
        <div><strong>Salle instable</strong></div>
        <div class="small">Les murs vibrent : l'étage semble prêt à changer de nature.</div>
        <div class="section-block">
          <button onclick="ENGINE.mutateFloor('easy_loot')">Rendre la zone plus sûre (plus de loot, moins d’ennemis)</button>
          <button onclick="ENGINE.mutateFloor('harder')">Rendre la zone plus dangereuse (plus d’ennemis, plus d’XP)</button>
          <button onclick="ENGINE.closeEvent()">Ne rien toucher</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "gear_shrine") {
            const html = `
        <div><strong>Autel d'engrenages</strong></div>
        <div class="small">Un autel couvert d'engrenages poli attend une offrande.</div>
        <div class="section-block">
          <button onclick="ENGINE.gearShrine('str')">Prier pour la Force</button>
          <button onclick="ENGINE.gearShrine('dex')">Prier pour la Dextérité</button>
          <button onclick="ENGINE.gearShrine('hp')">Prier pour la Vitalité</button>
          <button onclick="ENGINE.closeEvent()">Ignorer l'autel</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "memory_echo") {
            const html = `
        <div><strong>Écho de mémoire</strong></div>
        <div class="small">Une vibration te renvoie un souvenir qui n'est pas tout à fait le tien.</div>
        <div class="section-block">
          <button onclick="ENGINE.resolveMemoryEcho()">Laisser l'écho te traverser</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "injury_infirmary") {
            const html = `
        <div><strong>Infirmerie improvisée</strong></div>
        <div class="small">Une ancienne station de soin clignote faiblement.</div>
        <div class="section-block">
          <button onclick="ENGINE.healAtInfirmary()">Soigner les blessures (coût en or)</button>
          <button onclick="ENGINE.closeEvent()">Ne pas s'y fier</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "camp_peddler") {
            const html = `
        <div><strong>Colporteur du camp</strong></div>
        <div class="small">Un colporteur propose d'améliorer ton campement depuis ici.</div>
        <div class="section-block">
          <button onclick="ENGINE.campPeddler()">Discuter des améliorations</button>
          <button onclick="ENGINE.closeEvent()">L'envoyer promener</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "familiar_boost") {
            const html = `
        <div><strong>Nid mécanique</strong></div>
        <div class="small">Un amas de câbles et de lumière attire les familiers.</div>
        <div class="section-block">
          <button onclick="ENGINE.empowerFamiliar()">Renforcer ton familier actuel</button>
          <button onclick="ENGINE.closeEvent()">Ne rien tenter</button>
        </div>`;
            UI.renderActions(html);

        } else if (type === "weird_statue") {
            const html = `
        <div><strong>Statue fissurée</strong></div>
        <div class="small">Une statue de laiton tend une main ouverte, paume vers le haut.</div>
        <div class="section-block">
          <button onclick="ENGINE.eventBuff('str')">Toucher le bras (Force)</button>
          <button onclick="ENGINE.eventBuff('dex')">Toucher la main (Dextérité)</button>
          <button onclick="ENGINE.closeEvent()">Ne pas la toucher</button>
        </div>`;
            UI.renderActions(html);

        } else {
            // fallback : mini lore
            const html = `
        <div><strong>Résonance lointaine</strong></div>
        <div class="small">Tu entends, très bas, le grondement d'une machine gigantesque.</div>
        <div class="section-block">
          <button onclick="ENGINE.closeEvent()">Continuer</button>
        </div>`;
            UI.renderActions(html);
        }
    }

    function closeEvent() {
        game.current.mode = "idle";
        game.current.event = null;
        UI.setTurnIndicator("idle");
        UI.renderActions("");
        renderAll();
    }

    function eventBuff(stat) {
        if (stat === "str") {
            game.player.stats.str += 1;
            game.player.stats.hp = Math.max(1, game.player.stats.hp - 3);
            UI.log(
                "L'inventeur serre une sangle autour de ton bras : tu sens ta force augmenter dans une douleur sourde.",
                "loot"
            );
            UI.flashDamage();
        } else {
            game.player.stats.dex += 1;
            game.player.stats.hp = Math.max(1, game.player.stats.hp - 2);
            UI.log(
                "Une injection brûlante rend tes réflexes plus vifs, au prix de tremblements.",
                "loot"
            );
            UI.flashDamage();
        }
        closeEvent();
    }

    function resolveTrap() {
        const baseStats = getPlayerBaseStatsWithEquipment();
        const pStats = applyFatiguePenalty(baseStats);
        const r = rollD20(pStats.dex);
        UI.showDiceMulti(
            [{ label: "Dextérité", roll: r.roll, color: "#4ad57e" }],
            "Piège"
        );
        if (r.total < 12) {
            const dmg = randInt(4, 9);
            game.player.stats.hp = Math.max(0, game.player.stats.hp - dmg);
            UI.flashDamage();
            UI.log(
                `Les câbles se resserrent sur ta jambe : ${dmg} dégâts.`,
                "danger"
            );
            if (game.player.stats.hp <= 0) {
                endCombat(false, true);
                return;
            }
        } else {
            UI.log(
                "Tu bondis au-dessus des câbles avant qu'ils ne se tendent.",
                "combat"
            );
        }
        closeEvent();
    }

    function foodMerchant() {
        let html =
            "<div>Marchand ambulant :</div><div class='section-block small'>";
        html += `<div>Or : ${game.player.gold}</div>`;
        [
            "dried_meat",
            "glow_mushroom_soup",
            "hearty_stew",
            "traveler_ration",
            "spiced_meat",
            "abyss_ration",
        ].forEach((id) => {
            const it = DATA.ITEMS[id];
            if (!it) return;
            html += `<div><span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> — ${it.price} or <button onclick="ENGINE.buyFoodFromMerchant('${id}')">Acheter</button></div>`;
        });
        html += `<button onclick="ENGINE.closeEvent()">Terminer</button></div>`;
        UI.openPage("Titre", html);
    }

    function buyFoodFromMerchant(id) {
        const it = ABYSS_DATA.ITEMS[id];

        if (!it) return;
        if (game.player.gold < it.price) {
            UI.log("Pas assez d'or.", "system");
            return;
        }
        game.player.gold -= it.price;
        game.player.inventory.push(id);
        UI.log("Tu achètes " + it.name + " au marchand ambulant.", "loot");
        renderAll();
        foodMerchant();
    }

    function adoptFamiliar() {
        if (game.familiars.length) {
            UI.log("Tu as déjà un familier mécanique.", "system");
            closeEvent();
            return;
        }
        game.familiars.push({
            id: "fox_lamp",
            name: "Renard-lampe",
            description: "+1 Chance",
        });
        game.player.stats.luck += 1;
        UI.log(
            "Le renard-lampe se colle à ta cheville, son œil projetant un halo chaud.",
            "loot"
        );
        checkAchievements();
        closeEvent();
    }

    function acceptAltarPower() {
        addCurseRandom("Les câbles s'enroulent autour de ta gorge, murmurant un pacte.");
        game.player.stats.str += 1;
        game.player.stats.maxHp += 2;
        UI.log(
            "Une énergie noire t'envahit. Tu te sens plus fort, mais quelque chose s'est brisé.",
            "loot"
        );

        closeEvent();
    }
    function drinkTea(kind) {
        const p = game.player;
        const s = p.stats;

        if (kind === "focus") {
            s.luck += 1;
            UI.log("Le thé aiguise ta perception. Tu te sens un peu plus chanceux.", "buff");
            closeEvent();
        } else if (kind === "calm") {
            p.fatigue = Math.max(0, p.fatigue - 15);
            UI.log("Une chaleur douce t'envahit : ta fatigue diminue nettement.", "buff");
            closeEvent();
        }
        closeEvent();
    }
    function luxuryMeal() {
        const p = game.player;
        const s = p.stats;
        const cost = 60;

        if (p.gold < cost) {
            UI.log("Tu n'as pas assez d'or pour un repas aussi luxueux.", "system");
            UI.showToast("Pas assez d'or", "danger");
            return;
        }

        p.gold -= cost;
        s.hp = s.maxHp;
        p.fatigue = 0;
        p.hunger = 100;
        s.str += 1;
        s.dex += 1;

        UI.log("Le repas est exquis. Tu repars repu et renforcé.", "loot");
        renderAll();
        closeEvent();
    }
    function machineUpgrade(slotType) {
        const s = game.player.stats;

        if (slotType === "weapon") {
            s.str += 2;
            game.enchant.weapon = (game.enchant.weapon || 0) + 1;
            UI.log("La machine polit ton arme. Ta force augmente.", "buff");
            closeEvent();
        } else if (slotType === "armor") {
            s.maxHp += 4;
            s.hp += 4;
            game.enchant.armor = (game.enchant.armor || 0) + 1;
            UI.log("Des plaques supplémentaires se soudent à ton armure. Tu te sens plus solide.", "buff");
            closeEvent();
        }

        renderAll();
        closeEvent();
    }
    function machineReroll(kind) {
        const s = game.player.stats;

        if (kind === "stat") {
            const stats = ["str", "dex", "luck"];
            const from = stats[Math.floor(Math.random() * stats.length)];
            let to = stats[Math.floor(Math.random() * stats.length)];
            if (to === from) {
                to = stats[(stats.indexOf(from) + 1) % stats.length];
            }

            s[from] = Math.max(1, s[from] - 1);
            s[to] += 2;
            closeEvent();

            UI.log(`La machine reroute ton potentiel : ${from.toUpperCase()} baisse, ${to.toUpperCase()} grimpe.`, "system");
        } else if (kind === "trait") {
            if (!game.player.skills) game.player.skills = [];
            const traits = ["glass_cannon", "steady", "lucky", "swift", "stubborn"];
            const t = traits[Math.floor(Math.random() * traits.length)];
            game.player.skills.push("trait_" + t);
            UI.log(`Un nouveau trait t'habite désormais : ${t}.`, "system");
            closeEvent();
        }

        renderAll();
        closeEvent();
    }
    function restStation(mode) {
        const p = game.player;
        const s = p.stats;

        if (mode === "short") {
            const heal = Math.round(s.maxHp * 0.25);
            s.hp = Math.min(s.maxHp, s.hp + heal);
            p.fatigue = Math.max(0, p.fatigue - 10);
            UI.log("Tu t'assoies quelques instants. Tes muscles se détendent.", "info");
            closeEvent();
        } else if (mode === "long") {
            s.hp = s.maxHp;
            p.fatigue = 0;
            p.hunger = Math.max(0, p.hunger - 15);
            UI.log("Tu dors profondément. Tu te réveilles en pleine forme.", "info");
            closeEvent();
        }

        renderAll();
        closeEvent();
    }
    function gambleDice(mode) {
        const p = game.player;
        let stake = 10;
        if (mode === "big") stake = 40;

        if (p.gold < stake) {
            UI.log("Le parieur ricane : tu n'as pas assez d'or.", "system");
            UI.showToast("Pas assez d'or", "danger");
            closeEvent();
            return;
        }

        p.gold -= stake;
        const roll = Math.random();

        if (roll < 0.4) {
            UI.log("Les dés roulent mal. Tu perds ta mise.", "danger");
            closeEvent();
        } else if (roll < 0.8) {
            p.gold += stake * 2;
            UI.log("Coup correct : tu doubles ta mise.", "loot");
            closeEvent();
        } else {
            p.gold += stake * 4;
            UI.log("Coup de chance incroyable : tu quadruples ta mise !", "loot");
            UI.showToast("Jackpot !", "success");
            closeEvent();
        }

        renderAll();
        closeEvent();
    }
    function openGhostMarket() {
        let html = "<div>Marché fantomatique :</div><div class='section-block small'>";
        html += `<div>Or : ${game.player.gold}</div>`;

        const pool = [
            "abyss_ration",
            "large_potion",
            "medium_potion",
            "stamina_elixir",
            "abyssal_ring",      
            "aether_amulet",    
            "clockwork_amulet"  
        ];

        pool.forEach((id) => {
            const it = DATA.ITEMS[id];
            if (!it) return;
            html += `<div><span class="item-name" onmouseover="UI.showItemTooltip('${id}',this)" onmouseout="UI.hideTooltip()">${it.name}</span> — ${it.price} or <button onclick="ENGINE.buyGhostItem('${id}')">Acheter</button></div>`;
        });

        html += `<button onclick="ENGINE.closeEvent()">Quitter le marché</button>`;
        html += "</div>";
        UI.openPage("Marché fantomatique", html);
        closeEvent();
    }

    function buyGhostItem(id) {
        const it = DATA.ITEMS[id];
        if (!it) return;
        if (game.player.gold < it.price) {
            UI.showToast("Pas assez d'or", "danger");
            return;
        }
        game.player.gold -= it.price;
        game.player.inventory.push(id);
        UI.log("Tu achètes " + it.name + " au marché fantomatique.", "loot");
        renderAll();
        openGhostMarket();
    }
    function helpLostExplorer(mode) {
        game.flags = game.flags || {};
        if (mode === "escort") {
            game.flags.helpedExplorerEscort = true;
            UI.log("Tu promets à l'explorateur de le guider vers un village. Il te remerciera plus tard.", "info");
            closeEvent();
        } else if (mode === "gift") {
            game.player.gold += 30;
            UI.log("L'explorateur te donne une bourse d'or en échange de tes conseils.", "loot");
            UI.showToast("+30 or", "success");
            closeEvent();
        }
        renderAll();
        closeEvent();
    }
    function mutateFloor(mode) {
        if (!game.current.floorMods) {
            game.current.floorMods = {
                lootBonus: 0,
                encounterRate: 0,
                expBonus: 0,
            };
        }
        const mods = game.current.floorMods;

        if (mode === "easy_loot") {
            mods.lootBonus += 1;
            mods.encounterRate = Math.max(0, mods.encounterRate - 1);
            UI.log("L'étage semble moins hostile, mais plus généreux en trouvailles.", "system");
            closeEvent();
        } else if (mode === "harder") {
            mods.lootBonus += 1;
            mods.encounterRate += 2;
            mods.expBonus += 1;
            UI.log("L'étage se tend. Tu sentiras la différence au prochain combat.", "system");
            closeEvent();
        }

        closeEvent();
    }
    function gearShrine(stat) {
        const s = game.player.stats;

        if (stat === "str") {
            s.str += 1;
            UI.log("Les engrenages ronronnent : tu sens tes muscles se tendre.", "buff");
            closeEvent();
        } else if (stat === "dex") {
            s.dex += 1;
            UI.log("Les dents des rouages se mettent en phase avec tes gestes.", "buff");
            closeEvent();
        } else if (stat === "hp") {
            s.maxHp += 3;
            s.hp += 3;
            UI.log("Un cliquetis profond renforce ta carcasse.", "buff");
            closeEvent();
        }

        renderAll();
        closeEvent();
    }
    function resolveMemoryEcho() {
        const s = game.player.stats;
        const roll = Math.random();

        if (roll < 0.33) {
            s.luck += 1;
            UI.log("Un souvenir emprunté te donne un léger avantage sur le hasard.", "buff");
            closeEvent();
        } else if (roll < 0.66) {
            s.hp = Math.max(1, s.hp - 5);
            UI.flashDamage();
            UI.log("L'écho te lacère de l'intérieur. Tu te sens vidé.", "danger");
            closeEvent();
        } else {
            addCurseRandom("L'écho laisse derrière lui une trace plus lourde que prévue.");
            closeEvent();
        }

        renderAll();
        closeEvent();
    }
    function healAtInfirmary() {
        const cost = 25;
        if (game.player.gold < cost) {
            UI.log("Les modules de soin refusent de s'activer sans paiement.", "system");
            closeEvent();
            return;
        }
        if (!game.injuries || !game.injuries.length) {
            UI.log("Tu n'as pas de blessures persistantes à soigner.", "system");
            closeEvent();
            return;
        }

        game.player.gold -= cost;
        game.injuries = [];
        UI.log("Les vieux automates nettoient tes fractures et tes contusions. Tes blessures s'effacent.", "buff");
        renderAll();
        closeEvent();
    }
    function campPeddler() {
        const cost = 40;
        if (!game.camp) game.camp = { level: 0, infirmary: false, workshop: false, kitchen: false };

        let html = "<div>Colporteur du camp :</div><div class='section-block small'>";
        html += `<div>Or : ${game.player.gold}</div>`;
        html += `<div>Niveau actuel du camp : ${game.camp.level || 0}</div>`;
        html += `<div class="section-block small">Pour ${cost} or, il propose d'augmenter de 1 le niveau de camp.</div>`;
        html += `<button onclick="ENGINE._campPeddlerBuy(${cost})">Accepter (+1 niveau de camp)</button> `;
        html += `<button onclick="ENGINE.closeEvent()">Refuser</button>`;
        html += "</div>";
        UI.openPage("Colporteur du camp", html);
    }

    function _campPeddlerBuy(cost) {
        if (game.player.gold < cost) {
            UI.log("Tu n'as pas assez d'or pour cet arrangement.", "system");
            UI.showToast("Pas assez d'or", "danger");
            closeEvent();
            return;
        }
        game.player.gold -= cost;
        game.camp.level = (game.camp.level || 0) + 1;
        UI.log("Ton campement gagne en confort grâce au colporteur.", "buff");
        renderAll();
        closeEvent();
    }
    function empowerFamiliar() {
        if (!game.familiars || !game.familiars.length) {
            UI.log("Aucun familier ne semble répondre à l'appel du nid mécanique.", "system");
            closeEvent();
            return;
        }

        // On considère que ton premier familier est l'actif
        const s = game.player.stats;
        s.luck += 1;
        UI.log("Ton familier vibre au contact du nid. Ta chance augmente légèrement.", "buff");
        renderAll();
        closeEvent();
    }

    /* ---------- Sauvegarde ---------- */

    function saveGame() {
        if (!game || game.gameOver) {
            UI.log("Impossible de sauvegarder une partie terminée.", "system");
            return;
        }
        try {
            localStorage.setItem("abyss_codex_save", JSON.stringify(game));
            UI.setSaveStatus("Sauvegardé");
            UI.log("Partie sauvegardée.", "system");
        } catch (e) {
            UI.log("Erreur de sauvegarde : " + e, "danger");
        }
    }

    function loadGame() {
        const data = localStorage.getItem("abyss_codex_save");
        if (!data) {
            UI.log("Aucune sauvegarde trouvée.", "system");
            return;
        }
        try {
            game = JSON.parse(data);
            game.gameOver = game.gameOver || false;
            game.victory = game.victory || false;
            game.curses = game.curses || [];
            game.codex = game.codex || {
                monsters: {},
                locations: {},
                npcs: {},
            };
            game.achievements = game.achievements || [];
            UI.hideDeathScreen();
            if (game.victory) UI.showVictoryScreen();
            UI.log("Sauvegarde chargée.", "system");
            renderAll();
        } catch (e) {
            UI.log("Erreur de chargement : " + e, "danger");
        }
    }

    /* ---------- Exposition ENGINE ---------- */

    const ENGINE = {
        getGame: () => game,
        getCarryInfo,
        canMoveUp,

        // déplacement / exploration
        explore,
        moveDown,
        moveUp,
        restAtInn,

        // combat
        playerAttack,
        playerUseItem,
        playerFlee,
        useItem,
        renderCombatActions,

        // stats
        allocateStats,
        addStat,

        // inventaire / équipement
        showInventory,
        showEquipment,
        equipOn,
        useItemIndex,  

        // craft / cuisine / enchant
        showCraft,
        craft,
        showCooking,
        cook,
        showEnchant,

        // marché
        showMarket,
        buyItem,
        sellItem,

        // quêtes
        showQuests,
        acceptQuest,

        // recrutement
        showRecruitment,
        recruitScout,
        showCompanionDetails,

        // guildes
        showGuilds,
        joinGuild,

        // camp
        showCamp,
        upgradeCamp,
        buildCampFacility,

        // codex / succès
        showCodex,
        showAchievements,

        // events spéciaux
        closeEvent,
        eventBuff,
        resolveTrap,
        foodMerchant,
        buyFoodFromMerchant,
        adoptFamiliar,
        acceptAltarPower,
        // events spéciaux

        drinkTea,
        luxuryMeal,
        machineUpgrade,
        machineReroll,
        restStation,
        gambleDice,
        openGhostMarket,
        buyGhostItem,
        helpLostExplorer,
        mutateFloor,
        gearShrine,
        resolveMemoryEcho,
        healAtInfirmary,
        campPeddler,
        _campPeddlerBuy,
        empowerFamiliar,

        // sauvegarde
        saveGame,
        loadGame,

        // gestion de partie
        newGame,
    };

    window.ENGINE = ENGINE;

    /* ---------- Lancement ---------- */

    window.addEventListener("load", () => {
        UI.init(ENGINE);
        const data = localStorage.getItem("abyss_codex_save");
        if (data && confirm("Charger la dernière sauvegarde ?")) {
            try {
                game = JSON.parse(data);
                game.gameOver = game.gameOver || false;
                game.victory = game.victory || false;
                game.curses = game.curses || [];
                game.codex = game.codex || {
                    monsters: {},
                    locations: {},
                    npcs: {},
                };
                game.achievements = game.achievements || [];
                UI.log("Sauvegarde chargée.", "system");
                if (game.victory) UI.showVictoryScreen();
                renderAll();
                return;
            } catch (e) {
                console.error(e);
            }
        }
        newGame(false);
    });
})();
