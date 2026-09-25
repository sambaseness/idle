export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type ResourceType = 'article' | 'documentation' | 'course' | 'video' | 'book' | 'tool' | 'guide' | 'exercise' | 'challenge' | 'lab' | 'repository' | 'community' | 'website';
export interface Post { id:string; title:string; slug:string; excerpt:string; body:string; domain:string; difficulty:Difficulty; readingTime:number; tags:string[]; topicIds:string[]; published:boolean; createdAt:string; }
export interface FeedItem { id:string; title:string; excerpt:string; category:string; tags:string[]; url?:string; topicIds:string[]; published:boolean; createdAt:string; }
export interface Book { id:string; title:string; author:string; description:string; domain:string; cover:string; url?:string; topicIds:string[]; published:boolean; }
export interface ExternalResource { id:string; title:string; description:string; type:ResourceType; provider:string; url:string; topicIds:string[]; free:boolean; difficulty:Difficulty; }
export interface Topic { id:string; title:string; description:string; domain:string; parentId?:string; difficulty:Difficulty; estimatedTime:number; prerequisites:string[]; postIds:string[]; feedItemIds:string[]; bookIds:string[]; resourceIds:string[]; relatedIds:string[]; }
export interface Tool { id:string; title:string; description:string; category:string; url:string; pricing:string; topicIds:string[]; }
export interface Guide { id:string; title:string; description:string; topicIds:string[]; body:string; }
export interface Exercise { id:string; title:string; description:string; type:string; difficulty:Difficulty; topicIds:string[]; }
export interface Challenge { id:string; title:string; description:string; difficulty:Difficulty; topicIds:string[]; }
export interface Lab { id:string; title:string; description:string; difficulty:Difficulty; topicIds:string[]; steps:string[]; }
export interface AppData { posts:Post[]; feed:FeedItem[]; books:Book[]; resources:ExternalResource[]; topics:Topic[]; tools:Tool[]; guides:Guide[]; exercises:Exercise[]; challenges:Challenge[]; labs:Lab[]; }
export const seedData:AppData = {
  "posts": [
    {
      "id": "p1",
      "title": "Comprendre TCP/IP sans apprendre par cœur",
      "slug": "comprendre-tcp-ip",
      "excerpt": "Une lecture progressive de la pile réseau, des paquets aux applications.",
      "body": "# Comprendre TCP/IP\\n\\nTCP/IP est une suite de protocoles qui permet à des réseaux différents de communiquer.\\n\\n## Les couches\\n\\nOn peut raisonner avec les couches pour isoler les responsabilités.\\n\\n## IPv4 et routage\\n\\nUne adresse IP identifie une interface dans un réseau. Le masque indique la partie réseau et la partie hôte.\\n\\n## TCP\\n\\nTCP ajoute une communication fiable, ordonnée et contrôlée.",
      "domain": "Réseaux",
      "difficulty": "beginner",
      "readingTime": 7,
      "tags": [
        "TCP/IP",
        "IPv4",
        "réseaux"
      ],
      "topicIds": [
        "t-tcp",
        "t-ipv4"
      ],
      "published": true,
      "createdAt": "2026-09-20"
    },
    {
      "id": "p2",
      "title": "Sous-réseaux IPv4 : méthode pas à pas",
      "slug": "sous-reseaux-ipv4",
      "excerpt": "De l’adresse et du masque au nombre de sous-réseaux et d’hôtes.",
      "body": "# Sous-réseaux IPv4\\n\\nLe subnetting consiste à découper un espace d’adresses en réseaux plus petits.\\n\\n## Méthode\\n\\n1. Identifier le préfixe.\\n2. Calculer les bits empruntés.\\n3. Déduire les tailles de blocs.\\n4. Vérifier réseau, hôtes et broadcast.",
      "domain": "Réseaux",
      "difficulty": "intermediate",
      "readingTime": 9,
      "tags": [
        "IPv4",
        "CIDR",
        "subnetting"
      ],
      "topicIds": [
        "t-ipv4",
        "t-subnet"
      ],
      "published": true,
      "createdAt": "2026-09-18"
    },
    {
      "id": "p3",
      "title": "Pourquoi TypeScript est utile sur un projet React",
      "slug": "typescript-react",
      "excerpt": "Types, contrats et refactorisation : ce que TypeScript apporte concrètement.",
      "body": "# TypeScript et React\\n\\nLe typage transforme une partie des erreurs de conception en erreurs détectables avant exécution.\\n\\n## Contrats de données\\n\\nLes interfaces décrivent les objets que les composants reçoivent.",
      "domain": "Développement logiciel",
      "difficulty": "beginner",
      "readingTime": 6,
      "tags": [
        "TypeScript",
        "React",
        "frontend"
      ],
      "topicIds": [
        "t-react",
        "t-ts"
      ],
      "published": true,
      "createdAt": "2026-09-16"
    },
    {
      "id": "p4",
      "title": "Premiers réflexes de cybersécurité web",
      "slug": "reflexes-cybersecurite-web",
      "excerpt": "XSS, secrets, validation et contrôle d’accès : les fondamentaux à vérifier.",
      "body": "# Réflexes de cybersécurité web\\n\\nLa sécurité commence par les frontières de confiance.\\n\\n## Validation\\n\\nValider les entrées ne remplace pas l’encodage de sortie.\\n\\n## Secrets\\n\\nUne clé privée ne doit jamais être embarquée dans le bundle public.",
      "domain": "Cybersécurité",
      "difficulty": "beginner",
      "readingTime": 8,
      "tags": [
        "XSS",
        "secrets",
        "web"
      ],
      "topicIds": [
        "t-websec",
        "t-pentest"
      ],
      "published": true,
      "createdAt": "2026-09-14"
    }
  ],
  "feed": [
    {
      "id": "f1",
      "title": "GitHub Student Developer Pack",
      "excerpt": "Une collection d’offres et de ressources pour les étudiants développeurs.",
      "category": "Opportunités",
      "tags": [
        "étudiants",
        "GitHub",
        "développement"
      ],
      "url": "https://education.github.com/pack",
      "topicIds": [
        "t-dev"
      ],
      "published": true,
      "createdAt": "2026-09-23"
    },
    {
      "id": "f2",
      "title": "MDN Web Docs",
      "excerpt": "Référence pratique pour HTML, CSS et JavaScript.",
      "category": "Ressource",
      "tags": [
        "web",
        "documentation"
      ],
      "url": "https://developer.mozilla.org/",
      "topicIds": [
        "t-web"
      ],
      "published": true,
      "createdAt": "2026-09-21"
    },
    {
      "id": "f3",
      "title": "Roadmap de pratique : réseaux",
      "excerpt": "Une séquence simple pour passer des bases IP aux labs.",
      "category": "Guide",
      "tags": [
        "réseaux",
        "lab"
      ],
      "topicIds": [
        "t-tcp",
        "t-subnet"
      ],
      "published": true,
      "createdAt": "2026-09-19"
    },
    {
      "id": "f4",
      "title": "Vite : démarrage rapide",
      "excerpt": "Un outil moderne pour les projets frontend rapides.",
      "category": "Outil",
      "tags": [
        "Vite",
        "frontend"
      ],
      "url": "https://vite.dev/",
      "topicIds": [
        "t-dev"
      ],
      "published": true,
      "createdAt": "2026-09-17"
    }
  ],
  "books": [
    {
      "id": "b1",
      "title": "Computer Networking: A Top-Down Approach",
      "author": "Kurose & Ross",
      "description": "Une approche pédagogique des réseaux en partant des applications.",
      "domain": "Réseaux",
      "cover": "https://covers.openlibrary.org/b/isbn/9780136681557-L.jpg",
      "topicIds": [
        "t-tcp",
        "t-ipv4",
        "t-subnet"
      ],
      "published": true
    },
    {
      "id": "b2",
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "description": "Principes de lisibilité et de maintenance du code.",
      "domain": "Développement logiciel",
      "cover": "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
      "topicIds": [
        "t-dev",
        "t-ts"
      ],
      "published": true
    },
    {
      "id": "b3",
      "title": "The Web Application Hacker’s Handbook",
      "author": "Dafydd Stuttard & Marcus Pinto",
      "description": "Référence historique sur l’analyse de sécurité des applications web.",
      "domain": "Cybersécurité",
      "cover": "https://covers.openlibrary.org/b/isbn/9781118026472-L.jpg",
      "topicIds": [
        "t-websec",
        "t-pentest"
      ],
      "published": true
    }
  ],
  "resources": [
    {
      "id": "r1",
      "title": "MDN Web Docs",
      "description": "Documentation de référence pour les technologies web.",
      "type": "documentation",
      "provider": "MDN",
      "url": "https://developer.mozilla.org/",
      "topicIds": [
        "t-web",
        "t-react"
      ],
      "free": true,
      "difficulty": "beginner"
    },
    {
      "id": "r2",
      "title": "React Documentation",
      "description": "Documentation officielle React.",
      "type": "documentation",
      "provider": "React",
      "url": "https://react.dev/",
      "topicIds": [
        "t-react"
      ],
      "free": true,
      "difficulty": "beginner"
    },
    {
      "id": "r3",
      "title": "Cisco Networking Academy",
      "description": "Cours et parcours de formation réseau.",
      "type": "course",
      "provider": "Cisco",
      "url": "https://www.netacad.com/",
      "topicIds": [
        "t-tcp",
        "t-ipv4"
      ],
      "free": true,
      "difficulty": "beginner"
    },
    {
      "id": "r4",
      "title": "OWASP Web Security Testing Guide",
      "description": "Guide de référence pour tester la sécurité web.",
      "type": "guide",
      "provider": "OWASP",
      "url": "https://owasp.org/www-project-web-security-testing-guide/",
      "topicIds": [
        "t-websec",
        "t-pentest"
      ],
      "free": true,
      "difficulty": "advanced"
    }
  ],
  "topics": [
    {
      "id": "t-cs",
      "title": "Informatique",
      "description": "Le domaine central qui relie logiciels, réseaux, données et systèmes.",
      "domain": "Informatique",
      "difficulty": "beginner",
      "estimatedTime": 30,
      "prerequisites": [],
      "postIds": [],
      "feedItemIds": [],
      "bookIds": [],
      "resourceIds": [],
      "relatedIds": [
        "t-dev",
        "t-tcp"
      ]
    },
    {
      "id": "t-dev",
      "title": "Développement logiciel",
      "description": "Conception, implémentation, test et maintenance de logiciels.",
      "domain": "Développement",
      "difficulty": "beginner",
      "estimatedTime": 45,
      "prerequisites": [],
      "postIds": [
        "p3"
      ],
      "feedItemIds": [
        "f1",
        "f4"
      ],
      "bookIds": [
        "b2"
      ],
      "resourceIds": [],
      "relatedIds": [
        "t-react",
        "t-ts"
      ]
    },
    {
      "id": "t-web",
      "title": "Développement Web",
      "description": "Fondamentaux des interfaces et applications web.",
      "domain": "Développement",
      "difficulty": "beginner",
      "estimatedTime": 60,
      "prerequisites": [
        "t-dev"
      ],
      "postIds": [
        "p3"
      ],
      "feedItemIds": [
        "f2"
      ],
      "bookIds": [],
      "resourceIds": [
        "r1"
      ],
      "relatedIds": [
        "t-react",
        "t-websec"
      ]
    },
    {
      "id": "t-react",
      "title": "React",
      "description": "Construire des interfaces composables avec React.",
      "domain": "Développement",
      "difficulty": "beginner",
      "estimatedTime": 50,
      "prerequisites": [
        "t-web"
      ],
      "postIds": [
        "p3"
      ],
      "feedItemIds": [],
      "bookIds": [],
      "resourceIds": [
        "r2"
      ],
      "relatedIds": [
        "t-ts"
      ]
    },
    {
      "id": "t-ts",
      "title": "TypeScript",
      "description": "Ajouter des contrats de types à JavaScript.",
      "domain": "Développement",
      "difficulty": "beginner",
      "estimatedTime": 40,
      "prerequisites": [
        "t-dev"
      ],
      "postIds": [
        "p3"
      ],
      "feedItemIds": [],
      "bookIds": [
        "b2"
      ],
      "resourceIds": [],
      "relatedIds": [
        "t-react"
      ]
    },
    {
      "id": "t-tcp",
      "title": "TCP/IP",
      "description": "Suite de protocoles fondamentale pour Internet.",
      "domain": "Réseaux",
      "difficulty": "beginner",
      "estimatedTime": 70,
      "prerequisites": [],
      "postIds": [
        "p1"
      ],
      "feedItemIds": [
        "f3"
      ],
      "bookIds": [
        "b1"
      ],
      "resourceIds": [
        "r3"
      ],
      "relatedIds": [
        "t-ipv4"
      ]
    },
    {
      "id": "t-ipv4",
      "title": "IPv4",
      "description": "Adressage, masques, réseaux et routage IPv4.",
      "domain": "Réseaux",
      "difficulty": "beginner",
      "estimatedTime": 80,
      "prerequisites": [
        "t-tcp"
      ],
      "postIds": [
        "p1",
        "p2"
      ],
      "feedItemIds": [
        "f3"
      ],
      "bookIds": [
        "b1"
      ],
      "resourceIds": [
        "r3"
      ],
      "relatedIds": [
        "t-subnet"
      ]
    },
    {
      "id": "t-subnet",
      "title": "Subnetting",
      "description": "Découpage d’un réseau IPv4 en sous-réseaux.",
      "domain": "Réseaux",
      "difficulty": "intermediate",
      "estimatedTime": 90,
      "prerequisites": [
        "t-ipv4"
      ],
      "postIds": [
        "p2"
      ],
      "feedItemIds": [
        "f3"
      ],
      "bookIds": [
        "b1"
      ],
      "resourceIds": [
        "r3"
      ],
      "relatedIds": [
        "t-ipv4"
      ]
    },
    {
      "id": "t-websec",
      "title": "Sécurité Web",
      "description": "Principes de protection et de test des applications web.",
      "domain": "Cybersécurité",
      "difficulty": "intermediate",
      "estimatedTime": 75,
      "prerequisites": [
        "t-web"
      ],
      "postIds": [
        "p4"
      ],
      "feedItemIds": [],
      "bookIds": [
        "b3"
      ],
      "resourceIds": [
        "r4"
      ],
      "relatedIds": [
        "t-pentest"
      ]
    },
    {
      "id": "t-pentest",
      "title": "Pentesting",
      "description": "Identifier et documenter des vulnérabilités dans un cadre autorisé.",
      "domain": "Cybersécurité",
      "difficulty": "advanced",
      "estimatedTime": 120,
      "prerequisites": [
        "t-websec"
      ],
      "postIds": [
        "p4"
      ],
      "feedItemIds": [],
      "bookIds": [
        "b3"
      ],
      "resourceIds": [
        "r4"
      ],
      "relatedIds": [
        "t-websec"
      ]
    }
  ],
  "tools": [
    {
      "id": "tool1",
      "title": "Wireshark",
      "description": "Analyseur de protocoles réseau.",
      "category": "Réseaux",
      "url": "https://www.wireshark.org/",
      "pricing": "Gratuit",
      "topicIds": [
        "t-tcp",
        "t-ipv4"
      ]
    },
    {
      "id": "tool2",
      "title": "Cisco Packet Tracer",
      "description": "Simulation et pratique des réseaux.",
      "category": "Réseaux",
      "url": "https://www.netacad.com/courses/packet-tracer",
      "pricing": "Gratuit avec compte",
      "topicIds": [
        "t-tcp",
        "t-ipv4",
        "t-subnet"
      ]
    },
    {
      "id": "tool3",
      "title": "Vite",
      "description": "Build tool frontend rapide.",
      "category": "Développement",
      "url": "https://vite.dev/",
      "pricing": "Gratuit",
      "topicIds": [
        "t-dev",
        "t-react"
      ]
    }
  ],
  "guides": [
    {
      "id": "g1",
      "title": "Créer un projet React + Vite + TypeScript",
      "description": "De zéro à une première interface.",
      "topicIds": [
        "t-dev",
        "t-react"
      ],
      "body": "Initialiser Vite, installer les dépendances, lancer le serveur puis produire un build."
    },
    {
      "id": "g2",
      "title": "Lire une capture Wireshark",
      "description": "Méthode de lecture des paquets.",
      "topicIds": [
        "t-tcp"
      ],
      "body": "Commencer par le protocole, puis les adresses, ports, flags et échanges."
    }
  ],
  "exercises": [
    {
      "id": "e1",
      "title": "Calculer un /26",
      "description": "Déterminer réseau, broadcast et plage d’hôtes.",
      "type": "Calcul",
      "difficulty": "intermediate",
      "topicIds": [
        "t-subnet"
      ]
    },
    {
      "id": "e2",
      "title": "Identifier une requête HTTP",
      "description": "Lire une capture et repérer méthode, hôte et code de réponse.",
      "type": "Analyse",
      "difficulty": "beginner",
      "topicIds": [
        "t-tcp",
        "t-web"
      ]
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": "Construire un mini réseau d’entreprise",
      "description": "Proposer une topologie avec adressage et segmentation.",
      "difficulty": "intermediate",
      "topicIds": [
        "t-ipv4",
        "t-subnet"
      ]
    },
    {
      "id": "c2",
      "title": "Auditer un formulaire web",
      "description": "Lister les contrôles de sécurité à vérifier.",
      "difficulty": "advanced",
      "topicIds": [
        "t-websec"
      ]
    }
  ],
  "labs": [
    {
      "id": "l1",
      "title": "Lab : subnetting",
      "description": "Découper un bloc IPv4 pour plusieurs départements.",
      "difficulty": "intermediate",
      "topicIds": [
        "t-subnet"
      ],
      "steps": [
        "Définir les besoins en hôtes",
        "Choisir les préfixes",
        "Calculer les réseaux",
        "Vérifier les plages"
      ]
    },
    {
      "id": "l2",
      "title": "Lab : inspection TCP",
      "description": "Observer une connexion TCP dans Wireshark.",
      "difficulty": "beginner",
      "topicIds": [
        "t-tcp"
      ],
      "steps": [
        "Capturer le trafic",
        "Filtrer tcp",
        "Identifier SYN/SYN-ACK/ACK",
        "Analyser les ports"
      ]
    }
  ]
};
export const domains = ['Informatique','Développement','Réseaux','Cybersécurité','Intelligence Artificielle','Télécommunications','Mathématiques','Sciences des Données','DevOps'];
