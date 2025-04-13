### Problème #1: Navigation incorrecte
**Nature du probleme**: les liens de navigations utilisaient l'attribut href, ce qui provoquait le rechargement de la page et empêchait Angular de gérer la navigation.
**Solution technique**: J'ai remplacé les attributs href par la directive routerLink dans les balise <a>. Angular peut gérer la navigation côté client sans rechargement.
**Concepts Angular utilisés**: Directive routerLink, routing avec provideRouter, Standalone. (routing avec provideRouter et Standalone était déjà présent dans le code)

### Problème #2: Besoin de formatage de texte
**Nature du probleme**: Les catégories de livre sont affichées avec des underscores, ce qui rend le texte difficile à lire. La premère lettre des catégories n'est pas en majuscule, ce qui nuit à l'esthétique de l'application.
**Solution technique**: J'ai créé un pipe qui transforme les underscores en espaces et met le premier mot en majuscule et le reste en minuscule. Je l'utilise dans le template pour formater les catégories de livres.
**Concepts Angular utilisés**: Création d'un pipe personnalisé (@Pipe, transform), Utilisation des pipes dans les templates HTML avec | format

### Problème #3: Structure de page incomplète
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #4: Pages non affichées
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #5: Route manquante
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #6: Formulaire incomplet
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #7: Validations manquantes
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #8: Navigation manquante
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #9: Erreur dans la console
**Nature du probleme**: Une erreur Cannot read properties of undefined (reading 'title') apparaissait car book était accédé avant d’être défini.
**Solution technique**: J’ai entouré le bloc HTML avec *ngIf="book" pour ne l’afficher que quand les données sont disponibles.
**Concepts Angular utilisés**: Directive *ngIf, affichage conditionnel, gestion des données asynchrones.

### Problème #10: Directive non appliquée
**Nature du probleme**: La directive appHighlight n'était pas utilisée pour mettre en valeur les titres.
**Solution technique**: Directive appliquée aux titres avec [appHighlight]="book.isFavorite" dans book-list et book?.isFavorite ?? false dans book-detail.
**Concepts Angular utilisés**: Directive personnalisée (@Input, Renderer2), ngOnChanges

### Problème #11: Bouton non fonctionnel
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #12: Données non affichées
**Nature du probleme**: La variable utilisée dans le *ngIf du template book-list.component.html n'était pas les bonnes. Le composant tentait d’accéder à data, qui n’existait pas dans le contexte.
**Solution technique**: J’ai remplacé la condition data && data.length > 0 par books && books.length > 0, ce qui correspond bien au nom de la variable contenant la liste des livres.
**Concepts Angular utilisés**: *ngIf

### Problème #13: Descriptions trop longues
**Nature du probleme**: Les descriptions sont parfois trop longue, ce qui rend l'interface visuellement encombrée et peu lisible.
**Solution technique**: J’ai créé un pipe personnalisé truncate qui limite les descriptions à 20 caractères. Si le texte dépasse cette limite, il est tronqué et suivi d’un …. Je l'utilise dans le template book-list.components.html ligne 18.
**Concepts Angular utilisés**: Création d’un pipe personnalisé (@Pipe, PipeTransform), utilisation du pipe dans le template

### Problème #14: Retour utilisateur manquant
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #15: Erreur d'affichage du titre
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #16: Directive incomplète
**Nature du probleme**:
**Solution technique**:
**Concepts Angular utilisés**:

