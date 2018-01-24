echo '[INFO] Loading seed data...'

psql -U postgres -h localhost -p 5432 -d memorize -a -f ./bible.sql


echo '[INFO] Seed data loaded.'
