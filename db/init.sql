CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    email VARCHAR(120),
    city VARCHAR(80),
    contact VARCHAR(20),
    country VARCHAR(80)
);
