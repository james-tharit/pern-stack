echo "move to working directory..."
SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
cd "${SCRIPT_DIR}/.."

echo "STEP 1/4: create pgdata volume..."
docker volume create pgdata_prod &&

echo "STEP 2/4: run lint"
sh ./scripts/run-lint.sh &&

echo "STEP 3/4: run test"
sh ./scripts/run-test.sh &&

echo "STEP 4/4: run compose up"

docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
echo "production container is running at http://127.0.0.1"

