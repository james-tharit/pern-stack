echo "start development server..."

SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
cd "${SCRIPT_DIR}/../"
echo "move to working directory..."

echo "STEP 1/2: preparing persistent data"
echo "STEP 1/2: create pgdata volume..."
docker volume create pgdata

echo "STEP 2/3: compose up..."
docker compose up -d &&

echo "STEP 3/3: create database & mock data"
sh ./scripts/sample-data-pg.sh 