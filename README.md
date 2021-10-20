Aplikacja w której możesz organizowac swoje notatki i i współdzielic je z innymi uzytkownikami

stack technologiczny: React, react-router-dom, react-redux-firebase, redux-firestore, materialUi

## Applications features:

- aplikacja wykorzystuje firebase jako baze danych do przechowywania notatek, authentication,
- aplikacja posiada system rejestracji i logowania użytkowników
- mozliwośćć dodania współpracownika do notatki, dwóch użytkowników może współdzielić notatkę, kiedy jeden użytkownik edytuje notatkę drugi zobaczy u siebie zmiany

## Authentication:

- możliwość rejestracji nowych użytkowników i logowania
- poprzez firebase authentication, Sign-in method: Email/Password
- for lazy uzers:

  email: test@test.com  
   password: pass1234

  email: user1@gmail.com  
   password: pass1234

## State management:

- redux
- react-redux-firebase - reducery firebase i firestore nasłuchuja zmian w firebase,

## UI features:

- kozystałem z MUI
- powiadomienia SnackBar które informują użytkownika o prawidłowych lub nie operacjach na bazie danych,
