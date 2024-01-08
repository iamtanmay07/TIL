# Submodule_error in repo
This happen bacause untracked .git file is added inside repo. 
So you need to tracked that .git file and remove that in order to make that submodule to directory. 

1. Remove the `.git` folder inside the untracked submodule:
```
rm -rf ./frontend/.git
```
   
3. Run `git rm --cached . -rf` inside the submodule:
```
git rm --cached . -rf
````

3. Add the changes in the parent or root folder and commit:
```
git add .
git commit -m "Remove submodule and integrate changes into frontend directory"
```

4. Push the changes to your remote repository:
```
git push origin main
```
