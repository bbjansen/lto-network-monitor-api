# LTO Network Monitor API
> Frontend API for [LTO Node Monitor](https://github.com/bbjansen/lto-network-monitor).

## Requirements
- Node.js v8+
- [knex.js]('https://knexjs.org) supported database.
- [LTO Node Monitor](https://github.com/bbjansen/lto-network-monitor)

## API Routes
- `/v1/nodes/all`

## .env example
```
APP_PORT=8676
DB_NAME=db
DB_FILE=db.sqlite3
LIMIT_TOTAL=1000
LIMIT_EXPIRE=1000
```
