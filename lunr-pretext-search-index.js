var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-preface",
  "level": "1",
  "url": "front-preface.html",
  "type": "Préface",
  "number": "",
  "title": "Préface",
  "body": " Ces notes sont destinées aux étudiant·e·s du module UM4MA234 de Sorbonne Université. Elles complètent le cours magistral (délivré par Quentin Gazda) et les TD (délivrés par Salim Alloun), et peuvent servir de support à la préparation des examens.  Je m'inspire largement des notes de cours de mes prédécesseurs, notamment celles d'Antoine Chambert-Loir , Pierre Charollois, Gaëtan Chenevier et Javier Fresán . Je les remercie vivement pour leur travail. Les erreurs et imprécisions qui subsistent sont miennes.  Le cours est composé de 12 séances de 2 heures. Il est dispensé chaque mardi de 10h45 à 12h45 en salle 56.66.109 à partir de la semaine du 12 janvier 2026.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Nombres algébriques",
  "body": " Nombres algébriques   Nombres et entiers algébriques   Soit un nombre complexe. On dit que est un nombre algébrique s'il existe un polynôme non nul à coefficients rationnels dont est racine; i.e.  .  On dit que est un entier algébrique s'il existe un polynôme unitaire  à coefficients entiers tel que .  Dans les définitions ci-dessus, un tel polynôme est appelé un polynôme annulateur de .     Exemples de nombres et entiers algébriques  Voici quelques exemples de nombres algébriques et d'entiers algébriques :    Le nombre est un entier algébrique car il est racine du polynôme unitaire .    Le nombre est un entier algébrique car il est racine du polynôme unitaire .    Le nombre est un nombre algébrique car il est racine du polynôme , mais ce n'est pas un entier algébrique.    Le nombre n'est pas un nombre algébrique, c'est un nombre transcendant.     Nous désignerons par le sous-ensemble des nombres algébriques et par le sous-ensemble des entiers algébriques. Nous avons . Nous énumérons quelques propriétés immédiates de ces sous-ensembles:   . Les nombres rationels sont algébriques. En effet, si est un nombre rationel, alors le polynôme est à coefficients rationels et vérifie .  . Le même argument montre que les nombres entiers sont des entiers algébriques.     Soit un nombre algébrique. Alors il existe un entier tel que .     Soit un polynôme unitaire qui annule . Soit choisi de sorte que pour tout (autrement dit le dénominateur de chaque divise ). Alors Alors En particulier est un polynôme unitaire à coefficients entiers qui annule . Ainsi est un entier algébrique.   L'opposé d'un nombre\/entier algébrique est encore un nombre\/entier algébrique. En effet si (respectivement ) est annulé par un polynôme non nul , alors le polynôme annule .  Plus généralement, les opérations algébriques élémentaires stabilisent .    La somme et le produit de deux nombres\/entiers algébriques est un nombre\/entier algébrique. L'inverse d'un nombre algébrique non nul est un nombre algébrique.      Inverse. Soit . Si est un polynôme non nul tel que , alors et en divisant cette relation par , on obtient: En conséquence, le polynôme est non nul, à coefficients rationels et annulateur de . Ainsi .   Somme et produit. Pour démontrer que la somme de deux nombres\/entiers algébriques est algébrique, on fait appel au lemme suivant qui généralise légérement le théorème de Cayley-Hamilton:   Soit un espace vectoriel sur un corps et une famille génératrice de . Soit un endomorphisme -linéaire et soit une matrice carrée telle que Si est le polynôme caractéristique de , alors .    Preuve du  Si formait une base de , alors serait la matrice de dans cette base et l'on pourrait conclure par le théorème de Cayley-Hamilton. Pour le cas général, on considère le morphisme -linéaire qui envoie les vecteurs de la base canonique vers ceux de et considère l'endormorphisme représenté par . Par construction, on a . Par Cayley-Hamilton, on a et donc: Mais est surjective car est génératrice, et donc l'opération ``composition par '' est simplifiable à droite. Ainsi .   Soient et deux nombres algébriques. Soient des polynômes annulateurs de et respectivement. On considère le sous- -espace vectoriel engendré par les pour . C'est un espace de dimension finie: en effet, une famille génératrice consiste en les avec Pour le voir, remarque que la relation montre que s'écrit comme combinaison linéaire de avec , et de même pour . Puis raisonne par récurrence sur la puissance de . Alternativement, écris la division euclidienne de par .  et .  Soit ou . La multiplication par stabilise l'espace et en définit donc un endomorphisme -linéaire. Soit la matrice carrée de taille où les coefficients sont tels que On peut alors appliquer le à l'endomorphisme de l'espace pour en déduire que la multiplication par sur est l'endomorphisme nul, où est le polynôme caractéristique de . En particulier, comme nombre et .  Si et sont des entiers algébriques, alors est une matrice à coefficients entiers et comme est unitaire on obtient .    Calcul de polynômes annulateurs  La preuve de la suggère une méthode pour trouver les polynômes annulateurs de nombres algébriques. Cherchons par exemple un polynôme annulateur de . On considère alors le sous-espace vectoriel de engendré par les produits de et : il est engendré par la famille . Or on a:    Le polynôme caractéristique de la matrice à savoir , est donc annulateur de . Autrement dit,      L'ensemble des nombres algébriques est un sous-corps de . L'ensemble des entiers algébrique est un sous-anneau de .    "
},
{
  "id": "def-nombres-et-entiers-algebriques",
  "level": "2",
  "url": "sec-section-name.html#def-nombres-et-entiers-algebriques",
  "type": "Définition",
  "number": "1.1.1",
  "title": "Nombres et entiers algébriques.",
  "body": " Nombres et entiers algébriques   Soit un nombre complexe. On dit que est un nombre algébrique s'il existe un polynôme non nul à coefficients rationnels dont est racine; i.e.  .  On dit que est un entier algébrique s'il existe un polynôme unitaire  à coefficients entiers tel que .  Dans les définitions ci-dessus, un tel polynôme est appelé un polynôme annulateur de .   "
},
{
  "id": "ex-nombres-et-entiers-algebriques",
  "level": "2",
  "url": "sec-section-name.html#ex-nombres-et-entiers-algebriques",
  "type": "Exemple",
  "number": "1.1.2",
  "title": "Exemples de nombres et entiers algébriques.",
  "body": " Exemples de nombres et entiers algébriques  Voici quelques exemples de nombres algébriques et d'entiers algébriques :    Le nombre est un entier algébrique car il est racine du polynôme unitaire .    Le nombre est un entier algébrique car il est racine du polynôme unitaire .    Le nombre est un nombre algébrique car il est racine du polynôme , mais ce n'est pas un entier algébrique.    Le nombre n'est pas un nombre algébrique, c'est un nombre transcendant.    "
},
{
  "id": "lem-denominateur",
  "level": "2",
  "url": "sec-section-name.html#lem-denominateur",
  "type": "Lemme",
  "number": "1.1.3",
  "title": "",
  "body": "  Soit un nombre algébrique. Alors il existe un entier tel que .   "
},
{
  "id": "sec-section-name-7",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-7",
  "type": "Démonstration",
  "number": "1.1.1",
  "title": "",
  "body": " Soit un polynôme unitaire qui annule . Soit choisi de sorte que pour tout (autrement dit le dénominateur de chaque divise ). Alors Alors En particulier est un polynôme unitaire à coefficients entiers qui annule . Ainsi est un entier algébrique.  "
},
{
  "id": "prop-stabilite-par-operations",
  "level": "2",
  "url": "sec-section-name.html#prop-stabilite-par-operations",
  "type": "Proposition",
  "number": "1.1.4",
  "title": "",
  "body": "  La somme et le produit de deux nombres\/entiers algébriques est un nombre\/entier algébrique. L'inverse d'un nombre algébrique non nul est un nombre algébrique.   "
},
{
  "id": "sec-section-name-11",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-11",
  "type": "Démonstration",
  "number": "1.1.2",
  "title": "",
  "body": "  Inverse. Soit . Si est un polynôme non nul tel que , alors et en divisant cette relation par , on obtient: En conséquence, le polynôme est non nul, à coefficients rationels et annulateur de . Ainsi .   Somme et produit. Pour démontrer que la somme de deux nombres\/entiers algébriques est algébrique, on fait appel au lemme suivant qui généralise légérement le théorème de Cayley-Hamilton:   Soit un espace vectoriel sur un corps et une famille génératrice de . Soit un endomorphisme -linéaire et soit une matrice carrée telle que Si est le polynôme caractéristique de , alors .    Preuve du  Si formait une base de , alors serait la matrice de dans cette base et l'on pourrait conclure par le théorème de Cayley-Hamilton. Pour le cas général, on considère le morphisme -linéaire qui envoie les vecteurs de la base canonique vers ceux de et considère l'endormorphisme représenté par . Par construction, on a . Par Cayley-Hamilton, on a et donc: Mais est surjective car est génératrice, et donc l'opération ``composition par '' est simplifiable à droite. Ainsi .   Soient et deux nombres algébriques. Soient des polynômes annulateurs de et respectivement. On considère le sous- -espace vectoriel engendré par les pour . C'est un espace de dimension finie: en effet, une famille génératrice consiste en les avec Pour le voir, remarque que la relation montre que s'écrit comme combinaison linéaire de avec , et de même pour . Puis raisonne par récurrence sur la puissance de . Alternativement, écris la division euclidienne de par .  et .  Soit ou . La multiplication par stabilise l'espace et en définit donc un endomorphisme -linéaire. Soit la matrice carrée de taille où les coefficients sont tels que On peut alors appliquer le à l'endomorphisme de l'espace pour en déduire que la multiplication par sur est l'endomorphisme nul, où est le polynôme caractéristique de . En particulier, comme nombre et .  Si et sont des entiers algébriques, alors est une matrice à coefficients entiers et comme est unitaire on obtient .  "
},
{
  "id": "ex-calcul-polynome-annulateur",
  "level": "2",
  "url": "sec-section-name.html#ex-calcul-polynome-annulateur",
  "type": "Exemple",
  "number": "1.1.6",
  "title": "Calcul de polynômes annulateurs.",
  "body": " Calcul de polynômes annulateurs  La preuve de la suggère une méthode pour trouver les polynômes annulateurs de nombres algébriques. Cherchons par exemple un polynôme annulateur de . On considère alors le sous-espace vectoriel de engendré par les produits de et : il est engendré par la famille . Or on a:    Le polynôme caractéristique de la matrice à savoir , est donc annulateur de . Autrement dit,   "
},
{
  "id": "cor-corollaire-nombres-algebriques-corps",
  "level": "2",
  "url": "sec-section-name.html#cor-corollaire-nombres-algebriques-corps",
  "type": "Corollaire",
  "number": "1.1.7",
  "title": "",
  "body": "  L'ensemble des nombres algébriques est un sous-corps de . L'ensemble des entiers algébrique est un sous-anneau de .   "
},
{
  "id": "sec-polynome-minimal",
  "level": "1",
  "url": "sec-polynome-minimal.html",
  "type": "Section",
  "number": "1.2",
  "title": "Polynôme minimal d’un nombre algébrique",
  "body": " Polynôme minimal d'un nombre algébrique  Un polynôme annulateur d'un nombre algébrique n'est jamais unique. Si est un nombre algébrique, l'ensemble des polynômes à coefficients rationels qui s'annulent en forme un idéal de . Comme est un anneau euclidien, ses idéaux, et en particulier , sont principaux.   Polynôme minimal   Le polynôme minimal d'un nombre algébrique est l'unique polynôme unitaire qui engendre .  De manière équivalente, c'est le polynôme unitaire de plus bas degré qui annule . Son degré est appelé degré du nombre algébrique.    Quelques commentaires:   Tout polynôme annulateur de est donc multiple de son polynôme minimal.  Les polynômes minimaux sont irréductibles dans (et dans ). En effet, si le polynôme minimal se décompose comme produit de deux polynômes de degrés strictement positifs, alors l'un deux doit annuler ; mais, en comparant les degrés, il ne peut être multiple du polynôme minimal, d'où la contradiction.   Un polynôme unitaire annulateur de qui est irréductible est forcément le polynôme minimal de . En effet, s'il n'était pas le polynôme minimal, ce dernier le diviserait strictement, contredisant ainsi son irréductibilité.     Exemples de polynômes minimaux  Voici quelques exemples de polynômes minimaux:    Le polynôme minimal de est .    Le polynôme minimal de est .    Le polynôme minimal de est .    Le polynôme minimal de est .    En effet, dans chaque cas, il est facile de vérifier que le polynôme considéré est unitaire, annule le nombre en question, et est de plus bas degré parmi les polynômes unitaires qui l'annulent. Dans les deux premiers cas, c'est parce que ces nombres ne sont pas rationnels. Dans le dernier cas, c'est parce que le polynôme est irréductible dans (Pourquoi ?).   Le critère suivant s'avère utile pour détecter à partir du polynôme minimal, dans , les éléments de .   Critère d'intégralité   Soit un nombre algébrique. Alors est un entier algébrique si, et seulement si son polynôme minimal est à coefficients entiers.     La preuve de la repose sur un quelques faits clés sur l'arithmétique de l'anneau .    Soient et deux polynômes de tels que divise .    Supposons et à coefficients entiers. Si est primitif , c-à-d que le pgcd de ses coefficients vaut , alors divise dans .    Supposons à coefficients entiers ainsi que et unitaires. Alors .       Démonstration du  Démontrons la première assertion. Par hypothèse, il existe un polynôme à coefficients rationnels tel que . Soit le plus petit entier positif tel que soit à coefficients entiers, c-à-d le dénominateur commun aux coefficients de .  Supposons que soit divisible par un nombre premier . Alors on peut réduire la relation , qui prend maintenant place dans , modulo .   dans l'anneau . Cet anneau est intègre est un corps) et non nul (car fut supposé primitif). Cela implique , soit que tous ses coefficients sont divisibles par . Mais cela contredit la minimalité de .  En conclusion, n'est divisible par aucun nombre premier, et donc . Cela démontre l' .  Démontrons l' . Il existe un entier tel que soit à coefficients entiers et un entier tel que soit à coefficients entiers et primitif. On écrit en fraction irréductible . D'après l' , on a que divise dans . En particulier, il existe tel que et donc   Comme et sont unitaires, on trouve que divise en comparant les coefficients dominants. Puis, comme ils sont premiers entre eux, . En particulier, est à coefficients entiers et il en est de même pour .   Soit . Si le polynôme minimal de est à coefficients entiers, alors c'est un polynôme unitaire à coefficients entiers qui annule . C'est donc un entier algébrique.  Réciproquement, supposons . Il existe alors un polynôme unitaire à coefficients entiers tel que . Il est en particulier divisible par le polynôme minimal de , et on conclut que ce dernier appartient à par le . .    Exemple d'application du critère d'intégralité  Considérons le nombre d'or . Son polynôme minimal est , qui est à coefficients entiers. Par conséquent, est un entier algébrique.  Par contre, le polynôme minimal de est , qui n'est pas à coefficients entiers. Donc n'est pas un entier algébrique.   Poursuivons avec quelques corollaires d'intégralité.    Soit un nombre algébrique de polynôme minimal .    Soit un entier. Alors est un entier algébrique si, et seulement si est un entier pour tout .    Si est un entier algébrique, alors est aussi un entier algébrique si, et seulement si .       Si l'on note le polynôme minimal de , alors celui de est   et celui de est   Les deux assertions découlent alors de la Proposition .     En tant que sous-ensembles de , on a .     L'inclusion `` '' est claire. Si , son polynôme minimal qui n'est autre que est entier d'après la Proposition ; donc .   Avant de présenter la notion de conjugué d'un entier algébrique, on rappelle l'énoncé suivant.    Les racines complexes d'un polynôme irréducible de sont simples.     Rappelons qu'un polynôme est à racines simples dans si, et seulement si il n'a pas de racine commune avec sa dérivée (pour le voir, il suffit d'écrire sa factorisation dans et sa dérivée).  Soit un polynôme irréductible et le pgcd des polynômes et , sa dérivée. Comme est irréductible, soit , soit . Mais si , sa dérivée , étant de plus bas degré, ne peut pas être divisible par . Ainsi , c'est à dire que et n'ont pas de racines communes.   En particulier, le polynôme minimal d'un nombre algébrique - qui est irréductible - possède autant de racines que le degré de ce nombre algébrique.   Conjugués d'un nombre algébrique   Soit un nombre algébrique. Les racines du polynôme minimal de sont appelés les conjugués de .    On a en particulier que les conjugués d'un entier algébrique sont des entiers algébriques.  "
},
{
  "id": "sec-polynome-minimal-3",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-3",
  "type": "Définition",
  "number": "1.2.1",
  "title": "Polynôme minimal.",
  "body": " Polynôme minimal   Le polynôme minimal d'un nombre algébrique est l'unique polynôme unitaire qui engendre .  De manière équivalente, c'est le polynôme unitaire de plus bas degré qui annule . Son degré est appelé degré du nombre algébrique.   "
},
{
  "id": "sec-polynome-minimal-6",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-6",
  "type": "Exemple",
  "number": "1.2.2",
  "title": "Exemples de polynômes minimaux.",
  "body": " Exemples de polynômes minimaux  Voici quelques exemples de polynômes minimaux:    Le polynôme minimal de est .    Le polynôme minimal de est .    Le polynôme minimal de est .    Le polynôme minimal de est .    En effet, dans chaque cas, il est facile de vérifier que le polynôme considéré est unitaire, annule le nombre en question, et est de plus bas degré parmi les polynômes unitaires qui l'annulent. Dans les deux premiers cas, c'est parce que ces nombres ne sont pas rationnels. Dans le dernier cas, c'est parce que le polynôme est irréductible dans (Pourquoi ?).  "
},
{
  "id": "prop-polynome-minimal",
  "level": "2",
  "url": "sec-polynome-minimal.html#prop-polynome-minimal",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "Critère d’intégralité.",
  "body": " Critère d'intégralité   Soit un nombre algébrique. Alors est un entier algébrique si, et seulement si son polynôme minimal est à coefficients entiers.   "
},
{
  "id": "sec-polynome-minimal-9",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-9",
  "type": "Démonstration",
  "number": "1.2.1",
  "title": "",
  "body": " La preuve de la repose sur un quelques faits clés sur l'arithmétique de l'anneau .    Soient et deux polynômes de tels que divise .    Supposons et à coefficients entiers. Si est primitif , c-à-d que le pgcd de ses coefficients vaut , alors divise dans .    Supposons à coefficients entiers ainsi que et unitaires. Alors .       Démonstration du  Démontrons la première assertion. Par hypothèse, il existe un polynôme à coefficients rationnels tel que . Soit le plus petit entier positif tel que soit à coefficients entiers, c-à-d le dénominateur commun aux coefficients de .  Supposons que soit divisible par un nombre premier . Alors on peut réduire la relation , qui prend maintenant place dans , modulo .   dans l'anneau . Cet anneau est intègre est un corps) et non nul (car fut supposé primitif). Cela implique , soit que tous ses coefficients sont divisibles par . Mais cela contredit la minimalité de .  En conclusion, n'est divisible par aucun nombre premier, et donc . Cela démontre l' .  Démontrons l' . Il existe un entier tel que soit à coefficients entiers et un entier tel que soit à coefficients entiers et primitif. On écrit en fraction irréductible . D'après l' , on a que divise dans . En particulier, il existe tel que et donc   Comme et sont unitaires, on trouve que divise en comparant les coefficients dominants. Puis, comme ils sont premiers entre eux, . En particulier, est à coefficients entiers et il en est de même pour .   Soit . Si le polynôme minimal de est à coefficients entiers, alors c'est un polynôme unitaire à coefficients entiers qui annule . C'est donc un entier algébrique.  Réciproquement, supposons . Il existe alors un polynôme unitaire à coefficients entiers tel que . Il est en particulier divisible par le polynôme minimal de , et on conclut que ce dernier appartient à par le . .  "
},
{
  "id": "sec-polynome-minimal-10",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-10",
  "type": "Exemple",
  "number": "1.2.5",
  "title": "Exemple d’application du critère d’intégralité.",
  "body": " Exemple d'application du critère d'intégralité  Considérons le nombre d'or . Son polynôme minimal est , qui est à coefficients entiers. Par conséquent, est un entier algébrique.  Par contre, le polynôme minimal de est , qui n'est pas à coefficients entiers. Donc n'est pas un entier algébrique.  "
},
{
  "id": "sec-polynome-minimal-12",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-12",
  "type": "Corollaire",
  "number": "1.2.6",
  "title": "",
  "body": "  Soit un nombre algébrique de polynôme minimal .    Soit un entier. Alors est un entier algébrique si, et seulement si est un entier pour tout .    Si est un entier algébrique, alors est aussi un entier algébrique si, et seulement si .     "
},
{
  "id": "sec-polynome-minimal-13",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-13",
  "type": "Démonstration",
  "number": "1.2.2",
  "title": "",
  "body": " Si l'on note le polynôme minimal de , alors celui de est   et celui de est   Les deux assertions découlent alors de la Proposition .  "
},
{
  "id": "cor-Z-comme-QcapbarZ",
  "level": "2",
  "url": "sec-polynome-minimal.html#cor-Z-comme-QcapbarZ",
  "type": "Corollaire",
  "number": "1.2.7",
  "title": "",
  "body": "  En tant que sous-ensembles de , on a .   "
},
{
  "id": "sec-polynome-minimal-15",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-15",
  "type": "Démonstration",
  "number": "1.2.3",
  "title": "",
  "body": " L'inclusion `` '' est claire. Si , son polynôme minimal qui n'est autre que est entier d'après la Proposition ; donc .  "
},
{
  "id": "sec-polynome-minimal-17",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-17",
  "type": "Lemme",
  "number": "1.2.8",
  "title": "",
  "body": "  Les racines complexes d'un polynôme irréducible de sont simples.   "
},
{
  "id": "sec-polynome-minimal-18",
  "level": "2",
  "url": "sec-polynome-minimal.html#sec-polynome-minimal-18",
  "type": "Démonstration",
  "number": "1.2.4",
  "title": "",
  "body": " Rappelons qu'un polynôme est à racines simples dans si, et seulement si il n'a pas de racine commune avec sa dérivée (pour le voir, il suffit d'écrire sa factorisation dans et sa dérivée).  Soit un polynôme irréductible et le pgcd des polynômes et , sa dérivée. Comme est irréductible, soit , soit . Mais si , sa dérivée , étant de plus bas degré, ne peut pas être divisible par . Ainsi , c'est à dire que et n'ont pas de racines communes.  "
},
{
  "id": "def-conjugues",
  "level": "2",
  "url": "sec-polynome-minimal.html#def-conjugues",
  "type": "Définition",
  "number": "1.2.9",
  "title": "Conjugués d’un nombre algébrique.",
  "body": " Conjugués d'un nombre algébrique   Soit un nombre algébrique. Les racines du polynôme minimal de sont appelés les conjugués de .   "
},
{
  "id": "ch-algebraic-numbers-5",
  "level": "1",
  "url": "ch-algebraic-numbers-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Théorème de Cantor",
  "body": " Théorème de Cantor  Dans cette section, on démontre le théorème de Cantor qui stipule que l'ensemble des nombres algébriques est dénombrable. Pour ``compter'' les nombres algébriques, on utilise leur taille ; dans cette section, ce sera donc la taille qui compte.   Taille d'un nombre algébrique   Soit un nombre algébrique de degré et ses conjugués. On appelle dénominateur de et l'on note le plus petit entier tel que . On appelle taille de le nombre réel:     L'assertion suivante énonce qu'il n'y a qu'un nombre fini de nombres algébriques de degré et taille fixés.    Soit un nombre réel positif. L'ensemble des nombres algébriques de degré et de taille est fini.     Soit un nombre algébrique de degré et de taille . On note son dénominateur et ses conjugués. Alors . Le polynôme minimal de l'entier algébrique s'écrit dans :   En développant le terme de gauche, on trouve   puis, en utilisant l'inégalité triangulaire sur cette somme à parmi termes,   Comme , il n'y a qu'un nombre fini tels polynômes. On note l'ensemble fini des racines complexes polynômes unitaires dont les coefficients sont entiers et vérifient les inégalités . Comme pour un certain entier (prendre pour c le dénominateur de ), on trouve:   qui est un ensemble fini indépendant de .   Le Théorème de Cantor s'obtient comme un corollaire de la proposition précédente.   Théorème de Cantor   L'ensemble des nombres algébriques est dénombrable.     Comme une union dénombrable d'ensembles dénombrables est dénombrable, il suffit de montrer que l'ensemble des nombres algébriques de degré est dénombrable. Pour cela, on écrit:   Or chaque terme de l'union est un ensemble dénombrable : on peut l'écrire comme l'union d'ensembles finis d'après la Proposition ; s'écrit donc comme une union dénombrable d'ensembles dénombrables et est donc dénombrable.     Les nombres complexes qui n'appartiennent pas à sont dits transcendants . Puisque est indénombrable, le théorème de Georg Cantor permet de démontrer l'existence de nombres transcendants sans même en construire un seul !  Notez qu'il est réputé difficile de démontrer qu'un nombre donné est transcendant. C'est Joseph Liouville qui, vers 1844, construit le premier nombre transcendant connu :   Charles Hermite (1873) démontrera que le ``nombre d'Euler'' est transcendant, puis Ferdinand von Lindemann (1882) généralisera sa méthode pour démontrer la transcendance de .    "
},
{
  "id": "ch-algebraic-numbers-5-3",
  "level": "2",
  "url": "ch-algebraic-numbers-5.html#ch-algebraic-numbers-5-3",
  "type": "Définition",
  "number": "1.3.1",
  "title": "Taille d’un nombre algébrique.",
  "body": " Taille d'un nombre algébrique   Soit un nombre algébrique de degré et ses conjugués. On appelle dénominateur de et l'on note le plus petit entier tel que . On appelle taille de le nombre réel:    "
},
{
  "id": "prop-taille-compte",
  "level": "2",
  "url": "ch-algebraic-numbers-5.html#prop-taille-compte",
  "type": "Proposition",
  "number": "1.3.2",
  "title": "",
  "body": "  Soit un nombre réel positif. L'ensemble des nombres algébriques de degré et de taille est fini.   "
},
{
  "id": "ch-algebraic-numbers-5-6",
  "level": "2",
  "url": "ch-algebraic-numbers-5.html#ch-algebraic-numbers-5-6",
  "type": "Démonstration",
  "number": "1.3.1",
  "title": "",
  "body": " Soit un nombre algébrique de degré et de taille . On note son dénominateur et ses conjugués. Alors . Le polynôme minimal de l'entier algébrique s'écrit dans :   En développant le terme de gauche, on trouve   puis, en utilisant l'inégalité triangulaire sur cette somme à parmi termes,   Comme , il n'y a qu'un nombre fini tels polynômes. On note l'ensemble fini des racines complexes polynômes unitaires dont les coefficients sont entiers et vérifient les inégalités . Comme pour un certain entier (prendre pour c le dénominateur de ), on trouve:   qui est un ensemble fini indépendant de .  "
},
{
  "id": "ch-algebraic-numbers-5-8",
  "level": "2",
  "url": "ch-algebraic-numbers-5.html#ch-algebraic-numbers-5-8",
  "type": "Théorème",
  "number": "1.3.3",
  "title": "Théorème de Cantor.",
  "body": " Théorème de Cantor   L'ensemble des nombres algébriques est dénombrable.   "
},
{
  "id": "ch-algebraic-numbers-5-9",
  "level": "2",
  "url": "ch-algebraic-numbers-5.html#ch-algebraic-numbers-5-9",
  "type": "Démonstration",
  "number": "1.3.2",
  "title": "",
  "body": " Comme une union dénombrable d'ensembles dénombrables est dénombrable, il suffit de montrer que l'ensemble des nombres algébriques de degré est dénombrable. Pour cela, on écrit:   Or chaque terme de l'union est un ensemble dénombrable : on peut l'écrire comme l'union d'ensembles finis d'après la Proposition ; s'écrit donc comme une union dénombrable d'ensembles dénombrables et est donc dénombrable.  "
},
{
  "id": "ch-algebraic-numbers-5-10",
  "level": "2",
  "url": "ch-algebraic-numbers-5.html#ch-algebraic-numbers-5-10",
  "type": "Remarque",
  "number": "1.3.4",
  "title": "",
  "body": "  Les nombres complexes qui n'appartiennent pas à sont dits transcendants . Puisque est indénombrable, le théorème de Georg Cantor permet de démontrer l'existence de nombres transcendants sans même en construire un seul !  Notez qu'il est réputé difficile de démontrer qu'un nombre donné est transcendant. C'est Joseph Liouville qui, vers 1844, construit le premier nombre transcendant connu :   Charles Hermite (1873) démontrera que le ``nombre d'Euler'' est transcendant, puis Ferdinand von Lindemann (1882) généralisera sa méthode pour démontrer la transcendance de .   "
},
{
  "id": "ch-algebraic-numbers-6",
  "level": "1",
  "url": "ch-algebraic-numbers-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Nombres algébriques de degré deux",
  "body": " Nombres algébriques de degré deux  Dans cette section, on s'intéresse aux nombres algébriques de degré . Les exemples élémentaires sont les où est un entier, positif ou négatif. Ici désignera la racine réelle positive si et si .  On désignera par le sous-ensemble de formé des nombres de la forme avec . Comme pour entier, on peut supposer que est un entier sans facteur carré Cela signifie que et que est l'unique carré positif qui divise ; autrement dit, les nombres premiers qui divisent ne le divise qu'une fois. , ce que l'on fera ici.   est un sous-anneau de qui est un corps (voir pour le cas général); si est sans facteur carré, l'inverse de l'élément est .  Les nombres algébriques de degré sont déterminés par la proposition suivante.    Soit un nombre algébrique de degré . Alors il existe un unique entier relatif sans facteur carré et deux uniques nombres rationels et tels que      Par hypothèse, le polynôme minimal de est de degré : notons le avec . On a alors   Notons pour ``discriminant'' le terme de droite. C'est un rationel non nul car (sinon serait de degré ). Écrivons en produit de nombres premiers , les pouvant être négatifs, et posons   Alors est sans facteur carré par construction, et   est un carré car est toujours paire. On a donc pour un certain . En reprenant l'équation , on trouve:   Cela démontre l'existence de l'écriture, avec et .  Montrons l'unicité de . Soit un entier sans facteur carré tel que . Comme , alors et il existe tels que   Comme est irrationel, cela impose puis, comme car est également irrationel, . Ainsi ce qui n'est possible que si , et donc .  Montrons enfin l'unicité de et . Comme est sans facteur carré, est irrationel et les éléments sont linéairement indépendants sur . Cela démontre l'unicité de et .   On va maintenant caractériser les entiers algébriques dans les corps quadratiques .  Soit avec . Si , le polynôme minimal de est En effet, est unitaire, annule car: et, comme est irrationel, aucun polynôme de degré ne l'annule. On va alors utiliser le critère de la pour déterminer quand est-ce que est un entier algébrique.    Soit un entier non nul sans facteur carré. Un élement est un entier algébrique si, et seulement si    si ,    et si .       Soit avec . Si , les deux conditions reviennent à et la proposition découle du .  On suppose donc auquel cas est irrationel. Le polynôme minimal de est alors . On utilise ensuite le critère de la :   Vérifions que les condtions et imposent l'intégralité de . Le cas est clair : si , alors et donc est un entier algébrique. Dans le cas , on peut supposer (sinon c'est le cas précédent), auquel cas . Pour le coefficient constant , on remarque d'abord que   De plus, comme , on a Or et sont les seuls carrés modulo , et alors . Comme , on trouve et donc .  Démontrons la réciproque. On commence par une observation:    Si est un nombre rationel tel que , alors .     Démonstration du   En effet, posons . Si l'on écrit sous forme irréductible, alors on trouve . En particulier, puis car et sont premiers entre eux. Comme est sans facteur carré, cela impose , donc , donc un entier.   On suppose que . La première implication donne ou . On distingue ces deux cas:    Si , alors et donc d'après le .    Si , on a   et donc est un entier. Toujours par notre , . Posons alors et . Comme , est un entier impair. Comme est également impair, il en est de même pour et . Ainsi et .    Enfin, on prétend que la condition n'est possible que si . En effet, entraîne que   est un entier algébrique, et donc que   est un entier algébrique. Son polynôme minimal est , d'où . Cela conclut.   Soit un entier sans facteur carré et . On note l'anneau . L'étude de l'arithmétique de cet anneau, et de ses généralisations pour divers corps de nombres , est l'un des enjeux de ce cours. Dans le cas des extensions quadratiques, on a le corollaire suivant:    .  En particulier, est un module libre de rang sur .     Seul le cas est à étudier. Dans ce cas, et on peut écrire   C'est cette formule qui donne l'équivalence entre les assertions `` vérifient de la '' et `` ''.     Notez que l'inclusion n'est en général pas une égalité ! Nous verrons dans ce cours comment \"calculer\" la différence entre ces deux anneaux.      Soit un nombre algébrique de degré . On démontrera plus tard dans ce cours que, si , alors est libre de rang comme groupe abélien.    "
},
{
  "id": "ch-algebraic-numbers-6-6",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#ch-algebraic-numbers-6-6",
  "type": "Proposition",
  "number": "1.4.1",
  "title": "",
  "body": "  Soit un nombre algébrique de degré . Alors il existe un unique entier relatif sans facteur carré et deux uniques nombres rationels et tels que    "
},
{
  "id": "ch-algebraic-numbers-6-7",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#ch-algebraic-numbers-6-7",
  "type": "Démonstration",
  "number": "1.4.1",
  "title": "",
  "body": " Par hypothèse, le polynôme minimal de est de degré : notons le avec . On a alors   Notons pour ``discriminant'' le terme de droite. C'est un rationel non nul car (sinon serait de degré ). Écrivons en produit de nombres premiers , les pouvant être négatifs, et posons   Alors est sans facteur carré par construction, et   est un carré car est toujours paire. On a donc pour un certain . En reprenant l'équation , on trouve:   Cela démontre l'existence de l'écriture, avec et .  Montrons l'unicité de . Soit un entier sans facteur carré tel que . Comme , alors et il existe tels que   Comme est irrationel, cela impose puis, comme car est également irrationel, . Ainsi ce qui n'est possible que si , et donc .  Montrons enfin l'unicité de et . Comme est sans facteur carré, est irrationel et les éléments sont linéairement indépendants sur . Cela démontre l'unicité de et .  "
},
{
  "id": "prop-integralite-quadratique",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#prop-integralite-quadratique",
  "type": "Proposition",
  "number": "1.4.2",
  "title": "",
  "body": "  Soit un entier non nul sans facteur carré. Un élement est un entier algébrique si, et seulement si    si ,    et si .     "
},
{
  "id": "ch-algebraic-numbers-6-11",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#ch-algebraic-numbers-6-11",
  "type": "Démonstration",
  "number": "1.4.2",
  "title": "",
  "body": " Soit avec . Si , les deux conditions reviennent à et la proposition découle du .  On suppose donc auquel cas est irrationel. Le polynôme minimal de est alors . On utilise ensuite le critère de la :   Vérifions que les condtions et imposent l'intégralité de . Le cas est clair : si , alors et donc est un entier algébrique. Dans le cas , on peut supposer (sinon c'est le cas précédent), auquel cas . Pour le coefficient constant , on remarque d'abord que   De plus, comme , on a Or et sont les seuls carrés modulo , et alors . Comme , on trouve et donc .  Démontrons la réciproque. On commence par une observation:    Si est un nombre rationel tel que , alors .     Démonstration du   En effet, posons . Si l'on écrit sous forme irréductible, alors on trouve . En particulier, puis car et sont premiers entre eux. Comme est sans facteur carré, cela impose , donc , donc un entier.   On suppose que . La première implication donne ou . On distingue ces deux cas:    Si , alors et donc d'après le .    Si , on a   et donc est un entier. Toujours par notre , . Posons alors et . Comme , est un entier impair. Comme est également impair, il en est de même pour et . Ainsi et .    Enfin, on prétend que la condition n'est possible que si . En effet, entraîne que   est un entier algébrique, et donc que   est un entier algébrique. Son polynôme minimal est , d'où . Cela conclut.  "
},
{
  "id": "cor-entiers-quadratiques-base",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#cor-entiers-quadratiques-base",
  "type": "Corollaire",
  "number": "1.4.4",
  "title": "",
  "body": "  .  En particulier, est un module libre de rang sur .   "
},
{
  "id": "ch-algebraic-numbers-6-14",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#ch-algebraic-numbers-6-14",
  "type": "Démonstration",
  "number": "1.4.3",
  "title": "",
  "body": " Seul le cas est à étudier. Dans ce cas, et on peut écrire   C'est cette formule qui donne l'équivalence entre les assertions `` vérifient de la '' et `` ''.  "
},
{
  "id": "ch-algebraic-numbers-6-15",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#ch-algebraic-numbers-6-15",
  "type": "Remarque",
  "number": "1.4.5",
  "title": "",
  "body": "  Notez que l'inclusion n'est en général pas une égalité ! Nous verrons dans ce cours comment \"calculer\" la différence entre ces deux anneaux.   "
},
{
  "id": "ch-algebraic-numbers-6-16",
  "level": "2",
  "url": "ch-algebraic-numbers-6.html#ch-algebraic-numbers-6-16",
  "type": "Remarque",
  "number": "1.4.6",
  "title": "",
  "body": "  Soit un nombre algébrique de degré . On démontrera plus tard dans ce cours que, si , alors est libre de rang comme groupe abélien.   "
},
{
  "id": "ch-number-fields-2",
  "level": "1",
  "url": "ch-number-fields-2.html",
  "type": "Section",
  "number": "2.1",
  "title": "Structure des corps de nombres",
  "body": " Structure des corps de nombres  Soit un sous-corps de . Comme contient et est stable par addition, opposé et inverse, il contient aussi . En particulier, possède une structure canonique de -espace vectoriel. On notera sa dimension (éventuellement infinie).   Corps de nombres   Un corps de nombres est un sous-corps de de dimension finie sur .  On appelle degré du corps de nombres et on notera la dimension de vu comme -espace vectoriel.    Plus généralement, soit une inclusion de corps de nombres; on dit que est une extension de . Le degré de l'extension est la dimension de vu comme -espace vectoriel et se note . On rappelle l'énoncé suivant:  Multiplicativité des degrés d'extensions   Soit une tour d'extensions de corps de nombres. Soit une base de sur et une base de sur . Alors la famille est une base de sur . En particulier,      Tout élément de s'écrit comme une combinaison linéaire à coefficients dans des , et chaque coefficient s'écrit comme une combinaison linéaire à coefficients dans des . La famille est libre car toute relation linéaire à coefficients dans s'écrit comme une combinaison linéaire à coefficients dans des dont les coefficients sont des combinaisons linéaires à coefficients dans des .     Si est un corps de nombres, alors tout élément de est un nombre algébrique de degré au plus . En particulier, .     Notons . Si , alors la famille qui possède éléments est linéairement dépendante sur . Il existe donc une relation non triviale de la forme   Le polynôme est non nul et la relation ci-dessus s'écrit . Ainsi, est algébrique de degré au plus .    Les exemples élémentaires de corps de nombres sont les extensions quadratiques étudiées dans la section précédente. En effet, si est un entier non carré, alors est un corps qui est de dimension sur car en est une base.   Soit un nombre algébrique. On désigne par le plus petit sous-anneau de qui contient et . C'est aussi En effect, si est un sous-anneau de qui contient et , alors il contient aussi tous les polynômes en à coefficients rationnels car il est stable par addition et multiplication. l'ensemble des polynômes en à coefficients rationnels : On va montrer que c'est en fait un corps, appelé corps engendré par . C'est pourquoi on le notera surtout . L'enjeu de cette section est d'étudier les corps de cette forme et de montrer que tout corps de nombres s'écrit ainsi.    Soit un nombre algébrique de degré . L'anneau est un corps. C'est aussi un -espace vectoriel de dimension et forme une base de celui-ci.  En particulier, est égal au degré de .     Démonstration \"à la main\"  Montrons que tout élément de non nul est inversible. Soit . Par définition, il existe un polynôme tel que . Comme est non nul, il n'est pas divisible par le polynôme minimal de et donc est premier avec ce dernier. Il existe donc une identité de Bézout dans : et, en évaluant en , on trouve . L'élément admet donc pour inverse.  Montrons que est une base de comme -espace vectoriel. La famille est libre car, si il existe une relation non triviale de la forme alors le polynôme est non nul de degré strictement inférieur à et annule . En particulier, , avec le polynôme minimal de . Mais est, par définition, le degré de d'où la contradiction.  Pour montrer que la famille est génératrice, soit . Il existe un polynôme tel que . Par division euclidienne de par , il existe des polynômes tels que et Si s'écrit , alors . Cela montre que la famille est génératrice.    Démonstration plus conceptuelle  Il s'agit d'une preuve équivalente à la précédente, mais en utilisant les résultats de bases sur les anneaux. On commence par observer qu'on dispose d'une application d'évaluation en : C'est un morphisme d'anneaux d'image . Son noyau est l'idéal des polynômes qui s'annulent en que l'on avait noté plus haut.  Notons le polynôme minimal de . Comme , il résulte du théorème d'isomorphisme que . Comme est irréductible, l'anneau est un corps. Il en est donc de même pour .  Par division euclidienne, le -espace vectoriel admet pour base les classes de . L'isomorphisme ci-dessus envoie la classe de vers , donc la classe de la base vers la famille .   Un morphisme de corps est une application qui préserve les opérations d'addition et de multiplication, et qui envoie sur . Nous désignerons par l'ensemble des morphismes d'un corps vers un corps .  On notera , aussi appelé l'ensemble des plongements complexes de . Un but important de cette section est d'étudier cet ensemble lorsque est un corps de nombres.    Soit un nombre algébrique. L'application induit une bijection entre et l'ensemble des conjugués de ( ).     On utilise l'isomorphisme (qui envoie la classe de vers ). Par la propriété universelle des anneaux quotients, un morphisme d'anneaux de vers revient à la donnée d'un morphisme d'anneaux qui s'annule sur : Or, un tel morphisme est entièrement déterminé par l'image de et l'égalité équivaut à racine de . Ainsi, on a une bijection Il suffit de retracer sa construction pour se convaincre qu'elle est donnée par .    Soit un entier sans facteur carré et . Comme possède deux conjugués, à savoir et , il existe exactement deux plongements complexes de vers :    l'inclusion canonique     le morphisme , qui échange les deux racines du polynôme minimal de .    Si , alors comme possède trois conjugués complexes, à savoir , et où est une racine cubique primitive de l'unité, il existe donc exactement trois plongements complexes de vers .    l'inclusion canonique ,    le morphisme ,    le morphisme .    On remarque en particulier que les plongements complexes de ne le préservent pas forcément : et ne sont pas inclus dans , donc pas inclus dans . On dit que n'est pas Galoisien .   On déduit de la que l'ensemble est fini de cardinal égal au degré de . Cet énoncé se généralise au cas des corps de nombres:    Soit un corps de nombres de degré . Alors est un ensemble fini de cardinal .  Plus généralement, soit est une inclusion de corps de nombres et un morphisme de corps. L'ensemble des morphismes qui prolongent : est de cardinal .     Remarquons que est réduit au seul morphisme d'inclusion canonique En effet, si , alors pour tout entier naturel , on a et donc, pour tout rationnel , .  . En particulier, la première assertion est un cas particulier de la seconde en prenant et .  Il suffit donc de démontrer la seconde assertion, et on procède par récurrence sur le degré . Si , alors et il n'y a qu'un seul prolongement possible, à savoir lui-même.  Supposons maintenant que et que le résultat est démontré pour les extensions de degré strictement inférieur à . Soit . Notons le plus petit sous-corps de contenant à la fois et :   Si satisfait à , alors il en est de même pour . Ainsi, on dispose d'une application de restriction L'image inverse d'un élément par cette application correspond à l'ensemble . Par hypothèse de récurrence, il est de cardinal . D'après la multiplicativité des degrés d'extensions (voir le ), il reste à montrer que En effet, si est une application, alors . Dans notre cas, le cardinal est constant en et donc pour n'importe quel . le cardinal de l'ensemble d'arrivée est .  Pour compter le cardinal de , on utilise le même argument que celui donné pour la démonstration de la pour montrer que est en bijection avec l'ensemble des racines complexes du polynôme , où désigne le polynôme minimal Il est défini comme l'unique polynôme unitaire générateur de l'idéal des polynômes qui s'annulent en . de sur , et où désigne le polynôme auquel on a appliqué à chacun de ses coefficients.  On part de l'isomorphisme , de sorte qu'un morphisme de corps qui prolonge équivaut à la donnée un morphisme d'anneaux qui envoit sur . Autrement dit, est une racine complexe de . D'où la bijection.  Comme est irréductible dans , il en est de même pour dans et possède donc racines complexes distinctes. Ainsi, il y a exactement choix possibles pour , et donc ce qui conclut la démonstration.    de l'élément primitif   Soit un corps de nombres. Il existe un élément tel que .    L'élément de tel que est appelé un élément primitif de l'extension de corps de nombres (il n'est en général pas unique).   Démonstration du  Notons le degré de et les plongements complexes de . La démonstration repose sur le lemme suivant:    Si pour tout , alors .     L'ensemble des tels que est en bijection avec l'ensemble des plongements complexes de qui coincident avec sur . Son cardinal est égal à d'après la . Donc, si tous les sont distincts, alors , ce qui implique .   D'après le , il suffit de démontrer qu'il existe tel que pour tout . Notons C'est un sous-espace vectoriel strict de car . On est alors réduit à démontrer que n'est pas tout entier. On le déduit du lemme qui suit.    Soit un corps infini et un -espace vectoriel de dimension finie. Si sont des sous-espaces vectoriels stricts de , alors .     Démonstration du  On raisonne par récurrence sur , le nombre de sous-espaces. Si , c'est évident car est strict dans .  Supposons le résultat démontré en et montrons-le pour . Par hypothèse de récurrence, il existe . Si , alors est non vide car contient ; c'est gagné. On peut donc supposer . Comme est stricte, soit .  L'idée de la preuve consiste à contempler la droite dans qui passe par et de direction et de montrer qu'elle intersecte chaque au plus une fois; comme est infini, on peut donc trouver un point de qui n'est dans aucun des .  Fixons . Supposons qu'il existe deux éléments distincts tels que et . Alors et donc . Par choix de , on en déduit que . Mais alors ce qui est absurde. En conclusion, il existe au plus un seul tel que , donc au plus éléments tels que . Comme est infini, il existe donc tel que . Cela démontre que , ce qui conclut.       Soient deux entiers distincts. Montrer que   En déduire que si sont deux entiers sans facteur carré distincts, alors le polynôme est irréductible dans .    Il est clair que . Pour l'inclusion réciproque, il suffit de montrer que (quitte à inverser les rôles de et ). On a et donc . De l'égalité on déduit que , ce qui conclut.  Si sont deux entiers qui ne sont pas des carrés et qui n'ont pas de facteur carré commun différents de , alors les corps sont de degré et distincts. Donc . Par le premier point, on en déduit que et donc que le polynôme minimal de est de degré . Or, le polynôme annule , il est donc le polynôme minimal de et en particulier irréductible dans . Comme ses coefficients sont entiers et qu'il est primitif, il est aussi irréductible dans .    "
},
{
  "id": "ch-number-fields-2-3",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-3",
  "type": "Définition",
  "number": "2.1.1",
  "title": "Corps de nombres.",
  "body": " Corps de nombres   Un corps de nombres est un sous-corps de de dimension finie sur .  On appelle degré du corps de nombres et on notera la dimension de vu comme -espace vectoriel.   "
},
{
  "id": "lem-multiplicativite-degres-extensions",
  "level": "2",
  "url": "ch-number-fields-2.html#lem-multiplicativite-degres-extensions",
  "type": "Lemme",
  "number": "2.1.2",
  "title": "Multiplicativité des degrés d’extensions.",
  "body": " Multiplicativité des degrés d'extensions   Soit une tour d'extensions de corps de nombres. Soit une base de sur et une base de sur . Alors la famille est une base de sur . En particulier,    "
},
{
  "id": "ch-number-fields-2-6",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-6",
  "type": "Démonstration",
  "number": "2.1.1",
  "title": "",
  "body": " Tout élément de s'écrit comme une combinaison linéaire à coefficients dans des , et chaque coefficient s'écrit comme une combinaison linéaire à coefficients dans des . La famille est libre car toute relation linéaire à coefficients dans s'écrit comme une combinaison linéaire à coefficients dans des dont les coefficients sont des combinaisons linéaires à coefficients dans des .  "
},
{
  "id": "prop-corps-de-nombres-algebriques",
  "level": "2",
  "url": "ch-number-fields-2.html#prop-corps-de-nombres-algebriques",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": "  Si est un corps de nombres, alors tout élément de est un nombre algébrique de degré au plus . En particulier, .   "
},
{
  "id": "ch-number-fields-2-8",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-8",
  "type": "Démonstration",
  "number": "2.1.2",
  "title": "",
  "body": " Notons . Si , alors la famille qui possède éléments est linéairement dépendante sur . Il existe donc une relation non triviale de la forme   Le polynôme est non nul et la relation ci-dessus s'écrit . Ainsi, est algébrique de degré au plus .  "
},
{
  "id": "ch-number-fields-2-9",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-9",
  "type": "Exemple",
  "number": "2.1.4",
  "title": "",
  "body": " Les exemples élémentaires de corps de nombres sont les extensions quadratiques étudiées dans la section précédente. En effet, si est un entier non carré, alors est un corps qui est de dimension sur car en est une base.  "
},
{
  "id": "prop-corps",
  "level": "2",
  "url": "ch-number-fields-2.html#prop-corps",
  "type": "Proposition",
  "number": "2.1.5",
  "title": "",
  "body": "  Soit un nombre algébrique de degré . L'anneau est un corps. C'est aussi un -espace vectoriel de dimension et forme une base de celui-ci.  En particulier, est égal au degré de .   "
},
{
  "id": "ch-number-fields-2-12",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-12",
  "type": "Démonstration",
  "number": "2.1.3",
  "title": "Démonstration \"à la main\".",
  "body": " Démonstration \"à la main\"  Montrons que tout élément de non nul est inversible. Soit . Par définition, il existe un polynôme tel que . Comme est non nul, il n'est pas divisible par le polynôme minimal de et donc est premier avec ce dernier. Il existe donc une identité de Bézout dans : et, en évaluant en , on trouve . L'élément admet donc pour inverse.  Montrons que est une base de comme -espace vectoriel. La famille est libre car, si il existe une relation non triviale de la forme alors le polynôme est non nul de degré strictement inférieur à et annule . En particulier, , avec le polynôme minimal de . Mais est, par définition, le degré de d'où la contradiction.  Pour montrer que la famille est génératrice, soit . Il existe un polynôme tel que . Par division euclidienne de par , il existe des polynômes tels que et Si s'écrit , alors . Cela montre que la famille est génératrice.  "
},
{
  "id": "ch-number-fields-2-13",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-13",
  "type": "Démonstration",
  "number": "2.1.4",
  "title": "Démonstration plus conceptuelle.",
  "body": " Démonstration plus conceptuelle  Il s'agit d'une preuve équivalente à la précédente, mais en utilisant les résultats de bases sur les anneaux. On commence par observer qu'on dispose d'une application d'évaluation en : C'est un morphisme d'anneaux d'image . Son noyau est l'idéal des polynômes qui s'annulent en que l'on avait noté plus haut.  Notons le polynôme minimal de . Comme , il résulte du théorème d'isomorphisme que . Comme est irréductible, l'anneau est un corps. Il en est donc de même pour .  Par division euclidienne, le -espace vectoriel admet pour base les classes de . L'isomorphisme ci-dessus envoie la classe de vers , donc la classe de la base vers la famille .  "
},
{
  "id": "prop-corps-engendres-par-nombre-algebrique",
  "level": "2",
  "url": "ch-number-fields-2.html#prop-corps-engendres-par-nombre-algebrique",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": "  Soit un nombre algébrique. L'application induit une bijection entre et l'ensemble des conjugués de ( ).   "
},
{
  "id": "ch-number-fields-2-17",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-17",
  "type": "Démonstration",
  "number": "2.1.5",
  "title": "",
  "body": " On utilise l'isomorphisme (qui envoie la classe de vers ). Par la propriété universelle des anneaux quotients, un morphisme d'anneaux de vers revient à la donnée d'un morphisme d'anneaux qui s'annule sur : Or, un tel morphisme est entièrement déterminé par l'image de et l'égalité équivaut à racine de . Ainsi, on a une bijection Il suffit de retracer sa construction pour se convaincre qu'elle est donnée par .  "
},
{
  "id": "ch-number-fields-2-18",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-18",
  "type": "Exemple",
  "number": "2.1.7",
  "title": "",
  "body": " Soit un entier sans facteur carré et . Comme possède deux conjugués, à savoir et , il existe exactement deux plongements complexes de vers :    l'inclusion canonique     le morphisme , qui échange les deux racines du polynôme minimal de .    Si , alors comme possède trois conjugués complexes, à savoir , et où est une racine cubique primitive de l'unité, il existe donc exactement trois plongements complexes de vers .    l'inclusion canonique ,    le morphisme ,    le morphisme .    On remarque en particulier que les plongements complexes de ne le préservent pas forcément : et ne sont pas inclus dans , donc pas inclus dans . On dit que n'est pas Galoisien .  "
},
{
  "id": "prop-nombre-de-morphismes-de-corps",
  "level": "2",
  "url": "ch-number-fields-2.html#prop-nombre-de-morphismes-de-corps",
  "type": "Proposition",
  "number": "2.1.8",
  "title": "",
  "body": "  Soit un corps de nombres de degré . Alors est un ensemble fini de cardinal .  Plus généralement, soit est une inclusion de corps de nombres et un morphisme de corps. L'ensemble des morphismes qui prolongent : est de cardinal .   "
},
{
  "id": "ch-number-fields-2-21",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-21",
  "type": "Démonstration",
  "number": "2.1.6",
  "title": "",
  "body": " Remarquons que est réduit au seul morphisme d'inclusion canonique En effet, si , alors pour tout entier naturel , on a et donc, pour tout rationnel , .  . En particulier, la première assertion est un cas particulier de la seconde en prenant et .  Il suffit donc de démontrer la seconde assertion, et on procède par récurrence sur le degré . Si , alors et il n'y a qu'un seul prolongement possible, à savoir lui-même.  Supposons maintenant que et que le résultat est démontré pour les extensions de degré strictement inférieur à . Soit . Notons le plus petit sous-corps de contenant à la fois et :   Si satisfait à , alors il en est de même pour . Ainsi, on dispose d'une application de restriction L'image inverse d'un élément par cette application correspond à l'ensemble . Par hypothèse de récurrence, il est de cardinal . D'après la multiplicativité des degrés d'extensions (voir le ), il reste à montrer que En effet, si est une application, alors . Dans notre cas, le cardinal est constant en et donc pour n'importe quel . le cardinal de l'ensemble d'arrivée est .  Pour compter le cardinal de , on utilise le même argument que celui donné pour la démonstration de la pour montrer que est en bijection avec l'ensemble des racines complexes du polynôme , où désigne le polynôme minimal Il est défini comme l'unique polynôme unitaire générateur de l'idéal des polynômes qui s'annulent en . de sur , et où désigne le polynôme auquel on a appliqué à chacun de ses coefficients.  On part de l'isomorphisme , de sorte qu'un morphisme de corps qui prolonge équivaut à la donnée un morphisme d'anneaux qui envoit sur . Autrement dit, est une racine complexe de . D'où la bijection.  Comme est irréductible dans , il en est de même pour dans et possède donc racines complexes distinctes. Ainsi, il y a exactement choix possibles pour , et donc ce qui conclut la démonstration.  "
},
{
  "id": "thm-element-primitif",
  "level": "2",
  "url": "ch-number-fields-2.html#thm-element-primitif",
  "type": "Théorème",
  "number": "2.1.9",
  "title": "de l’élément primitif.",
  "body": " de l'élément primitif   Soit un corps de nombres. Il existe un élément tel que .   "
},
{
  "id": "ch-number-fields-2-24",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-24",
  "type": "Démonstration",
  "number": "2.1.7",
  "title": "Démonstration du Théorème 2.1.9.",
  "body": " Démonstration du  Notons le degré de et les plongements complexes de . La démonstration repose sur le lemme suivant:    Si pour tout , alors .     L'ensemble des tels que est en bijection avec l'ensemble des plongements complexes de qui coincident avec sur . Son cardinal est égal à d'après la . Donc, si tous les sont distincts, alors , ce qui implique .   D'après le , il suffit de démontrer qu'il existe tel que pour tout . Notons C'est un sous-espace vectoriel strict de car . On est alors réduit à démontrer que n'est pas tout entier. On le déduit du lemme qui suit.    Soit un corps infini et un -espace vectoriel de dimension finie. Si sont des sous-espaces vectoriels stricts de , alors .     Démonstration du  On raisonne par récurrence sur , le nombre de sous-espaces. Si , c'est évident car est strict dans .  Supposons le résultat démontré en et montrons-le pour . Par hypothèse de récurrence, il existe . Si , alors est non vide car contient ; c'est gagné. On peut donc supposer . Comme est stricte, soit .  L'idée de la preuve consiste à contempler la droite dans qui passe par et de direction et de montrer qu'elle intersecte chaque au plus une fois; comme est infini, on peut donc trouver un point de qui n'est dans aucun des .  Fixons . Supposons qu'il existe deux éléments distincts tels que et . Alors et donc . Par choix de , on en déduit que . Mais alors ce qui est absurde. En conclusion, il existe au plus un seul tel que , donc au plus éléments tels que . Comme est infini, il existe donc tel que . Cela démontre que , ce qui conclut.   "
},
{
  "id": "ch-number-fields-2-25",
  "level": "2",
  "url": "ch-number-fields-2.html#ch-number-fields-2-25",
  "type": "Mise au point",
  "number": "2.1.12",
  "title": "",
  "body": "   Soient deux entiers distincts. Montrer que   En déduire que si sont deux entiers sans facteur carré distincts, alors le polynôme est irréductible dans .    Il est clair que . Pour l'inclusion réciproque, il suffit de montrer que (quitte à inverser les rôles de et ). On a et donc . De l'égalité on déduit que , ce qui conclut.  Si sont deux entiers qui ne sont pas des carrés et qui n'ont pas de facteur carré commun différents de , alors les corps sont de degré et distincts. Donc . Par le premier point, on en déduit que et donc que le polynôme minimal de est de degré . Or, le polynôme annule , il est donc le polynôme minimal de et en particulier irréductible dans . Comme ses coefficients sont entiers et qu'il est primitif, il est aussi irréductible dans .   "
},
{
  "id": "sec-normes-traces",
  "level": "1",
  "url": "sec-normes-traces.html",
  "type": "Section",
  "number": "2.2",
  "title": "Traces et Normes",
  "body": " Traces et Normes  Soit un corps de nombres de degré . On rappelle que est en particulier un -espace vectoriel de dimension finie . Pour tout , la multiplication par définit une application linéaire de dans lui-même:    Trace et norme   La trace de est la trace de l'application linéaire :   La norme de est le déterminant de l'application linéaire :     Si , alors et . De même, pour , on a . Par linéarité de la trace et multiplicativité du déterminant, on en déduit les relations suivantes:    Soit un corps quadratique où est un entier sans facteur carré. Pour , la matrice de dans la base est   On en déduit que   En particulier, on redémontre que l'application est multiplicative.   On désigne par le polynôme caractéristique de l'endomorphisme . Le théorème de Cayley-Hamilton assure que , ce qui revient au même que . Le polynôme est donc un polynôme annulateur de . Sa relation au polynôme minimal de est donnée par la proposition suivante.    Si , alors où .     Soit le degré de . Alors est une base de sur . Si désigne une base de sur , alors est une base de sur d'après le . Dans cette base, la matrice de est une matrice par blocs diagonale avec blocs égaux à la matrice compagnon de . Le polynôme caractéristique de est donc .   On en déduit une extension du critère d'intégralité au polynôme caractéristique ( ). L'avantage décisif de cet énoncé est que le polynôme caractéristique reste plus facile à déterminer que le polynôme minimal dans le cas général.    Un nombre algébrique est une entier algébrique si, et seulement si, son polynôme caractéristique appartient à .     Si est un entier algébrique, alors son polynôme minimal appartient à d'après le . Par la , le polynôme caractéristique appartient aussi à . La réciproque est immédiate, puisque est unitaire à coefficients entiers et annule .     Soit . Soit l'ensemble des plongements de dans . Alors                Les assertions (1) et (2) découlent de l'assertion (3) en utilisant le fait que la trace est la somme des valeurs propres et que le déterminant est le produit des valeurs propres. On démarre par la formule qui découle de la . Étant donné , on peut le prolonger en exactement plongements distincts de dans d'après la . Ainsi, chaque facteur apparaît exactement fois dans le produit : où la seconde égalité provient de la .     Soit un entier algébrique. Alors et sont des entiers.     Comme est un entier algébrique son polynôme caractéristique appartient à . Par la , on en déduit que et , en tant que premier et dernier coefficient de (au signe près), sont des entiers.   "
},
{
  "id": "def-trace-et-norme",
  "level": "2",
  "url": "sec-normes-traces.html#def-trace-et-norme",
  "type": "Définition",
  "number": "2.2.1",
  "title": "Trace et norme.",
  "body": " Trace et norme   La trace de est la trace de l'application linéaire :   La norme de est le déterminant de l'application linéaire :    "
},
{
  "id": "sec-normes-traces-5",
  "level": "2",
  "url": "sec-normes-traces.html#sec-normes-traces-5",
  "type": "Exemple",
  "number": "2.2.2",
  "title": "",
  "body": " Soit un corps quadratique où est un entier sans facteur carré. Pour , la matrice de dans la base est   On en déduit que   En particulier, on redémontre que l'application est multiplicative.  "
},
{
  "id": "prop-polynome-caracteristique-et-minimal",
  "level": "2",
  "url": "sec-normes-traces.html#prop-polynome-caracteristique-et-minimal",
  "type": "Proposition",
  "number": "2.2.3",
  "title": "",
  "body": "  Si , alors où .   "
},
{
  "id": "sec-normes-traces-8",
  "level": "2",
  "url": "sec-normes-traces.html#sec-normes-traces-8",
  "type": "Démonstration",
  "number": "2.2.1",
  "title": "",
  "body": " Soit le degré de . Alors est une base de sur . Si désigne une base de sur , alors est une base de sur d'après le . Dans cette base, la matrice de est une matrice par blocs diagonale avec blocs égaux à la matrice compagnon de . Le polynôme caractéristique de est donc .  "
},
{
  "id": "cor-critere-integralite",
  "level": "2",
  "url": "sec-normes-traces.html#cor-critere-integralite",
  "type": "Corollaire",
  "number": "2.2.4",
  "title": "",
  "body": "  Un nombre algébrique est une entier algébrique si, et seulement si, son polynôme caractéristique appartient à .   "
},
{
  "id": "sec-normes-traces-11",
  "level": "2",
  "url": "sec-normes-traces.html#sec-normes-traces-11",
  "type": "Démonstration",
  "number": "2.2.2",
  "title": "",
  "body": " Si est un entier algébrique, alors son polynôme minimal appartient à d'après le . Par la , le polynôme caractéristique appartient aussi à . La réciproque est immédiate, puisque est unitaire à coefficients entiers et annule .  "
},
{
  "id": "prop-formule-traces-normes",
  "level": "2",
  "url": "sec-normes-traces.html#prop-formule-traces-normes",
  "type": "Proposition",
  "number": "2.2.5",
  "title": "",
  "body": "  Soit . Soit l'ensemble des plongements de dans . Alors              "
},
{
  "id": "sec-normes-traces-13",
  "level": "2",
  "url": "sec-normes-traces.html#sec-normes-traces-13",
  "type": "Démonstration",
  "number": "2.2.3",
  "title": "",
  "body": " Les assertions (1) et (2) découlent de l'assertion (3) en utilisant le fait que la trace est la somme des valeurs propres et que le déterminant est le produit des valeurs propres. On démarre par la formule qui découle de la . Étant donné , on peut le prolonger en exactement plongements distincts de dans d'après la . Ainsi, chaque facteur apparaît exactement fois dans le produit : où la seconde égalité provient de la .  "
},
{
  "id": "cor-trace-et-norme-entiers-algebriques",
  "level": "2",
  "url": "sec-normes-traces.html#cor-trace-et-norme-entiers-algebriques",
  "type": "Corollaire",
  "number": "2.2.6",
  "title": "",
  "body": "  Soit un entier algébrique. Alors et sont des entiers.   "
},
{
  "id": "sec-normes-traces-15",
  "level": "2",
  "url": "sec-normes-traces.html#sec-normes-traces-15",
  "type": "Démonstration",
  "number": "2.2.4",
  "title": "",
  "body": " Comme est un entier algébrique son polynôme caractéristique appartient à . Par la , on en déduit que et , en tant que premier et dernier coefficient de (au signe près), sont des entiers.  "
},
{
  "id": "sec-discriminants",
  "level": "1",
  "url": "sec-discriminants.html",
  "type": "Section",
  "number": "2.3",
  "title": "Discriminants",
  "body": " Discriminants  Soit un polynôme unitaire qui se factorise en . On rappelle que son discriminant est défini par la quantité : La mise au carré garantit que est invariante par permutation des racines. On remarque aussi que si, et seulement si, possède une racine multiple.   Exemples de discriminants de polynômes  Le discriminant d'un polynôme est lui-même un polynôme symétrique en les coefficients du polynôme . Si la formule explicite reste raisonnable pour les polynômes de degré inférieur ou égal à , elle devient rapidement compliquée lorsque le degré augmente. Voici quelques exemples:    Si , alors .    Si , alors .    Si , alors .    Si , alors      Dans cette section, on introduit le discriminant d'une famille de nombres algébriques et on montre qu'il coincide au discriminant d'un polynôme dans certaines situations.  Soit un corps de nombres. Dans la section précédente, on a défini la trace d'un élément de . On considère ici l'application bilinéaire symétrique    C'est une forme bilinéaire non dégénérée. En effet, pour tout il existe tel que (comme , il suffit de prendre ).    Discriminant d'une famille   Soit une famille d'éléments de . Le discriminant de cette famille est défini par     Sa relation à la forme bilinéaire est la suivante: si et si désigne l'élément , alors on a     Soit une famille d'éléments de .     si, et seulement si est une base de sur .    Soit une matrice de taille à coefficients rationnels et soit la famille . Alors        Vérifions l' . Si la famille est liée sur , alors il existe des non tous nuls tels que . La relation appliquée à montre que la matrice a un noyau non trivial et que donc son déterminant, , est nul.  Réciproquement, si , alors il existe un vecteur non nul dans le noyau de . Soit . La relation assure que pour tout . Par la non dégénérescence de la forme bilinéaire ( ), l'application est non nulle et donc la famille n'est pas une base.  L' suit d'une propriété générale des formes bilinéaires. Pour tout , on a Dans la situation de l'énoncé, on a donc , d'où la formule en prenant les déterminants.    Discriminant et conjugués   Soit une famille de . Si désigne l'ensemble des plongements complexes de , alors      Il suffit d'invoquer la formule ( ). On constate alors que et on obtient la formule énoncée en prenant les déterminants.   On peut enfin relier le discriminant de certaines familles de à la notion initiale de discriminant d'un polynôme.    Soit un nombre algébrique et . Si désigne l'ensemble des conjugués de , alors   En particulier, .     Soit l'ensemble des plongements complexes de numérotés de sorte que ( cf.  ). La formule de la appliquée dans cette situation donne On reconnaît un déterminant de Vandermonde, d'où la première identité.  Le polynôme minimal de se factorise comme . Pour sa dérivée, la formule de Leibniz donne On en déduit : . Pour terminer, on fait appel à la : Pour retrouver la formule de l'énoncé, il suffit de partitionner l'ensemble à éléments en l'union disjointe des deux ensembles , chacun possédant éléments.   "
},
{
  "id": "exemples-discriminants-polynomes",
  "level": "2",
  "url": "sec-discriminants.html#exemples-discriminants-polynomes",
  "type": "Exemple",
  "number": "2.3.1",
  "title": "Exemples de discriminants de polynômes.",
  "body": " Exemples de discriminants de polynômes  Le discriminant d'un polynôme est lui-même un polynôme symétrique en les coefficients du polynôme . Si la formule explicite reste raisonnable pour les polynômes de degré inférieur ou égal à , elle devient rapidement compliquée lorsque le degré augmente. Voici quelques exemples:    Si , alors .    Si , alors .    Si , alors .    Si , alors     "
},
{
  "id": "rem-trace-non-degeneree",
  "level": "2",
  "url": "sec-discriminants.html#rem-trace-non-degeneree",
  "type": "Remarque",
  "number": "2.3.2",
  "title": "",
  "body": " C'est une forme bilinéaire non dégénérée. En effet, pour tout il existe tel que (comme , il suffit de prendre ).  "
},
{
  "id": "def-discriminant-d-une-famille",
  "level": "2",
  "url": "sec-discriminants.html#def-discriminant-d-une-famille",
  "type": "Définition",
  "number": "2.3.3",
  "title": "Discriminant d’une famille.",
  "body": " Discriminant d'une famille   Soit une famille d'éléments de . Le discriminant de cette famille est défini par    "
},
{
  "id": "prop-discriminants",
  "level": "2",
  "url": "sec-discriminants.html#prop-discriminants",
  "type": "Proposition",
  "number": "2.3.4",
  "title": "",
  "body": "  Soit une famille d'éléments de .     si, et seulement si est une base de sur .    Soit une matrice de taille à coefficients rationnels et soit la famille . Alors      "
},
{
  "id": "sec-discriminants-10",
  "level": "2",
  "url": "sec-discriminants.html#sec-discriminants-10",
  "type": "Démonstration",
  "number": "2.3.1",
  "title": "",
  "body": " Vérifions l' . Si la famille est liée sur , alors il existe des non tous nuls tels que . La relation appliquée à montre que la matrice a un noyau non trivial et que donc son déterminant, , est nul.  Réciproquement, si , alors il existe un vecteur non nul dans le noyau de . Soit . La relation assure que pour tout . Par la non dégénérescence de la forme bilinéaire ( ), l'application est non nulle et donc la famille n'est pas une base.  L' suit d'une propriété générale des formes bilinéaires. Pour tout , on a Dans la situation de l'énoncé, on a donc , d'où la formule en prenant les déterminants.  "
},
{
  "id": "prop-discriminant-conjugues",
  "level": "2",
  "url": "sec-discriminants.html#prop-discriminant-conjugues",
  "type": "Proposition",
  "number": "2.3.5",
  "title": "Discriminant et conjugués.",
  "body": " Discriminant et conjugués   Soit une famille de . Si désigne l'ensemble des plongements complexes de , alors    "
},
{
  "id": "sec-discriminants-12",
  "level": "2",
  "url": "sec-discriminants.html#sec-discriminants-12",
  "type": "Démonstration",
  "number": "2.3.2",
  "title": "",
  "body": " Il suffit d'invoquer la formule ( ). On constate alors que et on obtient la formule énoncée en prenant les déterminants.  "
},
{
  "id": "cor-discriminant-plongements",
  "level": "2",
  "url": "sec-discriminants.html#cor-discriminant-plongements",
  "type": "Corollaire",
  "number": "2.3.6",
  "title": "",
  "body": "  Soit un nombre algébrique et . Si désigne l'ensemble des conjugués de , alors   En particulier, .   "
},
{
  "id": "sec-discriminants-15",
  "level": "2",
  "url": "sec-discriminants.html#sec-discriminants-15",
  "type": "Démonstration",
  "number": "2.3.3",
  "title": "",
  "body": " Soit l'ensemble des plongements complexes de numérotés de sorte que ( cf.  ). La formule de la appliquée dans cette situation donne On reconnaît un déterminant de Vandermonde, d'où la première identité.  Le polynôme minimal de se factorise comme . Pour sa dérivée, la formule de Leibniz donne On en déduit : . Pour terminer, on fait appel à la : Pour retrouver la formule de l'énoncé, il suffit de partitionner l'ensemble à éléments en l'union disjointe des deux ensembles , chacun possédant éléments.  "
},
{
  "id": "sec-OK",
  "level": "1",
  "url": "sec-OK.html",
  "type": "Section",
  "number": "3.1",
  "title": "Structure de <span class=\"process-math\">\\(\\mathcal{O}_K\\)<\/span>",
  "body": " Structure de  Soit un corps de nombres de degré . On définit l' anneau des entiers de comme l'ensemble   L'anneau est en général difficile à déterminer. Par exemple, si l'on a montré que est engendré par un seul élément par le théorème de l'élément primitif ( ), il n'est pas toujours vrai que est monogène, c-à-d de la forme pour un entier algébrique .   Non-monogénie d'anneaux d'entiers dans des extensions biquadratiques  Si sont des entiers sans facteur carré distincts congrus à , alors on peut montrer que l'anneau des entiers de est donné par et qu'il n'est pas monogène.   Si est un corps de degré deux, on a déjà vu que est libre de rang comme groupe abélien ( ). Le but de cette section est de généraliser ce résultat à tout corps de nombres en utilisant le plongement canonique de ( ).  On désigne par l'ensemble des plongements de .   Plongements réels et complexes   Un plongement réel de est un plongement dont l'image est contenue dans .  Un plongement complexe de est un plongement de qui n'est pas réel.    Étant donné un plongement , on peut définir son plongement conjugué    Alors est aussi un plongement de et l'opération définit une involution de . Les points fixes de cette involution sont précisément les plongements réels, tandis que les plongements complexes se regroupent par paires . De cette manière, on peut écrire   où est l'ensemble des plongements réels et est un ensemble de représentants des paires de plongements complexes non réels deux-à-deux non conjugués.  En notant le nombre de plongements réels de et le nombre de plongements complexes non deux-à-deux conjugués, on obtient la relation    Corps quadratiques réels et imaginaires  Soit un entier sans facteur carré et . Alors:    Si , alors est appelé un corps quadratique réel et possède deux plongements réels: l'inclusion canonique et le morphisme . Si , alors est appelé un corps quadratique imaginaire et ne possède pas de plongement réel: les deux plongements complexes et sont conjugués l'un de l'autre.    Si , alors est appelé un corps quadratique imaginaire et ne possède pas de plongement réel: les deux plongements complexes et sont conjugués l'un de l'autre.      Soit . Le polynôme minimal de est qui possède comme racines complexes , , et où est une racine cubique primitive de l'unité. est un corps de nombres de degré qui possède un seul plongement réel, l'inclusion canonique, et un seul plongement complexe non réel, défini par . On a donc et .   Numérotons les plongements de de la manière suivante:    Plongement canonique   On définit alors le plongement canonique de comme le morphisme de -espaces vectoriels     Le plongement canonique est application injective de dans (car chaque indépendament, en tant que morphisme de corps, est injectif).  Le produit est un espace vectoriel réel de dimension . On l'identifiera à en utilisant la base canonique de et la base de ; on appelle cette famille la base canonique de . On est donc dans la cadre d'application de la .    L'image de par le plongement canonique est un réseau de .     On commence par énoncer un lemme général.    Soit une base de en tant que -espace vectoriel. Alors est une -base de qui engendre un réseau de covolume .     On rappelle que le covolume de la famille dans l'espace est donné par la valeur absolue du déterminant de la matrice de changement de base entre et la base canonique de ( cf.  ). Pour , la ième coordonnée s'écrit dans la base canonique comme   Cela montre que le covolume est donné par la valeur absolue du déterminant de la matrice   En multipliant à droite cette matrice par la matrice complexe de taille donnée par   on trouve la matrice   qui n'est autre que la matrice dont le carré du déterminant est égal à . Le déterminant de la matrice réelle initiale est donc égal à une racine du discriminant divisé par , le déterminant de la matrice complexe . La valeur absolue, et donc le covolume, s'en déduit.   On poursuit avec un autre lemme.     contient une base de en tant que -espace vectoriel.     Soit une base de en tant que -espace vectoriel. Pour chaque , il existe un entier non nul tel que ( ). Ainsi est encore une base de comme -espace vectoriel et est contenue dans .   D'après le , il reste à montrer que l'image est discrète dans . On équippe alors de la norme sup dans la base canonique.  Pour et , l'inégalité signifie que pour et que et pour . En particulier, pour tout .  De l'identité   ( ), on déduit que le -ième coefficient de vérifie   Puisqu'il n'y a qu'un nombre fini de polynômes à coefficients entiers vérifiant ces inégalités, il n'y a qu'un nombre fini de possibles, et donc qu'un nombre fini de tels (racine de ). Ainsi, est discret dans .    Plongement canonique des corps quadratiques  Soit . Le corps est quadratique réel, c-à-d que . Le plongement canonique s'écrit donc   Comme où , le réseau est engendré par les vecteurs et où est le conjugué de .  Son covolume est .   On déduit de la le corollaire suivant :    L'anneau est un -module libre de rang ; autrement dit, il existe une base de en tant que -espace vectoriel telle que .    "
},
{
  "id": "sec-OK-5",
  "level": "2",
  "url": "sec-OK.html#sec-OK-5",
  "type": "Exemple",
  "number": "3.1.1",
  "title": "Non-monogénie d’anneaux d’entiers dans des extensions biquadratiques.",
  "body": " Non-monogénie d'anneaux d'entiers dans des extensions biquadratiques  Si sont des entiers sans facteur carré distincts congrus à , alors on peut montrer que l'anneau des entiers de est donné par et qu'il n'est pas monogène.  "
},
{
  "id": "def-plongements-reels-et-complexes",
  "level": "2",
  "url": "sec-OK.html#def-plongements-reels-et-complexes",
  "type": "Définition",
  "number": "3.1.2",
  "title": "Plongements réels et complexes.",
  "body": " Plongements réels et complexes   Un plongement réel de est un plongement dont l'image est contenue dans .  Un plongement complexe de est un plongement de qui n'est pas réel.   "
},
{
  "id": "sec-OK-16",
  "level": "2",
  "url": "sec-OK.html#sec-OK-16",
  "type": "Exemple",
  "number": "3.1.3",
  "title": "Corps quadratiques réels et imaginaires.",
  "body": " Corps quadratiques réels et imaginaires  Soit un entier sans facteur carré et . Alors:    Si , alors est appelé un corps quadratique réel et possède deux plongements réels: l'inclusion canonique et le morphisme . Si , alors est appelé un corps quadratique imaginaire et ne possède pas de plongement réel: les deux plongements complexes et sont conjugués l'un de l'autre.    Si , alors est appelé un corps quadratique imaginaire et ne possède pas de plongement réel: les deux plongements complexes et sont conjugués l'un de l'autre.    "
},
{
  "id": "sec-OK-17",
  "level": "2",
  "url": "sec-OK.html#sec-OK-17",
  "type": "Exemple",
  "number": "3.1.4",
  "title": "",
  "body": " Soit . Le polynôme minimal de est qui possède comme racines complexes , , et où est une racine cubique primitive de l'unité. est un corps de nombres de degré qui possède un seul plongement réel, l'inclusion canonique, et un seul plongement complexe non réel, défini par . On a donc et .  "
},
{
  "id": "def-plongement-canonique",
  "level": "2",
  "url": "sec-OK.html#def-plongement-canonique",
  "type": "Définition",
  "number": "3.1.5",
  "title": "Plongement canonique.",
  "body": " Plongement canonique   On définit alors le plongement canonique de comme le morphisme de -espaces vectoriels    "
},
{
  "id": "thm-reseau-du-plongement-canonique",
  "level": "2",
  "url": "sec-OK.html#thm-reseau-du-plongement-canonique",
  "type": "Théorème",
  "number": "3.1.6",
  "title": "",
  "body": "  L'image de par le plongement canonique est un réseau de .   "
},
{
  "id": "sec-OK-24",
  "level": "2",
  "url": "sec-OK.html#sec-OK-24",
  "type": "Démonstration",
  "number": "3.1.1",
  "title": "",
  "body": " On commence par énoncer un lemme général.    Soit une base de en tant que -espace vectoriel. Alors est une -base de qui engendre un réseau de covolume .     On rappelle que le covolume de la famille dans l'espace est donné par la valeur absolue du déterminant de la matrice de changement de base entre et la base canonique de ( cf.  ). Pour , la ième coordonnée s'écrit dans la base canonique comme   Cela montre que le covolume est donné par la valeur absolue du déterminant de la matrice   En multipliant à droite cette matrice par la matrice complexe de taille donnée par   on trouve la matrice   qui n'est autre que la matrice dont le carré du déterminant est égal à . Le déterminant de la matrice réelle initiale est donc égal à une racine du discriminant divisé par , le déterminant de la matrice complexe . La valeur absolue, et donc le covolume, s'en déduit.   On poursuit avec un autre lemme.     contient une base de en tant que -espace vectoriel.     Soit une base de en tant que -espace vectoriel. Pour chaque , il existe un entier non nul tel que ( ). Ainsi est encore une base de comme -espace vectoriel et est contenue dans .   D'après le , il reste à montrer que l'image est discrète dans . On équippe alors de la norme sup dans la base canonique.  Pour et , l'inégalité signifie que pour et que et pour . En particulier, pour tout .  De l'identité   ( ), on déduit que le -ième coefficient de vérifie   Puisqu'il n'y a qu'un nombre fini de polynômes à coefficients entiers vérifiant ces inégalités, il n'y a qu'un nombre fini de possibles, et donc qu'un nombre fini de tels (racine de ). Ainsi, est discret dans .  "
},
{
  "id": "sec-OK-25",
  "level": "2",
  "url": "sec-OK.html#sec-OK-25",
  "type": "Exemple",
  "number": "3.1.9",
  "title": "Plongement canonique des corps quadratiques.",
  "body": " Plongement canonique des corps quadratiques  Soit . Le corps est quadratique réel, c-à-d que . Le plongement canonique s'écrit donc   Comme où , le réseau est engendré par les vecteurs et où est le conjugué de .  Son covolume est .  "
},
{
  "id": "cor-structure-of-OK",
  "level": "2",
  "url": "sec-OK.html#cor-structure-of-OK",
  "type": "Corollaire",
  "number": "3.1.10",
  "title": "",
  "body": "  L'anneau est un -module libre de rang ; autrement dit, il existe une base de en tant que -espace vectoriel telle que .   "
},
{
  "id": "sec-discriminant-de-K",
  "level": "1",
  "url": "sec-discriminant-de-K.html",
  "type": "Section",
  "number": "3.2",
  "title": "Discriminant de <span class=\"process-math\">\\(K\\)<\/span>",
  "body": " Discriminant de  Soit un corps de nombres de degré et son anneau des entiers. D'après le , il existe une -base de . Un choix alternatif de base diffère de la première par une matrice de , soit déterminant . Par conséquent, le discriminant ne dépend pas du choix de la base de ( , ). On peut donc définir le discriminant de comme suit.   Discriminant d'un corps de nombres   Le discriminant de est le discriminant d'une base de en tant que -module. On le note .     Discriminant des corps quadratiques  Soit un corps quadratique où est un entier sans facteur carré. On a vu que l'anneau des entiers de est donné par   Le discriminant de se calcule alors comme si , et comme si . On trouve ainsi     Soit le sous-ensemble de formé des où est une famille de . Alors est non réduit à zéro et admet un plus petit élément qui est précisément (on le déduit de la , ).   Plus généralement, la s'étend à un sous-groupe de contenant une base de .   Discriminant d'un sous-groupe de   Soit un sous-groupe contenant une base de On notera que est immédiatement libre de rang en tant que -module. . Le discriminant de est le discriminant d'une base de en tant que -module. On le note .     s'applique en particulier aux anneaux de la forme où est un élément primitif de , ou bien aux idéaux non-nuls En effet, est un idéal non nul, si et si désigne une -base de , alors est une base de contenue dans . .    Soit des sous-groupes de contenant une base de . Alors est d'indice fini dans et on a la relation      D'après la et le , on a    La est fondamentale pour le calcul de . Elle indique en particulier que le discriminant d'un sous-anneau ne peut diminuer que d'un carré ! Cela implique par exemple que si est un entier sans facteur carré, alors .   Nombre plastique  Soit le nombre plastique :   Ce nombre est l'unique nombre réel vérifiant (de manière parallèle au nombre d'or qui vérifie ). C'est un entier algébrique de degré trois.  Utilisons la pour déterminer l'anneau des entiers du corps de nombres . On a et, pour montrer que cette inclusion est une égalité, il suffit de montrer que . Or la donne   Comme est le polynôme minimal de , on a   La première égalité suit de la définition, la seconde s'obtient par le , enfin on peut le calculer le discriminant d'un polynôme à l'aide des formules ). Comme est sans facteur carré, on a nécessairement .   "
},
{
  "id": "def-discriminant-dun-corps-de-nombres",
  "level": "2",
  "url": "sec-discriminant-de-K.html#def-discriminant-dun-corps-de-nombres",
  "type": "Définition",
  "number": "3.2.1",
  "title": "Discriminant d’un corps de nombres.",
  "body": " Discriminant d'un corps de nombres   Le discriminant de est le discriminant d'une base de en tant que -module. On le note .   "
},
{
  "id": "sec-discriminant-de-K-4",
  "level": "2",
  "url": "sec-discriminant-de-K.html#sec-discriminant-de-K-4",
  "type": "Exemple",
  "number": "3.2.2",
  "title": "Discriminant des corps quadratiques.",
  "body": " Discriminant des corps quadratiques  Soit un corps quadratique où est un entier sans facteur carré. On a vu que l'anneau des entiers de est donné par   Le discriminant de se calcule alors comme si , et comme si . On trouve ainsi   "
},
{
  "id": "sec-discriminant-de-K-5",
  "level": "2",
  "url": "sec-discriminant-de-K.html#sec-discriminant-de-K-5",
  "type": "Remarque",
  "number": "3.2.3",
  "title": "",
  "body": " Soit le sous-ensemble de formé des où est une famille de . Alors est non réduit à zéro et admet un plus petit élément qui est précisément (on le déduit de la , ).  "
},
{
  "id": "def-discriminant-dun-sous-groupe",
  "level": "2",
  "url": "sec-discriminant-de-K.html#def-discriminant-dun-sous-groupe",
  "type": "Définition",
  "number": "3.2.4",
  "title": "Discriminant d’un sous-groupe de <span class=\"process-math\">\\(\\mathcal{O}_K\\)<\/span>.",
  "body": " Discriminant d'un sous-groupe de   Soit un sous-groupe contenant une base de On notera que est immédiatement libre de rang en tant que -module. . Le discriminant de est le discriminant d'une base de en tant que -module. On le note .   "
},
{
  "id": "prop-discriminant-indice",
  "level": "2",
  "url": "sec-discriminant-de-K.html#prop-discriminant-indice",
  "type": "Proposition",
  "number": "3.2.5",
  "title": "",
  "body": "  Soit des sous-groupes de contenant une base de . Alors est d'indice fini dans et on a la relation    "
},
{
  "id": "sec-discriminant-de-K-10",
  "level": "2",
  "url": "sec-discriminant-de-K.html#sec-discriminant-de-K-10",
  "type": "Démonstration",
  "number": "3.2.1",
  "title": "",
  "body": " D'après la et le , on a   "
},
{
  "id": "sec-discriminant-de-K-12",
  "level": "2",
  "url": "sec-discriminant-de-K.html#sec-discriminant-de-K-12",
  "type": "Exemple",
  "number": "3.2.6",
  "title": "Nombre plastique.",
  "body": " Nombre plastique  Soit le nombre plastique :   Ce nombre est l'unique nombre réel vérifiant (de manière parallèle au nombre d'or qui vérifie ). C'est un entier algébrique de degré trois.  Utilisons la pour déterminer l'anneau des entiers du corps de nombres . On a et, pour montrer que cette inclusion est une égalité, il suffit de montrer que . Or la donne   Comme est le polynôme minimal de , on a   La première égalité suit de la définition, la seconde s'obtient par le , enfin on peut le calculer le discriminant d'un polynôme à l'aide des formules ). Comme est sans facteur carré, on a nécessairement .  "
},
{
  "id": "app-irreducibilite-polynome",
  "level": "1",
  "url": "app-irreducibilite-polynome.html",
  "type": "Section",
  "number": "A.1",
  "title": "Démontrer l’irréductibilité d’un polynôme",
  "body": " Démontrer l'irréductibilité d'un polynôme  Étant donné un polynôme unitaire , il n'y a pas une méthode générale pour déterminer son irréductibilité dans . Nous rassemblons ici quelques techniques pour montrer l'irréductibilité dans des cas favorables.    Soit un polynôme unitaire. Supposons qu'il existe un nombre premier tel que est  désigne l'image de par la réduction modulo . irréductible dans . Alors est irréductible dans .     La preuve est presque immédiate : si était réductible dans , alors il existerait une factorisation non triviale avec unitaires de degré strictement positif. En réduisant modulo , on obtiendrait une factorisation non triviale de dans , ce qui contredit l'irréductibilité de .   On peut utiliser ce lemme pour prouver l'irréductibilité de certains polynômes en choisissant astucieusement le nombre premier . Par exemple, le polynôme est irréductible dans car sa réduction modulo est , qui n'a pas de racine dans et est donc irréductible.   Quelques polynômes unitaires irréductibles dans  Dans les tables suivantes, on liste les polynômes unitaires irréductibles de degré dans , pour .   Polynômes irréductibles de degré dans        Polynômes irréductibles de degré dans       Polynômes irréductibles de degré dans        Polynômes irréductibles de degré dans         Polynômes irréductibles de degré dans         Polynômes irréductibles de degré dans              Polynômes irréductibles de degré dans           Polynômes irréductibles de degré dans               On dispose également du critère d'Eisenstein, qui permet de prouver l'irréductibilité de certains polynômes unitaires à coefficients entiers en regardant la divisibilité de leurs coefficients par un nombre premier donné.  Polynôme d'Eisenstein   Soit un nombre premier. Un polynôme unitaire est dit  -Eisenstein si :  divise tous les coefficients ,  ne divise pas le coefficient constant .       critère d'Eisenstein   Soit un polynôme unitaire tel qu'il existe un nombre premier pour lequel est -Eisenstein. Alors est irréductible dans .     Exemples de polynômes irréductibles par le critère d'Eisenstein  Le polynôme est irréductible dans car il est -Eisenstein.  Le ème polynôme cyclotomique est irréductible dans pour tout nombre premier . Pour le vérifier, on montre que est -Eisenstein; En effet, étant donné un polynôme , l'irréductibilité de est équivalente à celle de ses translatées, par exemple . En effectuant le changement de variable , on obtient Or, pour , le coefficient binomial est divisible par , tandis que le terme constant n'est pas divisible par . Ainsi, est -Eisenstein, et donc irréductible dans . Par conséquent, est également irréductible dans .   "
},
{
  "id": "lem-",
  "level": "2",
  "url": "app-irreducibilite-polynome.html#lem-",
  "type": "Lemme",
  "number": "A.1.1",
  "title": "",
  "body": "  Soit un polynôme unitaire. Supposons qu'il existe un nombre premier tel que est  désigne l'image de par la réduction modulo . irréductible dans . Alors est irréductible dans .   "
},
{
  "id": "app-irreducibilite-polynome-4",
  "level": "2",
  "url": "app-irreducibilite-polynome.html#app-irreducibilite-polynome-4",
  "type": "Démonstration",
  "number": "A.1.1",
  "title": "",
  "body": " La preuve est presque immédiate : si était réductible dans , alors il existerait une factorisation non triviale avec unitaires de degré strictement positif. En réduisant modulo , on obtiendrait une factorisation non triviale de dans , ce qui contredit l'irréductibilité de .  "
},
{
  "id": "app-irreducibilite-polynome-6",
  "level": "2",
  "url": "app-irreducibilite-polynome.html#app-irreducibilite-polynome-6",
  "type": "Exemple",
  "number": "A.1.2",
  "title": "Quelques polynômes unitaires irréductibles dans <span class=\"process-math\">\\((\\mathbb{Z}\/p\\mathbb{Z})[X]\\)<\/span>.",
  "body": " Quelques polynômes unitaires irréductibles dans  Dans les tables suivantes, on liste les polynômes unitaires irréductibles de degré dans , pour .   Polynômes irréductibles de degré dans        Polynômes irréductibles de degré dans       Polynômes irréductibles de degré dans        Polynômes irréductibles de degré dans         Polynômes irréductibles de degré dans         Polynômes irréductibles de degré dans              Polynômes irréductibles de degré dans           Polynômes irréductibles de degré dans               "
},
{
  "id": "def-",
  "level": "2",
  "url": "app-irreducibilite-polynome.html#def-",
  "type": "Définition",
  "number": "A.1.11",
  "title": "Polynôme d’Eisenstein.",
  "body": " Polynôme d'Eisenstein   Soit un nombre premier. Un polynôme unitaire est dit  -Eisenstein si :  divise tous les coefficients ,  ne divise pas le coefficient constant .     "
},
{
  "id": "prop-",
  "level": "2",
  "url": "app-irreducibilite-polynome.html#prop-",
  "type": "Proposition",
  "number": "A.1.12",
  "title": "critère d’Eisenstein.",
  "body": " critère d'Eisenstein   Soit un polynôme unitaire tel qu'il existe un nombre premier pour lequel est -Eisenstein. Alors est irréductible dans .   "
},
{
  "id": "app-irreducibilite-polynome-9",
  "level": "2",
  "url": "app-irreducibilite-polynome.html#app-irreducibilite-polynome-9",
  "type": "Exemple",
  "number": "A.1.13",
  "title": "Exemples de polynômes irréductibles par le critère d’Eisenstein.",
  "body": " Exemples de polynômes irréductibles par le critère d'Eisenstein  Le polynôme est irréductible dans car il est -Eisenstein.  Le ème polynôme cyclotomique est irréductible dans pour tout nombre premier . Pour le vérifier, on montre que est -Eisenstein; En effet, étant donné un polynôme , l'irréductibilité de est équivalente à celle de ses translatées, par exemple . En effectuant le changement de variable , on obtient Or, pour , le coefficient binomial est divisible par , tandis que le terme constant n'est pas divisible par . Ainsi, est -Eisenstein, et donc irréductible dans . Par conséquent, est également irréductible dans .  "
},
{
  "id": "sec-rappels-sur-les-anneaux",
  "level": "1",
  "url": "sec-rappels-sur-les-anneaux.html",
  "type": "Section",
  "number": "A.2",
  "title": "Rappels sur les anneaux",
  "body": " Rappels sur les anneaux  Nous rappelons ici quelques définitions et résultats de base sur les anneaux commutatifs avec unité qui seront utilisés dans ce cours.  "
},
{
  "id": "sec-reseaux",
  "level": "1",
  "url": "sec-reseaux.html",
  "type": "Section",
  "number": "A.3",
  "title": "Théorie des réseaux",
  "body": " Théorie des réseaux  Nous rappelons ici quelques définitions et résultats de base sur les réseaux dans les espaces euclidiens qui seront utilisés dans ce cours.   Structure des réseaux  Soit un espace vectoriel réel de dimension finie muni d'une base fixe ainsi que d'une norme fixée quelconque notée . On peut supposer, sans perte de généralité, que et que est la base canonique; le fait de fixer une base nous permettra de pouvoir considérer le déterminant de familles de vecteurs de relativement à cette base.    Un réseau dans est un sous-groupe discret Cela signifie que pour tout ensemble borné , l'intersection est finie. Il suffit de vérifier cette condition pour les , les boules de rayon . de qui contient une base.       Le groupe est un exemple de réseau dans .    Le sous-groupe est un réseau dans . En effet il est discret (car inclus dans ) et contient une base, par exemple .     Les réseaux sont des groupes abéliens libres.   Base d'un réseau   Soit un réseau de . Alors contient une base de qui est aussi une famille génératrice.     Étant donnée une base de incluse dans , on note le sous-groupe de engendré par cette base, à savoir :   C'est un réseau car il contient la base et est discret : si désigne la norme sup dans cette base, alors   qui est un ensemble fini.  Désignons par le pavé fondamental de , à savoir:   Tout élément de peut s'écrire de manière unique comme la somme d'un élément de et d'un élément de . En effet, étant donné de coordonnées dans la base , on a   où le premier terme appartient à et le second terme appartient à . L'unicité de cette écriture suit de la propriété qui définit la partie entière.     est d'indice fini dans et il existe un entier tel que .     Comme la base est incluse dans , on a . Montrons que cette inclusion est d'indice fini. Pour cela, on considère l'application   Cette application est surjective : si , on peut l'écrire comme avec et . En particulier est un élément de qui s'envoie sur . Comme est un ensemble fini (car est borné et que est discret), on en déduit que est un ensemble fini.  Enfin, par Lagrange, en posant , on a , d'où .   Notons le sous-ensemble de formé des où parcourt les bases de contenues dans . Cette ensemble est non vide par définition d'un réseau. D'après le , il est aussi discret : comme tout élément de s'écrit comme combinaison linéaire à coefficients entiers de la base , on a pour un certain entier . En conséquence, admet un plus petit élément. Il nous reste alors à démontrer le lemme suivant.    Soit une base de contenue dans telle que soit minimal. Alors est une base de .     Comme et , on a   En particulier, il suffit de montrer que est réduit à zéro. Supposons par l'absurde qu'il existe un élément non nul . Soient , , les coordonnées de dans la base et soit tel que . Alors est une base de dans . Son déterminant se calcule ainsi:   ce qui contredit la minimalité de .    On a donc montré que tout réseau de est libre de rang en tant que groupe abélien, ç-à-d de la forme de la forme   où est une base de contenue dans . Une famille qui réalise l'égalité ci-dessus est appelée base de . Puisque les bases de diffèrent d'un changement de base dans   les bases de sont caractérisées comme les bases de dans de déterminant minimal (en valeur absolue) relativement à la base (voir la preuve du ).   Covolume d'un réseau   On appelle covolume du réseau (relativement à ) la mesure commune d'un pavé fondamental, à savoir le nombre réel positif       Soit une inclusion de réseaux dans . Alors      Soient une base de et une base de . Comme , on peut écrire pour des entiers . Posons , de sorte que . Par le théorème des facteurs invariants dans l'anneau principal , il existe des matrices inversibles telles que soit une matrice diagonale, disons où sont les facteurs invariants de . Quitte à changer les base et en et , on a   En particulier, on a . Par ailleurs, cette même formule donne   d'où .    Calcul de covolume  On peut utiliser la proposition précédente pourcalculer le covolume du réseau de sans avoir à en trouver une base. En effet, s'identifie au noyau de l'application surjective   On a donc et, comme le covolume de est égal à 1, on en déduit que le covolume de est égal à 3.  On peut maintenant en déduire une base: les vecteurs et sont dans et   Par minimalité du covolume, est une base de .     Lemme du corps convexe  Soit un espace vectoriel réel de dimension finie muni d'une base fixée ainsi que d'une norme . On équippe de la mesure de Lebesgue relative à la base , à savoir l'unique mesure de Borel sur invariant par translation et telle que où désigne le pavé fondamental de la base .  Soit un réseau de . On a vu dans la sous-section précédente que admet une base, c-à-d est de la forme pour une base de contenue dans . On a appelé pavé fondamental de les parallélépipèdes de la forme où est une base de . Par définition du covolume et la formule de la Jacobienne (ou du changement de variable ) en théorie de la mesure, on a . On étend ces notions des pavés aux espaces mesurables.   Domaine fondamental   Soit un ensemble mesurable de . On dit que est un domaine fondamental de si tout s'écrit de manière unique comme avec et .    Les domaines fondamentaux de ont tous la même mesure, égale au covolume de ; cela découle du lemme de Blichfeldt :   de Blichfeldt   Soit un domaine fondamental de et un ensemble mesurable tel que, pour tout , implique . Alors .     Par définition d'un domaine fondamental, on a   En prenant l'intersection avec , on obtient . La relation   et l'invariance de la mesure par translation donnent . En sommant sur , on trouve   Puisque les ensembles sont disjoints, on a , d'où le résultat.  On peut maintenant énoncer le lemme du corps convexe, qui est un résultat fondamental de la géométrie des nombres.  Lemme du corps convexe   Soit un ensemble mesurable convexe Cela signifie que si et sont deux points de , alors le segement qui relie à -- à savoir l'ensemble des pour -- est inclus dans . , symétrique Cela signifie que si , alors . par rapport à l'origine et vérifiant l'un des points suivants:    , ou   est compact et .   Alors contient un élément non nul de .     Soit de sorte que . En particulier, et le lemme de Blichfeldt assure qu'il existe distincts tels que . Comme est convexe et symétrique, on a . Par ailleurs, comme , on a . Ainsi, contient un élément non nul de .  Si est compact et , on peut appliquer le même raisonnement à des épaississements de : pour , on considère   C'est un ouvert de (donc mesurable) qui contient et tel que . En particulier et le même raisonnement que précédemment trouve des éléments non nuls de dans .  Comme est discret, l'intersection est finie, et la suite d'entiers est et décroît lorsque diminue. Sa valeur limite lorsque , à savoir , est un entier strictement positif.     Applications en théorie des nombres  On démontre deux résultats classiques de la théorie des nombres à partir du lemme du corps convexe de Minkowski.   Euler, Fermat   Soit un nombre premier . Alors il existe tels que .     On commence par un lemme classique du à Euler.    Si , alors est un carré modulo .     On considère le polynôme dans qui admet au plus racines. Par Fermat, annule tous les carrés de , et il y en a exactement : pour le voir, on peut utiliser l'isomorphisme obtenu en considérant le morphisme surjectif de vers ses carrés et de noyau .  On en déduit que les racines de sont exactement les carrés de . Comme , on a que est racine de , donc est un carré dans .   Soit donc une racine de modulo . On considère le réseau de    C'est un réseau de covolume : en effet, s'identifie au noyau du morphisme surjectif   et donc , puis d'après la .  De plus, pour tout , on a .  On considère la boule ouverte de rayon ; c'est un ouvert convexe et symétrique de mesure  . Le lemme du corps convexe assure qu'il existe non nul. Un tel couple vérifie et . On en déduit .    Lagrange   Tout entier positif est somme de quatre carrés.     Il suffit de démontrer le résultat pour les entier sans facteur carré, ce que l'on suppose.     est somme de deux carrés dans .     Le théorème des restes chinois nous permet de se ramener au cas où En effet, si est sans facteur carré, alors le morphisme canonique est surjectif (un isomorphisme, à vrai dire). Si est somme de deux carrés dans , disons , pour chaque premier , et si sont deux entiers tels que , alors dans .  est un nombre premier.  Comme le cas est évident, on suppose impair. Comme l'ensemble et son \"translaté opposé\" ont tous deux éléments (voir la preuve du \"), ils ne peuvent être disjoints et donc ils existe tels que .   Soient donc tels que . On considère le réseau de    Comme ce réseau s'identifie au noyau de l'application surjective   on a .  De plus, si , alors   En considérant l'ensemble mesurable connexe symétrique qu'est la boule ouverte de centre zéro et de rayon , à savoir   on a , car .  Il existe donc un élement , vérifiant alors et . Cela conclut.    Un entier positif est somme de trois carrés si et seulement s'il n'est pas de la forme .    "
},
{
  "id": "def-reseau",
  "level": "2",
  "url": "sec-reseaux.html#def-reseau",
  "type": "Définition",
  "number": "A.3.1",
  "title": "",
  "body": "  Un réseau dans est un sous-groupe discret Cela signifie que pour tout ensemble borné , l'intersection est finie. Il suffit de vérifier cette condition pour les , les boules de rayon . de qui contient une base.   "
},
{
  "id": "subsec-structure-des-reseaux-4",
  "level": "2",
  "url": "sec-reseaux.html#subsec-structure-des-reseaux-4",
  "type": "Exemple",
  "number": "A.3.2",
  "title": "",
  "body": "   Le groupe est un exemple de réseau dans .    Le sous-groupe est un réseau dans . En effet il est discret (car inclus dans ) et contient une base, par exemple .    "
},
{
  "id": "prop-base-reseau",
  "level": "2",
  "url": "sec-reseaux.html#prop-base-reseau",
  "type": "Proposition",
  "number": "A.3.3",
  "title": "Base d’un réseau.",
  "body": " Base d'un réseau   Soit un réseau de . Alors contient une base de qui est aussi une famille génératrice.   "
},
{
  "id": "subsec-structure-des-reseaux-7",
  "level": "2",
  "url": "sec-reseaux.html#subsec-structure-des-reseaux-7",
  "type": "Démonstration",
  "number": "A.3.1.1",
  "title": "",
  "body": " Étant donnée une base de incluse dans , on note le sous-groupe de engendré par cette base, à savoir :   C'est un réseau car il contient la base et est discret : si désigne la norme sup dans cette base, alors   qui est un ensemble fini.  Désignons par le pavé fondamental de , à savoir:   Tout élément de peut s'écrire de manière unique comme la somme d'un élément de et d'un élément de . En effet, étant donné de coordonnées dans la base , on a   où le premier terme appartient à et le second terme appartient à . L'unicité de cette écriture suit de la propriété qui définit la partie entière.     est d'indice fini dans et il existe un entier tel que .     Comme la base est incluse dans , on a . Montrons que cette inclusion est d'indice fini. Pour cela, on considère l'application   Cette application est surjective : si , on peut l'écrire comme avec et . En particulier est un élément de qui s'envoie sur . Comme est un ensemble fini (car est borné et que est discret), on en déduit que est un ensemble fini.  Enfin, par Lagrange, en posant , on a , d'où .   Notons le sous-ensemble de formé des où parcourt les bases de contenues dans . Cette ensemble est non vide par définition d'un réseau. D'après le , il est aussi discret : comme tout élément de s'écrit comme combinaison linéaire à coefficients entiers de la base , on a pour un certain entier . En conséquence, admet un plus petit élément. Il nous reste alors à démontrer le lemme suivant.    Soit une base de contenue dans telle que soit minimal. Alors est une base de .     Comme et , on a   En particulier, il suffit de montrer que est réduit à zéro. Supposons par l'absurde qu'il existe un élément non nul . Soient , , les coordonnées de dans la base et soit tel que . Alors est une base de dans . Son déterminant se calcule ainsi:   ce qui contredit la minimalité de .   "
},
{
  "id": "def-covolume",
  "level": "2",
  "url": "sec-reseaux.html#def-covolume",
  "type": "Définition",
  "number": "A.3.6",
  "title": "Covolume d’un réseau.",
  "body": " Covolume d'un réseau   On appelle covolume du réseau (relativement à ) la mesure commune d'un pavé fondamental, à savoir le nombre réel positif    "
},
{
  "id": "prop-comparaison-covolumes",
  "level": "2",
  "url": "sec-reseaux.html#prop-comparaison-covolumes",
  "type": "Proposition",
  "number": "A.3.7",
  "title": "",
  "body": "  Soit une inclusion de réseaux dans . Alors    "
},
{
  "id": "subsec-structure-des-reseaux-15",
  "level": "2",
  "url": "sec-reseaux.html#subsec-structure-des-reseaux-15",
  "type": "Démonstration",
  "number": "A.3.1.2",
  "title": "",
  "body": " Soient une base de et une base de . Comme , on peut écrire pour des entiers . Posons , de sorte que . Par le théorème des facteurs invariants dans l'anneau principal , il existe des matrices inversibles telles que soit une matrice diagonale, disons où sont les facteurs invariants de . Quitte à changer les base et en et , on a   En particulier, on a . Par ailleurs, cette même formule donne   d'où .  "
},
{
  "id": "subsec-structure-des-reseaux-16",
  "level": "2",
  "url": "sec-reseaux.html#subsec-structure-des-reseaux-16",
  "type": "Exemple",
  "number": "A.3.8",
  "title": "Calcul de covolume.",
  "body": " Calcul de covolume  On peut utiliser la proposition précédente pourcalculer le covolume du réseau de sans avoir à en trouver une base. En effet, s'identifie au noyau de l'application surjective   On a donc et, comme le covolume de est égal à 1, on en déduit que le covolume de est égal à 3.  On peut maintenant en déduire une base: les vecteurs et sont dans et   Par minimalité du covolume, est une base de .  "
},
{
  "id": "def-domaine-fondamental",
  "level": "2",
  "url": "sec-reseaux.html#def-domaine-fondamental",
  "type": "Définition",
  "number": "A.3.9",
  "title": "Domaine fondamental.",
  "body": " Domaine fondamental   Soit un ensemble mesurable de . On dit que est un domaine fondamental de si tout s'écrit de manière unique comme avec et .   "
},
{
  "id": "lem-blichfeldt",
  "level": "2",
  "url": "sec-reseaux.html#lem-blichfeldt",
  "type": "Lemme",
  "number": "A.3.10",
  "title": "de Blichfeldt.",
  "body": " de Blichfeldt   Soit un domaine fondamental de et un ensemble mesurable tel que, pour tout , implique . Alors .   "
},
{
  "id": "subsec-minkowski-7",
  "level": "2",
  "url": "sec-reseaux.html#subsec-minkowski-7",
  "type": "Démonstration",
  "number": "A.3.2.1",
  "title": "",
  "body": " Par définition d'un domaine fondamental, on a   En prenant l'intersection avec , on obtient . La relation   et l'invariance de la mesure par translation donnent . En sommant sur , on trouve   Puisque les ensembles sont disjoints, on a , d'où le résultat.  "
},
{
  "id": "lem-corps-convexe",
  "level": "2",
  "url": "sec-reseaux.html#lem-corps-convexe",
  "type": "Lemme",
  "number": "A.3.11",
  "title": "Lemme du corps convexe.",
  "body": " Lemme du corps convexe   Soit un ensemble mesurable convexe Cela signifie que si et sont deux points de , alors le segement qui relie à -- à savoir l'ensemble des pour -- est inclus dans . , symétrique Cela signifie que si , alors . par rapport à l'origine et vérifiant l'un des points suivants:    , ou   est compact et .   Alors contient un élément non nul de .   "
},
{
  "id": "subsec-minkowski-9",
  "level": "2",
  "url": "sec-reseaux.html#subsec-minkowski-9",
  "type": "Démonstration",
  "number": "A.3.2.2",
  "title": "",
  "body": " Soit de sorte que . En particulier, et le lemme de Blichfeldt assure qu'il existe distincts tels que . Comme est convexe et symétrique, on a . Par ailleurs, comme , on a . Ainsi, contient un élément non nul de .  Si est compact et , on peut appliquer le même raisonnement à des épaississements de : pour , on considère   C'est un ouvert de (donc mesurable) qui contient et tel que . En particulier et le même raisonnement que précédemment trouve des éléments non nuls de dans .  Comme est discret, l'intersection est finie, et la suite d'entiers est et décroît lorsque diminue. Sa valeur limite lorsque , à savoir , est un entier strictement positif.  "
},
{
  "id": "thm-euler-fermat",
  "level": "2",
  "url": "sec-reseaux.html#thm-euler-fermat",
  "type": "Théorème",
  "number": "A.3.12",
  "title": "Euler, Fermat.",
  "body": " Euler, Fermat   Soit un nombre premier . Alors il existe tels que .   "
},
{
  "id": "subsec-applications-4",
  "level": "2",
  "url": "sec-reseaux.html#subsec-applications-4",
  "type": "Démonstration",
  "number": "A.3.3.1",
  "title": "",
  "body": " On commence par un lemme classique du à Euler.    Si , alors est un carré modulo .     On considère le polynôme dans qui admet au plus racines. Par Fermat, annule tous les carrés de , et il y en a exactement : pour le voir, on peut utiliser l'isomorphisme obtenu en considérant le morphisme surjectif de vers ses carrés et de noyau .  On en déduit que les racines de sont exactement les carrés de . Comme , on a que est racine de , donc est un carré dans .   Soit donc une racine de modulo . On considère le réseau de    C'est un réseau de covolume : en effet, s'identifie au noyau du morphisme surjectif   et donc , puis d'après la .  De plus, pour tout , on a .  On considère la boule ouverte de rayon ; c'est un ouvert convexe et symétrique de mesure  . Le lemme du corps convexe assure qu'il existe non nul. Un tel couple vérifie et . On en déduit .  "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-reseaux.html#thm-lagrange",
  "type": "Théorème",
  "number": "A.3.14",
  "title": "Lagrange.",
  "body": " Lagrange   Tout entier positif est somme de quatre carrés.   "
},
{
  "id": "subsec-applications-6",
  "level": "2",
  "url": "sec-reseaux.html#subsec-applications-6",
  "type": "Démonstration",
  "number": "A.3.3.2",
  "title": "",
  "body": " Il suffit de démontrer le résultat pour les entier sans facteur carré, ce que l'on suppose.     est somme de deux carrés dans .     Le théorème des restes chinois nous permet de se ramener au cas où En effet, si est sans facteur carré, alors le morphisme canonique est surjectif (un isomorphisme, à vrai dire). Si est somme de deux carrés dans , disons , pour chaque premier , et si sont deux entiers tels que , alors dans .  est un nombre premier.  Comme le cas est évident, on suppose impair. Comme l'ensemble et son \"translaté opposé\" ont tous deux éléments (voir la preuve du \"), ils ne peuvent être disjoints et donc ils existe tels que .   Soient donc tels que . On considère le réseau de    Comme ce réseau s'identifie au noyau de l'application surjective   on a .  De plus, si , alors   En considérant l'ensemble mesurable connexe symétrique qu'est la boule ouverte de centre zéro et de rayon , à savoir   on a , car .  Il existe donc un élement , vérifiant alors et . Cela conclut.  "
},
{
  "id": "subsec-applications-7",
  "level": "2",
  "url": "sec-reseaux.html#subsec-applications-7",
  "type": "Remarque",
  "number": "A.3.16",
  "title": "",
  "body": " Un entier positif est somme de trois carrés si et seulement s'il n'est pas de la forme .  "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "Références",
  "number": "",
  "title": "References",
  "body": " References   Antoine Chambert-Loir  Théorie des Nombres  Université de Rennes 1  2007-2008  Page    Gaëtan Chenevier  Théorie Algébrique des Nombres  École Polytechnique  2011-2019  Page    Javier Fresán  Théorie des Nombres 2  Sorbonne Université  2023-2025  Page   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
