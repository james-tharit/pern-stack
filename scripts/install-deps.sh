echo "move to working directory..."
SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)

cd "${SCRIPT_DIR}/../frontend"
echo "Install dependencies for Client ..."

yarn install

cd "${SCRIPT_DIR}/../backend"
echo "Install dependencies for API..."

yarn install