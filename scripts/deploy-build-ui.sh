echo "move to working directory..."
SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
cd "${SCRIPT_DIR}/../frontend"

docker image build -t prod-react -f Dockerfile-prod .
docker container run -d -p 80:80 --name pern-ui prod-react
echo "image name: prod-react"
echo "production container is running at http://127.0.0.1"

