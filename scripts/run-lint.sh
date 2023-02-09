echo "move to working directory..."
SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)

cd "${SCRIPT_DIR}/../frontend"
echo "Running Client lint ..."

npm lint

cd "${SCRIPT_DIR}/../backend"
echo "Running Server lint ..."

npm lint
