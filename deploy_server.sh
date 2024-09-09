git pull

npm i

npm run build

echo "copying to server..."

scp -r dist/* andrew@168.138.79.201:/app/dist

echo "deployed to server!"
