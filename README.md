# Kino - Plattform för Filmrecensioner & Nyheter

En modern webbapplikation byggd med Next.js och MongoDB för filmrecensioner och underhållningsnyheter.

## Funktioner

- Filmrecensioner och betyg
- Nyhetsbrevsprenumeration
- Modern, responsiv design
- RESTful API-endpoints
- MongoDB-integration

## Teknikstack

- Next.js 14 (App Router)
- TypeScript
- MongoDB med Mongoose
- Tailwind CSS
- ESLint

## Förutsättningar

- Node.js 18.x eller senare
- MongoDB-databas
- npm eller yarn som pakethanterare

## Kom igång

1. Klona repot:
```bash
git clone <repository-url>
cd kino
```

2. Installera beroenden:
```bash
npm install
```

3. Skapa en `.env.local`-fil i projektroten och lägg till din MongoDB-anslutningssträng:
```
MONGODB_URI=din_mongodb_connection_string
```

4. Starta utvecklingsservern:
```bash
npm run dev
```

5. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare för att se applikationen.

## API-endpoints

- `GET /api/reviews` - Hämta alla recensioner
- `POST /api/reviews` - Skapa en ny recension
- `DELETE /api/reviews/[id]` - Ta bort en recension
- `POST /api/newsletter/send` - Skicka nyhetsbrev
- `POST /api/newsletter/subscribe` - Prenumerera på nyhetsbrev
- `GET /api/newsletter/preview` - Förhandsgranska nyhetsbrev

## Projektstruktur

```
src/
├── app/                 # App router-sidor och API-endpoints
├── components/          # React-komponenter
├── lib/                 # Hjälpfunktioner och databasmodeller
│   ├── models/         # MongoDB-modeller
│   └── mongodb.ts      # Databasanslutning
└── styles/             # Globala stilar
```

## Bidra

1. Forka repot
2. Skapa en feature branch (`git checkout -b feature/ny-funktion`)
3. Committa dina ändringar (`git commit -m 'Lägg till ny funktion'`)
4. Pusha till din branch (`git push origin feature/ny-funktion`)
5. Skapa en Pull Request

## Licens

Detta projekt är licensierat under MIT-licensen – se LICENSE-filen för detaljer.
