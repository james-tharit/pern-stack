export PGPASSWORD='mypassword'

SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
cd "${SCRIPT_DIR}/../"

until pg_isready -h localhost -p 5432 -U postgres
do
  echo "Waiting for postgres at: localhost"
  sleep 2;
done

psql -h localhost -p 5432 -U postgres -d postgres -a -f ./scripts/postgres/create_table_friends.sql &&
psql -h localhost -p 5432 -U postgres -d postgres -a -f ./scripts/postgres/insert_into_friends.sql

