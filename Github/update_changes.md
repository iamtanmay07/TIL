## how to update the changes on repo from the local env using command line tool 

To commit and push changes to GitHub from your local machine, you can follow these general steps using Git commands:

- for the frontend 
```
cd path/to/frontend
git add .
git commit -m "<your_commit_message>"
```
- for the backend
```
cd path/to/backend
git add .
git commit -m "<your_commit_message>"
```

- After these two steps, push the changes to the github from the parent folder,
```
git push origin main
```

## IMP POINT 2 
To reflect the changes made by someone else in your local environment, you'll need to fetch and merge those changes into your local branch. Here's a step-by-step guide:

1. Fetch the latest changes :
```
git fetch origin

```
2. Merge the Changes:
```
git merge origin/main
```
3. Resolve conflicts if any : if you have made any changes :)) 
4. Push your changes
```
git push origin main
```
