#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

echo "Building the project"
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public
# Add changes to git.
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"

# Come Back up to the Project Root
cd ..

echo "Clean old docs...."

rm -rf ./docs/

mv ./public/ ./docs/

git add -A

# Copy Public to Docs
git commit -m "move Public to docs"

# Push source and build repos.
git push 


