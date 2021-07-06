# Minimalist REST API

## Setup

```
$ npm install
```

You can optionally edit the `config.json` file:
- `port`: Port of the running server (default to `3000` if not specified)
- `ip`: IP address of the running server (default to local IP address if not specified)

## Run server

```
$ npm run start
```

The server will be reacheable at `http://[IP]:[PORT]/`

## Available endpoints

| Path         	  | Description                        |
| ----------------| -----------------------------------|
| `/steps`     	  | List of all steps                  |
| `/steps/:id` 	  | Step content                       |
| `/trainings`    | List of all trainings              |
| `/training/:id` | Training details and step contents |