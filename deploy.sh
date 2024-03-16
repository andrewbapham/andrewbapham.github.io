echo "Checking out master..."

git checkout master

echo "Building site..."
npm run --silent build

echo "Pushing to branch gh-pages..."
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages

echo "Done!"
