.. sectnum::
  :depth: 2
#########################
PPE M2L Front-End Project
#########################

Projet de PPE pour le BTS SIO 2015, en lien avec le projet 'PPE M2L Back-End Project ``https://github.com/Erwhann-rouge/ppe-m2l-backend>`` .

But du projet :
===============
Réaliser le front-end d'un site web dans le contexte de la Maison des Ligues de Lorraine (MDL).
Le projet est réalisé grâce à AngularJS, un framework MVW. ``https://angularjs.org``
Il permettra de réaliser une interface utilisateur, communiquant avec une base de données via REST, d'afficher et de manipuler des informations relatives aux ligues de Lorainne.
De manière plus générale, ce projet vise à réaliser une interface de gestion/consultation, tant sur le plan utilisateur qu'administrateur.

Dependencies:
=============

* Une plateforme de développement Web (WAMP, MAMP...) ou un simulateur de webserver local (Grunt.npm) est nécessaire pour visualier le site web localement.

Installation:
=============
* Cloner le dépot : ``git clone https://github.com/Ekitchi/ppe-mdl-frontend``
* Copier le contenu dans le dossier qui contient les sources web dans votre plateforme de développement, généralement ``htdocs``.


Fonctionalités :
================

Site vitrine :
--------------
But :
^^^^^
Permet la navigation et la consultation de données.

Interface Administration :
--------------------------
But :
^^^^^
Permet l'ajout de données au site via une interface de type WYSIWYG.

Module de gestion des users :
-----------------------------
But :
^^^^^
Permet l'inscription et la gestion des utilisateurs, ainsi que de leurs droits
associés. Permet également à chaque utilisateur d'éditer les informations le
concernant.

Module d'administration de ligue :
----------------------------------
But :
^^^^^
Permet l'édition des infos relatives à une ligue par son administrateur dédié.


Module SOS partenaire :
-----------------------
But :
^^^^^
Permet aux joueurs ou équipes de planifier et organiser des rencontres
amicales.
