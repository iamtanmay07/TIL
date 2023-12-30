# steps to upload project securely 
1. open directory that contains project
2. initialise git using `git init`
3. check step 2 using `git status`
4. add `.gitignore` file the directory and write node_module in it inorder to ignoring node_modules files
5. `git add .`
6. `git commit -m "nodejs project first commit"`
7. `git remote add origin "repo_link"`

- adding ssh to private env
8. `eval "$(ssh-agent -s)"`
- adding ssh private key to our directory 
9. `ssh-add -K ~/.ssh/id_rsa`
- now add public ssh to github profile 
- check whether key ssh successful or not <br>
using `ssh -T git@github.com`

- now continuing 
10. `git push -u origin main`













## creating ssh key - one time needed only 
- `ssh-keygen -t rsa -b 4096 -C "tanmaypatel26704@gmail.com"`
