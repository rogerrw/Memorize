CREATE SCHEMA bible;

CREATE TABLE bible.genres (
  id INTEGER,
  genre VARCHAR,
  PRIMARY KEY (id)
);
CREATE TABLE bible.key (
  id INTEGER,
  book_name VARCHAR,
  testament CHAR(2),
  genre INTEGER,
  PRIMARY KEY(id)
);

CREATE TABLE bible.abbreviations (
  id INTEGER,
  abbreviation VARCHAR,
  book_id INTEGER,
  preferred SMALLINT,
  PRIMARY KEY (id)
);

CREATE TABLE bible.kjv (
  verse_id SERIAL,
  book_id INTEGER,
  chapter INTEGER,
  verse_number INTEGER,
  verse_text TEXT,
  PRIMARY KEY(verse_id)
);

COPY bible.genres FROM '/full/path/to/data/bible_genres.csv' WITH (FORMAT csv);
COPY bible.key FROM '/full/path/to/data/bible_key.csv' WITH (FORMAT csv);
COPY bible.abbreviations FROM '/full/path/to/data/bible_abbreviations.csv' WITH (FORMAT csv);
COPY bible.kjv FROM '/full/path/to/data/kjv.csv' WITH (FORMAT csv);
