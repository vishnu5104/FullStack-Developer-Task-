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
