# FoodDictionary

This is a comprehensive project structure for the FoodDictionary application.

## Project Structure

```plaintext
FoodDictionary/
│
├── backend/                  # Python Flask backend
│   ├── app/                  # Application code
│   │   ├── __init__.py       # Initialize Flask app
│   │   ├── models.py         # Database models
│   │   ├── routes.py         # REST API routes
│   │   ├── services.py       # Business logic and services
│   │   └── config.py         # Configuration settings
│   ├── requirements.txt       # Python dependencies
│   ├── Dockerfile             # Docker file for backend
│   └── .env                  # Environment variables
│
├── frontend/                # React Native mobile frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── screens/          # Application screens
│   │   ├── navigation/       # Navigation configuration
│   │   ├── App.js            # Main application file
│   │   └── index.js          # Entry point
│   ├── package.json          # Node.js dependencies
│   ├── App.json              # App configuration
│   └── .env                  # Environment variables
│
├── ml_service/              # ML service integration
│   ├── models/               # ML models
│   ├── inference.py          # Model inference logic
│   ├── requirements.txt      # Python dependencies
│   ├── Dockerfile            # Docker file for ML service
│   └── .env                  # Environment variables
│
└── database/                # Database schema
    ├── schema.sql            # SQL file for database schema
    └── seed_data.sql         # SQL file for seeding initial data
``` 

## Database Schema

- **Users**: Stores user information.
- **Foods**: Stores food item details.
- **Recipes**: Stores recipe collections.
- **Reviews**: Stores user reviews for food items.

```sql
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Foods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    ingredients TEXT,
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    food_id INTEGER REFERENCES Foods(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```