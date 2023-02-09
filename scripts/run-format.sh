echo "move to working directory..."
SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)

cd "${SCRIPT_DIR}/../frontend"
echo "Running Client format ..."

npm format

cd "${SCRIPT_DIR}/../backend"
echo "Running Server format ..."

npm format
