git pull

npm i

npm run build

echo "copying to server..."

scp -r dist/* ubuntu@155.248.232.163:/app/dist

echo "deployed to server!"
