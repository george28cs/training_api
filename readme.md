# Documentation  


## 1 Configure .env file:  

PORT=your_api_port
DB_HOST=your_db_host
DB_PASSWORD=your_db_password
DB_USER=your_db_user
DB_NAME=your_database
DB_PORT=your_db_port

## 2 Run the sql script 

/utils/data.sql

##3 Run the API

  use npm run start or npm run dev (nodemon)

## 3. API Usage:  

POST {your_api_server_url}/students

body data (json):
```json
{
  "first_name": "Nombre",
  "last_name": "Apellido",
  "group_id": 1
}

```

success result: 

```json
{
  "error": false,
  "status": 201,
  "body": {
      "first_name": "Jorge",
      "last_name": "Carrión",
      "group_id": 1
  }
}
```

GET {your_api_server_url}/students?start_date=1-1-2021

NOTE: You can use dd-mm-yyyy or dd/mm/yyyy format for start date

success result:

```json
{
    "error": false,
    "status": 200,
    "body": [
        {
            "id": 1,
            "first_name": "First Name",
            "last_name": "Last Name",
            "group_id": 1,
            "register_date": "2021-03-29T21:49:48.000Z",
            "name": "Grupo1"
        }
    ]
}
```
