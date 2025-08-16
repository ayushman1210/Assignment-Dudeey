-- Create Rider table
CREATE TABLE IF NOT EXISTS riders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating FLOAT NOT NULL,
    lat FLOAT NOT NULL,
    long FLOAT NOT NULL
);

-- INSERT INTO riders (name, rating, lat, long) VALUES
-- ('ayushman', 4.8, 28.6139, 77.2090),
-- ('samriddh', 4.5, 28.6140, 77.2100),
-- ('karan', 4.7, 28.6150, 77.2110),
-- ('kishan', 4.6, 28.6160, 77.2120),
-- ('kishor ', 4.9, 28.6170, 77.2130),
-- ('franz', 4.4, 28.6180, 77.2140),
-- ('goldi', 4.3, 28.6190, 77.2150),
-- ('haemraj', 4.2, 28.6200, 77.2160),
-- ('issac', 4.1, 28.6210, 77.2170),
-- ('jamal', 4.0, 28.6220, 77.2180);
