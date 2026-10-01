# Min Journal – Frontend

## Projektets innehåll:

Frontend är byggd med Angular och används för att skapa och visa personliga journalanteckningar även ytterligare vy för att visa statistik utifrån procentuell data kring mest förekommande känsla för alla sparade inlägg.

Användaren kan:

- Registrera ett konto
- Logga in
- Välja känsla/status
- Skriva och spara journalanteckningar
- Se tidigare journaler
- Se datum och tid för sina journaler
- Se statistik för ett valt datumintervall
- Logga ut

## Teknik

- Angular
- TypeScript
- HTML
- CSS

## Struktur

Frontend innehåller bland annat:

- `journal` – huvudsidan för journalen
- `login` – inloggning och registrering
- `services` – kommunikation med backend
- `app` – huvudkomponenten

### Sessionshantering

Vid lyckad inloggning sparas användarens userId och användarnamn i sessionStorage. Detta används för att koppla användaren till rätt journaler. Vid utloggning töms sessionStorage.

## Köra lokalt

### 1. Installera dependencies

````
bash
npm install
````

### 2. Starta frontend

````
ng serve
````

### 3. Öppna applikationen

Gå till:
````
http://localhost:4200
````
