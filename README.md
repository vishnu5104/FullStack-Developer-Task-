# Documentation

To Test This 

Type yarn to install all the required dependency

## Fighters Table

```sql
CREATE TABLE fighters (
  fighter_id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  nationality VARCHAR(255) NOT NULL,
  weight_class VARCHAR(255) NOT NULL,
  team VARCHAR(255),
  wins INTEGER DEFAULT 0,
  losses INTEGER DEFAULT 0,
  knockouts INTEGER DEFAULT 0,
  submissions INTEGER DEFAULT 0
);
```

## Events Table

```sql
CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  event_name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL
);
```
## Fights Table

```sql
CREATE TABLE fights (
  fight_id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(event_id),
  fighter1_id INTEGER REFERENCES fighters(fighter_id),
  fighter2_id INTEGER REFERENCES fighters(fighter_id),
  winner_id INTEGER REFERENCES fighters(fighter_id),
  outcome_description TEXT NOT NULL
);
```

## Entity Relations

### Fighter Entity (Table: fighters)
Attributes: fighter_id, first_name, last_name, nationality, weight_class, team, wins, losses, knockouts, submissions
Relationships:
One-to-Many with Fight Entity (fights_as_fighter1 and fights_as_fighter2)

### Event Entity (Table: events)
Attributes: event_id, event_name, location, date
Relationships:
One-to-Many with Fight Entity (fights)

### Fight Entity (Table: fights)
Attributes: fight_id, event_id, fighter1_id, fighter2_id, winner_id, outcome_description
Relationships:
Many-to-One with Event Entity (event)
Many-to-One with Fighter Entity (fighter1 and fighter2)
Many-to-One with Fighter Entity (winner)

### Ranking Entity (Table: rankings)
Attributes: ranking_id, weight_class, fighter_id, rank
Relationships:
Many-to-One with Fighter Entity (fighter)

## Architecture Diagram

![Diagram](https://github.com/vishnu5104/FullStack-Developer-Task-/assets/86919026/ee2fcf49-5e49-4fa9-adb4-564965c1c4b7)

## API Documentation
### Fighters API
Get All Fighters
Retrieve a list of all fighters.

### Create Fighter
## Create a new fighter.

Endpoint: POST /fighters

Request Body:
<pre>
{
  "first_name": "John",
  "last_name": "Doe",
  "nationality": "US",
  "weight_class": "Middleweight",
  "team": "Team A",
  "wins": 10,
  "losses": 5,
  "knockouts": 3,
  "submissions": 2
}
</pre>
Response:
<pre>
{
  "fighter_id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "nationality": "US",
  "weight_class": "Middleweight",
  "team": "Team A",
  "wins": 10,
  "losses": 5,
  "knockouts": 3,
  "submissions": 2
}
</pre>
Endpoint: GET /fighters

Response:

<pre>
[
  {
    "fighter_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "US",
    "weight_class": "Middleweight",
    "team": "Team A",
    "wins": 10,
    "losses": 5,
    "knockouts": 3,
    "submissions": 2
  }
]
</pre>

Get Fighter Details
Retrieve details of a specific fighter.

Endpoint: GET /fighters/:id

Response:
<pre>
{
  "fighter_id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "nationality": "US",
  "weight_class": "Middleweight",
  "team": "Team A",
  "wins": 10,
  "losses": 5,
  "knockouts": 3,
  "submissions": 2
}
</pre  >


Events API
Get Upcoming Events
Retrieve a list of upcoming events.

Endpoint: GET /events/upcoming
<pre>
Response:
[
  {
    "event_id": 1,
    "event_name": "UFC Fight Night",
    "location": "Las Vegas, NV",
    "date": "2023-08-30T18:00:00.000Z"
  },
]
</pre>
Create Event
Create a new event.

Endpoint: POST /events

Request Body:
<pre>
{
  "event_name": "UFC Fight Night",
  "location": "Las Vegas, NV",
  "date": "2023-08-30T18:00:00Z"
}
</pre>
Response:
<pre>
{
  "event_id": 1,
  "event_name": "UFC Fight Night",
  "location": "Las Vegas, NV",
  "date": "2023-08-30T18:00:00.000Z"
}
</pre>
