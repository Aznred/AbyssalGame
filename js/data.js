// Données : items, ressources, monstres, crafts, cuisine, quêtes, shops, events

window.ABYSS_DATA = (() => {

    const ITEMS = {
        // Armes basiques
        "rusty_sword":{id:"rusty_sword",name:"Épée rouillée",type:"weapon",weaponType:"sword",stats:{str:1},price:15},
        "hunter_bow":{id:"hunter_bow",name:"Arc du traqueur",type:"weapon",weaponType:"bow",stats:{dex:2},price:30},
        "bronze_axe":{id:"bronze_axe",name:"Hache de bronze",type:"weapon",weaponType:"axe",stats:{str:3},price:35},
        "spear":{id:"spear",name:"Lance équilibrée",type:"weapon",weaponType:"spear",stats:{str:2,dex:1},price:40},
        "oak_bow":{id:"oak_bow",name:"Arc en chêne",type:"weapon",weaponType:"bow",stats:{dex:3},price:50},
        "rusty_gear_blade":{id:"rusty_gear_blade",name:"Lame à engrenages rouillés",type:"weapon",weaponType:"sword",stats:{str:1},price:18},
        "copper_pipe_mace":{id:"copper_pipe_mace",name:"Massue en tuyau de cuivre",type:"weapon",weaponType:"hammer",stats:{str:2},price:22},
        "steam_wrench":{id:"steam_wrench",name:"Clé à vapeur",type:"weapon",weaponType:"hammer",stats:{str:2},price:28},
        "bronze_bayonet":{id:"bronze_bayonet",name:"Baïonnette de bronze",type:"weapon",weaponType:"dagger",stats:{dex:1},price:19},
        "scrap_axe":{id:"scrap_axe",name:"Hache en pièces recyclées",type:"weapon",weaponType:"axe",stats:{str:2},price:30},
        "boiler_spear":{id:"boiler_spear",name:"Lance-chaudière",type:"weapon",weaponType:"spear",stats:{str:1,dex:1},price:26},
        "simple_pressure_bow":{id:"simple_pressure_bow",name:"Arc à pression simple",type:"weapon",weaponType:"bow",stats:{dex:2},price:33},
        "rusted_revolver":{id:"rusted_revolver",name:"Revolver rouillé",type:"weapon",weaponType:"gun",stats:{dex:1},price:25},
        "gas_tube_dagger":{id:"gas_tube_dagger",name:"Dague en tube de gaz",type:"weapon",weaponType:"dagger",stats:{dex:2},price:20},
        "iron_spring_blade":{id:"iron_spring_blade",name:"Lame à ressort de fer",type:"weapon",weaponType:"sword",stats:{str:2},price:32},
        "weak_tesla_rod":{id:"weak_tesla_rod",name:"Bâton Tesla faible",type:"weapon",weaponType:"staff",stats:{int:1},price:27},
        "wooden_bomb_launcher":{id:"wooden_bomb_launcher",name:"Lance-bombes en bois",type:"weapon",weaponType:"launcher",stats:{dex:1},price:35},
        "clockwork_slingshot":{id:"clockwork_slingshot",name:"Fronde mécanique",type:"weapon",weaponType:"bow",stats:{dex:1},price:18},
        "coal_knife":{id:"coal_knife",name:"Couteau à charbon",type:"weapon",weaponType:"dagger",stats:{dex:1},price:15},
        "pipe_rifle":{id:"pipe_rifle",name:"Fusil en tuyaux",type:"weapon",weaponType:"gun",stats:{dex:1,str:1},price:36},
        "rusted_halberd":{id:"rusted_halberd",name:"Hallebarde rouillée",type:"weapon",weaponType:"spear",stats:{str:2},price:28},
        "steam_baton":{id:"steam_baton",name:"Bâton à vapeur",type:"weapon",weaponType:"staff",stats:{str:1,int:1},price:30},
        "cog_hammer":{id:"cog_hammer",name:"Marteau à engrenages",type:"weapon",weaponType:"hammer",stats:{str:2},price:34},
        "boiler_blade":{id:"boiler_blade",name:"Lame de chaudière",type:"weapon",weaponType:"sword",stats:{str:2},price:31},
        "fuse_spear":{id:"fuse_spear",name:"Lance à fusible",type:"weapon",weaponType:"spear",stats:{str:1,dex:2},price:38},


        // Armes avancées
        "steel_sword":{id:"steel_sword",name:"Épée d'acier",type:"weapon",weaponType:"sword",stats:{str:4},price:80},
        "warhammer":{id:"warhammer",name:"Marteau de guerre",type:"weapon",weaponType:"hammer",stats:{str:5},price:120},
        "shadow_dagger":{id:"shadow_dagger",name:"Dague des ombres",type:"weapon",weaponType:"dagger",stats:{dex:4,luck:2},price:95},
        "steel_gear_sword":{id:"steel_gear_sword",name:"Épée à engrenages en acier",type:"weapon",weaponType:"sword",stats:{str:4},price:85},
        "steam_powered_axe":{id:"steam_powered_axe",name:"Hache assistée à vapeur",type:"weapon",weaponType:"axe",stats:{str:5},price:110},
        "tesla_dagger":{id:"tesla_dagger",name:"Dague Tesla",type:"weapon",weaponType:"dagger",stats:{dex:3,luck:2},price:95},
        "railgun_pistol":{id:"railgun_pistol",name:"Pistolet railgun",type:"weapon",weaponType:"gun",stats:{dex:3},price:120},
        "pressure_cannon":{id:"pressure_cannon",name:"Canon à pression",type:"weapon",weaponType:"launcher",stats:{str:3,dex:1},price:150},
        "ironclad_spear":{id:"ironclad_spear",name:"Lance cuirassée",type:"weapon",weaponType:"spear",stats:{str:4},price:90},
        "clockwork_bow":{id:"clockwork_bow",name:"Arc mécanique complexe",type:"weapon",weaponType:"bow",stats:{dex:4},price:100},
        "steamshot_rifle":{id:"steamshot_rifle",name:"Fusil à vapeur",type:"weapon",weaponType:"gun",stats:{dex:3,str:1},price:140},
        "vapor_hammer":{id:"vapor_hammer",name:"Marteau du vaporiste",type:"weapon",weaponType:"hammer",stats:{str:5},price:130},
        "turbine_blade":{id:"turbine_blade",name:"Lame-turbine",type:"weapon",weaponType:"sword",stats:{str:4,dex:1},price:125},
        "bronze_repeater":{id:"bronze_repeater",name:"Répétiteur de bronze",type:"weapon",weaponType:"gun",stats:{dex:4},price:135},
        "gear_halberd":{id:"gear_halberd",name:"Hallebarde à engrenages",type:"weapon",weaponType:"spear",stats:{str:3,dex:2},price:120},
        "steam_lance":{id:"steam_lance",name:"Lance à vapeur",type:"weapon",weaponType:"spear",stats:{str:4},price:115},
        "boiler_breaker":{id:"boiler_breaker",name:"Brise-chaudière",type:"weapon",weaponType:"axe",stats:{str:5},price:135},
        "iron_tesla_staff":{id:"iron_tesla_staff",name:"Bâton Tesla renforcé",type:"weapon",weaponType:"staff",stats:{int:4},price:105},
        "condensed_bow":{id:"condensed_bow",name:"Arc à compression",type:"weapon",weaponType:"bow",stats:{dex:4,luck:1},price:115},
        "steam_revolver":{id:"steam_revolver",name:"Revolver vapeur",type:"weapon",weaponType:"gun",stats:{dex:3},price:110},
        "gear_saw_blade":{id:"gear_saw_blade",name:"Lame-scie mécanique",type:"weapon",weaponType:"sword",stats:{str:4,luck:1},price:125},
        "pressure_mallet":{id:"pressure_mallet",name:"Maillet à pression",type:"weapon",weaponType:"hammer",stats:{str:5},price:145},
        "titanium_bayonet":{id:"titanium_bayonet",name:"Baïonnette en titane",type:"weapon",weaponType:"dagger",stats:{dex:4},price:120},

        // Armes rares (20)
        "tesla_sabre":{id:"tesla_sabre",name:"Sabre Tesla",type:"weapon",weaponType:"sword",stats:{str:5,int:2},price:200},
        "arc_repeater":{id:"arc_repeater",name:"Arc répétition fulgurant",type:"weapon",weaponType:"bow",stats:{dex:6},price:230},
        "voltage_dagger":{id:"voltage_dagger",name:"Dague à haute tension",type:"weapon",weaponType:"dagger",stats:{dex:5,luck:3},price:210},
        "steam_piercer":{id:"steam_piercer",name:"Perce-vapeur",type:"weapon",weaponType:"spear",stats:{str:5,dex:2},price:220},
        "tesla_blunderbuss":{id:"tesla_blunderbuss",name:"Blunderbuss Tesla",type:"weapon",weaponType:"gun",stats:{dex:5},price:260},
        "coil_axe":{id:"coil_axe",name:"Hache à bobine",type:"weapon",weaponType:"axe",stats:{str:6},price:250},
        "boiler_smasher":{id:"boiler_smasher",name:"Fracasse-chaudière",type:"weapon",weaponType:"hammer",stats:{str:7},price:270},
        "chrono_bow":{id:"chrono_bow",name:"Arc chrono-mécanique",type:"weapon",weaponType:"bow",stats:{dex:6,luck:2},price:240},
        "steam_sniper":{id:"steam_sniper",name:"Fusil sniper vapeur",type:"weapon",weaponType:"gun",stats:{dex:6},price:280},
        "turbine_halberd":{id:"turbine_halberd",name:"Hallebarde turbine",type:"weapon",weaponType:"spear",stats:{str:6},price:245},
        "tesla_staff":{id:"tesla_staff",name:"Bâton Tesla supérieur",type:"weapon",weaponType:"staff",stats:{int:6},price:230},
        "arc_thrower":{id:"arc_thrower",name:"Lanceur d'arcs électriques",type:"weapon",weaponType:"launcher",stats:{dex:5},price:260},
        "chrono_sabre":{id:"chrono_sabre",name:"Sabre chronométrique",type:"weapon",weaponType:"sword",stats:{str:5,dex:2},price:240},
        "shock_bayonet":{id:"shock_bayonet",name:"Baïonnette à choc",type:"weapon",weaponType:"dagger",stats:{dex:5},price:215},
        "gear_flail":{id:"gear_flail",name:"Fléau à engrenages",type:"weapon",weaponType:"hammer",stats:{str:6},price:250},
        "steam_hand_cannon":{id:"steam_hand_cannon",name:"Canon de poing vapeur",type:"weapon",weaponType:"gun",stats:{str:3,dex:4},price:275},
        "coil_spear":{id:"coil_spear",name:"Lance à induction",type:"weapon",weaponType:"spear",stats:{str:5,dex:3},price:235},
        "turbine_repeater":{id:"turbine_repeater",name:"Répétiteur turbine",type:"weapon",weaponType:"gun",stats:{dex:6,luck:1},price:265},
        "arc_warhammer":{id:"arc_warhammer",name:"Marteau électrique",type:"weapon",weaponType:"hammer",stats:{str:7},price:280},
        "tesla_bow":{id:"tesla_bow",name:"Arc Tesla",type:"weapon",weaponType:"bow",stats:{dex:6,int:1},price:260},

        // Armes légendaires (20)
        "overcharge_sword":{id:"overcharge_sword",name:"Épée Surchargée",type:"weapon",weaponType:"sword",stats:{str:8,int:3},price:400},
        "atomic_spear":{id:"atomic_spear",name:"Lance Atomique",type:"weapon",weaponType:"spear",stats:{str:8,dex:3},price:420},
        "arcane_gearbow":{id:"arcane_gearbow",name:"Arc à engrenages arcanique",type:"weapon",weaponType:"bow",stats:{dex:8,int:2},price:410},
        "storm_dagger":{id:"storm_dagger",name:"Dague Tempête-Volt",type:"weapon",weaponType:"dagger",stats:{dex:7,luck:5},price:395},
        "chrono_blade":{id:"chrono_blade",name:"Lame du Chronomancien",type:"weapon",weaponType:"sword",stats:{str:7,int:4},price:430},
        "vortex_rifle":{id:"vortex_rifle",name:"Fusil Vortex",type:"weapon",weaponType:"gun",stats:{dex:7,int:2},price:450},
        "tesla_colossus":{id:"tesla_colossus",name:"Marteau Colosse Tesla",type:"weapon",weaponType:"hammer",stats:{str:9},price:480},
        "arc_turbine_scythe":{id:"arc_turbine_scythe",name:"Faux turbine arcanique",type:"weapon",weaponType:"axe",stats:{str:8,int:3},price:440},
        "steam_relic_bow":{id:"steam_relic_bow",name:"Arc relique vapeur",type:"weapon",weaponType:"bow",stats:{dex:8},price:430},
        "gearbound_halberd":{id:"gearbound_halberd",name:"Hallebarde Enchaînée aux Engrenages",type:"weapon",weaponType:"spear",stats:{str:9},price:460},
        "magneton_staff":{id:"magneton_staff",name:"Bâton Magnéton",type:"weapon",weaponType:"staff",stats:{int:9},price:420},
        "supercoil_revolver":{id:"supercoil_revolver",name:"Revolver Super-Inducteur",type:"weapon",weaponType:"gun",stats:{dex:8},price:455},
        "steam_leviathan":{id:"steam_leviathan",name:"Marteau Léviathan Vapeur",type:"weapon",weaponType:"hammer",stats:{str:10},price:500},
        "arc_salvo_launcher":{id:"arc_salvo_launcher",name:"Lanceur de salves électriques",type:"weapon",weaponType:"launcher",stats:{dex:7,int:2},price:470},
        "tesla_cleaver":{id:"tesla_cleaver",name:"Couperet Tesla",type:"weapon",weaponType:"axe",stats:{str:9,luck:2},price:455},
        "chrono_shotgun":{id:"chrono_shotgun",name:"Fusil à pompe chronométrique",type:"weapon",weaponType:"gun",stats:{dex:8},price:460},
        "omega_blade":{id:"omega_blade",name:"Lame Oméga",type:"weapon",weaponType:"sword",stats:{str:10},price:520},
        "mecha_spear":{id:"mecha_spear",name:"Lance Mécatronique",type:"weapon",weaponType:"spear",stats:{str:9,dex:2},price:480},
        "shock_gauntlet":{id:"shock_gauntlet",name:"Gantelet de Choc",type:"weapon",weaponType:"dagger",stats:{dex:7,str:3},price:410},
        "arc_forge_bow":{id:"arc_forge_bow",name:"Arc de la Forge d'Arcs",type:"weapon",weaponType:"bow",stats:{dex:9},price:440},

        // Armes mythiques (20)
        "heart_of_the_engine":{id:"heart_of_the_engine",name:"Cœur de l'Engin-Monde",type:"weapon",weaponType:"sword",stats:{str:12,int:6},price:900},
        "godcoil_spear":{id:"godcoil_spear",name:"Lance de Dieu-Inducteur",type:"weapon",weaponType:"spear",stats:{str:13},price:950},
        "eternal_steambow":{id:"eternal_steambow",name:"Arc Vapeur Éternelle",type:"weapon",weaponType:"bow",stats:{dex:12,int:4},price:920},
        "alpha_reactor_blade":{id:"alpha_reactor_blade",name:"Lame à Réacteur Alpha",type:"weapon",weaponType:"sword",stats:{str:14},price:980},
        "divine_tesla_staff":{id:"divine_tesla_staff",name:"Bâton Tesla Divin",type:"weapon",weaponType:"staff",stats:{int:14},price:950},
        "chrono_destiny":{id:"chrono_destiny",name:"Destin Chronométrique",type:"weapon",weaponType:"dagger",stats:{dex:11,luck:6},price:870},
        "infinity_gear_hammer":{id:"infinity_gear_hammer",name:"Marteau à Engrenages Infini",type:"weapon",weaponType:"hammer",stats:{str:15},price:1000},
        "primeval_turbine_axe":{id:"primeval_turbine_axe",name:"Hache Turbine Primordiale",type:"weapon",weaponType:"axe",stats:{str:14,int:3},price:980},
        "void_arc_rifle":{id:"void_arc_rifle",name:"Carabine d'Arc du Néant",type:"weapon",weaponType:"gun",stats:{dex:12},price:990},
        "eternal_pressure_cannon":{id:"eternal_pressure_cannon",name:"Canon à pression éternelle",type:"weapon",weaponType:"launcher",stats:{str:12,dex:3},price:1010},
        "omega_mecha_bow":{id:"omega_mecha_bow",name:"Arc Oméga Mécanique",type:"weapon",weaponType:"bow",stats:{dex:13},price:960},
        "celestial_coilblade":{id:"celestial_coilblade",name:"Lame à Bobine Céleste",type:"weapon",weaponType:"sword",stats:{str:13,int:4},price:950},
        "overdrive_halberd":{id:"overdrive_halberd",name:"Hallebarde Overdrive",type:"weapon",weaponType:"spear",stats:{str:14},price:940},
        "quantum_surge_staff":{id:"quantum_surge_staff",name:"Bâton Quantique à Surtension",type:"weapon",weaponType:"staff",stats:{int:15},price:1000},
        "aeon_repeater":{id:"aeon_repeater",name:"Répétiteur Aéonique",type:"weapon",weaponType:"gun",stats:{dex:12,luck:4},price:990},
        "godforge_scythe":{id:"godforge_scythe",name:"Faux de la Forge Divine",type:"weapon",weaponType:"axe",stats:{str:15,dex:2},price:1020},
        "eternal_shock_lance":{id:"eternal_shock_lance",name:"Lance Choc-Éternel",type:"weapon",weaponType:"spear",stats:{str:13,dex:3,int:2},price:970},
        "corebreaker_hammer":{id:"corebreaker_hammer",name:"Marteau Brise-Cœur Moteur",type:"weapon",weaponType:"hammer",stats:{str:16},price:1050},
        "divine_flux_dagger":{id:"divine_flux_dagger",name:"Dague Flux-Divin",type:"weapon",weaponType:"dagger",stats:{dex:12,luck:6},price:900},
        "alpha_tesla_bow":{id:"alpha_tesla_bow",name:"Arc Tesla Alpha",type:"weapon",weaponType:"bow",stats:{dex:14,int:3},price:980},
        "void_singularity_lance":{
            id:"void_singularity_lance",
            name:"Lance de singularité",
            type:"weapon",
            weaponType:"spear",
            stats:{str:10,dex:6,crit:5},
            price:1500
        },
        "core_heart_engineblade":{
            id:"core_heart_engineblade",
            name:"Lame-moteur du Cœur",
            type:"weapon",
            weaponType:"sword",
            stats:{str:12,dex:4,crit:4},
            price:1800
        },
        "abyssal_compass":{
            id:"abyssal_compass",
            name:"Boussole abyssale",
            type:"trinket",
            stats:{luck:2},
            price:900
        },
        "void_beacon":{
            id:"void_beacon",
            name:"Balise du vide",
            type:"trinket",
            stats:{luck:1},
            price:1100
        },

        // Armures
        "copper_helm":{id:"copper_helm",name:"Casque en cuivre",type:"head",stats:{hp:6},price:15},
        "copper_chest":{id:"copper_chest",name:"Plastron cuivre",type:"chest",stats:{hp:12},price:25},
        "copper_legs":{id:"copper_legs",name:"Jambières cuivre",type:"legs",stats:{hp:10},price:20},
        "copper_boots":{id:"copper_boots",name:"Bottes cuivre",type:"boots",stats:{hp:6},price:18},
        "copper_gloves":{id:"copper_gloves",name:"Gants cuivre",type:"gloves",stats:{hp:4},price:14},

        "rusty_goggles":{id:"rusty_goggles",name:"Lunettes rouillées",type:"head",stats:{hp:5},price:12},
        "scrap_chest":{id:"scrap_chest",name:"Plastron en ferraille",type:"chest",stats:{hp:14},price:22},
        "scrap_gloves":{id:"scrap_gloves",name:"Gants en ferraille",type:"gloves",stats:{hp:5},price:11},
        "scrap_boots":{id:"scrap_boots",name:"Bottes en ferraille",type:"boots",stats:{hp:6},price:14},
        "scrap_legs":{id:"scrap_legs",name:"Jambières en ferraille",type:"legs",stats:{hp:10},price:17},

        "leather_goggles":{id:"leather_goggles",name:"Masque en cuir",type:"head",stats:{hp:5},price:10},
        "leather_legs":{id:"leather_legs",name:"Jambières cuir",type:"legs",stats:{hp:8},price:14},
        "leather_boots":{id:"leather_boots",name:"Bottes cuir",type:"boots",stats:{hp:6},price:16},
        "leather_gloves":{id:"leather_gloves",name:"Gants cuir",type:"gloves",stats:{hp:4},price:12},

        "steam_rig_helm":{id:"steam_rig_helm",name:"Casque vapeur simple",type:"head",stats:{hp:8},price:22},
        "steam_rig_chest":{id:"steam_rig_chest",name:"Plastron vapeur simple",type:"chest",stats:{hp:15},price:28},
        "steam_rig_boots":{id:"steam_rig_boots",name:"Bottes vapeur",type:"boots",stats:{hp:8},price:20},
        "steam_rig_gloves":{id:"steam_rig_gloves",name:"Gants vapeur",type:"gloves",stats:{hp:5},price:18},
        "steam_rig_legs":{id:"steam_rig_legs",name:"Jambières vapeur",type:"legs",stats:{hp:12},price:22},

        "steel_goggles":{id:"steel_goggles",name:"Lunettes en acier renforcé",type:"head",stats:{hp:18},price:55},
        "steel_chest":{id:"steel_chest",name:"Plastron d'acier",type:"chest",stats:{hp:30},price:80},
        "steel_legs":{id:"steel_legs",name:"Jambières d'acier",type:"legs",stats:{hp:22},price:70},
        "steel_boots":{id:"steel_boots",name:"Bottes d'acier",type:"boots",stats:{hp:16},price:50},
        "steel_gloves":{id:"steel_gloves",name:"Gants d'acier",type:"gloves",stats:{hp:12},price:42},

        "pressure_helm":{id:"pressure_helm",name:"Casque à pression",type:"head",stats:{hp:20},price:70},
        "pressure_chest":{id:"pressure_chest",name:"Carapace à pression",type:"chest",stats:{hp:32},price:95},
        "pressure_legs":{id:"pressure_legs",name:"Jambières à pression",type:"legs",stats:{hp:24},price:85},
        "pressure_boots":{id:"pressure_boots",name:"Bottes à pression",type:"boots",stats:{hp:18},price:60},
        "pressure_gloves":{id:"pressure_gloves",name:"Gants à pression",type:"gloves",stats:{hp:14},price:50},

        "bronze_mech_helm":{id:"bronze_mech_helm",name:"Heaume mécanique bronze",type:"head",stats:{hp:19},price:60},
        "bronze_mech_chest":{id:"bronze_mech_chest",name:"Cuirasse mécanique bronze",type:"chest",stats:{hp:34},price:90},
        "bronze_mech_legs":{id:"bronze_mech_legs",name:"Jambières mécaniques bronze",type:"legs",stats:{hp:26},price:75},
        "bronze_mech_boots":{id:"bronze_mech_boots",name:"Bottes mécaniques bronze",type:"boots",stats:{hp:17},price:55},
        "bronze_mech_gloves":{id:"bronze_mech_gloves",name:"Gants mécaniques bronze",type:"gloves",stats:{hp:13},price:45},

        "steamtech_helm":{id:"steamtech_helm",name:"Casque SteamTech",type:"head",stats:{hp:22},price:85},
        "steamtech_chest":{id:"steamtech_chest",name:"Plastron SteamTech",type:"chest",stats:{hp:36},price:110},
        "steamtech_legs":{id:"steamtech_legs",name:"Jambières SteamTech",type:"legs",stats:{hp:28},price:95},
        "steamtech_boots":{id:"steamtech_boots",name:"Bottes SteamTech",type:"boots",stats:{hp:20},price:80},
        "steamtech_gloves":{id:"steamtech_gloves",name:"Gants SteamTech",type:"gloves",stats:{hp:16},price:70},

        "tesla_helm":{id:"tesla_helm",name:"Heaume Tesla",type:"head",stats:{hp:30,int:2},price:150},
        "tesla_chest":{id:"tesla_chest",name:"Armure Tesla",type:"chest",stats:{hp:50,int:3},price:200},
        "tesla_legs":{id:"tesla_legs",name:"Jambières Tesla",type:"legs",stats:{hp:38,int:2},price:170},
        "tesla_boots":{id:"tesla_boots",name:"Bottes Tesla",type:"boots",stats:{hp:24,int:1},price:140},
        "tesla_gloves":{id:"tesla_gloves",name:"Gants Tesla",type:"gloves",stats:{hp:18,int:1},price:120},

        "chrono_helm":{id:"chrono_helm",name:"Heaume du Chronométreur",type:"head",stats:{hp:32,dex:1},price:160},
        "chrono_chest":{id:"chrono_chest",name:"Cuirasse chronométrique",type:"chest",stats:{hp:52,dex:2},price:220},
        "chrono_legs":{id:"chrono_legs",name:"Jambières chronométriques",type:"legs",stats:{hp:40,dex:1},price:180},
        "chrono_boots":{id:"chrono_boots",name:"Bottes chronométriques",type:"boots",stats:{hp:26,dex:1},price:150},
        "chrono_gloves":{id:"chrono_gloves",name:"Gants chronométriques",type:"gloves",stats:{hp:20,dex:1},price:130},

        "coil_helm":{id:"coil_helm",name:"Heaume à bobine",type:"head",stats:{hp:34,str:1},price:170},
        "coil_chest":{id:"coil_chest",name:"Cuirasse à bobine",type:"chest",stats:{hp:55,str:2},price:230},
        "coil_legs":{id:"coil_legs",name:"Jambières à bobine",type:"legs",stats:{hp:42,str:1},price:190},
        "coil_boots":{id:"coil_boots",name:"Bottes à bobine",type:"boots",stats:{hp:28,str:1},price:160},
        "coil_gloves":{id:"coil_gloves",name:"Gants à bobine",type:"gloves",stats:{hp:21,str:1},price:150},

        "pressure_master_helm":{id:"pressure_master_helm",name:"Heaume maître de pression",type:"head",stats:{hp:36},price:180},
        "pressure_master_chest":{id:"pressure_master_chest",name:"Armure maître de pression",type:"chest",stats:{hp:58},price:240},
        "pressure_master_legs":{id:"pressure_master_legs",name:"Jambières maître pression",type:"legs",stats:{hp:44},price:200},
        "pressure_master_boots":{id:"pressure_master_boots",name:"Bottes maître pression",type:"boots",stats:{hp:30},price:170},
        "pressure_master_gloves":{id:"pressure_master_gloves",name:"Gants maître pression",type:"gloves",stats:{hp:22},price:160},

        "overclock_helm":{id:"overclock_helm",name:"Heaume Surchargé",type:"head",stats:{hp:50,int:3},price:300},
        "overclock_chest":{id:"overclock_chest",name:"Cuirasse Surchargée",type:"chest",stats:{hp:80,int:4},price:380},
        "overclock_legs":{id:"overclock_legs",name:"Jambières Surchargées",type:"legs",stats:{hp:60,int:3},price:340},
        "overclock_boots":{id:"overclock_boots",name:"Bottes Surchargées",type:"boots",stats:{hp:36,int:2},price:300},
        "overclock_gloves":{id:"overclock_gloves",name:"Gants Surchargés",type:"gloves",stats:{hp:28,int:2},price:280},

        "steam_colossus_helm":{id:"steam_colossus_helm",name:"Heaume Colosse Vapeur",type:"head",stats:{hp:55,str:2},price:330},
        "steam_colossus_chest":{id:"steam_colossus_chest",name:"Armure Colosse Vapeur",type:"chest",stats:{hp:85,str:3},price:400},
        "steam_colossus_legs":{id:"steam_colossus_legs",name:"Jambières Colosse Vapeur",type:"legs",stats:{hp:65,str:2},price:360},
        "steam_colossus_boots":{id:"steam_colossus_boots",name:"Bottes Colosse Vapeur",type:"boots",stats:{hp:38,str:1},price:310},
        "steam_colossus_gloves":{id:"steam_colossus_gloves",name:"Gants Colosse Vapeur",type:"gloves",stats:{hp:30,str:1},price:290},

        "turbine_helm":{id:"turbine_helm",name:"Heaume Turbine Sacré",type:"head",stats:{hp:52,dex:2},price:320},
        "turbine_chest":{id:"turbine_chest",name:"Armure Turbine Sacrée",type:"chest",stats:{hp:82,dex:3},price:380},
        "turbine_legs":{id:"turbine_legs",name:"Jambières Turbine Sacrée",type:"legs",stats:{hp:62,dex:2},price:340},
        "turbine_boots":{id:"turbine_boots",name:"Bottes Turbine Sacrée",type:"boots",stats:{hp:35,dex:1},price:300},
        "turbine_gloves":{id:"turbine_gloves",name:"Gants Turbine Sacrée",type:"gloves",stats:{hp:27,dex:1},price:280},

        "arc_warden_helm":{id:"arc_warden_helm",name:"Heaume du Gardien d'Arcs",type:"head",stats:{hp:58,int:2},price:350},
        "arc_warden_chest":{id:"arc_warden_chest",name:"Cuirasse Gardien d'Arcs",type:"chest",stats:{hp:88,int:3},price:420},
        "arc_warden_legs":{id:"arc_warden_legs",name:"Jambières Gardien d'Arcs",type:"legs",stats:{hp:66,int:2},price:370},
        "arc_warden_boots":{id:"arc_warden_boots",name:"Bottes Gardien d'Arcs",type:"boots",stats:{hp:40,int:1},price:320},
        "arc_warden_gloves":{id:"arc_warden_gloves",name:"Gants Gardien d'Arcs",type:"gloves",stats:{hp:29,int:1},price:290},

        "omega_helm":{id:"omega_helm",name:"Heaume Oméga",type:"head",stats:{hp:90,int:5},price:700},
        "omega_chest":{id:"omega_chest",name:"Cuirasse Oméga",type:"chest",stats:{hp:130,int:6},price:850},
        "omega_legs":{id:"omega_legs",name:"Jambières Oméga",type:"legs",stats:{hp:110,int:4},price:800},
        "omega_boots":{id:"omega_boots",name:"Bottes Oméga",type:"boots",stats:{hp:65,int:3},price:720},
        "omega_gloves":{id:"omega_gloves",name:"Gants Oméga",type:"gloves",stats:{hp:48,int:3},price:690},

        "divine_coil_helm":{id:"divine_coil_helm",name:"Heaume de la Bobine Divine",type:"head",stats:{hp:95,str:4},price:760},
        "divine_coil_chest":{id:"divine_coil_chest",name:"Armure de la Bobine Divine",type:"chest",stats:{hp:140,str:5},price:900},
        "divine_coil_legs":{id:"divine_coil_legs",name:"Jambières de la Bobine Divine",type:"legs",stats:{hp:115,str:4},price:850},
        "divine_coil_boots":{id:"divine_coil_boots",name:"Bottes de la Bobine Divine",type:"boots",stats:{hp:68,str:3},price:740},
        "divine_coil_gloves":{id:"divine_coil_gloves",name:"Gants de la Bobine Divine",type:"gloves",stats:{hp:50,str:3},price:700},

        "eternal_pressure_helm":{id:"eternal_pressure_helm",name:"Heaume Pression-Éternelle",type:"head",stats:{hp:100},price:780},
        "eternal_pressure_chest":{id:"eternal_pressure_chest",name:"Armure Pression-Éternelle",type:"chest",stats:{hp:150},price:920},
        "eternal_pressure_legs":{id:"eternal_pressure_legs",name:"Jambières Pression-Éternelle",type:"legs",stats:{hp:120},price:860},
        "eternal_pressure_boots":{id:"eternal_pressure_boots",name:"Bottes Pression-Éternelle",type:"boots",stats:{hp:72},price:750},
        "eternal_pressure_gloves":{id:"eternal_pressure_gloves",name:"Gants Pression-Éternelle",type:"gloves",stats:{hp:52},price:710},

        "primeval_gear_helm":{id:"primeval_gear_helm",name:"Heaume Engrenage-Primordial",type:"head",stats:{hp:92,dex:4},price:740},
        "primeval_gear_chest":{id:"primeval_gear_chest",name:"Armure Engrenage-Primordial",type:"chest",stats:{hp:145,dex:5},price:900},
        "primeval_gear_legs":{id:"primeval_gear_legs",name:"Jambières Engrenage-Primordial",type:"legs",stats:{hp:118,dex:4},price:830},
        "primeval_gear_boots":{id:"primeval_gear_boots",name:"Bottes Engrenage-Primordial",type:"boots",stats:{hp:70,dex:3},price:760},
        "primeval_gear_gloves":{id:"primeval_gear_gloves",name:"Gants Engrenage-Primordial",type:"gloves",stats:{hp:50,dex:3},price:710},



        // Bijoux
        "iron_ring":{id:"iron_ring",name:"Anneau de fer",type:"ring",stats:{luck:1},price:18},
        "copper_ring":{id:"copper_ring",name:"Anneau de cuivre",type:"ring",stats:{luck:1},price:12},
        "brass_ring":{id:"brass_ring",name:"Anneau en laiton",type:"ring",stats:{luck:1},price:15},
        "rusty_gear_ring":{id:"rusty_gear_ring",name:"Anneau à engrenage rouillé",type:"ring",stats:{luck:1},price:14},
        "simple_steam_ring":{id:"simple_steam_ring",name:"Anneau vapeur simple",type:"ring",stats:{luck:1},price:16},

        "leather_amulet":{id:"leather_amulet",name:"Amulette en cuir",type:"amulet",stats:{hp:3},price:15},
        "copper_pendant":{id:"copper_pendant",name:"Pendentif en cuivre",type:"amulet",stats:{hp:4},price:18},
        "gear_amulet":{id:"gear_amulet",name:"Amulette à engrenages",type:"amulet",stats:{hp:4},price:20},
        "steam_vial_amulet":{id:"steam_vial_amulet",name:"Amulette à fiole de vapeur",type:"amulet",stats:{hp:5},price:22},
        "simple_compass_amulet":{id:"simple_compass_amulet",name:"Amulette boussole",type:"amulet",stats:{luck:1},price:19},

        "lucky_charm":{id:"lucky_charm",name:"Porte-bonheur",type:"ring",stats:{luck:3},price:45},
        "bronze_band":{id:"bronze_band",name:"Anneau en bronze",type:"ring",stats:{luck:2},price:25},
        "coal_forge_ring":{id:"coal_forge_ring",name:"Anneau de forge au charbon",type:"ring",stats:{str:1},price:24},
        "pipe_loop_ring":{id:"pipe_loop_ring",name:"Anneau en boucle de tuyau",type:"ring",stats:{hp:2},price:20},
        "tiny_valve_ring":{id:"tiny_valve_ring",name:"Anneau à mini-valve",type:"ring",stats:{dex:1},price:22},

        "pendant_of_smoke":{id:"pendant_of_smoke",name:"Pendentif de fumée",type:"amulet",stats:{luck:1},price:21},
        "patchwork_amulet":{id:"patchwork_amulet",name:"Amulette rafistolée",type:"amulet",stats:{hp:4},price:19},
        "simple_gauge_amulet":{id:"simple_gauge_amulet",name:"Amulette manomètre",type:"amulet",stats:{hp:5},price:23},
        "wire_coiled_ring":{id:"wire_coiled_ring",name:"Anneau en fil bobiné",type:"ring",stats:{dex:1},price:21},
        "tin_gear_ring":{id:"tin_gear_ring",name:"Anneau engrenage en étain",type:"ring",stats:{luck:2},price:26},
        "steel_ring":{id:"steel_ring",name:"Anneau d'acier",type:"ring",stats:{str:1,luck:1},price:40},
        "precision_ring":{id:"precision_ring",name:"Anneau de précision",type:"ring",stats:{dex:2},price:45},
        "steam_engraved_ring":{id:"steam_engraved_ring",name:"Anneau gravé vapeur",type:"ring",stats:{luck:2},price:42},
        "bronze_gear_ring":{id:"bronze_gear_ring",name:"Anneau engrenage bronze",type:"ring",stats:{str:1,luck:1},price:44},
        "pressure_band":{id:"pressure_band",name:"Anneau de pression",type:"ring",stats:{hp:3,luck:1},price:46},

        "iron_core_amulet":{id:"iron_core_amulet",name:"Amulette noyau de fer",type:"amulet",stats:{hp:8},price:50},
        "coil_amulet":{id:"coil_amulet",name:"Amulette à bobine",type:"amulet",stats:{int:1,hp:4},price:48},
        "steam_gauge_amulet":{id:"steam_gauge_amulet",name:"Amulette jauge à vapeur",type:"amulet",stats:{hp:6},price:52},
        "bronze_compass_amulet":{id:"bronze_compass_amulet",name:"Amulette boussole bronze",type:"amulet",stats:{luck:2},price:49},
        "reinforced_valve_amulet":{id:"reinforced_valve_amulet",name:"Amulette à valve renforcée",type:"amulet",stats:{hp:7},price:55},

        "gear_knuckle_ring":{id:"gear_knuckle_ring",name:"Anneau articulation à engrenages",type:"ring",stats:{str:2},price:47},
        "smoke_filter_ring":{id:"smoke_filter_ring",name:"Anneau filtre-fumée",type:"ring",stats:{hp:3},price:43},
        "pressure_seal_ring":{id:"pressure_seal_ring",name:"Anneau joint de pression",type:"ring",stats:{hp:2,luck:2},price:48},
        "thermo_ring":{id:"thermo_ring",name:"Anneau thermomètre",type:"ring",stats:{int:1,luck:1},price:46},
        "engineer_band":{id:"engineer_band",name:"Anneau de l'ingénieur",type:"ring",stats:{dex:1,str:1},price:45},

        "steamheart_amulet":{id:"steamheart_amulet",name:"Amulette cœur de vapeur",type:"amulet",stats:{hp:9},price:58},
        "twin_gear_amulet":{id:"twin_gear_amulet",name:"Amulette double engrenage",type:"amulet",stats:{hp:7,luck:1},price:53},
        "pressure_compass_amulet":{id:"pressure_compass_amulet",name:"Amulette boussole-pression",type:"amulet",stats:{luck:2,hp:3},price:57},
        "boiler_charm":{id:"boiler_charm",name:"Grigri de chaudière",type:"amulet",stats:{hp:8},price:54},
        "riveted_plate_amulet":{id:"riveted_plate_amulet",name:"Amulette plaque rivetée",type:"amulet",stats:{hp:10},price:60},
        "ruby_ring":{id:"ruby_ring",name:"Anneau rubis",type:"ring",stats:{str:2},price:90},
        "emerald_ring":{id:"emerald_ring",name:"Anneau émeraude",type:"ring",stats:{dex:2},price:90},
        "sapphire_ring":{id:"sapphire_ring",name:"Anneau saphir",type:"ring",stats:{int:2},price:90},
        "topaz_ring":{id:"topaz_ring",name:"Anneau topaze",type:"ring",stats:{luck:3},price:95},
        "tesla_coil_ring":{id:"tesla_coil_ring",name:"Anneau bobine Tesla",type:"ring",stats:{int:2,crit:1},price:110},

        "arc_circuit_ring":{id:"arc_circuit_ring",name:"Anneau circuit d'arcs",type:"ring",stats:{int:2,luck:1},price:105},
        "chrono_gear_ring":{id:"chrono_gear_ring",name:"Anneau engrenage-chrono",type:"ring",stats:{dex:2,luck:1},price:100},
        "pressure_master_ring":{id:"pressure_master_ring",name:"Anneau maître de pression",type:"ring",stats:{hp:5,luck:2},price:98},
        "shock_pulse_ring":{id:"shock_pulse_ring",name:"Anneau impulsion de choc",type:"ring",stats:{dex:1,crit:2},price:108},
        "steam_collector_ring":{id:"steam_collector_ring",name:"Anneau collecteur de vapeur",type:"ring",stats:{hp:4,int:1},price:97},

        "tesla_amulet":{id:"tesla_amulet",name:"Amulette Tesla",type:"amulet",stats:{int:3},price:115},
        "chrono_pocket_amulet":{id:"chrono_pocket_amulet",name:"Amulette montre-chrono",type:"amulet",stats:{dex:2,int:1},price:112},
        "coil_reactor_amulet":{id:"coil_reactor_amulet",name:"Amulette réacteur à bobine",type:"amulet",stats:{int:3,hp:4},price:120},
        "pressure_core_amulet":{id:"pressure_core_amulet",name:"Amulette noyau de pression",type:"amulet",stats:{hp:12},price:118},
        "steam_regulator_amulet":{id:"steam_regulator_amulet",name:"Amulette régulateur vapeur",type:"amulet",stats:{hp:10,luck:1},price:110},

        "gearhalo_amulet":{id:"gearhalo_amulet",name:"Amulette halo d'engrenages",type:"amulet",stats:{dex:2,luck:2},price:116},
        "arc_compass_amulet":{id:"arc_compass_amulet",name:"Amulette boussole d'arcs",type:"amulet",stats:{int:2,luck:1},price:113},
        "steam_wings_amulet":{id:"steam_wings_amulet",name:"Amulette ailes de vapeur",type:"amulet",stats:{dex:2,hp:3},price:118},
        "coil_rune_ring":{id:"coil_rune_ring",name:"Anneau rune-bobine",type:"ring",stats:{int:2,crit:1},price:111},
        "turbine_signet":{id:"turbine_signet",name:"Chevalière turbine",type:"ring",stats:{str:2,luck:1},price:114},
        "overcharge_ring":{id:"overcharge_ring",name:"Anneau surchargé",type:"ring",stats:{int:3,crit:2},price:180},
        "omega_band":{id:"omega_band",name:"Anneau Oméga",type:"ring",stats:{str:3,luck:2},price:185},
        "leviathan_steam_ring":{id:"leviathan_steam_ring",name:"Anneau Léviathan vapeur",type:"ring",stats:{str:3,hp:5},price:190},
        "tesla_storm_ring":{id:"tesla_storm_ring",name:"Anneau tempête Tesla",type:"ring",stats:{int:3,crit:2},price:195},
        "arc_nexus_ring":{id:"arc_nexus_ring",name:"Anneau Nexus d'arcs",type:"ring",stats:{int:3,luck:2},price:188},

        "chrono_paradox_ring":{id:"chrono_paradox_ring",name:"Anneau paradoxe-chrono",type:"ring",stats:{dex:3,int:2},price:182},
        "turbine_overdrive_ring":{id:"turbine_overdrive_ring",name:"Anneau turbine-surboost",type:"ring",stats:{str:3,dex:1},price:186},
        "coil_infinity_ring":{id:"coil_infinity_ring",name:"Anneau bobine-infinie",type:"ring",stats:{int:3,luck:2},price:192},
        "gear_cathedral_ring":{id:"gear_cathedral_ring",name:"Anneau cathédrale d'engrenages",type:"ring",stats:{str:2,hp:5,luck:1},price:189},
        "pressure_sanctum_ring":{id:"pressure_sanctum_ring",name:"Anneau sanctuaire de pression",type:"ring",stats:{hp:7,luck:2},price:184},

        "overclock_amulet":{id:"overclock_amulet",name:"Amulette overclockée",type:"amulet",stats:{int:4,hp:6},price:200},
        "omega_engine_amulet":{id:"omega_engine_amulet",name:"Amulette moteur-Oméga",type:"amulet",stats:{str:3,int:2,hp:5},price:210},
        "leviathan_core_amulet":{id:"leviathan_core_amulet",name:"Amulette cœur-Léviathan",type:"amulet",stats:{hp:15,str:2},price:215},
        "arc_seraph_amulet":{id:"arc_seraph_amulet",name:"Amulette Séraphin d'arcs",type:"amulet",stats:{int:4,crit:2},price:220},
        "chrono_eternity_amulet":{id:"chrono_eternity_amulet",name:"Amulette éternité-chrono",type:"amulet",stats:{dex:3,int:3},price:205},

        "turbine_heart_amulet":{id:"turbine_heart_amulet",name:"Amulette cœur-turbine",type:"amulet",stats:{str:3,hp:10},price:212},
        "coil_destiny_amulet":{id:"coil_destiny_amulet",name:"Amulette destin-bobine",type:"amulet",stats:{int:4,luck:2},price:218},
        "gearforged_soul_amulet":{id:"gearforged_soul_amulet",name:"Amulette âme-forgée",type:"amulet",stats:{hp:12,str:2,luck:1},price:214},
        "tesla_sanctuary_amulet":{id:"tesla_sanctuary_amulet",name:"Amulette sanctuaire Tesla",type:"amulet",stats:{int:4,hp:8},price:222},
        "steam_warden_amulet":{id:"steam_warden_amulet",name:"Amulette du gardien vapeur",type:"amulet",stats:{hp:14,luck:2},price:208},
        "heart_of_luck":{id:"heart_of_luck",name:"Cœur de la Chance",type:"ring",stats:{luck:7},price:320},
        "godcoil_signet":{id:"godcoil_signet",name:"Chevalière du Dieu-Bobine",type:"ring",stats:{int:5,crit:3},price:340},
        "omega_destiny_ring":{id:"omega_destiny_ring",name:"Anneau du Destin Oméga",type:"ring",stats:{str:4,luck:4},price:330},
        "eternal_arc_ring":{id:"eternal_arc_ring",name:"Anneau des Arcs Éternels",type:"ring",stats:{int:5,luck:3},price:335},
        "chrono_infinity_ring":{id:"chrono_infinity_ring",name:"Anneau Chron∞",type:"ring",stats:{dex:4,int:4},price:325},

        "primeval_steam_ring":{id:"primeval_steam_ring",name:"Anneau Vapeur-Primordiale",type:"ring",stats:{str:4,hp:10},price:318},
        "infinity_gear_ring":{id:"infinity_gear_ring",name:"Anneau Engrenage Infini",type:"ring",stats:{str:4,dex:2,luck:3},price:338},
        "divine_pressure_ring":{id:"divine_pressure_ring",name:"Anneau Pression-Divine",type:"ring",stats:{hp:12,luck:3},price:322},
        "quantum_core_ring":{id:"quantum_core_ring",name:"Anneau Cœur-Quantique",type:"ring",stats:{int:5,hp:6},price:336},
        "worldmachine_signet":{id:"worldmachine_signet",name:"Chevalière de la Machine-Monde",type:"ring",stats:{str:4,int:4,luck:3},price:350},

        "core_of_the_engine_amulet":{id:"core_of_the_engine_amulet",name:"Amulette du Cœur de l'Engin",type:"amulet",stats:{hp:20,int:5},price:360},
        "divine_steam_amulet":{id:"divine_steam_amulet",name:"Amulette Vapeur-Divine",type:"amulet",stats:{hp:18,str:3,int:2},price:345},
        "eternal_gear_soul":{id:"eternal_gear_soul",name:"Amulette âme-engrenages éternels",type:"amulet",stats:{hp:18,luck:4},price:340},
        "godforge_heart_amulet":{id:"godforge_heart_amulet",name:"Amulette cœur de la Forge Divine",type:"amulet",stats:{hp:22,str:3},price:365},
        "omega_arc_relic":{id:"omega_arc_relic",name:"Relique d'Arcs Oméga",type:"amulet",stats:{int:6,crit:3},price:355},

        "primeval_engine_amulet":{id:"primeval_engine_amulet",name:"Amulette moteur-primordial",type:"amulet",stats:{hp:20,str:3,int:2},price:348},
        "quantum_flux_amulet":{id:"quantum_flux_amulet",name:"Amulette flux-quantique",type:"amulet",stats:{int:6,hp:8},price:358},
        "aeon_compass_amulet":{id:"aeon_compass_amulet",name:"Amulette boussole des Ères",type:"amulet",stats:{dex:4,int:4,luck:3},price:352},
        "eternal_pressure_relic":{id:"eternal_pressure_relic",name:"Relique Pression-Éternelle",type:"amulet",stats:{hp:24,luck:3},price:362},
        "worldheart_amulet":{id:"worldheart_amulet",name:"Amulette Cœur-du-Monde",type:"amulet",stats:{hp:26,str:3,int:3,luck:3},price:380},


        // Boucliers
        "rusty_shield":{id:"rusty_shield",name:"Bouclier rouillé",type:"shield",stats:{hp:8},price:12},
        "wooden_plate_shield":{id:"wooden_plate_shield",name:"Écu en bois renforcé",type:"shield",stats:{hp:10},price:15},
        "copper_buckler":{id:"copper_buckler",name:"Rondache en cuivre",type:"shield",stats:{hp:9},price:16},
        "scrap_metal_shield":{id:"scrap_metal_shield",name:"Bouclier en ferraille",type:"shield",stats:{hp:11},price:18},
        "leather_round_shield":{id:"leather_round_shield",name:"Rondache en cuir",type:"shield",stats:{hp:7},price:10},
        "boiler_door_shield":{id:"boiler_door_shield",name:"Porte de chaudière",type:"shield",stats:{hp:12},price:20},
        "pipe_frame_shield":{id:"pipe_frame_shield",name:"Bouclier à cadre de tuyaux",type:"shield",stats:{hp:10},price:17},
        "cog_plate_shield":{id:"cog_plate_shield",name:"Bouclier à plaques d'engrenages",type:"shield",stats:{hp:11},price:19},
        "makeshift_riot_shield":{id:"makeshift_riot_shield",name:"Bouclier anti-émeute de fortune",type:"shield",stats:{hp:13},price:22},
        "steam_panel_shield":{id:"steam_panel_shield",name:"Panneau de maintenance vapeur",type:"shield",stats:{hp:10},price:18},
        "bronze_guard_shield":{id:"bronze_guard_shield",name:"Bouclier de garde en bronze",type:"shield",stats:{hp:12},price:23},
        "riveted_wood_shield":{id:"riveted_wood_shield",name:"Bouclier en bois riveté",type:"shield",stats:{hp:9},price:15},
        "pressure_valve_shield":{id:"pressure_valve_shield",name:"Bouclier à valve de pression",type:"shield",stats:{hp:11},price:21},
        "patchwork_shield":{id:"patchwork_shield",name:"Bouclier patchwork",type:"shield",stats:{hp:8},price:13},
        "coal_forge_shield":{id:"coal_forge_shield",name:"Bouclier de forge au charbon",type:"shield",stats:{hp:12},price:20},
        "gearbound_buckler":{id:"gearbound_buckler",name:"Rondache engrenée",type:"shield",stats:{hp:10},price:18},
        "simple_tower_shield":{id:"simple_tower_shield",name:"Pavois simple",type:"shield",stats:{hp:14},price:24},
        "rusty_gear_shield":{id:"rusty_gear_shield",name:"Bouclier à engrenages rouillés",type:"shield",stats:{hp:9},price:16},
        "smoke_filter_shield":{id:"smoke_filter_shield",name:"Bouclier filtre-fumée",type:"shield",stats:{hp:10},price:17},
        "crude_pressure_shield":{id:"crude_pressure_shield",name:"Bouclier de pression grossier",type:"shield",stats:{hp:13},price:22},
        "steel_buckler":{id:"steel_buckler",name:"Rondache en acier",type:"shield",stats:{hp:16},price:32},
        "steel_tower_shield":{id:"steel_tower_shield",name:"Pavois d'acier",type:"shield",stats:{hp:20},price:45},
        "pressure_plate_shield":{id:"pressure_plate_shield",name:"Bouclier à plaque de pression",type:"shield",stats:{hp:19},price:40},
        "brass_guard_shield":{id:"brass_guard_shield",name:"Bouclier de garde en laiton",type:"shield",stats:{hp:18},price:38},
        "steam_reinforced_shield":{id:"steam_reinforced_shield",name:"Bouclier renforcé à vapeur",type:"shield",stats:{hp:21},price:46},
        "bronze_tower_shield":{id:"bronze_tower_shield",name:"Pavois de bronze",type:"shield",stats:{hp:19},price:42},
        "gearwall_shield":{id:"gearwall_shield",name:"Mur d'engrenages",type:"shield",stats:{hp:22},price:50},
        "turbine_buckler":{id:"turbine_buckler",name:"Rondache turbine",type:"shield",stats:{hp:17},price:36},
        "coilguard_shield":{id:"coilguard_shield",name:"Bouclier à bobines gardiennes",type:"shield",stats:{hp:20},price:44},
        "riveted_steel_shield":{id:"riveted_steel_shield",name:"Bouclier d'acier riveté",type:"shield",stats:{hp:18},price:39},
        "steam_valve_shield":{id:"steam_valve_shield",name:"Bouclier à vannes vapeur",type:"shield",stats:{hp:21},price:47},
        "chrono_guard_shield":{id:"chrono_guard_shield",name:"Bouclier du garde-chrono",type:"shield",stats:{hp:19},price:43},
        "plated_pipe_shield":{id:"plated_pipe_shield",name:"Bouclier à tuyaux plaqués",type:"shield",stats:{hp:18},price:38},
        "piston_shield":{id:"piston_shield",name:"Bouclier à pistons",type:"shield",stats:{hp:20},price:45},
        "boilerwall_shield":{id:"boilerwall_shield",name:"Bouclier mur-chaudière",type:"shield",stats:{hp:22},price:50},
        "smoke_screen_shield":{id:"smoke_screen_shield",name:"Bouclier écran de fumée",type:"shield",stats:{hp:17},price:37},
        "pressure_riot_shield":{id:"pressure_riot_shield",name:"Bouclier anti-émeute à pression",type:"shield",stats:{hp:21},price:49},
        "goggles_crest_shield":{id:"goggles_crest_shield",name:"Bouclier à blason de lunettes",type:"shield",stats:{hp:18},price:40},
        "magnetic_lock_shield":{id:"magnetic_lock_shield",name:"Bouclier à verrous magnétiques",type:"shield",stats:{hp:20},price:46},
        "steamspike_shield":{id:"steamspike_shield",name:"Bouclier à pointes vapeur",type:"shield",stats:{hp:19,str:1},price:48},
        "tesla_shield":{id:"tesla_shield",name:"Bouclier Tesla",type:"shield",stats:{hp:26,int:1},price:80},
        "arc_barrier_shield":{id:"arc_barrier_shield",name:"Barrière d'arcs",type:"shield",stats:{hp:28,int:1},price:88},
        "chrono_bulwark":{id:"chrono_bulwark",name:"Rempart chronométrique",type:"shield",stats:{hp:30},price:92},
        "coil_tower_shield":{id:"coil_tower_shield",name:"Pavois à bobines",type:"shield",stats:{hp:29},price:90},
        "gearstorm_shield":{id:"gearstorm_shield",name:"Bouclier tempête d'engrenages",type:"shield",stats:{hp:31},price:96},
        "turbine_wall":{id:"turbine_wall",name:"Mur de turbine",type:"shield",stats:{hp:32},price:100},
        "overpressure_shield":{id:"overpressure_shield",name:"Bouclier surpression",type:"shield",stats:{hp:33},price:105},
        "steam_core_shield":{id:"steam_core_shield",name:"Bouclier cœur-vapeur",type:"shield",stats:{hp:30},price:95},
        "shockguard_buckler":{id:"shockguard_buckler",name:"Rondache garde-choc",type:"shield",stats:{hp:27,luck:1},price:86},
        "arcane_gear_shield":{id:"arcane_gear_shield",name:"Bouclier engrenages arcaniques",type:"shield",stats:{hp:29,int:1},price:92},
        "pressure_relay_shield":{id:"pressure_relay_shield",name:"Bouclier relais de pression",type:"shield",stats:{hp:31},price:98},
        "tesla_barrier_disc":{id:"tesla_barrier_disc",name:"Disque-barrière Tesla",type:"shield",stats:{hp:28,int:1},price:90},
        "clockwork_bulwark":{id:"clockwork_bulwark",name:"Rempart mécanique",type:"shield",stats:{hp:32},price:102},
        "coil_guard_wall":{id:"coil_guard_wall",name:"Mur gardien de bobines",type:"shield",stats:{hp:33},price:106},
        "vapor_screen_shield":{id:"vapor_screen_shield",name:"Bouclier écran de vapeur",type:"shield",stats:{hp:30},price:96},
        "gearhalo_buckler":{id:"gearhalo_buckler",name:"Rondache halo d'engrenages",type:"shield",stats:{hp:27,dex:1},price:88},
        "steam_sentinel_shield":{id:"steam_sentinel_shield",name:"Bouclier du sentinelle vapeur",type:"shield",stats:{hp:34},price:110},
        "charged_plating_shield":{id:"charged_plating_shield",name:"Bouclier à plaques chargées",type:"shield",stats:{hp:32,int:1},price:104},
        "aether_valve_shield":{id:"aether_valve_shield",name:"Bouclier à valve d'éther",type:"shield",stats:{hp:31,int:1},price:101},
        "pulse_field_shield":{id:"pulse_field_shield",name:"Bouclier champ d'impulsions",type:"shield",stats:{hp:33},price:108},
        "overcharge_bulwark":{id:"overcharge_bulwark",name:"Rempart surchargé",type:"shield",stats:{hp:45,int:2},price:160},
        "omega_gear_shield":{id:"omega_gear_shield",name:"Bouclier engrenage Oméga",type:"shield",stats:{hp:48},price:170},
        "leviathan_steam_shield":{id:"leviathan_steam_shield",name:"Bouclier Léviathan vapeur",type:"shield",stats:{hp:50,str:1},price:180},
        "tesla_aegis":{id:"tesla_aegis",name:"Égide Tesla",type:"shield",stats:{hp:46,int:3},price:175},
        "arc_reactor_shield":{id:"arc_reactor_shield",name:"Bouclier réacteur d'arcs",type:"shield",stats:{hp:47,int:2},price:178},
        "chrono_eternal_shield":{id:"chrono_eternal_shield",name:"Bouclier chrono-éternel",type:"shield",stats:{hp:49},price:182},
        "turbine_colossus_wall":{id:"turbine_colossus_wall",name:"Mur colosse-turbine",type:"shield",stats:{hp:52},price:190},
        "coil_leviathan_disc":{id:"coil_leviathan_disc",name:"Disque Léviathan à bobines",type:"shield",stats:{hp:46,int:2},price:176},
        "storm_engine_shield":{id:"storm_engine_shield",name:"Bouclier moteur-tempête",type:"shield",stats:{hp:48,luck:1},price:185},
        "omega_tower_shield":{id:"omega_tower_shield",name:"Pavois Oméga",type:"shield",stats:{hp:54},price:195},
        "gear_cathedral_shield":{id:"gear_cathedral_shield",name:"Bouclier cathédrale d'engrenages",type:"shield",stats:{hp:53},price:192},
        "pressure_sanctum_shield":{id:"pressure_sanctum_shield",name:"Bouclier sanctuaire de pression",type:"shield",stats:{hp:51},price:188},
        "arc_paladin_bulwark":{id:"arc_paladin_bulwark",name:"Rempart paladin d'arcs",type:"shield",stats:{hp:49,int:2},price:184},
        "steam_warden_shield":{id:"steam_warden_shield",name:"Bouclier du gardien vapeur",type:"shield",stats:{hp:52},price:191},
        "vortex_barrier_shield":{id:"vortex_barrier_shield",name:"Barrière de vortex",type:"shield",stats:{hp:50,int:1},price:187},
        "turbine_aegis":{id:"turbine_aegis",name:"Égide turbine",type:"shield",stats:{hp:53},price:193},
        "overpressure_rampart":{id:"overpressure_rampart",name:"Rempart surpression",type:"shield",stats:{hp:55},price:198},
        "tesla_sanctuary_shield":{id:"tesla_sanctuary_shield",name:"Bouclier sanctuaire Tesla",type:"shield",stats:{hp:48,int:3},price:186},
        "gearforged_bastion":{id:"gearforged_bastion",name:"Bastion forgé-d'engrenages",type:"shield",stats:{hp:56},price:200},
        "chrono_sky_shield":{id:"chrono_sky_shield",name:"Bouclier ciel-chrono",type:"shield",stats:{hp:51,int:2},price:189},
        "heart_of_gearwall":{id:"heart_of_gearwall",name:"Cœur du mur d'engrenages",type:"shield",stats:{hp:70,int:3},price:260},
        "engine_core_aegis":{id:"engine_core_aegis",name:"Égide du noyau-moteur",type:"shield",stats:{hp:75},price:280},
        "eternal_steam_barrier":{id:"eternal_steam_barrier",name:"Barrière vapeur éternelle",type:"shield",stats:{hp:78},price:290},
        "godcoil_bulwark":{id:"godcoil_bulwark",name:"Rempart du Dieu-Bobine",type:"shield",stats:{hp:80,int:3},price:305},
        "omega_arc_shield":{id:"omega_arc_shield",name:"Bouclier Arc-Oméga",type:"shield",stats:{hp:76,int:2},price:275},
        "primeval_pressure_wall":{id:"primeval_pressure_wall",name:"Mur pression-primordiale",type:"shield",stats:{hp:82},price:310},
        "infinity_gear_shield":{id:"infinity_gear_shield",name:"Bouclier engrenages infinis",type:"shield",stats:{hp:84},price:320},
        "divine_turbine_aegis":{id:"divine_turbine_aegis",name:"Égide turbine divine",type:"shield",stats:{hp:79,str:2},price:295},
        "eternal_vapor_disc":{id:"eternal_vapor_disc",name:"Disque vapeur éternel",type:"shield",stats:{hp:72,int:2},price:265},
        "arc_seraph_shield":{id:"arc_seraph_shield",name:"Bouclier Séraphin d'arcs",type:"shield",stats:{hp:77,int:3},price:285},
        "steam_leviathan_wall":{id:"steam_leviathan_wall",name:"Mur Léviathan-vapeur",type:"shield",stats:{hp:86},price:330},
        "core_of_aether_shield":{id:"core_of_aether_shield",name:"Bouclier Cœur d'Éther",type:"shield",stats:{hp:81,int:3},price:315},
        "chrono_infinity_bulwark":{id:"chrono_infinity_bulwark",name:"Rempart chron∞",type:"shield",stats:{hp:83},price:325},
        "omega_sanctum_shield":{id:"omega_sanctum_shield",name:"Bouclier sanctuaire Oméga",type:"shield",stats:{hp:85},price:335},
        "godforge_rampart":{id:"godforge_rampart",name:"Rempart de la Forge Divine",type:"shield",stats:{hp:88},price:345},
        "eternal_engine_shield":{id:"eternal_engine_shield",name:"Bouclier moteur éternel",type:"shield",stats:{hp:90},price:360},
        "primeval_gear_bastion":{id:"primeval_gear_bastion",name:"Bastion engrenage-primordial",type:"shield",stats:{hp:87},price:340},
        "quantum_barrier_disc":{id:"quantum_barrier_disc",name:"Disque barrière quantique",type:"shield",stats:{hp:82,int:4},price:330},
        "alpha_coil_aegis":{id:"alpha_coil_aegis",name:"Égide bobine-Alpha",type:"shield",stats:{hp:79,int:3},price:305},
        "worldmachine_shield":{id:"worldmachine_shield",name:"Bouclier de la Machine-Monde",type:"shield",stats:{hp:95,int:4},price:380},

        //BAGS
        "small_gear_bag":{id:"small_gear_bag",name:"Petit sac à engrenages",type:"bag",price:60},
        "reinforced_pack":{id:"reinforced_pack",name:"Sac renforcé",type:"bag",price:120},
        "abyssal_chest_rig":{id:"abyssal_chest_rig",name:"Harnais abyssal",type:"bag",price:220},

        // Potions
        // Potions / Élixirs
        "small_potion":{id:"small_potion",name:"Petite potion",type:"consumable",effect:"heal_small",price:8},
        "medium_potion":{id:"medium_potion",name:"Potion moyenne",type:"consumable",effect:"heal_medium",price:20},
        "large_potion":{id:"large_potion",name:"Grande potion",type:"consumable",effect:"heal_large",price:45},
        "stamina_elixir":{id:"stamina_elixir",name:"Élixir d'endurance",type:"consumable",effect:"stamina_boost",price:40},
        "mana_potion":{id:"mana_potion",name:"Potion de mana",type:"consumable",effect:"mana_small",price:15},

        "greater_mana_potion":{id:"greater_mana_potion",name:"Grande potion de mana",type:"consumable",effect:"mana_medium",price:32},
        "superior_mana_potion":{id:"superior_mana_potion",name:"Potion de mana supérieure",type:"consumable",effect:"mana_large",price:55},
        "regen_potion":{id:"regen_potion",name:"Potion de régénération",type:"consumable",effect:"heal_over_time_small",price:28},
        "major_regen_potion":{id:"major_regen_potion",name:"Potion de régénération majeure",type:"consumable",effect:"heal_over_time_large",price:60},
        "antidote":{id:"antidote",name:"Antidote",type:"consumable",effect:"cure_poison",price:18},

        "strong_antidote":{id:"strong_antidote",name:"Antidote puissant",type:"consumable",effect:"cure_poison_strong",price:32},
        "fire_res_potion":{id:"fire_res_potion",name:"Potion de résistance au feu",type:"consumable",effect:"fire_resist",price:35},
        "frost_res_potion":{id:"frost_res_potion",name:"Potion de résistance au givre",type:"consumable",effect:"frost_resist",price:35},
        "shock_res_potion":{id:"shock_res_potion",name:"Potion de résistance au choc",type:"consumable",effect:"shock_resist",price:38},
        "stone_skin_potion":{id:"stone_skin_potion",name:"Potion de peau de pierre",type:"consumable",effect:"defense_up",price:42},

        "berserk_elixir":{id:"berserk_elixir",name:"Élixir berserk",type:"consumable",effect:"str_up_large_def_down",price:50},
        "focus_elixir":{id:"focus_elixir",name:"Élixir de concentration",type:"consumable",effect:"crit_up",price:40},
        "agility_tonic":{id:"agility_tonic",name:"Tonique d’agilité",type:"consumable",effect:"dex_up",price:36},
        "intellect_tonic":{id:"intellect_tonic",name:"Tonique d’intellect",type:"consumable",effect:"int_up",price:36},
        "luck_tonic":{id:"luck_tonic",name:"Tonique de chance",type:"consumable",effect:"luck_up",price:38},

        "abyssal_potion":{id:"abyssal_potion",name:"Potion abyssale",type:"consumable",effect:"dark_power_up_hp_down",price:65},
        "shadow_draught":{id:"shadow_draught",name:"Décoction des ombres",type:"consumable",effect:"evasion_up",price:44},
        "aether_potion":{id:"aether_potion",name:"Potion d’éther",type:"consumable",effect:"mana_regen",price:52},
        "steam_tonic":{id:"steam_tonic",name:"Tonique vapeur",type:"consumable",effect:"stamina_regen_small",price:28},
        "gear_oil_flask":{id:"gear_oil_flask",name:"Flasque d’huile mécanique",type:"consumable",effect:"repair_armor_small",price:22},

        "iron_skin_potion":{id:"iron_skin_potion",name:"Potion de peau de fer",type:"consumable",effect:"defense_up_medium",price:46},
        "haste_potion":{id:"haste_potion",name:"Potion de hâte",type:"consumable",effect:"speed_up",price:48},
        "clarity_potion":{id:"clarity_potion",name:"Potion de clarté",type:"consumable",effect:"mana_cost_down",price:40},
        "night_vision_potion":{id:"night_vision_potion",name:"Potion de vision nocturne",type:"consumable",effect:"night_vision",price:34},
        "water_breathing_potion":{id:"water_breathing_potion",name:"Potion de respiration aquatique",type:"consumable",effect:"water_breathing",price:50},

        "stamina_tonic":{id:"stamina_tonic",name:"Tonique d’endurance",type:"consumable",effect:"stamina_boost_small",price:22},
        "blood_boost_vial":{id:"blood_boost_vial",name:"Fiole de sang renforcé",type:"consumable",effect:"max_hp_up_small",price:44},
        "resistance_elixir":{id:"resistance_elixir",name:"Élixir de résistance",type:"consumable",effect:"all_resist_small",price:52},
        "poison_coating":{id:"poison_coating",name:"Enduit de poison",type:"consumable",effect:"weapon_poison_temp",price:30},
        "explosive_flask":{id:"explosive_flask",name:"Flasque explosive",type:"consumable",effect:"throw_explosive",price:40},

        "smoke_bomb_flask":{id:"smoke_bomb_flask",name:"Flasque fumigène",type:"consumable",effect:"throw_smoke",price:32},
        "corrosion_vial":{id:"corrosion_vial",name:"Fiole corrosive",type:"consumable",effect:"armor_break",price:45},
        "detox_tonic":{id:"detox_tonic",name:"Tonique détoxifiant",type:"consumable",effect:"remove_debuffs",price:42},
        "fortified_heart_elixir":{id:"fortified_heart_elixir",name:"Élixir du cœur fortifié",type:"consumable",effect:"max_hp_up_medium",price:60},
        "overcharge_potion":{id:"overcharge_potion",name:"Potion de surcharge",type:"consumable",effect:"overcharge_mode",price:70},

        // Nourriture / plats
        "dried_meat":{id:"dried_meat",name:"Viande séchée",type:"food",hunger:25,fatigue:-5,price:10},
        "hearty_stew":{id:"hearty_stew",name:"Ragoût roboratif",type:"food",hunger:45,fatigue:-15,price:22},
        "glow_mushroom_soup":{id:"glow_mushroom_soup",name:"Soupe de champis luisants",type:"food",hunger:30,fatigue:-10,price:18},
        "traveler_ration":{id:"traveler_ration",name:"Ration de voyageur",type:"food",hunger:20,fatigue:-5,price:12},
        "spiced_meat":{id:"spiced_meat",name:"Viande épicée fumée",type:"food",hunger:35,fatigue:-10,price:18},
        "abyss_ration":{id:"abyss_ration",name:"Ration abyssale compacte",type:"food",hunger:30,fatigue:-20,price:28},

        "grilled_fish":{id:"grilled_fish",name:"Poisson grillé",type:"food",hunger:28,fatigue:-6,price:14},
        "roasted_root_veg":{id:"roasted_root_veg",name:"Racines rôties",type:"food",hunger:22,fatigue:-4,price:12},
        "mushroom_skewer":{id:"mushroom_skewer",name:"Brochette de champignons",type:"food",hunger:24,fatigue:-6,price:13},
        "glow_omelette":{id:"glow_omelette",name:"Omelette luisante",type:"food",hunger:32,fatigue:-8,price:16},
        "honey_glazed_meat":{id:"honey_glazed_meat",name:"Viande au miel",type:"food",hunger:38,fatigue:-10,price:20},

        "herb_bread":{id:"herb_bread",name:"Pain aux herbes",type:"food",hunger:22,fatigue:-4,price:10},
        "hearty_breakfast":{id:"hearty_breakfast",name:"Petit-déjeuner roboratif",type:"food",hunger:40,fatigue:-12,price:24},
        "sailor_stew":{id:"sailor_stew",name:"Ragoût de marin",type:"food",hunger:36,fatigue:-10,price:19},
        "abyss_fish_stew":{id:"abyss_fish_stew",name:"Ragoût de poisson abyssal",type:"food",hunger:42,fatigue:-18,price:26},
        "steamed_veg_plate":{id:"steamed_veg_plate",name:"Assiette de légumes vapeur",type:"food",hunger:28,fatigue:-8,price:15},

        "spiced_crab":{id:"spiced_crab",name:"Crabe épicé",type:"food",hunger:34,fatigue:-10,price:21},
        "smoked_sausage":{id:"smoked_sausage",name:"Saucisse fumée",type:"food",hunger:38,fatigue:-8,price:20},
        "black_stew":{id:"black_stew",name:"Ragoût noir",type:"food",hunger:40,fatigue:-20,price:27},
        "survival_biscuit":{id:"survival_biscuit",name:"Biscuit de survie",type:"food",hunger:18,fatigue:-3,price:9},
        "sweet_berry_tart":{id:"sweet_berry_tart",name:"Tarte aux baies",type:"food",hunger:26,fatigue:-6,price:16},

        "coffee_ration":{id:"coffee_ration",name:"Ration de café",type:"food",hunger:5,fatigue:-18,price:14},
        "strong_tea_cup":{id:"strong_tea_cup",name:"Tasse de thé fort",type:"food",hunger:3,fatigue:-15,price:10},
        "energy_porridge":{id:"energy_porridge",name:"Porridge énergétique",type:"food",hunger:30,fatigue:-12,price:18},
        "festival_platter":{id:"festival_platter",name:"Plateau de festival",type:"food",hunger:55,fatigue:-20,price:32},
        "rice_bowl":{id:"rice_bowl",name:"Bol de riz",type:"food",hunger:24,fatigue:-5,price:12},

        "noodle_soup":{id:"noodle_soup",name:"Soupe de nouilles",type:"food",hunger:28,fatigue:-8,price:15},
        "cheese_plate":{id:"cheese_plate",name:"Assiette de fromage",type:"food",hunger:20,fatigue:-5,price:14},
        "field_sandwich":{id:"field_sandwich",name:"Sandwich de terrain",type:"food",hunger:28,fatigue:-8,price:16},
        "hunter_ration":{id:"hunter_ration",name:"Ration du chasseur",type:"food",hunger:32,fatigue:-10,price:18},
        "miner_lunch":{id:"miner_lunch",name:"Repas du mineur",type:"food",hunger:34,fatigue:-10,price:19},

        "stew_of_roots":{id:"stew_of_roots",name:"Ragoût de racines",type:"food",hunger:36,fatigue:-9,price:18},
        "stew_of_beasts":{id:"stew_of_beasts",name:"Ragoût de bêtes",type:"food",hunger:44,fatigue:-15,price:24},
        "fried_mushrooms":{id:"fried_mushrooms",name:"Champignons frits",type:"food",hunger:24,fatigue:-6,price:13},
        "glow_salad":{id:"glow_salad",name:"Salade luisante",type:"food",hunger:26,fatigue:-8,price:14},
        "luxury_feast":{id:"luxury_feast",name:"Festin luxueux",type:"food",hunger:70,fatigue:-25,price:40},

        "caravan_stew":{id:"caravan_stew",name:"Ragoût de caravane",type:"food",hunger:38,fatigue:-12,price:20},
        "salted_snack_mix":{id:"salted_snack_mix",name:"Mélange salé",type:"food",hunger:18,fatigue:-4,price:11},
        "abyssal_dumplings":{id:"abyssal_dumplings",name:"Raviolis abyssaux",type:"food",hunger:40,fatigue:-18,price:26},
        "steam_bun":{id:"steam_bun",name:"Brioche vapeur",type:"food",hunger:26,fatigue:-10,price:16}

    };

    const RESOURCES = {
        // Plantes & champignons (25)
        herb: { id:"herb", name:"Herbe luminescente" },
        mushroom: { id:"mushroom", name:"Champignon phosphorescent" },
        glow_cap: { id:"glow_cap", name:"Chapeau lumineux" },
        luminous_fern: { id:"luminous_fern", name:"Fougère lumineuse" },
        rust_moss: { id:"rust_moss", name:"Mousse rouillée" },
        ironroot: { id:"ironroot", name:"Racine de fer" },
        steam_thistle: { id:"steam_thistle", name:"Chardon à vapeur" },
        copper_weed: { id:"copper_weed", name:"Herbe de cuivre" },
        soot_leaf: { id:"soot_leaf", name:"Feuille de suie" },
        glass_petal: { id:"glass_petal", name:"Pétale de verre" },
        ember_bloom: { id:"ember_bloom", name:"Fleur de braise" },
        frost_bloom: { id:"frost_bloom", name:"Fleur de givre" },
        aether_flower: { id:"aether_flower", name:"Fleur d’éther" },
        bloodthorn: { id:"bloodthorn", name:"Épine-sang" },
        shadow_blossom: { id:"shadow_blossom", name:"Fleur d’ombre" },
        gearvine: { id:"gearvine", name:"Liane à engrenages" },
        oil_grass: { id:"oil_grass", name:"Herbe huileuse" },
        fungus_cluster: { id:"fungus_cluster", name:"Touffe de champignons" },
        rotcap: { id:"rotcap", name:"Chapeau pourri" },
        whisper_reed: { id:"whisper_reed", name:"Roseau murmure" },
        thorn_stem: { id:"thorn_stem", name:"Tige épineuse" },
        ghost_lichen: { id:"ghost_lichen", name:"Lichen fantôme" },
        azure_moss: { id:"azure_moss", name:"Mousse azurée" },
        void_blossom: { id:"void_blossom", name:"Fleur du Néant" },
        toxic_spore: { id:"toxic_spore", name:"Spore toxique" },

        // Parties de bêtes & organique (25)
        beast_blood: { id:"beast_blood", name:"Sang de bête" },
        raw_meat: { id:"raw_meat", name:"Viande crue" },
        bone_shard: { id:"bone_shard", name:"Éclat d’os" },
        tough_hide: { id:"tough_hide", name:"Peau épaisse" },
        chitin_plate: { id:"chitin_plate", name:"Plaque de chitine" },
        acid_gland: { id:"acid_gland", name:"Glande acide" },
        monster_eye: { id:"monster_eye", name:"Œil de monstre" },
        sharp_fang: { id:"sharp_fang", name:"Croc acéré" },
        beast_claw: { id:"beast_claw", name:"Griffe de bête" },
        sinew_bundle: { id:"sinew_bundle", name:"Faisceau de tendons" },
        abyssal_scale: { id:"abyssal_scale", name:"Écaille abyssale" },
        feather_cluster: { id:"feather_cluster", name:"Touffe de plumes" },
        black_ichor: { id:"black_ichor", name:"Ichor noir" },
        sticky_web: { id:"sticky_web", name:"Toile collante" },
        horn_fragment: { id:"horn_fragment", name:"Fragment de corne" },
        squid_ink: { id:"squid_ink", name:"Encre de calmar" },
        glow_slime: { id:"glow_slime", name:"Gelée luminescente" },
        shell_fragment: { id:"shell_fragment", name:"Fragment de coquille" },
        corrupted_marrow: { id:"corrupted_marrow", name:"Moelle corrompue" },
        tendon_cord: { id:"tendon_cord", name:"Cordon de tendon" },
        beast_heart: { id:"beast_heart", name:"Cœur de bête" },
        stinger: { id:"stinger", name:"Dard venimeux" },
        fish_oil: { id:"fish_oil", name:"Huile de poisson" },
        smoked_meat: { id:"smoked_meat", name:"Viande fumée" },
        beast_fur: { id:"beast_fur", name:"Fourrure de bête" },

        // Minerais & minéraux (25)
        iron_ore: { id:"iron_ore", name:"Minerai de fer" },
        copper_ore: { id:"copper_ore", name:"Minerai de cuivre" },
        coal_chunk: { id:"coal_chunk", name:"Morceau de charbon" },
        crystal_shard: { id:"crystal_shard", name:"Éclat de cristal" },
        mythril_ore: { id:"mythril_ore", name:"Minerai de mythril" },
        darkstone: { id:"darkstone", name:"Pierre sombre" },
        amber_nugget: { id:"amber_nugget", name:"Nugget d’ambre" },
        sulfur_rock: { id:"sulfur_rock", name:"Roche sulfureuse" },
        salt_cluster: { id:"salt_cluster", name:"Amas de sel" },
        gold_flake: { id:"gold_flake", name:"Paillette d’or" },
        silver_ore: { id:"silver_ore", name:"Minerai d’argent" },
        lead_chunk: { id:"lead_chunk", name:"Bloc de plomb" },
        quartz_fragment: { id:"quartz_fragment", name:"Fragment de quartz" },
        obsidian_shard: { id:"obsidian_shard", name:"Éclat d’obsidienne" },
        radioactive_ore: { id:"radioactive_ore", name:"Minerai radioactif" },
        slag_piece: { id:"slag_piece", name:"Morceau de laitier" },
        rust_powder: { id:"rust_powder", name:"Poudre de rouille" },
        gunpowder: { id:"gunpowder", name:"Poudre noire" },
        sand_pouch: { id:"sand_pouch", name:"Bourse de sable" },
        clay_lump: { id:"clay_lump", name:"Motte d’argile" },
        gemstone_dust: { id:"gemstone_dust", name:"Poussière de gemme" },
        aether_crystal: { id:"aether_crystal", name:"Cristal d’éther" },
        magnetite: { id:"magnetite", name:"Magnétite" },
        volcanic_rock: { id:"volcanic_rock", name:"Roche volcanique" },
        fossil_fragment: { id:"fossil_fragment", name:"Fragment de fossile" },

        // Composants mécaniques & steampunk (25)
        gear_fragment: { id:"gear_fragment", name:"Fragment d'engrenage" },
        copper_wire: { id:"copper_wire", name:"Fil de cuivre" },
        broken_spring: { id:"broken_spring", name:"Ressort brisé" },
        steam_valve: { id:"steam_valve", name:"Valve à vapeur" },
        pressure_gauge: { id:"pressure_gauge", name:"Manomètre" },
        bronze_gear: { id:"bronze_gear", name:"Engrenage en bronze" },
        steel_plating: { id:"steel_plating", name:"Plaque d’acier" },
        leather_strap: { id:"leather_strap", name:"Lanière de cuir" },
        clockwork_core: { id:"clockwork_core", name:"Cœur d’horlogerie" },
        energy_cell: { id:"energy_cell", name:"Cellule d’énergie" },
        pipe_segment: { id:"pipe_segment", name:"Segment de tuyau" },
        bolts_box: { id:"bolts_box", name:"Boîte de boulons" },
        lubricant_oil: { id:"lubricant_oil", name:"Huile lubrifiante" },
        glass_tube: { id:"glass_tube", name:"Tube en verre" },
        tesla_coil: { id:"tesla_coil", name:"Bobine Tesla" },
        rusted_cog: { id:"rusted_cog", name:"Roue dentée rouillée" },
        boiler_core: { id:"boiler_core", name:"Noyau de chaudière" },
        servo_motor: { id:"servo_motor", name:"Servomoteur" },
        circuit_board: { id:"circuit_board", name:"Carte de circuits" },
        gearbox: { id:"gearbox", name:"Boîte d’engrenages" },
        insulation_cloth: { id:"insulation_cloth", name:"Tissu isolant" },
        flux_capacitor: { id:"flux_capacitor", name:"Condensateur de flux" },
        vent_fan: { id:"vent_fan", name:"Ventilateur de ventilation" },
        smoke_stack: { id:"smoke_stack", name:"Cheminée industrielle" },
        rivets_pack: { id:"rivets_pack", name:"Paquet de rivets" },

        // Ressources occultes & arcaniques (25)
        cursed_bone: { id:"cursed_bone", name:"Os maudit" },
        shadow_essence: { id:"shadow_essence", name:"Essence d’ombre" },
        soul_fragment: { id:"soul_fragment", name:"Fragment d’âme" },
        eldritch_ink: { id:"eldritch_ink", name:"Encre indicible" },
        ancient_relic: { id:"ancient_relic", name:"Relique ancienne" },
        blood_crystal: { id:"blood_crystal", name:"Cristal de sang" },
        void_sand: { id:"void_sand", name:"Sable du Néant" },
        spirit_thread: { id:"spirit_thread", name:"Fil spirituel" },
        mana_drop: { id:"mana_drop", name:"Goutte de mana" },
        hex_talisman: { id:"hex_talisman", name:"Talisman de malédiction" },
        dark_feather: { id:"dark_feather", name:"Plume sombre" },
        dream_dust: { id:"dream_dust", name:"Poussière de rêves" },
        memory_shard: { id:"memory_shard", name:"Éclat de mémoire" },
        astral_shard: { id:"astral_shard", name:"Éclat astral" },
        abyssal_pearl: { id:"abyssal_pearl", name:"Perle abyssale" },
        phantom_veil: { id:"phantom_veil", name:"Voile fantôme" },
        runestone: { id:"runestone", name:"Pierre runique" },
        ether_vapor: { id:"ether_vapor", name:"Vapeur d’éther" },
        spectral_chain: { id:"spectral_chain", name:"Chaîne spectrale" },
        black_candle: { id:"black_candle", name:"Bougie noire" },
        bone_charm: { id:"bone_charm", name:"Grigri d’os" },
        demon_horn: { id:"demon_horn", name:"Corne de démon" },
        angel_tears: { id:"angel_tears", name:"Larmes d’ange" },
        moonstone: { id:"moonstone", name:"Pierre de lune" },
        sunstone: { id:"sunstone", name:"Pierre de soleil" },

        // Nourriture & cuisine (25)
        root_veg: { id:"root_veg", name:"Légume-racine" },
        grain_sack: { id:"grain_sack", name:"Sac de grains" },
        dried_fruit: { id:"dried_fruit", name:"Fruits séchés" },
        spice_mix: { id:"spice_mix", name:"Mélange d’épices" },
        salted_fish: { id:"salted_fish", name:"Poisson salé" },
        hard_cheese: { id:"hard_cheese", name:"Fromage dur" },
        wild_berries: { id:"wild_berries", name:"Baies sauvages" },
        honeycomb: { id:"honeycomb", name:"Rayon de miel" },
        cave_milk: { id:"cave_milk", name:"Lait de grotte" },
        stale_bread: { id:"stale_bread", name:"Pain rassis" },
        sugar_crystal: { id:"sugar_crystal", name:"Cristal de sucre" },
        cocoa_bean: { id:"cocoa_bean", name:"Fève de cacao" },
        tea_leaf: { id:"tea_leaf", name:"Feuille de thé" },
        coffee_bean: { id:"coffee_bean", name:"Grain de café" },
        herb_bundle: { id:"herb_bundle", name:"Bouquet d’herbes" },
        canned_ration: { id:"canned_ration", name:"Ration en conserve" },
        dried_mushroom: { id:"dried_mushroom", name:"Champignon séché" },
        pickled_veg: { id:"pickled_veg", name:"Légumes marinés" },
        smoked_fish: { id:"smoked_fish", name:"Poisson fumé" },
        exotic_spice: { id:"exotic_spice", name:"Épice exotique" },
        sweet_syrup: { id:"sweet_syrup", name:"Sirop sucré" },
        glow_honey: { id:"glow_honey", name:"Miel lumineux" },
        abyssal_crab_meat: { id:"abyssal_crab_meat", name:"Chair de crabe abyssal" },
        noodle_brick: { id:"noodle_brick", name:"Bloc de nouilles" },
        fermented_root: { id:"fermented_root", name:"Racine fermentée" },

        // Ressources marines & abyssales (25)
        coral_fragment: { id:"coral_fragment", name:"Fragment de corail" },
        kelp_strip: { id:"kelp_strip", name:"Lanière de varech" },
        barnacle_cluster: { id:"barnacle_cluster", name:"Amas de bernacles" },
        deepsea_salt: { id:"deepsea_salt", name:"Sel des grands fonds" },
        black_coral: { id:"black_coral", name:"Corail noir" },
        glow_algae: { id:"glow_algae", name:"Algue luminescente" },
        shipwreck_wood: { id:"shipwreck_wood", name:"Bois d’épave" },
        rusted_chain: { id:"rusted_chain", name:"Chaîne rouillée" },
        waterlogged_crate: { id:"waterlogged_crate", name:"Caisse imbibée d’eau" },
        sea_glass: { id:"sea_glass", name:"Verre de mer" },
        ancient_coin: { id:"ancient_coin", name:"Pièce ancienne" },
        storm_essence: { id:"storm_essence", name:"Essence de tempête" },
        tidestone: { id:"tidestone", name:"Pierre des marées" },
        bubble_sac: { id:"bubble_sac", name:"Sac à bulles" },
        leviathan_bone: { id:"leviathan_bone", name:"Os de Léviathan" },
        abyssal_ink: { id:"abyssal_ink", name:"Encre abyssale" },
        tangleweed: { id:"tangleweed", name:"Herbe-entrelacs" },
        driftwood: { id:"driftwood", name:"Bois flotté" },
        siren_scale: { id:"siren_scale", name:"Écaille de sirène" },
        sea_shell: { id:"sea_shell", name:"Coquillage de mer" },
        ocean_pearl: { id:"ocean_pearl", name:"Perle de l’océan" },
        pressure_orb: { id:"pressure_orb", name:"Orbe de pression" },
        flooded_scroll: { id:"flooded_scroll", name:"Parchemin détrempé" },
        kelp_spore: { id:"kelp_spore", name:"Spore de varech" },
        sea_clay: { id:"sea_clay", name:"Argile marine" },

        // Divers & curiosités (25)
        forgotten_key: { id:"forgotten_key", name:"Clé oubliée" },
        broken_compass: { id:"broken_compass", name:"Boussole cassée" },
        ancient_map: { id:"ancient_map", name:"Carte ancienne" },
        lost_diary: { id:"lost_diary", name:"Journal perdu" },
        clockwork_heart: { id:"clockwork_heart", name:"Cœur mécanique" },
        music_box_cylinder: { id:"music_box_cylinder", name:"Cylindre de boîte à musique" },
        war_medal: { id:"war_medal", name:"Médaille de guerre" },
        sealed_letter: { id:"sealed_letter", name:"Lettre scellée" },
        rusted_token: { id:"rusted_token", name:"Jeton rouillé" },
        guild_seal: { id:"guild_seal", name:"Sceau de guilde" },
        train_ticket: { id:"train_ticket", name:"Billet de train" },
        factory_pass: { id:"factory_pass", name:"Badge d’usine" },
        prototype_core: { id:"prototype_core", name:"Noyau de prototype" },
        encrypted_chip: { id:"encrypted_chip", name:"Puce chiffrée" },
        navigator_lens: { id:"navigator_lens", name:"Lentille de navigateur" },
        smoke_bomb: { id:"smoke_bomb", name:"Bombe fumigène" },
        flare_rod: { id:"flare_rod", name:"Bâton de fusée éclairante" },
        signal_whistle: { id:"signal_whistle", name:"Sifflet de signal" },
        mirror_shard: { id:"mirror_shard", name:"Éclat de miroir" },
        paint_vial: { id:"paint_vial", name:"Fiole de peinture" },
        fine_thread: { id:"fine_thread", name:"Fil fin" },
        silk_scrap: { id:"silk_scrap", name:"Chute de soie" },
        leather_patch: { id:"leather_patch", name:"Pièce de cuir" },
        ink_bottle: { id:"ink_bottle", name:"Bouteille d’encre" },
        charcoal_stick: { id:"charcoal_stick", name:"Bâton de charbon" }
    };


    // Recettes d'artisanat (items / potions)
    const CRAFT_RECIPES = [
        {
            id:"craft_small_potion",
            name:"Potion de soin (x1)",
            category:"craft",
            requires:{herb:2, beast_blood:1},
            result:"small_potion",
            minLevel:1
        },
        {
            id:"craft_medium_potion",
            name:"Potion moyenne (x1)",
            category:"craft",
            requires:{herb:3, beast_blood:2, mushroom:1},
            result:"medium_potion",
            minLevel:3
        },
        {
            id:"craft_large_potion",
            name:"Grande potion (x1)",
            category:"craft",
            requires:{herb:5, beast_blood:3, glow_cap:1},
            result:"large_potion",
            minLevel:5
        },
        {
            id:"craft_stamina_elixir",
            name:"Élixir d'endurance (x1)",
            category:"craft",
            requires:{herb:2, root_veg:1, beast_blood:1},
            result:"stamina_elixir",
            minLevel:3
        },
        {
            id:"craft_mana_potion",
            name:"Potion de mana (x1)",
            category:"craft",
            requires:{herb:2, aether_crystal:1, mana_drop:1},
            result:"mana_potion",
            minLevel:2
        },
        {
            id:"craft_greater_mana_potion",
            name:"Grande potion de mana (x1)",
            category:"craft",
            requires:{herb:3, aether_crystal:2, mana_drop:2},
            result:"greater_mana_potion",
            minLevel:4
        },
        {
            id:"craft_superior_mana_potion",
            name:"Potion de mana supérieure (x1)",
            category:"craft",
            requires:{herb:4, aether_crystal:3, mana_drop:3},
            result:"superior_mana_potion",
            minLevel:6
        },
        {
            id:"craft_regen_potion",
            name:"Potion de régénération (x1)",
            category:"craft",
            requires:{herb:3, glow_cap:1, beast_blood:1},
            result:"regen_potion",
            minLevel:3
        },
        {
            id:"craft_major_regen_potion",
            name:"Potion de régénération majeure (x1)",
            category:"craft",
            requires:{herb:4, glow_cap:2, beast_blood:2},
            result:"major_regen_potion",
            minLevel:6
        },
        {
            id:"craft_antidote",
            name:"Antidote (x1)",
            category:"craft",
            requires:{herb:2, toxic_spore:1},
            result:"antidote",
            minLevel:2
        },
        {
            id:"craft_strong_antidote",
            name:"Antidote puissant (x1)",
            category:"craft",
            requires:{herb:3, toxic_spore:2, beast_blood:1},
            result:"strong_antidote",
            minLevel:4
        },
        {
            id:"craft_fire_res_potion",
            name:"Potion de résistance au feu (x1)",
            category:"craft",
            requires:{ember_bloom:2, coal_chunk:1, herb:1},
            result:"fire_res_potion",
            minLevel:4
        },
        {
            id:"craft_frost_res_potion",
            name:"Potion de résistance au givre (x1)",
            category:"craft",
            requires:{frost_bloom:2, crystal_shard:1, herb:1},
            result:"frost_res_potion",
            minLevel:4
        },
        {
            id:"craft_shock_res_potion",
            name:"Potion de résistance au choc (x1)",
            category:"craft",
            requires:{tesla_coil:1, copper_wire:2, herb:2},
            result:"shock_res_potion",
            minLevel:5
        },
        {
            id:"craft_stone_skin_potion",
            name:"Potion de peau de pierre (x1)",
            category:"craft",
            requires:{darkstone:2, clay_lump:1, herb:2},
            result:"stone_skin_potion",
            minLevel:5
        },
        {
            id:"craft_berserk_elixir",
            name:"Élixir berserk (x1)",
            category:"craft",
            requires:{beast_blood:3, sharp_fang:2, herb:1},
            result:"berserk_elixir",
            minLevel:6
        },
        {
            id:"craft_focus_elixir",
            name:"Élixir de concentration (x1)",
            category:"craft",
            requires:{tea_leaf:2, dream_dust:1, crystal_shard:1},
            result:"focus_elixir",
            minLevel:4
        },
        {
            id:"craft_agility_tonic",
            name:"Toniques d’agilité (x1)",
            category:"craft",
            requires:{emerald_ring:0, herb:2, beast_claw:1, oil_grass:1},
            result:"agility_tonic",
            minLevel:4
        },
        {
            id:"craft_intellect_tonic",
            name:"Tonique d’intellect (x1)",
            category:"craft",
            requires:{sapphire_ring:0, aether_crystal:1, mana_drop:1, tea_leaf:1},
            result:"intellect_tonic",
            minLevel:4
        },
        {
            id:"craft_luck_tonic",
            name:"Tonique de chance (x1)",
            category:"craft",
            requires:{lucky_charm:0, moonstone:1, dream_dust:1},
            result:"luck_tonic",
            minLevel:5
        },
        {
            id:"craft_abyssal_potion",
            name:"Potion abyssale (x1)",
            category:"craft",
            requires:{black_ichor:2, abyssal_pearl:1, shadow_essence:1},
            result:"abyssal_potion",
            minLevel:7
        },
        {
            id:"craft_shadow_draught",
            name:"Décoction des ombres (x1)",
            category:"craft",
            requires:{shadow_essence:2, ghost_lichen:1, toxic_spore:1},
            result:"shadow_draught",
            minLevel:6
        },
        {
            id:"craft_aether_potion",
            name:"Potion d’éther (x1)",
            category:"craft",
            requires:{aether_crystal:2, mana_drop:2, astral_shard:1},
            result:"aether_potion",
            minLevel:7
        },
        {
            id:"craft_steam_tonic",
            name:"Tonique vapeur (x1)",
            category:"craft",
            requires:{steam_valve:1, lubricant_oil:1, herb:2},
            result:"steam_tonic",
            minLevel:3
        },
        {
            id:"craft_gear_oil_flask",
            name:"Flasque d’huile mécanique (x1)",
            category:"craft",
            requires:{lubricant_oil:2, gear_fragment:1},
            result:"gear_oil_flask",
            minLevel:2
        },
        {
            id:"craft_iron_skin_potion",
            name:"Potion de peau de fer (x1)",
            category:"craft",
            requires:{iron_ore:2, rust_powder:1, herb:2},
            result:"iron_skin_potion",
            minLevel:5
        },
        {
            id:"craft_haste_potion",
            name:"Potion de hâte (x1)",
            category:"craft",
            requires:{coffee_bean:2, gearvine:1, spirit_thread:1},
            result:"haste_potion",
            minLevel:5
        },
        {
            id:"craft_clarity_potion",
            name:"Potion de clarté (x1)",
            category:"craft",
            requires:{tea_leaf:2, crystal_shard:1, dream_dust:1},
            result:"clarity_potion",
            minLevel:4
        },
        {
            id:"craft_night_vision_potion",
            name:"Potion de vision nocturne (x1)",
            category:"craft",
            requires:{monster_eye:1, ghost_lichen:1, herb:2},
            result:"night_vision_potion",
            minLevel:5
        },
        {
            id:"craft_water_breathing_potion",
            name:"Potion de respiration aquatique (x1)",
            category:"craft",
            requires:{gill:0, kelp_strip:2, abyssal_ink:1, aether_crystal:1},
            result:"water_breathing_potion",
            minLevel:6
        },
        {
            id:"craft_stamina_tonic",
            name:"Tonique d’endurance (x1)",
            category:"craft",
            requires:{grain_sack:1, root_veg:1, herb:1},
            result:"stamina_tonic",
            minLevel:2
        },
        {
            id:"craft_blood_boost_vial",
            name:"Fiole de sang renforcé (x1)",
            category:"craft",
            requires:{beast_blood:3, bone_shard:1},
            result:"blood_boost_vial",
            minLevel:4
        },
        {
            id:"craft_resistance_elixir",
            name:"Élixir de résistance (x1)",
            category:"craft",
            requires:{darkstone:1, runestone:1, herb:3},
            result:"resistance_elixir",
            minLevel:6
        },
        {
            id:"craft_poison_coating",
            name:"Enduit de poison (x1)",
            category:"craft",
            requires:{toxic_spore:2, stinger:1, black_ichor:1},
            result:"poison_coating",
            minLevel:3
        },
        {
            id:"craft_explosive_flask",
            name:"Flasque explosive (x1)",
            category:"craft",
            requires:{gunpowder:2, coal_chunk:1, glass_tube:1},
            result:"explosive_flask",
            minLevel:4
        },
        {
            id:"craft_smoke_bomb_flask",
            name:"Flasque fumigène (x1)",
            category:"craft",
            requires:{smoke_bomb:1, charcoal_stick:1, glass_tube:1},
            result:"smoke_bomb_flask",
            minLevel:3
        },
        {
            id:"craft_corrosion_vial",
            name:"Fiole corrosive (x1)",
            category:"craft",
            requires:{acid_gland:2, sulfur_rock:1},
            result:"corrosion_vial",
            minLevel:5
        },
        {
            id:"craft_detox_tonic",
            name:"Tonique détoxifiant (x1)",
            category:"craft",
            requires:{herb:3, fermented_root:1, angel_tears:1},
            result:"detox_tonic",
            minLevel:5
        },
        {
            id:"craft_fortified_heart_elixir",
            name:"Élixir du cœur fortifié (x1)",
            category:"craft",
            requires:{beast_heart:1, blood_crystal:1, herb:3},
            result:"fortified_heart_elixir",
            minLevel:7
        },
        {
            id:"craft_overcharge_potion",
            name:"Potion de surcharge (x1)",
            category:"craft",
            requires:{flux_capacitor:1, energy_cell:2, aether_crystal:2},
            result:"overcharge_potion",
            minLevel:8
        }
    ];


    // Recettes de cuisine
    const COOKING_RECIPES = [
        {
            id:"cook_dried_meat",
            name:"Viande séchée (x1)",
            requires:{raw_meat:1, root_veg:1},
            result:"dried_meat",
            hunger:25,
            fatigue:-5,
            minLevel:1
        },
        {
            id:"cook_hearty_stew",
            name:"Ragoût roboratif (x1)",
            requires:{raw_meat:2, root_veg:2, mushroom:1},
            result:"hearty_stew",
            hunger:45,
            fatigue:-15,
            minLevel:3
        },
        {
            id:"cook_glow_soup",
            name:"Soupe de champis luisants (x1)",
            requires:{glow_cap:2, mushroom:1},
            result:"glow_mushroom_soup",
            hunger:30,
            fatigue:-10,
            minLevel:2
        },
        {
            id:"cook_spiced_meat",
            name:"Viande épicée fumée (x1)",
            requires:{raw_meat:2, herb:1},
            result:"spiced_meat",
            hunger:35,
            fatigue:-10,
            minLevel:2
        },
        {
            id:"cook_abyss_ration",
            name:"Ration abyssale (x1)",
            requires:{raw_meat:1, root_veg:1, glow_cap:1},
            result:"abyss_ration",
            hunger:30,
            fatigue:-20,
            minLevel:4
        },
        {
            id:"cook_traveler_ration",
            name:"Ration de voyageur (x1)",
            requires:{dried_fruit:1, grain_sack:1},
            result:"traveler_ration",
            hunger:20,
            fatigue:-5,
            minLevel:1
        },
        {
            id:"cook_grilled_fish",
            name:"Poisson grillé (x1)",
            requires:{salted_fish:1, herb:1},
            result:"grilled_fish",
            hunger:28,
            fatigue:-6,
            minLevel:1
        },
        {
            id:"cook_roasted_root_veg",
            name:"Racines rôties (x1)",
            requires:{root_veg:2, oil_grass:1},
            result:"roasted_root_veg",
            hunger:22,
            fatigue:-4,
            minLevel:1
        },
        {
            id:"cook_mushroom_skewer",
            name:"Brochette de champignons (x1)",
            requires:{mushroom:2, herb:1},
            result:"mushroom_skewer",
            hunger:24,
            fatigue:-6,
            minLevel:1
        },
        {
            id:"cook_glow_omelette",
            name:"Omelette luisante (x1)",
            requires:{glow_cap:1, mushroom:1, root_veg:1},
            result:"glow_omelette",
            hunger:32,
            fatigue:-8,
            minLevel:2
        },
        {
            id:"cook_honey_glazed_meat",
            name:"Viande au miel (x1)",
            requires:{raw_meat:2, honeycomb:1},
            result:"honey_glazed_meat",
            hunger:38,
            fatigue:-10,
            minLevel:2
        },
        {
            id:"cook_herb_bread",
            name:"Pain aux herbes (x1)",
            requires:{grain_sack:1, herb:1},
            result:"herb_bread",
            hunger:22,
            fatigue:-4,
            minLevel:1
        },
        {
            id:"cook_hearty_breakfast",
            name:"Petit-déjeuner roboratif (x1)",
            requires:{dried_meat:1, herb_bread:1, wild_berries:1},
            result:"hearty_breakfast",
            hunger:40,
            fatigue:-12,
            minLevel:3
        },
        {
            id:"cook_sailor_stew",
            name:"Ragoût de marin (x1)",
            requires:{salted_fish:1, root_veg:2},
            result:"sailor_stew",
            hunger:36,
            fatigue:-10,
            minLevel:2
        },
        {
            id:"cook_abyss_fish_stew",
            name:"Ragoût de poisson abyssal (x1)",
            requires:{abyssal_crab_meat:1, mushroom:1, root_veg:1},
            result:"abyss_fish_stew",
            hunger:42,
            fatigue:-18,
            minLevel:4
        },
        {
            id:"cook_steamed_veg_plate",
            name:"Assiette de légumes vapeur (x1)",
            requires:{root_veg:2, pickled_veg:1},
            result:"steamed_veg_plate",
            hunger:28,
            fatigue:-8,
            minLevel:2
        },
        {
            id:"cook_spiced_crab",
            name:"Crabe épicé (x1)",
            requires:{abyssal_crab_meat:1, spice_mix:1},
            result:"spiced_crab",
            hunger:34,
            fatigue:-10,
            minLevel:3
        },
        {
            id:"cook_smoked_sausage",
            name:"Saucisse fumée (x1)",
            requires:{raw_meat:2, smoked_meat:1},
            result:"smoked_sausage",
            hunger:38,
            fatigue:-8,
            minLevel:3
        },
        {
            id:"cook_black_stew",
            name:"Ragoût noir (x1)",
            requires:{raw_meat:1, black_ichor:1, mushroom:1},
            result:"black_stew",
            hunger:40,
            fatigue:-20,
            minLevel:5
        },
        {
            id:"cook_survival_biscuit",
            name:"Biscuit de survie (x1)",
            requires:{grain_sack:1, sugar_crystal:1},
            result:"survival_biscuit",
            hunger:18,
            fatigue:-3,
            minLevel:1
        },
        {
            id:"cook_sweet_berry_tart",
            name:"Tarte aux baies (x1)",
            requires:{wild_berries:2, sugar_crystal:1},
            result:"sweet_berry_tart",
            hunger:26,
            fatigue:-6,
            minLevel:2
        },
        {
            id:"cook_coffee_ration",
            name:"Ration de café (x1)",
            requires:{coffee_bean:1, sugar_crystal:1},
            result:"coffee_ration",
            hunger:5,
            fatigue:-18,
            minLevel:2
        },
        {
            id:"cook_strong_tea_cup",
            name:"Tasse de thé fort (x1)",
            requires:{tea_leaf:1, herb:1},
            result:"strong_tea_cup",
            hunger:3,
            fatigue:-15,
            minLevel:1
        },
        {
            id:"cook_energy_porridge",
            name:"Porridge énergétique (x1)",
            requires:{grain_sack:1, glow_honey:1},
            result:"energy_porridge",
            hunger:30,
            fatigue:-12,
            minLevel:2
        },
        {
            id:"cook_festival_platter",
            name:"Plateau de festival (x1)",
            requires:{dried_meat:1, herb_bread:1, sweet_berry_tart:1},
            result:"festival_platter",
            hunger:55,
            fatigue:-20,
            minLevel:5
        },
        {
            id:"cook_rice_bowl",
            name:"Bol de riz (x1)",
            requires:{grain_sack:1, root_veg:1},
            result:"rice_bowl",
            hunger:24,
            fatigue:-5,
            minLevel:1
        },
        {
            id:"cook_noodle_soup",
            name:"Soupe de nouilles (x1)",
            requires:{noodle_brick:1, mushroom:1},
            result:"noodle_soup",
            hunger:28,
            fatigue:-8,
            minLevel:2
        },
        {
            id:"cook_cheese_plate",
            name:"Assiette de fromage (x1)",
            requires:{hard_cheese:1, dried_fruit:1},
            result:"cheese_plate",
            hunger:20,
            fatigue:-5,
            minLevel:1
        },
        {
            id:"cook_field_sandwich",
            name:"Sandwich de terrain (x1)",
            requires:{herb_bread:1, dried_meat:1},
            result:"field_sandwich",
            hunger:28,
            fatigue:-8,
            minLevel:2
        },
        {
            id:"cook_hunter_ration",
            name:"Ration du chasseur (x1)",
            requires:{raw_meat:1, dried_fruit:1, herb:1},
            result:"hunter_ration",
            hunger:32,
            fatigue:-10,
            minLevel:3
        },
        {
            id:"cook_miner_lunch",
            name:"Repas du mineur (x1)",
            requires:{root_veg:2, hard_cheese:1},
            result:"miner_lunch",
            hunger:34,
            fatigue:-10,
            minLevel:3
        },
        {
            id:"cook_stew_of_roots",
            name:"Ragoût de racines (x1)",
            requires:{root_veg:3, mushroom:1},
            result:"stew_of_roots",
            hunger:36,
            fatigue:-9,
            minLevel:2
        },
        {
            id:"cook_stew_of_beasts",
            name:"Ragoût de bêtes (x1)",
            requires:{raw_meat:3, beast_blood:1},
            result:"stew_of_beasts",
            hunger:44,
            fatigue:-15,
            minLevel:4
        },
        {
            id:"cook_fried_mushrooms",
            name:"Champignons frits (x1)",
            requires:{mushroom:2, oil_grass:1},
            result:"fried_mushrooms",
            hunger:24,
            fatigue:-6,
            minLevel:1
        },
        {
            id:"cook_glow_salad",
            name:"Salade luisante (x1)",
            requires:{glow_cap:1, root_veg:1, wild_berries:1},
            result:"glow_salad",
            hunger:26,
            fatigue:-8,
            minLevel:2
        },
        {
            id:"cook_luxury_feast",
            name:"Festin luxueux (x1)",
            requires:{hearty_stew:1, cheese_plate:1, sweet_berry_tart:1},
            result:"luxury_feast",
            hunger:70,
            fatigue:-25,
            minLevel:6
        },
        {
            id:"cook_caravan_stew",
            name:"Ragoût de caravane (x1)",
            requires:{raw_meat:1, root_veg:1, grain_sack:1},
            result:"caravan_stew",
            hunger:38,
            fatigue:-12,
            minLevel:3
        },
        {
            id:"cook_salted_snack_mix",
            name:"Mélange salé (x1)",
            requires:{dried_fruit:1, nuts:0, salt_cluster:1},
            result:"salted_snack_mix",
            hunger:18,
            fatigue:-4,
            minLevel:1
        },
        {
            id:"cook_abyssal_dumplings",
            name:"Raviolis abyssaux (x1)",
            requires:{abyssal_crab_meat:1, noodle_brick:1},
            result:"abyssal_dumplings",
            hunger:40,
            fatigue:-18,
            minLevel:5
        },
        {
            id:"cook_steam_bun",
            name:"Brioche vapeur (x1)",
            requires:{grain_sack:1, glow_honey:1},
            result:"steam_bun",
            hunger:26,
            fatigue:-10,
            minLevel:2
        }
    ];

    const QUESTS = [

        // ---------- Nouvelles quêtes ----------

        {
            id:"q_f1_rustling_spriggan",
            name:"Spriggan de rouille",
            description:"Tuer 6 rats moussus dans les premiers couloirs.",
            goal:{type:"kill", monsterId:"f1_rustling_spriggan", amount:6},
            reward:{gold:55, exp:45},
            minFloor:2
        },
        {
            id:"q_gearling_sparks",
            name:"Étincelles incontrôlées",
            description:"Détruire 5 Étincelles engrenées.",
            goal:{type:"kill", monsterId:"f1_gearling_spark", amount:5},
            reward:{gold:50, exp:45},
            minFloor:1
        },
        {
            id:"q_gloom_nibblers",
            name:"Grignoteurs de pénombre",
            description:"Tuer 8 Grignoteurs de pénombre.",
            goal:{type:"kill", monsterId:"f1_gloom_nibbler", amount:8},
            reward:{gold:55, exp:50},
            minFloor:2
        },
        {
            id:"q_copper_gremlins",
            name:"Gremlins de cuivre",
            description:"Tuer 6 Gremlins de cuivre dans les conduites basses.",
            goal:{type:"kill", monsterId:"f2_copper_gremlin", amount:6},
            reward:{gold:60, exp:55},
            minFloor:2
        },
        {
            id:"q_glow_mites",
            name:"Mites luminescentes",
            description:"Rassembler la poussière de 7 Mites luminescentes.",
            goal:{type:"kill", monsterId:"f2_glow_mite", amount:7},
            reward:{gold:65, exp:60},
            minFloor:2
        },
        {
            id:"q_riveted_imps",
            name:"Lutins rivetés",
            description:"Tuer 6 Lutins rivetés afin de sécuriser un couloir.",
            goal:{type:"kill", monsterId:"f3_riveted_imp", amount:6},
            reward:{gold:70, exp:65},
            minFloor:3
        },
        {
            id:"q_oil_slicklings",
            name:"Nappes vivantes",
            description:"Éliminer 5 Nappes huileuses vivantes.",
            goal:{type:"kill", monsterId:"f3_oil_slickling", amount:5},
            reward:{gold:75, exp:70},
            minFloor:3
        },
        {
            id:"q_boiler_eyelings",
            name:"Yeux de chaudières",
            description:"Tuer 5 Œilletons de chaudière qui espionnent la guilde.",
            goal:{type:"kill", monsterId:"f4_boiler_eyeling", amount:5},
            reward:{gold:80, exp:75},
            minFloor:4
        },
        {
            id:"q_vent_crawlers",
            name:"Rampants des conduits",
            description:"Éliminer 6 Rampants des conduits.",
            goal:{type:"kill", monsterId:"f5_vent_crawler", amount:6},
            reward:{gold:90, exp:80},
            minFloor:5
        },
        {
            id:"q_phosphor_spores",
            name:"Spores phosphoriques",
            description:"Collecter 10 spores toxiques sur les Spores phosphoriques.",
            goal:{type:"collect", resourceId:"toxic_spore", amount:10},
            reward:{gold:95, exp:85},
            minFloor:5
        },

        // ----------- Quêtes mid (floors ~6–20) -----------

        {
            id:"q_flux_sprites",
            name:"Sprites de flux",
            description:"Tuer 5 Sprites de flux et ramener leurs condensateurs.",
            goal:{type:"kill", monsterId:"f6_flux_sprite", amount:5},
            reward:{gold:110, exp:95},
            minFloor:6
        },
        {
            id:"q_steam_bursters",
            name:"Éclateurs de vapeur",
            description:"Détruire 6 Éclateurs de vapeur dans les zones pressurisées.",
            goal:{type:"kill", monsterId:"f6_steam_burster", amount:6},
            reward:{gold:115, exp:100},
            minFloor:7
        },
        {
            id:"q_rust_bloom",
            name:"Jardin de rouille",
            description:"Tuer 6 Fleurs de rouille animées.",
            goal:{type:"kill", monsterId:"f7_rust_bloom_horror", amount:6},
            reward:{gold:120, exp:105},
            minFloor:7
        },
        {
            id:"q_screech_gearling",
            name:"Engrenelins hurleurs",
            description:"Faire taire 7 Engrenelins hurleurs.",
            goal:{type:"kill", monsterId:"f7_screech_gearling", amount:7},
            reward:{gold:125, exp:110},
            minFloor:7
        },
        {
            id:"q_bolt_cherubs",
            name:"Chérubins de boulons",
            description:"Tuer 5 Chérubins de boulons.",
            goal:{type:"kill", monsterId:"f8_bolt_cherub", amount:5},
            reward:{gold:130, exp:115},
            minFloor:8
        },
        {
            id:"q_forge_cinders",
            name:"Cendres de forge",
            description:"Éteindre 6 Cendres de forge animées.",
            goal:{type:"kill", monsterId:"f9_forge_cinderling", amount:6},
            reward:{gold:135, exp:120},
            minFloor:9
        },
        {
            id:"q_clank_shades",
            name:"Ombres cliquetantes",
            description:"Tuer 6 Ombres cliquetantes.",
            goal:{type:"kill", monsterId:"f9_clank_shade", amount:6},
            reward:{gold:140, exp:125},
            minFloor:9
        },
        {
            id:"q_iron_bloom_cores",
            name:"Cœurs de fleurs de fer",
            description:"Tuer 6 Cœurs de fleur de fer.",
            goal:{type:"kill", monsterId:"f10_iron_bloom_core", amount:6},
            reward:{gold:145, exp:130},
            minFloor:10
        },
        {
            id:"q_smoglings",
            name:"Fumigènes vivants",
            description:"Tuer 8 Fumigènes vivants et récupérer leurs spores.",
            goal:{type:"kill", monsterId:"f10_smogling", amount:8},
            reward:{gold:150, exp:135},
            minFloor:10
        },
        {
            id:"q_cog_ritualists",
            name:"Ritualistes engrenés",
            description:"Tuer 5 Ritualistes à engrenages.",
            goal:{type:"kill", monsterId:"f11_cog_ritualist", amount:5},
            reward:{gold:155, exp:140},
            minFloor:11
        },

        // ----------- Quêtes bosses early / mid -----------

        {
            id:"q_guardian5",
            name:"Premier Gardien",
            description:"Vaincre le Gardien des Câbles à l’étage 5.",
            goal:{type:"kill", monsterId:"boss_guardian5", amount:1},
            reward:{gold:160, exp:180},
            minFloor:5
        },
        {
            id:"q_choir10",
            name:"Harmonie des soupapes",
            description:"Vaincre le Chœur des Soupapes à l’étage 10.",
            goal:{type:"kill", monsterId:"boss_choir10", amount:1},
            reward:{gold:190, exp:210},
            minFloor:10
        },
        {
            id:"q_idol15",
            name:"Idole fongique",
            description:"Tuer l’Idole Fongique de l’Abîme à l’étage 15.",
            goal:{type:"kill", monsterId:"boss_idol15", amount:1},
            reward:{gold:210, exp:230},
            minFloor:15
        },
        {
            id:"q_core20",
            name:"Cœur fumant",
            description:"Vaincre le Cœur fumant de l’Abîme à l’étage 20.",
            goal:{type:"kill", monsterId:"boss_core20", amount:1},
            reward:{gold:250, exp:270},
            minFloor:20
        },

        // ----------- Quêtes mid floors 20–40 -----------

        {
            id:"q_chrono_gearspawn",
            name:"Germe chrono-engrené",
            description:"Tuer 7 Germes chrono-engrenés.",
            goal:{type:"kill", monsterId:"f21_chrono_gearspawn", amount:7},
            reward:{gold:220, exp:200},
            minFloor:21
        },
        {
            id:"q_void_spangle",
            name:"Éclats du Néant",
            description:"Dissiper 6 Éclats du Néant aux étages 21+.",
            goal:{type:"kill", monsterId:"f21_void_spangle", amount:6},
            reward:{gold:230, exp:210},
            minFloor:21
        },
        {
            id:"q_ironlit_zealots",
            name:"Zélotes ferreux",
            description:"Tuer 6 Zélotes ferreux pour calmer un culte local.",
            goal:{type:"kill", monsterId:"f23_ironlit_zealot", amount:6},
            reward:{gold:240, exp:220},
            minFloor:23
        },
        {
            id:"q_coal_vespers",
            name:"Vêpres de charbon",
            description:"Éteindre 7 Vêpres de charbon.",
            goal:{type:"kill", monsterId:"f24_coal_vesper", amount:7},
            reward:{gold:245, exp:225},
            minFloor:24
        },
        {
            id:"q_clank_archivists",
            name:"Archives cliquetantes",
            description:"Tuer 5 Archivistes cliquetants.",
            goal:{type:"kill", monsterId:"f25_clank_archivist", amount:5},
            reward:{gold:250, exp:230},
            minFloor:25
        },
        {
            id:"q_smoke_harbingers",
            name:"Hérauts des fumées",
            description:"Éliminer 7 Hérauts des fumées.",
            goal:{type:"kill", monsterId:"f26_smoke_harbinger", amount:7},
            reward:{gold:255, exp:235},
            minFloor:26
        },
        {
            id:"q_quartz_wardens",
            name:"Gardiens de quartz",
            description:"Tuer 6 Gardiens de quartz.",
            goal:{type:"kill", monsterId:"f27_quartz_warden", amount:6},
            reward:{gold:260, exp:240},
            minFloor:27
        },
        {
            id:"q_void_anthem",
            name:"Antienne du Néant",
            description:"Faire taire 5 Antiennes du Néant.",
            goal:{type:"kill", monsterId:"f28_void_anthem", amount:5},
            reward:{gold:265, exp:245},
            minFloor:28
        },
        {
            id:"q_pulse_revenants",
            name:"Revenants pulsars",
            description:"Tuer 7 Revenants pulsar.",
            goal:{type:"kill", monsterId:"f29_pulse_revenant", amount:7},
            reward:{gold:270, exp:250},
            minFloor:29
        },
        {
            id:"q_furnace_icon",
            name:"Icône fournaise",
            description:"Détruire 5 Icônes fournaise.",
            goal:{type:"kill", monsterId:"f30_furnace_icon", amount:5},
            reward:{gold:280, exp:260},
            minFloor:30
        },

        // ----------- Quêtes mid-high 31–60 -----------

        {
            id:"q_abyssal_halo",
            name:"Halos abyssaux",
            description:"Tuer 8 Halos abyssaux.",
            goal:{type:"kill", monsterId:"f31_abyssal_halo", amount:8},
            reward:{gold:290, exp:270},
            minFloor:31
        },
        {
            id:"q_cog_crusaders",
            name:"Croisés d’engrenages",
            description:"Tuer 7 Croisés d’engrenages.",
            goal:{type:"kill", monsterId:"f32_cog_crusader", amount:7},
            reward:{gold:300, exp:280},
            minFloor:32
        },
        {
            id:"q_void_absolvers",
            name:"Absolvants du Néant",
            description:"Éliminer 6 Absolvants du Néant.",
            goal:{type:"kill", monsterId:"f33_void_absolver", amount:6},
            reward:{gold:310, exp:290},
            minFloor:33
        },
        {
            id:"q_slag_prelates",
            name:"Prélats de laitier",
            description:"Tuer 7 Prélats de laitier.",
            goal:{type:"kill", monsterId:"f34_slag_prelate", amount:7},
            reward:{gold:320, exp:300},
            minFloor:34
        },
        {
            id:"q_abyssal_dominion",
            name:"Dominion abyssal",
            description:"Tuer 5 Dominions abyssaux.",
            goal:{type:"kill", monsterId:"f35_abyssal_dominion", amount:5},
            reward:{gold:330, exp:310},
            minFloor:35
        },
        {
            id:"q_blood_inquisitors",
            name:"Inquisiteurs de sang",
            description:"Tuer 6 Inquisiteurs de sang.",
            goal:{type:"kill", monsterId:"f36_blood_inquisitor", amount:6},
            reward:{gold:340, exp:320},
            minFloor:36
        },
        {
            id:"q_steam_legate",
            name:"Légat vapeur",
            description:"Vaincre 6 Légats vapeur.",
            goal:{type:"kill", monsterId:"f37_steam_legate", amount:6},
            reward:{gold:350, exp:330},
            minFloor:37
        },
        {
            id:"q_void_cathedral",
            name:"Cathédrale du Néant animée",
            description:"Détruire 4 Cathédrales du Néant animées.",
            goal:{type:"kill", monsterId:"f38_void_cathedral", amount:4},
            reward:{gold:365, exp:345},
            minFloor:38
        },
        {
            id:"q_slag_cardinals",
            name:"Cardinaux de laitier",
            description:"Tuer 6 Cardinaux de laitier.",
            goal:{type:"kill", monsterId:"f39_slag_cardinal", amount:6},
            reward:{gold:375, exp:355},
            minFloor:39
        },
        {
            id:"q_abyssal_cataclysm",
            name:"Cataclysme abyssal",
            description:"Vaincre 3 Cataclysmes abyssaux.",
            goal:{type:"kill", monsterId:"f40_abyssal_cataclysm", amount:3},
            reward:{gold:390, exp:370},
            minFloor:40
        },

        // ----------- Quêtes deep 61–80 -----------

        {
            id:"q_gear_seraphs",
            name:"Séraphins d'engrenages",
            description:"Tuer 5 Séraphins d'engrenages des étages 61+.",
            goal:{type:"kill", monsterId:"f61_gear_seraph", amount:5},
            reward:{gold:420, exp:400},
            minFloor:61
        },
        {
            id:"q_void_reapers",
            name:"Faucheurs du Néant",
            description:"Éliminer 4 Faucheurs du Néant.",
            goal:{type:"kill", monsterId:"f61_void_reaper", amount:4},
            reward:{gold:430, exp:410},
            minFloor:61
        },
        {
            id:"q_iron_leviathans",
            name:"Léviathans de fer",
            description:"Tuer 3 Léviathans de fer.",
            goal:{type:"kill", monsterId:"f62_iron_leviathan", amount:3},
            reward:{gold:440, exp:420},
            minFloor:62
        },
        {
            id:"q_cable_cherubs",
            name:"Chérubins câblés",
            description:"Tuer 6 Chérubins câblés.",
            goal:{type:"kill", monsterId:"f63_cable_cherub", amount:6},
            reward:{gold:450, exp:430},
            minFloor:63
        },
        {
            id:"q_cable_hydra",
            name:"Hydre de câbles noirs",
            description:"Vaincre 2 Hydres de câbles noirs.",
            goal:{type:"kill", monsterId:"f65_cable_hydra", amount:2},
            reward:{gold:480, exp:460},
            minFloor:65
        },
        {
            id:"q_rust_titans",
            name:"Titans rouillés",
            description:"Tuer 3 Titans rouillés.",
            goal:{type:"kill", monsterId:"f68_rust_titan", amount:3},
            reward:{gold:500, exp:480},
            minFloor:68
        },
        {
            id:"q_steam_leviathan",
            name:"Léviathan de vapeur",
            description:"Vaincre 1 Léviathan de vapeur.",
            goal:{type:"kill", monsterId:"f69_steam_leviathan", amount:1},
            reward:{gold:520, exp:500},
            minFloor:69
        },
        {
            id:"q_singularity_beast",
            name:"Bête singularité",
            description:"Tuer 1 Bête singularité.",
            goal:{type:"kill", monsterId:"f70_singularity_beast", amount:1},
            reward:{gold:540, exp:520},
            minFloor:70
        },
        {
            id:"q_void_leviathan",
            name:"Léviathan du vide",
            description:"Vaincre 1 Léviathan du vide.",
            goal:{type:"kill", monsterId:"f75_void_leviathan", amount:1},
            reward:{gold:560, exp:540},
            minFloor:75
        },
        {
            id:"q_clockwork_sphinx",
            name:"Énigme de la Sphinx mécanique",
            description:"Vaincre une Sphinx mécanique au moins une fois.",
            goal:{type:"kill", monsterId:"f80_clockwork_sphinx", amount:1},
            reward:{gold:580, exp:560},
            minFloor:80
        },

        // ----------- Quêtes ultra-deep 81–100 -----------

        {
            id:"q_fractal_beast",
            name:"Bête fractale",
            description:"Tuer 2 Bêtes fractales.",
            goal:{type:"kill", monsterId:"f82_fractal_beast", amount:2},
            reward:{gold:600, exp:580},
            minFloor:82
        },
        {
            id:"q_abyssal_orchestra",
            name:"Orchestre abyssal",
            description:"Faire taire 2 Orchestres abyssaux.",
            goal:{type:"kill", monsterId:"f83_abyssal_orchestra", amount:2},
            reward:{gold:620, exp:600},
            minFloor:83
        },
        {
            id:"q_void_choir",
            name:"Chœur du vide",
            description:"Dissoudre 3 Chœurs du vide.",
            goal:{type:"kill", monsterId:"f84_void_choir", amount:3},
            reward:{gold:640, exp:620},
            minFloor:84
        },
        {
            id:"q_leviathan_spire",
            name:"Flèche-léviathan",
            description:"Vaincre 1 Flèche-léviathan.",
            goal:{type:"kill", monsterId:"f85_leviathan_spire", amount:1},
            reward:{gold:660, exp:640},
            minFloor:85
        },
        {
            id:"q_fractal_leviathan",
            name:"Léviathan fractal",
            description:"Tuer 1 Léviathan fractal.",
            goal:{type:"kill", monsterId:"f87_fractal_leviathan", amount:1},
            reward:{gold:680, exp:660},
            minFloor:87
        },
        {
            id:"q_void_titan",
            name:"Titan du vide",
            description:"Vaincre 1 Titan du vide.",
            goal:{type:"kill", monsterId:"f88_void_titan", amount:1},
            reward:{gold:700, exp:680},
            minFloor:88
        },
        {
            id:"q_null_crown",
            name:"Couronne du Néant",
            description:"Détruire 1 Couronne du Néant.",
            goal:{type:"kill", monsterId:"f89_null_crown", amount:1},
            reward:{gold:720, exp:700},
            minFloor:89
        },
        {
            id:"q_leviathan_core",
            name:"Cœur-léviathan",
            description:"Vaincre 1 Cœur-léviathan.",
            goal:{type:"kill", monsterId:"f90_leviathan_core", amount:1},
            reward:{gold:740, exp:720},
            minFloor:90
        },
        {
            id:"q_core_mnemon",
            name:"Mnémôn du Noyau",
            description:"Tuer 1 Mnémôn du Noyau.",
            goal:{type:"kill", monsterId:"f92_core_mnemon", amount:1},
            reward:{gold:760, exp:740},
            minFloor:92
        },
        {
            id:"q_null_singularity",
            name:"Singularité nulle",
            description:"Détruire la Singularité nulle une fois.",
            goal:{type:"kill", monsterId:"f99_null_singularity", amount:1},
            reward:{gold:800, exp:800},
            minFloor:99
        },
        {
            id:"q_mushroom_stew",
            name:"Ragoût de champis",
            description:"Ramasser 6 champignons phosphorescents pour l’aubergiste.",
            goal:{type:"collect", resourceId:"mushroom", amount:6},
            reward:{gold:65, exp:55},
            minFloor:3
        },
        {
            id:"q_meat_stock",
            name:"Réserves de viande",
            description:"Collecter 8 morceaux de viande crue pour le fumoir.",
            goal:{type:"collect", resourceId:"raw_meat", amount:8},
            reward:{gold:80, exp:70},
            minFloor:5
        },
        {
            id:"q_root_veg_soup",
            name:"Soupe de racines",
            description:"Apporter 7 légumes-racines à la cuisinière.",
            goal:{type:"collect", resourceId:"root_veg", amount:7},
            reward:{gold:75, exp:65},
            minFloor:5
        },

        {
            id:"q_double_gears",
            name:"Engrenages en vrac",
            description:"Recueillir 10 fragments d’engrenage.",
            goal:{type:"collect", resourceId:"gear_fragment", amount:10},
            reward:{gold:130, exp:110},
            minFloor:12
        },
        {
            id:"q_glow_crystals",
            name:"Cristaux lumineux",
            description:"Ramener 8 chapeaux lumineux trouvés sur des cristaux vrombissants.",
            goal:{type:"collect", resourceId:"glow_cap", amount:8},
            reward:{gold:135, exp:120},
            minFloor:14
        },

        {
            id:"q_blood_stock",
            name:"Stock de sang",
            description:"Collecter 12 fioles de sang de bête pour les alchimistes.",
            goal:{type:"collect", resourceId:"beast_blood", amount:12},
            reward:{gold:190, exp:170},
            minFloor:20
        },
        {
            id:"q_village_rations",
            name:"Rations pour le village",
            description:"Amener 10 morceaux de viande crue et 10 légumes-racines.",
            goal:{type:"collect", resourceId:"raw_meat", amount:10}, // tu peux splitter en deux si tu gères plusieurs ressources
            reward:{gold:210, exp:190},
            minFloor:20
        },
        {
            id:"q_luminous_broth",
            name:"Bouillon phosphorescent",
            description:"Rassembler 10 champignons phosphorescents.",
            goal:{type:"collect", resourceId:"mushroom", amount:10},
            reward:{gold:205, exp:185},
            minFloor:18
        },

        {
            id:"q_gear_hunter",
            name:"Chasseur d’engrenages",
            description:"Accumuler 25 fragments d'engrenage en une seule expédition.",
            goal:{type:"collect", resourceId:"gear_fragment", amount:25},
            reward:{gold:280, exp:260},
            minFloor:24
        },
        {
            id:"q_alchemist_glow",
            name:"Lumière en flacon",
            description:"Collecter 15 chapeaux lumineux pour un alchimiste fou.",
            goal:{type:"collect", resourceId:"glow_cap", amount:15},
            reward:{gold:290, exp:270},
            minFloor:26
        },

        {
            id:"q_blood_for_forge",
            name:"Refroidissement sanguin",
            description:"Amener 18 fioles de sang de bête à un forgeron expérimental.",
            goal:{type:"collect", resourceId:"beast_blood", amount:18},
            reward:{gold:350, exp:330},
            minFloor:34
        },
        {
            id:"q_ration_contract",
            name:"Contrat de rations",
            description:"Collecter 20 viandes crues et 15 légumes-racines.",
            goal:{type:"collect", resourceId:"raw_meat", amount:20},
            reward:{gold:380, exp:360},
            minFloor:36
        },

        {
            id:"q_experimental_brew",
            name:"Brassage expérimental",
            description:"Collecter 12 champignons phosphorescents et 12 chapeaux lumineux.",
            goal:{type:"collect", resourceId:"mushroom", amount:12},
            reward:{gold:410, exp:390},
            minFloor:38
        },
        {
            id:"q_meat_for_surface",
            name:"Cargaison pour la Surface",
            description:"Ramener 25 morceaux de viande crue.",
            goal:{type:"collect", resourceId:"raw_meat", amount:25},
            reward:{gold:450, exp:420},
            minFloor:44
        },

        {
            id:"q_deep_crystals",
            name:"Cristaux profonds",
            description:"Collecter 20 chapeaux lumineux.",
            goal:{type:"collect", resourceId:"glow_cap", amount:20},
            reward:{gold:520, exp:490},
            minFloor:56
        },
        {
            id:"q_blood_sea",
            name:"Mer de sang",
            description:"Rassembler 25 fioles de sang de bête.",
            goal:{type:"collect", resourceId:"beast_blood", amount:25},
            reward:{gold:540, exp:510},
            minFloor:58
        },
        {
            id:"q_fragment_hoarder",
            name:"Collectionneur d’engrenages",
            description:"Posséder au moins 35 fragments d’engrenage à la fois.",
            goal:{type:"collect", resourceId:"gear_fragment", amount:35},
            reward:{gold:560, exp:530},
            minFloor:60
        },

        {
            id:"q_core_blood",
            name:"Sang pour le Noyau",
            description:"Collecter 30 fioles de sang de bête dans les profondeurs.",
            goal:{type:"collect", resourceId:"beast_blood", amount:30},
            reward:{gold:640, exp:610},
            minFloor:68
        },
        {
            id:"q_final_meat_supply",
            name:"Dernier approvisionnement",
            description:"Ramener 40 viandes crues pour une caravane de la Surface.",
            goal:{type:"collect", resourceId:"raw_meat", amount:40},
            reward:{gold:680, exp:650},
            minFloor:70
        },
        {
            id:"q_silent_lights",
            name:"Lumières silencieuses",
            description:"Collecter 30 chapeaux lumineux dans les Profondeurs silencieuses.",
            goal:{type:"collect", resourceId:"glow_cap", amount:30},
            reward:{gold:700, exp:670},
            minFloor:72
        },
        {
            id:"q_final_gear_push",
            name:"Dernière commande d’engrenages",
            description:"Rassembler 50 fragments d'engrenage pour une machine inconnue.",
            goal:{type:"collect", resourceId:"gear_fragment", amount:50},
            reward:{gold:750, exp:720},
            minFloor:75
        },



    {
            id:"q_collect_gears",
            name:"Engrenages perdus",
            description:"Récupérer 3 fragments d'engrenage.",
            goal:{type:"collect", resourceId:"gear_fragment", amount:3},
            reward:{gold:50, exp:40},
            minFloor:4
        },
        {
            id:"q_glow_caps",
            name:"Récolte lumineuse",
            description:"Apporter 4 chapeaux lumineux à la guilde.",
            goal:{type:"collect", resourceId:"glow_cap", amount:4},
            reward:{gold:60, exp:55},
            minFloor:6
        },
        {
            id:"q_beast_blood",
            name:"Sang pour les alambics",
            description:"Récupérer 5 fioles de sang de bête.",
            goal:{type:"collect", resourceId:"beast_blood", amount:5},
            reward:{gold:75, exp:80},
            minFloor:10
        }
    ];

    const VILLAGE_FLOORS = [10, 20, 35, 50, 60, 75, 90];

    // 300 monstres (3 par étage, 100 étages)
    const ALL_MONSTERS = [
        // Floor 1
        { id:"f1_rustling_spriggan", name:"Spriggan de rouille", hp:12, str:3, dex:3, loot:["herb","rusty_sword"] },
        { id:"f1_gearling_spark", name:"Étincelle engrenée", hp:11, str:3, dex:4, loot:["gear_fragment","small_potion"] },
        { id:"f1_gloom_nibbler", name:"Grignoteur de pénombre", hp:10, str:2, dex:4, loot:["mushroom"] },

        // Floor 2
        { id:"f2_copper_gremlin", name:"Gremlin de cuivre", hp:13, str:3, dex:4, loot:["copper_ore","rusty_sword"] },
        { id:"f2_pipe_whisperer", name:"Chuchoteur des conduites", hp:12, str:3, dex:4, loot:["gear_fragment","herb"] },
        { id:"f2_glow_mite", name:"Mite luminescente", hp:11, str:2, dex:5, loot:["glow_cap","small_potion"] },

        // Floor 3
        { id:"f3_riveted_imp", name:"Lutin riveté", hp:14, str:4, dex:4, loot:["gear_fragment","leather_helm"] },
        { id:"f3_fume_skitter", name:"Coureuse de fumée", hp:13, str:3, dex:5, loot:["mushroom","herb"] },
        { id:"f3_oil_slickling", name:"Nappe huileuse vivante", hp:12, str:3, dex:4, loot:["lubricant_oil"] },

        // Floor 4
        { id:"f4_boiler_eyeling", name:"Œilleton de chaudière", hp:15, str:4, dex:4, loot:["pressure_gauge","small_potion"] },
        { id:"f4_sprocket_pixie", name:"Pixie à pignons", hp:14, str:3, dex:5, loot:["gear_fragment","herb"] },
        { id:"f4_gloom_bud", name:"Bourgeon obscur", hp:13, str:3, dex:4, loot:["herb","mushroom"] },

        // Floor 5
        { id:"f5_vent_crawler", name:"Rampant des conduits", hp:16, str:4, dex:5, loot:["gear_fragment","rusty_shield"] },
        { id:"f5_cog_pouncer", name:"Bondisseur d'engrenages", hp:15, str:5, dex:4, loot:["gear_fragment","rusty_sword"] },
        { id:"f5_phosphor_spore", name:"Spore phosphorique", hp:14, str:3, dex:5, loot:["toxic_spore","mushroom"] },

        // Floor 6
        { id:"f6_amber_gnawer", name:"Rongeur d’ambre spectral", hp:17, str:5, dex:4, loot:["amber_nugget","small_potion"] },
        { id:"f6_flux_sprite", name:"Sprite de flux", hp:16, str:4, dex:5, loot:["flux_capacitor","mana_potion"] },
        { id:"f6_steam_burster", name:"Éclateur de vapeur", hp:16, str:5, dex:4, loot:["steam_valve","gear_fragment"] },

        // Floor 7
        { id:"f7_rust_bloom_horror", name:"Fleur de rouille animée", hp:18, str:5, dex:4, loot:["rust_moss","herb"] },
        { id:"f7_screech_gearling", name:"Engrenelin hurleur", hp:17, str:5, dex:5, loot:["gear_fragment","leather_chest"] },
        { id:"f7_cavern_glimmer", name:"Lueur cavernicole", hp:16, str:4, dex:5, loot:["glow_cap","small_potion"] },

        // Floor 8
        { id:"f8_bolt_cherub", name:"Chérubin de boulons", hp:19, str:6, dex:4, loot:["bolts_box","steel_sword"] },
        { id:"f8_ooze_circuit", name:"Circuit visqueux", hp:18, str:5, dex:5, loot:["circuit_board","lubricant_oil"] },
        { id:"f8_mirth_mushling", name:"Champignon rieur", hp:17, str:4, dex:5, loot:["mushroom","glow_cap"] },

        // Floor 9
        { id:"f9_forge_cinderling", name:"Cendre de forge animée", hp:20, str:6, dex:4, loot:["coal_chunk","ember_bloom"] },
        { id:"f9_clank_shade", name:"Ombre cliquetante", hp:19, str:6, dex:5, loot:["gear_fragment","shadow_essence"] },
        { id:"f9_sputter_wisp", name:"Folie de fumée clignotante", hp:18, str:5, dex:5, loot:["herb","small_potion"] },

        // Floor 10
        { id:"f10_iron_bloom_core", name:"Cœur de fleur de fer", hp:22, str:7, dex:4, loot:["iron_ore","herb"] },
        { id:"f10_piston_harrier", name:"Harceleur à pistons", hp:21, str:7, dex:5, loot:["gear_fragment","steel_sword"] },
        { id:"f10_smogling", name:"Fumigène vivant", hp:20, str:6, dex:5, loot:["toxic_spore","antidote"] },

        // Floor 11
        { id:"f11_cog_ritualist", name:"Ritualiste à engrenages", hp:24, str:8, dex:4, loot:["gear_fragment","iron_ring"] },
        { id:"f11_ashen_marrow", name:"Moelle cendrée animée", hp:23, str:7, dex:5, loot:["corrupted_marrow","beast_blood"] },
        { id:"f11_siphon_spark", name:"Étincelle siphonneuse", hp:22, str:7, dex:5, loot:["mana_potion","aether_crystal"] },

        // Floor 12
        { id:"f12_torque_phantom", name:"Fantôme de couple", hp:25, str:8, dex:5, loot:["gear_fragment","steam_tonic"] },
        { id:"f12_shudder_stalk", name:"Tige frémissante", hp:24, str:7, dex:6, loot:["herb","toxic_spore"] },
        { id:"f12_glass_echo", name:"Écho de verre", hp:23, str:7, dex:5, loot:["glass_tube","crystal_shard"] },

        // Floor 13
        { id:"f13_brazier_warden", name:"Gardien brasero", hp:27, str:9, dex:5, loot:["coal_chunk","stamina_elixir"] },
        { id:"f13_chain_rattler", name:"Claquefers", hp:26, str:9, dex:5, loot:["rusted_chain","rusty_shield"] },
        { id:"f13_slag_crawler", name:"Rampe-laitier", hp:25, str:8, dex:6, loot:["slag_piece"] },

        // Floor 14
        { id:"f14_smog_prophet", name:"Prophète des fumées", hp:28, str:10, dex:5, loot:["shadow_essence","herb"] },
        { id:"f14_pressure_cherub", name:"Chérubin de pression", hp:27, str:9, dex:6, loot:["pressure_gauge","small_potion"] },
        { id:"f14_gear_siphon", name:"Siphon d’engrenages", hp:26, str:9, dex:6, loot:["gear_fragment","steel_plating"] },

        // Floor 15
        { id:"f15_glow_rot_thing", name:"Chose pourrie luminescente", hp:29, str:10, dex:5, loot:["rotcap","glow_cap"] },
        { id:"f15_coil_evoker", name:"Évocateur à bobines", hp:29, str:10, dex:6, loot:["tesla_coil","mana_potion"] },
        { id:"f15_blood_sigil", name:"Sceau de sang vivant", hp:28, str:9, dex:6, loot:["beast_blood","small_potion"] },

        // Floor 16
        { id:"f16_boiler_revenant", name:"Revenant de chaudière", hp:31, str:11, dex:5, loot:["boiler_core","gear_fragment"] },
        { id:"f16_hissing_ventgeist", name:"Spectre des soupapes", hp:30, str:11, dex:6, loot:["pressure_gauge","smoke_bomb_flask"] },
        { id:"f16_cinder_loom", name:"Tisseur de cendres", hp:29, str:10, dex:6, loot:["coal_chunk","herb"] },

        // Floor 17
        { id:"f17_chroma_sporeling", name:"Spore chromatique", hp:32, str:11, dex:6, loot:["toxic_spore","mushroom"] },
        { id:"f17_gear_oracle", name:"Oracle des engrenages", hp:32, str:12, dex:5, loot:["gear_fragment","ruby_ring"] },
        { id:"f17_rattle_core", name:"Noyau cliquetant", hp:31, str:11, dex:6, loot:["steel_plating","medium_potion"] },

        // Floor 18
        { id:"f18_ember_choir", name:"Chœur de braises", hp:34, str:12, dex:5, loot:["ember_bloom","fire_res_potion"] },
        { id:"f18_blind_mnemonic", name:"Rémanence aveugle", hp:33, str:12, dex:6, loot:["memory_shard","mana_potion"] },
        { id:"f18_oil_feaster", name:"Dévoreur d’huile", hp:32, str:11, dex:6, loot:["lubricant_oil","gear_fragment"] },

        // Floor 19
        { id:"f19_quartz_scuttler", name:"Raseur de quartz", hp:35, str:13, dex:6, loot:["quartz_fragment","crystal_shard"] },
        { id:"f19_bone_chorus", name:"Chœur d’os", hp:34, str:13, dex:6, loot:["bone_shard","cursed_bone"] },
        { id:"f19_cog_halo", name:"Halo engrené", hp:33, str:12, dex:7, loot:["gear_fragment","iron_ring"] },

        // Floor 20
        { id:"f20_furnace_arbiter", name:"Arbitre de fournaise", hp:37, str:14, dex:6, loot:["coal_chunk"] },
        { id:"f20_sputter_savant", name:"Savant crachoteur", hp:36, str:13, dex:7, loot:["flux_capacitor","mana_potion"] },
        { id:"f20_deep_glow_kernel", name:"Noyau luisant profond", hp:35, str:13, dex:7, loot:["glow_cap","medium_potion"] },

        // ------- MID FLOORS 21–40 (plus costauds, plus abyssaux/clockwork) -------

        // Floor 21
        { id:"f21_chrono_gearspawn", name:"Germe chrono-engrené", hp:39, str:15, dex:6, loot:["gear_fragment","aether_crystal"] },
        { id:"f21_void_spangle", name:"Éclat du Néant", hp:38, str:14, dex:7, loot:["void_sand","shadow_essence"] },
        { id:"f21_hollow_resonant", name:"Résonant creux", hp:37, str:14, dex:7, loot:["crystal_shard","mana_potion"] },

        // Floor 22
        { id:"f22_cog_psalmist", name:"Psalmiste d’engrenages", hp:40, str:15, dex:7, loot:["gear_fragment","emerald_ring"] },
        { id:"f22_ember_marrow", name:"Moelle de braise", hp:39, str:15, dex:7, loot:["blood_crystal","coal_chunk"] },
        { id:"f22_smearling", name:"Tache vivante", hp:38, str:14, dex:8, loot:["oil_grass","antidote"] },

        // Floor 23
        { id:"f23_ironlit_zealot", name:"Zélote ferreux", hp:42, str:16, dex:7, loot:["iron_helm","iron_chest"] },
        { id:"f23_smolder_wisp", name:"Feu follet enfumé", hp:41, str:15, dex:8, loot:["ember_bloom","fire_res_potion"] },
        { id:"f23_gearbound_shade", name:"Ombre liée aux engrenages", hp:40, str:15, dex:8, loot:["gear_fragment","shadow_dagger"] },

        // Floor 24
        { id:"f24_coal_vesper", name:"Vêpre de charbon", hp:43, str:17, dex:7, loot:["coal_chunk","stamina_tonic"] },
        { id:"f24_pressure_anthem", name:"Hymne de pression", hp:42, str:16, dex:8, loot:["pressure_gauge","stone_skin_potion"] },
        { id:"f24_aether_murmur", name:"Murmure d’éther", hp:41, str:16, dex:8, loot:["aether_crystal","aether_potion"] },

        // Floor 25
        { id:"f25_clank_archivist", name:"Archiviste cliquetant", hp:45, str:18, dex:7, loot:["ancient_map","memory_shard"] },
        { id:"f25_flux_occultist", name:"Occultiste de flux", hp:44, str:17, dex:8, loot:["flux_capacitor","overcharge_potion"] },
        { id:"f25_bone_dial", name:"Cadran d’os", hp:43, str:17, dex:8, loot:["bone_charm","cursed_bone"] },

        // Floor 26
        { id:"f26_smoke_harbinger", name:"Héraut des fumées", hp:46, str:18, dex:8, loot:["smoke_bomb_flask","shadow_essence"] },
        { id:"f26_cog_herald", name:"Héraut d’engrenages", hp:45, str:18, dex:8, loot:["gear_fragment","steel_buckler"] },
        { id:"f26_slag_vision", name:"Vision de laitier", hp:44, str:17, dex:9, loot:["slag_piece"] },

        // Floor 27
        { id:"f27_cinder_abbot", name:"Abbé de braise", hp:48, str:19, dex:8, loot:["ember_bloom","hearty_stew"] },
        { id:"f27_quartz_warden", name:"Gardien de quartz", hp:47, str:19, dex:8, loot:["quartz_fragment","crystal_shard"] },
        { id:"f27_ether_phantom", name:"Fantôme d’éther", hp:46, str:18, dex:9, loot:["ether_vapor","mana_potion"] },

        // Floor 28
        { id:"f28_ironlit_chorister", name:"Choriste ferrugineux", hp:49, str:20, dex:8, loot:["iron_ore","iron_ring"] },
        { id:"f28_void_anthem", name:"Antienne du Néant", hp:48, str:19, dex:9, loot:["void_sand","shadow_draught"] },
        { id:"f28_rivet_monk", name:"Moine à rivets", hp:47, str:19, dex:9, loot:["steel_plating","leather_helm"] },

        // Floor 29
        { id:"f29_pulse_revenant", name:"Revenant pulsar", hp:51, str:21, dex:8, loot:["crystal_shard","haste_potion"] },
        { id:"f29_smelted_prophet", name:"Prophète fondu", hp:50, str:20, dex:9, loot:["resistance_elixir"] },
        { id:"f29_gear_mandala", name:"Mandala d’engrenages", hp:49, str:20, dex:9, loot:["gear_fragment","emerald_ring"] },

        // Floor 30
        { id:"f30_furnace_icon", name:"Icône fournaise", hp:53, str:22, dex:8, loot:["coal_chunk","large_potion"] },
        { id:"f30_chrono_prelate", name:"Prélat chrono", hp:52, str:21, dex:9, loot:["aether_crystal","clarity_potion"] },
        { id:"f30_cog_sanctifier", name:"Sanctificateur engrené", hp:51, str:21, dex:9, loot:["gear_fragment","steel_sword"] },

        // ------- FLOORS 31–60 (plus démoniaques / abyssaux / mécaniques divins) -------

        // Floor 31
        { id:"f31_abyssal_halo", name:"Halo abyssal", hp:55, str:23, dex:9, loot:["shadow_essence","soul_fragment"] },
        { id:"f31_ironlit_vicar", name:"Vicaire ferreux", hp:54, str:23, dex:9, loot:["iron_helm","iron_chest"] },
        { id:"f31_gear_penitent", name:"Pénitent à engrenages", hp:53, str:22, dex:10, loot:["gear_fragment","stamina_elixir"] },

        // Floor 32
        { id:"f32_cog_crusader", name:"Croisé d’engrenages", hp:57, str:24, dex:9, loot:["steel_sword","steel_plating"] },
        { id:"f32_smoke_lector", name:"Lecteur des fumées", hp:56, str:24, dex:10, loot:["smoke_bomb_flask","herb"] },
        { id:"f32_ember_exegete", name:"Exégète de braise", hp:55, str:23, dex:10, loot:["ember_bloom","fire_res_potion"] },

        // Floor 33
        { id:"f33_void_absolver", name:"Absolvant du Néant", hp:59, str:25, dex:9, loot:["void_sand","abyssal_potion"] },
        { id:"f33_ether_beadle", name:"Bedeau d’éther", hp:58, str:24, dex:10, loot:["ether_vapor","aether_potion"] },
        { id:"f33_blood_lector", name:"Lecteur sanguin", hp:57, str:24, dex:10, loot:["blood_crystal","beast_blood"] },

        // Floor 34
        { id:"f34_slag_prelate", name:"Prélat de laitier", hp:60, str:26, dex:9, loot:["slag_piece","darkstone"] },
        { id:"f34_coil_incantor", name:"Incanteur de bobines", hp:60, str:25, dex:10, loot:["tesla_coil","shock_res_potion"] },
        { id:"f34_soul_cantor", name:"Chantre des âmes", hp:59, str:25, dex:10, loot:["soul_fragment","detox_tonic"] },

        // Floor 35
        { id:"f35_abyssal_dominion", name:"Dominion abyssal", hp:62, str:27, dex:10, loot:["shadow_essence","soul_fragment"] },
        { id:"f35_cog_adjudicator", name:"Adjuteur d’engrenages", hp:61, str:27, dex:10, loot:["gear_fragment","steel_buckler"] },
        { id:"f35_ether_censor", name:"Censeur d’éther", hp:60, str:26, dex:11, loot:["ether_vapor","mana_potion"] },

        // Floor 36
        { id:"f36_void_vindicator", name:"Vengeur du Néant", hp:64, str:28, dex:10, loot:["void_sand","overcharge_potion"] },
        { id:"f36_blood_inquisitor", name:"Inquisiteur de sang", hp:63, str:28, dex:11, loot:["blood_crystal","fortified_heart_elixir"] },
        { id:"f36_ironlit_marshall", name:"Maréchal fer-lumière", hp:62, str:27, dex:11, loot:["iron_chest","steel_plating"] },

        // Floor 37
        { id:"f37_steam_legate", name:"Légat vapeur", hp:66, str:29, dex:10, loot:["steam_tonic","gear_fragment"] },
        { id:"f37_cog_augur", name:"Augure d’engrenages", hp:65, str:29, dex:11, loot:["gear_fragment","ruby_ring"] },
        { id:"f37_abyssal_anointed", name:"Oint de l’abîme", hp:64, str:28, dex:11, loot:["shadow_essence","soul_fragment"] },

        // Floor 38
        { id:"f38_void_cathedral", name:"Cathédrale du Néant animée", hp:68, str:30, dex:10, loot:["void_sand","darkstone"] },
        { id:"f38_ether_pontiff", name:"Pontife d’éther", hp:67, str:30, dex:11, loot:["ether_vapor","aether_crystal"] },
        { id:"f38_gear_reliquary", name:"Reliquaire engrené", hp:66, str:29, dex:11, loot:["ancient_relic","gear_fragment"] },

        // Floor 39
        { id:"f39_slag_cardinal", name:"Cardinal de laitier", hp:70, str:31, dex:11, loot:["slag_piece","resistance_elixir"] },
        { id:"f39_coal_abbess", name:"Abbesse de charbon", hp:69, str:31, dex:11, loot:["coal_chunk","hearty_stew"] },
        { id:"f39_soul_censer", name:"Encensoir des âmes", hp:68, str:30, dex:12, loot:["soul_fragment","detox_tonic"] },

        // Floor 40
        { id:"f40_abyssal_cataclysm", name:"Cataclysme abyssal", hp:72, str:33, dex:11, loot:["shadow_essence","blood_crystal"] },
        { id:"f40_gear_throne", name:"Trône d’engrenages vivant", hp:71, str:32, dex:11, loot:["gear_fragment"] },
        { id:"f40_ether_crown", name:"Couronne d’éther vivante", hp:70, str:32, dex:12, loot:["aether_crystal","emerald_ring"] },

        // ------- FLOORS 41–60 (archanges mécaniques, avatars d’éther / néant) -------

        // Floor 41
        { id:"f41_cog_seraph", name:"Séraphin d’engrenages", hp:74, str:34, dex:11, loot:["gear_fragment","steel_sword"] },
        { id:"f41_void_seraph", name:"Séraphin du Néant", hp:73, str:34, dex:12, loot:["void_sand","abyssal_potion"] },
        { id:"f41_ether_seraph", name:"Séraphin d’éther", hp:72, str:33, dex:12, loot:["ether_vapor","aether_potion"] },

        // Floor 42
        { id:"f42_ironlit_cherub", name:"Chérubin fer-lumière", hp:76, str:35, dex:12, loot:["iron_helm","small_potion"] },
        { id:"f42_slag_archon", name:"Archonte de laitier", hp:75, str:35, dex:12, loot:["slag_piece","stone_skin_potion"] },
        { id:"f42_blood_archon", name:"Archonte sanguin", hp:74, str:34, dex:13, loot:["blood_crystal","fortified_heart_elixir"] },

        // Floor 43
        { id:"f43_abyssal_archon", name:"Archonte de l’abîme", hp:78, str:36, dex:12, loot:["shadow_essence","soul_fragment"] },
        { id:"f43_flux_archon", name:"Archonte de flux", hp:77, str:36, dex:13, loot:["flux_capacitor","overcharge_potion"] },
        { id:"f43_coil_archon", name:"Archonte de bobines", hp:76, str:35, dex:13, loot:["tesla_coil","shock_res_potion"] },

        // Floor 44
        { id:"f44_world_pulpit", name:"Chaire-monde animée", hp:80, str:37, dex:12, loot:["ancient_relic"] },
        { id:"f44_ether_dominion", name:"Dominion d’éther", hp:79, str:37, dex:13, loot:["ether_vapor","intellect_tonic"] },
        { id:"f44_cog_summit", name:"Sommet engrené", hp:78, str:36, dex:13, loot:["gear_fragment"] },

        // Floor 45
        { id:"f45_abyssal_conclave", name:"Conclave abyssal vivant", hp:82, str:39, dex:12, loot:["shadow_essence","blood_crystal"] },
        { id:"f45_void_conclave", name:"Conclave du Néant", hp:81, str:38, dex:13, loot:["void_sand","cursed_bone"] },
        { id:"f45_ether_conclave", name:"Conclave éthérique", hp:80, str:38, dex:13, loot:["ether_vapor","aether_crystal"] },

        // Floor 46
        { id:"f46_furnace_cherubim", name:"Chérubin de fournaise", hp:84, str:40, dex:12, loot:["coal_chunk","fire_res_potion"] },
        { id:"f46_slag_cherubim", name:"Chérubin de laitier", hp:83, str:39, dex:13, loot:["slag_piece","resistance_elixir"] },
        { id:"f46_cog_cherubim", name:"Chérubin d’engrenages", hp:82, str:39, dex:13, loot:["gear_fragment","steel_buckler"] },

        // Floor 47
        { id:"f47_abyssal_liturge", name:"Liturgie abyssale incarnée", hp:86, str:41, dex:13, loot:["shadow_essence","soul_fragment"] },
        { id:"f47_void_liturge", name:"Liturgie du Néant", hp:85, str:41, dex:13, loot:["void_sand","abyss_ration"] },
        { id:"f47_ether_liturge", name:"Liturgie d’éther", hp:84, str:40, dex:14, loot:["ether_vapor","stamina_elixir"] },

        // Floor 48
        { id:"f48_arc_hosanna", name:"Hosanna aux arcs", hp:88, str:42, dex:13, loot:["flux_capacitor","clarity_potion"] },
        { id:"f48_cog_chant", name:"Chant des rouages", hp:87, str:42, dex:14, loot:["gear_fragment","ruby_ring"] },
        { id:"f48_abyssal_hymn", name:"Hymne abyssal", hp:86, str:41, dex:14, loot:["shadow_essence","resistance_elixir"] },

        // Floor 49
        { id:"f49_world_litany", name:"Litanie du monde mécanique", hp:90, str:44, dex:13, loot:["ancient_relic","gear_fragment"] },
        { id:"f49_ether_litany", name:"Litanie d’éther", hp:89, str:43, dex:14, loot:["ether_vapor","aether_potion"] },
        { id:"f49_void_litany", name:"Litanie du Néant", hp:88, str:43, dex:14, loot:["void_sand","abyssal_potion"] },

        // Floor 50
        { id:"f50_gear_seraph_primus", name:"Séraphin engrené primus", hp:92, str:46, dex:14, loot:["gear_fragment"] },
        { id:"f50_abyssal_seraph_primus", name:"Séraphin abyssal primus", hp:91, str:45, dex:15, loot:["shadow_essence","blood_crystal"] },
        { id:"f50_ether_seraph_primus", name:"Séraphin d’éther primus", hp:90, str:45, dex:15, loot:["ether_vapor","aether_crystal"] },

        // Floor 51
        { id:"f51_ironlit_domine", name:"Domine fer-lumière", hp:94, str:47, dex:14, loot:["iron_chest","large_potion"] },
        { id:"f51_sludge_domine", name:"Domine boueux", hp:93, str:47, dex:15, loot:["slag_piece","detox_tonic"] },
        { id:"f51_soul_domine", name:"Domine des âmes", hp:92, str:46, dex:15, loot:["soul_fragment","resistance_elixir"] },

        // Floor 52
        { id:"f52_arc_legate_primus", name:"Légat primus des arcs", hp:96, str:48, dex:15, loot:["flux_capacitor","overcharge_potion"] },
        { id:"f52_world_legate_primus", name:"Légat primus du monde mécanique", hp:95, str:48, dex:15, loot:["gear_fragment","steel_plating"] },
        { id:"f52_void_legate_primus", name:"Légat primus du Néant", hp:94, str:47, dex:16, loot:["void_sand","abyssal_potion"] },

        // Floor 53
        { id:"f53_abyssal_metatron", name:"Métatron abyssal", hp:98, str:50, dex:15, loot:["shadow_essence","blood_crystal"] },
        { id:"f53_ether_metatron", name:"Métatron d’éther", hp:97, str:49, dex:16, loot:["ether_vapor","aether_crystal"] },
        { id:"f53_cog_metatron", name:"Métatron engrené", hp:96, str:49, dex:16, loot:["gear_fragment"] },

        // Floor 54
        { id:"f54_void_principality", name:"Principauté du Néant", hp:100, str:51, dex:15, loot:["void_sand","leviathan_bone"] },
        { id:"f54_abyssal_principality", name:"Principauté abyssale", hp:99, str:51, dex:16, loot:["shadow_essence","soul_fragment"] },
        { id:"f54_world_principality", name:"Principauté du monde mécanique", hp:98, str:50, dex:16, loot:[,"gear_fragment"] },

        // Floor 55
        { id:"f55_ironlit_throne", name:"Trône fer-lumière", hp:102, str:52, dex:16, loot:["iron_chest","large_potion"] },
        { id:"f55_ether_throne", name:"Trône d’éther", hp:101, str:52, dex:16, loot:["ether_vapor","intellect_tonic"] },
        { id:"f55_void_throne", name:"Trône du Néant", hp:100, str:51, dex:17, loot:["void_sand","abyss_ration"] },

        // Floor 56
        { id:"f56_abyssal_seraph_major", name:"Séraphin abyssal majeur", hp:104, str:53, dex:16, loot:["shadow_essence","blood_crystal"] },
        { id:"f56_cog_seraph_major", name:"Séraphin engrené majeur", hp:103, str:53, dex:17, loot:["gear_fragment","steel_buckler"] },
        { id:"f56_ether_seraph_major", name:"Séraphin d’éther majeur", hp:102, str:52, dex:17, loot:["ether_vapor","aether_potion"] },

        // Floor 57
        { id:"f57_arc_custodian", name:"Custode des arcs", hp:106, str:55, dex:16, loot:["flux_capacitor","clarity_potion"] },
        { id:"f57_world_custodian", name:"Custode du monde mécanique", hp:105, str:54, dex:17, loot:["gear_fragment"] },
        { id:"f57_shadow_custodian", name:"Custode d’ombre", hp:104, str:54, dex:17, loot:["shadow_essence","soul_fragment"] },

        // Floor 58
        { id:"f58_abyssal_grand_warden", name:"Grand gardien abyssal", hp:108, str:56, dex:17, loot:["blood_crystal"] },
        { id:"f58_void_grand_warden", name:"Grand gardien du Néant", hp:107, str:56, dex:17, loot:["void_sand","cursed_bone"] },
        { id:"f58_ether_grand_warden", name:"Grand gardien d’éther", hp:106, str:55, dex:18, loot:["ether_vapor","aether_crystal"] },

        // Floor 59
        { id:"f59_arc_supra_warlord", name:"Sur-seigneur de guerre des arcs", hp:110, str:58, dex:17, loot:["flux_capacitor","overcharge_potion"] },
        { id:"f59_world_supra_warlord", name:"Sur-seigneur de la machine-monde", hp:109, str:57, dex:18, loot:[] },
        { id:"f59_shadow_supra_warlord", name:"Sur-seigneur d’ombre", hp:108, str:57, dex:18, loot:["shadow_essence","abyssal_potion"] },

        // Floor 60
        { id:"f60_abyssal_pantokrator", name:"Pantokrator abyssal", hp:112, str:60, dex:18, loot:["shadow_essence","blood_crystal","fortified_heart_elixir"] },
        { id:"f60_void_pantokrator", name:"Pantokrator du Néant", hp:111, str:59, dex:18, loot:["void_sand","leviathan_bone","overcharge_potion"] },
        { id:"f60_world_pantokrator", name:"Pantokrator de la machine-monde", hp:110, str:59, dex:19, loot:["steel_sword"] },
        // Floor 61
        { id:"f61_gear_seraph", name:"Séraphin d'engrenages", hp:113, str:61, dex:19, loot:["gear_fragment","shadow_essence"] },
        { id:"f61_void_reaper", name:"Faucheur du Néant", hp:114, str:61, dex:19, loot:["void_sand","blood_crystal"] },
        { id:"f61_abyssal_savant", name:"Savant abyssal câblé", hp:112, str:60, dex:20, loot:["mind_relic","fortified_heart_elixir"] },

        // Floor 62
        { id:"f62_iron_leviathan", name:"Léviathan de fer", hp:115, str:62, dex:19, loot:["leviathan_bone","gear_fragment"] },
        { id:"f62_spine_colossus", name:"Colosse à colonne vertébrale", hp:117, str:63, dex:19, loot:["blood_crystal","abyss_ration"] },
        { id:"f62_void_organ", name:"Organe du vide chantant", hp:116, str:62, dex:20, loot:["void_sand","echoing_core"] },

        // Floor 63
        { id:"f63_cable_cherub", name:"Chérubin câblé", hp:118, str:63, dex:20, loot:["shadow_essence","glow_cap"] },
        { id:"f63_clockwork_behemoth", name:"Béhémoth à ressorts", hp:119, str:64, dex:20, loot:["gear_fragment","overcharge_potion"] },
        { id:"f63_blood_turbine", name:"Turbine sanguine", hp:117, str:63, dex:21, loot:["blood_crystal","steam_core"] },

        // Floor 64
        { id:"f64_abyssal_archivist", name:"Archiviste abyssal", hp:120, str:64, dex:20, loot:["mind_relic","void_sand"] },
        { id:"f64_copper_leviathan", name:"Léviathan de cuivre", hp:122, str:65, dex:20, loot:["leviathan_bone","gear_fragment"] },
        { id:"f64_null_stalker", name:"Traqueur du néant", hp:121, str:64, dex:21, loot:["shadow_essence","smoke_vial"] },

        // Floor 65
        { id:"f65_furnace_avatar", name:"Avatar du fourneau", hp:123, str:66, dex:21, loot:["blood_crystal","fortified_heart_elixir"] },
        { id:"f65_gear_throne", name:"Trône d'engrenages animé", hp:125, str:67, dex:21, loot:["gear_fragment","ancient_lens"] },
        { id:"f65_cable_hydra", name:"Hydre de câbles noirs", hp:124, str:66, dex:22, loot:["shadow_essence","void_sand","beast_blood"] },

        // Floor 66
        { id:"f66_pulse_colossus", name:"Colosse à pulsations", hp:126, str:67, dex:21, loot:["blood_crystal","gear_fragment"] },
        { id:"f66_etheric_serpent", name:"Serpent éthérique", hp:127, str:67, dex:22, loot:["void_sand","smoke_serum"] },
        { id:"f66_glass_leviathan", name:"Léviathan de verre", hp:128, str:68, dex:22, loot:["leviathan_bone","shadow_essence"] },

        // Floor 67
        { id:"f67_core_hound", name:"Molosse du Noyau", hp:129, str:68, dex:22, loot:["raw_meat","blood_crystal"] },
        { id:"f67_null_halo", name:"Halo du Néant", hp:130, str:69, dex:22, loot:["void_sand","mind_relic"] },
        { id:"f67_cable_seraph", name:"Séraphin de câbles", hp:131, str:69, dex:23, loot:["shadow_essence","gear_fragment"] },

        // Floor 68
        { id:"f68_rust_titan", name:"Titan rouillé", hp:132, str:70, dex:22, loot:["gear_fragment","leviathan_bone"] },
        { id:"f68_blood_orchestra", name:"Orchestre sanguin", hp:134, str:70, dex:23, loot:["blood_crystal","echoing_core"] },
        { id:"f68_void_harvester", name:"Moissonneur du vide", hp:133, str:71, dex:23, loot:["void_sand","shadow_essence"] },

        // Floor 69
        { id:"f69_fractal_golem", name:"Golem fractal", hp:135, str:71, dex:23, loot:["mind_relic","gear_fragment"] },
        { id:"f69_abyssal_reliquary", name:"Reliquaire abyssal", hp:137, str:72, dex:23, loot:["blood_crystal","shadow_essence"] },
        { id:"f69_steam_leviathan", name:"Léviathan de vapeur", hp:136, str:72, dex:24, loot:["leviathan_bone","overcharge_potion"] },

        // Floor 70
        { id:"f70_cable_chimera", name:"Chimère câblée", hp:138, str:73, dex:24, loot:["shadow_essence","gear_fragment"] },
        { id:"f70_core_choir", name:"Chœur du Noyau", hp:140, str:73, dex:24, loot:["blood_crystal","mind_relic"] },
        { id:"f70_singularity_beast", name:"Bête singularité", hp:139, str:74, dex:24, loot:["void_sand","leviathan_bone"] },

        // Floor 71
        { id:"f71_abyssal_arachnid", name:"Arachnide abyssal", hp:141, str:74, dex:24, loot:["shadow_essence","blood_crystal"] },
        { id:"f71_null_pilgrim", name:"Pèlerin du néant", hp:142, str:75, dex:25, loot:["void_sand","ancient_lens"] },
        { id:"f71_gear_prophet", name:"Prophète engrené", hp:143, str:75, dex:25, loot:["mind_relic","gear_fragment"] },

        // Floor 72
        { id:"f72_suture_colossus", name:"Colosse suturé", hp:144, str:76, dex:25, loot:["blood_crystal","raw_meat"] },
        { id:"f72_cable_leviathan", name:"Léviathan câblé", hp:146, str:76, dex:25, loot:["leviathan_bone","shadow_essence"] },
        { id:"f72_void_monolith", name:"Monolithe du vide", hp:145, str:77, dex:26, loot:["void_sand","echoing_core"] },

        // Floor 73
        { id:"f73_clockwork_drake", name:"Drake à ressort", hp:147, str:77, dex:26, loot:["gear_fragment","beast_blood"] },
        { id:"f73_blood_siren", name:"Sirène de sang", hp:148, str:78, dex:26, loot:["blood_crystal","mind_relic"] },
        { id:"f73_null_mirror", name:"Miroir du Néant", hp:149, str:78, dex:26, loot:["void_sand","shadow_essence"] },

        // Floor 74
        { id:"f74_abyssal_censer", name:"Encensoir abyssal", hp:150, str:79, dex:26, loot:["smoke_serum","shadow_essence"] },
        { id:"f74_gear_warlord", name:"Seigneur de guerre engrené", hp:152, str:80, dex:27, loot:["blood_crystal","steel_sword"] },
        { id:"f74_bone_engine", name:"Moteur d’os", hp:151, str:79, dex:27, loot:["leviathan_bone","gear_fragment"] },

        // Floor 75
        { id:"f75_void_leviathan", name:"Léviathan du vide", hp:153, str:80, dex:27, loot:["void_sand","leviathan_bone"] },
        { id:"f75_core_reactor", name:"Réacteur du Noyau", hp:155, str:81, dex:27, loot:["overcharge_potion","steam_core"] },
        { id:"f75_cable_angel", name:"Ange câblé", hp:154, str:81, dex:28, loot:["shadow_essence","mind_relic"] },

        // Floor 76
        { id:"f76_iron_psalmist", name:"Psalmiste de fer", hp:156, str:81, dex:28, loot:["blood_crystal","gear_fragment"] },
        { id:"f76_abyssal_organ", name:"Organe abyssal", hp:158, str:82, dex:28, loot:["shadow_essence","echoing_core"] },
        { id:"f76_null_serpent", name:"Serpent nul", hp:157, str:82, dex:28, loot:["void_sand","smoke_vial"] },

        // Floor 77
        { id:"f77_cable_minotaur", name:"Minotaure de câbles", hp:159, str:83, dex:28, loot:["gear_fragment","blood_crystal"] },
        { id:"f77_fractal_seraph", name:"Séraphin fractal", hp:161, str:83, dex:29, loot:["shadow_essence","mind_relic"] },
        { id:"f77_leviathan_engine", name:"Moteur-léviathan", hp:160, str:84, dex:29, loot:["leviathan_bone","overcharge_potion"] },

        // Floor 78
        { id:"f78_rust_cherub", name:"Chérubin rouillé", hp:162, str:84, dex:29, loot:["gear_fragment","shadow_essence"] },
        { id:"f78_core_rhapsody", name:"Rhapsodie du Noyau", hp:163, str:85, dex:29, loot:["blood_crystal","echoing_core"] },
        { id:"f78_void_pylon", name:"Pylône du vide", hp:164, str:85, dex:30, loot:["void_sand","ancient_lens"] },

        // Floor 79
        { id:"f79_cable_wyrm", name:"Vouivre câblée", hp:165, str:86, dex:30, loot:["leviathan_bone","shadow_essence"] },
        { id:"f79_blood_conductor", name:"Chef d’orchestre sanguin", hp:166, str:86, dex:30, loot:["blood_crystal","mind_relic"] },
        { id:"f79_null_convergence", name:"Convergence nulle", hp:167, str:87, dex:30, loot:["void_sand","gear_fragment"] },

        // Floor 80
        { id:"f80_clockwork_sphinx", name:"Sphinx mécanique", hp:168, str:87, dex:31, loot:["ancient_lens","mind_relic"] },
        { id:"f80_abyssal_cathedral", name:"Cathédrale abyssale vivante", hp:170, str:88, dex:31, loot:["shadow_essence","blood_crystal"] },
        { id:"f80_core_leviathan", name:"Léviathan du Noyau", hp:169, str:88, dex:31, loot:["leviathan_bone","overcharge_potion"] },

        // Floor 81
        { id:"f81_cable_revelator", name:"Révélateur câblé", hp:171, str:89, dex:31, loot:["shadow_essence","mind_relic"] },
        { id:"f81_void_cicada", name:"Cigale du vide", hp:172, str:89, dex:32, loot:["void_sand","echoing_core"] },
        { id:"f81_blood_engineer", name:"Ingénieur sanguin", hp:173, str:90, dex:32, loot:["blood_crystal","gear_fragment"] },

        // Floor 82
        { id:"f82_fractal_beast", name:"Bête fractale", hp:174, str:90, dex:32, loot:["mind_relic","shadow_essence"] },
        { id:"f82_cable_basilisk", name:"Basilic de câbles", hp:176, str:91, dex:32, loot:["leviathan_bone","smoke_serum"] },
        { id:"f82_null_censer", name:"Encensoir nul", hp:175, str:91, dex:33, loot:["void_sand","blood_crystal"] },

        // Floor 83
        { id:"f83_iron_apparition", name:"Apparition de fer", hp:177, str:92, dex:33, loot:["gear_fragment","shadow_essence"] },
        { id:"f83_abyssal_orchestra", name:"Orchestre abyssal", hp:178, str:92, dex:33, loot:["blood_crystal","echoing_core"] },
        { id:"f83_core_court", name:"Cour du Noyau", hp:179, str:93, dex:34, loot:["mind_relic","void_sand"] },

        // Floor 84
        { id:"f84_cable_colossus", name:"Colosse de câbles", hp:180, str:93, dex:34, loot:["gear_fragment","leviathan_bone"] },
        { id:"f84_void_choir", name:"Chœur du vide", hp:182, str:94, dex:34, loot:["void_sand","shadow_essence"] },
        { id:"f84_blood_tapestry", name:"Tapisserie de sang", hp:181, str:94, dex:34, loot:["blood_crystal","ancient_lens"] },

        // Floor 85
        { id:"f85_abyssal_icon", name:"Icône abyssale", hp:183, str:95, dex:35, loot:["shadow_essence","mind_relic"] },
        { id:"f85_null_pontiff", name:"Pontife du néant", hp:184, str:95, dex:35, loot:["void_sand","echoing_core"] },
        { id:"f85_leviathan_spire", name:"Flèche-léviathan", hp:185, str:96, dex:35, loot:["leviathan_bone","overcharge_potion"] },

        // Floor 86
        { id:"f86_cable_serpentking", name:"Roi-serpent câblé", hp:186, str:96, dex:35, loot:["shadow_essence","gear_fragment"] },
        { id:"f86_blood_sun", name:"Soleil de sang", hp:188, str:97, dex:36, loot:["blood_crystal","mind_relic"] },
        { id:"f86_void_wheel", name:"Roue du vide", hp:187, str:97, dex:36, loot:["void_sand","ancient_lens"] },

        // Floor 87
        { id:"f87_core_angel", name:"Ange du Noyau", hp:189, str:98, dex:36, loot:["shadow_essence","blood_crystal"] },
        { id:"f87_fractal_leviathan", name:"Léviathan fractal", hp:190, str:98, dex:36, loot:["leviathan_bone","echoing_core"] },
        { id:"f87_cable_domina", name:"Domina des câbles", hp:191, str:99, dex:37, loot:["gear_fragment","mind_relic"] },

        // Floor 88
        { id:"f88_void_titan", name:"Titan du vide", hp:192, str:99, dex:37, loot:["void_sand","overcharge_potion"] },
        { id:"f88_abyssal_scriptorium", name:"Scriptorium abyssal", hp:193, str:100, dex:37, loot:["shadow_essence","blood_crystal"] },
        { id:"f88_blood_equation", name:"Équation de sang", hp:194, str:100, dex:38, loot:["mind_relic","gear_fragment"] },

        // Floor 89
        { id:"f89_cable_pantheon", name:"Panthéon câblé", hp:195, str:101, dex:38, loot:["shadow_essence","leviathan_bone"] },
        { id:"f89_null_crown", name:"Couronne du Néant", hp:196, str:101, dex:38, loot:["void_sand","blood_crystal"] },
        { id:"f89_core_seraph", name:"Séraphin du Noyau", hp:197, str:102, dex:39, loot:["mind_relic","echoing_core"] },

        // Floor 90
        { id:"f90_abyssal_polyphony", name:"Polyphonie abyssale", hp:198, str:102, dex:39, loot:["shadow_essence","blood_crystal"] },
        { id:"f90_void_cathedral", name:"Cathédrale du vide", hp:199, str:103, dex:39, loot:["void_sand","ancient_lens"] },
        { id:"f90_leviathan_core", name:"Cœur-léviathan", hp:200, str:103, dex:40, loot:["leviathan_bone","overcharge_potion"] },

        // Floor 91
        { id:"f91_cable_oracle", name:"Oracle câblé", hp:201, str:104, dex:40, loot:["shadow_essence","mind_relic"] },
        { id:"f91_blood_ark", name:"Arche de sang", hp:202, str:104, dex:40, loot:["blood_crystal","gear_fragment"] },
        { id:"f91_null_pillar", name:"Pilier du Néant", hp:203, str:105, dex:41, loot:["void_sand","echoing_core"] },

        // Floor 92
        { id:"f92_core_mnemon", name:"Mnémôn du Noyau", hp:204, str:105, dex:41, loot:["mind_relic","shadow_essence"] },
        { id:"f92_abyssal_furnace", name:"Fourneau abyssal", hp:205, str:106, dex:41, loot:["blood_crystal","overcharge_potion"] },
        { id:"f92_fractal_pontiff", name:"Pontife fractal", hp:206, str:106, dex:41, loot:["void_sand","ancient_lens"] },

        // Floor 93
        { id:"f93_cable_empyrion", name:"Empyrée câblée", hp:207, str:107, dex:42, loot:["shadow_essence","mind_relic"] },
        { id:"f93_void_leviathan_prime", name:"Léviathan du vide primordial", hp:208, str:107, dex:42, loot:["leviathan_bone","void_sand"] },
        { id:"f93_blood_censer", name:"Encensoir de sang", hp:209, str:108, dex:42, loot:["blood_crystal","gear_fragment"] },

        // Floor 94
        { id:"f94_core_dominion", name:"Dominion du Noyau", hp:210, str:108, dex:43, loot:["mind_relic","echoing_core"] },
        { id:"f94_abyssal_trinity", name:"Trinité abyssale", hp:211, str:109, dex:43, loot:["shadow_essence","blood_crystal"] },
        { id:"f94_null_reliquary", name:"Reliquaire nul", hp:212, str:109, dex:43, loot:["void_sand","ancient_lens"] },

        // Floor 95
        { id:"f95_cable_majesty", name:"Majesté câblée", hp:213, str:110, dex:43, loot:["shadow_essence","leviathan_bone"] },
        { id:"f95_blood_mandala", name:"Mandala de sang", hp:214, str:110, dex:44, loot:["blood_crystal","mind_relic"] },
        { id:"f95_void_diadem", name:"Diadème du vide", hp:215, str:111, dex:44, loot:["void_sand","echoing_core"] },

        // Floor 96
        { id:"f96_core_pantokrator", name:"Pantokrator du Noyau", hp:216, str:111, dex:44, loot:["mind_relic","shadow_essence"] },
        { id:"f96_abyssal_constellation", name:"Constellation abyssale", hp:217, str:112, dex:45, loot:["blood_crystal","ancient_lens"] },
        { id:"f96_cable_seraph_prime", name:"Séraphin câblé primordial", hp:218, str:112, dex:45, loot:["shadow_essence","gear_fragment"] },

        // Floor 97
        { id:"f97_void_ark", name:"Arche du vide", hp:219, str:113, dex:45, loot:["void_sand","leviathan_bone"] },
        { id:"f97_blood_eclipse", name:"Éclipse de sang", hp:220, str:113, dex:45, loot:["blood_crystal","mind_relic"] },
        { id:"f97_core_cathedral", name:"Cathédrale du Noyau", hp:221, str:114, dex:46, loot:["echoing_core","overcharge_potion"] },

        // Floor 98
        { id:"f98_cable_empire", name:"Empire câblé", hp:222, str:114, dex:46, loot:["shadow_essence","gear_fragment"] },
        { id:"f98_abyssal_monad", name:"Monade abyssale", hp:223, str:115, dex:46, loot:["mind_relic","blood_crystal"] },
        { id:"f98_void_citadel", name:"Citadelle du vide", hp:224, str:115, dex:47, loot:["void_sand","ancient_lens"] },

        // Floor 99
        { id:"f99_core_throne", name:"Trône du Noyau", hp:225, str:116, dex:47, loot:["shadow_essence","mind_relic"] },
        { id:"f99_leviathan_crown", name:"Couronne-léviathan", hp:226, str:116, dex:47, loot:["leviathan_bone","blood_crystal"] },
        { id:"f99_null_singularity", name:"Singularité nulle", hp:227, str:117, dex:48, loot:["void_sand","echoing_core"] },

        // Floor 100
        { id:"f100_abyssal_totality", name:"Totalité abyssale", hp:230, str:120, dex:48, loot:["shadow_essence","blood_crystal","fortified_heart_elixir"] },
        { id:"f100_core_apex", name:"Apex du Noyau", hp:229, str:119, dex:48, loot:["echoing_core","overcharge_potion","leviathan_bone"] },
        { id:"f100_void_emperor", name:"Empereur du vide", hp:228, str:118, dex:49, loot:["void_sand","ancient_lens","steel_sword"] },

    ];

    function monstersForFloor(floor) {
        if (floor < 1) floor = 1;
        if (floor > 100) floor = 100;
        const startIndex = (floor - 1) * 3;
        return ALL_MONSTERS.slice(startIndex, startIndex + 3);
    }


    const BOSS_FLOORS = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

    function isBossFloor(floor) {
        return BOSS_FLOORS.includes(floor);
    }

    function bossForFloor(floor) {
        switch (floor) {
            case 5:
                return {
                    id:"boss_guardian5",
                    name:"Gardien des Câbles",
                    hp:90, str:10, dex:4,
                    loot:["gear_fragment","iron_ring","small_potion"]
                };
            case 10:
                return {
                    id:"boss_choir10",
                    name:"Chœur des Soupapes",
                    hp:100, str:11, dex:4,
                    loot:["steam_valve","leather_helm","small_potion"]
                };
            case 15:
                return {
                    id:"boss_idol15",
                    name:"Idole Fongique de l’Abîme",
                    hp:110, str:12, dex:4,
                    loot:["glow_cap","mushroom","medium_potion"]
                };
            case 20:
                return {
                    id:"boss_core20",
                    name:"Cœur fumant de l'Abysse",
                    hp:120, str:13, dex:5,
                    loot:["bronze_axe","medium_potion","coal_chunk"]
                };
            case 25:
                return {
                    id:"boss_oracle25",
                    name:"Oracle des Engrenages",
                    hp:130, str:14, dex:5,
                    loot:["gear_fragment","ruby_ring","clarity_potion"]
                };
            case 30:
                return {
                    id:"boss_overheat30",
                    name:"Titan de Surchauffe",
                    hp:140, str:15, dex:5,
                    loot:["warhammer","fire_res_potion","coal_chunk"]
                };
            case 35:
                return {
                    id:"boss_voidpriest35",
                    name:"Archiprêtre du Néant",
                    hp:150, str:16, dex:5,
                    loot:["void_sand","shadow_draught","iron_helm"]
                };
            case 40:
                return {
                    id:"boss_worldheart40",
                    name:"Cœur Clerical de la Machine-Monde",
                    hp:160, str:17, dex:6,
                    loot:["gear_fragment","steel_sword","aether_crystal"]
                };
            case 45:
                return {
                    id:"boss_boiler45",
                    name:"Juggernaut des Chaudières",
                    hp:170, str:18, dex:6,
                    loot:["steel_plating","iron_chest","stone_skin_potion"]
                };
            case 50:
                return {
                    id:"boss_colossus50",
                    name:"Colosse d'Engrenages",
                    hp:180, str:19, dex:6,
                    loot:["hunter_bow","iron_helm","gear_fragment","void_beacon"]
                };
            case 55:
                return {
                    id:"boss_rustseraph55",
                    name:"Séraphin de Rouille",
                    hp:190, str:20, dex:6,
                    loot:["rust_powder","resistance_elixir","void_beacon"]
                };
            case 60:
                return {
                    id:"boss_pantokrator60",
                    name:"Pantokrator de Vapeur",
                    hp:200, str:20, dex:7,
                    loot:["steam_tonic","overcharge_potion","void_beacon"]
                };
            case 65:
                return {
                    id:"boss_abyssjudge65",
                    name:"Juge Abyssal Engrené",
                    hp:210, str:21, dex:7,
                    loot:["shadow_essence","soul_fragment","abyssal_compass",]
                };
            case 70:
                return {
                    id:"boss_fluxenvoy70",
                    name:"Émissaire du Flux",
                    hp:220, str:21, dex:7,
                    loot:["flux_capacitor","mana_potion","greater_mana_potion","abyssal_compass",]
                };
            case 75:
                return {
                    id:"boss_gear_dragon75",
                    name:"Dragon Mécanique Couronné",
                    hp:230, str:22, dex:7,
                    loot:["steel_sword","large_potion","fire_res_potion","abyssal_compass",]
                };
            case 80:
                return {
                    id:"boss_voidavatar80",
                    name:"Avatar du Vide Tremblant",
                    hp:240, str:22, dex:8,
                    loot:["void_sand","abyssal_potion","resistance_elixir"]
                };
            case 85:
                return {
                    id:"boss_cosmic_core85",
                    name:"Gardien Cosmique du Noyau",
                    hp:250, str:23, dex:8,
                    loot:["aether_crystal","overcharge_potion"]
                };
            case 90:
                return {
                    id:"boss_gearfather90",
                    name:"Père des Engrenages",
                    hp:280, str:23, dex:8,
                    loot:["gear_fragment","emerald_ring","stamina_elixir"]
                };
            case 95:
                return {
                    id:"boss_abyss_apostle95",
                    name:"Apôtre de l’Abîme",
                    hp:370, str:24, dex:8,
                    loot:["shadow_essence","blood_crystal","abyss_ration"]
                };
            case 100:
            default:
                return {
                    id:"boss_core100",
                    name:"Noyau abyssal",
                    hp:480, str:40, dex:8,
                    loot:["iron_ring","medium_potion","raw_meat"]
                };
        }
    }


    const SHOP_POOLS = {
        // --- Surface : début de run, stuff de base ---
        surface: [
            // Armes simples
            "rusty_sword","spear","hunter_bow",
            // Défense
            "wooden_shield", "small_gear_bag",
            // Potions
            "small_potion","mana_potion",
            // Nourriture
            "traveler_ration","dried_meat","survival_biscuit","coffee_ration",
            // Accessoires
            "lucky_charm","iron_ring"
        ],

        // --- Shallow 1 : premier village (floor 10) ---
        village_shallow_1: [
            // Armes basiques
            "rusty_sword","spear","hunter_bow","oak_bow",
            // Défense légère
            "wooden_shield","leather_helm","leather_chest",
            // Potions & utilitaires
            "small_potion","medium_potion","mana_potion","antidote",
            // Nourriture / rations
            "traveler_ration","dried_meat","glow_mushroom_soup",
            "spiced_meat","coffee_ration","strong_tea_cup","survival_biscuit",
            // Accessoires
            "iron_ring","lucky_charm"
        ],

        // --- Shallow 2 : deuxième village (floor 20) ---
        village_shallow_2: [
            // Armes un peu meilleures
            "rusty_sword","spear","oak_bow","bronze_axe","hunter_bow",
            // Défense
            "wooden_shield","rusty_shield",
            "leather_helm","leather_chest","reinforced_pack",
            // Potions & buffs early
            "small_potion","medium_potion","mana_potion",
            "stamina_tonic","antidote",
            // Nourriture variée
            "traveler_ration","dried_meat","glow_mushroom_soup",
            "spiced_meat","hearty_stew","coffee_ration","sweet_berry_tart",
            // Accessoires bas niveau
            "iron_ring","lucky_charm"
        ],

        // --- Mid 1 : village intermédiaire (floor 35) ---
        village_mid_1: [
            // Armes mid game
            "steel_sword","warhammer","recurve_bow","shadow_dagger",
            // Armures fer
            "iron_helm","iron_chest","reinforced_pack",
            // Boucliers
            "iron_shield","round_gear_shield",
            // Potions mid
            "medium_potion","large_potion",
            "regen_potion","stamina_elixir","greater_mana_potion","antidote",
            "fire_res_potion","stone_skin_potion",
            // Nourriture solide
            "hearty_stew","dried_meat","spiced_meat",
            "glow_mushroom_soup","hunter_ration","miner_lunch",
            // Snacks
            "coffee_ration","strong_tea_cup","survival_biscuit",
            // Accessoires
            "iron_ring","ruby_ring","emerald_ring"
        ],

        // --- Mid 2 : village avancé (floor 50) ---
        village_mid_2: [
            // Armes mid+ / rares
            "steel_sword","warhammer","recurve_bow","shadow_dagger",
            // Armures fer
            "iron_helm","iron_chest","reinforced_pack",
            // Boucliers
            "iron_shield","round_gear_shield",
            // Potions plus costaudes
            "medium_potion","large_potion","regen_potion","major_regen_potion",
            "stamina_elixir","greater_mana_potion","antidote",
            "fire_res_potion","stone_skin_potion","iron_skin_potion",
            // Nourriture
            "hearty_stew","spiced_meat","glow_mushroom_soup","abyss_ration",
            "energy_porridge","caravan_stew","noodle_soup",
            // Accessoires un peu rares
            "iron_ring","ruby_ring","emerald_ring","clockwork_amulet"
        ],

        // --- Deep 1 : villages profonds (floors 60 & 75) ---
        village_deep_1: [
            // Armes late game
            "steel_sword","warhammer","recurve_bow",
            // Armures upgradées
            "iron_helm","iron_chest","abyssal_chest_rig",
            // Boucliers
            "round_gear_shield","tower_shield",
            // Potions high tier
            "medium_potion","large_potion","major_regen_potion",
            "aether_potion","overcharge_potion","resistance_elixir",
            "fortified_heart_elixir","detox_tonic",
            // Nourriture forte
            "hearty_stew","glow_mushroom_soup","abyss_ration",
            "energy_porridge","stew_of_beasts","abyssal_dumplings",
            // Accessoires rares
            "ruby_ring","emerald_ring","clockwork_amulet"
        ],

        // --- Deep 2 : dernier village très profond (floor 90) ---
        village_deep_2: [
            // Armes très haut niveau (late / quasi endgame)
            "steel_sword","warhammer","recurve_bow",
            "abyssal_recurve",
            // Armures top
            // Boucliers lourds
            "round_gear_shield","tower_shield","steam_guard_shield","abyssal_chest_rig",
            // Potions endgame
            "large_potion","major_regen_potion","aether_potion",
            "overcharge_potion","resistance_elixir","fortified_heart_elixir",
            "detox_tonic","abyssal_potion",
            // Nourriture premium
            "hearty_stew","glow_mushroom_soup","abyss_ration",
            "luxury_feast","abyssal_dumplings","steam_bun",
            // Accessoires très rares
            "ruby_ring","emerald_ring","abyssal_ring","aether_amulet","clockwork_amulet"
        ]
    };


    function getShopKey(floor) {
        if (floor === 0) return "surface";
        if (!VILLAGE_FLOORS.includes(floor)) return "surface";

        // Palier par village
        if (floor <= 10) return "village_shallow_1";   // floor 10
        if (floor <= 20) return "village_shallow_2";   // floor 20
        if (floor <= 35) return "village_mid_1";       // floor 35
        if (floor <= 50) return "village_mid_2";       // floor 50
        if (floor <= 75) return "village_deep_1";      // floors 60, 75
        return "village_deep_2";                       // floor 90
    }


    // événements spéciaux / PNJ
    function randomEventType() {
        const pool = ["npc_buff","mini_trap","food_merchant","lore_fragment","familiar","cursed_altar","tea_master",
            "luxury_caterer",
            "upgrade_machine",
            "reroll_machine",
            "rest_station",
            "dice_gambler",
            "ghost_market",
            "lost_explorer",
            "mutate_floor",
            "gear_shrine",
            "memory_echo",
            "injury_infirmary",
            "camp_peddler",
            "familiar_boost",
            "weird_statue"];
        return pool[Math.floor(Math.random()*pool.length)];
    }

    return {
        ITEMS,
        RESOURCES,
        CRAFT_RECIPES,
        COOKING_RECIPES,
        QUESTS,
        VILLAGE_FLOORS,
        monstersForFloor,
        isBossFloor,
        bossForFloor,
        SHOP_POOLS,
        getShopKey,
        randomEventType
    };
})();
