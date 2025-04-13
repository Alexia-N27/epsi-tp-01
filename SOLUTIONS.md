### Problème #1: Navigation incorrecte
**Nature du probleme**: les liens de navigations utilisaient l'attribut href, ce qui provoquait le rechargement de la page et empêchait Angular de gérer la navigation.
**Solution technique**: J'ai remplacé les attributs href par la directive routerLink dans les balise <a>. Angular peut gérer la navigation côté client sans rechargement.
**Concepts Angular utilisés**: Directive routerLink, routing avec provideRouter, Standalone. (routing avec provideRouter et Standalone était déjà présent dans le code)

### Problème #2: Besoin de formatage de texte
**Nature du probleme**: Les catégories de livre sont affichées avec des underscores, ce qui rend le texte difficile à lire. La premère lettre des catégories n'est pas en majuscule, ce qui nuit à l'esthétique de l'application.
**Solution technique**: J'ai créé un pipe qui transforme les underscores en espaces et met le premier mot en majuscule et le reste en minuscule. Je l'utilise dans le template pour formater les catégories de livres.
**Concepts Angular utilisés**: Création d'un pipe personnalisé (@Pipe, transform), Utilisation des pipes dans les templates HTML avec | format

### Problème #3: Structure de page incomplète
**Nature du probleme**: Des blocs HTML comme le header, le footer, le bouton retour et les cartes de livres étaient dupliqués dans plusieurs composants.
**Solution technique**: J’ai extrait HeaderComponent, FooterComponent, BackButtonComponent et BookCardComponent pour améliorer la modularité et la réutilisation.
**Concepts Angular utilisés**: Composants standalone, @Input, @Output

### Problème #4: Pages non affichées
**Nature du probleme**: Les composants des routes ne s’affichaient pas car certains n’étaient pas standalone.
**Solution technique**:  J’ai vérifié la config provideRouter(routes), et rendu tous les composants de route standalone avec standalone: true.
**Concepts Angular utilisés**:  Routing standalone (provideRouter, routes), router-outlet, composants standalone.

### Problème #5: Route manquante
**Nature du probleme**: Je n'ai pas eu a résoudre ce probleme il l'était déjà : { path: 'books/:id', component: BookDetailComponent }
**Solution technique**:
**Concepts Angular utilisés**:

### Problème #6: Formulaire incomplet
**Nature du probleme**: Le formulaire d'ajout n'était pas implémenté dans le composant.
**Solution technique**: J’ai créé un FormGroup avec FormBuilder contenant les champs requis.
**Concepts Angular utilisés**: ReactiveFormsModule, FormBuilder, formGroup, formControlName

### Problème #7: Validations manquantes
**Nature du probleme**: Le formulaire acceptait des champs vides ou invalides.
**Solution technique**: J’ai ajouté des validateurs (required, minLength) et affiché les erreurs dans le template.
**Concepts Angular utilisés**: Validators, gestion d’erreurs dans le template, désactivation conditionnelle du bouton submit

### Problème #8: Navigation manquante
**Nature du probleme**: Certaines pages comme "Ajout de livre" ne propose aucun moyen de revenir à la page précédente.
**Solution technique**: J’ai ajouté un bouton "Retour" dans le composant AddBookComponent avec (click)="goBack()" et Location.back(), et ajouté du margin-top pour un meilleur affichage.
**Concepts Angular utilisés**: Location, gestion d’événements (click)

### Problème #9: Erreur dans la console
**Nature du probleme**: Une erreur Cannot read properties of undefined (reading 'title') apparaissait car book était accédé avant d’être défini.
**Solution technique**: J’ai entouré le bloc HTML avec *ngIf="book" pour ne l’afficher que quand les données sont disponibles.
**Concepts Angular utilisés**: Directive *ngIf, affichage conditionnel, gestion des données asynchrones.

### Problème #10: Directive non appliquée
**Nature du probleme**: La directive appHighlight n'était pas utilisée pour mettre en valeur les titres.
**Solution technique**: Directive appliquée aux titres avec [appHighlight]="book.isFavorite" dans book-list et book?.isFavorite ?? false dans book-detail.
**Concepts Angular utilisés**: Directive personnalisée (@Input, Renderer2), ngOnChanges

### Problème #11: Bouton non fonctionnel
**Nature du probleme**: Le bouton "Retour" ne faisait rien car la méthode goBack() était absente.
**Solution technique**: J’ai ajouté une méthode goBack() dans le composant en utilisant Location.back() pour revenir à la page précédente.
**Concepts Angular utilisés**: Gestionnaire d’événement (click), service Location

### Problème #12: Données non affichées
**Nature du probleme**: La variable utilisée dans le *ngIf du template book-list.component.html n'était pas les bonnes. Le composant tentait d’accéder à data, qui n’existait pas dans le contexte.
**Solution technique**: J’ai remplacé la condition data && data.length > 0 par books && books.length > 0, ce qui correspond bien au nom de la variable contenant la liste des livres.
**Concepts Angular utilisés**: *ngIf

### Problème #13: Descriptions trop longues
**Nature du probleme**: Les descriptions sont parfois trop longue, ce qui rend l'interface visuellement encombrée et peu lisible.
**Solution technique**: J’ai créé un pipe personnalisé truncate qui limite les descriptions à 20 caractères. Si le texte dépasse cette limite, il est tronqué et suivi d’un …. Je l'utilise dans le template book-list.components.html ligne 18.
**Concepts Angular utilisés**: Création d’un pipe personnalisé (@Pipe, PipeTransform), utilisation du pipe dans le template

### Problème #14: Retour utilisateur manquant
**Nature du probleme**: Aucune alerte ne confirmait si une action (favori, suppression) avait réussi ou échoué.
**Solution technique**: J’ai ajouté des alertes (alert(...)) dans les callbacks next et error des méthodes toggleFavorite et deleteBook.
**Concepts Angular utilisés**: utilisateur simple (window.alert), gestion des erreurs (callback error)

### Problème #15: Erreur d'affichage du titre
**Nature du probleme**: Les titres s'affichaient sans mise en forme (majuscules manquantes).
**Solution technique**: J’ai utilisé le pipe capitalize personnalisé.
**Concepts Angular utilisés**: Pipe personnalisé (@Pipe, transform)

### Problème #16: Directive incomplète
**Nature du probleme**: La directive highlight ne mettait le texte qu’en gras.
**Solution technique**: J’ai ajouté un fond jaune clair (background-color) quand appHighlight est à true.
**Concepts Angular utilisés**: Directive personnalisée, Renderer2, styles conditionnels, ngOnChanges

