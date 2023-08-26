API Documentation
Fighters API
Get All Fighters
Retrieve a list of all fighters.

Endpoint: GET /fighters

Response:

<pre>
```
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
    "submissions": 2,
    "fights_as_fighter1": [],
    "fights_as_fighter2": []
  }
]
```
</pre>

Get Fighter Details
Retrieve details of a specific fighter.

Endpoint: GET /fighters/:id

Response:
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
  "submissions": 2,
  "fights_as_fighter1": [],
  "fights_as_fighter2": []
}
Create Fighter
Create a new fighter.

Endpoint: POST /fighters

Request Body:
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
Response:
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
  "submissions": 2,
  "fights_as_fighter1": [],
  "fights_as_fighter2": []
}
Events API
Get Upcoming Events
Retrieve a list of upcoming events.

Endpoint: GET /events/upcoming

Response:
[
  {
    "event_id": 1,
    "event_name": "UFC Fight Night",
    "location": "Las Vegas, NV",
    "date": "2023-08-30T18:00:00.000Z",

  },
]
Create Event
Create a new event.

Endpoint: POST /events

Request Body:
{
  "event_name": "UFC Fight Night",
  "location": "Las Vegas, NV",
  "date": "2023-08-30T18:00:00Z"
}
Response:
{
  "event_id": 1,
  "event_name": "UFC Fight Night",
  "location": "Las Vegas, NV",
  "date": "2023-08-30T18:00:00.000Z",
  
}
